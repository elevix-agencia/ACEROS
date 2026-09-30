'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { blogUi, formatLocalizedBlogDate, getBlogPosts } from '@/lib/i18n/blog-copy';

const categoriaCores: Record<string, string> = {
  Processo: 'bg-primary/10 text-primary border-primary/30',
  Ligas: 'bg-orange-100 text-orange-800 border-orange-300',
  'Aplicações': 'bg-orange-100 text-orange-800 border-orange-300',
  Engenharia: 'bg-slate-100 text-slate-800 border-slate-300',
};

const solutionRoutes = ['/sink-rolls', '/rolos-de-forno', '/fundicao-centrifugada', '/bucha-de-aco-inox', '/tubos-de-aco-inox'];

export default function BlogArticleClient({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const copy = blogUi[language];
  const blogPosts = getBlogPosts(language);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return null;

  const outrosPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const postIndex = blogPosts.findIndex(p => p.slug === slug);
  const relatedSolution = { href: solutionRoutes[postIndex] || '/produtos', label: copy.solutions[postIndex] || copy.contactButton };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.titulo,
    description: post.descricao,
    image: `https://aceros-elevix.netlify.app${post.imagem}`,
    datePublished: post.dataPublicacao,
    dateModified: post.dataPublicacao,
    mainEntityOfPage: `https://aceros-elevix.netlify.app/blog/${post.slug}`,
    author: {
      '@type': 'Organization',
      name: 'Aceros Centrifugados LTDA',
      url: 'https://aceros-elevix.netlify.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Aceros Centrifugados LTDA',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aceros-elevix.netlify.app/images/imgur/OBD0nJ0.png',
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
            {copy.back}
          </Link>

          <div className="mb-6">
            <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${categoriaCores[post.categoria]}`}>
              {copy.categories[post.categoria]}
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
              {post.tempoLeitura} {copy.reading}
            </span>
            <span>·</span>
            <time dateTime={post.dataPublicacao}>{formatLocalizedBlogDate(post.dataPublicacao, language)}</time>
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
              {copy.applyTitle}
            </h3>
            <p className="text-slate-300 mb-6">
              {copy.applyLead}
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
            {copy.continue}
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
                    {copy.categories[p.categoria]}
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
