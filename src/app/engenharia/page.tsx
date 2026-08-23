
import { EngineeringClient } from './EngineeringClient';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import pt from '@/i18n/pt.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engenharia Metalúrgica — Projetos Sob Medida',
  description:
    'Engenharia de materiais Aceros: desenvolvimento de projetos de peças centrifugadas em ligas ASTM A297. Análise estrutural, cálculo de espessura, seleção de liga e simulação de comportamento térmico.',
  alternates: { canonical: '/engenharia' },
  openGraph: {
    title: 'Engenharia Metalúrgica Aceros — Projetos Sob Medida',
    description:
      'Engenharia de materiais, análise estrutural e desenvolvimento de peças centrifugadas em aços inoxidáveis.',
    url: '/engenharia',
  },
};


// Esta é agora uma página de servidor (Server Component).
// Os dados são preparados aqui e passados para o componente cliente.
export default function EngenhariaPage() {
  // Carregamos e processamos os dados aqui, no servidor.
  const engineeringData = pt.expertise_sectors.engenharia;

  const pageData = {
    sector: engineeringData,
    translations: {
        qualifications: pt.qualifications,
        manufacturing_history: pt.manufacturing_history,
    },
    images: {
      heroImage: PlaceHolderImages.find(img => img.id === 'engenharia-hero'),
      featureImage: PlaceHolderImages.find(img => img.id === 'engineering-feature'),
      alloyTableFull: PlaceHolderImages.find(img => img.id === 'alloy-table-full'),
      steelClassChart: PlaceHolderImages.find(img => img.id === 'steel-class-chart'),
      engineeringGalleryImages: PlaceHolderImages.filter(img => img.id.startsWith('history-')),
      machiningImages: PlaceHolderImages.filter(img => img.id.startsWith('machining-gallery-')),
      structuralAnalysisImage: PlaceHolderImages.find(img => img.id === 'structural-analysis-chart'),
      processFlowchartImage: PlaceHolderImages.find(img => img.id === 'process-flowchart'),
      isoCertificateImage: PlaceHolderImages.find(img => img.id === 'engineering-centrifugation-process'),
      calibrationCertificateImage: PlaceHolderImages.find(img => img.id === 'engineering-centrifugal-force'),
      structuralCalculationImage: PlaceHolderImages.find(img => img.id === 'structural-calculation'),
      rolosAplicacoesImage: PlaceHolderImages.find(img => img.id === 'rolos-aplicacoes'),
      engineeringNewSectionImage: PlaceHolderImages.find(img => img.id === 'engineering-new-section-image'),
    },
  };

  // O componente cliente agora recebe todos os dados de que precisa como props.
  return <EngineeringClient pageData={pageData} />;
}

    
    
    

    