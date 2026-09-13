import type { Metadata } from 'next';
import { IndustrialCampaignPage, type CampaignPageData } from '@/components/landing-pages/industrial-campaign-page';
import { buildCampaignSchema } from '@/lib/campaign-schema';
import type { Language } from '@/hooks/use-language';

export const metadata: Metadata = {
  title: 'Rolos de Forno Sob Medida | Furnace Rolls Industriais',
  description: 'Rolos de forno centrifugados sob medida para tratamento térmico, linhas CAPL, CGL e fornos contínuos. Análise técnica conforme o projeto.',
  alternates: { canonical: '/rolos-de-forno' },
  openGraph: { title: 'Rolos de Forno e Furnace Rolls | Aceros', description: 'Rolos centrifugados resistentes a altas temperaturas, fabricados conforme desenho técnico.', url: '/rolos-de-forno', images: [{ url: '/images/imgur/gbNL57g.png', alt: 'Rolo de forno fabricado pela Aceros' }] },
};

const heroImage = '/images/imgur/gbNL57g.png';
const detailImage = '/images/imgur/iYTJsbZ.png';
const gallery = [
  { src: '/images/imgur/zNJQB1c.png' },
  { src: '/images/imgur/28cnqjU.png' },
  { src: '/images/imgur/j6Y8N8S.png' },
];

const path = '/rolos-de-forno';
const source = 'lp-rolos-forno';

const dataByLang: Record<Language, CampaignPageData> = {
  pt: {
    path, source,
    eyebrow: 'Furnace Rolls · Fabricação Aceros',
    title: 'Rolos de forno para operação contínua em alta temperatura',
    heroDescription: 'Rolos centrifugados, resfriados ou não resfriados, desenvolvidos conforme o forno, a carga e o ciclo térmico da sua linha industrial.',
    heroImage, heroAlt: 'Rolo industrial para forno túnel CSP fabricado pela Aceros',
    overviewTitle: 'Engenharia aplicada às condições do forno',
    overview: [
      'A Aceros fabrica rolos de forno em ligas selecionadas conforme fluência, oxidação e ciclos térmicos. A análise considera temperatura, atmosfera, carga, rotação e sistema de refrigeração.',
      'O fornecimento pode seguir o desenho do cliente ou ser desenvolvido em conjunto com nossa engenharia, incluindo centrifugação, usinagem, montagem e controle dimensional.',
    ],
    detailImage, detailAlt: 'Tubos radiantes e rolos para fornos CAPL e CGL',
    benefits: ['Rolos resfriados e não resfriados', 'Ligas definidas conforme o projeto', 'Opções revestidas e não revestidas', 'Dimensões e acabamento sob medida'],
    applications: [
      { title: 'Fornos túnel CSP', description: 'Rolos para transporte de placas sob regime térmico contínuo e elevada carga.' },
      { title: 'Linhas CAPL e CGL', description: 'Furnace rolls para recozimento e galvanização contínua, com ou sem revestimento.' },
      { title: 'Tratamento térmico', description: 'Rolos transportadores para têmpera, revenimento, recozimento e outros ciclos.' },
      { title: 'Fornos de barras', description: 'Rolos de carga e descarga, secos ou molhados, conforme a configuração do equipamento.' },
      { title: 'Walking beam', description: 'Componentes para fornos de vigas caminhantes e tratamento térmico de tubos.' },
      { title: 'Modernização de linhas', description: 'Reposição e avaliação de componentes a partir de desenho, amostra ou histórico de operação.' },
    ],
    specs: [
      { label: 'Processo', value: 'Fundição centrifugada' },
      { label: 'Ligas', value: 'ASTM A297 e superligas' },
      { label: 'Configuração', value: 'Resfriado ou não resfriado' },
      { label: 'Fornecimento', value: 'Conforme desenho técnico' },
    ],
    gallery: gallery.map((g, i) => ({ ...g, alt: ['Rolo industrial usinado para linha siderúrgica', 'Peças e rolos para forno de barras', 'Rolo de aço usinado para aplicação industrial'][i] })),
    faq: [
      { question: 'Os rolos são fabricados conforme desenho?', answer: 'Sim. Diâmetros, comprimento, pontas, flanges, refrigeração e acabamento são definidos conforme o desenho e a condição de operação.' },
      { question: 'Quais ligas são usadas?', answer: 'A seleção depende da temperatura, atmosfera e solicitação mecânica. A liga ASTM A297 e seu grau são definidos conforme os requisitos de cada projeto.' },
      { question: 'A Aceros fornece rolos resfriados?', answer: 'Sim. Fabricamos configurações resfriadas e não resfriadas, de acordo com o projeto do forno.' },
    ],
    whatsappText: 'Olá! Gostaria de solicitar um orçamento para rolos de forno (Furnace Rolls).',
    formHint: 'Informe o tipo de forno, temperatura, dimensões, liga atual e, se possível, os dados do desenho técnico.',
  },
  en: {
    path, source,
    eyebrow: 'Furnace Rolls · Made by Aceros',
    title: 'Furnace rolls for continuous high-temperature operation',
    heroDescription: 'Centrifugally cast rolls, water-cooled or non-cooled, engineered to your furnace, load and thermal cycle.',
    heroImage, heroAlt: 'Industrial roll for CSP tunnel furnace made by Aceros',
    overviewTitle: 'Engineering matched to your furnace conditions',
    overview: [
      'Aceros manufactures furnace rolls in alloys selected for creep, oxidation and thermal cycling. The analysis takes into account temperature, atmosphere, load, rotation and cooling system.',
      'Supply follows the customer\'s drawing or is co-developed with our engineering team, including centrifugal casting, machining, assembly and dimensional control.',
    ],
    detailImage, detailAlt: 'Radiant tubes and rolls for CAPL and CGL furnaces',
    benefits: ['Water-cooled and non-cooled rolls', 'Alloys defined for each project', 'Coated and non-coated options', 'Custom dimensions and finish'],
    applications: [
      { title: 'CSP tunnel furnaces', description: 'Rolls for slab handling under continuous thermal load.' },
      { title: 'CAPL and CGL lines', description: 'Furnace rolls for continuous annealing and galvanising, with or without coating.' },
      { title: 'Heat treatment', description: 'Conveying rolls for quenching, tempering, annealing and other cycles.' },
      { title: 'Bar furnaces', description: 'Loading and unloading rolls, dry or wet, per equipment configuration.' },
      { title: 'Walking beam', description: 'Components for walking-beam furnaces and pipe heat treatment.' },
      { title: 'Line upgrades', description: 'Replacement and assessment of components from drawing, sample or operating history.' },
    ],
    specs: [
      { label: 'Process', value: 'Centrifugal casting' },
      { label: 'Alloys', value: 'ASTM A297 and superalloys' },
      { label: 'Configuration', value: 'Water-cooled or non-cooled' },
      { label: 'Supply', value: 'To technical drawing' },
    ],
    gallery: gallery.map((g, i) => ({ ...g, alt: ['Machined industrial roll for steel line', 'Parts and rolls for bar furnace', 'Machined steel roll for industrial application'][i] })),
    faq: [
      { question: 'Are the rolls made to drawing?', answer: 'Yes. Diameters, length, ends, flanges, cooling and finish are defined by the drawing and the operating condition.' },
      { question: 'Which alloys are used?', answer: 'Selection depends on temperature, atmosphere and mechanical load. The ASTM A297 alloy and grade are defined per project requirements.' },
      { question: 'Does Aceros supply cooled rolls?', answer: 'Yes. We manufacture both water-cooled and non-cooled configurations, in line with the furnace design.' },
    ],
    whatsappText: 'Hi! I would like a quote for furnace rolls.',
    formHint: 'Please share the furnace type, temperature, dimensions, current alloy and, if possible, the technical drawing data.',
  },
  es: {
    path, source,
    eyebrow: 'Furnace Rolls · Fabricación Aceros',
    title: 'Rodillos de horno para operación continua a alta temperatura',
    heroDescription: 'Rodillos centrifugados, refrigerados o no refrigerados, desarrollados según el horno, la carga y el ciclo térmico de su línea industrial.',
    heroImage, heroAlt: 'Rodillo industrial para horno túnel CSP fabricado por Aceros',
    overviewTitle: 'Ingeniería aplicada a las condiciones del horno',
    overview: [
      'Aceros fabrica rodillos de horno en aleaciones seleccionadas según fluencia, oxidación y ciclos térmicos. El análisis considera temperatura, atmósfera, carga, rotación y sistema de refrigeración.',
      'El suministro puede seguir el plano del cliente o desarrollarse junto con nuestra ingeniería, incluyendo centrifugación, mecanizado, montaje y control dimensional.',
    ],
    detailImage, detailAlt: 'Tubos radiantes y rodillos para hornos CAPL y CGL',
    benefits: ['Rodillos refrigerados y no refrigerados', 'Aleaciones definidas según el proyecto', 'Opciones con y sin recubrimiento', 'Dimensiones y acabado a medida'],
    applications: [
      { title: 'Hornos túnel CSP', description: 'Rodillos para transporte de placas bajo régimen térmico continuo y elevada carga.' },
      { title: 'Líneas CAPL y CGL', description: 'Furnace rolls para recocido y galvanizado continuo, con o sin recubrimiento.' },
      { title: 'Tratamiento térmico', description: 'Rodillos transportadores para temple, revenido, recocido y otros ciclos.' },
      { title: 'Hornos de barras', description: 'Rodillos de carga y descarga, secos o mojados, según la configuración del equipo.' },
      { title: 'Walking beam', description: 'Componentes para hornos de vigas caminantes y tratamiento térmico de tubos.' },
      { title: 'Modernización de líneas', description: 'Reposición y evaluación de componentes a partir de plano, muestra o historial de operación.' },
    ],
    specs: [
      { label: 'Proceso', value: 'Fundición centrifugada' },
      { label: 'Aleaciones', value: 'ASTM A297 y superaleaciones' },
      { label: 'Configuración', value: 'Refrigerado o no refrigerado' },
      { label: 'Suministro', value: 'Según plano técnico' },
    ],
    gallery: gallery.map((g, i) => ({ ...g, alt: ['Rodillo industrial mecanizado para línea siderúrgica', 'Piezas y rodillos para horno de barras', 'Rodillo de acero mecanizado para aplicación industrial'][i] })),
    faq: [
      { question: '¿Los rodillos se fabrican según plano?', answer: 'Sí. Diámetros, longitud, extremos, bridas, refrigeración y acabado se definen según el plano y la condición de operación.' },
      { question: '¿Qué aleaciones se utilizan?', answer: 'La selección depende de la temperatura, atmósfera y solicitación mecánica. La aleación ASTM A297 y su grado se definen según los requisitos del proyecto.' },
      { question: '¿Aceros suministra rodillos refrigerados?', answer: 'Sí. Fabricamos configuraciones refrigeradas y no refrigeradas, según el diseño del horno.' },
    ],
    whatsappText: '¡Hola! Quisiera solicitar un presupuesto para rodillos de horno (Furnace Rolls).',
    formHint: 'Indique el tipo de horno, temperatura, dimensiones, aleación actual y, si es posible, los datos del plano técnico.',
  },
  de: {
    path, source,
    eyebrow: 'Furnace Rolls · Fertigung Aceros',
    title: 'Ofenrollen für den Dauerbetrieb bei hoher Temperatur',
    heroDescription: 'Schleudergegossene Rollen, gekühlt oder ungekühlt, ausgelegt auf Ofen, Last und thermischen Zyklus Ihrer Anlage.',
    heroImage, heroAlt: 'Industrierolle für CSP-Tunnelofen von Aceros',
    overviewTitle: 'Konstruktion nach Ofenbedingungen',
    overview: [
      'Aceros fertigt Ofenrollen in Legierungen, ausgewählt nach Kriechen, Oxidation und thermischen Zyklen. Berücksichtigt werden Temperatur, Atmosphäre, Last, Drehzahl und Kühlsystem.',
      'Die Lieferung erfolgt nach Kundenzeichnung oder gemeinsam mit unserer Konstruktion, einschließlich Schleuderguss, Bearbeitung, Montage und Maßkontrolle.',
    ],
    detailImage, detailAlt: 'Strahlrohre und Rollen für CAPL- und CGL-Öfen',
    benefits: ['Gekühlte und ungekühlte Rollen', 'Legierungen je Projekt', 'Beschichtete und unbeschichtete Ausführungen', 'Abmessungen und Ausführung nach Maß'],
    applications: [
      { title: 'CSP-Tunnelöfen', description: 'Rollen für den Transport von Brammen unter kontinuierlicher Wärme- und hoher Last.' },
      { title: 'CAPL- und CGL-Linien', description: 'Furnace Rolls für kontinuierliches Glühen und Verzinken, mit oder ohne Beschichtung.' },
      { title: 'Wärmebehandlung', description: 'Transportrollen für Härten, Anlassen, Glühen und weitere Zyklen.' },
      { title: 'Stabofen', description: 'Ein- und Auslaufrollen, trocken oder nass, je Anlagenkonfiguration.' },
      { title: 'Walking Beam', description: 'Bauteile für Hubbalkenöfen und Rohrwärmebehandlung.' },
      { title: 'Anlagenmodernisierung', description: 'Ersatz und Bewertung von Bauteilen aus Zeichnung, Probe oder Betriebshistorie.' },
    ],
    specs: [
      { label: 'Prozess', value: 'Schleuderguss' },
      { label: 'Legierungen', value: 'ASTM A297 und Superlegierungen' },
      { label: 'Ausführung', value: 'Gekühlt oder ungekühlt' },
      { label: 'Lieferung', value: 'Nach technischer Zeichnung' },
    ],
    gallery: gallery.map((g, i) => ({ ...g, alt: ['Bearbeitete Industrierolle für Stahllinie', 'Teile und Rollen für Stabofen', 'Bearbeitete Stahlrolle für industrielle Anwendung'][i] })),
    faq: [
      { question: 'Werden die Rollen nach Zeichnung gefertigt?', answer: 'Ja. Durchmesser, Länge, Enden, Flansche, Kühlung und Ausführung werden nach Zeichnung und Einsatzbedingung definiert.' },
      { question: 'Welche Legierungen werden verwendet?', answer: 'Die Auswahl richtet sich nach Temperatur, Atmosphäre und mechanischer Beanspruchung. Die ASTM-A297-Legierung und deren Güte werden je Projekt festgelegt.' },
      { question: 'Liefert Aceros gekühlte Rollen?', answer: 'Ja. Wir fertigen gekühlte und ungekühlte Ausführungen entsprechend der Ofenauslegung.' },
    ],
    whatsappText: 'Hallo! Ich möchte ein Angebot für Ofenrollen (Furnace Rolls) anfragen.',
    formHint: 'Bitte geben Sie Ofentyp, Temperatur, Abmessungen, aktuelle Legierung und – wenn möglich – die Zeichnungsdaten an.',
  },
  it: {
    path, source,
    eyebrow: 'Furnace Rolls · Produzione Aceros',
    title: 'Rulli da forno per esercizio continuo ad alta temperatura',
    heroDescription: 'Rulli centrifugati, raffreddati o non raffreddati, sviluppati in base a forno, carico e ciclo termico della linea industriale.',
    heroImage, heroAlt: 'Rullo industriale per forno a tunnel CSP prodotto da Aceros',
    overviewTitle: 'Ingegneria in base alle condizioni del forno',
    overview: [
      'Aceros produce rulli da forno in leghe selezionate per scorrimento, ossidazione e cicli termici. L\'analisi considera temperatura, atmosfera, carico, rotazione e sistema di raffreddamento.',
      'La fornitura può seguire il disegno del cliente o essere sviluppata insieme alla nostra ingegneria, con centrifugazione, lavorazione, montaggio e controllo dimensionale.',
    ],
    detailImage, detailAlt: 'Tubi radianti e rulli per forni CAPL e CGL',
    benefits: ['Rulli raffreddati e non raffreddati', 'Leghe definite in base al progetto', 'Versioni rivestite e non rivestite', 'Dimensioni e finitura su misura'],
    applications: [
      { title: 'Forni a tunnel CSP', description: 'Rulli per il trasporto di bramme sotto regime termico continuo e carico elevato.' },
      { title: 'Linee CAPL e CGL', description: 'Furnace rolls per ricottura e zincatura continua, con o senza rivestimento.' },
      { title: 'Trattamento termico', description: 'Rulli di trasporto per tempra, rinvenimento, ricottura e altri cicli.' },
      { title: 'Forni per barre', description: 'Rulli di carico e scarico, asciutti o umidi, secondo la configurazione dell\'impianto.' },
      { title: 'Walking beam', description: 'Componenti per forni a travi mobili e trattamento termico di tubi.' },
      { title: 'Rimodernamento di linee', description: 'Sostituzione e valutazione di componenti a partire da disegno, campione o storico operativo.' },
    ],
    specs: [
      { label: 'Processo', value: 'Fusione centrifugata' },
      { label: 'Leghe', value: 'ASTM A297 e superleghe' },
      { label: 'Configurazione', value: 'Raffreddato o non raffreddato' },
      { label: 'Fornitura', value: 'Secondo disegno tecnico' },
    ],
    gallery: gallery.map((g, i) => ({ ...g, alt: ['Rullo industriale lavorato per linea siderurgica', 'Pezzi e rulli per forno per barre', 'Rullo in acciaio lavorato per applicazione industriale'][i] })),
    faq: [
      { question: 'I rulli sono fabbricati secondo disegno?', answer: 'Sì. Diametri, lunghezza, estremità, flange, raffreddamento e finitura sono definiti in base al disegno e alla condizione operativa.' },
      { question: 'Quali leghe vengono utilizzate?', answer: 'La scelta dipende da temperatura, atmosfera e sollecitazione meccanica. La lega ASTM A297 e il suo grado sono definiti in base ai requisiti del progetto.' },
      { question: 'Aceros fornisce rulli raffreddati?', answer: 'Sì. Realizziamo configurazioni raffreddate e non raffreddate, in linea con il progetto del forno.' },
    ],
    whatsappText: 'Ciao! Vorrei richiedere un preventivo per rulli da forno (Furnace Rolls).',
    formHint: 'Indica tipo di forno, temperatura, dimensioni, lega attuale e, se possibile, i dati del disegno tecnico.',
  },
};

export default function RolosDeFornoPage() {
  const data = dataByLang.pt;
  const schema = buildCampaignSchema({ path: data.path, name: 'Rolos de forno sob medida', description: data.heroDescription, image: data.heroImage, applications: data.applications, faq: data.faq });
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><IndustrialCampaignPage data={data} dataByLang={dataByLang} /></>;
}
