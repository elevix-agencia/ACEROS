
import { EngineeringClient } from './EngineeringClient';
import { EngineeringCapabilities } from '@/components/sections/engineering-capabilities';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import pt from '@/i18n/pt.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engenharia Metalúrgica — Projetos Sob Medida',
  description:
    'Engenharia de materiais para componentes centrifugados sob medida. Análise de aplicação, seleção de liga, desenho e avaliação estrutural conforme o projeto.',
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
    sector: {
      ...engineeringData,
      solutions: {
        engineering_metallurgical_consulting: {
          ...engineeringData.solutions.engineering_metallurgical_consulting,
          icon: 'Component' as const,
        },
        engineering_alloy_development: {
          ...engineeringData.solutions.engineering_alloy_development,
          icon: 'Lightbulb' as const,
        },
        engineering_component_design: {
          ...engineeringData.solutions.engineering_component_design,
          icon: 'Zap' as const,
        },
      },
    },
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://aceros.com.br/engenharia#service',
            name: 'Engenharia metalúrgica para componentes industriais',
            description: 'Análise de aplicação, seleção de materiais e desenvolvimento de componentes industriais sob medida.',
            url: 'https://aceros.com.br/engenharia',
            provider: { '@id': 'https://aceros.com.br/#organization' },
            areaServed: { '@type': 'Country', name: 'Brasil' },
          }),
        }}
      />
      <EngineeringClient pageData={pageData} />
      <EngineeringCapabilities />
    </>
  );
}
