'use client';

import { useLanguage } from '@/hooks/use-language';

type HistoryContent = {
  eyebrow: string;
  title: string;
  intro: string;
  milestones: Array<{ year: string; title: string; description: string }>;
  closing: string;
};

const content: Record<string, HistoryContent> = {
  pt: {
    eyebrow: 'Nossa história',
    title: 'De 1999 para o mundo, com engenharia própria',
    intro:
      'A Aceros é a divisão de aços inoxidáveis do Grupo Metalúrgica Daniela, referência em componentes industriais desde 1999. Cada peça sai da fábrica com engenharia própria, controle metalúrgico e rastreabilidade documentada.',
    milestones: [
      {
        year: '1999',
        title: 'Fundação do Grupo Metalúrgica Daniela',
        description:
          'O Grupo nasce em Itaquaquecetuba/SP para fornecer peças fundidas e usinadas a clientes das indústrias siderúrgica, naval e de mineração.',
      },
      {
        year: '2015',
        title: 'Criação da Aceros',
        description:
          'A Aceros é estruturada como a divisão de aços inoxidáveis centrifugados do Grupo, com foco em ligas ASTM A297 e produção sob medida por desenho técnico.',
      },
      {
        year: 'Hoje',
        title: 'Engenharia certificada e exportação internacional',
        description:
          'Certificação ISO 9001:2015 pela DQS (válida até 2028), laboratório próprio, projetos que atendem Brasil, Portugal, EUA, Itália e outros mercados.',
      },
    ],
    closing:
      'Cada fornecimento pode incluir rastreabilidade, laudo metalúrgico e ensaios definidos conforme o projeto do cliente.',
  },
  en: {
    eyebrow: 'Our history',
    title: 'Since 1999, engineering our own path',
    intro:
      'Aceros is the stainless steel division of the Metalúrgica Daniela Group, a reference in industrial components since 1999. Every part leaves the factory with in-house engineering, metallurgical control and documented traceability.',
    milestones: [
      {
        year: '1999',
        title: 'Metalúrgica Daniela Group founded',
        description:
          'The Group is born in Itaquaquecetuba/SP to supply cast and machined parts to steelmaking, naval and mining customers.',
      },
      {
        year: '2015',
        title: 'Aceros founded',
        description:
          'Aceros is structured as the Group’s centrifugally cast stainless steel division, focused on ASTM A297 alloys and custom production from technical drawings.',
      },
      {
        year: 'Today',
        title: 'Certified engineering and international shipping',
        description:
          'ISO 9001:2015 DQS certification (valid through 2028), in-house laboratory, projects serving Brazil, Portugal, the U.S., Italy and other markets.',
      },
    ],
    closing:
      'Each order may include traceability, metallurgical reports and tests defined by the customer’s project.',
  },
  es: {
    eyebrow: 'Nuestra historia',
    title: 'Desde 1999, con ingeniería propia',
    intro:
      'Aceros es la división de aceros inoxidables del Grupo Metalúrgica Daniela, referencia en componentes industriales desde 1999. Cada pieza sale de la fábrica con ingeniería propia, control metalúrgico y trazabilidad documentada.',
    milestones: [
      {
        year: '1999',
        title: 'Fundación del Grupo Metalúrgica Daniela',
        description:
          'El Grupo nace en Itaquaquecetuba/SP para suministrar piezas fundidas y mecanizadas a clientes de la siderurgia, naval y minería.',
      },
      {
        year: '2015',
        title: 'Creación de Aceros',
        description:
          'Aceros se estructura como la división de aceros inoxidables centrifugados del Grupo, con foco en aleaciones ASTM A297 y producción a medida por diseño técnico.',
      },
      {
        year: 'Hoy',
        title: 'Ingeniería certificada y exportación internacional',
        description:
          'Certificación ISO 9001:2015 por la DQS (válida hasta 2028), laboratorio propio, proyectos que atienden a Brasil, Portugal, EE. UU., Italia y otros mercados.',
      },
    ],
    closing:
      'Cada suministro puede incluir trazabilidad, informe metalúrgico y ensayos definidos según el proyecto del cliente.',
  },
  de: {
    eyebrow: 'Unsere Geschichte',
    title: 'Seit 1999 mit eigener Ingenieurskompetenz',
    intro:
      'Aceros ist die Edelstahlsparte der Metalúrgica Daniela Gruppe, seit 1999 eine Referenz für Industriekomponenten. Jedes Bauteil verlässt das Werk mit eigener Konstruktion, metallurgischer Kontrolle und dokumentierter Rückverfolgbarkeit.',
    milestones: [
      {
        year: '1999',
        title: 'Gründung der Metalúrgica Daniela Gruppe',
        description:
          'Die Gruppe entsteht in Itaquaquecetuba/SP, um Guss- und Bearbeitungsteile für Kunden aus Stahlindustrie, Schifffahrt und Bergbau zu fertigen.',
      },
      {
        year: '2015',
        title: 'Gründung von Aceros',
        description:
          'Aceros wird als Sparte für schleudergegossenen Edelstahl der Gruppe strukturiert, mit Fokus auf ASTM A297-Legierungen und Fertigung nach technischer Zeichnung.',
      },
      {
        year: 'Heute',
        title: 'Zertifizierte Konstruktion und internationaler Versand',
        description:
          'ISO 9001:2015 DQS-Zertifizierung (gültig bis 2028), eigenes Labor, Projekte für Brasilien, Portugal, USA, Italien und weitere Märkte.',
      },
    ],
    closing:
      'Jede Lieferung kann Rückverfolgbarkeit, metallurgisches Prüfprotokoll und die im Kundenprojekt definierten Prüfungen enthalten.',
  },
  it: {
    eyebrow: 'La nostra storia',
    title: 'Dal 1999, con ingegneria interna',
    intro:
      'Aceros è la divisione acciai inossidabili del Gruppo Metalúrgica Daniela, punto di riferimento per componenti industriali dal 1999. Ogni pezzo lascia la fabbrica con ingegneria interna, controllo metallurgico e tracciabilità documentata.',
    milestones: [
      {
        year: '1999',
        title: 'Fondazione del Gruppo Metalúrgica Daniela',
        description:
          'Il Gruppo nasce a Itaquaquecetuba/SP per fornire pezzi fusi e lavorati a clienti della siderurgia, nautica e miniere.',
      },
      {
        year: '2015',
        title: 'Nascita di Aceros',
        description:
          'Aceros viene strutturata come divisione acciai inossidabili centrifugati del Gruppo, focalizzata sulle leghe ASTM A297 e sulla produzione su misura da disegno tecnico.',
      },
      {
        year: 'Oggi',
        title: 'Ingegneria certificata e spedizioni internazionali',
        description:
          'Certificazione ISO 9001:2015 DQS (valida fino al 2028), laboratorio interno, progetti che servono Brasile, Portogallo, Stati Uniti, Italia e altri mercati.',
      },
    ],
    closing:
      'Ogni fornitura può includere tracciabilità, rapporto metallurgico e prove definite dal progetto del cliente.',
  },
};

export function AboutHistory() {
  const { language } = useLanguage();
  const c = content[language] ?? content.pt;

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
            {c.eyebrow}
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
            {c.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">{c.intro}</p>
        </div>

        <ol className="relative mx-auto max-w-3xl border-l-2 border-accent/30 pl-8 sm:pl-12">
          {c.milestones.map((m, i) => (
            <li key={m.year + i} className="mb-10 last:mb-0 relative">
              <span className="absolute -left-[42px] sm:-left-[54px] flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-headline text-xs font-bold shadow-md">
                {m.year}
              </span>
              <h3 className="font-headline text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                {m.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{m.description}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12 text-center text-slate-500 italic max-w-2xl mx-auto text-sm sm:text-base">
          {c.closing}
        </p>
      </div>
    </section>
  );
}
