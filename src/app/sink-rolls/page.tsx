import type { Metadata } from 'next';
import { IndustrialCampaignPage, type CampaignPageData } from '@/components/landing-pages/industrial-campaign-page';
import { buildCampaignSchema } from '@/lib/campaign-schema';
import type { Language } from '@/hooks/use-language';

export const metadata: Metadata = {
  title: 'Sink Rolls Sob Medida | Rolos de Imersão para Galvanização',
  description: 'Sink rolls, buchas de ponta, braços, snout e conjuntos sob medida para linhas de galvanização por imersão a quente. Solicite análise técnica.',
  alternates: { canonical: '/sink-rolls' },
  openGraph: { title: 'Sink Rolls para Galvanização | Aceros', description: 'Rolos de imersão e componentes para linhas de galvanização.', url: '/sink-rolls', images: [{ url: '/images/imgur/KZhCZ6S.png', alt: 'Sink Roll fabricado para linha de galvanização' }] },
};

const heroImage = '/images/imgur/KZhCZ6S.png';
const detailImage = '/images/imgur/5nSkBkQ.png';
const gallerySrcs = ['/images/imgur/qdpfn4q.png', '/images/imgur/KZhCZ6S.png', '/images/imgur/DLNl2Zu.png'];
const path = '/sink-rolls';
const source = 'lp-sink-rolls';

const dataByLang: Record<Language, CampaignPageData> = {
  pt: {
    path, source,
    eyebrow: 'Galvanização por imersão a quente',
    title: 'Sink rolls e componentes para linhas de galvanização',
    heroDescription: 'Rolos de imersão, buchas de ponta, braços, snout e conjuntos desenvolvidos sob medida para linhas de galvanização por imersão a quente.',
    heroImage, heroAlt: 'Sink roll fabricado para linha de galvanização por imersão a quente',
    overviewTitle: 'Conjunto projetado para o pote de zincagem',
    overview: [
      'A operação submersa exige resistência à corrosão pelo banho metálico, estabilidade dimensional e controle do acabamento superficial. Cada componente é desenvolvido conforme a linha e o regime de produção.',
      'A Aceros fabrica o rolo e seus componentes associados, incluindo buchas para ponta de sink roll, com seleção de liga, centrifugação e usinagem de precisão.',
    ],
    detailImage, detailAlt: 'Rolo de imersão polido produzido por centrifugação',
    benefits: ['Componentes para o pote de zincagem', 'Controle dimensional das pontas', 'Buchas em materiais específicos', 'Projeto conforme a linha do cliente'],
    applications: [
      { title: 'Sink roll', description: 'Rolo principal submerso que direciona a tira dentro do pote de galvanização.' },
      { title: 'Buchas para ponta', description: 'Buchas para a ponta do sink roll, fabricadas conforme o conjunto e a condição de trabalho.' },
      { title: 'Braços', description: 'Braços para sink roll e componentes de sustentação do conjunto de zincagem.' },
      { title: 'Buchas de ponta', description: 'Buchas centrifugadas e usinadas conforme as tolerâncias e condições do conjunto.' },
      { title: 'Snout', description: 'Componente desenvolvido para trabalho no pote de zincagem, conforme projeto da linha.' },
      { title: 'Conjuntos montados', description: 'Fornecimento de conjuntos com rolos e braços para linhas de galvanização.' },
    ],
    specs: [
      { label: 'Aplicação', value: 'Linhas CGL e galvanização' },
      { label: 'Componentes', value: 'Rolos, braços, snout e buchas' },
      { label: 'Processo', value: 'Centrifugação e usinagem' },
      { label: 'Projeto', value: 'Fabricação sob medida' },
    ],
    gallery: gallerySrcs.map((src, i) => ({ src, alt: ['Componentes para linha de galvanização por imersão a quente', 'Rolo de imersão para galvanização', 'Componente snout para pote de zincagem'][i] })),
    faq: [
      { question: 'A Aceros fabrica o sink roll completo?', answer: 'Sim. O fornecimento pode contemplar rolo, pontas, buchas e componentes associados, conforme o desenho e a necessidade da linha.' },
      { question: 'Vocês fabricam buchas para a ponta do rolo?', answer: 'Sim. Produzimos buchas centrifugadas mono ou bimetálicas, usinadas conforme a tolerância do conjunto.' },
      { question: 'Os componentes são fabricados conforme desenho?', answer: 'Sim. Dimensões, materiais e acabamento são definidos conforme o desenho e as condições de operação da linha.' },
    ],
    whatsappText: 'Olá! Gostaria de solicitar um orçamento para Sink Rolls e componentes de galvanização.',
    formHint: 'Informe a linha, composição do banho, dimensões, material atual e quais componentes do conjunto precisa cotar.',
  },
  en: {
    path, source,
    eyebrow: 'Hot-dip galvanising',
    title: 'Sink rolls and components for galvanising lines',
    heroDescription: 'Immersion rolls, end bushings, arms, snout and assemblies engineered for hot-dip galvanising lines.',
    heroImage, heroAlt: 'Sink roll produced for a hot-dip galvanising line',
    overviewTitle: 'An assembly engineered for the zinc pot',
    overview: [
      'Submerged operation demands resistance to the molten metal, dimensional stability and surface-finish control. Each component is engineered for the line and production regime.',
      'Aceros manufactures the roll and its associated components, including sink-roll end bushings, with alloy selection, centrifugal casting and precision machining.',
    ],
    detailImage, detailAlt: 'Polished immersion roll produced by centrifugal casting',
    benefits: ['Components for the zinc pot', 'Dimensional control of the ends', 'Bushings in specific materials', 'Engineered to the customer line'],
    applications: [
      { title: 'Sink roll', description: 'Main submerged roll that guides the strip inside the galvanising pot.' },
      { title: 'End bushings', description: 'Bushings for the sink-roll ends, produced to the assembly and duty cycle.' },
      { title: 'Arms', description: 'Sink-roll arms and support components for the galvanising set.' },
      { title: 'Trunnion bushings', description: 'Centrifugally cast and machined bushings per tolerances and assembly conditions.' },
      { title: 'Snout', description: 'Component engineered for the zinc-pot operation, per the line design.' },
      { title: 'Full assemblies', description: 'Supply of assembled sets with rolls and arms for galvanising lines.' },
    ],
    specs: [
      { label: 'Application', value: 'CGL and galvanising lines' },
      { label: 'Components', value: 'Rolls, arms, snout and bushings' },
      { label: 'Process', value: 'Centrifugal casting and machining' },
      { label: 'Project', value: 'Custom manufacturing' },
    ],
    gallery: gallerySrcs.map((src, i) => ({ src, alt: ['Components for hot-dip galvanising line', 'Immersion roll for galvanising', 'Snout component for the zinc pot'][i] })),
    faq: [
      { question: 'Does Aceros supply the complete sink roll?', answer: 'Yes. Supply may include roll, ends, bushings and related components, per the drawing and the line requirements.' },
      { question: 'Do you produce bushings for the roll ends?', answer: 'Yes. We produce single- or bi-metal centrifugally cast bushings, machined to the assembly tolerance.' },
      { question: 'Are components produced from drawing?', answer: 'Yes. Dimensions, materials and finish are defined by the drawing and the line operating conditions.' },
    ],
    whatsappText: 'Hi! I would like a quote for sink rolls and galvanising components.',
    formHint: 'Please share the line, bath composition, dimensions, current material and which components you need quoted.',
  },
  es: {
    path, source,
    eyebrow: 'Galvanizado por inmersión en caliente',
    title: 'Sink rolls y componentes para líneas de galvanizado',
    heroDescription: 'Rodillos de inmersión, bujes de punta, brazos, snout y conjuntos desarrollados a medida para líneas de galvanizado por inmersión en caliente.',
    heroImage, heroAlt: 'Sink roll fabricado para línea de galvanizado por inmersión en caliente',
    overviewTitle: 'Conjunto proyectado para el pote de zincado',
    overview: [
      'La operación sumergida exige resistencia a la corrosión por el baño metálico, estabilidad dimensional y control del acabado superficial. Cada componente se desarrolla según la línea y el régimen de producción.',
      'Aceros fabrica el rodillo y sus componentes asociados, incluyendo bujes de punta de sink roll, con selección de aleación, centrifugación y mecanizado de precisión.',
    ],
    detailImage, detailAlt: 'Rodillo de inmersión pulido producido por centrifugación',
    benefits: ['Componentes para el pote de zincado', 'Control dimensional de las puntas', 'Bujes en materiales específicos', 'Proyecto según la línea del cliente'],
    applications: [
      { title: 'Sink roll', description: 'Rodillo principal sumergido que guía la banda dentro del pote de galvanizado.' },
      { title: 'Bujes de punta', description: 'Bujes para la punta del sink roll, fabricados según el conjunto y la condición de trabajo.' },
      { title: 'Brazos', description: 'Brazos para sink roll y componentes de sujeción del conjunto de zincado.' },
      { title: 'Bujes de muñón', description: 'Bujes centrifugados y mecanizados según las tolerancias y condiciones del conjunto.' },
      { title: 'Snout', description: 'Componente desarrollado para el trabajo en el pote de zincado, según el proyecto de la línea.' },
      { title: 'Conjuntos montados', description: 'Suministro de conjuntos con rodillos y brazos para líneas de galvanizado.' },
    ],
    specs: [
      { label: 'Aplicación', value: 'Líneas CGL y galvanizado' },
      { label: 'Componentes', value: 'Rodillos, brazos, snout y bujes' },
      { label: 'Proceso', value: 'Centrifugación y mecanizado' },
      { label: 'Proyecto', value: 'Fabricación a medida' },
    ],
    gallery: gallerySrcs.map((src, i) => ({ src, alt: ['Componentes para línea de galvanizado por inmersión en caliente', 'Rodillo de inmersión para galvanizado', 'Componente snout para pote de zincado'][i] })),
    faq: [
      { question: '¿Aceros fabrica el sink roll completo?', answer: 'Sí. El suministro puede contemplar rodillo, puntas, bujes y componentes asociados, según el plano y la necesidad de la línea.' },
      { question: '¿Fabrican bujes para la punta del rodillo?', answer: 'Sí. Producimos bujes centrifugados mono o bimetálicos, mecanizados según la tolerancia del conjunto.' },
      { question: '¿Los componentes se fabrican según plano?', answer: 'Sí. Dimensiones, materiales y acabado se definen según el plano y las condiciones de operación de la línea.' },
    ],
    whatsappText: '¡Hola! Quisiera solicitar un presupuesto para Sink Rolls y componentes de galvanizado.',
    formHint: 'Indique la línea, composición del baño, dimensiones, material actual y qué componentes del conjunto necesita cotizar.',
  },
  de: {
    path, source,
    eyebrow: 'Feuerverzinkung',
    title: 'Sink Rolls und Komponenten für Verzinkungslinien',
    heroDescription: 'Tauchrollen, Endbuchsen, Arme, Snout und Baugruppen nach Maß für Feuerverzinkungslinien.',
    heroImage, heroAlt: 'Sink Roll für eine Feuerverzinkungslinie von Aceros',
    overviewTitle: 'Baugruppe ausgelegt für den Zinktopf',
    overview: [
      'Der Tauchbetrieb erfordert Beständigkeit gegen das Zinkbad, Maßhaltigkeit und Oberflächenkontrolle. Jedes Bauteil wird nach Linie und Produktionsregime ausgelegt.',
      'Aceros fertigt die Rolle und ihre Komponenten, einschließlich Sink-Roll-Endbuchsen, mit Legierungsauswahl, Schleuderguss und Präzisionsbearbeitung.',
    ],
    detailImage, detailAlt: 'Polierte Tauchrolle im Schleuderguss',
    benefits: ['Bauteile für den Zinktopf', 'Maßhaltige Endflächen', 'Buchsen aus spezifischen Werkstoffen', 'Auslegung nach Kundenlinie'],
    applications: [
      { title: 'Sink Roll', description: 'Hauptrolle im Bad, die das Band durch den Verzinkungstopf führt.' },
      { title: 'Endbuchsen', description: 'Buchsen für die Rollenenden, hergestellt nach Baugruppe und Betriebszyklus.' },
      { title: 'Arme', description: 'Sink-Roll-Arme und Stützkomponenten der Verzinkungsanordnung.' },
      { title: 'Zapfenbuchsen', description: 'Schleudergegossene und bearbeitete Buchsen nach Toleranz und Baugruppe.' },
      { title: 'Snout', description: 'Bauteil für den Zinktopf, ausgelegt nach Linienprojekt.' },
      { title: 'Komplette Baugruppen', description: 'Lieferung montierter Baugruppen mit Rollen und Armen für Verzinkungslinien.' },
    ],
    specs: [
      { label: 'Anwendung', value: 'CGL- und Verzinkungslinien' },
      { label: 'Komponenten', value: 'Rollen, Arme, Snout und Buchsen' },
      { label: 'Prozess', value: 'Schleuderguss und Bearbeitung' },
      { label: 'Projekt', value: 'Fertigung nach Maß' },
    ],
    gallery: gallerySrcs.map((src, i) => ({ src, alt: ['Bauteile für Feuerverzinkungslinie', 'Tauchrolle für Verzinkung', 'Snout-Bauteil für den Zinktopf'][i] })),
    faq: [
      { question: 'Liefert Aceros die komplette Sink Roll?', answer: 'Ja. Die Lieferung umfasst Rolle, Enden, Buchsen und zugehörige Komponenten nach Zeichnung und Linienbedarf.' },
      { question: 'Fertigen Sie Endbuchsen der Rolle?', answer: 'Ja. Wir fertigen mono- oder bimetallische Schleudergussbuchsen, bearbeitet nach Baugruppen-Toleranz.' },
      { question: 'Werden die Komponenten nach Zeichnung gefertigt?', answer: 'Ja. Abmessungen, Werkstoffe und Ausführung folgen der Zeichnung und den Betriebsbedingungen der Linie.' },
    ],
    whatsappText: 'Hallo! Ich möchte ein Angebot für Sink Rolls und Verzinkungskomponenten.',
    formHint: 'Bitte geben Sie Linie, Badzusammensetzung, Abmessungen, aktuellen Werkstoff und die gewünschten Komponenten an.',
  },
  it: {
    path, source,
    eyebrow: 'Zincatura a immersione a caldo',
    title: 'Sink rolls e componenti per linee di zincatura',
    heroDescription: 'Rulli a immersione, boccole di estremità, bracci, snout e gruppi realizzati su misura per linee di zincatura a immersione a caldo.',
    heroImage, heroAlt: 'Sink roll prodotto per una linea di zincatura a immersione a caldo',
    overviewTitle: 'Un gruppo progettato per il pot di zincatura',
    overview: [
      'L\'esercizio in immersione richiede resistenza al bagno metallico, stabilità dimensionale e controllo della finitura superficiale. Ogni componente viene progettato per la linea e il regime produttivo.',
      'Aceros produce il rullo e i suoi componenti, comprese le boccole di estremità del sink roll, con selezione della lega, centrifugazione e lavorazione di precisione.',
    ],
    detailImage, detailAlt: 'Rullo a immersione lucidato prodotto per centrifugazione',
    benefits: ['Componenti per il pot di zincatura', 'Controllo dimensionale delle estremità', 'Boccole in materiali specifici', 'Progetto secondo la linea del cliente'],
    applications: [
      { title: 'Sink roll', description: 'Rullo principale immerso che guida il nastro nel pot di zincatura.' },
      { title: 'Boccole di estremità', description: 'Boccole per le estremità del sink roll, realizzate secondo il gruppo e la condizione operativa.' },
      { title: 'Bracci', description: 'Bracci per sink roll e componenti di sostegno del gruppo di zincatura.' },
      { title: 'Boccole di perno', description: 'Boccole centrifugate e lavorate secondo tolleranze e condizioni del gruppo.' },
      { title: 'Snout', description: 'Componente sviluppato per il pot di zincatura, secondo il progetto della linea.' },
      { title: 'Gruppi assemblati', description: 'Fornitura di gruppi con rulli e bracci per linee di zincatura.' },
    ],
    specs: [
      { label: 'Applicazione', value: 'Linee CGL e zincatura' },
      { label: 'Componenti', value: 'Rulli, bracci, snout e boccole' },
      { label: 'Processo', value: 'Centrifugazione e lavorazione' },
      { label: 'Progetto', value: 'Fabbricazione su misura' },
    ],
    gallery: gallerySrcs.map((src, i) => ({ src, alt: ['Componenti per linea di zincatura a immersione a caldo', 'Rullo a immersione per zincatura', 'Componente snout per pot di zincatura'][i] })),
    faq: [
      { question: 'Aceros fornisce il sink roll completo?', answer: 'Sì. La fornitura può comprendere rullo, estremità, boccole e componenti associati secondo disegno e necessità della linea.' },
      { question: 'Producete boccole per le estremità del rullo?', answer: 'Sì. Realizziamo boccole centrifugate mono o bimetalliche, lavorate secondo la tolleranza del gruppo.' },
      { question: 'I componenti sono prodotti secondo disegno?', answer: 'Sì. Dimensioni, materiali e finitura sono definiti dal disegno e dalle condizioni operative della linea.' },
    ],
    whatsappText: 'Ciao! Vorrei richiedere un preventivo per Sink Rolls e componenti di zincatura.',
    formHint: 'Indica linea, composizione del bagno, dimensioni, materiale attuale e i componenti che vuoi quotare.',
  },
};

export default function SinkRollsPage() {
  const data = dataByLang.pt;
  const schema = buildCampaignSchema({ path: data.path, name: 'Sink Rolls e componentes para galvanização', description: data.heroDescription, image: data.heroImage, applications: data.applications, faq: data.faq });
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><IndustrialCampaignPage data={data} dataByLang={dataByLang} /></>;
}
