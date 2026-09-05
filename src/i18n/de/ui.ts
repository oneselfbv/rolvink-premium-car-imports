// DE — gemeinsame Chrome-Texte (Header, Footer, Sticky-CTA, Consent).
const ui = {
  topbar: {
    tagline: 'Wir kaufen BMW-Motorräder — Abholung mit eigenem Anhänger',
    ctaLabel: 'Suchauftrag starten →',
    ctaHref: '/de/#zoekprofiel',
  },
  header: {
    brandAria: 'Rolvink Premium Imports — Startseite',
    menuOpenAria: 'Menü öffnen',
    navAria: 'Hauptmenü',
    homeHref: '/de/',
    nav: [
      { href: '/de/motorraeder/', label: 'Motorräder' },
      { href: '/de/preise/', label: 'Preise' },
      {
        href: '/de/ablauf/',
        label: 'Autos',
        children: [
          { href: '/de/ablauf/', label: 'Ablauf Auto-Import' },
          { href: '/de/beispiel-import/', label: 'Beispiel-Import' },
        ],
      },
      { href: '/de/ueber-uns/', label: 'Über uns' },
    ] as Array<{ href: string; label: string; children?: Array<{ href: string; label: string }> }>,
  },
  sticky: {
    regionAria: 'Schnellaktionen',
    whatsapp: 'WhatsApp',
    ctaLabel: 'Suchauftrag starten',
    ctaHref: '/de/#zoekprofiel',
  },
  whatsappButton: {
    label: 'WhatsApp',
  },
  consent: {
    dialogAria: 'Cookie-Einwilligung',
    textBefore:
      'Wir verwenden ausschließlich anonyme Analyse-Cookies (Google Analytics, mit anonymisierter IP), um die Website zu verbessern — kein Werbe-Tracking. Mehr dazu in unserer ',
    privacyLabel: 'Datenschutzerklärung (Niederländisch)',
    privacyHref: '/privacy',
    textAfter: '.',
    decline: 'Ablehnen',
    accept: 'Akzeptieren',
  },
  footer: {
    blurb:
      'Ein persönlicher Sourcing-Service für Motorräder vom deutschen Markt und, auf Anfrage, Premium-Automobile aus Europa und Japan. Welsum, Niederlande.',
    columns: [
      {
        title: 'Service',
        links: [
          { href: '/de/ablauf/', label: 'Ablauf' },
          { href: '/de/motorraeder/', label: 'Motorräder' },
          { href: '/de/preise/', label: 'Preise' },
          { href: '/de/beispiel-import/', label: 'Beispiel-Import' },
          { href: '/de/ueber-uns/', label: 'Über uns' },
          { href: '/de/kontakt/', label: 'Kontakt' },
        ],
      },
      {
        title: 'Sprachen',
        links: [
          { href: '/', label: 'Nederlands' },
          { href: '/en/', label: 'English' },
          { href: '/es/', label: 'Español' },
          { href: '/fr/', label: 'Français' },
        ],
      },
    ],
    contactTitle: 'Kontakt',
    addressLines: ['Veldweg 15, 8196 KS Welsum'],
    hours: 'Nach Vereinbarung',
    whatsappLabel: '+31 6 38 44 13 95 (WhatsApp)',
    privacy: { href: '/privacy', label: 'Datenschutz (Niederländisch)' },
    voorwaarden: { href: '/voorwaarden', label: 'AGB (Niederländisch)' },
  },
  langSwitcher: {
    aria: 'Sprachauswahl',
  },
};

export default ui;
