import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts';

const siteUrl = 'https://aceros.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    priority: number;
  }> = [
    { path: '/', changeFrequency: 'monthly', priority: 1.0 },
    { path: '/sobre', changeFrequency: 'yearly', priority: 0.7 },
    { path: '/produtos', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/tubos-de-aco-inox', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/bucha-de-aco-inox', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/qualificacao', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/engenharia', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/certificados', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/ligas', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/contato', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/politica-de-privacidade', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  ];

  const atuacaoSlugs = [
    'mineracao',
    'naval',
    'siderurgia',
    'oleo_e_gas',
    'guseira',
    'tratamento_termico',
  ];

  const atuacaoRoutes = atuacaoSlugs.map((slug) => ({
    path: `/atuacao/${slug}`,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    lastModified: new Date(post.dataPublicacao),
  }));

  return [
    ...staticRoutes.map((r) => ({
      url: `${siteUrl}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...atuacaoRoutes.map((r) => ({
      url: `${siteUrl}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...blogRoutes.map((r) => ({
      url: `${siteUrl}${r.path}`,
      lastModified: r.lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
  ];
}
