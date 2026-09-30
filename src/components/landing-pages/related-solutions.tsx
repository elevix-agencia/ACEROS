'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage, type Language } from '@/hooks/use-language';

const solutions = [
  { href: '/tubos-de-aco-inox', key: 'tubes' },
  { href: '/bucha-de-aco-inox', key: 'bushings' },
  { href: '/rolos-de-forno', key: 'furnaceRolls' },
  { href: '/sink-rolls', key: 'sinkRolls' },
  { href: '/fundicao-centrifugada', key: 'casting' },
] as const;

type SolutionKey = (typeof solutions)[number]['key'];
type SolutionCopy = { title: string; description: string };

const copy: Record<Language, { eyebrow: string; heading: string; action: string; solutions: Record<SolutionKey, SolutionCopy> }> = {
  pt: {
    eyebrow: 'Soluções relacionadas', heading: 'Outras capacidades da Aceros', action: 'Conhecer solução',
    solutions: {
      tubes: { title: 'Tubos centrifugados', description: 'Tubos mecânicos fabricados conforme desenho técnico.' },
      bushings: { title: 'Buchas de aço inox', description: 'Buchas centrifugadas e usinadas para aplicações industriais.' },
      furnaceRolls: { title: 'Rolos de forno', description: 'Rolos para fornos contínuos e tratamento térmico.' },
      sinkRolls: { title: 'Sink Rolls', description: 'Rolos e componentes para linhas de galvanização.' },
      casting: { title: 'Fundição centrifugada', description: 'Processo integrado de centrifugação, usinagem e inspeção.' },
    },
  },
  en: {
    eyebrow: 'Related solutions', heading: 'More Aceros capabilities', action: 'Explore solution',
    solutions: {
      tubes: { title: 'Centrifugally cast tubes', description: 'Mechanical tubes manufactured to technical drawings.' },
      bushings: { title: 'Stainless steel bushings', description: 'Centrifugally cast and machined bushings for industrial applications.' },
      furnaceRolls: { title: 'Furnace rolls', description: 'Rolls for continuous furnaces and heat treatment.' },
      sinkRolls: { title: 'Sink rolls', description: 'Rolls and components for galvanizing lines.' },
      casting: { title: 'Centrifugal casting', description: 'Integrated casting, machining and inspection process.' },
    },
  },
  es: {
    eyebrow: 'Soluciones relacionadas', heading: 'Otras capacidades de Aceros', action: 'Conocer la solución',
    solutions: {
      tubes: { title: 'Tubos centrifugados', description: 'Tubos mecánicos fabricados según plano técnico.' },
      bushings: { title: 'Bujes de acero inoxidable', description: 'Bujes centrifugados y mecanizados para aplicaciones industriales.' },
      furnaceRolls: { title: 'Rodillos de horno', description: 'Rodillos para hornos continuos y tratamiento térmico.' },
      sinkRolls: { title: 'Sink rolls', description: 'Rodillos y componentes para líneas de galvanización.' },
      casting: { title: 'Fundición centrífuga', description: 'Proceso integrado de fundición, mecanizado e inspección.' },
    },
  },
  de: {
    eyebrow: 'Verwandte Lösungen', heading: 'Weitere Kompetenzen von Aceros', action: 'Lösung ansehen',
    solutions: {
      tubes: { title: 'Schleudergegossene Rohre', description: 'Mechanische Rohre nach technischer Zeichnung gefertigt.' },
      bushings: { title: 'Edelstahlbuchsen', description: 'Schleudergegossene und bearbeitete Buchsen für Industrieanwendungen.' },
      furnaceRolls: { title: 'Ofenrollen', description: 'Rollen für Durchlauföfen und Wärmebehandlung.' },
      sinkRolls: { title: 'Sink Rolls', description: 'Rollen und Komponenten für Verzinkungslinien.' },
      casting: { title: 'Schleuderguss', description: 'Integrierter Prozess aus Gießen, Bearbeitung und Prüfung.' },
    },
  },
  it: {
    eyebrow: 'Soluzioni correlate', heading: 'Altre capacità di Aceros', action: 'Scopri la soluzione',
    solutions: {
      tubes: { title: 'Tubi centrifugati', description: 'Tubi meccanici realizzati su disegno tecnico.' },
      bushings: { title: 'Boccole in acciaio inox', description: 'Boccole centrifugate e lavorate per applicazioni industriali.' },
      furnaceRolls: { title: 'Rulli per forni', description: 'Rulli per forni continui e trattamento termico.' },
      sinkRolls: { title: 'Sink rolls', description: 'Rulli e componenti per linee di zincatura.' },
      casting: { title: 'Colata centrifuga', description: 'Processo integrato di colata, lavorazione e controllo.' },
    },
  },
};

export function RelatedSolutions({ currentPath }: { currentPath: string }) {
  const { language } = useLanguage();
  const c = copy[language];
  const related = solutions.filter((solution) => solution.href !== currentPath);

  return (
    <section aria-labelledby="related-solutions-title" className="bg-[#f3f4f6] py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ef7b21]">{c.eyebrow}</p>
        <h2 id="related-solutions-title" className="mt-3 font-headline text-3xl font-bold text-[#07121e]">{c.heading}</h2>
        <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((solution) => (
            <Link key={solution.href} href={solution.href} className="group flex h-full flex-col border border-slate-200 bg-white p-5 transition hover:border-[#ef7b21] hover:shadow-lg">
              <h3 className="min-h-[3rem] font-headline text-lg font-bold text-[#07121e] group-hover:text-[#ef7b21]">{c.solutions[solution.key].title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{c.solutions[solution.key].description}</p>
              <span className="mt-auto inline-flex items-center pt-4 text-sm font-bold text-[#ef7b21]">{c.action} <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
