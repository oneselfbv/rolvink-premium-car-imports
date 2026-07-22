// Rolvink intern — gedeelde koopjes-statussen (bewaard/genegeerd/verkocht)
// PRIMAIR: Supabase-tabel public.koopjes_statuses (env: SUPABASE_URL + SUPABASE_SERVICE_KEY).
// FALLBACK: oude GitHub-commit-methode naar statuses.json (env: GITHUB_TOKEN) zolang
// de Supabase-env-vars nog niet in Vercel staan — deploy-volgorde is daardoor veilig.
// API-contract ongewijzigd: GET → {id:{status,titel,groep,prijs,ts}}, POST {changes:[...]}.
const REPO = 'oneselfbv/rolvink-premium-car-imports';
const PATH = 'public/intern/data/statuses.json';
const ALLOWED = ['bewaard', 'genegeerd', 'verkocht', ''];

export default async function handler(req, res) {
  const origin = req.headers.origin || '';
  if (/rolvinkpremiumcarimports\.nl$/.test(new URL(origin || 'https://x.invalid').hostname)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const changes = req.method === 'POST' ? parseChanges(req) : null;
  if (req.method === 'POST' && (!changes || !changes.length)) {
    return res.status(400).json({ error: 'changes[] vereist' });
  }
  if (req.method !== 'GET' && req.method !== 'POST') return res.status(405).end();

  const sbUrl = (process.env.SUPABASE_URL || '').replace(/\/+$/, '');
  const sbKey = process.env.SUPABASE_SERVICE_KEY;
  if (sbUrl && sbKey) return viaSupabase(req, res, changes, sbUrl, sbKey);
  return viaGithub(req, res, changes);
}

function parseChanges(req) {
  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch (_) { body = null; } }
  const raw = body && Array.isArray(body.changes) ? body.changes : [];
  const out = [];
  for (const c of raw.slice(0, 200)) {
    const id = String(c.id || '').replace(/[^0-9]/g, '');
    if (!id || !ALLOWED.includes(c.status)) continue;
    out.push({
      id,
      status: c.status,
      titel: String(c.titel || '').slice(0, 140),
      groep: String(c.groep || '').slice(0, 40),
      prijs: Number.isFinite(Number(c.prijs)) ? Number(c.prijs) : null,
    });
  }
  return out;
}

// ---------- Supabase (PostgREST, plain fetch — geen dependency) ----------
async function viaSupabase(req, res, changes, sbUrl, sbKey) {
  const sb = (path, init) => fetch(sbUrl + '/rest/v1/' + path, {
    ...init,
    headers: {
      apikey: sbKey,
      authorization: 'Bearer ' + sbKey,
      'content-type': 'application/json',
      ...(init && init.headers) || {},
    },
  });

  const load = async () => {
    const r = await sb('koopjes_statuses?select=id,status,titel,groep,prijs,ts&limit=10000');
    if (!r.ok) throw new Error('supabase read ' + r.status);
    const map = {};
    for (const row of await r.json()) {
      map[row.id] = { status: row.status, titel: row.titel, groep: row.groep, prijs: row.prijs, ts: row.ts };
    }
    return map;
  };

  try {
    if (req.method === 'GET') return res.status(200).json(await load());

    const now = new Date().toISOString();
    const upserts = changes.filter(c => c.status !== '')
      .map(c => ({ id: c.id, status: c.status, titel: c.titel, groep: c.groep, prijs: c.prijs, ts: now }));
    const deletes = changes.filter(c => c.status === '').map(c => c.id);

    if (upserts.length) {
      const w = await sb('koopjes_statuses?on_conflict=id', {
        method: 'POST',
        headers: { prefer: 'resolution=merge-duplicates,return=minimal' },
        body: JSON.stringify(upserts),
      });
      if (!w.ok) return res.status(502).json({ error: 'supabase write mislukt', code: w.status, detail: (await w.text()).slice(0, 300) });
    }
    if (deletes.length) {
      const d = await sb('koopjes_statuses?id=in.(' + deletes.join(',') + ')', { method: 'DELETE' });
      if (!d.ok) return res.status(502).json({ error: 'supabase delete mislukt', code: d.status });
    }
    const cur = await load();
    return res.status(200).json({ ok: true, applied: upserts.length + deletes.length, totaal: Object.keys(cur).length, via: 'supabase' });
  } catch (e) {
    return res.status(502).json({ error: 'supabase onbereikbaar', detail: String(e).slice(0, 300) });
  }
}

// ---------- GitHub-fallback (oude methode, ongewijzigd gedrag) ----------
async function viaGithub(req, res, changes) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return res.status(500).json({ error: 'geen SUPABASE_URL/SUPABASE_SERVICE_KEY en geen GITHUB_TOKEN in Vercel env' });

  const gh = (u, init) => fetch('https://api.github.com' + u, {
    ...init,
    headers: {
      authorization: 'Bearer ' + token,
      accept: 'application/vnd.github+json',
      'user-agent': 'rolvink-status',
      ...(init && init.headers) || {},
    },
  });

  let cur = {}, sha;
  const r = await gh(`/repos/${REPO}/contents/${PATH}?ref=main`);
  if (r.status === 200) {
    const j = await r.json();
    sha = j.sha;
    try { cur = JSON.parse(Buffer.from(j.content, 'base64').toString('utf8')); } catch (_) {}
  }

  if (req.method === 'GET') return res.status(200).json(cur);

  let applied = 0;
  for (const c of changes) {
    if (c.status === '') { delete cur[c.id]; } else {
      cur[c.id] = { status: c.status, titel: c.titel, groep: c.groep, prijs: c.prijs, ts: new Date().toISOString() };
    }
    applied++;
  }
  if (!applied) return res.status(400).json({ error: 'geen geldige wijzigingen' });

  const content = Buffer.from(JSON.stringify(cur, null, 1)).toString('base64');
  const w = await gh(`/repos/${REPO}/contents/${PATH}`, {
    method: 'PUT',
    body: JSON.stringify({ message: `intern: status-sync (${applied} wijziging${applied === 1 ? '' : 'en'})`, content, sha, branch: 'main' }),
  });
  if (!w.ok) return res.status(502).json({ error: 'github write mislukt', code: w.status });
  return res.status(200).json({ ok: true, applied, totaal: Object.keys(cur).length, via: 'github' });
}
