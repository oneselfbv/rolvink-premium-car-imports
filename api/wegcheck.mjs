// Rolvink intern — "weg-check": kijkt of bekende Kleinanzeigen-advertenties nog bestaan.
//
// Waarom: een verdwenen advertentie is het beste signaal dat een motor in Duitsland weg is.
// Een ontbrekende FOTO is dat NIET — die kan ook ontbreken omdat de scan nog geen fotopad had.
// Daarom checken we de advertentiepagina zelf, niet het plaatje.
//
// Alleen een schone 404/410 (of een "niet gevonden"-pagina) telt als "weg". Blokkades (403/429)
// en storingen tellen als onbekend en schrijven niets weg. De hele run wordt overgeslagen als
// te veel checks onbekend zijn, zodat een IP-blokkade nooit je halve database wegzet.
//
// GET /api/wegcheck/          → roterend blok van 10 advertenties (past binnen de 10s-limiet)
// GET /api/wegcheck/?offset=10  → volgend blok, zodat je met meerdere aanroepen sneller rondkomt
// GET /api/wegcheck/?n=50     → grotere batch (max 80)
// GET /api/wegcheck/?dry=1    → alleen rapporteren, niets wegschrijven

const KOOPJES_RAW = 'https://raw.githubusercontent.com/oneselfbv/rolvink-premium-car-imports/main/public/intern/koopjes/index.html';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';
const RESOLVED = ['weg', 'verkocht', 'genegeerd'];

// Vercel: langere looptijd toestaan waar het plan dat ondersteunt.
export const config = { maxDuration: 60 };

export default async function handler(req, res) {
  const url = new URL(req.url, 'https://x.invalid');
  const n = Math.min(80, Math.max(1, Number(url.searchParams.get('n')) || 10));
  const dry = url.searchParams.get('dry') === '1';
  const base = 'https://' + (req.headers['x-forwarded-host'] || req.headers.host);

  try {
    const ads = await loadAds();
    if (!ads.length) return res.status(502).json({ error: 'geen advertenties uit koopjes-pagina' });

    const statuses = await jsonOrEmpty(base + '/api/status/');
    const open = ads.filter(a => a.link && !RESOLVED.includes((statuses[a.id] || {}).status));
    if (!open.length) return res.status(200).json({ bekeken: 0, weg: [], melding: 'niets open om te checken' });

    // Dagelijks roterend venster: zo ga je op termijn alles langs zonder een checklog op te slaan.
    const dag = Math.floor(Date.now() / 86400000);
    const offset = Math.max(0, Number(url.searchParams.get('offset')) || 0);
    const start = (dag * n + offset) % open.length;
    const batch = [];
    for (let i = 0; i < Math.min(n, open.length); i++) batch.push(open[(start + i) % open.length]);

    const results = [];
    for (const ad of batch) {
      const uitkomst = await checkAd(ad.link);
      results.push(Object.assign({}, ad, uitkomst));
      await sleep(120); // rustig aan tegen botdetectie
    }

    const weg = results.filter(r => r.staat === 'weg');
    const onbekend = results.filter(r => r.staat === 'onbekend');
    const geblokkeerd = onbekend.length / results.length > 0.4;

    let geschreven = 0;
    if (weg.length && !dry && !geblokkeerd) {
      const changes = weg.map(w => ({ id: w.id, status: 'weg', titel: w.titel, groep: w.groep, prijs: w.prijs }));
      const r = await fetch(base + '/api/status/', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ changes }),
      });
      if (r.ok) geschreven = changes.length;
    }

    return res.status(200).json({
      bekeken: results.length,
      open_totaal: open.length,
      weg: weg.map(w => ({ id: w.id, titel: w.titel, groep: w.groep, prijs: w.prijs, link: w.link })),
      nog_online: results.filter(r => r.staat === 'online').length,
      onbekend: onbekend.map(r => ({ id: r.id, code: r.code })),
      geschreven,
      overgeslagen: geblokkeerd ? 'te veel onbekende antwoorden — waarschijnlijk geblokkeerd, niets weggeschreven' : null,
      dry,
    });
  } catch (e) {
    return res.status(500).json({ error: String((e && e.message) || e) });
  }
}

// HEAD in plaats van GET: we hebben alleen de statuscode nodig, geen hele advertentiepagina.
// Dat scheelt een factor 5 in tijd en houdt de functie binnen de Vercel-tijdslimiet.
// Valt terug op GET als de server HEAD weigert (405/501).
async function checkAd(link) {
  const opts = {
    redirect: 'follow',
    headers: { 'user-agent': UA, 'accept-language': 'de-DE,de;q=0.9' },
    signal: AbortSignal.timeout(3500),
  };
  try {
    let r = await fetch(link, { ...opts, method: 'HEAD' });
    if (r.status === 405 || r.status === 501) r = await fetch(link, opts);
    if (r.status === 404 || r.status === 410) return { staat: 'weg', code: r.status };
    if (r.status === 200) return { staat: 'online', code: 200 };
    return { staat: 'onbekend', code: r.status };
  } catch (e) {
    return { staat: 'onbekend', code: e && e.name === 'TimeoutError' ? 'timeout' : 'fetch-fout' };
  }
}

async function loadAds() {
  const r = await fetch(KOOPJES_RAW, { headers: { 'user-agent': UA } });
  if (!r.ok) throw new Error('koopjes-pagina ' + r.status);
  const html = await r.text();
  const i = html.indexOf('const D=');
  if (i < 0) throw new Error('datablok niet gevonden');
  const data = JSON.parse(braceMatch(html, html.indexOf('{', i)));
  return (data.koopjes || [])
    .map(k => ({
      id: String(k.id || ''),
      titel: k.titel || '',
      groep: k.groep || '',
      prijs: Number.isFinite(k.prijs) ? k.prijs : null,
      link: k.link || '',
    }))
    .filter(k => k.id);
}

function braceMatch(s, start) {
  let depth = 0, inStr = false, esc = false;
  for (let i = start; i < s.length; i++) {
    const c = s[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') inStr = true;
    else if (c === '{') depth++;
    else if (c === '}' && --depth === 0) return s.slice(start, i + 1);
  }
  throw new Error('ongebalanceerde accolades');
}

async function jsonOrEmpty(u) {
  try {
    const r = await fetch(u);
    return r.ok ? await r.json() : {};
  } catch (_) {
    return {};
  }
}

const sleep = ms => new Promise(r => setTimeout(r, ms));
