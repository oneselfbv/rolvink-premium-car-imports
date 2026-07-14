// FR — page tarifs, localisée pour les acheteurs francophones (France / Belgique).
import type { TarievenDict } from "../nl/tarieven";

const tarieven: TarievenDict = {
  meta: {
    title: "Tarifs — sourcing voitures & motos | Rolvink",
    description:
      "Tarifs transparents : sourcing Allemagne dès €2.250, Japon €3.250, et la nouvelle prestation moto dès €1.250 — avec paiement en phases.",
  },
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "Tarifs",
  eyebrow: "Tarifs",
  h1Html: `Des prix transparents <span class="accent">avant</span> de signer.`,
  lead: "Nous ne prenons aucune commission sur les économies de taxes, aucune marge sur le prix d'achat et aucuns frais de dossier cachés. Vous payez nos honoraires de sourcing en phases — pour que votre capital ne dorme pas des mois sur l'océan.",
  ctaHref: "/fr/contact/",
  de: {
    tag: "La filière la plus rapide",
    heading: "Prestation de sourcing Allemagne",
    price: "à partir de € 2.250",
    vat: "TTC",
    leadText:
      "Pour qui veut rouler dans sa voiture sous 2 à 4 semaines. Nous sourçons auprès de concessionnaires premium allemands reconnus, inspectons sur place et gérons tout le parcours jusqu'à la livraison à domicile.",
    imgAlt: "BMW M4 noire sur la route — prestation de sourcing Allemagne",
    phasesHeading: "Paiement en phases",
    phases: [
      {
        step: "Phase 1",
        amount: "€ 750",
        when: "Au démarrage — acompte",
        body: "Avant que nous commencions à chercher. Déductible des honoraires finaux en cas d'achat réussi. Non remboursable en cas d'annulation par le client après accord sur l'offre.",
      },
      {
        step: "Phase 2",
        amount: "€ 1.500",
        when: "À la livraison — solde",
        body: "À la remise des clés à votre adresse, avec toute la documentation au complet — immatriculation incluse pour une livraison aux Pays-Bas ; dossier d'importation complet et accompagnement à l'immatriculation pour la France ou la Belgique.",
      },
    ],
    inclHeading: "Ce que comprend notre prestation",
    incl: [
      "Entretien initial + document de profil avec indispensables et critères rédhibitoires",
      "Propositions de candidates (3-5 voitures sous 1-2 semaines)",
      "Inspection sur place en Allemagne avant toute offre",
      "Négociation avec le concessionnaire dans votre intérêt, transport depuis l'Allemagne et formalités d'importation — clé en main aux Pays-Bas, avec accompagnement à l'immatriculation pour la France / Belgique",
      "Livraison à domicile — Pays-Bas et régions limitrophes de série, reste de l'Europe sur demande",
    ],
    scope:
      "Le prix d'achat de la voiture, les taxes, le transport et les frais d'immatriculation restent à votre charge, réglés directement (rapportés en toute transparence, sans marge de notre part).",
    cta: "Planifier un entretien",
  },
  jp: {
    tag: "Notre spécialité",
    heading: "Prestation de sourcing Japon",
    price: "€ 3.250",
    vat: "TTC",
    leadText:
      "Pour qui cherche une version LHD rare venue du Japon — kilométrages plus bas, climat plus sec, discipline du Shaken. Comptez 10 à 14 semaines de l'enchère à la remise des clés.",
    imgAlt: "Porsche 911 dans Ginza de nuit, à Tokyo — prestation de sourcing Japon",
    phasesHeading: "Paiement en phases — trois temps",
    phases: [
      {
        step: "Phase 1",
        amount: "€ 1.250",
        when: "Au démarrage — acompte",
        body: "Avant que nous démarrions le passage au crible hebdomadaire des enchères USS, JU et JAA. Déductible des honoraires finaux en cas de succès.",
      },
      {
        step: "Phase 2",
        amount: "Achat + transport",
        when: "Aussitôt après l'adjudication",
        body: "Vous payez le prix d'adjudication (en yens, communiqué à l'avance) plus le transport intérieur au Japon et le fret maritime RoRo. Vous achetez la voiture directement par procuration ; nous intervenons comme coordinateur, pas comme revendeur.",
      },
      {
        step: "Phase 3",
        amount: "€ 2.000 + taxes",
        when: "À la livraison — solde",
        body: "Solde des honoraires de sourcing de € 2.000, plus les droits de douane de 10 %, la TVA et les frais d'immatriculation — soit la TVA néerlandaise de 21 % et la BPM pour une immatriculation aux Pays-Bas ; pour la France ou la Belgique, nous chiffrons l'équivalent local (droits UE, TVA locale, frais d'immatriculation) avant toute enchère. Réglé seulement à la remise des clés.",
      },
    ],
    inclHeading: "Ce que comprend notre prestation Japon",
    incl: [
      "Entretien initial approfondi (90 min) — profil, seuil d'état, préférence de couleur, indispensables",
      "Passage au crible hebdomadaire JCD/USS/JU/JAA avec traduction commentée du procès-verbal pour chaque candidate",
      "Stratégie d'enchère et enchères via notre partenaire d'exportation japonais établi",
      "Coordination du transport intérieur au Japon, des formalités d'exportation et du fret maritime RoRo",
      "Dédouanement à Rotterdam et formalités d'importation — clé en main aux Pays-Bas, avec accompagnement à l'immatriculation pour la France / Belgique",
      "Livraison à domicile — Pays-Bas et régions limitrophes de série, reste de l'Europe sur demande",
    ],
    scope:
      "Le prix d'achat (en yens), le transport intérieur au Japon, le RoRo, les droits de douane, les taxes et les frais d'immatriculation restent à votre charge. Nous coordonnons chaque paiement en toute transparence — vous voyez chaque facture.",
    cta: "Planifier un entretien",
  },
  moto: {
    tag: "Nouveau — Motos",
    heading: "Prestation de sourcing Moto",
    price: "€ 1.250",
    vat: "TTC",
    leadText:
      "Pour l'importation d'une moto (BMW) depuis l'Allemagne. Au sein de l'UE, donc pas de droits de douane ni de fret maritime — généralement 1 à 3 semaines. Nous sourçons sur mobile.de et Kleinanzeigen.de, vérifions les points faibles propres au modèle, et gérons tout jusqu'à la livraison, papiers en règle.",
    imgAlt: "Route de montagne dégagée à l'heure dorée — prestation de sourcing motos",
    phasesHeading: "Paiement en phases",
    phases: [
      {
        step: "Phase 1",
        amount: "€ 500",
        when: "Au démarrage — acompte",
        body: "Avant que nous commencions à chercher. Déductible des honoraires finaux en cas d'achat réussi.",
      },
      {
        step: "Phase 2",
        amount: "€ 750",
        when: "À la livraison — solde",
        body: "À la remise de la moto, formalités bouclées et documentation au complet.",
      },
    ],
    inclHeading: "Ce que comprend notre prestation moto",
    incl: [
      "Entretien + profil : modèle, année, version et budget",
      "Passage au crible ciblé de mobile.de et Kleinanzeigen.de",
      "Vérification des points d'attention propres au modèle (rappels, servofrein, pompe à huile, etc.)",
      "Négociation, transport depuis l'Allemagne et formalités d'immatriculation — clé en main aux Pays-Bas, accompagnement pour la France / Belgique",
      "Livraison avec documentation complète",
    ],
    scopeHtml:
      'Le prix d\'achat, le transport et les taxes / frais d\'immatriculation restent à votre charge, rapportés en toute transparence, sans marge de notre part. Voir aussi la <a href="/fr/motos/">page motos</a>.',
    cta: "Planifier un entretien",
  },
  extra: {
    heading: "Prestations à la carte",
    lead: "Toutes les questions n'exigent pas une prestation de sourcing complète. Pour certaines parties du processus d'importation, vous pouvez nous solliciter à la carte.",
    items: [
      {
        title: "Rapport d'expertise DRZ (taxe BPM néerlandaise)",
        price: "€ 350",
        body: "Expertise physique par un expert DRZ agréé, utilisable pour appuyer la déclaration de la taxe BPM lors d'une immatriculation aux Pays-Bas.",
      },
      {
        title: "Entretien initial",
        price: "Gratuit",
        body: "En ligne via Google Meet, WhatsApp ou par téléphone — 60 minutes maximum (filière Allemagne) ou 90 minutes (filière Japon). Aucune pression commerciale, un avis honnête sur l'existence ou non d'une correspondance.",
      },
    ],
  },
  transparency: {
    heading: "Nos règles du jeu financières",
    itemsHtml: [
      "<strong>Aucune commission sur les économies de taxes.</strong> Ce que nous économisons pour vous via la méthode la plus avantageuse vous revient à 100 %. Nous facturons nos honoraires de sourcing, rien de plus.",
      "<strong>Aucune marge sur le prix d'achat.</strong> Vous payez directement le concessionnaire allemand ou via le partenaire d'enchères japonais. Chaque montant vous est restitué avec facture.",
      "<strong>Aucuns frais de dossier cachés.</strong> Transport, douane, taxes et immatriculation sont refacturés à prix coûtant, factures à l'appui.",
      "<strong>Des conditions claires dès le départ.</strong> Avant l'acompte, vous signez une lettre de mission qui mentionne explicitement le périmètre, les phases de paiement et les modalités d'annulation.",
    ],
    footerHtml:
      'Vous voulez voir comment cette structure tarifaire se traduit en pratique ? Un cas W212 entièrement chiffré vous attend sur la page <a href="/fr/exemple-importation/">exemple d\'importation</a>. Vous hésitez entre le Japon et l\'Allemagne ? Nous vous conseillons la filière adaptée lors de l\'entretien initial — gratuit et sans engagement.',
  },
  pageCta: {
    heading: "Parlons de votre recherche — sans engagement.",
    body: "Un entretien initial gratuit (Google Meet, WhatsApp ou téléphone) pour passer en revue votre profil, la filière et un coût rendu réaliste. Aucune pression commerciale, aucune obligation.",
    btn: "Planifier un entretien sans engagement",
    note: "Réponse sous 24 heures",
  },
};

export default tarieven;
