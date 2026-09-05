// ES — textos compartidos del chrome (header, footer, CTA fija, consentimiento).
const ui = {
  topbar: {
    tagline: 'Motos de Alemania — buscadas y revisadas en persona',
    ctaLabel: 'Inicie su búsqueda →',
    ctaHref: '/es/#zoekprofiel',
  },
  header: {
    brandAria: 'Rolvink Premium Imports — Inicio',
    menuOpenAria: 'Abrir menú',
    navAria: 'Menú principal',
    homeHref: '/es/',
    nav: [
      { href: '/es/motos/', label: 'Motos' },
      { href: '/es/tarifas/', label: 'Tarifas' },
      {
        href: '/es/como-trabajamos/',
        label: 'Coches',
        children: [
          { href: '/es/como-trabajamos/', label: 'Cómo trabajamos (coches)' },
          { href: '/es/ejemplo-importacion/', label: 'Ejemplo de importación' },
        ],
      },
      { href: '/es/sobre-nosotros/', label: 'Sobre nosotros' },
    ] as Array<{ href: string; label: string; children?: Array<{ href: string; label: string }> }>,
  },
  sticky: {
    regionAria: 'Acciones rápidas',
    whatsapp: 'WhatsApp',
    ctaLabel: 'Iniciar búsqueda',
    ctaHref: '/es/#zoekprofiel',
  },
  whatsappButton: {
    label: 'WhatsApp',
  },
  consent: {
    dialogAria: 'Consentimiento de cookies',
    textBefore:
      'Solo utilizamos cookies de análisis anónimas (Google Analytics, con IP anonimizada) para mejorar el sitio — sin rastreo publicitario. Más información en nuestra ',
    privacyLabel: 'política de privacidad (en neerlandés)',
    privacyHref: '/privacy',
    textAfter: '.',
    decline: 'Rechazar',
    accept: 'Aceptar',
  },
  footer: {
    blurb:
      'Un servicio personal de sourcing de motos de Alemania y, bajo petición, coches premium de Europa y Japón. Welsum, Países Bajos.',
    columns: [
      {
        title: 'Servicio',
        links: [
          { href: '/es/como-trabajamos/', label: 'Cómo trabajamos' },
          { href: '/es/motos/', label: 'Motos' },
          { href: '/es/tarifas/', label: 'Tarifas' },
          { href: '/es/ejemplo-importacion/', label: 'Ejemplo de importación' },
          { href: '/es/sobre-nosotros/', label: 'Sobre nosotros' },
          { href: '/es/contacto/', label: 'Contacto' },
        ],
      },
      {
        title: 'Idiomas',
        links: [
          { href: '/', label: 'Nederlands' },
          { href: '/en/', label: 'English' },
          { href: '/de/', label: 'Deutsch' },
          { href: '/fr/', label: 'Français' },
        ],
      },
    ],
    contactTitle: 'Contacto',
    addressLines: ['Veldweg 15, 8196 KS Welsum'],
    hours: 'Con cita previa',
    whatsappLabel: '+31 6 38 44 13 95 (WhatsApp)',
    privacy: { href: '/privacy', label: 'Privacidad (en neerlandés)' },
    voorwaarden: { href: '/voorwaarden', label: 'Condiciones (en neerlandés)' },
  },
  langSwitcher: {
    aria: 'Selección de idioma',
  },
};

export default ui;
