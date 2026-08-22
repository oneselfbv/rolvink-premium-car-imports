// NL — gedeelde chrome-teksten (header, footer, sticky CTA, consent).
// LET OP: dit zijn de exacte strings die vóór de i18n-refactor hardcoded in de
// componenten stonden. Niet herformuleren — de NL-site moet identiek blijven renderen.
const ui = {
  topbar: {
    tagline: 'Motoren uit Duitsland — zelf gezocht en opgehaald',
    ctaLabel: 'Start uw zoekopdracht →',
    ctaHref: '/#zoekprofiel',
  },
  header: {
    brandAria: 'Rolvink Premium Imports — Home',
    menuOpenAria: 'Menu openen',
    navAria: 'Hoofdmenu',
    homeHref: '/',
    nav: [
      { href: '/motoren', label: 'Motoren' },
      { href: '/werkwijze', label: 'Werkwijze' },
      { href: '/selectie', label: 'Selectie' },
      { href: '/route-advies', label: 'Route-advies' },
      { href: '/bpm-calculator', label: 'BPM-tool' },
      { href: '/tarieven', label: 'Tarieven' },
      { href: '/kennisbank', label: 'Kennisbank' },
      { href: '/over', label: 'Over' },
    ],
  },
  sticky: {
    regionAria: 'Snelle acties',
    whatsapp: 'WhatsApp',
    ctaLabel: 'Start zoekopdracht',
    ctaHref: '/#zoekprofiel',
  },
  whatsappButton: {
    label: 'WhatsApp',
  },
  consent: {
    dialogAria: 'Cookie-toestemming',
    textBefore:
      'We gebruiken alleen anonieme analyse-cookies (Google Analytics, met geanonimiseerd IP) om de site te verbeteren — geen advertentie-tracking. Meer in onze ',
    privacyLabel: 'privacyverklaring',
    privacyHref: '/privacy',
    textAfter: '.',
    decline: 'Weigeren',
    accept: 'Accepteren',
  },
  footer: {
    blurb:
      "Een persoonlijke sourcing-service voor premium auto's en motoren uit Duitsland, Europa en Japan. Welsum, Nederland.",
    columns: [
      {
        title: 'Service',
        links: [
          { href: '/werkwijze', label: 'Werkwijze' },
          { href: '/selectie', label: 'Selectie' },
          { href: '/route-advies', label: 'Route-advies' },
          { href: '/bpm-calculator', label: 'BPM-tool' },
          { href: '/tarieven', label: 'Tarieven' },
          { href: '/voorbeeld-traject', label: 'Voorbeeld-traject' },
          { href: '/referenties', label: 'Referenties' },
          { href: '/over', label: 'Over Theo' },
        ],
      },
      {
        title: 'Kennis',
        links: [
          { href: '/kennisbank', label: 'Kennisbank' },
          { href: '/kennisbank/faq-japan', label: 'FAQ Japan' },
          { href: '/kennisbank/faq-duitsland', label: 'FAQ Duitsland' },
        ],
      },
    ],
    contactTitle: 'Contact',
    addressLines: ['Veldweg 15, 8196 KS Welsum'],
    hours: 'Op afspraak',
    whatsappLabel: '+31 6 38 44 13 95 (WhatsApp)',
    privacy: { href: '/privacy', label: 'Privacy' },
    voorwaarden: { href: '/voorwaarden', label: 'Voorwaarden' },
  },
  langSwitcher: {
    aria: 'Taalkeuze',
  },
};

export default ui;
export type UiDict = typeof ui;
