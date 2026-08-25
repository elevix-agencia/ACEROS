'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { useLanguage } from '@/hooks/use-language';
import { sectorsData } from '@/lib/expertise-data';

const sectorImages: Record<string, string> = {
  mineracao: '/images/aceros/generated/hero-eixo-industrial-v2.webp',
  tratamento_termico: '/images/aceros/generated/tratamento-termico-v2.webp',
  naval: '/images/imgur/jNzhuvc.png',
  siderurgia: '/images/aceros/generated/blog-sink-roll-instalado-v2.webp',
  guseira: '/images/aceros/generated/industria-guseira-v2.webp',
  oleo_e_gas: '/images/aceros/generated/hero-tubos-centrifugados-v2.webp',
  engenharia: '/images/imgur/bPgdSyM.png',
  certificados: '/images/aceros/generated/certificado-iso-2028.png',
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
    <section id="sectors" className="bg-[#ef7b21] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="mb-12 max-w-3xl animate-fade-in-up">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Soluções por segmento
          </p>
          <h2 className="mb-5 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            {t.sectors.title}
          </h2>
          <p className="text-lg leading-8 text-white/90 sm:text-xl">
            {t.sectors.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, index) => sector.id === 'certificados' ? (
            <Link
              key={sector.id}
              href={getLink(sector.id)}
              aria-label="Ver certificados da Aceros"
              className="group relative min-h-[430px] overflow-hidden bg-white p-3 shadow-[0_18px_45px_rgba(85,35,6,.2)] animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.08}s`, animationFillMode: 'both' }}
            >
              <Image
                src={sectorImages[sector.id]}
                alt="Certificado ISO 9001:2015 da Aceros"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain p-3 transition duration-500 group-hover:scale-[1.02]"
              />
            </Link>
          ) : (
            <article
              key={sector.id}
              className="group relative min-h-[430px] overflow-hidden bg-[#07121e] shadow-[0_18px_45px_rgba(85,35,6,.2)] animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.08}s`, animationFillMode: 'both' }}
            >
              <Image
                src={sectorImages[sector.id]}
                alt={sector.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
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
