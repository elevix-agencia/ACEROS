import BlogPostPage, { generateMetadata as getPostMetadata } from '../[slug]/page';

const params = Promise.resolve({ slug: 'como-escolher-fornecedor-pecas-aco-inox-sob-medida' });

export function generateMetadata() {
  return getPostMetadata({ params });
}

export default function Page() {
  return BlogPostPage({ params });
}
