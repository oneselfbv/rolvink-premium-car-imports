// Centrale i18n-configuratie.
// NL is de hoofdtaal (root, geen prefix); en/de/es/fr onder een taalprefix.
export const LOCALES = ['nl', 'en', 'de', 'es', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'nl';

export const LOCALE_LABELS: Record<Locale, string> = {
  nl: 'NL',
  en: 'EN',
  de: 'DE',
  es: 'ES',
  fr: 'FR',
};

export const OG_LOCALES: Record<Locale, string> = {
  nl: 'nl_NL',
  en: 'en_GB',
  de: 'de_DE',
  es: 'es_ES',
  fr: 'fr_FR',
};

// Route-map: i18nKey -> pad per taal (mét trailing slash, conform site-config).
// Alleen pagina's die in alle talen bestaan krijgen een key (hreflang-reciprociteit).
export const ROUTES: Record<string, Record<Locale, string>> = {
  home: {
    nl: '/',
    en: '/en/',
    de: '/de/',
    es: '/es/',
    fr: '/fr/',
  },
  werkwijze: {
    nl: '/werkwijze/',
    en: '/en/how-it-works/',
    de: '/de/ablauf/',
    es: '/es/como-trabajamos/',
    fr: '/fr/notre-methode/',
  },
  motoren: {
    nl: '/motoren/',
    en: '/en/motorcycles/',
    de: '/de/motorraeder/',
    es: '/es/motos/',
    fr: '/fr/motos/',
  },
  tarieven: {
    nl: '/tarieven/',
    en: '/en/pricing/',
    de: '/de/preise/',
    es: '/es/tarifas/',
    fr: '/fr/tarifs/',
  },
  voorbeeld: {
    nl: '/voorbeeld-traject/',
    en: '/en/example-import/',
    de: '/de/beispiel-import/',
    es: '/es/ejemplo-importacion/',
    fr: '/fr/exemple-importation/',
  },
  over: {
    nl: '/over/',
    en: '/en/about/',
    de: '/de/ueber-uns/',
    es: '/es/sobre-nosotros/',
    fr: '/fr/a-propos/',
  },
  contact: {
    nl: '/contact/',
    en: '/en/contact/',
    de: '/de/kontakt/',
    es: '/es/contacto/',
    fr: '/fr/contact/',
  },
};

export function asLocale(value: string | undefined): Locale {
  return (LOCALES as readonly string[]).includes(value ?? '') ? (value as Locale) : DEFAULT_LOCALE;
}

/** Pad voor een i18nKey in een gegeven taal; valt terug op de home van die taal. */
export function routeFor(key: string | undefined, locale: Locale): string {
  if (key && ROUTES[key]) return ROUTES[key][locale];
  return ROUTES.home[locale];
}

/** Kies de juiste dict-variant voor een taal, met NL als vangnet. */
export function pick<T>(map: Partial<Record<Locale, T>> & { nl: T }, locale: string | undefined): T {
  const l = asLocale(locale);
  return map[l] ?? map.nl;
}
