// api/kascan.mjs — Kleinanzeigen deal-scan proxy voor de interne deal-scan.
//
// Waarom deze proxy bestaat:
// De deal-scan draait als cloud-taak (WebFetch, geen browser, pc mag offline).
// Apify direct aanroepen zou de APIFY-token in die trigger-sessie vereisen.
// In plaats daarvan houdt DEZE serverless function de token vast (Vercel env),
// draait de KA-actor en geeft schone, genormaliseerde JSON terug.
// De deal-scan doet dan enkel: WebFetch /api/kascan?url=... (geen secret).
//
// Zelfde patroon als api/status.mjs (Supabase-key in env, nooit in de client).
//
// ── Vercel env-vars ────────────────────────────────────────────────────────
// APIFY_TOKEN (verplicht) je Apify API-token — staat ALLEEN hier, nooit in chat/trigger
// APIFY_ACTOR (optioneel) actor-id, default "memo23~kleinanzeigen-search-cheerio"
// KASCAN_KEY (optioneel) als gezet, moet elke call ?key=<KASCAN_KEY> meesturen
// (voorkomt dat vreemden je Apify-credits opmaken)
//
// ── Aanroep ────────────────────────────────────────────────────────────────
// GET /api/kascan?url=<volledige KA-zoek-URL>[&max=25][&debug=1][&key=...]
// GET /api/kascan?model=r100gs[&max=25] (preset uit MODELS hieronder)
//
// ── Antwoord ─────────────────────────────────────────────────────────────
// { ok, via:"apify", actor, count, items:[ {id,title,price,km,year,plz,
// plaats,views,datum,link,img,url} ], sample? }
// debug=1 voegt "sample" toe = eerste RUW actor-item, zodat we de echte
// veldnamen zien en de mapping hieronder kunnen aanscherpen.

// Preset model → KA-zoek-URL (motorcategorie c305, nieuwste eerst).
// De trigger kan ook gewoon volledige URL's via ?url= sturen die hij al kent;
// deze map is puur gemak. Vul/wijzig vrij aan.
const MODELS = {
  r100gs: "https://www.kleinanzeigen.de/s-motorraeder-roller/bmw-r-100-gs/k0c305",
  r100gspd: "https://www.kleinanzeigen.de/s-motorraeder-roller/bmw-r-100-gs-pd/k0c305",
  r80gs: "https://www.kleinanzeigen.de/s-motorraeder-roller/bmw-r-80-gs/k0c305",
  r100rs: "https://www.kleinanzeigen.de/s-motorraeder-roller/bmw-r-100-rs/k0c305",
  r90s: "https://www.kleinanzeigen.de/s-motorraeder-roller/bmw-r-90-s/k0c305",
};

const ACTOR = process.env.APIFY_ACTOR || "memo23~kleinanzeigen-search-cheerio";

// ── helpers: tolerante veld-extractie ───────────────────────────────────────
const firstOf = (o, keys) => {
  for (const k of keys) {
    if (o && o[k] !== undefined && o[k] !== null && o[k] !== "") return o[k];
  }
  return undefined;
};

const toNum = (v) => {
  if (v === undefined || v === null) return null;
  const s = String(v).replace(/[^\d]/g, "");
  return s ? parseInt(s, 10) : null;
};

// Zoek in een advertentie naar een attribuut op (deel van) label. KA-scrapers
// leveren specs vaak als array [{name/label, value}] of als object.
const attrLookup = (item, needles) => {
  const buckets = [item.attributes, item.details, item.specifications, item.specs, item.properties];
  for (const b of buckets) {
    if (Array.isArray(b)) {
      for (const a of b) {
        const label = String(a?.name ?? a?.label ?? a?.key ?? "").toLowerCase();
        if (needles.some((n) => label.includes(n))) return a?.value ?? a?.val ?? a?.text;
      }
    } else if (b && typeof b === "object") {
      for (const [k, v] of Object.entries(b)) {
        if (needles.some((n) => k.toLowerCase().includes(n))) return v;
      }
    }
  }
  return undefined;
};

const adIdFromUrl = (u) => {
  const m = String(u || "").match(/\/(\d{9,})(?:[-/?]|$)/) || String(u || "").match(/(\d{9,})/);
  return m ? m[1] : null;
};

function normalize(item) {
  const link = firstOf(item, ["url", "link", "adUrl", "href", "detailUrl"]) || "";
  const km = toNum(firstOf(item, ["kilometers", "km", "mileage", "kilometerstand"]) ?? attrLookup(item, ["kilometer", "km"]));
  const yr = toNum(firstOf(item, ["year", "yearOfConstruction", "erstzulassung", "registration"]) ?? attrLookup(item, ["erstzulassung", "baujahr", "year"]));
  return {
    id: String(firstOf(item, ["id", "adId", "itemId", "listingId"]) ?? adIdFromUrl(link) ?? ""),
    title: firstOf(item, ["title", "name", "heading"]) ?? "",
    price: toNum(firstOf(item, ["price", "priceAmount", "priceInEuro", "priceInfo"]) ?? (item.price && item.price.amount)),
    km,
    year: yr && yr > 1900 && yr < 2100 ? yr : null,
    plz: String(firstOf(item, ["postalCode", "zip", "zipCode", "plz"]) ?? "").match(/\d{4,5}/)?.[0] ?? null,
    plaats: firstOf(item, ["locationName", "location", "city", "town", "ort"]) ?? "",
    views: toNum(firstOf(item, ["views", "viewCount", "numVisits", "visits"])),
    datum: firstOf(item, ["date", "postedAt", "createdAt", "creationDate", "postingDate"]) ?? "",
    img: firstOf(item, ["image", "mainImage", "thumbnail", "imageUrl"]) ??
      (Array.isArray(item.images) ? (item.images[0]?.url ?? item.images[0]) : undefined) ?? "",
    link,
  };
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const q = req.query || {};

  // optionele lichte beveiliging tegen credit-diefstal
  if (process.env.KASCAN_KEY && q.key !== process.env.KASCAN_KEY) {
    return res.status(401).json({ ok: false, error: "unauthorized" });
  }

  const token = process.env.APIFY_TOKEN;
  if (!token) {
    return res.status(500).json({ ok: false, error: "APIFY_TOKEN env-var niet gezet in Vercel" });
  }

  const url = q.url || MODELS[String(q.model || "").toLowerCase()];
  if (!url) {
    return res.status(400).json({
      ok: false,
      error: "geef ?url=<KA-zoek-URL> of ?model=<preset>",
      presets: Object.keys(MODELS),
    });
  }

  const max = Math.min(Math.max(parseInt(q.max, 10) || 25, 1), 100);

  // Superset-input: bevat zowel de memo23-stijl (startUrls/maxItems/proxy) als
  // de santamaria/gio21-stijl (searchUrls/maxResults/proxyConfiguration).
  // Actors negeren onbekende input-keys, dus dit werkt voor beide en maakt een
  // toekomstige actor-swap env-only (APIFY_ACTOR) zonder code-wijziging.
  const input = {
    // memo23-stijl
    startUrls: [{ url }],
    maxItems: max,
    proxy: { useApifyProxy: true, apifyProxyGroups: ["RESIDENTIAL"] },
    // santamaria / gio21-stijl (searchUrls = array of strings)
    searchUrls: [url],
    maxResults: max,
    maxResultsPerQuery: max,
    includeDetails: true,
    proxyConfiguration: { useApifyProxy: true },
  };

  const endpoint = `https://api.apify.com/v2/acts/${ACTOR}/run-sync-get-dataset-items?token=${encodeURIComponent(token)}`;

  try {
    const r = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    if (!r.ok) {
      const body = await r.text().catch(() => "");
      return res.status(502).json({ ok: false, error: `apify ${r.status}`, detail: body.slice(0, 500) });
    }
    const data = await r.json();
    const rows = Array.isArray(data) ? data : (data.items || []);
    const items = rows.map(normalize).filter((x) => x.id || x.link);

    const out = { ok: true, via: "apify", actor: ACTOR, count: items.length, items };
    if (q.debug === "1" && rows.length) out.sample = rows[0]; // ruwe eerste rij → echte veldnamen
    return res.status(200).json(out);
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e && e.message || e) });
  }
}
// api/kascan.mjs — Kleinanzeigen deal-scan proxy voor de interne deal-scan.
//
// Waarom deze proxy bestaat:
//   De deal-scan draait als cloud-taak (WebFetch, geen browser, pc mag offline).
//   Apify direct aanroepen zou de APIFY-token in die trigger-sessie vereisen.
//   In plaats daarvan houdt DEZE serverless function de token vast (Vercel env),
//   draait de KA-actor en geeft schone, genormaliseerde JSON terug.
//   De deal-scan doet dan enkel:  WebFetch  /api/kascan?url=...  (geen secret).
//
// Zelfde patroon als api/status.mjs (Supabase-key in env, nooit in de client).
//
// ── Vercel env-vars ────────────────────────────────────────────────────────
//   APIFY_TOKEN   (verplicht)  je Apify API-token — staat ALLEEN hier, nooit in chat/trigger
//   APIFY_ACTOR   (optioneel)  actor-id, default "memo23~kleinanzeigen-search-cheerio"
//   KASCAN_KEY    (optioneel)  als gezet, moet elke call ?key=<KASCAN_KEY> meesturen
//                              (voorkomt dat vreemden je Apify-credits opmaken)
//
// ── Aanroep ────────────────────────────────────────────────────────────────
//   GET /api/kascan?url=<volledige KA-zoek-URL>[&max=25][&debug=1][&key=...]
//   GET /api/kascan?model=r100gs[&max=25]           (preset uit MODELS hieronder)
//
// ── Antwoord ───────────────────────────────────────────────────────────────
//   { ok, via:"apify", actor, count, items:[ {id,title,price,km,year,plz,
//     plaats,views,datum,link,img,url} ], sample? }
//   debug=1 voegt "sample" toe = eerste RUW actor-item, zodat we de echte
//   veldnamen zien en de mapping hieronder kunnen aanscherpen.

// Preset model → KA-zoek-URL (motorcategorie c305, nieuwste eerst).
// De trigger kan ook gewoon volledige URL's via ?url= sturen die hij al kent;
// deze map is puur gemak. Vul/wijzig vrij aan.
const MODELS = {
  r100gs:   "https://www.kleinanzeigen.de/s-motorraeder-roller/bmw-r-100-gs/k0c305",
  r100gspd: "https://www.kleinanzeigen.de/s-motorraeder-roller/bmw-r-100-gs-pd/k0c305",
  r80gs:    "https://www.kleinanzeigen.de/s-motorraeder-roller/bmw-r-80-gs/k0c305",
  r100rs:   "https://www.kleinanzeigen.de/s-motorraeder-roller/bmw-r-100-rs/k0c305",
  r90s:     "https://www.kleinanzeigen.de/s-motorraeder-roller/bmw-r-90-s/k0c305",
};

const ACTOR = process.env.APIFY_ACTOR || "memo23~kleinanzeigen-search-cheerio";

// ── helpers: tolerante veld-extractie ───────────────────────────────────────
const firstOf = (o, keys) => {
  for (const k of keys) {
    if (o && o[k] !== undefined && o[k] !== null && o[k] !== "") return o[k];
  }
  return undefined;
};

const toNum = (v) => {
  if (v === undefined || v === null) return null;
  const s = String(v).replace(/[^\d]/g, "");
  return s ? parseInt(s, 10) : null;
};

// Zoek in een advertentie naar een attribuut op (deel van) label. KA-scrapers
// leveren specs vaak als array [{name/label, value}] of als object.
const attrLookup = (item, needles) => {
  const buckets = [item.attributes, item.details, item.specifications, item.specs, item.properties];
  for (const b of buckets) {
    if (Array.isArray(b)) {
      for (const a of b) {
        const label = String(a?.name ?? a?.label ?? a?.key ?? "").toLowerCase();
        if (needles.some((n) => label.includes(n))) return a?.value ?? a?.val ?? a?.text;
      }
    } else if (b && typeof b === "object") {
      for (const [k, v] of Object.entries(b)) {
        if (needles.some((n) => k.toLowerCase().includes(n))) return v;
      }
    }
  }
  return undefined;
};

const adIdFromUrl = (u) => {
  const m = String(u || "").match(/\/(\d{9,})(?:[-/?]|$)/) || String(u || "").match(/(\d{9,})/);
  return m ? m[1] : null;
};

function normalize(item) {
  const link = firstOf(item, ["url", "link", "adUrl", "href", "detailUrl"]) || "";
  const km = toNum(firstOf(item, ["kilometers", "km", "mileage", "kilometerstand"]) ?? attrLookup(item, ["kilometer", "km"]));
  const yr = toNum(firstOf(item, ["year", "yearOfConstruction", "erstzulassung", "registration"]) ?? attrLookup(item, ["erstzulassung", "baujahr", "year"]));
  return {
    id: String(firstOf(item, ["id", "adId", "itemId", "listingId"]) ?? adIdFromUrl(link) ?? ""),
    title: firstOf(item, ["title", "name", "heading"]) ?? "",
    price: toNum(firstOf(item, ["price", "priceAmount", "priceInEuro", "priceInfo"]) ?? (item.price && item.price.amount)),
    km,
    year: yr && yr > 1900 && yr < 2100 ? yr : null,
    plz: String(firstOf(item, ["postalCode", "zip", "zipCode", "plz"]) ?? "").match(/\d{4,5}/)?.[0] ?? null,
    plaats: firstOf(item, ["locationName", "location", "city", "town", "ort"]) ?? "",
    views: toNum(firstOf(item, ["views", "viewCount", "numVisits", "visits"])),
    datum: firstOf(item, ["date", "postedAt", "createdAt", "creationDate", "postingDate"]) ?? "",
    img: firstOf(item, ["image", "mainImage", "thumbnail", "imageUrl"]) ??
         (Array.isArray(item.images) ? (item.images[0]?.url ?? item.images[0]) : undefined) ?? "",
    link,
  };
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const q = req.query || {};

  // optionele lichte beveiliging tegen credit-diefstal
  if (process.env.KASCAN_KEY && q.key !== process.env.KASCAN_KEY) {
    return res.status(401).json({ ok: false, error: "unauthorized" });
  }

  const token = process.env.APIFY_TOKEN;
  if (!token) {
    return res.status(500).json({ ok: false, error: "APIFY_TOKEN env-var niet gezet in Vercel" });
  }

  const url = q.url || MODELS[String(q.model || "").toLowerCase()];
  if (!url) {
    return res.status(400).json({
      ok: false,
      error: "geef ?url=<KA-zoek-URL> of ?model=<preset>",
      presets: Object.keys(MODELS),
    });
  }

  const max = Math.min(Math.max(parseInt(q.max, 10) || 25, 1), 100);

  const input = {
    startUrls: [{ url }],
    maxItems: max,
    proxy: { useApifyProxy: true, apifyProxyGroups: ["RESIDENTIAL"] },
  };

  const endpoint = `https://api.apify.com/v2/acts/${ACTOR}/run-sync-get-dataset-items?token=${encodeURIComponent(token)}`;

  try {
    const r = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    if (!r.ok) {
      const body = await r.text().catch(() => "");
      return res.status(502).json({ ok: false, error: `apify ${r.status}`, detail: body.slice(0, 500) });
    }
    const data = await r.json();
    const rows = Array.isArray(data) ? data : (data.items || []);
    const items = rows.map(normalize).filter((x) => x.id || x.link);

    const out = { ok: true, via: "apify", actor: ACTOR, count: items.length, items };
    if (q.debug === "1" && rows.length) out.sample = rows[0]; // ruwe eerste rij → echte veldnamen
    return res.status(200).json(out);
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e && e.message || e) });
  }
}
