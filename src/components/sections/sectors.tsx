'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { useLanguage } from '@/hooks/use-language';
import { sectorsData } from '@/lib/expertise-data';

const sectorImages: Record<string, string> = {
  mineracao: '/images/imgur/GwRqaf7.jpeg',
  tratamento_termico: '/images/aceros/drive/processo-termico.webp',
  naval: '/images/imgur/jNzhuvc.png',
  siderurgia: '/images/aceros/drive/tubos-polidos.webp',
  guseira: '/images/imgur/wrq7jcu.jpeg',
  oleo_e_gas: '/images/aceros/drive/tubos-usinados.webp',
  engenharia: '/images/aceros/drive/eixo-industrial.webp',
  certificados: '/images/imgur/JNxzPUr.png',
};

export function Sectors() {
  const { t } = useLanguage();

  if (!t?.expertise_sectors) return null;

  const sectors = sectorsData(t);
  const getLink = (id: string) => {
    if (id === 'engenharia') return '/engenharia';
    if (id === 'certificados') return '/qualificacao';
    return `/atuacao/${id}`;
  };

  return (
    <section id="sectors" className="bg-[#07121e] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="mb-12 max-w-3xl animate-fade-in-up">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Soluções por segmento
          </p>
          <h2 className="mb-5 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            {t.sectors.title}
          </h2>
          <p className="text-lg leading-8 text-slate-300 sm:text-xl">
            {t.sectors.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, index) => (
            <article
              key={sector.id}
              className="group relative min-h-[430px] overflow-hidden bg-slate-950 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.08}s`, animationFillMode: 'both' }}
            >
              <Image
                src={sectorImages[sector.id]}
                alt={sector.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07121e] via-[#07121e]/65 to-[#07121e]/5" />
              <div className="absolute inset-x-0 bottom-0 flex min-h-[62%] flex-col justify-end p-6 lg:p-7">
                <span className="mb-4 text-[11px] font-bold tracking-[0.2em] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-3 font-headline text-2xl font-bold leading-tight text-white">
                  {sector.title}
                </h3>
                <p className="mb-6 text-sm leading-6 text-slate-300">
                  {sector.cardDescription}
                </p>
                <Link
                  href={getLink(sector.id)}
                  className="inline-flex w-fit items-center gap-2 border-b border-accent pb-2 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:text-accent"
                >
                  {t.hero.learn_more}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
