'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

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
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="hero-section relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-[#07121e] text-white">
      {heroSlides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-1000 ${index === activeSlide ? 'opacity-70' : 'opacity-0'}`}
          priority={index === 0}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#07121e_0%,rgba(7,18,30,.94)_42%,rgba(7,18,30,.42)_72%,rgba(7,18,30,.12)_100%)]" />
      <div className="absolute left-0 top-0 h-full w-1 bg-accent" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-80px)] max-w-[1440px] items-center px-5 py-16 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="w-full max-w-[920px]">
            <motion.div
                className="max-w-[920px]"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.3,
                        delayChildren: 0.2,
                      }
                    }
                }}
            >
                <motion.div
                  className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-accent"
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                >
                  <span className="h-px w-10 bg-accent" />
                  Engenharia metalúrgica desde 2015
                </motion.div>
                <motion.h1
                  className="max-w-[900px] text-balance font-headline text-[clamp(2.25rem,3.35vw,3.65rem)] font-semibold uppercase leading-[1.08] tracking-[-0.025em] text-white"
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
                  }}
                >
                    {t.hero.main_title}
                </motion.h1>
                <motion.p 
                  className="mt-7 max-w-[700px] border-l border-accent/80 pl-5 text-base leading-7 text-slate-200 sm:text-lg sm:leading-8"
                   variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                >
                  {t.hero.subtitle}
                </motion.p>
                <motion.div 
                  className="mt-10 flex flex-col gap-3 sm:flex-row"
                   variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                >
                    <Button asChild size="lg" className="h-14 rounded-none bg-accent px-8 text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#cf5f11] sm:h-16">
                        <Link href="/contato" className="flex items-center gap-3">
                          {t.hero.contact_us}
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="h-14 rounded-none border-white/35 bg-white/5 px-8 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-[#07121e] sm:h-16">
                        <Link href="/produtos">{t.hero.learn_more}</Link>
                    </Button>
                </motion.div>
                <motion.div
                  className="mt-7 flex items-center gap-3"
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  aria-label="Selecionar imagem principal"
                >
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Exibir ${slide.label}`}
                      aria-current={index === activeSlide ? 'true' : undefined}
                      className={`h-1 transition-all duration-300 ${index === activeSlide ? 'w-12 bg-accent' : 'w-7 bg-white/40 hover:bg-white/70'}`}
                    />
                  ))}
                  <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300">
                    {heroSlides[activeSlide].label}
                  </span>
                </motion.div>
            </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 hidden border-t border-white/15 bg-[#07121e]/70 backdrop-blur-md lg:block">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">
          {[
            ['1999', 'Grupo Daniela'],
            ['2015', 'Divisão Aceros'],
            ['+3', 'Países atendidos'],
            ['100%', 'Sob medida'],
          ].map(([value, label]) => (
            <div key={label} className="border-r border-white/10 px-5 py-4 last:border-0 lg:px-8">
              <span className="mr-3 font-headline text-xl font-bold text-white">{value}</span>
              <span className="text-[10px] uppercase tracking-[0.13em] text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <Link href="#sobre" aria-label="Ir para o conteúdo" className="absolute bottom-24 right-5 z-20 hidden h-12 w-12 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white hover:text-[#07121e] sm:flex lg:right-10">
        <ArrowDown className="h-4 w-4" />
      </Link>
    </section>
  );
}
