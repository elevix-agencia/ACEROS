import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { blogPosts, formatBlogDate } from '@/lib/blog-posts';

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Post não encontrado' };
  }

  return {
    title: post.titulo,
    description: post.descricao,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.titulo,
      description: post.descricao,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.dataPublicacao,
      images: [{ url: post.imagem, alt: post.imagemAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.titulo,
      description: post.descricao,
      images: [post.imagem],
    },
  };
}

const categoriaCores: Record<string, string> = {
  Processo: 'bg-primary/10 text-primary border-primary/30',
  Ligas: 'bg-orange-100 text-orange-800 border-orange-300',
  'Aplicações': 'bg-orange-100 text-orange-800 border-orange-300',
  Engenharia: 'bg-slate-100 text-slate-800 border-slate-300',
};

const solutionByPost: Record<string, { href: string; label: string }> = {
  'sink-roll-como-escolher-liga': { href: '/sink-rolls', label: 'Conhecer Sink Rolls e componentes' },
  'astm-a297-hk-hh-hp-diferencas': { href: '/rolos-de-forno', label: 'Conhecer os rolos de forno' },
  'fundicao-centrifugada-vantagens': { href: '/fundicao-centrifugada', label: 'Conhecer a fundição centrifugada' },
  'bucha-bimetalica-sink-roll': { href: '/bucha-de-aco-inox', label: 'Conhecer as buchas para Sink Roll' },
  'ligas-304-316-310-alta-temperatura': { href: '/tubos-de-aco-inox', label: 'Conhecer os tubos centrifugados' },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const outrosPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const relatedSolution = solutionByPost[slug] || { href: '/produtos', label: 'Conhecer os produtos Aceros' };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.titulo,
    description: post.descricao,
    image: `https://aceros.com.br${post.imagem}`,
    datePublished: post.dataPublicacao,
    dateModified: post.dataPublicacao,
    mainEntityOfPage: `https://aceros.com.br/blog/${post.slug}`,
    author: {
      '@type': 'Organization',
      name: 'Aceros Centrifugados LTDA',
      url: 'https://aceros.com.br',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Aceros Centrifugados LTDA',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aceros.com.br/images/imgur/OBD0nJ0.png',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="bg-background py-12 sm:py-16">
        {/* Hero do post */}
        <header className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#a94700] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a94700]"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o blog
          </Link>

          <div className="mb-6">
            <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${categoriaCores[post.categoria]}`}>
              {post.categoria}
            </span>
          </div>

          <h1 className="mb-6 font-headline text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {post.titulo}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            {post.descricao}
          </p>

          <div className="flex items-center gap-4 text-sm text-slate-500 mb-8 pb-8 border-b">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.tempoLeitura} de leitura
            </span>
            <span>·</span>
            <time dateTime={post.dataPublicacao}>{formatBlogDate(post.dataPublicacao)}</time>
          </div>
        </header>

        {/* Imagem principal */}
        <div className="container mx-auto px-4 max-w-4xl mb-12">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={post.imagem}
              alt={post.imagemAlt}
              fill
              sizes="(max-width: 900px) 100vw, 900px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Conteúdo do post */}
        <div className="container mx-auto px-4 max-w-3xl">
          <div
            className="blog-content text-base leading-relaxed text-slate-700 sm:text-lg [&_a]:text-[#a94700] hover:[&_a]:underline [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:font-headline [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 md:[&_h2]:text-3xl [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-headline [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-800 md:[&_h3]:text-2xl [&_li]:my-2 [&_p]:mb-6 [&_p]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-slate-900 [&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-6"
            dangerouslySetInnerHTML={{ __html: post.conteudo }}
          />
        </div>

        {/* CTA no fim do post */}
        <div className="container mx-auto px-4 max-w-3xl mt-16">
          <div className="bg-primary text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="font-headline text-2xl font-bold mb-4">
              Precisa aplicar esse conhecimento no seu projeto?
            </h3>
            <p className="text-slate-300 mb-6">
              Nossa equipe técnica avalia o desenho e os requisitos da aplicação para orientar os próximos passos do projeto.
            </p>
            <Link
              href={relatedSolution.href}
              className="inline-flex items-center gap-2 rounded-lg bg-[#b54b00] px-6 py-3 text-base font-bold text-white transition-all hover:bg-[#963e00] sm:px-8 sm:text-lg"
            >
              {relatedSolution.label}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </article>

      {/* Outros posts */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            Continue lendo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outrosPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[16/10] bg-primary overflow-hidden">
                  <Image
                    src={p.imagem}
                    alt={p.imagemAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all"
                  />
                </div>
                <div className="p-5">
                  <span className={`inline-block text-xs font-bold uppercase tracking-wider px-2 py-1 rounded border ${categoriaCores[p.categoria]} mb-3`}>
                    {p.categoria}
                  </span>
                  <h3 className="font-headline text-base font-bold leading-tight text-slate-900 transition-colors group-hover:text-[#a94700]">
                    {p.titulo}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
