// DE — Beispiel-Import-Seite. Alle Euro-Beträge identisch zur NL-Quelle;
// Rahmung: Beispielrechnung mit Zulassung in den Niederlanden, deutsches
// Zielland wird vorab durchgerechnet (keine erfundene deutsche Summe).
const voorbeeld = {
  meta: {
    title: 'Beispiel-Import: Was kostet ein Auto aus Japan? | Rolvink',
    description:
      'Ein komplettes Sourcing-Projekt durchgerechnet: Kauf auf der Japan-Auktion, Transport, Abgaben und unsere Fee — transparent aufgeschlüsselt am W212-Fall.',
  },
  breadcrumbHome: 'Startseite',
  breadcrumbCurrent: 'Beispiel-Import',
  eyebrow: 'Beispiel-Import',
  h1Html: 'Was kostet ein <span class="accent">Import-Projekt</span>?',
  lead: 'Ein konkreter Fall, vollständig durchgerechnet. Vom Zuschlagspreis auf der japanischen Auktion bis zur Übergabe vor der Haustür. Alle Posten, keine versteckten Margen.',
  heroImgAlt: 'Repräsentatives Bild einer Mercedes-Benz E-Klasse (W212)',
  heroCaption: 'Repräsentatives Bild — der Beispielfall betrifft einen Mercedes E 300 4MATIC (W212).',
  disclaimerHtml:
    '<strong>Was das ist — und was nicht.</strong> Die folgende Berechnung ist ein <em>Beispielfall</em> mit einem fiktiv gewählten Fahrzeug, um die Struktur eines typischen Projekts sichtbar zu machen. Diese Beispielrechnung zeigt eine Lieferung mit Zulassung in den Niederlanden (inkl. niederländischer BPM). Für eine Lieferung nach Deutschland entfallen BPM/RDW; stattdessen fallen deutsche Einfuhrumsatzsteuer und Zulassungskosten an — wir rechnen Ihr Ziel-Land vorab durch. Tatsächliche Beträge variieren je nach Fahrzeug, Wechselkurs, Abgabenmethode, Behörden-Durchlaufzeit und etwaigen Zusatzarbeiten. Beträge auf zehn Euro gerundet. Für Ihre eigene Suche erstellen wir eine belastbare Landed-Cost-Prognose vor jedem Gebot — dies ist keine Preisliste.',
  vehicle: {
    heading: 'Das Fahrzeug in diesem Fall',
    specs: [
      { dt: 'Marke & Modell', dd: 'Mercedes-Benz E300 4MATIC Avantgarde (W212)' },
      { dt: 'Baujahr', dd: '2014' },
      { dt: 'Motor', dd: '3.5L V6 Benziner, 252 PS' },
      { dt: 'Laufleistung', dd: '48.000 km (niedrig)' },
      { dt: 'Zustand', dd: 'JCD-grade 4 (gut)' },
      { dt: 'Herkunft', dd: 'Japanische Auktion — LHD-Ausführung' },
      { dt: 'Zuschlagspreis', dd: '¥1.040.000 (~€6.150 bei Kurs 169 ¥/€)' },
    ],
  },
  table: {
    heading: 'Die vollständige Aufstellung',
    colCategory: 'Kategorie',
    colItem: 'Posten',
    colAmount: 'Betrag',
    sections: [
      {
        header: '1. Kauf in Japan',
        rows: [
          { item: 'Zuschlagspreis Auktion', amount: '€ 6.150' },
          { item: 'Auktionshaus-Fees + Kommission', amount: '€ 480' },
          { item: 'Inlandstransport JP + Exportprüfung', amount: '€ 720' },
        ],
      },
      {
        header: '2. Seefracht und Ankunft',
        rows: [
          { item: 'RoRo Yokohama → Rotterdam (inkl. Transit-Versicherung)', amount: '€ 1.000' },
          { item: 'Zollagent + Papierarbeit im Ankunftshafen', amount: '€ 400' },
        ],
        subtotal: { item: 'CIF-Wert (Basis für den Zoll)', amount: '€ 8.750' },
      },
      {
        header: '3. Steuern und Abgaben (in diesem Fall: Niederlande)',
        rows: [
          { item: 'Einfuhrzoll 10% auf CIF (HS 8703)', amount: '€ 875' },
          { item: 'Niederländische MwSt. 21% auf (CIF + Zoll)', amount: '€ 2.021' },
          { item: 'BPM — niederländische Zulassungssteuer, Kurslisten-Methode (V6, 2014, Altersabschreibung ~85%)', amount: '€ 1.150' },
        ],
      },
      {
        header: '4. Niederländische Formalitäten und Aufbereitung',
        rows: [
          { item: 'RDW-Prüfung + Identifikation + Kennzeichenkosten', amount: '€ 450' },
          { item: 'EU-Konformitätsanpassungen (Kennzeichenbeleuchtung, Nebelschlussleuchte)', amount: '€ 280' },
          { item: 'Aufbereitung + professionelle Politur', amount: '€ 320' },
        ],
      },
      {
        header: '5. Unsere Service-Fee',
        rows: [
          { item: 'Sourcing-Fee (Erstgespräch, Suchauftrag, Gebotsstrategie, Agent in Japan)', amount: '€ 1.250' },
          { item: 'Operative Fee (3% auf CIF, Transport und Abwicklung)', amount: '€ 460' },
        ],
      },
    ],
    total: { item: 'Gesamte Landed Cost — all-in', amount: '€ 15.556' },
    noteHtml:
      '<em>Alle Beträge indikativ, basierend auf Kurs und Sätzen von Mai 2026, für eine Zulassung in den Niederlanden. Die BPM läuft hier über die Kurslisten-Methode; die Pauschale läge bei €1.400, ein Wertgutachten bei ~€1.250 — wir rechnen alle drei Methoden durch und wählen die günstigste. Für eine Lieferung nach Deutschland entfallen BPM und RDW-Posten; stattdessen fallen deutsche Einfuhrumsatzsteuer und Zulassungskosten an.</em>',
  },
  explain: {
    heading: 'Erläuterung je Kategorie',
    blocks: [
      {
        heading: '1. Kauf in Japan — €7.350',
        bodyHtml:
          'Der Zuschlagspreis ist der Preis, bei dem die Auktionsuhr fällt. Hinzu kommen <strong>Auktionshaus-Fees</strong> (typisch 4-8% des Zuschlags), die <strong>Kommission</strong> unseres japanischen Agenten sowie der <strong>Inlandstransport</strong> vom Auktionsort zum Exporthafen (meist Yokohama oder Kobe) inklusive Exportprüfung und Abmeldung des japanischen Kennzeichens.',
      },
      {
        heading: '2. Seefracht und Ankunft — €1.400',
        bodyHtml:
          '<strong>RoRo</strong> (Roll-on Roll-off) ist die Standardmethode für den Fahrzeugtransport über See — das Auto wird auf eigenen Rädern an und von Bord gefahren. Dauer im Schnitt 5-6 Wochen von Yokohama nach Rotterdam, bei Saisoneffekten bis zu 7-8 Wochen. Die Transit-Versicherung ist bei uns standardmäßig enthalten. Der <strong>Zollagent</strong> übernimmt die Abfertigung im Ankunftshafen.',
      },
      {
        heading: '3. Steuern und Abgaben — €4.046',
        bodyHtml:
          '<strong>Einfuhrzoll</strong> 10% auf den CIF-Wert (HS-Code 8703 für Pkw) — dieser Satz gilt EU-weit, also auch für Deutschland. Die übrigen Posten zeigen den niederländischen Fall: 21% niederländische MwSt. plus <strong>BPM</strong>, die niederländische Zulassungssteuer — für diesen W212 ist die Kurslisten-Methode die günstigste (€1.150). Für eine Lieferung nach Deutschland entfällt die BPM; stattdessen fallen deutsche <strong>Einfuhrumsatzsteuer (19%)</strong> und Zulassungskosten an — wir rechnen Ihr Ziel-Land vorab transparent durch.',
      },
      {
        heading: '4. Niederländische Formalitäten und Aufbereitung — €1.050',
        bodyHtml:
          'In diesem Fall durchläuft das Auto die Prüfung der RDW, der niederländischen Zulassungsbehörde, inklusive Identifikation. Bei einer Zulassung in Deutschland treten an deren Stelle die Begutachtung (z. B. TÜV) und die deutsche Zulassung. <strong>EU-Konformitätsanpassungen</strong> können bei Japan-Importen unabhängig vom Zielland nötig sein — etwa eine Nebelschlussleuchte oder eine Anpassung der Kennzeichenbeleuchtung. Die <strong>Aufbereitung</strong> umfasst eine professionelle Politur und etwaige kleine kosmetische Korrekturen.',
      },
      {
        heading: '5. Unsere Service-Fee — €1.710',
        bodyHtml:
          'Die <strong>Sourcing-Fee</strong> deckt das komplette Vorprojekt: Erstgespräch, Profilausarbeitung, wöchentliches Auktions-Screening, Übersetzung der Auction Sheets, Beratung zur Gebotsstrategie und Gebots-Koordination mit unserem japanischen Agenten. Die <strong>operative Fee</strong> (3% auf CIF + Transport + Abwicklung) deckt Transport, Verzollung, Behörden-Koordination und Übergabe. Keine versteckten Prozente auf den Zuschlagspreis, keine Marge auf Nebenkosten.',
      },
    ],
  },
  variants: {
    heading: 'Wann weichen die tatsächlichen Zahlen ab?',
    itemsHtml: [
      '<strong>Anderer Wechselkurs</strong> — eine ±5%-Bewegung des Yen-Euro-Kurses verändert die Umrechnung des Zuschlagspreises direkt. Wir arbeiten mit konservativen Gebotsgrenzen, die ±3% abdecken; bei größeren Bewegungen warten wir auf Stabilisierung.',
      '<strong>Höherer oder niedrigerer Zuschlagspreis</strong> — die Basis ändert sich. Alle proportionalen Kosten (Steuern, Fees) verschieben sich mit.',
      '<strong>Größerer Motor, jüngeres Baujahr</strong> — Zulassungssteuern und CO₂-abhängige Abgaben unterscheiden sich je nach Land und Motorisierung erheblich; im niederländischen Beispielfall kann die BPM für V8-Ausführungen oder jüngere Autos €2.000-€4.000 höher ausfallen. Für Ihr Ziel-Land rechnen wir die Abgaben vorab konkret durch.',
      '<strong>Deutschland-Route statt Japan</strong> — kein RoRo (€1.000 entfallen), dafür persönliche Besichtigung (€280-€450 inklusive Reisetag). Innerhalb des EU-Binnenmarkts keine Einfuhrabgaben. Andere Kostenstruktur, vergleichbarer Gesamtwert.',
      '<strong>Klassiker über 25 oder 40 Jahre</strong> — je nach Land reduzierte Zulassungsabgaben oder vollständige Befreiung. Für Sammlerfahrzeuge gelten zudem unter bestimmten Voraussetzungen reduzierte Einfuhrzölle (HS-Code 9705). Das kann Tausende Euro ausmachen.',
      '<strong>Zusätzliche Arbeiten</strong> — Keramikversiegelung, Lederaufbereitung oder spezifische Modifikationen sind optional und laufen separat über ausgewählte Detailing-Partner. Keine Marge auf unsere Fee.',
    ],
  },
  promise: {
    heading: 'Unser Transparenz-Versprechen',
    paragraphsHtml: [
      'Vor jedem Gebot erhalten Sie eine belastbare Landed-Cost-Prognose für Ihren konkreten Kandidaten — mit derselben Struktur wie oben, gerechnet auf Ihr Ziel-Land. Unsere Service-Fee steht von Anfang bis Ende auf dem Betrag fest, der in Ihrer Auftragsbestätigung vereinbart ist; keine Prozente, die später auftauchen. Wechselkursrisiko, Abgaben-Ergebnis und Behörden-Durchlaufzeit kommunizieren wir ehrlich als variabel — und für jede Variable erhalten Sie eine konservative Bandbreite.',
      'Das meinen wir mit <em>Transparenz ohne versteckte Margen</em>: nicht „Sie bekommen keine Rechnung“, sondern „Sie bekommen jede Rechnung auf den Tisch“. Die vollständige Preisstruktur (Deutschland-Route, Japan-Route, Einzelleistungen) finden Sie auf der <a href="/de/preise/">Preise-Seite</a>.',
    ],
  },
  pageCta: {
    heading: 'Landed Cost für Ihre Suche?',
    body: 'Sagen Sie uns, was Sie suchen — wir erstellen eine belastbare Prognose mit derselben Struktur wie dieser Beispielfall, gerechnet auf Ihr Ziel-Land.',
    btn: 'Erstgespräch vereinbaren',
    note: 'Antwort innerhalb von 24 Stunden · Kein Verkaufsdruck',
  },
  ctaHref: '/de/kontakt/',
};

export default voorbeeld;
