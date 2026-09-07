import BlogPostPage, { generateMetadata as getPostMetadata } from '../[slug]/page';

const params = Promise.resolve({ slug: 'astm-a297-hk-hh-hp-diferencas' });

export function generateMetadata() {
  return getPostMetadata({ params });
}

export default function Page() {
  return BlogPostPage({ params });
}
