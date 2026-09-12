'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { siteExtras } from '@/lib/i18n/site-extras';

const heroSlides = [
  {
    src: '/images/aceros/generated/hero-tubos-centrifugados-v2.webp',
    alt: 'Tubos de aço centrifugado usinados e polidos pela Aceros',
    label: 'Tubos centrifugados',
  },
  {
    src: '/images/aceros/generated/hero-buchas-centrifugadas-v3.webp',
    alt: 'Buchas de aço inox centrifugado usinadas pela Aceros',
    label: 'Buchas centrifugadas',
  },
  {
    src: '/images/aceros/generated/hero-tubos-polidos-v2.webp',
    alt: 'Tubos de aço inox usinados e polidos pela Aceros',
    label: 'Tubos polidos',
  },
];

export function Hero() {
  const { language, t } = useLanguage();
  const copy = siteExtras[language].hero;
  const translatedSlides = heroSlides.map((slide, index) => ({ ...slide, ...copy.slides[index] }));
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % translatedSlides.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="hero-section relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-[#07121e] text-white">
      <Image
        key={translatedSlides[activeSlide].src}
        src={translatedSlides[activeSlide].src}
        alt={translatedSlides[activeSlide].alt}
        fill
        sizes="100vw"
        className="object-cover object-center opacity-70"
        priority={activeSlide === 0}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#07121e_0%,rgba(7,18,30,.94)_42%,rgba(7,18,30,.42)_72%,rgba(7,18,30,.12)_100%)]" />
      <div className="absolute left-0 top-0 h-full w-1 bg-accent" />

      <div className="container relative z-10 mx-auto flex min-h-[calc(100svh-80px)] items-center px-4 py-10 sm:py-16 lg:pb-28 lg:pt-20">
        <div className="w-full max-w-[920px]">
            <div className="max-w-[920px]">
                <div className="mb-5 flex animate-fade-in-up items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-accent sm:mb-7 sm:text-[11px] sm:tracking-[0.24em]">
                  <span className="h-px w-10 bg-accent" />
                  {copy.eyebrow}
                </div>
                <h1 className="max-w-[900px] animate-fade-in-up text-balance font-headline text-[2rem] font-semibold uppercase leading-[1.08] tracking-[-0.025em] text-white sm:text-[clamp(2.25rem,3.35vw,3.65rem)]">
                    {t.hero.main_title}
                </h1>
                <p className="mt-5 max-w-[700px] animate-fade-in-up border-l border-accent/80 pl-4 text-[15px] leading-6 text-slate-200 sm:mt-7 sm:pl-5 sm:text-lg sm:leading-8">
                  {t.hero.subtitle}
                </p>
                <div className="mt-7 flex animate-fade-in-up flex-col gap-3 sm:mt-10 sm:flex-row">
                    <Button asChild size="lg" className="h-14 rounded-none bg-accent px-8 text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#cf5f11] sm:h-16">
                        <Link href="/contato" className="flex items-center gap-3">
                          {t.hero.contact_us}
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="h-14 rounded-none border-white/35 bg-white/5 px-8 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-[#07121e] sm:h-16">
                        <Link href="/produtos">{t.hero.learn_more}</Link>
                    </Button>
                </div>
                <div className="mt-5 flex items-center gap-3 sm:mt-7" aria-label={copy.selectorLabel}>
                  {translatedSlides.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      aria-label={`${copy.showSlide} ${slide.label}`}
                      aria-current={index === activeSlide ? 'true' : undefined}
                      className={`h-1 transition-all duration-300 ${index === activeSlide ? 'w-12 bg-accent' : 'w-7 bg-white/40 hover:bg-white/70'}`}
                    />
                  ))}
                  <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300">
                    {translatedSlides[activeSlide].label}
                  </span>
                </div>
            </div>

        </div>
      </div>

      <div className="relative z-20 hidden border-t border-white/15 bg-[#07121e] lg:block">
        <div className="container mx-auto grid grid-cols-2 px-4 lg:grid-cols-4">
          {[
            ['1999', copy.stats[0]],
            ['2015', copy.stats[1]],
    ['3', copy.stats[2]],
            ['100%', copy.stats[3]],
          ].map(([value, label]) => (
            <div key={label} className="border-r border-white/10 px-5 py-4 last:border-0 lg:px-8">
              <span className="mr-3 font-headline text-xl font-bold text-white">{value}</span>
              <span className="text-[10px] uppercase tracking-[0.13em] text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <Link href="#sobre" aria-label={copy.contentLabel} className="absolute bottom-24 right-5 z-20 hidden h-12 w-12 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white hover:text-[#07121e] sm:flex lg:right-10">
        <ArrowDown className="h-4 w-4" />
      </Link>
    </section>
  );
}
