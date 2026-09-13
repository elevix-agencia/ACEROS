'use client';

import {
  Boxes,
  Cog,
  Flame,
  Gauge,
  Layers,
  Ruler,
  Sparkles,
  Thermometer,
} from 'lucide-react';
import Image from 'next/image';
import { useLanguage, type Language } from '@/hooks/use-language';

type SwCopy = { nome: string; desc: string };
type MaquinaCopy = { numero: string; label: string; sub: string };
type Copy = {
  swEyebrow: string; swTitle: string; swLead: string;
  factoryEyebrow: string; factoryTitle: string; factoryLead: string;
  factoryExtra: React.ReactNode;
  processBadge: string; processTitle1: string; processTitleAccent: string;
  processP1: string; processP2: string;
  tempLabel: string; tempValue: string; normLabel: string;
  resultEyebrow: string; resultTitle: string; resultCaption: string;
  resultImgAlt: string;
  softwares: SwCopy[];
  maquinas: MaquinaCopy[];
};

const maquinaIcons = [Cog, Gauge, Ruler, Boxes, Layers, Sparkles];
const _thermometerIcon = Thermometer;

const dict: Record<Language, Copy> = {
  pt: {
    swEyebrow: 'Softwares de Engenharia',
    swTitle: 'Ferramentas de projeto de nível internacional',
    swLead: 'Nossa engenharia trabalha com os principais softwares do mercado para dimensionar, simular e validar cada projeto antes da fabricação.',
    factoryEyebrow: 'Nossa Fábrica',
    factoryTitle: 'Parque de máquinas para peças de qualquer porte',
    factoryLead: 'Da usinagem CNC de precisão milimétrica ao torneamento de peças de até 12 metros: nossa fábrica está equipada para fabricar componentes centrifugados e usinados de porte industrial.',
    factoryExtra: <>Além dos itens acima, contamos com <strong className="text-white">3 fresadoras convencionais, calandras até 4″, plainas, retíficas, prensas hidráulicas, equipamentos de solda TIG/MIG/MAG e eletrodo revestido (EPS, RQPS e RQSO)</strong> e uma linha completa de instrumentos calibrados RBC para garantir precisão e confiança em cada peça.</>,
    processBadge: 'Nosso processo', processTitle1: 'Fundição por Centrifugação de aço a', processTitleAccent: '1.500 – 1.630 °C',
    processP1: 'A centrifugação é o processo de fabricação em que o aço líquido, a temperaturas entre 1.500 e 1.630 °C, é vazado em uma matriz de aço baixo carbono (coquilha) pré-aquecida e em rotação. A força centrífuga direciona o metal contra as paredes da matriz, formando peças tubulares com controle dos diâmetros interno e externo.',
    processP2: 'O processo favorece uma estrutura densa. As dimensões e a integridade da peça são verificadas pelos controles definidos para cada projeto. Quando especificado, o fornecimento também pode incluir beneficiamento térmico, como solubilização.',
    tempLabel: 'Temperatura de vazamento', tempValue: '1.500 – 1.630 °C',
    normLabel: 'Norma aplicada',
    resultEyebrow: 'Resultado', resultTitle: 'Tubo centrifugado bruto', resultCaption: 'Pronto para usinagem CNC',
    resultImgAlt: 'Tubo centrifugado bruto, resultado do processo de fundição',
    softwares: [
      { nome: 'SolidWorks', desc: 'Modelagem 3D paramétrica e desenho técnico' },
      { nome: 'AutoCAD', desc: 'Detalhamento e desenhos 2D de produção' },
      { nome: 'Cálculo Estrutural', desc: 'Análises com temperatura de até 800 °C' },
      { nome: 'Elementos Finitos', desc: 'Simulação de tensões e deformações' },
      { nome: 'Navcad / Propcad', desc: 'Hidrodinâmica e propulsão naval (Hidrocomp)' },
      { nome: 'Matematics', desc: 'Cálculos avançados de engenharia' },
    ],
    maquinas: [
      { numero: '20', label: 'Tornos mecânicos', sub: 'até 1.700 mm de diâmetro · 12 m entre pontas' },
      { numero: '3', label: 'Tornos CNC', sub: 'até 1.240 mm de diâmetro · 6 m entre pontas' },
      { numero: '1', label: 'Mandrilhadora CN', sub: 'curso 1.200 × 1.200 × 1.200 mm' },
      { numero: '2', label: 'Fresadoras CNC', sub: 'curso horizontal até 3.000 mm' },
      { numero: '400 t', label: 'Prensa hidráulica', sub: 'capacidade máxima' },
      { numero: '63 mm', label: 'Corte plasma CNC', sub: 'espessura máxima de chapa' },
    ],
  },
  en: {
    swEyebrow: 'Engineering software',
    swTitle: 'World-class design tools',
    swLead: 'Our engineering team uses leading industry software to size, simulate and validate each project before manufacturing.',
    factoryEyebrow: 'Our factory',
    factoryTitle: 'Machinery for parts of any size',
    factoryLead: 'From millimetric CNC machining to turning of parts up to 12 metres: our shop floor is set up to produce industrial-scale centrifugally cast and machined components.',
    factoryExtra: <>In addition to the above we run <strong className="text-white">3 conventional milling machines, rolling machines up to 4″, planers, grinders, hydraulic presses, TIG/MIG/MAG and coated-electrode welding equipment (WPS, PQR and welder qualifications)</strong> and a full set of RBC-traceable calibrated instruments to ensure precision and confidence in every part.</>,
    processBadge: 'Our process', processTitle1: 'Centrifugal casting of steel at', processTitleAccent: '1,500 – 1,630 °C',
    processP1: 'Centrifugal casting is the manufacturing process in which liquid steel, at temperatures between 1,500 and 1,630 °C, is poured into a rotating, pre-heated low-carbon steel mould (chill). Centrifugal force pushes the metal against the mould walls, forming tubular parts with controlled inner and outer diameters.',
    processP2: 'The process favours a dense structure. Dimensions and integrity of the part are verified through project-specific controls. When specified, supply can also include heat treatment such as solution annealing.',
    tempLabel: 'Pouring temperature', tempValue: '1,500 – 1,630 °C',
    normLabel: 'Reference standard',
    resultEyebrow: 'Result', resultTitle: 'Rough centrifugally cast tube', resultCaption: 'Ready for CNC machining',
    resultImgAlt: 'Rough centrifugally cast tube, the outcome of the casting process',
    softwares: [
      { nome: 'SolidWorks', desc: 'Parametric 3D modelling and technical drawing' },
      { nome: 'AutoCAD', desc: 'Detailing and 2D production drawings' },
      { nome: 'Structural calculation', desc: 'Analyses at temperatures up to 800 °C' },
      { nome: 'Finite elements', desc: 'Stress and strain simulation' },
      { nome: 'Navcad / Propcad', desc: 'Naval hydrodynamics and propulsion (Hidrocomp)' },
      { nome: 'Matematics', desc: 'Advanced engineering calculations' },
    ],
    maquinas: [
      { numero: '20', label: 'Manual lathes', sub: 'up to 1,700 mm diameter · 12 m between centres' },
      { numero: '3', label: 'CNC lathes', sub: 'up to 1,240 mm diameter · 6 m between centres' },
      { numero: '1', label: 'CN boring mill', sub: 'stroke 1,200 × 1,200 × 1,200 mm' },
      { numero: '2', label: 'CNC milling machines', sub: 'horizontal stroke up to 3,000 mm' },
      { numero: '400 t', label: 'Hydraulic press', sub: 'maximum capacity' },
      { numero: '63 mm', label: 'CNC plasma cutting', sub: 'maximum plate thickness' },
    ],
  },
  es: {
    swEyebrow: 'Software de ingeniería',
    swTitle: 'Herramientas de diseño de nivel internacional',
    swLead: 'Nuestra ingeniería trabaja con los principales softwares del mercado para dimensionar, simular y validar cada proyecto antes de la fabricación.',
    factoryEyebrow: 'Nuestra fábrica',
    factoryTitle: 'Parque de máquinas para piezas de cualquier tamaño',
    factoryLead: 'Desde el mecanizado CNC de precisión milimétrica hasta el torneado de piezas de hasta 12 metros: nuestra planta está equipada para fabricar componentes centrifugados y mecanizados de gran porte.',
    factoryExtra: <>Además de lo anterior, contamos con <strong className="text-white">3 fresadoras convencionales, calandras hasta 4″, cepilladoras, rectificadoras, prensas hidráulicas, equipos de soldadura TIG/MIG/MAG y electrodo revestido (WPS, PQR y calificación de soldadores)</strong> y una línea completa de instrumentos calibrados RBC para garantizar precisión y confianza en cada pieza.</>,
    processBadge: 'Nuestro proceso', processTitle1: 'Fundición centrifugada de acero a', processTitleAccent: '1.500 – 1.630 °C',
    processP1: 'La centrifugación es el proceso de fabricación en el que el acero líquido, a temperaturas entre 1.500 y 1.630 °C, se vierte en una coquilla de acero de bajo carbono precalentada y en rotación. La fuerza centrífuga dirige el metal contra las paredes de la matriz, formando piezas tubulares con control de los diámetros interno y externo.',
    processP2: 'El proceso favorece una estructura densa. Las dimensiones y la integridad de la pieza se verifican mediante los controles definidos para cada proyecto. Cuando se especifica, el suministro puede incluir tratamiento térmico, como solubilización.',
    tempLabel: 'Temperatura de colada', tempValue: '1.500 – 1.630 °C',
    normLabel: 'Norma aplicada',
    resultEyebrow: 'Resultado', resultTitle: 'Tubo centrifugado en bruto', resultCaption: 'Listo para mecanizado CNC',
    resultImgAlt: 'Tubo centrifugado en bruto, resultado del proceso de fundición',
    softwares: [
      { nome: 'SolidWorks', desc: 'Modelado 3D paramétrico y dibujo técnico' },
      { nome: 'AutoCAD', desc: 'Detallado y planos 2D de producción' },
      { nome: 'Cálculo estructural', desc: 'Análisis con temperatura de hasta 800 °C' },
      { nome: 'Elementos finitos', desc: 'Simulación de tensiones y deformaciones' },
      { nome: 'Navcad / Propcad', desc: 'Hidrodinámica y propulsión naval (Hidrocomp)' },
      { nome: 'Matematics', desc: 'Cálculos avanzados de ingeniería' },
    ],
    maquinas: [
      { numero: '20', label: 'Tornos mecánicos', sub: 'hasta 1.700 mm de diámetro · 12 m entre puntos' },
      { numero: '3', label: 'Tornos CNC', sub: 'hasta 1.240 mm de diámetro · 6 m entre puntos' },
      { numero: '1', label: 'Mandriladora CN', sub: 'recorrido 1.200 × 1.200 × 1.200 mm' },
      { numero: '2', label: 'Fresadoras CNC', sub: 'recorrido horizontal hasta 3.000 mm' },
      { numero: '400 t', label: 'Prensa hidráulica', sub: 'capacidad máxima' },
      { numero: '63 mm', label: 'Corte plasma CNC', sub: 'espesor máximo de chapa' },
    ],
  },
  de: {
    swEyebrow: 'Konstruktions-Software',
    swTitle: 'Konstruktionswerkzeuge auf internationalem Niveau',
    swLead: 'Unsere Konstruktion nutzt die führenden Softwarelösungen des Marktes, um jedes Projekt vor der Fertigung zu dimensionieren, zu simulieren und zu validieren.',
    factoryEyebrow: 'Unser Werk',
    factoryTitle: 'Maschinenpark für Bauteile jeder Größe',
    factoryLead: 'Von der millimetergenauen CNC-Bearbeitung bis zum Drehen von Bauteilen mit 12 Metern Länge: unser Werk fertigt Schleuderguss- und Bearbeitungsteile im industriellen Maßstab.',
    factoryExtra: <>Zusätzlich betreiben wir <strong className="text-white">3 konventionelle Fräsmaschinen, Kalander bis 4″, Hobelmaschinen, Schleifmaschinen, Hydraulikpressen, Schweißanlagen für WIG/MIG/MAG und Stabelektrode (WPS, PQR und Schweißerqualifikationen)</strong> sowie eine komplette Reihe RBC-rückverfolgbarer, kalibrierter Instrumente – für Präzision und Verlässlichkeit in jedem Bauteil.</>,
    processBadge: 'Unser Verfahren', processTitle1: 'Schleuderguss von Stahl bei', processTitleAccent: '1.500 – 1.630 °C',
    processP1: 'Beim Schleuderguss wird flüssiger Stahl bei Temperaturen zwischen 1.500 und 1.630 °C in eine rotierende, vorgewärmte Kokille aus niedriglegiertem Stahl gegossen. Die Fliehkraft drückt das Metall gegen die Kokillenwand und formt Rohrteile mit kontrolliertem Innen- und Außendurchmesser.',
    processP2: 'Das Verfahren fördert ein dichtes Gefüge. Abmessungen und Integrität des Bauteils werden durch die im Projekt definierten Prüfungen kontrolliert. Auf Wunsch umfasst die Lieferung auch die Wärmebehandlung, z. B. Lösungsglühen.',
    tempLabel: 'Gießtemperatur', tempValue: '1.500 – 1.630 °C',
    normLabel: 'Referenznorm',
    resultEyebrow: 'Ergebnis', resultTitle: 'Rohes Schleudergussrohr', resultCaption: 'Bereit zur CNC-Bearbeitung',
    resultImgAlt: 'Rohes Schleudergussrohr, Ergebnis des Gussverfahrens',
    softwares: [
      { nome: 'SolidWorks', desc: 'Parametrische 3D-Modellierung und technische Zeichnung' },
      { nome: 'AutoCAD', desc: 'Detailkonstruktion und 2D-Fertigungszeichnungen' },
      { nome: 'Strukturberechnung', desc: 'Analysen bis 800 °C' },
      { nome: 'Finite Elemente', desc: 'Spannungs- und Verformungssimulation' },
      { nome: 'Navcad / Propcad', desc: 'Hydrodynamik und Marinepropulsion (Hidrocomp)' },
      { nome: 'Matematics', desc: 'Fortgeschrittene Ingenieur-Berechnungen' },
    ],
    maquinas: [
      { numero: '20', label: 'Konventionelle Drehmaschinen', sub: 'bis 1.700 mm Durchmesser · 12 m zwischen Spitzen' },
      { numero: '3', label: 'CNC-Drehmaschinen', sub: 'bis 1.240 mm Durchmesser · 6 m zwischen Spitzen' },
      { numero: '1', label: 'CN-Bohrwerk', sub: 'Verfahrweg 1.200 × 1.200 × 1.200 mm' },
      { numero: '2', label: 'CNC-Fräsmaschinen', sub: 'horizontaler Verfahrweg bis 3.000 mm' },
      { numero: '400 t', label: 'Hydraulikpresse', sub: 'maximale Kapazität' },
      { numero: '63 mm', label: 'CNC-Plasmaschneiden', sub: 'maximale Blechdicke' },
    ],
  },
  it: {
    swEyebrow: 'Software di ingegneria',
    swTitle: 'Strumenti di progetto di livello internazionale',
    swLead: 'La nostra ingegneria lavora con i principali software del mercato per dimensionare, simulare e validare ogni progetto prima della fabbricazione.',
    factoryEyebrow: 'La nostra fabbrica',
    factoryTitle: 'Parco macchine per pezzi di qualsiasi dimensione',
    factoryLead: 'Dalla lavorazione CNC di precisione millimetrica al tornio per pezzi fino a 12 metri: la nostra officina è attrezzata per produrre componenti centrifugati e lavorati di taglia industriale.',
    factoryExtra: <>Oltre a quanto sopra disponiamo di <strong className="text-white">3 fresatrici tradizionali, calandre fino a 4″, piallatrici, rettifiche, presse idrauliche, impianti di saldatura TIG/MIG/MAG ed elettrodo rivestito (WPS, PQR e qualifica saldatori)</strong> e di una linea completa di strumenti calibrati e tracciabili RBC per garantire precisione e affidabilità in ogni pezzo.</>,
    processBadge: 'Il nostro processo', processTitle1: 'Fusione centrifugata di acciaio a', processTitleAccent: '1.500 – 1.630 °C',
    processP1: 'La centrifugazione è il processo di fabbricazione in cui l\'acciaio liquido, a temperature comprese tra 1.500 e 1.630 °C, viene colato in una conchiglia in acciaio a basso carbonio preriscaldata e in rotazione. La forza centrifuga spinge il metallo contro le pareti della matrice, formando pezzi tubolari con controllo del diametro interno ed esterno.',
    processP2: 'Il processo favorisce una struttura densa. Dimensioni e integrità del pezzo sono verificate tramite i controlli previsti per ciascun progetto. Su richiesta la fornitura può includere trattamento termico, come solubilizzazione.',
    tempLabel: 'Temperatura di colata', tempValue: '1.500 – 1.630 °C',
    normLabel: 'Norma di riferimento',
    resultEyebrow: 'Risultato', resultTitle: 'Tubo centrifugato grezzo', resultCaption: 'Pronto per la lavorazione CNC',
    resultImgAlt: 'Tubo centrifugato grezzo, risultato del processo di fusione',
    softwares: [
      { nome: 'SolidWorks', desc: 'Modellazione 3D parametrica e disegno tecnico' },
      { nome: 'AutoCAD', desc: 'Dettaglio e disegni 2D di produzione' },
      { nome: 'Calcolo strutturale', desc: 'Analisi con temperatura fino a 800 °C' },
      { nome: 'Elementi finiti', desc: 'Simulazione di sollecitazioni e deformazioni' },
      { nome: 'Navcad / Propcad', desc: 'Idrodinamica e propulsione navale (Hidrocomp)' },
      { nome: 'Matematics', desc: 'Calcoli avanzati di ingegneria' },
    ],
    maquinas: [
      { numero: '20', label: 'Torni meccanici', sub: 'fino a 1.700 mm di diametro · 12 m tra le punte' },
      { numero: '3', label: 'Torni CNC', sub: 'fino a 1.240 mm di diametro · 6 m tra le punte' },
      { numero: '1', label: 'Alesatrice CN', sub: 'corsa 1.200 × 1.200 × 1.200 mm' },
      { numero: '2', label: 'Fresatrici CNC', sub: 'corsa orizzontale fino a 3.000 mm' },
      { numero: '400 t', label: 'Pressa idraulica', sub: 'capacità massima' },
      { numero: '63 mm', label: 'Taglio plasma CNC', sub: 'spessore massimo di lamiera' },
    ],
  },
};

export function EngineeringCapabilities() {
  const { language } = useLanguage();
  const c = dict[language] ?? dict.pt;

  return (
    <>
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">{c.swEyebrow}</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 mb-6">{c.swTitle}</h2>
            <p className="text-lg text-muted-foreground">{c.swLead}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {c.softwares.map((sw, i) => (
              <div key={sw.nome} className="bg-white rounded-xl border border-slate-200 p-6 hover:border-accent hover:shadow-lg transition-all animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}>
                <h3 className="font-headline text-xl font-bold text-slate-900 mb-2">{sw.nome}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{sw.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">{c.factoryEyebrow}</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">{c.factoryTitle}</h2>
            <p className="text-lg text-slate-300">{c.factoryLead}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {c.maquinas.map((m, i) => {
              const Icone = maquinaIcons[i] ?? Cog;
              return (
                <div key={m.label} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center hover:border-accent transition-colors animate-fade-in-up" style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'both' }}>
                  <Icone className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="text-3xl sm:text-4xl font-bold text-white font-headline mb-1">{m.numero}</div>
                  <div className="text-white font-semibold text-sm">{m.label}</div>
                  <div className="text-slate-400 text-xs mt-2 leading-snug">{m.sub}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-300 max-w-3xl mx-auto text-base">{c.factoryExtra}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1 text-accent text-sm font-semibold uppercase tracking-wide mb-4">
                <Flame className="h-4 w-4" />
                {c.processBadge}
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {c.processTitle1}{' '}<span className="text-accent">{c.processTitleAccent}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">{c.processP1}</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{c.processP2}</p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{c.tempLabel}</div>
                  <div className="text-2xl font-headline font-bold text-slate-900">{c.tempValue}</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{c.normLabel}</div>
                  <div className="text-2xl font-headline font-bold text-slate-900">ASTM A297</div>
                </div>
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/aceros/tubos/tubo-aco-inox-bruto-aceros-01.jpg" alt={c.resultImgAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs uppercase tracking-widest text-accent mb-1">{c.resultEyebrow}</div>
                <div className="text-lg font-bold">{c.resultTitle}</div>
                <div className="text-sm text-slate-200 mt-1">{c.resultCaption}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
