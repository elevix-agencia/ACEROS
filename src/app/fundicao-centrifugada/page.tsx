import type { Metadata } from 'next';
import { IndustrialCampaignPage, type CampaignPageData } from '@/components/landing-pages/industrial-campaign-page';
import { buildCampaignSchema } from '@/lib/campaign-schema';
import type { Language } from '@/hooks/use-language';

export const metadata: Metadata = {
  title: 'Fundição Centrifugada Sob Medida | Aços Inoxidáveis',
  description: 'Fundição centrifugada de tubos mecânicos, buchas e componentes em aços inoxidáveis e ligas especiais, com fabricação conforme desenho.',
  alternates: { canonical: '/fundicao-centrifugada' },
  openGraph: { title: 'Fundição Centrifugada Sob Medida | Aceros', description: 'Peças centrifugadas em aços inoxidáveis e ligas especiais, do bruto ao acabamento final.', url: '/fundicao-centrifugada', images: [{ url: '/images/aceros/tubos/tubo-aco-inox-bruto-aceros-01.jpg', alt: 'Tubo bruto produzido por fundição centrifugada' }] },
};

const heroImage = '/images/aceros/tubos/tubo-aco-inox-bruto-aceros-01.jpg';
const detailImage = '/images/aceros/tubos/tubo-aco-inox-bruto-aceros-05.jpg';
const gallerySrcs = [
  '/images/aceros/tubos/tubo-aco-inox-bruto-aceros-01.jpg',
  '/images/aceros/tubos/tubo-aco-inox-usinado-aceros-01.jpg',
  '/images/aceros/tubos/tubo-aco-inox-polido-aceros-05.jpg',
];
const path = '/fundicao-centrifugada';
const source = 'lp-fundicao-centrifugada';

const dataByLang: Record<Language, CampaignPageData> = {
  pt: {
    path, source,
    eyebrow: 'Centrifugação · Usinagem · Engenharia',
    title: 'Fundição centrifugada de aços inoxidáveis sob medida',
    heroDescription: 'Tubos mecânicos, buchas e componentes centrifugados em ligas especiais, fabricados conforme desenho técnico para aplicações de calor, abrasão e corrosão.',
    heroImage, heroAlt: 'Tubos de aço inox bruto produzidos por fundição centrifugada pela Aceros',
    overviewTitle: 'Da liga líquida à peça usinada',
    overview: [
      'Na fundição centrifugada, o metal líquido é lançado contra a parede interna da coquilha em rotação. O processo favorece uma estrutura densa e é utilizado na produção de peças cilíndricas para aplicações industriais.',
      'A Aceros integra seleção de liga, centrifugação, tratamento térmico, usinagem e inspeção. O cliente pode receber a peça bruta, pré-usinada ou pronta para montagem.',
    ],
    detailImage, detailAlt: 'Tubo bruto de aço inox após o processo de centrifugação',
    benefits: ['Peças cilíndricas sob medida', 'Bruto, pré-usinado ou acabado', 'Ligas ASTM A297 e especiais', 'Controle químico e dimensional'],
    applications: [
      { title: 'Tubos centrifugados', description: 'Tubos de parede e dimensões definidas conforme o projeto industrial.' },
      { title: 'Buchas centrifugadas', description: 'Buchas produzidas conforme desenho e posteriormente usinadas para a aplicação industrial.' },
      { title: 'Rolos industriais', description: 'Componentes centrifugados destinados a rolos para fornos e linhas de galvanização.' },
      { title: 'Sink rolls', description: 'Rolos de imersão e buchas de ponta para conjuntos empregados no pote de zincagem.' },
      { title: 'Tratamento térmico', description: 'Componentes internos para fornos e dispositivos de processo.' },
      { title: 'Projeto especial', description: 'Desenvolvimento a partir de desenho, amostra ou condição de operação.' },
    ],
    specs: [
      { label: 'Materiais', value: 'Inoxidáveis e superligas' },
      { label: 'Norma de referência', value: 'ASTM A297' },
      { label: 'Acabamento', value: 'Bruto, usinado ou polido' },
      { label: 'Dimensões', value: 'Conforme desenho técnico' },
    ],
    gallery: gallerySrcs.map((src, i) => ({ src, alt: ['Tubos brutos obtidos por fundição centrifugada', 'Tubo centrifugado após usinagem de precisão', 'Tubo centrifugado polido e acabado'][i] })),
    faq: [
      { question: 'Quais peças podem ser produzidas por centrifugação?', answer: 'O processo é empregado principalmente na fabricação de tubos mecânicos, buchas e outros componentes cilíndricos, sempre conforme avaliação técnica.' },
      { question: 'A peça pode ser entregue usinada?', answer: 'Sim. O fornecimento pode ser bruto de fundição, pré-usinado ou completamente acabado conforme desenho.' },
      { question: 'Quais informações são necessárias para cotar?', answer: 'Desenho, dimensões, liga desejada, quantidade e condição de trabalho. Quando necessário, nossa engenharia apoia a definição do material.' },
    ],
    whatsappText: 'Olá! Gostaria de solicitar um orçamento para uma peça em fundição centrifugada.',
    formHint: 'Descreva a peça, dimensões, quantidade, liga, temperatura e condição de operação. Se tiver desenho, informe no contato.',
  },
  en: {
    path, source,
    eyebrow: 'Centrifugal casting · Machining · Engineering',
    title: 'Custom centrifugal casting of stainless steels',
    heroDescription: 'Mechanical tubes, bushings and centrifugally cast components in special alloys, produced from technical drawings for heat, abrasion and corrosion applications.',
    heroImage, heroAlt: 'Aceros centrifugally cast rough stainless steel tubes',
    overviewTitle: 'From liquid alloy to machined part',
    overview: [
      'In centrifugal casting, molten metal is thrown against the inner wall of a rotating mould. The process favours a dense structure and is used to produce cylindrical parts for industrial applications.',
      'Aceros integrates alloy selection, centrifugal casting, heat treatment, machining and inspection. Customers can receive the part as-cast, pre-machined or assembly-ready.',
    ],
    detailImage, detailAlt: 'Rough stainless steel tube after centrifugal casting',
    benefits: ['Custom cylindrical parts', 'Rough, pre-machined or finished', 'ASTM A297 and special alloys', 'Chemical and dimensional control'],
    applications: [
      { title: 'Cast tubes', description: 'Tubes with wall and dimensions defined by the industrial project.' },
      { title: 'Cast bushings', description: 'Bushings produced from drawing and machined for the industrial application.' },
      { title: 'Industrial rolls', description: 'Centrifugally cast components for furnace and galvanising-line rolls.' },
      { title: 'Sink rolls', description: 'Immersion rolls and end bushings for zinc-pot assemblies.' },
      { title: 'Heat treatment', description: 'Internal components for furnaces and process equipment.' },
      { title: 'Special project', description: 'Development from drawing, sample or operating condition.' },
    ],
    specs: [
      { label: 'Materials', value: 'Stainless and superalloys' },
      { label: 'Reference standard', value: 'ASTM A297' },
      { label: 'Finish', value: 'Rough, machined or polished' },
      { label: 'Dimensions', value: 'To technical drawing' },
    ],
    gallery: gallerySrcs.map((src, i) => ({ src, alt: ['Rough tubes from centrifugal casting', 'Cast tube after precision machining', 'Polished and finished cast tube'][i] })),
    faq: [
      { question: 'Which parts can be produced by centrifugal casting?', answer: 'The process is mainly used for mechanical tubes, bushings and other cylindrical components, always following a technical assessment.' },
      { question: 'Can the part be delivered machined?', answer: 'Yes. Supply can be as-cast, pre-machined or fully finished to drawing.' },
      { question: 'What information do you need for a quote?', answer: 'Drawing, dimensions, desired alloy, quantity and operating condition. Our engineering supports material definition when needed.' },
    ],
    whatsappText: 'Hi! I would like a quote for a centrifugally cast part.',
    formHint: 'Describe the part, dimensions, quantity, alloy, temperature and operating condition. Include drawing information if available.',
  },
  es: {
    path, source,
    eyebrow: 'Centrifugación · Mecanizado · Ingeniería',
    title: 'Fundición centrifugada de aceros inoxidables a medida',
    heroDescription: 'Tubos mecánicos, bujes y componentes centrifugados en aleaciones especiales, fabricados según plano técnico para aplicaciones de calor, abrasión y corrosión.',
    heroImage, heroAlt: 'Tubos de acero inoxidable en bruto producidos por fundición centrifugada por Aceros',
    overviewTitle: 'De la aleación líquida a la pieza mecanizada',
    overview: [
      'En la fundición centrifugada, el metal líquido se lanza contra la pared interna de la coquilla en rotación. El proceso favorece una estructura densa y se utiliza en la producción de piezas cilíndricas para aplicaciones industriales.',
      'Aceros integra selección de aleación, centrifugación, tratamiento térmico, mecanizado e inspección. El cliente recibe la pieza en bruto, pre-mecanizada o lista para montaje.',
    ],
    detailImage, detailAlt: 'Tubo de acero inoxidable en bruto tras el proceso de centrifugación',
    benefits: ['Piezas cilíndricas a medida', 'Bruto, pre-mecanizado o acabado', 'Aleaciones ASTM A297 y especiales', 'Control químico y dimensional'],
    applications: [
      { title: 'Tubos centrifugados', description: 'Tubos con espesor y dimensiones definidas según el proyecto industrial.' },
      { title: 'Bujes centrifugados', description: 'Bujes producidos según plano y luego mecanizados para la aplicación industrial.' },
      { title: 'Rodillos industriales', description: 'Componentes centrifugados para rodillos de hornos y líneas de galvanizado.' },
      { title: 'Sink rolls', description: 'Rodillos de inmersión y bujes de punta para conjuntos del pote de zincado.' },
      { title: 'Tratamiento térmico', description: 'Componentes internos para hornos y dispositivos de proceso.' },
      { title: 'Proyecto especial', description: 'Desarrollo a partir de plano, muestra o condición de operación.' },
    ],
    specs: [
      { label: 'Materiales', value: 'Inoxidables y superaleaciones' },
      { label: 'Norma de referencia', value: 'ASTM A297' },
      { label: 'Acabado', value: 'Bruto, mecanizado o pulido' },
      { label: 'Dimensiones', value: 'Según plano técnico' },
    ],
    gallery: gallerySrcs.map((src, i) => ({ src, alt: ['Tubos en bruto obtenidos por fundición centrifugada', 'Tubo centrifugado tras mecanizado de precisión', 'Tubo centrifugado pulido y acabado'][i] })),
    faq: [
      { question: '¿Qué piezas se pueden producir por centrifugación?', answer: 'El proceso se emplea principalmente en tubos mecánicos, bujes y otros componentes cilíndricos, siempre según evaluación técnica.' },
      { question: '¿La pieza puede entregarse mecanizada?', answer: 'Sí. El suministro puede ser bruto, pre-mecanizado o completamente acabado según plano.' },
      { question: '¿Qué información se necesita para cotizar?', answer: 'Plano, dimensiones, aleación deseada, cantidad y condición de trabajo. Cuando es necesario, nuestra ingeniería apoya la definición del material.' },
    ],
    whatsappText: '¡Hola! Quisiera solicitar un presupuesto para una pieza en fundición centrifugada.',
    formHint: 'Describa la pieza, dimensiones, cantidad, aleación, temperatura y condición de operación. Si tiene plano, indíquelo.',
  },
  de: {
    path, source,
    eyebrow: 'Schleuderguss · Bearbeitung · Konstruktion',
    title: 'Edelstahl-Schleuderguss nach Maß',
    heroDescription: 'Mechanische Rohre, Buchsen und schleudergegossene Bauteile aus Speziallegierungen, gefertigt nach Zeichnung für Anwendungen mit Hitze, Verschleiß und Korrosion.',
    heroImage, heroAlt: 'Rohe Edelstahlrohre im Schleuderguss von Aceros',
    overviewTitle: 'Von der flüssigen Legierung zum bearbeiteten Bauteil',
    overview: [
      'Beim Schleuderguss wird die Schmelze gegen die innere Kokillenwand in Rotation geworfen. Das Verfahren fördert ein dichtes Gefüge und dient der Fertigung zylindrischer Bauteile für die Industrie.',
      'Aceros verbindet Legierungsauswahl, Schleuderguss, Wärmebehandlung, Bearbeitung und Prüfung. Das Bauteil kann als Rohguss, vorbearbeitet oder montagefertig geliefert werden.',
    ],
    detailImage, detailAlt: 'Rohes Edelstahlrohr nach dem Schleuderguss',
    benefits: ['Zylindrische Bauteile nach Maß', 'Rohguss, vorbearbeitet oder fertig', 'ASTM A297 und Speziallegierungen', 'Chemische und Maßkontrolle'],
    applications: [
      { title: 'Schleudergussrohre', description: 'Rohre mit Wandstärke und Abmessungen nach industriellem Projekt.' },
      { title: 'Schleudergussbuchsen', description: 'Nach Zeichnung gefertigte und anschließend bearbeitete Buchsen für die Industrieanwendung.' },
      { title: 'Industrierollen', description: 'Schleudergegossene Komponenten für Ofen- und Verzinkungsrollen.' },
      { title: 'Sink Rolls', description: 'Tauchrollen und Endbuchsen für Baugruppen im Zinktopf.' },
      { title: 'Wärmebehandlung', description: 'Innere Komponenten für Öfen und Prozessgeräte.' },
      { title: 'Spezialprojekt', description: 'Entwicklung nach Zeichnung, Muster oder Betriebsbedingung.' },
    ],
    specs: [
      { label: 'Werkstoffe', value: 'Edelstähle und Superlegierungen' },
      { label: 'Referenznorm', value: 'ASTM A297' },
      { label: 'Ausführung', value: 'Rohguss, bearbeitet oder poliert' },
      { label: 'Abmessungen', value: 'Nach technischer Zeichnung' },
    ],
    gallery: gallerySrcs.map((src, i) => ({ src, alt: ['Rohe Rohre aus dem Schleuderguss', 'Schleudergussrohr nach Präzisionsbearbeitung', 'Poliertes und fertiges Schleudergussrohr'][i] })),
    faq: [
      { question: 'Welche Bauteile eignen sich für den Schleuderguss?', answer: 'Vor allem mechanische Rohre, Buchsen und andere zylindrische Bauteile, jeweils nach technischer Prüfung.' },
      { question: 'Kann das Bauteil bearbeitet geliefert werden?', answer: 'Ja. Die Lieferung kann als Rohguss, vorbearbeitet oder komplett fertig nach Zeichnung erfolgen.' },
      { question: 'Welche Angaben werden für ein Angebot benötigt?', answer: 'Zeichnung, Abmessungen, gewünschte Legierung, Menge und Betriebsbedingung. Bei Bedarf unterstützt unsere Konstruktion die Werkstoffwahl.' },
    ],
    whatsappText: 'Hallo! Ich möchte ein Angebot für ein Bauteil im Schleuderguss anfragen.',
    formHint: 'Beschreiben Sie das Bauteil, Abmessungen, Menge, Legierung, Temperatur und Betriebsbedingung. Zeichnungsangaben bitte mitteilen.',
  },
  it: {
    path, source,
    eyebrow: 'Centrifugazione · Lavorazione · Ingegneria',
    title: 'Fusione centrifugata di acciai inossidabili su misura',
    heroDescription: 'Tubi meccanici, boccole e componenti centrifugati in leghe speciali, prodotti su disegno tecnico per applicazioni ad alta temperatura, abrasione e corrosione.',
    heroImage, heroAlt: 'Tubi in acciaio inossidabile grezzi prodotti per fusione centrifugata da Aceros',
    overviewTitle: 'Dalla lega liquida al pezzo lavorato',
    overview: [
      'Nella fusione centrifugata il metallo liquido viene proiettato contro la parete interna della conchiglia in rotazione. Il processo favorisce una struttura densa ed è usato per pezzi cilindrici in ambito industriale.',
      'Aceros integra selezione della lega, centrifugazione, trattamento termico, lavorazione e ispezione. Il cliente può ricevere il pezzo grezzo, pre-lavorato o pronto per il montaggio.',
    ],
    detailImage, detailAlt: 'Tubo grezzo in acciaio inossidabile dopo la centrifugazione',
    benefits: ['Pezzi cilindrici su misura', 'Grezzo, pre-lavorato o finito', 'Leghe ASTM A297 e speciali', 'Controllo chimico e dimensionale'],
    applications: [
      { title: 'Tubi centrifugati', description: 'Tubi con spessore e dimensioni definiti dal progetto industriale.' },
      { title: 'Boccole centrifugate', description: 'Boccole prodotte su disegno e poi lavorate per l\'applicazione industriale.' },
      { title: 'Rulli industriali', description: 'Componenti centrifugati per rulli di forni e linee di zincatura.' },
      { title: 'Sink rolls', description: 'Rulli a immersione e boccole di estremità per gruppi del pot di zincatura.' },
      { title: 'Trattamento termico', description: 'Componenti interni per forni e dispositivi di processo.' },
      { title: 'Progetto speciale', description: 'Sviluppo a partire da disegno, campione o condizione operativa.' },
    ],
    specs: [
      { label: 'Materiali', value: 'Inossidabili e superleghe' },
      { label: 'Norma di riferimento', value: 'ASTM A297' },
      { label: 'Finitura', value: 'Grezzo, lavorato o lucidato' },
      { label: 'Dimensioni', value: 'Secondo disegno tecnico' },
    ],
    gallery: gallerySrcs.map((src, i) => ({ src, alt: ['Tubi grezzi da fusione centrifugata', 'Tubo centrifugato dopo lavorazione di precisione', 'Tubo centrifugato lucidato e finito'][i] })),
    faq: [
      { question: 'Quali pezzi si possono produrre per centrifugazione?', answer: 'Il processo si usa soprattutto per tubi meccanici, boccole e altri componenti cilindrici, previa valutazione tecnica.' },
      { question: 'Il pezzo può essere consegnato lavorato?', answer: 'Sì. La fornitura può essere grezza, pre-lavorata o completamente finita su disegno.' },
      { question: 'Quali informazioni servono per il preventivo?', answer: 'Disegno, dimensioni, lega desiderata, quantità e condizione operativa. Se necessario, la nostra ingegneria supporta la scelta del materiale.' },
    ],
    whatsappText: 'Ciao! Vorrei richiedere un preventivo per un pezzo in fusione centrifugata.',
    formHint: 'Descrivi pezzo, dimensioni, quantità, lega, temperatura e condizione operativa. Indica i dati del disegno se disponibile.',
  },
};

export default function FundicaoCentrifugadaPage() {
  const data = dataByLang.pt;
  const schema = buildCampaignSchema({ path: data.path, name: 'Fundição centrifugada de aços inoxidáveis', description: data.heroDescription, image: data.heroImage, applications: data.applications, faq: data.faq });
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><IndustrialCampaignPage data={data} dataByLang={dataByLang} /></>;
}
