import type { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog Técnico | Aceros Centrifugados',
  description: 'Artigos técnicos sobre fundição centrifugada, ligas ASTM A297, Sink Rolls, buchas e aplicações industriais.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  return <BlogClient />;
}
