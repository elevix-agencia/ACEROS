import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock, Share2 } from 'lucide-react';
import { blogPosts } from '@/lib/blog-posts';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
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
  Processo: 'bg-blue-100 text-blue-800 border-blue-300',
  Ligas: 'bg-orange-100 text-orange-800 border-orange-300',
  'Aplicações': 'bg-green-100 text-green-800 border-green-300',
  Engenharia: 'bg-slate-100 text-slate-800 border-slate-300',
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const outrosPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.titulo,
    description: post.descricao,
    image: `https://aceros.com.br${post.imagem}`,
    datePublished: post.dataPublicacao,
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

      <article className="pt-24 pb-20 bg-background">
        {/* Hero do post */}
        <header className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o blog
          </Link>

          <div className="mb-6">
            <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${categoriaCores[post.categoria]}`}>
              {post.categoria}
            </span>
          </div>

          <h1 className="font-headline text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
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
            <span>{new Date(post.dataPublicacao).toLocaleDateString('pt-BR')}</span>
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
            className="blog-content text-slate-700 text-lg leading-relaxed [&_p]:mb-6 [&_p]:leading-relaxed [&_h2]:font-headline [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-headline [&_h3]:text-xl md:[&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-slate-800 [&_h3]:mt-8 [&_h3]:mb-3 [&_strong]:text-slate-900 [&_strong]:font-semibold [&_ul]:my-6 [&_ul]:pl-6 [&_ul]:list-disc [&_li]:my-2 [&_a]:text-accent hover:[&_a]:underline"
            dangerouslySetInnerHTML={{ __html: post.conteudo }}
          />
        </div>

        {/* CTA no fim do post */}
        <div className="container mx-auto px-4 max-w-3xl mt-16">
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <h3 className="font-headline text-2xl font-bold mb-4">
              Precisa aplicar esse conhecimento no seu projeto?
            </h3>
            <p className="text-slate-300 mb-6">
              Nossa engenharia analisa desenho, especifica a liga ideal e retorna orçamento sem compromisso.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-3 rounded-lg transition-all"
            >
              Falar com engenheiro
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
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
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
                  <h3 className="font-headline text-base font-bold text-slate-900 leading-tight group-hover:text-accent transition-colors">
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
