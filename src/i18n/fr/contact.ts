// FR — page contact.
import type { ContactDict } from "../nl/contact";

const contact: ContactDict = {
  meta: {
    title: "Contact — Rolvink Premium Imports",
    description:
      "Remplissez le formulaire ou envoyez directement un WhatsApp / e-mail. Entretien de découverte sans engagement autour de votre recherche.",
  },
  eyebrow: "Contact",
  h1: "Une conversation commence ici.",
  lead: "Un entretien initial sans engagement sur ce que vous cherchez, notre façon de travailler, et ce qui est réaliste en délais et en coûts. Aucune pression commerciale — juste une conversation posée.",
  successTitle: "Merci pour votre message.",
  successBody:
    "Nous vous contactons sous 24 heures — souvent plus vite. Consultez aussi votre boîte de réception pour l'accusé de réception.",
  formHeading: "Formulaire de prise de contact",
  formIntroHtml:
    'Dites-nous ce que vous cherchez. Plus c\'est concret, plus notre réponse sera précise. Les champs marqués <span aria-hidden="true">*</span> sont obligatoires.',
  emailSubject: "Nouvelle demande — Rolvink Premium Imports",
  fields: {
    naam: "Votre nom",
    email: "Adresse e-mail",
    telefoon: "Téléphone (facultatif)",
    merk: "Marque",
    merkChoose: "Choisissez une marque",
    merkUnsure: "Pas encore décidé",
    model: "Modèle ou version (facultatif)",
    modelPlaceholder: "Par exemple : Classe E W212 350 CDI Avantgarde 4Matic",
    budget: "Budget (indication)",
    budgetChoose: "Choisissez une fourchette",
    budgetOptions: [
      { value: "onder-20k", label: "Moins de €20.000" },
      { value: "20-40k", label: "€20.000 — €40.000" },
      { value: "40-70k", label: "€40.000 — €70.000" },
      { value: "70-100k", label: "€70.000 — €100.000" },
      { value: "boven-100k", label: "Plus de €100.000" },
      { value: "nog-niet-zeker", label: "Pas encore décidé" },
    ],
    tijdslijn: "Quand voulez-vous rouler ?",
    tijdslijnChoose: "Choisissez un horizon",
    tijdslijnOptions: [
      { value: "zsm", label: "Le plus vite possible" },
      { value: "1-3-mnd", label: "Dans 1 à 3 mois" },
      { value: "3-6-mnd", label: "Dans 3 à 6 mois" },
      { value: "geen-haast", label: "Pas pressé — le bon exemplaire avant tout" },
    ],
    route: "Filière préférée",
    routeOptions: [
      { value: "geen-voorkeur", label: "Sans préférence — conseillez-moi" },
      { value: "europa", label: "Europe (Allemagne) — délais plus courts" },
      { value: "japan", label: "Japon — faibles km, versions rares" },
      { value: "beide", label: "Les deux filières ouvertes" },
    ],
    toelichting: "Précisions complémentaires (facultatif)",
    toelichtingPlaceholder:
      "Souhaits spécifiques, critères rédhibitoires, expériences passées, ou questions sur notre méthode.",
  },
  privacyHtml:
    'J\'accepte le traitement de mes données conformément à la <a href="/privacy">déclaration de confidentialité (en néerlandais)</a>. <span class="req" aria-hidden="true">*</span>',
  submitLabel: "Envoyer ma demande",
  formFooterNote: "Nous répondons sous 24 heures. Pas d'e-mails de relance automatiques ni de listes marketing.",
  altHeading: "Vous préférez un contact direct ?",
  whatsapp: {
    heading: "WhatsApp",
    body: "Le moyen le plus rapide d'entrer en contact. Envoyez votre question, je réponds sous 24 heures.",
    buttonLabel: "Démarrer la conversation",
  },
  email: {
    heading: "E-mail",
    body: "Pour les questions détaillées ou les documents en pièce jointe.",
    buttonLabel: "Écrire à Theo",
  },
  visit: {
    heading: "Visite",
    body: "Sur rendez-vous à Welsum, aux Pays-Bas (commune d'Olst-Wijhe). Réservez au moins 48 heures à l'avance.",
    addressLines: ["Veldweg 15", "8196 KS Welsum", "Pays-Bas"],
  },
};

export default contact;
