import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts, formatBlogDate } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Blog Técnico | Aceros Centrifugados',
  description:
    'Artigos técnicos sobre fundição centrifugada, ligas ASTM A297, Sink Rolls, buchas e aplicações industriais em siderurgia e tratamento térmico.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog Técnico Aceros | Centrifugação, Ligas e Aplicações Industriais',
    description:
      'Guia técnico para engenheiros de projeto e compras industriais. Conteúdo sobre ligas resistentes ao calor e à abrasão.',
    url: '/blog',
  },
};

const categoriaCores: Record<string, string> = {
  Processo: 'bg-primary/10 text-primary border-primary/30',
  Ligas: 'bg-orange-100 text-orange-800 border-orange-300',
  'Aplicações': 'bg-orange-100 text-orange-800 border-orange-300',
  Engenharia: 'bg-slate-100 text-slate-800 border-slate-300',
};

export default function BlogPage() {
  const [destaque, ...outrosPosts] = blogPosts;
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Artigos técnicos da Aceros',
    itemListElement: blogPosts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: post.titulo,
      url: `https://aceros.com.br/blog/${post.slug}`,
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 text-white sm:py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
            Conteúdo Técnico
          </p>
          <h1 className="mb-6 font-headline text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
            Blog Aceros:{' '}
            <span className="text-accent">Engenharia em Aços Centrifugados</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Guias técnicos para engenheiros de projeto, compras e manutenção industrial.
            Ligas, processos, aplicações e controle de qualidade na fabricação industrial.
          </p>
        </div>
      </section>

      {/* Post em destaque */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Link
            href={`/blog/${destaque.slug}`}
            className="group block max-w-6xl mx-auto bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden animate-fade-in-up"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] md:aspect-auto bg-primary overflow-hidden">
                <Image
                  src={destaque.imagem}
                  alt={destaque.imagemAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${categoriaCores[destaque.categoria]}`}>
                    {destaque.categoria}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#a94700]">
                  Em destaque
                </div>
                <h3 className="mb-4 font-headline text-2xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-[#a94700] md:text-3xl">
                  {destaque.titulo}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {destaque.descricao}
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {destaque.tempoLeitura}
                  </span>
                  <span>·</span>
                  <time dateTime={destaque.dataPublicacao}>{formatBlogDate(destaque.dataPublicacao)}</time>
                </div>
                <span className="inline-flex items-center gap-2 font-semibold text-[#a94700]">
                  Ler artigo completo
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Outros posts */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-slate-900">
                Mais artigos técnicos
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {outrosPosts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'both' }}
                >
                  <div className="relative aspect-[16/10] bg-primary overflow-hidden">
                    <Image
                      src={post.imagem}
                      alt={post.imagemAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`inline-block text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${categoriaCores[post.categoria]}`}>
                        {post.categoria}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="mb-3 font-headline text-lg font-bold leading-tight text-slate-900 transition-colors group-hover:text-[#a94700]">
                      {post.titulo}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {post.descricao}
                    </p>
                    <div className="flex items-center justify-between gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.tempoLeitura}
                      </span>
                      <time dateTime={post.dataPublicacao}>{formatBlogDate(post.dataPublicacao)}</time>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">
            Precisa de assessoria técnica no seu projeto?
          </h3>
          <p className="text-slate-300 mb-8">
            Nossa equipe técnica avalia o desenho e os requisitos da aplicação para orientar os próximos passos e preparar o orçamento.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-lg bg-[#b54b00] px-7 py-4 text-base font-bold text-white transition-all hover:bg-[#963e00] sm:px-10 sm:text-lg"
          >
            Falar com a equipe técnica
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
