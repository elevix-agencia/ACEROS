
'use client';

import Link from 'next/link';
import { sectorsData } from '@/lib/expertise-data';
import { useLanguage } from '@/hooks/use-language';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Sectors() {
  const { t } = useLanguage();

  if (!t || !t.expertise_sectors) {
    return null; 
  }

  const sectors = sectorsData(t);
  const getLink = (id: string) => {
    const slug = id;
    if (slug === 'engenharia') {
      return `/${slug}`;
    }
    if (slug === 'certificados') {
      return '/qualificacao';
    }
    return `/atuacao/${slug}`;
  };

  const getImageUrl = (id: string) => {
    switch (id) {
      case 'mineracao':
        return '/images/aceros/drive/eixo-industrial.webp';
      case 'naval':
        return '/images/imgur/jNzhuvc.png';
      case 'siderurgia':
        return '/images/aceros/drive/tubos-polidos.webp';
      case 'oleo_e_gas':
        return '/images/aceros/drive/tubos-usinados.webp';
      case 'guseira':
        return '/images/aceros/drive/fabrica-usinagem.webp';
      case 'tratamento_termico':
        return '/images/aceros/drive/processo-termico.webp';
      case 'engenharia':
        return '/images/aceros/drive/fabrica-usinagem.webp';
      case 'certificados':
        return '/images/aceros/drive/tubos-usinados.webp';
      default:
        return '';
    }
  };


  return (
    <section
      id="sectors"
      className="bg-[#07121e] py-20 text-white sm:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 grid gap-6 border-b border-white/15 pb-10 text-left animate-fade-in-up lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 className="max-w-xl font-headline text-4xl font-bold uppercase tracking-[-0.04em] sm:text-6xl">
            {t.sectors.title}
          </h2>
          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg lg:justify-self-end">
            {t.sectors.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, index) => {
            const imageUrl = getImageUrl(sector.id);
            return (
            <article key={sector.id} className="group relative min-h-[430px] overflow-hidden bg-[#0c1b2a] animate-fade-in-up"
              style={{
                animationDelay: `${0.2 + index * 0.1}s`,
                animationFillMode: 'both',
              }}>
              <Image src={imageUrl} alt={sector.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06101a] via-[#07121e]/60 to-transparent" />
              {sector.id === 'certificados' && (
                <div className="absolute right-5 top-5 border border-white/30 bg-[#07121e]/80 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">ISO 9001:2015 · DQS</div>
              )}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f09a5c]">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="font-headline text-2xl font-bold text-white">{sector.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">{sector.cardDescription}</p>
                <Link href={getLink(sector.id)} className="mt-6 inline-flex items-center gap-2 border-b border-[#e46f1f] pb-1 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:text-[#f09a5c]">
                  {t.hero.learn_more} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          )})}
        </div>
      </div>
    </section>
  );
}
