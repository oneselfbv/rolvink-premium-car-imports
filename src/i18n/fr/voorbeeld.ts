// FR — page « exemple d'importation ». Cas chiffré avec livraison aux Pays-Bas ;
// les montants restent identiques à la source NL, la fiscalité NL est indiquée comme telle.
import type { VoorbeeldDict } from "../nl/voorbeeld";

const voorbeeld: VoorbeeldDict = {
  meta: {
    title: "Exemple chiffré : que coûte une importation ? | Rolvink",
    description:
      "Un parcours de sourcing entièrement chiffré : achat, transport, taxes et nos honoraires — détaillés poste par poste pour un cas W212 concret.",
  },
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "Exemple d'importation",
  eyebrow: "Exemple d'importation",
  h1Html: `Que coûte un <span class="accent">parcours d'importation</span> ?`,
  lead: "Un cas concret, chiffré de bout en bout. Du prix marteau aux enchères japonaises jusqu'à la livraison — ici à Welsum, aux Pays-Bas. Tous les postes, aucune marge cachée.",
  heroImgAlt: "Image représentative d'une Mercedes-Benz Classe E (W212)",
  heroCaption: "Image représentative — le cas d'exemple concerne une Mercedes E 300 4MATIC (W212).",
  disclaimerHtml:
    "<strong>Ce que c'est — et ce que ce n'est pas.</strong> Le calcul ci-dessous est un <em>cas d'exemple</em>, avec un véhicule choisi fictivement, pour rendre lisible la structure d'un parcours type. Les montants réels varient selon la voiture, le taux de change, la méthode de calcul des taxes, les délais administratifs et les travaux supplémentaires éventuels. Les montants sont arrondis à la dizaine d'euros. Les taxes indiquées (droits de douane, TVA néerlandaise de 21 %, BPM) correspondent à une immatriculation aux Pays-Bas ; pour une livraison en France ou en Belgique, nous calculons l'équivalent (droits UE, TVA locale, frais d'immatriculation) avant toute enchère. Pour votre propre recherche, nous établissons une prévision de coût rendu étayée avant toute offre — ceci n'est pas une grille tarifaire.",
  vehicle: {
    heading: "Le véhicule de ce cas",
    specs: [
      { dt: "Marque & modèle", dd: "Mercedes-Benz E300 4MATIC Avantgarde (W212)" },
      { dt: "Année", dd: "2014" },
      { dt: "Moteur", dd: "3.5L V6 essence, 252 ch" },
      { dt: "Kilométrage", dd: "48.000 km (faible)" },
      { dt: "État", dd: "JCD-grade 4 (bon)" },
      { dt: "Provenance", dd: "Enchère japonaise — version LHD" },
      { dt: "Prix marteau", dd: "¥1.040.000 (~€6.150 au cours de 169 ¥/€)" },
    ],
  },
  table: {
    heading: "Le détail complet",
    colCategory: "Catégorie",
    colItem: "Poste",
    colAmount: "Montant",
    sections: [
      {
        header: "1. Achat au Japon",
        rows: [
          { item: "Prix marteau à l'enchère", amount: "€ 6.150" },
          { item: "Frais + commission de la maison d'enchères", amount: "€ 480" },
          { item: "Transport intérieur au Japon + inspection d'exportation", amount: "€ 720" },
        ],
      },
      {
        header: "2. Fret maritime et arrivée",
        rows: [
          { item: "RoRo Yokohama → Rotterdam (assurance transit incluse)", amount: "€ 1.000" },
          { item: "Commissionnaire en douane + formalités NL", amount: "€ 400" },
        ],
        subtotal: { item: "Valeur CIF (base pour la douane)", amount: "€ 8.750" },
      },
      {
        header: "3. Taxes (immatriculation aux Pays-Bas)",
        rows: [
          { item: "Droits de douane de 10 % sur la valeur CIF (HS 8703)", amount: "€ 875" },
          { item: "TVA néerlandaise de 21 % sur (CIF + droits de douane)", amount: "€ 2.021" },
          { item: "BPM via la méthode de la cote (V6, 2014, décote d'âge ~85 %)", amount: "€ 1.150" },
        ],
      },
      {
        header: "4. Formalités NL et préparation",
        rows: [
          { item: "Contrôle RDW + identification + frais d'immatriculation", amount: "€ 450" },
          { item: "Mises en conformité UE (éclairage de plaque, antibrouillard arrière)", amount: "€ 280" },
          { item: "Reconditionnement + nettoyage complet", amount: "€ 320" },
        ],
      },
      {
        header: "5. Nos honoraires",
        rows: [
          { item: "Honoraires de sourcing (entretien, recherche, stratégie d'enchère, agent au Japon)", amount: "€ 1.250" },
          { item: "Honoraires opérationnels (3 % sur CIF, transport et volet NL)", amount: "€ 460" },
        ],
      },
    ],
    total: { item: "Coût rendu total — tout compris", amount: "€ 15.556" },
    noteHtml:
      "<em>Tous les montants sont indicatifs, sur la base du cours et des barèmes de mai 2026. BPM via la méthode de la cote ; le forfait donnerait €1.400, l'expertise DRZ ~€1.250. Nous calculons les trois méthodes et retenons la plus avantageuse.</em>",
  },
  explain: {
    heading: "Explication par catégorie",
    blocks: [
      {
        heading: "1. Achat au Japon — €7.350",
        bodyHtml:
          "Le prix marteau est le prix auquel l'horloge d'enchère s'arrête. S'y ajoutent les <strong>frais de la maison d'enchères</strong> (typiquement 4-8 % du prix marteau), la <strong>commission</strong> de notre agent japonais, et le <strong>transport intérieur</strong> du site d'enchères au port d'exportation (souvent Yokohama ou Kobe), inspection d'exportation et radiation de l'immatriculation japonaise comprises.",
      },
      {
        heading: "2. Fret maritime et arrivée — €1.400",
        bodyHtml:
          "Le <strong>RoRo</strong> (Roll-on Roll-off) est la méthode standard de transport automobile par mer — la voiture monte et descend du navire sur ses propres roues. Comptez en moyenne 5-6 semaines de Yokohama à Rotterdam, parfois 7-8 semaines selon la saison. L'assurance transit est incluse de série dans notre tarif. Le <strong>commissionnaire en douane</strong> gère le dédouanement à Rotterdam.",
      },
      {
        heading: "3. Taxes — €4.046",
        bodyHtml:
          "<strong>Droits de douane</strong> de 10 % sur la valeur CIF (code HS 8703 pour les voitures particulières). <strong>TVA</strong> de 21 % sur CIF + droits — il s'agit ici de la TVA néerlandaise, ce cas correspondant à une immatriculation aux Pays-Bas ; pour une voiture d'occasion venue d'Allemagne, ce poste serait nul, la TVA allemande étant déjà acquittée. Pour le Japon, elle est toujours due. La <strong>BPM</strong> est la taxe d'immatriculation néerlandaise, calculée via cote, expertise DRZ ou forfait — nous retenons la méthode la plus avantageuse ; pour cette W212, c'est la cote (€1.150). Pour une immatriculation en France ou en Belgique, nous chiffrons l'équivalent local — TVA et frais d'immatriculation — avant toute enchère.",
      },
      {
        heading: "4. Formalités NL et préparation — €1.050",
        bodyHtml:
          "La voiture passe le contrôle RDW (l'autorité néerlandaise des véhicules), identification et contrôle technique compris. Des <strong>mises en conformité UE</strong> peuvent être nécessaires pour les importations japonaises — par exemple un second antibrouillard arrière, ou une adaptation de l'éclairage de plaque. Le <strong>reconditionnement</strong> comprend un nettoyage professionnel et d'éventuelles petites corrections cosmétiques.",
      },
      {
        heading: "5. Nos honoraires — €1.710",
        bodyHtml:
          "Les <strong>honoraires de sourcing</strong> couvrent tout l'amont : entretien initial, élaboration du profil, passage au crible ciblé des enchères, traduction des procès-verbaux, conseil sur la stratégie d'enchère, et coordination de l'offre avec notre agent japonais. Les <strong>honoraires opérationnels</strong> (3 % sur CIF + transport + volet local) couvrent la gestion du transport, du dédouanement, des formalités et de la livraison. Aucun pourcentage caché sur le prix marteau, aucune marge sur les frais annexes.",
      },
    ],
  },
  variants: {
    heading: "Quand les chiffres réels s'écartent-ils ?",
    itemsHtml: [
      "<strong>Un autre taux de change</strong> — un mouvement de ±5 % sur le cours yen-euro modifie directement la conversion du prix marteau. Nous appliquons des limites d'enchère prudentes couvrant ±3 % ; en cas de mouvements plus amples, nous attendons la stabilisation.",
      "<strong>Un prix marteau plus haut ou plus bas</strong> — la base change. Tous les coûts proportionnels (TVA, frais) évoluent avec elle.",
      "<strong>Des taxes d'immatriculation plus lourdes</strong> — pour des versions V8 ou des voitures plus récentes à fort CO₂, la BPM néerlandaise peut ressortir €2.000-€4.000 plus haut ; nous calculons les trois méthodes et retenons la plus avantageuse. Pour la France ou la Belgique, nous chiffrons de la même façon le malus ou les frais locaux applicables avant toute enchère.",
      "<strong>Filière Allemagne au lieu du Japon</strong> — pas de RoRo (€1.000 en moins), mais une inspection en personne (€280-€450, journée de déplacement comprise). Pas de droits de douane ni de TVA supplémentaire, puisqu'il s'agit du marché intérieur de l'UE. Une autre structure de coûts, une valeur totale comparable.",
      "<strong>Véhicule de collection de plus de 25 ou 40 ans</strong> — aux Pays-Bas, régime BPM réduit ou exonération totale. Des droits de douane réduits s'appliquent en outre aux véhicules de collection sous certaines conditions (code HS 9705). L'écart peut se chiffrer en milliers d'euros.",
      "<strong>Travaux supplémentaires</strong> — traitement céramique, rénovation du cuir ou modifications spécifiques sont optionnels et passent séparément par des partenaires de detailing sélectionnés. Aucune marge sur nos honoraires.",
    ],
  },
  promise: {
    heading: "Notre promesse de transparence",
    paragraphsHtml: [
      "Avant chaque enchère, vous recevez une prévision de coût rendu étayée pour votre voiture candidate — avec la même structure que ci-dessus, et les taxes calculées pour votre pays d'immatriculation. Nos honoraires restent fixés du début à la fin au montant convenu dans votre confirmation de mission ; aucun pourcentage ne surgit plus tard. Risque de change, montant final des taxes et délais administratifs sont communiqués honnêtement comme variables — et pour chaque variable, vous recevez une fourchette prudente.",
      'C\'est ce que nous entendons par <em>transparence sans marges cachées</em> : non pas « vous ne recevez pas de facture », mais « chaque facture est posée sur la table ». La structure tarifaire complète (filière Allemagne, filière Japon, prestations à la carte) figure sur la <a href="/fr/tarifs/">page tarifs</a>.',
    ],
  },
  pageCta: {
    heading: "Le coût rendu pour votre recherche ?",
    body: "Dites-nous ce que vous cherchez — nous établissons une prévision étayée, avec la même structure que ce cas d'exemple.",
    btn: "Planifier un entretien",
    note: "Réponse sous 24 heures · Aucune pression commerciale",
  },
  ctaHref: "/fr/contact/",
};

export default voorbeeld;
