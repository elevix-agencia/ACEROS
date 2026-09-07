import BlogPostPage, { generateMetadata as getPostMetadata } from '../[slug]/page';

const params = Promise.resolve({ slug: 'sink-roll-como-escolher-liga' });

export function generateMetadata() {
  return getPostMetadata({ params });
}

export default function Page() {
  return BlogPostPage({ params });
}
