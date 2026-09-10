import type { Metadata } from 'next';
import { IndustrialCampaignPage, type CampaignPageData } from '@/components/landing-pages/industrial-campaign-page';
import { buildCampaignSchema } from '@/lib/campaign-schema';

export const metadata: Metadata = {
  title: 'Sink Rolls Sob Medida | Rolos de Imersão para Galvanização',
  description: 'Sink rolls, buchas de ponta, braços, snout e conjuntos para linhas de galvanização por imersão a quente. Fabricação Aceros sob medida.',
  alternates: { canonical: '/sink-rolls' },
  openGraph: { title: 'Sink Rolls para Galvanização — Aceros', description: 'Rolos de imersão e componentes para linhas de galvanização.', url: '/sink-rolls', images: [{ url: '/images/imgur/KZhCZ6S.png', alt: 'Sink Roll fabricado para linha de galvanização' }] },
};

const data: CampaignPageData = {
  path: '/sink-rolls',
  source: 'lp-sink-rolls',
  eyebrow: 'Galvanização por imersão a quente',
  title: 'Sink rolls e componentes para linhas de galvanização',
  heroDescription: 'Rolos de imersão, buchas de ponta, braços, snout e conjuntos desenvolvidos sob medida para linhas de galvanização por imersão a quente.',
  heroImage: '/images/imgur/KZhCZ6S.png',
  heroAlt: 'Sink roll fabricado para linha de galvanização por imersão a quente',
  overviewTitle: 'Conjunto projetado para o pote de zincagem',
  overview: [
    'A operação submersa exige resistência à corrosão pelo banho metálico, estabilidade dimensional e controle do acabamento superficial. Cada componente é desenvolvido conforme a linha e o regime de produção.',
    'A Aceros fabrica o rolo e seus componentes associados, incluindo buchas para ponta de sink roll, com seleção de liga, centrifugação e usinagem de precisão.',
  ],
  detailImage: '/images/imgur/5nSkBkQ.png',
  detailAlt: 'Rolo de imersão polido produzido por centrifugação',
  benefits: ['Componentes para o pote de zincagem', 'Controle dimensional das pontas', 'Buchas em materiais específicos', 'Projeto conforme a linha do cliente'],
  applications: [
    { title: 'Sink roll', description: 'Rolo principal submerso que direciona a tira dentro do pote de galvanização.' },
    { title: 'Buchas para ponta', description: 'Buchas para a ponta do sink roll, fabricadas conforme o conjunto e a condição de trabalho.' },
    { title: 'Braços', description: 'Braços para sink roll e componentes de sustentação do conjunto de zincagem.' },
    { title: 'Buchas de ponta', description: 'Buchas centrifugadas de alta precisão para reduzir desgaste e paradas.' },
    { title: 'Snout', description: 'Componente desenvolvido para trabalho no pote de zincagem, conforme projeto da linha.' },
    { title: 'Conjuntos montados', description: 'Fornecimento de conjuntos com rolos e braços para linhas de galvanização.' },
  ],
  specs: [
    { label: 'Aplicação', value: 'Linhas CGL e galvanização' },
    { label: 'Componentes', value: 'Rolos, braços, snout e buchas' },
    { label: 'Processo', value: 'Centrifugação e usinagem' },
    { label: 'Projeto', value: '100% sob medida' },
  ],
  gallery: [
    { src: '/images/imgur/qdpfn4q.png', alt: 'Componentes para linha de galvanização por imersão a quente' },
    { src: '/images/imgur/KZhCZ6S.png', alt: 'Rolo de imersão para galvanização' },
    { src: '/images/imgur/DLNl2Zu.png', alt: 'Componente snout para pote de zincagem' },
  ],
  faq: [
    { question: 'A Aceros fabrica o sink roll completo?', answer: 'Sim. O fornecimento pode contemplar rolo, pontas, buchas e componentes associados, conforme o desenho e a necessidade da linha.' },
    { question: 'Vocês fabricam buchas para a ponta do rolo?', answer: 'Sim. Produzimos buchas centrifugadas mono ou bimetálicas, usinadas conforme a tolerância do conjunto.' },
    { question: 'Os componentes são fabricados conforme desenho?', answer: 'Sim. Dimensões, materiais e acabamento são definidos conforme o desenho e as condições de operação da linha.' },
  ],
  whatsappText: 'Olá! Gostaria de solicitar um orçamento para Sink Rolls e componentes de galvanização.',
  formHint: 'Informe a linha, composição do banho, dimensões, material atual e quais componentes do conjunto precisa cotar.',
};

export default function SinkRollsPage() {
  const schema = buildCampaignSchema({ path: data.path, name: 'Sink Rolls e componentes para galvanização', description: data.heroDescription, image: data.heroImage, applications: data.applications, faq: data.faq });
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><IndustrialCampaignPage data={data} /></>;
}
