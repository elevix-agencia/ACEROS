'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { useLanguage } from '@/hooks/use-language';
import { sectorsData } from '@/lib/expertise-data';
import { siteExtras } from '@/lib/i18n/site-extras';

const sectorImages: Record<string, string> = {
  mineracao: '/images/imgur/GwRqaf7.jpeg',
  tratamento_termico: '/images/imgur/1LtOK33.jpeg',
  naval: '/images/imgur/5AsJUxh.png',
  siderurgia: '/images/imgur/XJLum1h.png',
  guseira: '/images/aceros/generated/guseira-hero-v3.png',
  oleo_e_gas: '/images/imgur/I9Ufb7K.jpeg',
  engenharia: '/images/imgur/bPgdSyM.png',
  certificados: '/images/aceros/generated/certificado-iso-2028.png',
};

export function Sectors() {
  const { language, t } = useLanguage();
  const extra = siteExtras[language];

  if (!t?.expertise_sectors) return null;

  const sectors = sectorsData(t);
  const getLink = (id: string) => {
    if (id === 'engenharia') return '/engenharia';
    if (id === 'certificados') return '/qualificacao';
    return `/atuacao/${id}`;
  };

  return (
    <section id="sectors" className="bg-[#ef7b21] py-14 text-white sm:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center animate-fade-in-up sm:mb-14">
          <h2 className="mb-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            {t.sectors.title}
          </h2>
          <p className="text-base leading-7 text-slate-950/90 sm:text-lg sm:leading-8">
            {t.sectors.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {sectors.map((sector, index) => sector.id === 'certificados' ? (
            <article
              key={sector.id}
              className="group flex min-h-[360px] flex-col overflow-hidden rounded-lg bg-[#f1f1f3] text-slate-950 shadow-[0_18px_45px_rgba(85,35,6,.18)] animate-fade-in-up sm:min-h-[460px]"
              style={{ animationDelay: `${0.1 + index * 0.08}s`, animationFillMode: 'both' }}
            >
              <div className="relative h-[132px] shrink-0 overflow-hidden border-b-[3px] border-accent bg-white sm:h-[220px]">
                <Image
                  src={sectorImages[sector.id]}
                  alt={extra.sectors.certificateAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-4 transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col items-center px-3 py-4 text-center sm:px-6 sm:py-7 lg:px-7">
                <h3 className="mb-2 font-headline text-base font-bold leading-tight text-slate-950 sm:mb-4 sm:text-xl">
                  {extra.sectors.certificates}
                </h3>
                <p className="mb-4 text-xs leading-5 text-slate-500 sm:mb-7 sm:text-sm sm:leading-6">
                  {extra.sectors.certificatesDescription}
                </p>
                <Link
                  href={getLink(sector.id)}
                  aria-label={`${extra.common.learnMore}: ${extra.sectors.certificates}`}
                  className="mt-auto inline-flex w-full items-center justify-center gap-2 border border-[#b54b00] px-2 py-3 text-sm font-semibold text-[#9a3f00] transition-colors hover:bg-[#b54b00] hover:text-white sm:gap-3 sm:px-5"
                >
                  {extra.common.learnMore}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ) : (
            <article
              key={sector.id}
              className="group flex min-h-[360px] flex-col overflow-hidden rounded-lg bg-[#f1f1f3] text-slate-950 shadow-[0_18px_45px_rgba(85,35,6,.18)] animate-fade-in-up sm:min-h-[460px]"
              style={{ animationDelay: `${0.1 + index * 0.08}s`, animationFillMode: 'both' }}
            >
              <div className="relative h-[132px] shrink-0 overflow-hidden border-b-[3px] border-accent sm:h-[220px]">
                <Image
                  src={sectorImages[sector.id]}
                  alt={sector.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col items-center px-3 py-4 text-center sm:px-6 sm:py-7 lg:px-7">
                <h3 className="mb-2 font-headline text-base font-bold leading-tight text-slate-950 sm:mb-4 sm:text-xl">
                  {sector.title}
                </h3>
                <p className="mb-4 text-xs leading-5 text-slate-500 sm:mb-7 sm:text-sm sm:leading-6">
                  {sector.cardDescription}
                </p>
                <Link
                  href={getLink(sector.id)}
                  aria-label={`${extra.common.learnMore}: ${sector.title}`}
                  className="mt-auto inline-flex w-full items-center justify-center gap-2 border border-[#b54b00] px-2 py-3 text-sm font-semibold text-[#9a3f00] transition-colors hover:bg-[#b54b00] hover:text-white sm:gap-3 sm:px-5"
                >
                  {extra.common.learnMore}
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
