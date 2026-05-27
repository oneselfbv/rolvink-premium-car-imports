# Next Steps — Code pushen + Vercel live krijgen

Setup tot nu toe:

| Onderdeel | Status |
|---|---|
| GoDaddy domein `rolvinkpremiumcarimports.nl` | ✅ In jouw bezit |
| GitHub repo `oneselfbv/rolvink-premium-car-imports` (Private) | ✅ Aangemaakt |
| Vercel project geconfigureerd (Astro preset, Hobby tier) | ✅ Aangemaakt |
| Astro code in repo | ⏳ **Jouw actie** |
| Eerste live deploy | ⏳ Wacht op code |
| Domein gekoppeld | ⏳ Wacht op deploy |

Jouw drie stappen om alles live te krijgen:

## Stap 1 — Code naar GitHub pushen (5-10 min)

Volg [PUSH_TO_GITHUB.md](PUSH_TO_GITHUB.md). Kies Optie A (command-line) of Optie B (GitHub Desktop).

Verifieer daarna op https://github.com/oneselfbv/rolvink-premium-car-imports — alle bestanden zichtbaar.

## Stap 2 — Vercel deploy triggeren (1 min)

Zodra de code online staat:

1. Open https://vercel.com/oneselfbv-projects/rolvink-premium-car-imports
2. Vercel detecteert automatisch de nieuwe commit en start de eerste build
3. Klik op "Deployments" tab — je ziet de bouw lopen (~30 seconden voor Astro)
4. Bij success krijg je een URL als `rolvink-premium-car-imports.vercel.app`

Niet automatisch gestart? Klik manueel "Redeploy" rechtsboven op de project-pagina.

## Stap 3 — Domein koppelen (5-10 min)

In Vercel:

1. Open jouw project → Settings → Domains
2. Voeg toe: `rolvinkpremiumcarimports.nl`
3. Voeg ook toe: `www.rolvinkpremiumcarimports.nl` (Vercel doet auto-redirect)
4. Vercel laat 2 DNS-records zien die je moet toevoegen op GoDaddy:
   - Een `A`-record (`@` → IP)
   - Een `CNAME` (`www` → vercel)

In GoDaddy:

1. Ga naar je domein-portfolio → rolvinkpremiumcarimports.nl
2. Klik "DNS beheren"
3. Voeg de A en CNAME records toe die Vercel gaf
4. Save

DNS-propagatie duurt 5 min tot 2 uur. Vercel doet automatisch SSL-certificaat.

## Wat dan live is

- `https://rolvinkpremiumcarimports.nl` → homepage met alle 8 secties
- `/werkwijze` → 8-staps proces
- `/over` → Theo intro
- `/contact` → 3 contactmethodes
- `/kennisbank` → hub
- `/merk/bmw|mercedes-benz|audi|porsche` → per merk
- `/bron/europa|japan` → per markt

## Automatische workflow daarna

Elke wijziging die je lokaal pusht naar GitHub triggert automatisch een nieuwe Vercel deploy. Geen handmatige acties meer nodig.

```bash
# Maak wijziging in /astro-website/...
git add .
git commit -m "Beschrijving wijziging"
git push
# → Vercel deploy start automatisch
# → Live binnen 30-60 seconden
```

## Hulp nodig?

Geef een seintje zodra de code online staat — dan begeleid ik de Vercel-redeploy + domein-koppeling stap-voor-stap.

---

## Alternatief — als git lokaal niet werkt

Geen git geïnstalleerd of authenticatie-problemen? Drie opties:

1. **GitHub Desktop** ([download](https://desktop.github.com/)) — visueel, geen command-line
2. **Vercel CLI** — `npm install -g vercel` + `vercel deploy` (vereist Node.js)
3. **Manuele upload via GitHub web** — file-by-file, traag maar werkt zonder git

Bij alle drie eindigt het resultaat hetzelfde: code in repo, Vercel doet auto-deploy.
