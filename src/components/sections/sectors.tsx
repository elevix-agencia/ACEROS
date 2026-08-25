'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { useLanguage } from '@/hooks/use-language';
import { sectorsData } from '@/lib/expertise-data';

const sectorImages: Record<string, string> = {
  mineracao: '/images/imgur/ol4Y0fr.jpeg',
  tratamento_termico: '/images/imgur/Scmi8ys.jpeg',
  naval: '/images/imgur/5AsJUxh.png',
  siderurgia: '/images/imgur/XJLum1h.png',
  guseira: '/images/aceros/generated/guseira-hero-v3.png',
  oleo_e_gas: '/images/imgur/I9Ufb7K.jpeg',
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
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center animate-fade-in-up">
          <h2 className="mb-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            {t.sectors.title}
          </h2>
          <p className="text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            {t.sectors.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, index) => sector.id === 'certificados' ? (
            <article
              key={sector.id}
              className="group flex min-h-[460px] flex-col overflow-hidden rounded-lg bg-[#f1f1f3] text-slate-950 shadow-[0_18px_45px_rgba(85,35,6,.18)] animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.08}s`, animationFillMode: 'both' }}
            >
              <div className="relative h-[220px] shrink-0 overflow-hidden border-b-[3px] border-accent bg-white">
                <Image
                  src={sectorImages[sector.id]}
                  alt="Certificado ISO 9001:2015 da Aceros"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-4 transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col items-center px-6 py-7 text-center lg:px-7">
                <h3 className="mb-4 font-headline text-xl font-bold leading-tight text-slate-950">
                  Certificados
                </h3>
                <p className="mb-7 text-sm leading-6 text-slate-500">
                  Explore mais nossos certificados e selos de qualidade.
                </p>
                <Link
                  href={getLink(sector.id)}
                  className="mt-auto inline-flex w-full items-center justify-center gap-3 border border-accent px-5 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                >
                  Saiba mais
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ) : (
            <article
              key={sector.id}
              className="group flex min-h-[460px] flex-col overflow-hidden rounded-lg bg-[#f1f1f3] text-slate-950 shadow-[0_18px_45px_rgba(85,35,6,.18)] animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.08}s`, animationFillMode: 'both' }}
            >
              <div className="relative h-[220px] shrink-0 overflow-hidden border-b-[3px] border-accent">
                <Image
                  src={sectorImages[sector.id]}
                  alt={sector.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col items-center px-6 py-7 text-center lg:px-7">
                <h3 className="mb-4 font-headline text-xl font-bold leading-tight text-slate-950">
                  {sector.title}
                </h3>
                <p className="mb-7 text-sm leading-6 text-slate-500">
                  {sector.cardDescription}
                </p>
                <Link
                  href={getLink(sector.id)}
                  className="mt-auto inline-flex w-full items-center justify-center gap-3 border border-accent px-5 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                >
                  Saiba mais
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
