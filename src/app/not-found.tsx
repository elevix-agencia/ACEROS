'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Home, Search, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage, type Language } from '@/hooks/use-language';

type Copy = {
  eyebrow: string;
  title: string;
  lead: string;
  suggestionsTitle: string;
  suggestions: Array<{ href: string; label: string; desc: string }>;
  homeBtn: string;
  contactBtn: string;
  productsBtn: string;
};

const dict: Record<Language, Copy> = {
  pt: {
    eyebrow: 'Erro 404',
    title: 'Esta peça não está no nosso catálogo',
    lead: 'A página que você procurou saiu de linha, mudou de lugar ou nunca existiu. Enquanto isso, veja o que a Aceros fabrica sob medida.',
    suggestionsTitle: 'Talvez você esteja procurando por:',
    suggestions: [
      { href: '/produtos', label: 'Produtos', desc: 'Catálogo completo de peças centrifugadas.' },
      { href: '/atuacao/mineracao', label: 'Setores atendidos', desc: 'Mineração, siderurgia, naval, guseira e mais.' },
      { href: '/ligas', label: 'Ligas de trabalho', desc: 'Série 300/400 e graus ASTM A297.' },
      { href: '/qualificacao', label: 'Qualidade e laboratório', desc: 'ISO 9001:2015, ensaios e rastreabilidade.' },
    ],
    homeBtn: 'Voltar para a home',
    contactBtn: 'Falar com engenharia',
    productsBtn: 'Ver produtos',
  },
  en: {
    eyebrow: 'Error 404',
    title: 'This part is not in our catalogue',
    lead: 'The page you were looking for was discontinued, moved or never existed. In the meantime, see what Aceros manufactures to order.',
    suggestionsTitle: 'You may be looking for:',
    suggestions: [
      { href: '/produtos', label: 'Products', desc: 'Full catalogue of centrifugally cast parts.' },
      { href: '/atuacao/mineracao', label: 'Sectors served', desc: 'Mining, steelmaking, naval, pig iron and more.' },
      { href: '/ligas', label: 'Working alloys', desc: 'Series 300/400 and ASTM A297 grades.' },
      { href: '/qualificacao', label: 'Quality and laboratory', desc: 'ISO 9001:2015, testing and traceability.' },
    ],
    homeBtn: 'Back to home',
    contactBtn: 'Talk to engineering',
    productsBtn: 'View products',
  },
  es: {
    eyebrow: 'Error 404',
    title: 'Esta pieza no está en nuestro catálogo',
    lead: 'La página que buscaba fue descontinuada, cambió de lugar o nunca existió. Mientras tanto, vea lo que Aceros fabrica a medida.',
    suggestionsTitle: 'Puede que esté buscando:',
    suggestions: [
      { href: '/produtos', label: 'Productos', desc: 'Catálogo completo de piezas centrifugadas.' },
      { href: '/atuacao/mineracao', label: 'Sectores atendidos', desc: 'Minería, siderurgia, naval, arrabio y más.' },
      { href: '/ligas', label: 'Aleaciones', desc: 'Serie 300/400 y grados ASTM A297.' },
      { href: '/qualificacao', label: 'Calidad y laboratorio', desc: 'ISO 9001:2015, ensayos y trazabilidad.' },
    ],
    homeBtn: 'Volver al inicio',
    contactBtn: 'Hablar con ingeniería',
    productsBtn: 'Ver productos',
  },
  de: {
    eyebrow: 'Fehler 404',
    title: 'Dieses Bauteil steht nicht in unserem Katalog',
    lead: 'Die gesuchte Seite wurde entfernt, verschoben oder existierte nie. Sehen Sie in der Zwischenzeit, was Aceros nach Maß fertigt.',
    suggestionsTitle: 'Vielleicht suchen Sie:',
    suggestions: [
      { href: '/produtos', label: 'Produkte', desc: 'Vollständiger Katalog der Schleudergussteile.' },
      { href: '/atuacao/mineracao', label: 'Branchen', desc: 'Bergbau, Stahl, Marine, Roheisen und mehr.' },
      { href: '/ligas', label: 'Legierungen', desc: 'Serie 300/400 und ASTM A297.' },
      { href: '/qualificacao', label: 'Qualität und Labor', desc: 'ISO 9001:2015, Prüfungen und Rückverfolgbarkeit.' },
    ],
    homeBtn: 'Zur Startseite',
    contactBtn: 'Mit der Konstruktion sprechen',
    productsBtn: 'Produkte ansehen',
  },
  it: {
    eyebrow: 'Errore 404',
    title: 'Questo pezzo non è nel nostro catalogo',
    lead: 'La pagina cercata è stata rimossa, spostata o non è mai esistita. Nel frattempo, guarda cosa Aceros produce su misura.',
    suggestionsTitle: 'Forse stai cercando:',
    suggestions: [
      { href: '/produtos', label: 'Prodotti', desc: 'Catalogo completo dei pezzi centrifugati.' },
      { href: '/atuacao/mineracao', label: 'Settori serviti', desc: 'Mineraria, siderurgia, navale, ghisa e altro.' },
      { href: '/ligas', label: 'Leghe di lavoro', desc: 'Serie 300/400 e gradi ASTM A297.' },
      { href: '/qualificacao', label: 'Qualità e laboratorio', desc: 'ISO 9001:2015, prove e tracciabilità.' },
    ],
    homeBtn: 'Torna alla home',
    contactBtn: 'Parla con l\'ingegneria',
    productsBtn: 'Vedi prodotti',
  },
};

export default function NotFound() {
  const { language } = useLanguage();
  const c = dict[language] ?? dict.pt;

  return (
    <main className="relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-[#07121e] text-white">
      <Image
        src="/images/aceros/tubos/tubo-aco-inox-bruto-aceros-05.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-25"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,30,.85)_0%,rgba(7,18,30,.95)_60%,#07121e_100%)]" />
      <div className="absolute left-0 top-0 h-full w-1 bg-accent" />

      <div className="container relative z-10 mx-auto flex min-h-[calc(100svh-80px)] flex-col items-center justify-center px-4 py-16 sm:py-24 text-center">
        <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-accent sm:text-sm">
          <span className="h-px w-10 bg-accent" />
          {c.eyebrow}
          <span className="h-px w-10 bg-accent" />
        </p>

        <p className="font-headline text-[6rem] font-bold leading-none tracking-tight text-accent/40 sm:text-[9rem]" aria-hidden="true">
          404
        </p>

        <h1 className="mt-3 max-w-3xl font-headline text-3xl font-semibold uppercase leading-tight tracking-tight sm:text-5xl">
          {c.title}
        </h1>

        <p className="mt-6 max-w-2xl border-l-2 border-accent/70 pl-5 text-left text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          {c.lead}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-14 rounded-none bg-accent px-8 text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#cf5f11] sm:h-16">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" /> {c.homeBtn}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 rounded-none border-white/35 bg-white/5 px-8 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-[#07121e] sm:h-16">
            <Link href="/produtos" className="flex items-center gap-2">
              <Search className="h-4 w-4" /> {c.productsBtn}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 rounded-none border-white/35 bg-white/5 px-8 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-[#07121e] sm:h-16">
            <Link href="/contato" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> {c.contactBtn}
            </Link>
          </Button>
        </div>

        <div className="mt-16 w-full max-w-4xl border-t border-white/10 pt-10">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-accent">
            {c.suggestionsTitle}
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {c.suggestions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-start gap-4 border border-white/10 bg-white/[0.04] p-5 text-left transition-colors hover:border-accent/70 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div>
                  <p className="font-headline text-lg font-bold text-white">{s.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{s.desc}</p>
                </div>
                <ArrowRight className="ml-auto mt-1 h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
