import type { Metadata } from 'next';
import { IndustrialCampaignPage, type CampaignPageData } from '@/components/landing-pages/industrial-campaign-page';

export const metadata: Metadata = {
  title: 'Sink Rolls Sob Medida | Rolos de Imersão para Galvanização',
  description: 'Sink rolls, stabilizer rolls, braços, berços e componentes para linhas de galvanização por imersão a quente. Fabricação Aceros sob medida.',
  alternates: { canonical: '/sink-rolls' },
  openGraph: { title: 'Sink Rolls para Galvanização — Aceros', description: 'Rolos de imersão e componentes resistentes ao zinco fundido.', url: '/sink-rolls' },
};

const data: CampaignPageData = {
  source: 'lp-sink-rolls',
  eyebrow: 'Galvanização por imersão a quente',
  title: 'Sink rolls e componentes para linhas de galvanização',
  heroDescription: 'Rolos de imersão, estabilizadores, braços, berços e bicos desenvolvidos para operar em contato com zinco, zincalume e alumínio-silício fundidos.',
  heroImage: '/images/imgur/KZhCZ6S.png',
  heroAlt: 'Sink roll fabricado para linha de galvanização por imersão a quente',
  overviewTitle: 'Conjunto projetado para o pote de zincagem',
  overview: [
    'A operação submersa exige resistência à corrosão pelo banho metálico, estabilidade dimensional e controle do acabamento superficial. Cada componente é desenvolvido conforme a linha e o regime de produção.',
    'A Aceros fabrica o rolo e seus componentes associados, incluindo buchas para ponta de sink roll, com seleção de liga, centrifugação e usinagem de precisão.',
  ],
  detailImage: '/images/imgur/5nSkBkQ.png',
  detailAlt: 'Rolo de imersão polido produzido por centrifugação',
  benefits: ['Alta resistência ao banho de zinco', 'Controle dimensional das pontas', 'Buchas mono ou bimetálicas', 'Projeto conforme a linha do cliente'],
  applications: [
    { title: 'Sink roll', description: 'Rolo principal submerso que direciona a tira dentro do pote de galvanização.' },
    { title: 'Stabilizer rolls', description: 'Rolos estabilizadores para controle da tira e uniformidade do processo.' },
    { title: 'Braços e berços', description: 'Componentes de sustentação dimensionados para o conjunto e a manutenção da linha.' },
    { title: 'Buchas de ponta', description: 'Buchas centrifugadas de alta precisão para reduzir desgaste e paradas.' },
    { title: 'Snout e bicos', description: 'Componentes estruturais para entrada da tira e controle do ambiente no pote.' },
    { title: 'Zinco e zincalume', description: 'Soluções para banhos de zinco, zincalume e alumínio com silício.' },
  ],
  specs: [
    { label: 'Aplicação', value: 'Linhas CGL e galvanização' },
    { label: 'Componentes', value: 'Rolos, braços, berços e buchas' },
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
    { question: 'Atendem linhas de zincalume?', answer: 'Sim. A engenharia seleciona materiais conforme a composição do banho, a temperatura e o histórico de operação.' },
  ],
  whatsappText: 'Olá! Gostaria de solicitar um orçamento para Sink Rolls e componentes de galvanização.',
  formHint: 'Informe a linha, composição do banho, dimensões, material atual e quais componentes do conjunto precisa cotar.',
};

export default function SinkRollsPage() {
  return <IndustrialCampaignPage data={data} />;
}
