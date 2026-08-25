import type { Metadata } from 'next';

import { ExpertiseDetailsClient } from '@/app/atuacao/[slug]/ExpertiseDetailsClient';
import pt from '@/i18n/pt.json';
import { sectorsData } from '@/lib/expertise-data';
import { sectorSeoContent } from '@/lib/sector-seo-content';

export function sectorMetadata(slug: string): Metadata {
  const sector = sectorsData(pt).find((item) => item.id === slug);

  if (!sector) {
    return {
      title: 'Setor não encontrado',
      description: 'Página não encontrada.',
    };
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

  if (!sector) {
    return <div className="pt-24 text-center">Setor não encontrado.</div>;
  }

  const seoContent = sectorSeoContent[slug];

  return (
    <>
      <h1 className="sr-only">
        {sector.title} — Aços Centrifugados Aceros para o Setor de {sector.title}
      </h1>

      {seoContent && (
        <section className="sr-only" aria-hidden="false">
          <p>{seoContent.intro}</p>
          {seoContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <ul>
            {seoContent.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>
      )}

      <ExpertiseDetailsClient
        pageData={{
          sector,
          translations: pt,
        }}
      />
    </>
  );
}
