// FR — textes partagés du « chrome » (header, footer, CTA sticky, consentement).
import type { UiDict } from "../nl/ui";

const ui: UiDict = {
  topbar: {
    tagline: "Sourcing personnalisé — Japon & Allemagne",
    ctaLabel: "Lancez votre recherche →",
    ctaHref: "/fr/#zoekprofiel",
  },
  header: {
    brandAria: "Rolvink Premium Imports — Accueil",
    menuOpenAria: "Ouvrir le menu",
    navAria: "Menu principal",
    homeHref: "/fr/",
    nav: [
      { href: "/fr/notre-methode/", label: "Notre méthode" },
      { href: "/fr/motos/", label: "Motos" },
      { href: "/fr/tarifs/", label: "Tarifs" },
      { href: "/fr/exemple-importation/", label: "Exemple d'importation" },
      { href: "/fr/a-propos/", label: "À propos" },
    ],
  },
  sticky: {
    regionAria: "Actions rapides",
    whatsapp: "WhatsApp",
    ctaLabel: "Lancer une recherche",
    ctaHref: "/fr/#zoekprofiel",
  },
  whatsappButton: {
    label: "WhatsApp",
  },
  consent: {
    dialogAria: "Consentement aux cookies",
    textBefore:
      "Nous utilisons uniquement des cookies d'analyse anonymes (Google Analytics, avec IP anonymisée) pour améliorer le site — aucun traçage publicitaire. Plus de détails dans notre ",
    privacyLabel: "déclaration de confidentialité (en néerlandais)",
    privacyHref: "/privacy",
    textAfter: ".",
    decline: "Refuser",
    accept: "Accepter",
  },
  footer: {
    blurb:
      "Un service de sourcing personnalisé de voitures et motos premium en provenance d'Allemagne, d'Europe et du Japon. Welsum, Pays-Bas.",
    columns: [
      {
        title: "Services",
        links: [
          { href: "/fr/notre-methode/", label: "Notre méthode" },
          { href: "/fr/motos/", label: "Motos" },
          { href: "/fr/tarifs/", label: "Tarifs" },
          { href: "/fr/exemple-importation/", label: "Exemple d'importation" },
          { href: "/fr/a-propos/", label: "À propos" },
          { href: "/fr/contact/", label: "Contact" },
        ],
      },
      {
        title: "Langues",
        links: [
          { href: "/", label: "Nederlands" },
          { href: "/en/", label: "English" },
          { href: "/de/", label: "Deutsch" },
          { href: "/es/", label: "Español" },
        ],
      },
    ],
    contactTitle: "Contact",
    addressLines: ["Veldweg 15, 8196 KS Welsum"],
    hours: "Sur rendez-vous",
    whatsappLabel: "+31 6 38 44 13 95 (WhatsApp)",
    privacy: { href: "/privacy", label: "Confidentialité (en néerlandais)" },
    voorwaarden: { href: "/voorwaarden", label: "Conditions générales (en néerlandais)" },
  },
  langSwitcher: {
    aria: "Choix de la langue",
  },
};

export default ui;
