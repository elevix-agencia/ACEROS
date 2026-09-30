import type { Language } from '@/hooks/use-language';

export const engineeringPageCopy: Record<Language, {
  eyebrow: string;
  solutionsTitle: string;
  solutionsLead: string;
  innovationTitle: string;
  innovationLead: string;
  innovation: { title: string; description: string }[];
  rollApplicationsTitle: string;
  castingTitle: string;
  castingQuestion: string;
  castingAnswer: string;
  castingCaption: string;
  forceQuestion: string;
  forceAnswer: string;
  rotationNote: string;
  treatmentNote: string;
  tubesTitle: string;
  tubesCaption: string;
  sinkRollNote: string;
  sinkRollContext: string;
  calculationTitle: string;
  calculationLead: string;
  mathematics: string;
  temperatureTitle: string;
  processEyebrow: string;
  processTitle: string;
  processLead: string;
  steps: { title: string; description: string }[];
}> = {
  pt: {
    eyebrow: 'Engenharia aplicada',
    solutionsTitle: 'Nossas Soluções de Engenharia',
    solutionsLead: 'Desenvolvemos projetos e análises conforme a aplicação, as condições de serviço e os requisitos do componente.',
    innovationTitle: 'Inovação em Cada Projeto',
    innovationLead: 'Utilizamos ferramentas de projeto e simulação para avaliar componentes destinados a diferentes condições industriais.',
    innovation: [
      { title: 'Design Otimizado', description: 'Projetos orientados à eficiência, à fabricação e às condições de operação.' },
      { title: 'Validação por Simulação', description: 'Simulações utilizadas como apoio à avaliação técnica antes da produção.' },
      { title: 'Parceria Contínua', description: 'Acompanhamento técnico durante a análise e o desenvolvimento do projeto.' },
    ],
    rollApplicationsTitle: 'Aços — exemplos de aplicações de rolos',
    castingTitle: 'Aceros Inoxidáveis — processo de centrifugação',
    castingQuestion: 'O que é fundição de aço centrifugado?',
    castingAnswer: 'O aço líquido é vazado em uma matriz de aço pré-aquecida e em rotação. A força centrífuga direciona o metal contra as paredes da matriz e forma peças tubulares com diâmetros interno e externo controlados.',
    castingCaption: 'Fig. 1: Vazamento de um tubo em material ASTM A297, classe HP.',
    forceQuestion: 'Como atua a força centrífuga?',
    forceAnswer: 'A rotação direciona o metal líquido para a parede interna da matriz. O material é depositado a temperaturas entre 1.500 e 1.630 °C, conforme o processo e a liga.',
    rotationNote: 'A rotação de trabalho é definida de acordo com o diâmetro da matriz e a massa do tubo para controlar a formação da peça.',
    treatmentNote: 'Conforme o projeto, o componente também pode receber tratamento térmico após a fundição.',
    tubesTitle: 'Aceros — divisão de aços inoxidáveis — tubos',
    tubesCaption: 'Fig. 2: Exemplo de operação de uma máquina de centrifugação.',
    sinkRollNote: 'Após a centrifugação, o tubo pode ser usinado e polido para compor um Rolo de Imersão (Sink Roll).',
    sinkRollContext: 'O acabamento e as verificações são definidos pelo desenho técnico e pelas condições de aplicação.',
    calculationTitle: 'Cálculo estrutural',
    calculationLead: 'Nossa equipe utiliza ferramentas de engenharia adequadas aos requisitos de cada projeto.',
    mathematics: 'Matemática',
    temperatureTitle: 'Cálculos estruturais e simulações térmicas',
    processEyebrow: 'Engenharia Aceros',
    processTitle: 'Do desenho técnico à peça pronta',
    processLead: 'Cada fornecimento parte das especificações do projeto para definir material, fabricação e verificações necessárias.',
    steps: [
      { title: 'Análise do projeto', description: 'Avaliamos o desenho, as dimensões e as condições de aplicação da peça.' },
      { title: 'Material e fabricação', description: 'Definimos a liga e as etapas de produção conforme os requisitos acordados.' },
      { title: 'Inspeção e entrega', description: 'Verificamos as características previstas para o fornecimento antes da entrega.' },
    ],
  },
  en: {
    eyebrow: 'Applied engineering',
    solutionsTitle: 'Our Engineering Solutions',
    solutionsLead: 'We develop designs and analyses around the application, service conditions and component requirements.',
    innovationTitle: 'Innovation in Every Project',
    innovationLead: 'We use design and simulation tools to assess components for different industrial conditions.',
    innovation: [
      { title: 'Optimized Design', description: 'Designs guided by efficiency, manufacturability and operating conditions.' },
      { title: 'Simulation Support', description: 'Simulations support technical assessment before production.' },
      { title: 'Ongoing Partnership', description: 'Technical support during project analysis and development.' },
    ],
    rollApplicationsTitle: 'Steels — examples of roll applications',
    castingTitle: 'Aceros Stainless Steels — Centrifugal Casting Process',
    castingQuestion: 'What is centrifugal steel casting?',
    castingAnswer: 'Molten steel is poured into a preheated, rotating steel mould. Centrifugal force drives the metal against the mould wall, forming tubular parts with controlled inner and outer diameters.',
    castingCaption: 'Fig. 1: Casting an ASTM A297 grade HP tube.',
    forceQuestion: 'How does centrifugal force act?',
    forceAnswer: 'Rotation directs the molten metal toward the inner mould wall. Depending on the process and alloy, the metal is poured at temperatures between 1,500 and 1,630 °C.',
    rotationNote: 'Operating speed is defined from mould diameter and tube mass to control part formation.',
    treatmentNote: 'Depending on the project, the component may also be heat treated after casting.',
    tubesTitle: 'Aceros — Stainless Steel Division — Tubes',
    tubesCaption: 'Fig. 2: Example of a centrifugal casting machine in operation.',
    sinkRollNote: 'After casting, the tube can be machined and polished for use in a sink roll.',
    sinkRollContext: 'Finish and inspections are defined by the technical drawing and application conditions.',
    calculationTitle: 'Structural Calculation',
    calculationLead: 'Our team uses engineering tools suited to each project’s requirements.',
    mathematics: 'Mathematics',
    temperatureTitle: 'Structural Calculations and Thermal Simulations',
    processEyebrow: 'Aceros Engineering',
    processTitle: 'From Technical Drawing to Finished Part',
    processLead: 'Every supply starts with project specifications to define material, manufacturing and required checks.',
    steps: [
      { title: 'Project Review', description: 'We review the drawing, dimensions and operating conditions of the part.' },
      { title: 'Material and Manufacturing', description: 'We define the alloy and production steps against agreed requirements.' },
      { title: 'Inspection and Delivery', description: 'We check the specified supply characteristics before delivery.' },
    ],
  },
  es: {
    eyebrow: 'Ingeniería aplicada',
    solutionsTitle: 'Nuestras Soluciones de Ingeniería',
    solutionsLead: 'Desarrollamos proyectos y análisis según la aplicación, las condiciones de servicio y los requisitos del componente.',
    innovationTitle: 'Innovación en Cada Proyecto',
    innovationLead: 'Utilizamos herramientas de diseño y simulación para evaluar componentes destinados a distintas condiciones industriales.',
    innovation: [
      { title: 'Diseño Optimizado', description: 'Diseños orientados a la eficiencia, la fabricación y las condiciones de operación.' },
      { title: 'Validación por Simulación', description: 'Las simulaciones apoyan la evaluación técnica antes de la producción.' },
      { title: 'Colaboración Continua', description: 'Acompañamiento técnico durante el análisis y desarrollo del proyecto.' },
    ],
    rollApplicationsTitle: 'Aceros — ejemplos de aplicaciones de rodillos',
    castingTitle: 'Aceros Inoxidables — Proceso de Fundición Centrífuga',
    castingQuestion: '¿Qué es la fundición centrífuga de acero?',
    castingAnswer: 'El acero líquido se vierte en un molde de acero precalentado y en rotación. La fuerza centrífuga dirige el metal hacia la pared del molde y forma piezas tubulares con diámetros interior y exterior controlados.',
    castingCaption: 'Fig. 1: Colada de un tubo ASTM A297, grado HP.',
    forceQuestion: '¿Cómo actúa la fuerza centrífuga?',
    forceAnswer: 'La rotación dirige el metal líquido hacia la pared interna del molde. Según el proceso y la aleación, el metal se vierte a temperaturas entre 1.500 y 1.630 °C.',
    rotationNote: 'La velocidad de trabajo se define según el diámetro del molde y la masa del tubo para controlar la formación de la pieza.',
    treatmentNote: 'Según el proyecto, el componente también puede recibir tratamiento térmico después de la fundición.',
    tubesTitle: 'Aceros — División de Aceros Inoxidables — Tubos',
    tubesCaption: 'Fig. 2: Ejemplo de funcionamiento de una máquina de fundición centrífuga.',
    sinkRollNote: 'Después de la fundición, el tubo puede mecanizarse y pulirse para formar parte de un sink roll.',
    sinkRollContext: 'El acabado y las inspecciones se definen por el plano técnico y las condiciones de aplicación.',
    calculationTitle: 'Cálculo Estructural',
    calculationLead: 'Nuestro equipo utiliza herramientas de ingeniería adecuadas a los requisitos de cada proyecto.',
    mathematics: 'Matemáticas',
    temperatureTitle: 'Cálculos Estructurales y Simulaciones Térmicas',
    processEyebrow: 'Ingeniería Aceros',
    processTitle: 'Del Plano Técnico a la Pieza Terminada',
    processLead: 'Cada suministro parte de las especificaciones del proyecto para definir material, fabricación y verificaciones necesarias.',
    steps: [
      { title: 'Análisis del Proyecto', description: 'Evaluamos el plano, las dimensiones y las condiciones de aplicación de la pieza.' },
      { title: 'Material y Fabricación', description: 'Definimos la aleación y las etapas de producción según los requisitos acordados.' },
      { title: 'Inspección y Entrega', description: 'Verificamos las características previstas para el suministro antes de la entrega.' },
    ],
  },
  de: {
    eyebrow: 'Angewandtes Engineering',
    solutionsTitle: 'Unsere Engineering-Lösungen',
    solutionsLead: 'Wir entwickeln Konstruktionen und Analysen anhand der Anwendung, der Betriebsbedingungen und der Komponentenanforderungen.',
    innovationTitle: 'Innovation in jedem Projekt',
    innovationLead: 'Mit Konstruktions- und Simulationswerkzeugen bewerten wir Komponenten für verschiedene industrielle Bedingungen.',
    innovation: [
      { title: 'Optimierte Konstruktion', description: 'Auslegung mit Blick auf Effizienz, Fertigung und Betriebsbedingungen.' },
      { title: 'Unterstützung durch Simulation', description: 'Simulationen unterstützen die technische Bewertung vor der Produktion.' },
      { title: 'Kontinuierliche Zusammenarbeit', description: 'Technische Begleitung bei Analyse und Entwicklung des Projekts.' },
    ],
    rollApplicationsTitle: 'Stähle — Anwendungsbeispiele für Rollen',
    castingTitle: 'Aceros Edelstahl — Schleudergussverfahren',
    castingQuestion: 'Was ist Stahlschleuderguss?',
    castingAnswer: 'Flüssiger Stahl wird in eine vorgewärmte, rotierende Stahlform gegossen. Die Fliehkraft drückt das Metall an die Formwand und erzeugt rohrförmige Teile mit kontrolliertem Innen- und Außendurchmesser.',
    castingCaption: 'Abb. 1: Gießen eines Rohrs aus ASTM A297, Güte HP.',
    forceQuestion: 'Wie wirkt die Fliehkraft?',
    forceAnswer: 'Die Rotation lenkt das flüssige Metall zur inneren Formwand. Je nach Verfahren und Legierung wird es bei Temperaturen zwischen 1.500 und 1.630 °C gegossen.',
    rotationNote: 'Die Drehzahl wird anhand von Formdurchmesser und Rohrmasse festgelegt, um die Bauteilbildung zu steuern.',
    treatmentNote: 'Je nach Projekt kann das Bauteil nach dem Guss auch wärmebehandelt werden.',
    tubesTitle: 'Aceros — Edelstahlbereich — Rohre',
    tubesCaption: 'Abb. 2: Beispiel für den Betrieb einer Schleudergussmaschine.',
    sinkRollNote: 'Nach dem Guss kann das Rohr für den Einsatz in einer Sink Roll bearbeitet und poliert werden.',
    sinkRollContext: 'Oberfläche und Prüfungen richten sich nach Zeichnung und Einsatzbedingungen.',
    calculationTitle: 'Strukturberechnung',
    calculationLead: 'Unser Team nutzt Engineering-Werkzeuge passend zu den Anforderungen jedes Projekts.',
    mathematics: 'Mathematik',
    temperatureTitle: 'Strukturberechnungen und thermische Simulationen',
    processEyebrow: 'Aceros Engineering',
    processTitle: 'Von der Zeichnung zum fertigen Bauteil',
    processLead: 'Jede Lieferung beginnt mit den Projektspezifikationen, um Werkstoff, Fertigung und Prüfungen festzulegen.',
    steps: [
      { title: 'Projektprüfung', description: 'Wir prüfen Zeichnung, Abmessungen und Einsatzbedingungen des Bauteils.' },
      { title: 'Werkstoff und Fertigung', description: 'Wir legen Legierung und Produktionsschritte nach den vereinbarten Anforderungen fest.' },
      { title: 'Prüfung und Lieferung', description: 'Vor der Lieferung kontrollieren wir die festgelegten Merkmale.' },
    ],
  },
  it: {
    eyebrow: 'Ingegneria applicata',
    solutionsTitle: 'Le Nostre Soluzioni di Ingegneria',
    solutionsLead: 'Sviluppiamo progetti e analisi in base all’applicazione, alle condizioni di esercizio e ai requisiti del componente.',
    innovationTitle: 'Innovazione in Ogni Progetto',
    innovationLead: 'Utilizziamo strumenti di progettazione e simulazione per valutare componenti destinati a diverse condizioni industriali.',
    innovation: [
      { title: 'Progetto Ottimizzato', description: 'Progetti orientati all’efficienza, alla fabbricazione e alle condizioni operative.' },
      { title: 'Supporto della Simulazione', description: 'Le simulazioni supportano la valutazione tecnica prima della produzione.' },
      { title: 'Collaborazione Continua', description: 'Supporto tecnico durante l’analisi e lo sviluppo del progetto.' },
    ],
    rollApplicationsTitle: 'Acciai — esempi di applicazione dei rulli',
    castingTitle: 'Aceros Acciai Inossidabili — Processo di Colata Centrifuga',
    castingQuestion: 'Che cos’è la colata centrifuga dell’acciaio?',
    castingAnswer: 'L’acciaio liquido viene versato in uno stampo d’acciaio preriscaldato e in rotazione. La forza centrifuga spinge il metallo contro la parete dello stampo, formando pezzi tubolari con diametri interno ed esterno controllati.',
    castingCaption: 'Fig. 1: Colata di un tubo ASTM A297, grado HP.',
    forceQuestion: 'Come agisce la forza centrifuga?',
    forceAnswer: 'La rotazione dirige il metallo liquido verso la parete interna dello stampo. Secondo il processo e la lega, la colata avviene a temperature tra 1.500 e 1.630 °C.',
    rotationNote: 'La velocità di lavoro viene definita in base al diametro dello stampo e alla massa del tubo per controllare la formazione del pezzo.',
    treatmentNote: 'In base al progetto, il componente può anche ricevere un trattamento termico dopo la colata.',
    tubesTitle: 'Aceros — Divisione Acciai Inossidabili — Tubi',
    tubesCaption: 'Fig. 2: Esempio di funzionamento di una macchina per colata centrifuga.',
    sinkRollNote: 'Dopo la colata, il tubo può essere lavorato e lucidato per l’uso in un sink roll.',
    sinkRollContext: 'Finitura e controlli sono definiti dal disegno tecnico e dalle condizioni di applicazione.',
    calculationTitle: 'Calcolo Strutturale',
    calculationLead: 'Il nostro team utilizza strumenti di ingegneria adatti ai requisiti di ogni progetto.',
    mathematics: 'Matematica',
    temperatureTitle: 'Calcoli Strutturali e Simulazioni Termiche',
    processEyebrow: 'Ingegneria Aceros',
    processTitle: 'Dal Disegno Tecnico al Pezzo Finito',
    processLead: 'Ogni fornitura parte dalle specifiche del progetto per definire materiale, fabbricazione e controlli necessari.',
    steps: [
      { title: 'Analisi del Progetto', description: 'Valutiamo disegno, dimensioni e condizioni di applicazione del pezzo.' },
      { title: 'Materiale e Fabbricazione', description: 'Definiamo la lega e le fasi produttive secondo i requisiti concordati.' },
      { title: 'Controllo e Consegna', description: 'Verifichiamo le caratteristiche previste per la fornitura prima della consegna.' },
    ],
  },
};
