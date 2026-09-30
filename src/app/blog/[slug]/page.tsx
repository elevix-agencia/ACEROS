import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-posts';
import BlogArticleClient from './BlogArticleClient';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return { title: 'Post não encontrado' };
  return {
    title: post.titulo,
    description: post.descricao,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.titulo, description: post.descricao, url: `/blog/${post.slug}`, type: 'article', publishedTime: post.dataPublicacao, images: [{ url: post.imagem, alt: post.imagemAlt }] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  if (!blogPosts.some(post => post.slug === slug)) notFound();
  return <BlogArticleClient slug={slug} />;
}
