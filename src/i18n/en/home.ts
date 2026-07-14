// EN — homepage sections.
const home = {
  meta: {
    title: 'Import a Car from Japan & Germany | Rolvink',
    description:
      'Personal sourcing of German premium cars and motorcycles. BMW, Mercedes-Benz, Audi, Porsche — from Europe and Japanese auctions, delivered across Europe.',
  },
  hero: {
    h1Html: 'Premium cars &amp; motorcycles,<br/>from Germany &amp; <span class="accent">Japan</span>.',
    lead: 'Personally sourced for those looking for the right example — not the first one.',
    ctaPrimary: 'Start your search',
    ctaPrimaryHref: '#zoekprofiel',
    ctaSecondary: 'or see how it works first',
    ctaSecondaryHref: '/en/how-it-works/',
    focusLabel: 'Our focus',
    brands: [
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
    heading: 'A journey from A to Z.',
    intro: 'Three disciplines, one streamlined process. For the full step-by-step plan, see how we work.',
    linkLabel: 'See the process in 8 steps',
    linkHref: '/en/how-it-works/',
    cards: [
      {
        num: '01',
        title: 'Sourcing',
        body: 'A targeted search across Japanese auctions and German premium dealers, driven by your exact profile. Weekly candidates with our expert commentary.',
        img: '/images/traject-auction.jpg',
        alt: 'BMW M3 (G80) head-on with yellow LED headlights — sourcing of premium specifications',
      },
      {
        num: '02',
        title: 'Delivery',
        body: 'Full import handling. In the Netherlands: turnkey, including BPM filing, RDW inspection and registration. Elsewhere in Europe: delivery to your door with the complete import paperwork and guidance for local registration.',
        img: '/images/traject-transport.jpg',
        alt: 'Porsche 911 on a car transport trailer — import and delivery',
      },
      {
        num: '03',
        title: 'Aftercare',
        body: 'Optional detailing by selected partners. Support with any warranty correspondence. A direct line — no call centre.',
        img: '/images/traject-handover.jpg',
        alt: 'Hand holding a Mercedes-Benz car key at handover',
      },
    ],
  },
  trust: {
    eyebrow: 'Trust',
    heading: 'Honest, verifiable, with open books.',
    intro:
      'We are a young service and would rather show an honest blank space than invented testimonials. What we can already show you: exactly how we work and what a project costs — down to the euro.',
    pijlers: [
      'Only grade 4+, no damage history',
      'Transparent landed cost before every bid',
      'We only bid with your explicit green light',
      'Personal — a direct line to Theo in Welsum',
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
      'A selection of the left-hand-drive candidates we tracked on Japanese auctions in recent weeks — with our indicative calculation from hammer price to Dutch on-the-road price. This is how we work, week after week; for other EU destinations we run the same maths for your country.',
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
      'We only bid with your explicit green light',
      'Only grade 4+ and no damage history',
      'A direct line to Theo — no call centre',
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
