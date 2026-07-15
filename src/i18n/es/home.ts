// ES — secciones de la página de inicio.
const home = {
  meta: {
    title: 'Importar coche de Japón y Alemania | Rolvink',
    description:
      'Sourcing personal de BMW, Mercedes-Benz, Audi y Porsche desde subastas japonesas y concesionarios alemanes. Para quien busca el ejemplar adecuado.',
  },
  hero: {
    h1Html: 'Coches y motos premium,<br/>de Alemania y <span class="accent">Japón</span>.',
    lead: 'Buscados personalmente para quien quiere el ejemplar adecuado — no el primero que aparece.',
    ctaPrimary: 'Inicie su búsqueda',
    ctaPrimaryHref: '#zoekprofiel',
    ctaSecondary: 'o vea primero cómo trabajamos',
    ctaSecondaryHref: '/es/como-trabajamos/',
    ctaMoto: '¿busca una moto? Vea el servicio de motos',
    ctaMotoHref: '/es/motos/',
    focusLabel: 'Nuestro enfoque',
    brands: [
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
    heading: 'Un proceso de la A a la Z.',
    intro: 'Tres disciplinas, un proceso integrado. Para el plan completo paso a paso, vea cómo trabajamos.',
    linkLabel: 'Vea el proceso en 8 pasos',
    linkHref: '/es/como-trabajamos/',
    cards: [
      {
        num: '01',
        title: 'Sourcing',
        body: 'Búsqueda dirigida en subastas japonesas y concesionarios premium alemanes, guiada por su perfil exacto. Candidatos con nuestro análisis.',
        img: '/images/traject-auction.jpg',
        alt: 'BMW M3 (G80) de frente con faros LED amarillos — sourcing de versiones premium',
      },
      {
        num: '02',
        title: 'Entrega',
        body: 'Importación completa con despacho de aduana y toda la documentación. Entrega a domicilio en los Países Bajos y alrededores de serie; resto de Europa — incluida España — bajo petición, con orientación en la matriculación e ITV.',
        img: '/images/traject-transport.jpg',
        alt: 'Porsche 911 sobre un remolque portacoches — importación y entrega',
      },
      {
        num: '03',
        title: 'Posventa',
        body: 'Detailing opcional a través de socios seleccionados. Acompañamiento en la eventual correspondencia de garantía. Una línea directa — sin call center.',
        img: '/images/traject-handover.jpg',
        alt: 'Mano con la llave de un Mercedes-Benz en la entrega de llaves',
      },
    ],
  },
  trust: {
    eyebrow: 'Confianza',
    heading: 'Honesto, verificable, con los libros abiertos.',
    intro:
      'Somos un servicio joven y preferimos mostrar un hueco honesto antes que referencias inventadas. Lo que ya enseñamos hoy: exactamente cómo trabajamos y cuánto cuesta un proceso — hasta el último euro.',
    pijlers: [
      'Solo grade 4+, sin historial de daños',
      'Coste final transparente antes de cada puja',
      'Solo pujamos con su luz verde explícita',
      'Personal — una línea directa con Theo en Welsum',
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
    eyebrow: 'También sobre dos ruedas',
    heading: 'Motos, con la misma obsesión.',
    body:
      'Buscamos motos BMW en el mercado alemán — de una R 1250 GS reciente a las airhead clásicas, con más de 14.000 motos BMW a la venta cada día. Evaluamos los puntos débiles de cada modelo, negociamos de su lado y transportamos la moto nosotros mismos: asegurada, en nuestro propio remolque para dos motos, con entrega en toda Europa.',
    points: [
      'Encargo de búsqueda desde €1.250 — pagado por fases',
      'Transporte asegurado en remolque propio, dos motos por viaje',
      'Acompañamiento en la matriculación en su país',
    ],
    linkLabel: 'Vea el servicio de motos',
    linkHref: '/es/motos/',
    img: '/images/moto-hero.jpg',
    imgAlt: 'Carretera de montaña al atardecer — servicio de motos Rolvink',
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
      'Solo pujamos con su luz verde explícita',
      'Solo grade 4+ y sin historial de daños',
      'Una línea directa con Theo — sin call center',
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
