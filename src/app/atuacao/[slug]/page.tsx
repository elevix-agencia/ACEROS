
import { sectorsData, Sector } from '@/lib/expertise-data';
import { ExpertiseDetailsClient } from './ExpertiseDetailsClient';
import pt from '@/i18n/pt.json'; // Usando como fallback/padrão
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

// Esta função informa ao Next.js quais slugs existem para gerar as páginas estáticas
export async function generateStaticParams() {
  const sectors = sectorsData(pt);
  return sectors.map((sector) => ({
    slug: sector.id,
  }));
}

// Esta função gera os metadados dinâmicos (título da página, etc.)
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  // Carrega os dados do setor para pegar o título. Usamos 'pt' como base.
  const sector = sectorsData(pt).find(s => s.id === slug);
 
  return {
    title: `${sector?.title || 'Setor'} | Aceros`,
    description: sector?.description || 'Soluções em aços e ligas especiais.',
  }
}

// Esta é agora uma página de servidor (Server Component).
// Os dados são preparados aqui e passados para o componente cliente.
export default async function ExpertiseDetailsPage({ params }: Props) {
  const { slug } = await params;
  // Carregamos e processamos os dados aqui, no servidor.
  const sectorData = sectorsData(pt).find(s => s.id === slug);

  if (!sectorData) {
    return <div className="pt-24 text-center">Setor não encontrado.</div>;
  }

  const pageData = {
    sector: sectorData,
    translations: pt, // Passa todas as traduções para o cliente
  };


  // O componente cliente agora recebe todos os dados de que precisa como props.
  return <ExpertiseDetailsClient pageData={pageData} />;
}
