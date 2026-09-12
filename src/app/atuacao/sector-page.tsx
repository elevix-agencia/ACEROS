import type { Metadata } from 'next';

import { ExpertiseDetailsClient } from '@/app/atuacao/[slug]/ExpertiseDetailsClient';
import pt from '@/i18n/pt.json';
import { sectorsData } from '@/lib/expertise-data';
import { notFound } from 'next/navigation';

export function sectorMetadata(slug: string): Metadata {
  const sector = sectorsData(pt).find((item) => item.id === slug);

  if (!sector) {
    return { title: 'Setor não encontrado', robots: { index: false, follow: false } };
  }

  const title = `${sector.title} — Aços Centrifugados para o Setor`;
  const description =
    sector.description ||
    `Peças em aços inoxidáveis centrifugados fabricadas sob medida para o setor ${sector.title.toLowerCase()}.`;

  return {
    title,
    description,
    alternates: { canonical: `/atuacao/${slug}` },
    openGraph: {
      title: `${sector.title} — Aceros`,
      description,
      url: `/atuacao/${slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${sector.title} — Aceros`,
      description,
    },
  };
}

export function SectorPage({ slug }: { slug: string }) {
  const sector = sectorsData(pt).find((item) => item.id === slug);

  if (!sector) notFound();

  const pageUrl = `https://aceros.com.br/atuacao/${slug}`;
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: `${sector.title} — soluções industriais sob medida`,
      description: sector.description,
      url: pageUrl,
      provider: { '@id': 'https://aceros.com.br/#organization' },
      areaServed: { '@type': 'Country', name: 'Brasil' },
      serviceType: sector.title,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aceros.com.br/' },
        { '@type': 'ListItem', position: 2, name: 'Mercado de Atuação', item: 'https://aceros.com.br/#sectors' },
        { '@type': 'ListItem', position: 3, name: sector.title, item: pageUrl },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ExpertiseDetailsClient
        pageData={{
          sector,
          translations: pt,
        }}
      />
    </>
  );
}
