'use client';

import Link from 'next/link';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';
import { Button } from '@/components/ui/button';
import { Beaker, Flame, ShieldCheck, Waves, Zap } from 'lucide-react';
import { useLanguage, type Language } from '@/hooks/use-language';

type FamiliaKey = 'serie_300' | 'serie_400' | 'astm_a297' | 'especial';

type LigaBase = { nome: string; familia: FamiliaKey; destaque?: boolean };

const ligasMeta: LigaBase[] = [
  { nome: 'AISI 304 / 304L', familia: 'serie_300' },
  { nome: 'AISI 316 / 316L', familia: 'serie_300' },
  { nome: 'AISI 310', familia: 'serie_300' },
  { nome: 'AISI 420', familia: 'serie_400' },
  { nome: 'ASTM A297 Gr. HK', familia: 'astm_a297', destaque: true },
  { nome: 'ASTM A297 Gr. HH', familia: 'astm_a297', destaque: true },
  { nome: 'ASTM A297 Gr. HP', familia: 'astm_a297', destaque: true },
  { nome: 'Cilindro Inox + Tungstênio', familia: 'especial', destaque: true },
];

const familiaIcones = { serie_300: ShieldCheck, serie_400: Zap, astm_a297: Flame, especial: Beaker };
const familiaCores = {
  serie_300: 'from-primary/20 to-primary/5 border-primary/30',
  serie_400: 'from-slate-500/20 to-slate-500/5 border-slate-500/30',
  astm_a297: 'from-orange-500/20 to-orange-500/5 border-orange-500/30',
  especial: 'from-accent/30 to-accent/10 border-accent',
};

type Copy = {
  eyebrow: string; titleA: string; titleAccent: string; lead: string;
  destaqueLabel: string;
  ctaEyebrow: string; ctaTitle: string; ctaLead: string;
  ctaEng: string; ctaCat: string;
  familias: Record<FamiliaKey, string>;
  ligas: { descricao: string; aplicacoes: string[] }[];
  ligaTradName: string[]; // localized alloy name (mostly PT since Aceros uses PT terms)
};

const dict: Record<Language, Copy> = {
  pt: {
    eyebrow: 'Nossas ligas',
    titleA: 'Aços inoxidáveis e ligas resistentes ao calor,',
    titleAccent: 'selecionados por aplicação',
    lead: 'Trabalhamos com uma família ampla de ligas de aço inoxidável (série 300, 400 e graus ASTM A297) para atender às condições informadas em cada projeto. Nossa engenharia avalia a liga com base na temperatura, no ambiente químico e regime de trabalho da sua planta.',
    destaqueLabel: 'Destaque',
    ctaEyebrow: 'Consultoria de engenharia',
    ctaTitle: 'Não sabe qual liga escolher para sua aplicação?',
    ctaLead: 'Nossa engenharia analisa temperatura de trabalho, ambiente químico, ciclos térmicos e histórico de operação para orientar a seleção do material conforme o projeto.',
    ctaEng: 'Falar com engenheiro', ctaCat: 'Ver catálogo de produtos',
    familias: { serie_300: 'Série 300', serie_400: 'Série 400', astm_a297: 'ASTM A297 (Refratária)', especial: 'Solução especial' },
    ligas: [
      { descricao: 'Aço inoxidável austenítico com cromo (18%) e níquel (8%). Boa resistência à corrosão em ambientes atmosféricos, químicos leves e alimentícios. Versão L com baixo teor de carbono para melhor soldabilidade.', aplicacoes: ['Indústria química', 'Alimentícia', 'Estruturas'] },
      { descricao: 'A adição de molibdênio contribui para a resistência à corrosão em determinados ambientes com cloretos. A aplicação deve ser avaliada conforme as condições do projeto.', aplicacoes: ['Petroquímica', 'Naval', 'Química agressiva'] },
      { descricao: 'Aço inoxidável austenítico com teores elevados de cromo e níquel, utilizado em aplicações que exigem avaliação de oxidação e fluência em alta temperatura.', aplicacoes: ['Fornos de tratamento térmico', 'Componentes siderúrgicos'] },
      { descricao: 'Aço inoxidável martensítico endurecível por têmpera, empregado em componentes cujo projeto exige dureza, resistência mecânica e resistência à corrosão moderada.', aplicacoes: ['Buchas', 'Componentes de precisão', 'Cutelaria industrial'] },
      { descricao: 'Grau de aço fundido resistente ao calor, utilizado em componentes sujeitos à fluência e oxidação. Composição, temperatura e aplicação devem ser confirmadas na especificação do projeto.', aplicacoes: ['Tubos radiantes', 'Fornos de reforma', 'Petroquímica'] },
      { descricao: 'Grau de aço fundido resistente ao calor, aplicado em componentes para fornos e tratamento térmico conforme temperatura, atmosfera e solicitação mecânica.', aplicacoes: ['Rolos de forno', 'Grelhas de tratamento térmico'] },
      { descricao: 'Grau de aço fundido resistente ao calor, usado em aplicações que demandam avaliação de fluência, oxidação e estabilidade dimensional em ciclos térmicos.', aplicacoes: ['Reforma catalítica', 'Produção de hidrogênio', 'Craqueamento'] },
      { descricao: 'Cilindros de aço inoxidável com adição de tungstênio, desenvolvidos conforme o projeto para aplicações sujeitas à abrasão em mineração e beneficiamento mineral.', aplicacoes: ['Mineração', 'Britagem', 'Peneiras de classificação'] },
    ],
    ligaTradName: ['AISI 304 / 304L', 'AISI 316 / 316L', 'AISI 310', 'AISI 420', 'ASTM A297 Gr. HK', 'ASTM A297 Gr. HH', 'ASTM A297 Gr. HP', 'Cilindro Inox + Tungstênio'],
  },
  en: {
    eyebrow: 'Our alloys',
    titleA: 'Stainless steels and heat-resistant alloys,',
    titleAccent: 'selected by application',
    lead: 'We work with a broad family of stainless steel alloys (series 300, 400 and ASTM A297 grades) to meet the conditions defined in each project. Our engineering team assesses the alloy based on the temperature, chemical environment and duty cycle of your plant.',
    destaqueLabel: 'Highlight',
    ctaEyebrow: 'Engineering consultancy',
    ctaTitle: 'Not sure which alloy is right for your application?',
    ctaLead: 'Our engineering team reviews operating temperature, chemical environment, thermal cycles and operational history to guide material selection for the project.',
    ctaEng: 'Talk to an engineer', ctaCat: 'View product catalogue',
    familias: { serie_300: 'Series 300', serie_400: 'Series 400', astm_a297: 'ASTM A297 (Refractory)', especial: 'Special solution' },
    ligas: [
      { descricao: 'Austenitic stainless steel with chromium (18%) and nickel (8%). Good corrosion resistance in atmospheric, mild-chemical and food environments. L version with low carbon content for improved weldability.', aplicacoes: ['Chemical industry', 'Food', 'Structures'] },
      { descricao: 'The addition of molybdenum improves corrosion resistance in certain chloride environments. Suitability is assessed for each project.', aplicacoes: ['Petrochemical', 'Naval', 'Aggressive chemistry'] },
      { descricao: 'Austenitic stainless steel with high chromium and nickel content, used in applications requiring assessment of oxidation and creep at high temperature.', aplicacoes: ['Heat-treatment furnaces', 'Steelmaking components'] },
      { descricao: 'Martensitic stainless steel hardenable by tempering, used in components requiring hardness, mechanical strength and moderate corrosion resistance.', aplicacoes: ['Bushings', 'Precision components', 'Industrial cutlery'] },
      { descricao: 'Heat-resistant cast grade used in components subject to creep and oxidation. Composition, temperature and application are confirmed in the project specification.', aplicacoes: ['Radiant tubes', 'Reforming furnaces', 'Petrochemical'] },
      { descricao: 'Heat-resistant cast grade used in furnace and heat-treatment components according to temperature, atmosphere and mechanical load.', aplicacoes: ['Furnace rolls', 'Heat-treatment grates'] },
      { descricao: 'Heat-resistant cast grade used in applications requiring creep, oxidation and dimensional-stability assessment in thermal cycles.', aplicacoes: ['Catalytic reforming', 'Hydrogen production', 'Cracking'] },
      { descricao: 'Stainless steel cylinders with tungsten addition, engineered for applications subject to abrasion in mining and mineral processing.', aplicacoes: ['Mining', 'Crushing', 'Classification screens'] },
    ],
    ligaTradName: ['AISI 304 / 304L', 'AISI 316 / 316L', 'AISI 310', 'AISI 420', 'ASTM A297 Gr. HK', 'ASTM A297 Gr. HH', 'ASTM A297 Gr. HP', 'Stainless + Tungsten Cylinder'],
  },
  es: {
    eyebrow: 'Nuestras aleaciones',
    titleA: 'Aceros inoxidables y aleaciones resistentes al calor,',
    titleAccent: 'seleccionadas por aplicación',
    lead: 'Trabajamos con una amplia familia de aleaciones de acero inoxidable (series 300, 400 y grados ASTM A297) para atender las condiciones definidas en cada proyecto. Nuestra ingeniería evalúa la aleación según la temperatura, el ambiente químico y el régimen de trabajo de su planta.',
    destaqueLabel: 'Destacada',
    ctaEyebrow: 'Consultoría de ingeniería',
    ctaTitle: '¿No sabe qué aleación elegir para su aplicación?',
    ctaLead: 'Nuestra ingeniería analiza temperatura de trabajo, ambiente químico, ciclos térmicos e historial de operación para orientar la selección del material.',
    ctaEng: 'Hablar con un ingeniero', ctaCat: 'Ver catálogo de productos',
    familias: { serie_300: 'Serie 300', serie_400: 'Serie 400', astm_a297: 'ASTM A297 (Refractaria)', especial: 'Solución especial' },
    ligas: [
      { descricao: 'Acero inoxidable austenítico con cromo (18%) y níquel (8%). Buena resistencia a la corrosión en ambientes atmosféricos, químicos suaves y alimenticios. Versión L con bajo contenido de carbono para mejor soldabilidad.', aplicacoes: ['Industria química', 'Alimentaria', 'Estructuras'] },
      { descricao: 'La adición de molibdeno mejora la resistencia a la corrosión en ciertos ambientes con cloruros. La aplicación se evalúa según las condiciones del proyecto.', aplicacoes: ['Petroquímica', 'Naval', 'Química agresiva'] },
      { descricao: 'Acero inoxidable austenítico con altos contenidos de cromo y níquel, utilizado en aplicaciones que requieren evaluación de oxidación y fluencia a alta temperatura.', aplicacoes: ['Hornos de tratamiento térmico', 'Componentes siderúrgicos'] },
      { descricao: 'Acero inoxidable martensítico templable, empleado en componentes que requieren dureza, resistencia mecánica y resistencia a la corrosión moderada.', aplicacoes: ['Bujes', 'Componentes de precisión', 'Cuchillería industrial'] },
      { descricao: 'Grado de acero fundido resistente al calor, usado en componentes sujetos a fluencia y oxidación. Composición, temperatura y aplicación se confirman en la especificación del proyecto.', aplicacoes: ['Tubos radiantes', 'Hornos de reformado', 'Petroquímica'] },
      { descricao: 'Grado de acero fundido resistente al calor, aplicado en componentes para hornos y tratamiento térmico según temperatura, atmósfera y solicitación mecánica.', aplicacoes: ['Rodillos de horno', 'Rejillas de tratamiento térmico'] },
      { descricao: 'Grado de acero fundido resistente al calor, usado en aplicaciones que exigen evaluación de fluencia, oxidación y estabilidad dimensional en ciclos térmicos.', aplicacoes: ['Reformado catalítico', 'Producción de hidrógeno', 'Craqueo'] },
      { descricao: 'Cilindros de acero inoxidable con adición de tungsteno, desarrollados según proyecto para aplicaciones con abrasión en minería y beneficio mineral.', aplicacoes: ['Minería', 'Trituración', 'Cribas de clasificación'] },
    ],
    ligaTradName: ['AISI 304 / 304L', 'AISI 316 / 316L', 'AISI 310', 'AISI 420', 'ASTM A297 Gr. HK', 'ASTM A297 Gr. HH', 'ASTM A297 Gr. HP', 'Cilindro Inox + Tungsteno'],
  },
  de: {
    eyebrow: 'Unsere Legierungen',
    titleA: 'Edelstähle und hitzebeständige Legierungen,',
    titleAccent: 'ausgewählt nach Anwendung',
    lead: 'Wir arbeiten mit einer breiten Familie von Edelstahllegierungen (Serie 300, 400 und ASTM A297) für die im jeweiligen Projekt vorgegebenen Bedingungen. Unsere Konstruktion beurteilt die Legierung anhand von Temperatur, chemischem Umfeld und Betriebszyklus Ihrer Anlage.',
    destaqueLabel: 'Empfehlung',
    ctaEyebrow: 'Ingenieurberatung',
    ctaTitle: 'Sie wissen nicht, welche Legierung zu Ihrer Anwendung passt?',
    ctaLead: 'Unsere Konstruktion analysiert Betriebstemperatur, chemisches Umfeld, thermische Zyklen und Betriebshistorie und leitet die Werkstoffauswahl im Projekt.',
    ctaEng: 'Mit einem Ingenieur sprechen', ctaCat: 'Zum Produktkatalog',
    familias: { serie_300: 'Serie 300', serie_400: 'Serie 400', astm_a297: 'ASTM A297 (feuerfest)', especial: 'Spezielle Lösung' },
    ligas: [
      { descricao: 'Austenitischer Edelstahl mit Chrom (18%) und Nickel (8%). Gute Korrosionsbeständigkeit in Atmosphäre, milder Chemie und Lebensmittelumgebung. L-Variante mit niedrigem Kohlenstoffanteil für bessere Schweißbarkeit.', aplicacoes: ['Chemieindustrie', 'Lebensmittel', 'Strukturbauten'] },
      { descricao: 'Der Molybdänzusatz verbessert die Korrosionsbeständigkeit in bestimmten chloridhaltigen Umgebungen. Die Eignung wird je Projekt bewertet.', aplicacoes: ['Petrochemie', 'Marine', 'Aggressive Chemie'] },
      { descricao: 'Austenitischer Edelstahl mit hohem Chrom- und Nickelgehalt, für Anwendungen mit Bewertung von Oxidation und Kriechen bei hoher Temperatur.', aplicacoes: ['Wärmebehandlungsöfen', 'Stahlbau-Komponenten'] },
      { descricao: 'Martensitischer, härtbarer Edelstahl für Bauteile mit Anforderungen an Härte, Festigkeit und mittlere Korrosionsbeständigkeit.', aplicacoes: ['Buchsen', 'Präzisionsteile', 'Industrieschneidwaren'] },
      { descricao: 'Hitzebeständiger Gussstahl für Bauteile mit Kriech- und Oxidationsbeanspruchung. Zusammensetzung, Temperatur und Anwendung werden im Projekt festgelegt.', aplicacoes: ['Strahlrohre', 'Reformer-Öfen', 'Petrochemie'] },
      { descricao: 'Hitzebeständiger Gussstahl für Ofen- und Wärmebehandlungsbauteile je nach Temperatur, Atmosphäre und mechanischer Beanspruchung.', aplicacoes: ['Ofenrollen', 'Wärmebehandlungsroste'] },
      { descricao: 'Hitzebeständiger Gussstahl für Anwendungen mit Bewertung von Kriechen, Oxidation und Maßhaltigkeit in thermischen Zyklen.', aplicacoes: ['Katalytische Reformierung', 'Wasserstoffproduktion', 'Cracken'] },
      { descricao: 'Edelstahlzylinder mit Wolframzusatz, projektspezifisch für Verschleißanwendungen in Bergbau und Mineralaufbereitung entwickelt.', aplicacoes: ['Bergbau', 'Brechen', 'Klassiersiebe'] },
    ],
    ligaTradName: ['AISI 304 / 304L', 'AISI 316 / 316L', 'AISI 310', 'AISI 420', 'ASTM A297 Gr. HK', 'ASTM A297 Gr. HH', 'ASTM A297 Gr. HP', 'Edelstahl-Wolfram-Zylinder'],
  },
  it: {
    eyebrow: 'Le nostre leghe',
    titleA: 'Acciai inossidabili e leghe resistenti al calore,',
    titleAccent: 'selezionati per applicazione',
    lead: 'Lavoriamo con un\'ampia famiglia di leghe di acciaio inossidabile (serie 300, 400 e gradi ASTM A297) per rispondere alle condizioni definite in ciascun progetto. La nostra ingegneria valuta la lega in base a temperatura, ambiente chimico e regime di lavoro dell\'impianto.',
    destaqueLabel: 'In evidenza',
    ctaEyebrow: 'Consulenza di ingegneria',
    ctaTitle: 'Non sai quale lega scegliere per la tua applicazione?',
    ctaLead: 'La nostra ingegneria analizza temperatura di lavoro, ambiente chimico, cicli termici e storico operativo per orientare la scelta del materiale nel progetto.',
    ctaEng: 'Parla con un ingegnere', ctaCat: 'Vedi catalogo prodotti',
    familias: { serie_300: 'Serie 300', serie_400: 'Serie 400', astm_a297: 'ASTM A297 (refrattaria)', especial: 'Soluzione speciale' },
    ligas: [
      { descricao: 'Acciaio inossidabile austenitico con cromo (18%) e nichel (8%). Buona resistenza alla corrosione in ambienti atmosferici, chimici leggeri e alimentari. Versione L con basso contenuto di carbonio per migliore saldabilità.', aplicacoes: ['Industria chimica', 'Alimentare', 'Strutture'] },
      { descricao: 'L\'aggiunta di molibdeno migliora la resistenza alla corrosione in ambienti con cloruri. L\'idoneità viene valutata per ciascun progetto.', aplicacoes: ['Petrolchimica', 'Navale', 'Chimica aggressiva'] },
      { descricao: 'Acciaio inossidabile austenitico con elevati tenori di cromo e nichel, usato in applicazioni che richiedono valutazione di ossidazione e scorrimento a caldo.', aplicacoes: ['Forni di trattamento termico', 'Componenti siderurgici'] },
      { descricao: 'Acciaio inossidabile martensitico temprabile, impiegato per componenti che richiedono durezza, resistenza meccanica e moderata resistenza alla corrosione.', aplicacoes: ['Boccole', 'Componenti di precisione', 'Coltelleria industriale'] },
      { descricao: 'Grado fuso resistente al calore, per componenti soggetti a scorrimento e ossidazione. Composizione, temperatura e applicazione sono confermate nel progetto.', aplicacoes: ['Tubi radianti', 'Forni di reforming', 'Petrolchimica'] },
      { descricao: 'Grado fuso resistente al calore, per componenti di forni e trattamento termico secondo temperatura, atmosfera e sollecitazione meccanica.', aplicacoes: ['Rulli da forno', 'Griglie di trattamento termico'] },
      { descricao: 'Grado fuso resistente al calore, per applicazioni con valutazione di scorrimento, ossidazione e stabilità dimensionale in cicli termici.', aplicacoes: ['Reforming catalitico', 'Produzione di idrogeno', 'Cracking'] },
      { descricao: 'Cilindri in acciaio inossidabile con aggiunta di tungsteno, sviluppati su progetto per applicazioni ad abrasione in mineraria e trattamento di minerali.', aplicacoes: ['Mineraria', 'Frantumazione', 'Vagli di classificazione'] },
    ],
    ligaTradName: ['AISI 304 / 304L', 'AISI 316 / 316L', 'AISI 310', 'AISI 420', 'ASTM A297 Gr. HK', 'ASTM A297 Gr. HH', 'ASTM A297 Gr. HP', 'Cilindro Inox + Tungsteno'],
  },
};

export default function LigasContent() {
  const { language } = useLanguage();
  const c = dict[language] ?? dict.pt;

  const ligas = ligasMeta.map((m, i) => ({
    ...m,
    nome: c.ligaTradName[i] ?? m.nome,
    descricao: c.ligas[i].descricao,
    aplicacoes: c.ligas[i].aplicacoes,
  }));

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Ligas trabalhadas pela Aceros',
    itemListElement: ligas.map((liga, index) => ({
      '@type': 'ListItem', position: index + 1, name: liga.nome, description: liga.descricao,
    })),
  };

  return (
    <div className="pt-24 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">{c.eyebrow}</p>
          <h1 className="font-headline text-3xl md:text-5xl font-bold uppercase leading-tight mb-6">
            {c.titleA} <span className="text-accent">{c.titleAccent}</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">{c.lead}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {ligas.map((liga, i) => {
              const Icone = familiaIcones[liga.familia];
              return (
                <article key={liga.nome} className={`relative bg-gradient-to-br ${familiaCores[liga.familia]} border-2 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all animate-fade-in-up ${liga.destaque ? 'ring-2 ring-accent/40' : ''}`} style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}>
                  {liga.destaque && <span className="absolute -top-3 right-6 bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">{c.destaqueLabel}</span>}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm flex-shrink-0"><Icone className="h-6 w-6 text-slate-900" /></div>
                    <div>
                      <div className="text-xs text-slate-600 font-semibold uppercase tracking-wide mb-1">{c.familias[liga.familia]}</div>
                      <h3 className="font-headline text-xl md:text-2xl font-bold text-slate-900">{liga.nome}</h3>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">{liga.descricao}</p>
                  <div className="flex flex-wrap gap-2">
                    {liga.aplicacoes.map((app) => (
                      <span key={app} className="bg-white/60 border border-slate-300 rounded-full px-3 py-1 text-xs font-semibold text-slate-700">{app}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1 text-accent text-sm font-semibold uppercase tracking-wide mb-4">
            <Waves className="h-4 w-4" />
            {c.ctaEyebrow}
          </div>
          <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">{c.ctaTitle}</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">{c.ctaLead}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="h-auto bg-[#b54b00] px-10 py-7 text-lg text-white hover:bg-[#963e00]"><Link href="/contato">{c.ctaEng}</Link></Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-10 py-7 h-auto"><Link href="/produtos">{c.ctaCat}</Link></Button>
          </div>
        </div>
      </section>

      <WhatsAppCta />
    </div>
  );
}
