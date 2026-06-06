import type { APIRoute } from 'astro';

// On-demand gerenderd (server-side). De rest van de site blijft statisch.
export const prerender = false;

const TO_EMAIL = import.meta.env.LEAD_TO_EMAIL || 'contact@rolvinkpremiumcarimports.nl';
const FROM_EMAIL =
  import.meta.env.LEAD_FROM_EMAIL || 'Rolvink Zoekprofiel <onboarding@resend.dev>';
const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: unknown, max = 500): string {
  return String(v ?? '').replace(/\s+/g, ' ').trim().slice(0, max);
}
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const POST: APIRoute = async ({ request }) => {
  // 1. Parse — accepteer zowel JSON (fetch) als form-encoded (no-JS fallback).
  let raw: Record<string, unknown> = {};
  try {
    const ct = request.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      raw = await request.json();
    } else {
      const fd = await request.formData();
      raw = Object.fromEntries(fd.entries());
    }
  } catch {
    return json({ ok: false, error: 'Kon het formulier niet lezen. Probeer het opnieuw.' }, 400);
  }

  // 2. Honeypot — bots vullen het verborgen veld; stilletjes "ok" teruggeven.
  if (clean(raw.website)) {
    return json({ ok: true });
  }

  // 3. Velden + validatie.
  const naam = clean(raw.naam, 120);
  const email = clean(raw.email, 160);
  const telefoon = clean(raw.telefoon, 40);
  const merk = clean(raw.merk, 60);
  const model = clean(raw.model, 120);
  const budget = clean(raw.budget, 60);
  const bron = clean(raw.bron, 60);
  const termijn = clean(raw.termijn, 60);
  const bericht = clean(raw.bericht, 1500);

  if (!email && !telefoon) {
    return json(
      { ok: false, error: 'Laat een e-mailadres of telefoonnummer achter zodat we u kunnen bereiken.' },
      400,
    );
  }
  if (email && !EMAIL_RE.test(email)) {
    return json({ ok: false, error: 'Dat e-mailadres lijkt niet te kloppen. Controleer het even.' }, 400);
  }

  // 4. Mailinhoud.
  const rows: Array<[string, string]> = [
    ['Naam', naam],
    ['E-mail', email],
    ['Telefoon', telefoon],
    ['Merk', merk],
    ['Model / uitvoering', model],
    ['Budget (rijklaar)', budget],
    ['Bronmarkt', bron],
    ['Termijn', termijn],
    ['Toelichting', bericht],
  ].filter(([, v]) => v);

  const textBody =
    'Nieuw zoekprofiel via rolvinkpremiumcarimports.nl\n\n' +
    rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const htmlBody =
    '<h2 style="font-family:sans-serif">Nieuw zoekprofiel</h2>' +
    '<table style="font-family:sans-serif;border-collapse:collapse">' +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:4px 12px 4px 0;color:#6b6b6b">${escapeHtml(k)}</td>` +
          `<td style="padding:4px 0"><strong>${escapeHtml(v)}</strong></td></tr>`,
      )
      .join('') +
    '</table>';

  // 5. Verstuur via Resend. Zonder key: mock-modus (log + ok) zodat preview/test werkt.
  if (!RESEND_API_KEY) {
    console.warn('[zoekprofiel] RESEND_API_KEY ontbreekt — mock-modus, mail niet verzonden.\n' + textBody);
    return json({ ok: true, mock: true });
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email || undefined,
        subject: `Zoekprofiel — ${[merk, model].filter(Boolean).join(' ') || naam || 'nieuwe aanvraag'}`,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('[zoekprofiel] Resend-fout', res.status, detail);
      return json(
        { ok: false, error: 'Versturen lukte niet. Probeer het later opnieuw of stuur ons een WhatsApp.' },
        502,
      );
    }
  } catch (err) {
    console.error('[zoekprofiel] Resend-uitzondering', err);
    return json(
      { ok: false, error: 'Versturen lukte niet. Probeer het later opnieuw of stuur ons een WhatsApp.' },
      502,
    );
  }

  return json({ ok: true });
};

// Andere methodes netjes afwijzen.
export const ALL: APIRoute = () =>
  json({ ok: false, error: 'Methode niet toegestaan.' }, 405);
