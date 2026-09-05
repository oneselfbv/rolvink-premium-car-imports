// EN — shared chrome strings (header, footer, sticky CTA, consent).
const ui = {
  topbar: {
    tagline: 'Motorcycles from Germany — found and collected in person',
    ctaLabel: 'Start your search →',
    ctaHref: '/en/#zoekprofiel',
  },
  header: {
    brandAria: 'Rolvink Premium Imports — Home',
    menuOpenAria: 'Open menu',
    navAria: 'Main menu',
    homeHref: '/en/',
    nav: [
      { href: '/en/motorcycles/', label: 'Motorcycles' },
      { href: '/en/pricing/', label: 'Pricing' },
      {
        href: '/en/how-it-works/',
        label: 'Cars',
        children: [
          { href: '/en/how-it-works/', label: 'How the car import works' },
          { href: '/en/example-import/', label: 'Example import' },
        ],
      },
      { href: '/en/about/', label: 'About' },
    ] as Array<{ href: string; label: string; children?: Array<{ href: string; label: string }> }>,
  },
  sticky: {
    regionAria: 'Quick actions',
    whatsapp: 'WhatsApp',
    ctaLabel: 'Start your search',
    ctaHref: '/en/#zoekprofiel',
  },
  whatsappButton: {
    label: 'WhatsApp',
  },
  consent: {
    dialogAria: 'Cookie consent',
    textBefore:
      'We only use anonymous analytics cookies (Google Analytics, with anonymised IP) to improve the site — no advertising tracking. More in our ',
    privacyLabel: 'privacy statement (in Dutch)',
    privacyHref: '/privacy',
    textAfter: '.',
    decline: 'Decline',
    accept: 'Accept',
  },
  footer: {
    blurb:
      'A personal sourcing service for motorcycles from Germany and, on request, premium cars from Europe and Japan. Welsum, the Netherlands.',
    columns: [
      {
        title: 'Service',
        links: [
          { href: '/en/how-it-works/', label: 'How it works' },
          { href: '/en/motorcycles/', label: 'Motorcycles' },
          { href: '/en/pricing/', label: 'Pricing' },
          { href: '/en/example-import/', label: 'Example import' },
          { href: '/en/about/', label: 'About' },
          { href: '/en/contact/', label: 'Contact' },
        ],
      },
      {
        title: 'Languages',
        links: [
          { href: '/', label: 'Nederlands' },
          { href: '/de/', label: 'Deutsch' },
          { href: '/es/', label: 'Español' },
          { href: '/fr/', label: 'Français' },
        ],
      },
    ],
    contactTitle: 'Contact',
    addressLines: ['Veldweg 15, 8196 KS Welsum'],
    hours: 'By appointment',
    whatsappLabel: '+31 6 38 44 13 95 (WhatsApp)',
    privacy: { href: '/privacy', label: 'Privacy' },
    voorwaarden: { href: '/voorwaarden', label: 'Terms (Dutch)' },
  },
  langSwitcher: {
    aria: 'Language selection',
  },
};

export default ui;
