// NL — homepage-secties. Exacte strings uit de oorspronkelijke componenten;
// niet herformuleren, de NL-site moet identiek blijven renderen.
const home = {
  meta: {
    title: 'Auto importeren uit Japan & Duitsland | Rolvink',
    description:
      "Persoonlijke sourcing-service voor Duitse premium-auto's en -motoren. BMW, Mercedes-Benz, Audi, Porsche — uit Europa en Japan. Voor wie het juiste exemplaar zoekt.",
  },
  hero: {
    h1Html: 'Premium auto\'s &amp; motoren,<br/>uit Duitsland &amp; <span class="accent">Japan</span>.',
    lead: 'Persoonlijk gesourced voor wie het juiste exemplaar zoekt — niet het eerste.',
    ctaPrimary: 'Start uw zoekopdracht',
    ctaPrimaryHref: '#zoekprofiel',
    ctaSecondary: 'of bekijk eerst de werkwijze',
    ctaSecondaryHref: '/werkwijze',
    focusLabel: 'Onze focus',
    brands: [
      { label: 'BMW', href: '/merk/bmw' },
      { label: 'Mercedes-Benz', href: '/merk/mercedes-benz' },
      { label: 'Audi', href: '/merk/audi' },
      { label: 'Porsche', href: '/merk/porsche' },
    ] as Array<{ label: string; href?: string }>,
    sourceLabel: 'Wij sourcen uit',
    sources: [
      { label: 'Europa', href: '/bron/europa' },
      { label: 'Japan', href: '/bron/japan' },
    ] as Array<{ label: string; href?: string }>,
  },
  obsession: {
    eyebrow: 'Onze obsessie',
    heading: 'Vijf principes.',
    lead: 'De juiste auto vindt zich niet vanzelf. Het vraagt geduld, kennis, en de bereidheid om "nee" te zeggen tegen wat bijna goed is.',
    items: [
      {
        num: '01',
        title: 'Geen universele handel',
        body: 'Wij beperken ons bewust tot vier Duitse premium-merken — BMW, Mercedes-Benz, Audi en Porsche. Daar weten wij van. Daarbuiten verwijzen we door.',
      },
      {
        num: '02',
        title: 'Geen massa-import',
        body: "Onze ambitie is acht tot twaalf auto's per jaar. Geen voorraad-druk, geen quota — elke opdracht krijgt de aandacht die het verdient.",
      },
      {
        num: '03',
        title: 'Alleen geselecteerde uitvoeringen',
        body: 'Conditie 4 of hoger op de officiële inspectieschaal. Geen bekende schade- of herstelhistorie. Lage kilometerstanden. Volledige documentatie. Onder die grens komt geen auto.',
      },
      {
        num: '04',
        title: 'Obsessie voor specs en historie',
        body: 'Wij lezen elk auctie-sheet karakter voor karakter. Wij vergelijken met historische prijsdata. Wij weten welke uitvoering bijzonder is en welke niet.',
      },
      {
        num: '05',
        title: 'Liever wachten op het juiste exemplaar',
        body: 'Een goede auto vinden vergt tijd. Wij bieden niet als de kandidaat niet klopt — we wachten op de volgende veiling. En de volgende.',
      },
    ],
  },
  services: {
    label: 'Onze service',
    heading: 'Een traject van A tot Z.',
    intro: 'Drie disciplines, één gestroomlijnd traject. Voor het volledige stappenplan ziet u onze werkwijze.',
    linkLabel: 'Bekijk de werkwijze in 8 stappen',
    linkHref: '/werkwijze',
    cards: [
      {
        num: '01',
        title: 'Sourcing',
        body: 'Gerichte zoektocht op Japanse veilingen en bij Duitse premium-dealers, gestuurd door uw exacte profiel. Wekelijkse kandidaten met onze duiding.',
        img: '/images/traject-auction.jpg',
        alt: 'BMW M3 (G80) head-on met gele LED-koplampen — sourcing van premium-uitvoeringen',
      },
      {
        num: '02',
        title: 'Levering',
        body: 'Volledige import, BPM-aangifte, RDW-keuring en kentekenregistratie. Aflevering aan huis tot 200 km vanaf Welsum.',
        img: '/images/traject-transport.jpg',
        alt: 'Porsche 911 op autotransport-trailer — import en aflevering',
      },
      {
        num: '03',
        title: 'Nazorg',
        body: 'Optionele detailing door geselecteerde partners. Begeleiding bij eventuele garantie-correspondentie. Een directe lijn — geen call-center.',
        img: '/images/traject-handover.jpg',
        alt: 'Hand met Mercedes-Benz autosleutel bij sleuteloverdracht',
      },
    ],
  },
  trust: {
    eyebrow: 'Vertrouwen',
    heading: 'Eerlijk, verifieerbaar, met open boeken.',
    intro:
      'We zijn een jonge service en tonen liever een eerlijke witte plek dan verzonnen referenties. Wat we nú al laten zien: precies hoe we werken en wat een traject kost — tot op de euro.',
    pijlers: [
      'Alleen grade 4+, geen schade-historie',
      'Transparante landed-cost vóór elk bod',
      'Wij bieden pas met uw expliciete groen licht',
      'Persoonlijk — een directe lijn met Theo in Welsum',
    ],
    caseLabels: ['Eerste klantverhaal', 'Tweede klantverhaal', 'Derde klantverhaal'],
    caseAriaSuffix: 'volgt binnenkort',
    casePhotoLabel: 'Foto volgt',
    caseBadge: 'Binnenkort',
    caseBody:
      'Een afgerond traject — auto, foto, doorlooptijd en wat we onderweg tegenkwamen. We plaatsen het pas met toestemming van de klant.',
    linkPrimaryLabel: 'Bekijk een volledig doorgerekend voorbeeld-traject',
    linkPrimaryHref: '/voorbeeld-traject/',
    linkSecondaryLabel: 'Onze referenties',
    linkSecondaryHref: '/referenties/' as string | undefined,
  },
  tiers: {
    eyebrow: 'Onze bronnen',
    heading: 'Twee bronmarkten, twee disciplines.',
    intro:
      'Beide markten kennen hun eigen sterktes. Duitsland levert het volledige aanbod binnen onze vier merken, snel en met directe bezichtiging. Japan is de route voor performance-uitvoeringen, klassiekers en lage-km exemplaren die in Europa zeldzaam zijn geworden. We adviseren in het eerste gesprek welke route bij uw zoekopdracht past.',
    de: {
      tag: 'Uit Duitsland',
      title: 'Volledig spectrum, snel beschikbaar',
      time: '2 — 4 weken doorlooptijd',
      descHtml:
        'De Duitse premium-markt biedt het ruimste aanbod van BMW, Mercedes-Benz, Audi en Porsche — van daily driver tot performance-uitvoering. <strong>Wij selecteren uitsluitend exemplaren met volledige onderhoudshistorie</strong> en goed gedocumenteerde herkomst. Persoonlijke bezichtiging vóór bod is standaard.',
      imgAlt: 'Zwarte Mercedes-Benz C-Klasse driekwart vooraanzicht op weg',
      bullets: [
        { bold: 'Volledig modelspectrum', extra: ' binnen onze 4 merken — van daily driver tot AMG/M/RS' },
        { bold: 'Volledige onderhoudshistorie verplicht', extra: ' — geen uitzonderingen' },
        { bold: '', extra: 'Bekende dealers en onafhankelijke keuringspartners (TÜV, DEKRA, KÜS) in netwerk' },
        { bold: '', extra: 'Persoonlijke bezichtiging vóór bod' },
        { bold: '', extra: 'Snelle import — geen oceaan-transport' },
        { bold: '', extra: 'Geen invoerrechten — EU-binnenmarkt' },
      ],
    },
    jp: {
      tag: 'Uit Japan',
      title: 'Performance, klassiekers, lage km',
      time: '12 — 14 weken doorlooptijd',
      descHtml:
        'Japan kent een unieke LHD-niche: 911 in alle generaties, AMG en M-uitvoeringen, RS-modellen, en klassiekers als 993, R107 en W124 Cosworth — vaak met zeer lage kilometerstanden door Japanse rijgewoonten en de strenge tweejaarlijkse Shaken-keuring. Niet de route voor een doorsnee daily — daarvoor volstaat Duitsland.',
      imgAlt: 'Porsche 911 op Ginza-straat in Tokyo',
      bullets: [
        'Sterke focus op 911, AMG, M-Performance, RS-uitvoeringen en klassiekers',
        'In onze ervaring doorgaans aanzienlijk lagere kilometerstanden dan vergelijkbaar EU-aanbod',
        'In het grootste deel van Japan geen wegenzout — minder roestrisico',
        'Officiële veilinginspectie (USS, JU, JAA) — grade 4 of hoger',
        'Toegang tot zeldzame LHD-uitvoeringen die ooit als nieuw werden geïmporteerd',
      ],
    },
  },
  grades: {
    eyebrow: 'Japanse veilingschaal',
    heading: 'Wij accepteren alleen grade 4 of hoger.',
    bodyHtml:
      "Elke auto op een Japanse veiling wordt onafhankelijk gekeurd. De schaal loopt van 1 tot 5, met grade 6 of S voor (vrijwel) nieuwstaat en letter-codes (R, RA) voor reparatie-historie. Wij sourcen uitsluitend <strong>4, 4.5 of 5</strong> zonder R/RA-codes — daaronder beginnen risico's op verborgen issues sterk toe te nemen.",
    linkLabel: 'Lees de volledige grade-uitleg' as string | undefined,
    linkHref: '/kennisbank/japanse-veiling-grades' as string | undefined,
    imgAlt: 'Close-up detail van Mercedes-AMG velg met carbon-ceramic remklauw',
  },
  signals: {
    eyebrow: 'Marktsignalen',
    heading: 'Wat we recent op de veiling zagen.',
    intro:
      'Een greep uit de linksgestuurde kandidaten die we de afgelopen weken volgden op Japanse veilingen — met onze indicatieve doorrekening van hamerprijs naar Nederlandse straatprijs. Zo werken we, elke week opnieuw.',
    gradeTitle: 'Conditie-grade op de Japanse veilingschaal',
    gradePrefix: 'grade',
    dtHammer: 'Hamerprijs ≈',
    dtLanded: 'Landed NL',
    dtNl: 'NL-richtprijs',
    peildatum: 'mei 2026',
    disclaimerBefore: 'Cijfers indicatief, peildatum ',
    disclaimerAfterHtml:
      '. <strong>Dit is geen actueel aanbod</strong> — het is het type kandidaat dat wij voor opdrachtgevers volgen en doorrekenen. Landed cost omvat fees, transport, invoerrechten, BTW, BPM en kentekening; de definitieve BPM bepalen we per voertuig via de gunstigste van drie methoden.',
    cta: 'Zoekt u zoiets? Laat uw zoekprofiel achter',
    ctaHref: '#zoekprofiel',
  },
  quote: {
    eyebrow: 'Onze discipline',
    text:
      'Een auto is een keuze van lange adem. We nemen de tijd om het juiste exemplaar te vinden — niet het eerste. Geen quota, geen massa-import, geen druk op de klant. Wel: research, geduld, en de bereidheid om nee te zeggen tegen wat bijna goed is.',
    name: 'Theo Rolvink',
    title: "Oprichter — jarenlange ervaring in de in- en verkoop van auto's en motoren",
  },
  zoekprofiel: {
    label: 'Geen haast, wel scherp',
    headingHtml: 'Laat uw <span class="accent">zoekprofiel</span> achter.',
    intro:
      "Nog geen exemplaar op het oog? Vertel ons wat u zoekt. Zodra er een passende kandidaat op een veiling verschijnt, signaleren wij het — met sheet, foto's en onze doorrekening. Vrijblijvend, geen verkoopdruk.",
    usps: [
      'Wij bieden pas met uw expliciete groen licht',
      'Alleen grade 4+ en geen schade-historie',
      'Een directe lijn met Theo — geen call-center',
    ],
    honeypotLabel: 'Laat dit veld leeg',
    requiredNoteHtml:
      'Laat minstens uw <strong>e-mail of telefoon</strong> achter — de rest helpt ons scherper zoeken.',
    optional: '(optioneel)',
    fields: {
      naam: { label: 'Uw naam', placeholder: 'Voornaam' },
      email: { label: 'E-mailadres', placeholder: 'naam@voorbeeld.nl' },
      telefoon: { label: 'Telefoon', placeholder: '06 12 34 56 78' },
      merk: { label: 'Merk', choose: 'Kies…', unsure: 'Nog niet zeker' },
      model: { label: 'Model / uitvoering', placeholder: 'bv. SL 500, M3, Cayman S' },
      budget: {
        label: 'Budget (rijklaar)',
        choose: 'Kies…',
        options: ['tot € 15.000', '€ 15.000 – 25.000', '€ 25.000 – 40.000', '€ 40.000 – 75.000', '€ 75.000+'],
      },
      bron: { label: 'Bronmarkt', none: 'Geen voorkeur', options: ['Japan', 'Duitsland / Europa'] },
      termijn: {
        label: 'Termijn',
        choose: 'Kies…',
        options: ['Zo snel mogelijk', 'Binnen 3 maanden', 'Dit jaar', 'Oriënterend'],
      },
    },
    submit: 'Stuur mijn zoekprofiel',
    or: 'of',
    waButton: 'Liever direct via WhatsApp',
    noteHtml:
      'Wij reageren meestal binnen 24 uur. Liever bellen of mailen? <a href="/contact/">Via het contactformulier</a>.',
    js: {
      emailInvalid: 'Controleer het e-mailadres — formaat naam@voorbeeld.nl.',
      contactRequired: 'Laat een e-mailadres of telefoonnummer achter.',
      successHtml:
        '<strong>Bedankt — uw zoekprofiel is binnen.</strong><br>We nemen meestal binnen 24 uur contact met u op.',
      errorFallback: 'Versturen lukte niet.',
      errorRetryPrefix: ' U kunt het opnieuw proberen of ',
      errorRetryLink: 'een WhatsApp sturen',
      errorRetrySuffix: '.',
      unknownError: 'Onbekende fout',
      waIntro: 'Hoi Theo, hier is mijn zoekprofiel:',
      waLabels: {
        merk: 'Merk',
        model: 'Model/uitvoering',
        budget: 'Budget',
        bron: 'Bronmarkt',
        termijn: 'Termijn',
        naam: 'Naam',
        email: 'E-mail',
        telefoon: 'Telefoon',
      },
      waNone: 'geen voorkeur',
    },
  },
  cta: {
    label: 'De volgende stap',
    headingHtml: 'Klaar voor uw volgende<br/><span class="accent">aanwinst</span>?',
    body: 'Twee manieren om te beginnen: laat hierboven uw zoekprofiel achter, of plan eerst een vrijblijvend gesprek.',
    primary: 'Start uw zoekopdracht',
    primaryHref: '#zoekprofiel',
    secondary: 'Liever eerst overleggen? Plan een gesprek →',
    secondaryHref: '/contact/',
  },
};

export default home;
export type HomeDict = typeof home;
