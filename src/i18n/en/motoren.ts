// EN — motorcycles page.
const motoren = {
  meta: {
    title: 'Import a BMW Motorcycle from Germany — Rolvink',
    description:
      'Personal sourcing of BMW motorcycles from Germany: from R 1250 GS to classic airhead. Sourcing, assessment, transport and full import handling. From €1.250.',
  },
  breadcrumbHome: 'Home',
  breadcrumbCurrent: 'Motorcycles',
  eyebrow: 'New — Motorcycles',
  h1Html: 'Import a BMW motorcycle from <span class="accent">Germany</span>.',
  heroLead:
    'A personal sourcing service for BMW motorcycles — from a fresh R 1250 GS to a classic airhead. We find the right bike in Germany, assess the model-specific weak points, and handle the entire import through to registration-ready delivery. Built on 35 years of BMW passion.',
  heroBtn: 'Schedule an intake conversation',
  heroLink: 'Sourcing from €1.250 — see pricing →',
  heroLinkHref: '/en/pricing/',
  ctaHref: '/en/contact/',
  introHeading: 'Why a BMW motorcycle from Germany?',
  introParagraphsHtml: [
    'Germany has the largest used-motorcycle market in Europe. On an average day, more than 14,000 BMW motorcycles are listed for sale — many times the supply in most other countries. That means far more choice in specification, colour and option level, and on recent models a price advantage that can run up to around €5.000 compared with a similar local example.',
    'And unlike an import from Japan, Germany is inside the EU: no import duties, no sea freight, no customs clearance. For delivery in the Netherlands, a bike is typically on Dutch plates within 1 to 3 weeks — the Dutch registration tax on motorcycles is low and simple, often just a few hundred euros on older models. For other EU countries we deliver the bike to your door with the complete paperwork and guide you through registration locally. Either way, the import stays manageable and the final price predictable.',
    'We are not a dealer with stock trying to sell you something. We search and buy <strong>exclusively on your specific commission</strong>, critically assess each example against the known weak points of that model, and stand on your side of the negotiation. We have known BMW for 35 years — we use that knowledge to find the right bike, not the first one.',
  ],
  usps: [
    { title: 'Huge selection', body: '14,000+ BMW motorcycles on the German market — a targeted choice of specification and colour.' },
    { title: 'Predictable costs', body: 'An honest on-the-road price up front and a transparent final invoice — no hidden margins.' },
    { title: 'Fast & within the EU', body: 'No import duties, no sea freight. Turnaround typically 1-3 weeks.' },
  ],
  stepsHeading: 'How we work',
  stepsIntro:
    'From first conversation to delivery, ready to register. Transparent, at your pace, and with transport and formalities fully handled by us.',
  stappen: [
    { num: '01', title: 'Intake conversation', body: 'No obligation — online, via WhatsApp or in Welsum. We map out your wishes, budget and timeline and determine which model and model year suit you. No sales pressure; if we have doubts, we say so honestly.' },
    { num: '02', title: 'Profile & targeted search', body: 'We record your search brief — model, specification, model year, mileage, colour, must-haves — and screen mobile.de and Kleinanzeigen.de against it. We only start actively after your approval.' },
    { num: '03', title: 'Candidates + assessment', body: 'You receive matching candidates with photos, our commentary and the model-specific points of attention (recalls, servo brake, oil pump). We never propose a bike without checking the weak points of that type — no action without your green light.' },
    { num: '04', title: 'Negotiation & purchase', body: 'After your approval we negotiate on your behalf, preferably with an inspection before purchase. We deliberately buy from private sellers or margin dealers so the VAT margin scheme can apply. The final price remains transparently reported.' },
    { num: '05', title: 'Transport from Germany', body: 'We collect your bike in Germany ourselves — insured, on our own two-bike trailer, so runs can be combined efficiently. Within the EU, so no sea freight and no customs; usually 2 to 5 days in transit. You do not have to organise anything.' },
    { num: '06', title: 'Paperwork & registration', body: 'For delivery in the Netherlands we handle the RDW inspection, the (low) motorcycle BPM declaration via the most favourable method, any EU-compliance adjustments and the registration — usually complete within 1 to 3 weeks. For other EU countries we prepare the full import paperwork and guide your local registration.' },
    { num: '07', title: 'Delivery', body: 'As soon as the paperwork is complete, we deliver the bike ready to ride — inspected, with all documents in order and an honest final invoice. At a location of your choice.' },
  ],
  inclHeading: 'What we arrange for you',
  inclusief: [
    'Weekly, targeted screening of mobile.de and Kleinanzeigen.de',
    'Assessment of condition, history and model-specific weak points before any bid',
    'Negotiation in your interest — preferably with an in-person inspection',
    'Insured transport on our own two-bike trailer',
    'Import paperwork and registration support — turnkey for the Netherlands (RDW, motorcycle BPM, plates)',
    'Honest on-the-road price up front, transparent final invoice',
  ],
  inclNoteHtml:
    'The purchase price, transport and any registration taxes and inspection costs are paid by you directly — transparently reported, with no margin for us. The sourcing service costs <strong>€1.250</strong> (phased: €500 retainer + €750 at delivery). See the <a href="/en/pricing/">pricing page</a>.',
  modellenHeading: 'Choose your model',
  cardLinkLabel: null as string | null,
  modellen: [
    { img: '/images/moto-r1300gs.jpg', title: 'R 1300 GS', tag: 'Adventure · 2023+', desc: 'The newest GS with the 1300 ShiftCam boxer. Biggest price advantage.' },
    { img: '/images/moto-r1250gs.jpg', title: 'R 1250 GS', tag: 'Adventure · 2019-2024', desc: 'The volume model. ShiftCam boxer, savings of around €5.000 from Germany.' },
    { img: '/images/moto-r1150gs.jpg', title: 'R 1150 GS', tag: 'Classic · 1999-2005', desc: 'The oilhead classic. Watch the Integral ABS servo brake.' },
    { img: '/images/moto-rninet.jpg', title: 'R nineT', tag: 'Modern classic', desc: 'The last air/oil-cooled boxer. A customising icon.' },
    { img: '/images/moto-s1000.jpg', title: 'S 1000 RR / XR / R', tag: 'Sport', desc: 'The four-cylinder superbike family: RR, adventure-sport XR and roadster R.' },
    { img: '/images/moto-k1600.jpg', title: 'K 1600 GT / GTL', tag: 'Luxury tourer', desc: 'The velvet six-cylinder. A niche with loyal buyers and strong value.' },
    { img: '/images/moto-f850gs.jpg', title: 'F 750 / 850 / 900 GS', tag: 'Mid-range', desc: 'The accessible twin-cylinder GS. Lighter and more affordable.' },
    { img: '/images/moto-airhead.jpg', title: 'R 80 / R 100 airhead', tag: 'Collector', desc: 'The air-cooled classics. The R 80 G/S invented the adventure genre.' },
  ] as Array<{ href?: string; img: string; title: string; tag: string; desc: string; alt?: string }>,
  gidsenHeading: null as string | null,
  gidsenLinkLabel: 'Read more →',
  gidsen: null as Array<{ href: string; title: string; desc: string }> | null,
  pageCta: {
    heading: 'Have a BMW motorcycle in mind?',
    body: 'Tell us the model, model year, specification and budget — we screen the German market, assess the condition, and handle the entire import with an honest on-the-road price up front. Motorcycle sourcing service: €1.250 (phased).',
    btn: 'Schedule an intake conversation',
    note: 'Response within 24 hours · No sales pressure',
  },
  howTo: {
    name: 'Importing a BMW motorcycle from Germany — how it works',
    description:
      'The complete motorcycle sourcing process of Rolvink Premium Imports, from intake to registration-ready delivery.',
  },
};

export default motoren;
