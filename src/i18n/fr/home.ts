// FR — sections de la page d'accueil, localisées pour les acheteurs francophones (France / Belgique).
import type { HomeDict } from "../nl/home";

const home: HomeDict = {
  meta: {
    title: "Importer une voiture du Japon & d'Allemagne | Rolvink",
    description:
      "Sourcing personnalisé de voitures premium : BMW, Mercedes-Benz, Audi, Porsche — enchères japonaises (LHD, faibles km) et concessionnaires allemands.",
  },
  hero: {
    h1Html: `Voitures &amp; motos premium,<br/>d'Allemagne &amp; du <span class="accent">Japon</span>.`,
    lead: "Sourcées personnellement pour qui cherche le bon exemplaire — pas le premier venu.",
    ctaPrimary: "Lancez votre recherche",
    ctaPrimaryHref: "#zoekprofiel",
    ctaSecondary: "ou découvrez d'abord notre méthode",
    ctaSecondaryHref: "/fr/notre-methode/",
    ctaMoto: "vous cherchez une moto ? Découvrez le service motos",
    ctaMotoHref: "/fr/motos/",
    focusLabel: "Notre spécialité",
    brands: [
      { label: "BMW" },
      { label: "Mercedes-Benz" },
      { label: "Audi" },
      { label: "Porsche" },
    ] as Array<{ label: string; href?: string }>,
    sourceLabel: "Nos marchés sources",
    sources: [{ label: "Europe" }, { label: "Japon" }] as Array<{ label: string; href?: string }>,
  },
  obsession: {
    eyebrow: "Notre obsession",
    heading: "Cinq principes.",
    lead: "La bonne voiture ne se trouve pas toute seule. Il faut de la patience, des connaissances, et la volonté de dire « non » à ce qui est presque bien.",
    items: [
      {
        num: "01",
        title: "Pas de négoce généraliste",
        body: "Nous nous limitons volontairement à quatre marques premium allemandes — BMW, Mercedes-Benz, Audi et Porsche. C'est ce que nous connaissons. Au-delà, nous vous orientons ailleurs.",
      },
      {
        num: "02",
        title: "Pas d'importation de masse",
        body: "Notre ambition : huit à douze voitures par an. Pas de pression de stock, pas de quotas — chaque mission reçoit l'attention qu'elle mérite.",
      },
      {
        num: "03",
        title: "Uniquement des exemplaires sélectionnés",
        body: "État 4 ou supérieur sur l'échelle d'inspection officielle. Aucun historique connu d'accident ou de réparation. Faibles kilométrages. Documentation complète. En dessous de ce seuil, aucune voiture ne passe.",
      },
      {
        num: "04",
        title: "L'obsession des versions et de l'historique",
        body: "Nous lisons chaque procès-verbal d'enchère caractère par caractère. Nous comparons avec les données de prix historiques. Nous savons quelle version est exceptionnelle et laquelle ne l'est pas.",
      },
      {
        num: "05",
        title: "Plutôt attendre le bon exemplaire",
        body: "Trouver une bonne voiture demande du temps. Nous n'enchérissons pas si la candidate ne correspond pas — nous attendons la vente suivante. Et la suivante.",
      },
    ],
  },
  services: {
    label: "Notre service",
    heading: "Un accompagnement de A à Z.",
    intro: "Trois disciplines, un seul parcours fluide. Pour le déroulé complet, consultez notre méthode.",
    linkLabel: "Découvrez la méthode en 8 étapes",
    linkHref: "/fr/notre-methode/",
    cards: [
      {
        num: "01",
        title: "Sourcing",
        body: "Recherche ciblée sur les enchères japonaises et auprès des concessionnaires premium allemands, guidée par votre profil exact. Des candidates chaque semaine, avec notre analyse.",
        img: "/images/traject-auction.jpg",
        alt: "BMW M3 (G80) de face avec phares LED jaunes — sourcing de versions premium",
      },
      {
        num: "02",
        title: "Livraison",
        body: "Importation complète, dédouanement et dossier d'importation inclus. Livraison à domicile aux Pays-Bas et dans les régions limitrophes de série ; France, Belgique et reste de l'Europe sur demande.",
        img: "/images/traject-transport.jpg",
        alt: "Porsche 911 sur une remorque porte-voitures — importation et livraison",
      },
      {
        num: "03",
        title: "Suivi",
        body: "Detailing optionnel par des partenaires sélectionnés. Accompagnement pour toute correspondance de garantie. Une ligne directe — pas de centre d'appels.",
        img: "/images/traject-handover.jpg",
        alt: "Main tenant une clé de voiture Mercedes-Benz lors de la remise des clés",
      },
    ],
  },
  trust: {
    eyebrow: "Confiance",
    heading: "Honnête, vérifiable, à livre ouvert.",
    intro:
      "Nous sommes un service jeune et préférons montrer honnêtement une case vide plutôt que des références inventées. Ce que nous montrons déjà : exactement comment nous travaillons et ce que coûte un parcours — à l'euro près.",
    pijlers: [
      "Uniquement grade 4+, aucun historique d'accident",
      "Coût rendu transparent avant chaque enchère",
      "Nous n'enchérissons qu'avec votre feu vert explicite",
      "Personnel — une ligne directe avec Theo, à Welsum",
    ],
    caseLabels: [] as string[], // klantverhaal-kaarten verborgen tot er echte referenties zijn,
    caseAriaSuffix: "à venir prochainement",
    casePhotoLabel: "Photo à venir",
    caseBadge: "Bientôt",
    caseBody:
      "Un parcours achevé — voiture, photo, délais et ce que nous avons rencontré en chemin. Nous ne le publions qu'avec l'accord du client.",
    linkPrimaryLabel: "Consultez un exemple d'importation chiffré de bout en bout",
    linkPrimaryHref: "/fr/exemple-importation/",
    linkSecondaryLabel: "Nos références",
    linkSecondaryHref: undefined as string | undefined,
  },
  moto: {
    eyebrow: 'Sur deux roues aussi',
    heading: 'Motos, avec la même obsession.',
    body:
      "Nous sourçons des motos BMW sur le marché allemand — d'une R 1250 GS récente aux airheads classiques, avec plus de 14 000 motos BMW en vente chaque jour. Nous vérifions les points faibles propres à chaque modèle, négocions de votre côté et transportons la moto nous-mêmes : assurée, sur notre propre remorque deux places, avec livraison dans toute l'Europe.",
    points: [
      'Mission de recherche dès €1.250 — payée par étapes',
      'Transport assuré sur notre propre remorque deux places',
      "Accompagnement pour l'immatriculation dans votre pays",
    ],
    linkLabel: 'Découvrez le service motos',
    linkHref: '/fr/motos/',
    img: '/images/moto-hero.jpg',
    imgAlt: "Route de montagne à l'heure dorée — service motos Rolvink",
  },
  tiers: {
    eyebrow: "Nos sources",
    heading: "Deux marchés sources, deux disciplines.",
    intro:
      "Chaque marché a ses forces. L'Allemagne offre toute la gamme de nos quatre marques, rapidement et avec inspection sur place. Le Japon est la filière des versions performance, des classiques et des exemplaires à faible kilométrage devenus rares en Europe. Lors du premier entretien, nous vous conseillons la filière adaptée à votre recherche.",
    de: {
      tag: "Depuis l'Allemagne",
      title: "Toute la gamme, rapidement disponible",
      time: "2 — 4 semaines de délai",
      descHtml:
        "Le marché premium allemand offre le choix le plus large de BMW, Mercedes-Benz, Audi et Porsche — de la voiture du quotidien à la version performance. <strong>Nous ne sélectionnons que des exemplaires à l'historique d'entretien complet</strong> et à la provenance bien documentée. L'inspection en personne avant toute offre est la règle.",
      imgAlt: "Mercedes-Benz Classe C noire en vue trois quarts avant sur la route",
      bullets: [
        { bold: "Toute la gamme de modèles", extra: " au sein de nos 4 marques — du quotidien aux AMG/M/RS" },
        { bold: "Historique d'entretien complet exigé", extra: " — sans exception" },
        { bold: "", extra: "Concessionnaires reconnus et organismes de contrôle indépendants (TÜV, DEKRA, KÜS) dans notre réseau" },
        { bold: "", extra: "Inspection en personne avant toute offre" },
        { bold: "", extra: "Importation rapide — pas de transport maritime" },
        { bold: "", extra: "Aucun droit de douane — marché intérieur de l'UE" },
      ],
    },
    jp: {
      tag: "Depuis le Japon",
      title: "Performance, classiques, faibles km",
      time: "12 — 14 semaines de délai",
      descHtml:
        "Le Japon abrite une niche LHD unique : des 911 de toutes générations, des AMG et des M, des modèles RS, et des classiques comme la 993, la R107 ou la W124 Cosworth — souvent avec de très faibles kilométrages, grâce aux habitudes de conduite japonaises et au rigoureux contrôle Shaken bisannuel. Pas la filière pour une voiture du quotidien ordinaire — l'Allemagne y suffit.",
      imgAlt: "Porsche 911 dans une rue de Ginza, à Tokyo",
      bullets: [
        "Forte spécialisation : 911, AMG, M Performance, versions RS et classiques",
        "Selon notre expérience, des kilométrages généralement bien inférieurs à l'offre européenne comparable",
        "Pas de sel de déneigement dans la majeure partie du Japon — moins de risque de corrosion",
        "Inspection officielle des enchères (USS, JU, JAA) — grade 4 ou supérieur",
        "Accès à des versions LHD rares, importées neuves au Japon à l'époque",
      ],
    },
  },
  grades: {
    eyebrow: "Échelle des enchères japonaises",
    heading: "Nous n'acceptons que le grade 4 ou supérieur.",
    bodyHtml:
      "Chaque voiture présentée aux enchères japonaises est inspectée de manière indépendante. L'échelle va de 1 à 5, avec le grade 6 ou S pour l'état (quasi) neuf et des codes lettrés (R, RA) pour l'historique de réparation. Nous ne sourçons que des <strong>4, 4.5 ou 5</strong> sans codes R/RA — en dessous, les risques de défauts cachés augmentent fortement.",
    linkLabel: undefined as string | undefined,
    linkHref: undefined as string | undefined,
    imgAlt: "Gros plan sur une jante Mercedes-AMG avec étrier de frein carbone-céramique",
  },
  signals: {
    eyebrow: "Signaux du marché",
    heading: "Ce que nous avons vu récemment aux enchères.",
    intro:
      "Un aperçu des candidates à conduite à gauche que nous avons suivies ces dernières semaines sur les enchères japonaises — avec notre calcul indicatif, du prix marteau au prix de rue aux Pays-Bas. C'est ainsi que nous travaillons, chaque semaine.",
    gradeTitle: "Grade d'état sur l'échelle des enchères japonaises",
    gradePrefix: "grade",
    dtHammer: "Prix marteau ≈",
    dtLanded: "Coût rendu NL",
    dtNl: "Prix de référence NL",
    peildatum: "mai 2026",
    disclaimerBefore: "Chiffres indicatifs, date de référence ",
    disclaimerAfterHtml:
      ". <strong>Ceci n'est pas une offre en cours</strong> — c'est le type de candidates que nous suivons et chiffrons pour nos clients. Le coût rendu indiqué comprend frais, transport, droits de douane, TVA et taxes d'immatriculation pour une immatriculation aux Pays-Bas ; pour la France ou la Belgique, nous calculons l'équivalent (droits UE, TVA locale, frais d'immatriculation) avant toute enchère.",
    cta: "Vous cherchez ce genre d'exemplaire ? Déposez votre profil de recherche",
    ctaHref: "#zoekprofiel",
  },
  quote: {
    eyebrow: "Notre discipline",
    text: "Une voiture est un choix de longue haleine. Nous prenons le temps de trouver le bon exemplaire — pas le premier venu. Pas de quotas, pas d'importation de masse, pas de pression sur le client. Mais : de la recherche, de la patience, et la volonté de dire non à ce qui est presque bien.",
    name: "Theo Rolvink",
    title: "Fondateur — de longues années d'expérience dans l'achat et la vente de voitures et de motos",
  },
  zoekprofiel: {
    label: "Sans hâte, mais avec précision",
    headingHtml: `Déposez votre <span class="accent">profil de recherche</span>.`,
    intro:
      "Pas encore d'exemplaire en vue ? Dites-nous ce que vous cherchez. Dès qu'une candidate correspondante apparaît aux enchères, nous vous la signalons — avec procès-verbal, photos et notre chiffrage. Sans engagement, sans pression commerciale.",
    usps: [
      "Nous n'enchérissons qu'avec votre feu vert explicite",
      "Uniquement grade 4+ et aucun historique d'accident",
      "Une ligne directe avec Theo — pas de centre d'appels",
    ],
    honeypotLabel: "Laissez ce champ vide",
    requiredNoteHtml:
      "Indiquez au moins votre <strong>e-mail ou téléphone</strong> — le reste nous aide à chercher plus précisément.",
    optional: "(facultatif)",
    fields: {
      naam: { label: "Votre nom", placeholder: "Prénom" },
      email: { label: "Adresse e-mail", placeholder: "nom@exemple.fr" },
      telefoon: { label: "Téléphone", placeholder: "+33 6 12 34 56 78" },
      merk: { label: "Marque", choose: "Choisir…", unsure: "Pas encore décidé" },
      model: { label: "Modèle / version", placeholder: "p. ex. SL 500, M3, Cayman S" },
      budget: {
        label: "Budget (véhicule livré)",
        choose: "Choisir…",
        options: ["jusqu'à € 15.000", "€ 15.000 – 25.000", "€ 25.000 – 40.000", "€ 40.000 – 75.000", "€ 75.000+"],
      },
      bron: { label: "Marché source", none: "Sans préférence", options: ["Japon", "Allemagne / Europe"] },
      termijn: {
        label: "Délai",
        choose: "Choisir…",
        options: ["Le plus vite possible", "Dans les 3 mois", "Cette année", "Je me renseigne"],
      },
    },
    submit: "Envoyer mon profil de recherche",
    or: "ou",
    waButton: "Plutôt directement par WhatsApp",
    noteHtml:
      'Nous répondons généralement sous 24 heures. Vous préférez appeler ou écrire ? <a href="/fr/contact/">Via le formulaire de contact</a>.',
    js: {
      emailInvalid: "Vérifiez l'adresse e-mail — format nom@exemple.fr.",
      contactRequired: "Indiquez une adresse e-mail ou un numéro de téléphone.",
      successHtml:
        "<strong>Merci — votre profil de recherche est bien arrivé.</strong><br>Nous vous contactons généralement sous 24 heures.",
      errorFallback: "L'envoi n'a pas abouti.",
      errorRetryPrefix: " Vous pouvez réessayer ou ",
      errorRetryLink: "envoyer un message WhatsApp",
      errorRetrySuffix: ".",
      unknownError: "Erreur inconnue",
      waIntro: "Bonjour Theo, voici mon profil de recherche :",
      waLabels: {
        merk: "Marque",
        model: "Modèle/version",
        budget: "Budget",
        bron: "Marché source",
        termijn: "Délai",
        naam: "Nom",
        email: "E-mail",
        telefoon: "Téléphone",
      },
      waNone: "sans préférence",
    },
  },
  cta: {
    label: "La prochaine étape",
    headingHtml: `Prêt pour votre prochaine<br/><span class="accent">acquisition</span> ?`,
    body: "Deux façons de commencer : déposez votre profil de recherche ci-dessus, ou planifiez d'abord un entretien sans engagement.",
    primary: "Lancez votre recherche",
    primaryHref: "#zoekprofiel",
    secondary: "Vous préférez d'abord en parler ? Planifiez un entretien →",
    secondaryHref: "/fr/contact/",
  },
};

export default home;
