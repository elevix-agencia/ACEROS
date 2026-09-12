import { SectorPage, sectorMetadata } from '../sector-page';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { slug } = await params;
  return sectorMetadata(slug);
}

export default async function ExpertiseDetailsPage({ params }: Props) {
  const { slug } = await params;
  return <SectorPage slug={slug} />;
}
