'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero-section relative isolate min-h-[calc(100svh-88px)] overflow-hidden bg-[#07121e] text-white">
      <Image
        src="/images/aceros/drive/tubos-polidos.webp"
        alt="Tubos de aço polidos na estrutura industrial da Aceros"
        fill
        sizes="100vw"
        className="object-cover object-[62%_center] opacity-75"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#07121e_0%,rgba(7,18,30,.94)_42%,rgba(7,18,30,.42)_72%,rgba(7,18,30,.12)_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute left-0 top-0 h-full w-1 bg-[#e46f1f]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-88px)] max-w-[1440px] items-center px-5 py-20 lg:px-10">
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,720px)_1fr] lg:items-end">
            <motion.div
                className="max-w-[820px]"
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
                  className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#f09a5c]"
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                >
                  <span className="h-px w-10 bg-[#e46f1f]" />
                  Engenharia metalúrgica desde 2015
                </motion.div>
                <motion.h1
                  className="max-w-[760px] font-headline text-[clamp(2.5rem,4.8vw,5.3rem)] font-bold uppercase leading-[0.94] tracking-[-0.05em] text-white"
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } }
                  }}
                >
                    {t.hero.main_title}
                </motion.h1>
                <motion.p 
                  className="mt-8 max-w-2xl border-l border-white/25 pl-5 text-base leading-7 text-slate-200 sm:text-lg"
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
                    <Button asChild size="lg" className="h-14 rounded-none bg-[#e46f1f] px-8 text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#bf5412] sm:h-16">
                        <Link href="/contato" className="flex items-center gap-3">
                          {t.hero.contact_us}
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="h-14 rounded-none border-white/35 bg-white/5 px-8 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-[#07121e] sm:h-16">
                        <Link href="/produtos">{t.hero.learn_more}</Link>
                    </Button>
                </motion.div>
            </motion.div>

          <motion.aside
            className="hidden border border-white/15 bg-[#07121e]/70 p-7 backdrop-blur-md lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Controle de ponta a ponta</p>
            <ul className="space-y-4 text-sm text-slate-100">
              {['ISO 9001:2015 DQS', 'Ligas ASTM A297 — HK, HH e HP', 'Projeto por desenho técnico', 'Rastreabilidade e laudo metalúrgico'].map((item) => (
                <li key={item} className="flex items-start gap-3 border-t border-white/10 pt-4 first:border-0 first:pt-0">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#e46f1f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 hidden border-t border-white/15 bg-[#07121e]/70 backdrop-blur-md lg:block">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">
          {[
            ['1999', 'Grupo Daniela'],
            ['2015', 'Divisão Aceros'],
            ['03', 'Países atendidos'],
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
