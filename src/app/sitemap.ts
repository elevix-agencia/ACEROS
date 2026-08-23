import type { MetadataRoute } from 'next';

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

  return [...staticRoutes, ...atuacaoRoutes].map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
