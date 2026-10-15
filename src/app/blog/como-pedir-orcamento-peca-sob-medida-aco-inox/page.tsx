import BlogPostPage, { generateMetadata as getPostMetadata } from '../[slug]/page';

const params = Promise.resolve({ slug: 'como-pedir-orcamento-peca-sob-medida-aco-inox' });

export function generateMetadata() {
  return getPostMetadata({ params });
}

export default function Page() {
  return BlogPostPage({ params });
}
