# Rolvink Premium Car Imports — website

Astro-website voor [rolvinkpremiumcarimports.nl](https://rolvinkpremiumcarimports.nl).

Persoonlijke sourcing-service voor Duitse premium-auto's (BMW, Mercedes-Benz, Audi, Porsche) uit Europa en Japan.

## Stack

- **Framework**: [Astro 5](https://astro.build) (static site generation)
- **Styling**: pure CSS met design tokens via CSS variables (geen Tailwind)
- **Content**: Astro content collections (kennisbank, modellen, FAQ)
- **Deployment**: Vercel
- **Hosting**: Vercel edge network
- **Fonts**: Cinzel + Inter Tight + Inter + EB Garamond via Google Fonts CDN

## Lokaal draaien

```bash
npm install
npm run dev
```

Site draait op `http://localhost:4321`.

## Beschikbare commando's

| Commando | Wat |
|---|---|
| `npm run dev` | Start dev server met hot reload |
| `npm run build` | Bouw productie-versie naar `dist/` |
| `npm run preview` | Preview van productie-build lokaal |
| `npm run astro check` | TypeScript + content validation |

## Folderstructuur

```
astro-website/
├── astro.config.mjs        Astro configuration
├── tsconfig.json           TypeScript paths
├── public/                 Statische assets (favicon, robots.txt)
├── src/
│   ├── components/         Reusable .astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Logo.astro
│   │   ├── LogoHorizontal.astro
│   │   ├── WhatsAppButton.astro
│   │   ├── HeroSection.astro
│   │   ├── ObsessionSection.astro
│   │   ├── ServiceStrip.astro
│   │   ├── TiersSection.astro
│   │   ├── GradesSection.astro
│   │   ├── EditorialQuote.astro
│   │   └── CTASection.astro
│   ├── content/            Content collections (markdown/MDX)
│   │   ├── config.ts       Schema validatie
│   │   ├── kennisbank/     Pillar artikelen
│   │   ├── modellen/       Modelgidsen
│   │   └── faq/            FAQ entries
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/              Routes (file-based)
│   │   ├── index.astro
│   │   ├── werkwijze.astro
│   │   ├── over.astro
│   │   ├── contact.astro
│   │   ├── merk/
│   │   │   └── [brand].astro      Dynamic per merk
│   │   ├── bron/
│   │   │   └── [market].astro     Dynamic per bronmarkt
│   │   └── kennisbank/
│   │       └── index.astro
│   └── styles/
│       └── global.css       Design system + CSS variables
```

## Design system

Kleurpalet:
- Charcoal `#2A2A2A` (donkere schild + dark sections)
- Burnt copper `#B87333` (accent overal)
- Cream `#F5F1EA` (hoofd-achtergrond)
- Cream warm `#EFE9DD` (alternatieve achtergrond)
- Text primary `#1A1A1A`
- Text secondary `#4A4A4A`

Typografie:
- **Cinzel** — serif display (logo, brand wordmark)
- **Inter Tight** — sans-serif display (headlines)
- **Inter** — body
- **EB Garamond** — editorial italic kleur (subtiele accenten)

Section spacing (consistent door hele site):
- `--space-section-top: 80px`
- `--space-section-bottom: 40px`
- `--space-hero-top: 56px`

## Routing

- `/` → Homepage met alle secties
- `/werkwijze` → 8-staps werkwijze
- `/selectie` → Selectie hub (te bouwen)
- `/over` → Theo Rolvink intro
- `/contact` → WhatsApp + e-mail + bezoek
- `/kennisbank` → Kennisbank-hub
- `/kennisbank/[slug]` → Pillar artikel (dynamic, content collection)
- `/kennisbank/faq-japan` → FAQ Japan
- `/kennisbank/faq-duitsland` → FAQ Duitsland
- `/merk/bmw|mercedes-benz|audi|porsche` → Per-merk pagina
- `/bron/europa|japan` → Per-bronmarkt pagina

## Vercel deployment

1. Repository naar GitHub pushen
2. Vercel-account koppelen aan GitHub
3. Project importeren — Vercel detecteert Astro automatisch
4. Custom domain `rolvinkpremiumcarimports.nl` koppelen
5. Auto-deploys op elke `main` push

## SEO basis

- Schema.org `Organization` markup in `BaseLayout.astro`
- Open Graph + Twitter Card meta tags
- Sitemap automatisch gegenereerd via `@astrojs/sitemap`
- Canonical URLs per pagina
- Robots.txt in `public/`

## Volgende stappen (post-MVP)

- [ ] Cornerstone artikelen toevoegen aan `src/content/kennisbank/`
- [ ] FAQ-pagina's bouwen met FAQPage schema
- [ ] Klant intake-formulier (Formspree of vergelijkbaar)
- [ ] Plausible/Umami analytics integreren
- [ ] PWA manifest + service worker
- [ ] Eigen fotografie zodra eerste auto binnen is
- [ ] CarVector data-integratie (jaar 2)
