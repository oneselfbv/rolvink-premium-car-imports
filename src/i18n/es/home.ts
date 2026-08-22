// ES — secciones de la página de inicio.
const home = {
  meta: {
    title: 'Importar una moto de Alemania | Rolvink',
    description:
      'Buscamos su moto en Alemania y la revisamos in situ. Importación completa para matriculación en los Países Bajos; para otros países, inspección y asesoramiento.',
  },
  hero: {
    h1Html: 'Motos importadas<br/>de <span class="accent">Alemania</span>.',
    lead: 'Buscada en persona y revisada in situ en Alemania. Para clientes fuera de los Países Bajos: inspección y asesoramiento sobre la importación.',
    ctaPrimary: 'Inicie su búsqueda',
    ctaPrimaryHref: '#zoekprofiel',
    ctaSecondary: 'vea el servicio de motos',
    ctaSecondaryHref: '/es/motos/',
    ctaMoto: '¿busca un coche? Vea cómo trabajamos',
    ctaMotoHref: '/es/como-trabajamos/',
    focusLabel: 'Nuestro enfoque',
    brands: [
      { label: 'BMW Motorrad', href: '/es/motos/' },
      { label: 'BMW' },
      { label: 'Mercedes-Benz' },
      { label: 'Audi' },
      { label: 'Porsche' },
    ] as Array<{ label: string; href?: string }>,
    sourceLabel: 'Buscamos en',
    sources: [
      { label: 'Europa' },
      { label: 'Japón' },
    ] as Array<{ label: string; href?: string }>,
  },
  obsession: {
    eyebrow: 'Nuestra obsesión',
    heading: 'Cinco principios.',
    lead: 'El coche adecuado no aparece solo. Exige paciencia, conocimiento y la disposición a decir "no" a lo que está casi bien.',
    items: [
      {
        num: '01',
        title: 'Nada de comercio generalista',
        body: 'Nos limitamos deliberadamente a cuatro marcas premium alemanas — BMW, Mercedes-Benz, Audi y Porsche. Es lo que conocemos a fondo. Fuera de ahí, le remitimos a otros.',
      },
      {
        num: '02',
        title: 'Nada de importación masiva',
        body: 'Nuestra ambición es de ocho a doce coches al año. Sin presión de stock, sin cuotas — cada encargo recibe la atención que merece.',
      },
      {
        num: '03',
        title: 'Solo versiones seleccionadas',
        body: 'Grado 4 o superior en la escala oficial de inspección. Sin historial conocido de daños ni reparaciones. Kilometrajes bajos. Documentación completa. Por debajo de ese listón no entra ningún coche.',
      },
      {
        num: '04',
        title: 'Obsesión por las especificaciones y el historial',
        body: 'Leemos cada hoja de subasta carácter a carácter. Comparamos con datos históricos de precios. Sabemos qué versión es especial y cuál no.',
      },
      {
        num: '05',
        title: 'Preferimos esperar al ejemplar adecuado',
        body: 'Encontrar un buen coche lleva tiempo. No pujamos si el candidato no encaja — esperamos a la siguiente subasta. Y a la siguiente.',
      },
    ],
  },
  services: {
    label: 'Nuestro servicio',
    heading: 'De la A a la Z.',
    intro: 'Tres pasos, un solo proceso continuo. El detalle completo est\u00e1 en la p\u00e1gina de motos.',
    linkLabel: 'Vea el proceso de motos',
    linkHref: '/es/motos/',
    cards: [
      {
        num: '01',
        title: 'B\u00fasqueda',
        body: 'B\u00fasqueda dirigida en mobile.de y Kleinanzeigen.de seg\u00fan su perfil. Recibe candidatas con nuestra lectura: qu\u00e9 encaja, qu\u00e9 no y cu\u00e1nto vale realmente.',
        img: '/images/moto-airhead.jpg',
        alt: 'B\u00f3xer BMW cl\u00e1sico \u2014 b\u00fasqueda dirigida en el mercado alem\u00e1n',
      },
      {
        num: '02',
        title: 'Revisi\u00f3n y recogida',
        body: 'Vista en persona y revisada seg\u00fan los puntos d\u00e9biles de ese modelo. Despu\u00e9s, transporte en nuestro remolque asegurado \u2014 dos motos por viaje.',
        img: '/images/moto-r1250gs.jpg',
        alt: 'BMW R 1250 GS \u2014 inspecci\u00f3n in situ y transporte',
      },
      {
        num: '03',
        title: 'Matriculaci\u00f3n y seguimiento',
        body: 'Inspecci\u00f3n t\u00e9cnica, impuesto de matriculaci\u00f3n y matr\u00edcula neerlandesa. Despu\u00e9s, l\u00ednea directa con Theo \u2014 sin centralita.',
        img: '/images/moto-rninet.jpg',
        alt: 'BMW R nineT \u2014 importaci\u00f3n completada',
      },
    ],
  },
  trust: {
    eyebrow: 'Confianza',
    heading: 'Honesto, verificable, con los libros abiertos.',
    intro:
      'Somos un servicio joven y preferimos mostrar un hueco honesto antes que referencias inventadas. Lo que ya enseñamos hoy: exactamente cómo trabajamos y cuánto cuesta un proceso — hasta el último euro.',
    pijlers: [
      'Tarifa fija por adelantado \u2014 sin margen sobre el precio de compra',
      'Solo pujamos con su visto bueno expl\u00edcito',
      'Los puntos d\u00e9biles del modelo, dichos antes de comprar',
      'Personal \u2014 l\u00ednea directa con Theo en Welsum',
    ],
    caseLabels: [] as string[], // klantverhaal-kaarten verborgen tot er echte referenties zijn,
    caseAriaSuffix: 'disponible próximamente',
    casePhotoLabel: 'Foto próximamente',
    caseBadge: 'Próximamente',
    caseBody:
      'Un proceso completado — coche, foto, plazos y lo que encontramos por el camino. Solo lo publicamos con el permiso del cliente.',
    linkPrimaryLabel: 'Vea un ejemplo de importación calculado al completo',
    linkPrimaryHref: '/es/ejemplo-importacion/',
    linkSecondaryLabel: 'Nuestras referencias',
    linkSecondaryHref: undefined as string | undefined,
  },
  moto: {
    eyebrow: 'Lo que hacemos',
    heading: 'Motos BMW de Alemania, buscadas y recogidas en persona.',
    body:
      "Cada d\u00eda hay m\u00e1s de 14.000 motos BMW a la venta en Alemania \u2014 desde una R 1250 GS reciente hasta una airhead cl\u00e1sica \u2014 con diferencias de precio que llegan a unos \u20ac 5.000. La buscamos, la revisamos in situ seg\u00fan los puntos d\u00e9biles propios de ese modelo y la recogemos con nuestro propio remolque. La importaci\u00f3n completa vale para la matriculaci\u00f3n neerlandesa; fuera de los Pa\u00edses Bajos ofrecemos inspecci\u00f3n y asesoramiento.",
    points: [
      'Proceso completo desde \u20ac 1.250 \u2014 pago por fases',
      'Transporte propio y asegurado, dos motos por viaje',
      'Inspecci\u00f3n, tr\u00e1mites y matriculaci\u00f3n neerlandesa incluidos',
    ],
    linkLabel: 'Vea el servicio de motos',
    linkHref: '/es/motos/',
    img: '/images/moto-hero.jpg',
    imgAlt: 'Carretera de monta\u00f1a a la hora dorada \u2014 servicio de motos Rolvink',
  },
  tiers: {
    eyebrow: 'Nuestras fuentes',
    heading: 'Dos mercados de origen, dos disciplinas.',
    intro:
      'Cada mercado tiene sus puntos fuertes. Alemania ofrece la gama completa dentro de nuestras cuatro marcas, con rapidez e inspección presencial directa. Japón es la ruta para versiones performance, clásicos y ejemplares de bajo kilometraje que en Europa se han vuelto escasos. En la primera conversación le aconsejamos qué ruta encaja con su búsqueda.',
    de: {
      tag: 'Desde Alemania',
      title: 'Espectro completo, disponible rápido',
      time: '2 — 4 semanas de plazo',
      descHtml:
        'El mercado premium alemán ofrece la oferta más amplia de BMW, Mercedes-Benz, Audi y Porsche — del daily driver a la versión performance. <strong>Seleccionamos exclusivamente ejemplares con historial de mantenimiento completo</strong> y procedencia bien documentada. La inspección presencial antes de pujar es estándar.',
      imgAlt: 'Mercedes-Benz Clase C negro en vista tres cuartos frontal en carretera',
      bullets: [
        { bold: 'Espectro completo de modelos', extra: ' dentro de nuestras 4 marcas — del daily driver a AMG/M/RS' },
        { bold: 'Historial de mantenimiento completo obligatorio', extra: ' — sin excepciones' },
        { bold: '', extra: 'Concesionarios conocidos y socios de inspección independientes (TÜV, DEKRA, KÜS) en nuestra red' },
        { bold: '', extra: 'Inspección presencial antes de pujar' },
        { bold: '', extra: 'Importación rápida — sin transporte oceánico' },
        { bold: '', extra: 'Sin aranceles — mercado interior de la UE' },
      ],
    },
    jp: {
      tag: 'Desde Japón',
      title: 'Performance, clásicos, pocos km',
      time: '12 — 14 semanas de plazo',
      descHtml:
        'Japón alberga un nicho LHD único: 911 de todas las generaciones, versiones AMG y M, modelos RS y clásicos como el 993, el R107 o el W124 Cosworth — a menudo con kilometrajes muy bajos gracias a los hábitos de conducción japoneses y a la estricta inspección bienal Shaken. No es la ruta para un daily corriente — para eso basta Alemania.',
      imgAlt: 'Porsche 911 en una calle de Ginza, Tokio',
      bullets: [
        'Fuerte enfoque en 911, AMG, M Performance, versiones RS y clásicos',
        'Según nuestra experiencia, kilometrajes normalmente muy inferiores a la oferta comparable en la UE',
        'En la mayor parte de Japón no se usa sal en las carreteras — menos riesgo de corrosión',
        'Inspección oficial de subasta (USS, JU, JAA) — grade 4 o superior',
        'Acceso a versiones LHD raras que en su día se importaron nuevas',
      ],
    },
  },
  grades: {
    eyebrow: 'Escala de subastas japonesa',
    heading: 'Solo aceptamos grade 4 o superior.',
    bodyHtml:
      'Cada coche de una subasta japonesa pasa una inspección independiente. La escala va de 1 a 5, con grade 6 o S para estado (casi) de estreno y códigos de letra (R, RA) para historial de reparación. Buscamos exclusivamente <strong>4, 4.5 o 5</strong> sin códigos R/RA — por debajo, el riesgo de problemas ocultos aumenta con fuerza.',
    linkLabel: undefined as string | undefined,
    linkHref: undefined as string | undefined,
    imgAlt: 'Detalle en primer plano de una llanta Mercedes-AMG con pinza de freno carbocerámica',
  },
  signals: {
    eyebrow: 'Señales de mercado',
    heading: 'Lo que vimos recientemente en subasta.',
    intro:
      'Una muestra de los candidatos con volante a la izquierda que seguimos en las últimas semanas en las subastas japonesas de coches — con nuestro cálculo indicativo del precio de martillo al coste final matriculado. Así trabajamos.',
    gradeTitle: 'Grado de estado en la escala de subastas japonesa',
    gradePrefix: 'grade',
    dtHammer: 'Precio de martillo ≈',
    dtLanded: 'Coste final NL',
    dtNl: 'Precio de mercado NL',
    peildatum: 'mayo de 2026',
    disclaimerBefore: 'Cifras indicativas, fecha de referencia ',
    disclaimerAfterHtml:
      '. <strong>Esto no es oferta actual</strong> — es el tipo de candidato que seguimos y calculamos. El coste final mostrado corresponde a una matriculación en los Países Bajos e incluye fees, transporte, aranceles, IVA e impuestos neerlandeses; para una entrega en España calculamos el equivalente (aranceles UE, IVA español, impuesto de matriculación) antes de cualquier puja.',
    cta: '¿Busca algo así? Déjenos su perfil de búsqueda',
    ctaHref: '#zoekprofiel',
  },
  quote: {
    eyebrow: 'Nuestra disciplina',
    text:
      'Un coche es una decisión de largo recorrido. Nos tomamos el tiempo de encontrar el ejemplar adecuado — no el primero. Sin cuotas, sin importación masiva, sin presión al cliente. Sí: investigación, paciencia y la disposición a decir no a lo que está casi bien.',
    name: 'Theo Rolvink',
    title: 'Fundador — años de experiencia en la compraventa de coches y motos',
  },
  zoekprofiel: {
    label: 'Sin prisa, con precisión',
    headingHtml: 'Déjenos su <span class="accent">perfil de búsqueda</span>.',
    intro:
      '¿Todavía sin un ejemplar concreto a la vista? Cuéntenos qué busca. En cuanto aparezca un candidato adecuado en una subasta, se lo señalamos — con la hoja de inspección, fotos y nuestro cálculo. Sin compromiso, sin presión comercial.',
    usps: [
      'Solo pujamos con su visto bueno expl\u00edcito',
      'Revisada seg\u00fan los puntos d\u00e9biles de ese modelo',
      'L\u00ednea directa con Theo \u2014 sin centralita',
    ],
    honeypotLabel: 'Deje este campo vacío',
    requiredNoteHtml:
      'Déjenos al menos su <strong>correo electrónico o teléfono</strong> — el resto nos ayuda a buscar con más precisión.',
    optional: '(opcional)',
    fields: {
      naam: { label: 'Su nombre', placeholder: 'Nombre' },
      email: { label: 'Correo electrónico', placeholder: 'nombre@ejemplo.es' },
      telefoon: { label: 'Teléfono', placeholder: '+34 612 34 56 78' },
      merk: { label: 'Marca', choose: 'Elija…', unsure: 'Aún no lo sé' },
      model: { label: 'Modelo / versión', placeholder: 'p. ej. SL 500, M3, Cayman S' },
      budget: {
        label: 'Presupuesto (llave en mano)',
        choose: 'Elija…',
        options: ['hasta € 15.000', '€ 15.000 – 25.000', '€ 25.000 – 40.000', '€ 40.000 – 75.000', '€ 75.000+'],
      },
      bron: { label: 'Mercado de origen', none: 'Sin preferencia', options: ['Japón', 'Alemania / Europa'] },
      termijn: {
        label: 'Plazo',
        choose: 'Elija…',
        options: ['Lo antes posible', 'En 3 meses', 'Este año', 'Solo me estoy orientando'],
      },
    },
    submit: 'Enviar mi perfil de búsqueda',
    or: 'o',
    waButton: 'Prefiero WhatsApp directamente',
    noteHtml:
      'Normalmente respondemos en 24 horas. ¿Prefiere llamar o escribir? <a href="/es/contacto/">A través del formulario de contacto</a>.',
    js: {
      emailInvalid: 'Compruebe el correo electrónico — formato nombre@ejemplo.es.',
      contactRequired: 'Indique un correo electrónico o un número de teléfono.',
      successHtml:
        '<strong>Gracias — hemos recibido su perfil de búsqueda.</strong><br>Normalmente nos ponemos en contacto con usted en 24 horas.',
      errorFallback: 'No se pudo enviar.',
      errorRetryPrefix: ' Puede intentarlo de nuevo o ',
      errorRetryLink: 'enviar un WhatsApp',
      errorRetrySuffix: '.',
      unknownError: 'Error desconocido',
      waIntro: 'Hola Theo, este es mi perfil de búsqueda:',
      waLabels: {
        merk: 'Marca',
        model: 'Modelo/versión',
        budget: 'Presupuesto',
        bron: 'Mercado de origen',
        termijn: 'Plazo',
        naam: 'Nombre',
        email: 'Correo electrónico',
        telefoon: 'Teléfono',
      },
      waNone: 'sin preferencia',
    },
  },
  autoblok: {
    eyebrow: 'Tambi\u00e9n coches',
    heading: 'Coches premium de Alemania y Jap\u00f3n.',
    body:
      'Adem\u00e1s de motos buscamos coches con volante a la izquierda de BMW, Mercedes-Benz, Audi y Porsche. Desde Alemania en dos a cuatro semanas, o a trav\u00e9s de las subastas japonesas para versiones raras y kilometrajes bajos. El mismo m\u00e9todo, los mismos libros abiertos.',
    links: [
      { label: 'C\u00f3mo trabajamos', href: '/es/como-trabajamos/' },
      { label: 'Tarifas', href: '/es/tarifas/' },
      { label: 'Las clasificaciones de las subastas japonesas', href: '/kennisbank/japanse-veiling-grades' },
    ],
  },

  cta: {
    label: 'El siguiente paso',
    headingHtml: '¿Listo para su próxima<br/><span class="accent">adquisición</span>?',
    body: 'Dos maneras de empezar: deje arriba su perfil de búsqueda, o planifique primero una conversación sin compromiso.',
    primary: 'Inicie su búsqueda',
    primaryHref: '#zoekprofiel',
    secondary: '¿Prefiere hablarlo primero? Planifique una conversación →',
    secondaryHref: '/es/contacto/',
  },
};

export default home;
