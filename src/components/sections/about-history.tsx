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
    title: 'Engenharia própria em aços inoxidáveis centrifugados',
    intro:
      'A Aceros é fabricante brasileira de peças em aços inoxidáveis centrifugados. Cada componente sai da fábrica com engenharia própria, controle metalúrgico e rastreabilidade documentada.',
    milestones: [
      {
        year: '2015',
        title: 'Fundação da Aceros',
        description:
          'A Aceros nasce em Itaquaquecetuba/SP como fabricante especializada em aços inoxidáveis centrifugados, com foco em ligas ASTM A297 e produção sob medida por desenho técnico.',
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
    title: 'In-house engineering in centrifugally cast stainless steels',
    intro:
      'Aceros is a Brazilian manufacturer of centrifugally cast stainless steel parts. Every component leaves the factory with in-house engineering, metallurgical control and documented traceability.',
    milestones: [
      {
        year: '2015',
        title: 'Aceros founded',
        description:
          'Aceros is founded in Itaquaquecetuba/SP as a specialist manufacturer of centrifugally cast stainless steels, focused on ASTM A297 alloys and custom production from technical drawings.',
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
    title: 'Ingeniería propia en aceros inoxidables centrifugados',
    intro:
      'Aceros es fabricante brasileña de piezas en aceros inoxidables centrifugados. Cada componente sale de la fábrica con ingeniería propia, control metalúrgico y trazabilidad documentada.',
    milestones: [
      {
        year: '2015',
        title: 'Fundación de Aceros',
        description:
          'Aceros nace en Itaquaquecetuba/SP como fabricante especializada en aceros inoxidables centrifugados, con foco en aleaciones ASTM A297 y producción a medida por diseño técnico.',
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
    title: 'Eigene Konstruktion für schleudergegossene Edelstähle',
    intro:
      'Aceros ist ein brasilianischer Hersteller von schleudergegossenen Edelstahl-Bauteilen. Jedes Bauteil verlässt das Werk mit eigener Konstruktion, metallurgischer Kontrolle und dokumentierter Rückverfolgbarkeit.',
    milestones: [
      {
        year: '2015',
        title: 'Gründung von Aceros',
        description:
          'Aceros wird in Itaquaquecetuba/SP als spezialisierter Hersteller schleudergegossener Edelstähle gegründet, mit Fokus auf ASTM A297-Legierungen und Fertigung nach technischer Zeichnung.',
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
    title: 'Ingegneria interna in acciai inossidabili centrifugati',
    intro:
      'Aceros è produttore brasiliano di pezzi in acciai inossidabili centrifugati. Ogni componente lascia la fabbrica con ingegneria interna, controllo metallurgico e tracciabilità documentata.',
    milestones: [
      {
        year: '2015',
        title: 'Fondazione di Aceros',
        description:
          'Aceros viene fondata a Itaquaquecetuba/SP come produttore specializzato di acciai inossidabili centrifugati, focalizzato sulle leghe ASTM A297 e sulla produzione su misura da disegno tecnico.',
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
