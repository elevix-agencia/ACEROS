'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

type Article = { slug: string; title: string; category: string };

// Titulos fixos (em vez de importar blog-posts) para nao levar o texto completo
// dos artigos para o JavaScript das paginas de produto e da home.
const articles: Record<string, Article> = {
  orcamento: {
    slug: 'como-pedir-orcamento-peca-sob-medida-aco-inox',
    title: 'Como pedir orçamento de peça sob medida em aço inox: o que enviar',
    category: 'Engenharia',
  },
  sinkRollLiga: {
    slug: 'sink-roll-como-escolher-liga',
    title: 'Sink Roll: como escolher a liga para linhas de galvanização',
    category: 'Aplicações',
  },
  astm: {
    slug: 'astm-a297-hk-hh-hp-diferencas',
    title: 'ASTM A297: diferenças entre as classes HH, HK e HP',
    category: 'Ligas',
  },
  fundicao: {
    slug: 'fundicao-centrifugada-vantagens',
    title: 'Fundição centrifugada: vantagens e quando utilizar o processo',
    category: 'Processo',
  },
  bucha: {
    slug: 'bucha-bimetalica-sink-roll',
    title: 'Buchas para Sink Roll: critérios de especificação e fabricação',
    category: 'Aplicações',
  },
  ligas: {
    slug: 'ligas-304-316-310-alta-temperatura',
    title: 'Ligas 304, 316 e 310 para alta temperatura: qual escolher',
    category: 'Ligas',
  },
};

const byPath: Record<string, Array<keyof typeof articles>> = {
  '/tubos-de-aco-inox': ['ligas', 'fundicao', 'orcamento'],
  '/bucha-de-aco-inox': ['bucha', 'ligas', 'orcamento'],
  '/rolos-de-forno': ['astm', 'ligas', 'orcamento'],
  '/sink-rolls': ['sinkRollLiga', 'bucha', 'orcamento'],
  '/fundicao-centrifugada': ['fundicao', 'astm', 'orcamento'],
};

const home: Array<keyof typeof articles> = ['orcamento', 'sinkRollLiga', 'fundicao'];

function ArticleCards({ keys }: { keys: Array<keyof typeof articles> }) {
  return (
    <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {keys.map((key) => {
        const article = articles[key];
        return (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group flex h-full flex-col border border-slate-200 bg-white p-5 transition hover:border-[#ef7b21] hover:shadow-lg"
          >
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{article.category}</span>
            <h3 className="mt-2 font-headline text-lg font-bold text-[#07121e] group-hover:text-[#ef7b21]">{article.title}</h3>
            <span className="mt-auto inline-flex items-center pt-4 text-sm font-bold text-[#ef7b21]">
              Ler artigo <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

// Bloco "Artigos relacionados" das paginas de produto. O blog existe so em portugues.
export function RelatedArticles({ currentPath }: { currentPath: string }) {
  const { language } = useLanguage();
  const keys = byPath[currentPath];
  if (language !== 'pt' || !keys) return null;

  return (
    <section aria-labelledby="related-articles-title" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ef7b21]">Artigos relacionados</p>
        <h2 id="related-articles-title" className="mt-3 font-headline text-3xl font-bold text-[#07121e]">Guias técnicos da Aceros</h2>
        <ArticleCards keys={keys} />
      </div>
    </section>
  );
}

// Bloco "Artigos do blog" da home.
export function LatestArticles() {
  const { language } = useLanguage();
  if (language !== 'pt') return null;

  return (
    <section aria-labelledby="latest-articles-title" className="bg-[#f3f4f6] py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ef7b21]">Blog</p>
            <h2 id="latest-articles-title" className="mt-3 font-headline text-3xl font-bold text-[#07121e]">Guias técnicos sobre aços centrifugados</h2>
          </div>
          <Link href="/blog" className="inline-flex items-center text-sm font-bold text-[#ef7b21]">
            Ver todos os artigos <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <ArticleCards keys={home} />
      </div>
    </section>
  );
}
