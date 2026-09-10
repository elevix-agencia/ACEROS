import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const solutions = [
  { href: '/tubos-de-aco-inox', title: 'Tubos centrifugados', description: 'Tubos mecânicos fabricados conforme desenho técnico.' },
  { href: '/bucha-de-aco-inox', title: 'Buchas de aço inox', description: 'Buchas centrifugadas e usinadas para aplicações industriais.' },
  { href: '/rolos-de-forno', title: 'Rolos de forno', description: 'Furnace rolls para fornos contínuos e tratamento térmico.' },
  { href: '/sink-rolls', title: 'Sink Rolls', description: 'Rolos e componentes para linhas de galvanização.' },
  { href: '/fundicao-centrifugada', title: 'Fundição centrifugada', description: 'Processo integrado de centrifugação, usinagem e inspeção.' },
];

export function RelatedSolutions({ currentPath }: { currentPath: string }) {
  const related = solutions.filter((solution) => solution.href !== currentPath);

  return (
    <section aria-labelledby="related-solutions-title" className="bg-[#f3f4f6] py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ef7b21]">Soluções relacionadas</p>
        <h2 id="related-solutions-title" className="mt-3 font-headline text-3xl font-bold text-[#07121e]">
          Outras capacidades da Aceros
        </h2>
        <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((solution) => (
            <Link key={solution.href} href={solution.href} className="group flex h-full flex-col border border-slate-200 bg-white p-5 transition hover:border-[#ef7b21] hover:shadow-lg">
              <h3 className="min-h-[3rem] font-headline text-lg font-bold text-[#07121e] group-hover:text-[#ef7b21]">{solution.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{solution.description}</p>
              <span className="mt-auto inline-flex items-center pt-4 text-sm font-bold text-[#ef7b21]">Conhecer solução <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
