import { sectorsData } from '@/lib/expertise-data';
import { ExpertiseDetailsClient } from './ExpertiseDetailsClient';
import pt from '@/i18n/pt.json';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const sectors = sectorsData(pt);
  return sectors.map((sector) => ({
    slug: sector.id,
  }));
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { slug } = await params;
  const sector = sectorsData(pt).find((s) => s.id === slug);

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

export default async function ExpertiseDetailsPage({ params }: Props) {
  const { slug } = await params;
  const sectorData = sectorsData(pt).find((s) => s.id === slug);

  if (!sectorData) {
    return <div className="pt-24 text-center">Setor não encontrado.</div>;
  }

  const pageData = {
    sector: sectorData,
    translations: pt,
  };

  return (
    <>
      <h1 className="sr-only">
        {sectorData.title} — Aços Centrifugados Aceros para o Setor de {sectorData.title}
      </h1>
      <ExpertiseDetailsClient pageData={pageData} />
    </>
  );
}
