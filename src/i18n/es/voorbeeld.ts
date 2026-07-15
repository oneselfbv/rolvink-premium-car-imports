// ES — página del ejemplo de importación.
const voorbeeld = {
  meta: {
    title: 'Ejemplo: ¿cuánto cuesta importar un coche? | Rolvink',
    description:
      'Un proceso de sourcing calculado al completo: compra, transporte, impuestos y nuestra fee — desglosados con transparencia en un caso W212 concreto.',
  },
  breadcrumbHome: 'Inicio',
  breadcrumbCurrent: 'Ejemplo de importación',
  eyebrow: 'Ejemplo de importación',
  h1Html: '¿Cuánto cuesta un <span class="accent">proceso de importación</span>?',
  lead: 'Un caso concreto, calculado al completo. Del precio de martillo en la subasta japonesa a la entrega en la puerta del cliente. Todas las partidas, sin márgenes ocultos.',
  heroImgAlt: 'Imagen representativa de un Mercedes-Benz Clase E (W212)',
  heroCaption: 'Imagen representativa — el caso de ejemplo es un Mercedes E 300 4MATIC (W212).',
  disclaimerHtml:
    '<strong>Qué es esto — y qué no es.</strong> El cálculo siguiente es un <em>caso de ejemplo</em> con un vehículo elegido de forma ficticia para hacer comprensible la estructura de un proceso típico. Se trata de una entrega con matriculación en los Países Bajos: los impuestos mostrados (aranceles, IVA neerlandés del 21% y el impuesto de matriculación neerlandés BPM) corresponden a ese escenario. Para una entrega en España calculamos antes de cualquier puja el equivalente — aranceles UE, IVA español e impuesto de matriculación español — para su vehículo concreto. Los importes reales varían según el coche, el tipo de cambio, el método fiscal y los plazos administrativos, y están redondeados a decenas de euros. Para su propia búsqueda elaboramos una previsión fundamentada del coste final antes de pujar — esto no es una lista de tarifas.',
  vehicle: {
    heading: 'El vehículo de este caso',
    specs: [
      { dt: 'Marca y modelo', dd: 'Mercedes-Benz E300 4MATIC Avantgarde (W212)' },
      { dt: 'Año', dd: '2014' },
      { dt: 'Motor', dd: 'V6 gasolina de 3.5L, 252 CV' },
      { dt: 'Kilometraje', dd: '48.000 km (bajo)' },
      { dt: 'Estado', dd: 'JCD grade 4 (bueno)' },
      { dt: 'Procedencia', dd: 'Subasta japonesa — versión LHD' },
      { dt: 'Precio de martillo', dd: '¥1.040.000 (~€6.150 a un cambio de 169 ¥/€)' },
    ],
  },
  table: {
    heading: 'El desglose completo',
    colCategory: 'Categoría',
    colItem: 'Partida',
    colAmount: 'Importe',
    sections: [
      {
        header: '1. Compra en Japón',
        rows: [
          { item: 'Precio de martillo en subasta', amount: '€ 6.150' },
          { item: 'Fees y comisión de la casa de subastas', amount: '€ 480' },
          { item: 'Transporte interior en Japón + inspección de exportación', amount: '€ 720' },
        ],
      },
      {
        header: '2. Flete marítimo y llegada',
        rows: [
          { item: 'RoRo Yokohama → Róterdam (seguro de tránsito incl.)', amount: '€ 1.000' },
          { item: 'Agente de aduanas + documentación', amount: '€ 400' },
        ],
        subtotal: { item: 'Valor CIF (base para la aduana)', amount: '€ 8.750' },
      },
      {
        header: '3. Impuestos (matriculación en los Países Bajos)',
        rows: [
          { item: 'Aranceles del 10% sobre el CIF (HS 8703)', amount: '€ 875' },
          { item: 'IVA neerlandés del 21% sobre (CIF + aranceles)', amount: '€ 2.021' },
          { item: 'BPM neerlandés según lista de cotización (V6, 2014, depreciación por antigüedad ~85%)', amount: '€ 1.150' },
        ],
      },
      {
        header: '4. Formalidades y preparación en los Países Bajos',
        rows: [
          { item: 'Inspección técnica + identificación + tasas de matriculación', amount: '€ 450' },
          { item: 'Adaptaciones de conformidad UE (iluminación de matrícula, antiniebla trasera)', amount: '€ 280' },
          { item: 'Reacondicionamiento + limpieza a fondo', amount: '€ 320' },
        ],
      },
      {
        header: '5. Nuestra fee de servicio',
        rows: [
          { item: 'Fee de sourcing (conversación inicial, búsqueda, estrategia de puja, agente en Japón)', amount: '€ 1.250' },
          { item: 'Fee operativa (3% sobre CIF, transporte y trámites de destino)', amount: '€ 460' },
        ],
      },
    ],
    total: { item: 'Coste final total — todo incluido', amount: '€ 15.556' },
    noteHtml:
      '<em>Todos los importes son indicativos, según el tipo de cambio y las tarifas de mayo de 2026. BPM neerlandés según el método de lista de cotización; el método a tanto alzado daría €1.400 y la tasación oficial ~€1.250. Calculamos los tres métodos y elegimos el más favorable.</em>',
  },
  explain: {
    heading: 'Explicación por categoría',
    blocks: [
      {
        heading: '1. Compra en Japón — €7.350',
        bodyHtml:
          'El precio de martillo es el precio al que cae el reloj de la subasta. A eso se suman las <strong>fees de la casa de subastas</strong> (típicamente el 4-8% del martillo), la <strong>comisión</strong> de nuestro agente japonés y el <strong>transporte interior</strong> desde la sede de la subasta hasta el puerto de exportación (a menudo Yokohama o Kobe), incluida la inspección de exportación y la baja de la matrícula japonesa.',
      },
      {
        heading: '2. Flete marítimo y llegada — €1.400',
        bodyHtml:
          '<strong>RoRo</strong> (Roll-on Roll-off) es el método estándar para el transporte marítimo de coches — el vehículo entra y sale del buque rodando sobre sus propias ruedas. De media, 5-6 semanas de Yokohama a Róterdam, a veces hasta 7-8 por efectos estacionales. El seguro de tránsito está incluido de serie en nuestra tarifa. El <strong>agente de aduanas</strong> gestiona el despacho en Róterdam.',
      },
      {
        heading: '3. Impuestos — €4.046',
        bodyHtml:
          '<strong>Los importes de esta categoría corresponden a una matriculación en los Países Bajos.</strong> Aranceles del 10% sobre el valor CIF (código HS 8703 para turismos), IVA neerlandés del 21% sobre CIF + aranceles, y el impuesto de matriculación neerlandés BPM — calculado por el método más favorable; en este W212, la lista de cotización (€1.150). Para coches usados procedentes de Alemania no habría aranceles ni IVA de importación adicional, al tratarse del mercado interior de la UE; en la ruta Japón siempre se devengan. Para una entrega en España calculamos antes de cualquier puja el equivalente: los mismos aranceles UE, el IVA español y el impuesto de matriculación español — con cifras fundamentadas para su vehículo concreto.',
      },
      {
        heading: '4. Formalidades y preparación en los Países Bajos — €1.050',
        bodyHtml:
          'El coche pasa la inspección técnica neerlandesa, incluida la identificación. Las <strong>adaptaciones de conformidad UE</strong> pueden ser necesarias en importaciones japonesas — por ejemplo, un segundo antiniebla trasero o un ajuste de la iluminación de la matrícula. El <strong>reacondicionamiento</strong> incluye una limpieza profesional y, si procede, pequeñas correcciones cosméticas.',
      },
      {
        heading: '5. Nuestra fee de servicio — €1.710',
        bodyHtml:
          'La <strong>fee de sourcing</strong> cubre toda la fase previa: conversación inicial, elaboración del perfil, filtrado dirigido de subastas, traducción de las hojas de subasta, asesoramiento sobre la estrategia de puja y coordinación de la puja con nuestro agente japonés. La <strong>fee operativa</strong> (3% sobre CIF + transporte + trámites de destino) cubre la gestión del transporte, el despacho de aduanas, la coordinación de las inspecciones y la entrega. Sin porcentajes ocultos sobre el precio de martillo, sin margen sobre costes de terceros.',
      },
    ],
  },
  variants: {
    heading: '¿Cuándo difieren las cifras reales?',
    itemsHtml: [
      '<strong>Otro tipo de cambio</strong> — un movimiento del ±5% en el cambio yen-euro altera directamente la conversión del precio de martillo. Trabajamos con límites de puja conservadores que cubren un ±3%; con movimientos mayores esperamos a la estabilización.',
      '<strong>Precio de martillo más alto o más bajo</strong> — cambia la base. Todos los costes proporcionales (IVA, fees) se desplazan con ella.',
      '<strong>Impuestos de matriculación más altos</strong> — para versiones V8 o coches más recientes con CO₂ elevado, el BPM neerlandés puede salir €2.000-€4.000 más alto; el impuesto de matriculación español también depende de las emisiones de CO₂. Calculamos el escenario aplicable a su país antes de pujar.',
      '<strong>Ruta Alemania en lugar de Japón</strong> — sin RoRo (€1.000 menos), con inspección presencial (€280-€450 incluida la jornada de viaje). Sin aranceles ni IVA de importación adicional al ser mercado interior de la UE. Otra estructura de costes, valor total comparable.',
      '<strong>Clásico de más de 25 o 40 años</strong> — regímenes fiscales reducidos o exenciones, según el país de matriculación. Para clásicos pueden aplicarse además aranceles reducidos bajo determinadas condiciones (código HS 9705). Puede suponer miles de euros de diferencia.',
      '<strong>Trabajos adicionales</strong> — tratamiento cerámico, renovación del cuero o modificaciones específicas son opcionales y se facturan aparte a través de socios de detailing seleccionados. Sin margen sobre nuestra fee.',
    ],
  },
  promise: {
    heading: 'Nuestra promesa de transparencia',
    paragraphsHtml: [
      'Antes de cada puja recibe usted una previsión fundamentada del coste final para su coche candidato concreto — con la misma estructura que la anterior y con los impuestos del país donde se matriculará el coche. Nuestra fee de servicio queda fijada de principio a fin en el importe acordado en su confirmación de encargo; sin porcentajes que aparezcan después. El riesgo de tipo de cambio, el resultado fiscal y los plazos administrativos los comunicamos honestamente como variables — y para cada variable recibe una horquilla conservadora.',
      'Eso es lo que entendemos por <em>transparencia sin márgenes ocultos</em>: no "usted no recibe facturas", sino "usted ve todas las facturas sobre la mesa". La estructura completa de tarifas (ruta Alemania, ruta Japón, servicios sueltos) está en la <a href="/es/tarifas/">página de tarifas</a>.',
    ],
  },
  pageCta: {
    heading: '¿El coste final para su búsqueda?',
    body: 'Cuéntenos qué busca — elaboramos una previsión fundamentada con la misma estructura que este caso de ejemplo.',
    btn: 'Planifique una conversación',
    note: 'Respuesta en 24 horas · Sin presión comercial',
  },
  ctaHref: '/es/contacto/',
};

export default voorbeeld;
