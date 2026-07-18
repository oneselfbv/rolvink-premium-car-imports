// Rolvink intern — gedeelde koopjes-statussen (bewaard/genegeerd/verkocht)
// Slaat statussen op als public/intern/data/statuses.json in de repo (commit via GitHub API).
// Vereist env var GITHUB_TOKEN (fine-grained PAT, Contents: Read+Write op deze repo).
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

  const token = process.env.GITHUB_TOKEN;
  if (!token) return res.status(500).json({ error: 'GITHUB_TOKEN ontbreekt in Vercel environment variables' });

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
  if (req.method !== 'POST') return res.status(405).end();

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch (_) { body = null; } }
  const changes = body && Array.isArray(body.changes) ? body.changes : null;
  if (!changes || !changes.length) return res.status(400).json({ error: 'changes[] vereist' });

  let applied = 0;
  for (const c of changes.slice(0, 200)) {
    const id = String(c.id || '').replace(/[^0-9]/g, '');
    if (!id || !ALLOWED.includes(c.status)) continue;
    if (c.status === '') { delete cur[id]; } else {
      cur[id] = {
        status: c.status,
        titel: String(c.titel || '').slice(0, 140),
        groep: String(c.groep || '').slice(0, 40),
        prijs: Number.isFinite(Number(c.prijs)) ? Number(c.prijs) : null,
        ts: new Date().toISOString(),
      };
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
  return res.status(200).json({ ok: true, applied, totaal: Object.keys(cur).length });
}
