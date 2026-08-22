// EN — homepage sections.
const home = {
  meta: {
    title: 'Import a Motorcycle from Germany | Rolvink',
    description:
      'We find your motorcycle in Germany, inspect it on site and collect it with our own trailer. Full import handling for Dutch registration; inspection and advice elsewhere.',
  },
  hero: {
    h1Html: 'Motorcycles imported<br/>from <span class="accent">Germany</span>.',
    lead: 'Found in person, inspected on site and collected with our own trailer — two bikes per run. Premium cars from Germany and Japan as well.',
    ctaPrimary: 'Start your search',
    ctaPrimaryHref: '#zoekprofiel',
    ctaSecondary: 'see the motorcycle service',
    ctaSecondaryHref: '/en/motorcycles/',
    ctaMoto: 'looking for a car? See how it works',
    ctaMotoHref: '/en/how-it-works/',
    focusLabel: 'Our focus',
    brands: [
      { label: 'BMW Motorrad', href: '/en/motorcycles/' },
      { label: 'BMW' },
      { label: 'Mercedes-Benz' },
      { label: 'Audi' },
      { label: 'Porsche' },
    ] as Array<{ label: string; href?: string }>,
    sourceLabel: 'We source from',
    sources: [
      { label: 'Europe' },
      { label: 'Japan' },
    ] as Array<{ label: string; href?: string }>,
  },
  obsession: {
    eyebrow: 'Our obsession',
    heading: 'Five principles.',
    lead: 'The right car does not find itself. It takes patience, knowledge, and the willingness to say "no" to what is almost right.',
    items: [
      {
        num: '01',
        title: 'No universal trading',
        body: 'We deliberately limit ourselves to four German premium brands — BMW, Mercedes-Benz, Audi and Porsche. Those we know inside out. Beyond them, we refer you elsewhere.',
      },
      {
        num: '02',
        title: 'No mass import',
        body: 'Our ambition is eight to twelve cars per year. No stock pressure, no quotas — every commission gets the attention it deserves.',
      },
      {
        num: '03',
        title: 'Only selected examples',
        body: 'Grade 4 or higher on the official inspection scale. No known damage or repair history. Low mileage. Full documentation. Below that line, no car makes the cut.',
      },
      {
        num: '04',
        title: 'Obsession with specs and history',
        body: 'We read every auction sheet character by character. We compare against historical price data. We know which specification is special and which is not.',
      },
      {
        num: '05',
        title: 'Rather wait for the right example',
        body: 'Finding a good car takes time. We do not bid when a candidate is not right — we wait for the next auction. And the next.',
      },
    ],
  },
  services: {
    label: 'Our service',
    heading: 'From A to Z.',
    intro: 'Three steps, one continuous process. The full step-by-step is on the motorcycle page.',
    linkLabel: 'See the motorcycle process',
    linkHref: '/en/motorcycles/',
    cards: [
      {
        num: '01',
        title: 'Finding',
        body: 'A targeted search on mobile.de and Kleinanzeigen.de, guided by your profile. You get candidates with our reading of them: what holds up, what does not, and what the bike is realistically worth.',
        img: '/images/moto-airhead.jpg',
        alt: 'Classic BMW boxer \u2014 targeted search of the German market',
      },
      {
        num: '02',
        title: 'Inspecting and collecting',
        body: 'Seen in person and checked against the weak points of that model. Then transport on our own insured trailer \u2014 two bikes per run, so the trip can be combined.',
        img: '/images/moto-r1250gs.jpg',
        alt: 'BMW R 1250 GS \u2014 on-site inspection and transport',
      },
      {
        num: '03',
        title: 'Registration and aftercare',
        body: 'Technical inspection, motorcycle tax filing and registration for Dutch plates. After that, a direct line to Theo \u2014 no call centre.',
        img: '/images/moto-rninet.jpg',
        alt: 'BMW R nineT \u2014 completed import',
      },
    ],
  },
  trust: {
    eyebrow: 'Trust',
    heading: 'Honest, verifiable, with open books.',
    intro:
      'We are a young service and would rather show an honest blank space than invented testimonials. What we can already show you: exactly how we work and what a project costs — down to the euro.',
    pijlers: [
      'A fixed fee up front \u2014 no margin on the purchase price',
      'We only bid once you give the explicit green light',
      'The model-specific weak points named before you buy',
      'Personal \u2014 a direct line to Theo in Welsum',
    ],
    caseLabels: [] as string[], // klantverhaal-kaarten verborgen tot er echte referenties zijn,
    caseAriaSuffix: 'coming soon',
    casePhotoLabel: 'Photo to follow',
    caseBadge: 'Coming soon',
    caseBody:
      'A completed project — car, photo, timeline and what we encountered along the way. We only publish it with the client\'s permission.',
    linkPrimaryLabel: 'See a fully calculated example import',
    linkPrimaryHref: '/en/example-import/',
    linkSecondaryLabel: 'Our references',
    linkSecondaryHref: undefined as string | undefined,
  },
  moto: {
    eyebrow: 'What we do',
    heading: 'BMW motorcycles from Germany, found and collected in person.',
    body:
      "More than 14,000 BMW motorcycles are for sale in Germany on any given day \u2014 from a fresh R 1250 GS to a classic airhead \u2014 with price gaps running up to around \u20ac 5,000. We find it, inspect it on site against the known weak points of that particular model, and collect it on our own trailer. Full import handling applies to Dutch registration; elsewhere we inspect and advise.",
    points: [
      'Full service from \u20ac 1,250 \u2014 paid in stages',
      'Our own insured transport, two bikes per run',
      'Inspection, paperwork and Dutch registration handled',
    ],
    linkLabel: 'See the motorcycle service',
    linkHref: '/en/motorcycles/',
    img: '/images/moto-hero.jpg',
    imgAlt: 'Open mountain road at golden hour \u2014 Rolvink motorcycle service',
  },
  tiers: {
    eyebrow: 'Our sources',
    heading: 'Two source markets, two disciplines.',
    intro:
      'Each market has its own strengths. Germany offers the full range within our four brands, quickly and with in-person inspection. Japan is the route for performance specifications, classics and low-mileage examples that have become rare in Europe. We advise in the first conversation which route suits your search.',
    de: {
      tag: 'From Germany',
      title: 'Full spectrum, quickly available',
      time: '2 — 4 weeks lead time',
      descHtml:
        'The German premium market offers the widest selection of BMW, Mercedes-Benz, Audi and Porsche — from daily driver to performance specification. <strong>We select only examples with complete service history</strong> and well-documented provenance. In-person inspection before bidding is standard.',
      imgAlt: 'Black Mercedes-Benz C-Class three-quarter front view on the road',
      bullets: [
        { bold: 'Full model spectrum', extra: ' within our 4 brands — from daily driver to AMG/M/RS' },
        { bold: 'Complete service history mandatory', extra: ' — no exceptions' },
        { bold: '', extra: 'Established dealers and independent inspection partners (TÜV, DEKRA, KÜS) in our network' },
        { bold: '', extra: 'In-person inspection before bidding' },
        { bold: '', extra: 'Fast import — no ocean transport' },
        { bold: '', extra: 'No import duties — EU single market' },
      ],
    },
    jp: {
      tag: 'From Japan',
      title: 'Performance, classics, low mileage',
      time: '12 — 14 weeks lead time',
      descHtml:
        'Japan holds a unique LHD niche: 911s across every generation, AMG and M specifications, RS models, and classics such as the 993, R107 and W124 Cosworth — often with very low mileage thanks to Japanese driving habits and the strict biennial Shaken inspection. Not the route for an ordinary daily — Germany covers that.',
      imgAlt: 'Porsche 911 on a Ginza street in Tokyo',
      bullets: [
        'Strong focus on 911, AMG, M-Performance, RS specifications and classics',
        'In our experience, typically far lower mileage than comparable EU listings',
        'No road salt across most of Japan — lower corrosion risk',
        'Official auction inspection (USS, JU, JAA) — grade 4 or higher',
        'Access to rare LHD specifications originally imported new into Japan',
      ],
    },
  },
  grades: {
    eyebrow: 'Japanese auction scale',
    heading: 'We only accept grade 4 or higher.',
    bodyHtml:
      'Every car at a Japanese auction is independently inspected. The scale runs from 1 to 5, with grade 6 or S for (near) new condition and letter codes (R, RA) for repair history. We source exclusively <strong>4, 4.5 or 5</strong> without R/RA codes — below that, the risk of hidden issues rises sharply.',
    linkLabel: undefined as string | undefined,
    linkHref: undefined as string | undefined,
    imgAlt: 'Close-up detail of a Mercedes-AMG wheel with carbon-ceramic brake caliper',
  },
  signals: {
    eyebrow: 'Market signals',
    heading: 'What we saw at auction recently.',
    intro:
      'A selection of the left-hand-drive candidates we tracked on Japanese auctions in recent weeks — with our indicative calculation from hammer price to Dutch on-the-road price. This is how we work; for other EU destinations we run the same maths for your country.',
    gradeTitle: 'Condition grade on the Japanese auction scale',
    gradePrefix: 'grade',
    dtHammer: 'Hammer price ≈',
    dtLanded: 'Landed NL',
    dtNl: 'NL market guide',
    peildatum: 'May 2026',
    disclaimerBefore: 'Figures indicative, reference date ',
    disclaimerAfterHtml:
      '. <strong>This is not current stock</strong> — it is the type of candidate we track and cost out for clients. Landed cost here covers fees, transport, import duties, VAT, Dutch BPM and registration for delivery in the Netherlands; for other EU countries the tax lines differ and we calculate them for your destination before any bid.',
    cta: 'Looking for something like this? Leave your search profile',
    ctaHref: '#zoekprofiel',
  },
  quote: {
    eyebrow: 'Our discipline',
    text:
      'A car is a long-term choice. We take the time to find the right example — not the first one. No quotas, no mass import, no pressure on the client. Instead: research, patience, and the willingness to say no to what is almost right.',
    name: 'Theo Rolvink',
    title: 'Founder — years of experience buying and selling cars and motorcycles',
  },
  zoekprofiel: {
    label: 'No rush, but sharp',
    headingHtml: 'Leave your <span class="accent">search profile</span>.',
    intro:
      'No specific example in mind yet? Tell us what you are looking for. As soon as a matching candidate appears at auction, we flag it — with the sheet, photos and our full cost calculation. No obligation, no sales pressure.',
    usps: [
      'We only bid once you give the explicit green light',
      'Checked against the weak points of that model',
      'A direct line to Theo \u2014 no call centre',
    ],
    honeypotLabel: 'Leave this field empty',
    requiredNoteHtml:
      'Leave at least your <strong>email or phone number</strong> — the rest helps us search more precisely.',
    optional: '(optional)',
    fields: {
      naam: { label: 'Your name', placeholder: 'First name' },
      email: { label: 'Email address', placeholder: 'name@example.com' },
      telefoon: { label: 'Phone', placeholder: '+31 6 12 34 56 78' },
      merk: { label: 'Brand', choose: 'Choose…', unsure: 'Not sure yet' },
      model: { label: 'Model / specification', placeholder: 'e.g. SL 500, M3, Cayman S' },
      budget: {
        label: 'Budget (on the road)',
        choose: 'Choose…',
        options: ['up to € 15.000', '€ 15.000 – 25.000', '€ 25.000 – 40.000', '€ 40.000 – 75.000', '€ 75.000+'],
      },
      bron: { label: 'Source market', none: 'No preference', options: ['Japan', 'Germany / Europe'] },
      termijn: {
        label: 'Timeline',
        choose: 'Choose…',
        options: ['As soon as possible', 'Within 3 months', 'This year', 'Just exploring'],
      },
    },
    submit: 'Send my search profile',
    or: 'or',
    waButton: 'Prefer WhatsApp directly',
    noteHtml:
      'We usually respond within 24 hours. Prefer to call or email? <a href="/en/contact/">Use the contact form</a>.',
    js: {
      emailInvalid: 'Please check the email address — format name@example.com.',
      contactRequired: 'Please leave an email address or phone number.',
      successHtml:
        '<strong>Thank you — your search profile has been received.</strong><br>We usually get in touch within 24 hours.',
      errorFallback: 'Sending failed.',
      errorRetryPrefix: ' You can try again or ',
      errorRetryLink: 'send a WhatsApp message',
      errorRetrySuffix: '.',
      unknownError: 'Unknown error',
      waIntro: 'Hi Theo, here is my search profile:',
      waLabels: {
        merk: 'Brand',
        model: 'Model/specification',
        budget: 'Budget',
        bron: 'Source market',
        termijn: 'Timeline',
        naam: 'Name',
        email: 'Email',
        telefoon: 'Phone',
      },
      waNone: 'no preference',
    },
  },
  autoblok: {
    eyebrow: 'Cars as well',
    heading: 'Premium cars from Germany and Japan.',
    body:
      'Alongside motorcycles we source left-hand-drive BMW, Mercedes-Benz, Audi and Porsche. From Germany within two to four weeks, or through the Japanese auctions for rare specifications and low mileage. Same method, same open books.',
    links: [
      { label: 'How the car import works', href: '/en/how-it-works/' },
      { label: 'Pricing', href: '/en/pricing/' },
      { label: 'Japanese auction grades explained', href: '/kennisbank/japanse-veiling-grades' },
    ],
  },

  cta: {
    label: 'The next step',
    headingHtml: 'Ready for your next<br/><span class="accent">acquisition</span>?',
    body: 'Two ways to begin: leave your search profile above, or schedule a no-obligation conversation first.',
    primary: 'Start your search',
    primaryHref: '#zoekprofiel',
    secondary: 'Prefer to talk it through first? Schedule a call →',
    secondaryHref: '/en/contact/',
  },
};

export default home;
