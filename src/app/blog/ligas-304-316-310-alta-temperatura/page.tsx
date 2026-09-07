import BlogPostPage, { generateMetadata as getPostMetadata } from '../[slug]/page';

const params = Promise.resolve({ slug: 'ligas-304-316-310-alta-temperatura' });

export function generateMetadata() {
  return getPostMetadata({ params });
}

export default function Page() {
  return BlogPostPage({ params });
}
