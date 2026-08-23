'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';

export function ClientLogos() {
  const { t } = useLanguage();

  return (
    <section
      className="relative w-full py-20 sm:py-32 text-white"
    >
      <Image
        src="/images/imgur/9Zqa9hs.png"
        alt="Fundo de uma usina siderúrgica moderna em operação"
        fill
        className="object-cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in-up">
          <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-shadow-lg">
            {t.client_logos?.title || 'Qualidade que Impulsiona Líderes'}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-white/90 md:text-xl text-shadow">
            {t.client_logos?.subtitle ||
              'Temos orgulho de fornecer soluções de alta performance para os líderes da indústria do aço.'}
          </p>
        </div>
      </div>
    </section>
  );
}
