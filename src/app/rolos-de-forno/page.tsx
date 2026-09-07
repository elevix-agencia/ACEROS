import type { Metadata } from 'next';
import { IndustrialCampaignPage, type CampaignPageData } from '@/components/landing-pages/industrial-campaign-page';

export const metadata: Metadata = {
  title: 'Rolos de Forno Sob Medida | Furnace Rolls Industriais',
  description: 'Rolos de forno centrifugados em ligas ASTM A297 para tratamento térmico, CAPL, CGL e fornos contínuos. Fabricação sob medida. Solicite orçamento.',
  alternates: { canonical: '/rolos-de-forno' },
  openGraph: { title: 'Rolos de Forno e Furnace Rolls — Aceros', description: 'Rolos centrifugados resistentes a altas temperaturas, fabricados conforme desenho técnico.', url: '/rolos-de-forno' },
};

const data: CampaignPageData = {
  source: 'lp-rolos-forno',
  eyebrow: 'Furnace Rolls · Fabricação Aceros',
  title: 'Rolos de forno para operação contínua em alta temperatura',
  heroDescription: 'Rolos centrifugados, resfriados ou não resfriados, desenvolvidos conforme o forno, a carga e o ciclo térmico da sua linha industrial.',
  heroImage: '/images/imgur/gbNL57g.png',
  heroAlt: 'Rolo industrial para forno túnel CSP fabricado pela Aceros',
  overviewTitle: 'Desempenho previsível dentro do forno',
  overview: [
    'A Aceros fabrica rolos de forno em ligas resistentes à fluência, oxidação e ciclos térmicos severos. O projeto considera temperatura, atmosfera, carga, rotação e sistema de refrigeração.',
    'O fornecimento pode seguir o desenho do cliente ou ser desenvolvido em conjunto com nossa engenharia, incluindo centrifugação, usinagem, montagem e controle dimensional.',
  ],
  detailImage: '/images/imgur/iYTJsbZ.png',
  detailAlt: 'Tubos radiantes e rolos para fornos CAPL e CGL',
  benefits: ['Rolos resfriados e não resfriados', 'Ligas ASTM A297 HK, HH e HP', 'Opções revestidas e não revestidas', 'Dimensões e acabamento sob medida'],
  applications: [
    { title: 'Fornos túnel CSP', description: 'Rolos para transporte de placas sob regime térmico contínuo e elevada carga.' },
    { title: 'Linhas CAPL e CGL', description: 'Furnace rolls para recozimento e galvanização contínua, com ou sem revestimento.' },
    { title: 'Tratamento térmico', description: 'Rolos transportadores para têmpera, revenimento, recozimento e outros ciclos.' },
    { title: 'Fornos de barras', description: 'Rolos de carga e descarga, secos ou molhados, conforme a configuração do equipamento.' },
    { title: 'Walking beam', description: 'Componentes para fornos de vigas caminhantes e tratamento térmico de tubos.' },
    { title: 'Modernização de linhas', description: 'Reposição e melhoria de componentes a partir de desenho, amostra ou histórico de falha.' },
  ],
  specs: [
    { label: 'Processo', value: 'Fundição centrifugada' },
    { label: 'Ligas', value: 'ASTM A297 e superligas' },
    { label: 'Configuração', value: 'Resfriado ou não resfriado' },
    { label: 'Fornecimento', value: 'Conforme desenho técnico' },
  ],
  gallery: [
    { src: '/images/imgur/zNJQB1c.png', alt: 'Rolo industrial usinado para linha siderúrgica' },
    { src: '/images/imgur/28cnqjU.png', alt: 'Peças e rolos para forno de barras' },
    { src: '/images/imgur/j6Y8N8S.png', alt: 'Rolo de aço usinado para aplicação industrial' },
  ],
  faq: [
    { question: 'Os rolos são fabricados conforme desenho?', answer: 'Sim. Diâmetros, comprimento, pontas, flanges, refrigeração e acabamento são definidos conforme o desenho e a condição de operação.' },
    { question: 'Quais ligas são usadas?', answer: 'A seleção depende da temperatura, atmosfera e solicitação mecânica. Trabalhamos com ligas ASTM A297, como HK, HH e HP, além de superligas específicas.' },
    { question: 'A Aceros fornece rolos resfriados?', answer: 'Sim. Fabricamos configurações resfriadas e não resfriadas, de acordo com o projeto do forno.' },
  ],
  whatsappText: 'Olá! Gostaria de solicitar um orçamento para rolos de forno (Furnace Rolls).',
  formHint: 'Informe o tipo de forno, temperatura, dimensões, liga atual e, se possível, os dados do desenho técnico.',
};

export default function RolosDeFornoPage() {
  return <IndustrialCampaignPage data={data} />;
}
