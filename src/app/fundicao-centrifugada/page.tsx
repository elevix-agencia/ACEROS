import type { Metadata } from 'next';
import { IndustrialCampaignPage, type CampaignPageData } from '@/components/landing-pages/industrial-campaign-page';
import { buildCampaignSchema } from '@/lib/campaign-schema';

export const metadata: Metadata = {
  title: 'Fundição Centrifugada Sob Medida | Aços Inoxidáveis',
  description: 'Fundição centrifugada de tubos mecânicos, buchas e componentes em aços inoxidáveis e ligas especiais. Usinagem e fabricação sob desenho.',
  alternates: { canonical: '/fundicao-centrifugada' },
  openGraph: { title: 'Fundição Centrifugada Sob Medida — Aceros', description: 'Peças centrifugadas em aços inoxidáveis e ligas especiais, do bruto ao acabamento final.', url: '/fundicao-centrifugada', images: [{ url: '/images/aceros/tubos/tubo-aco-inox-bruto-aceros-01.jpg', alt: 'Tubo bruto produzido por fundição centrifugada' }] },
};

const data: CampaignPageData = {
  path: '/fundicao-centrifugada',
  source: 'lp-fundicao-centrifugada',
  eyebrow: 'Centrifugação · Usinagem · Engenharia',
  title: 'Fundição centrifugada de aços inoxidáveis sob medida',
  heroDescription: 'Tubos mecânicos, buchas e componentes centrifugados em ligas especiais, fabricados conforme desenho técnico para aplicações de calor, abrasão e corrosão.',
  heroImage: '/images/aceros/tubos/tubo-aco-inox-bruto-aceros-01.jpg',
  heroAlt: 'Tubos de aço inox bruto produzidos por fundição centrifugada pela Aceros',
  overviewTitle: 'Da liga líquida à peça usinada',
  overview: [
    'Na fundição centrifugada, o metal líquido é lançado contra a parede interna da coquilha em rotação. O processo favorece uma estrutura densa e é especialmente adequado à produção de peças cilíndricas de alta responsabilidade.',
    'A Aceros integra seleção de liga, centrifugação, tratamento térmico, usinagem e inspeção. O cliente pode receber a peça bruta, pré-usinada ou pronta para montagem.',
  ],
  detailImage: '/images/aceros/tubos/tubo-aco-inox-bruto-aceros-05.jpg',
  detailAlt: 'Tubo bruto de aço inox após o processo de centrifugação',
  benefits: ['Peças cilíndricas sob medida', 'Bruto, pré-usinado ou acabado', 'Ligas ASTM A297 e especiais', 'Controle químico e dimensional'],
  applications: [
    { title: 'Tubos centrifugados', description: 'Tubos de parede e dimensões definidas conforme o projeto industrial.' },
    { title: 'Buchas centrifugadas', description: 'Buchas produzidas conforme desenho e posteriormente usinadas para a aplicação industrial.' },
    { title: 'Rolos industriais', description: 'Componentes centrifugados destinados a rolos para fornos e linhas de galvanização.' },
    { title: 'Sink rolls', description: 'Rolos de imersão e buchas de ponta para conjuntos empregados no pote de zincagem.' },
    { title: 'Tratamento térmico', description: 'Componentes internos para fornos e dispositivos de processo.' },
    { title: 'Projeto especial', description: 'Desenvolvimento a partir de desenho, amostra ou condição de operação.' },
  ],
  specs: [
    { label: 'Materiais', value: 'Inoxidáveis e superligas' },
    { label: 'Norma de referência', value: 'ASTM A297' },
    { label: 'Acabamento', value: 'Bruto, usinado ou polido' },
    { label: 'Dimensões', value: 'Conforme desenho técnico' },
  ],
  gallery: [
    { src: '/images/aceros/tubos/tubo-aco-inox-bruto-aceros-01.jpg', alt: 'Tubos brutos obtidos por fundição centrifugada' },
    { src: '/images/aceros/tubos/tubo-aco-inox-usinado-aceros-01.jpg', alt: 'Tubo centrifugado após usinagem de precisão' },
    { src: '/images/aceros/tubos/tubo-aco-inox-polido-aceros-05.jpg', alt: 'Tubo centrifugado polido e acabado' },
  ],
  faq: [
    { question: 'Quais peças podem ser produzidas por centrifugação?', answer: 'O processo é empregado principalmente na fabricação de tubos mecânicos, buchas e outros componentes cilíndricos, sempre conforme avaliação técnica.' },
    { question: 'A peça pode ser entregue usinada?', answer: 'Sim. O fornecimento pode ser bruto de fundição, pré-usinado ou completamente acabado conforme desenho.' },
    { question: 'Quais informações são necessárias para cotar?', answer: 'Desenho, dimensões, liga desejada, quantidade e condição de trabalho. Quando necessário, nossa engenharia apoia a definição do material.' },
  ],
  whatsappText: 'Olá! Gostaria de solicitar um orçamento para uma peça em fundição centrifugada.',
  formHint: 'Descreva a peça, dimensões, quantidade, liga, temperatura e condição de operação. Se tiver desenho, informe no contato.',
};

export default function FundicaoCentrifugadaPage() {
  const schema = buildCampaignSchema({ path: data.path, name: 'Fundição centrifugada de aços inoxidáveis', description: data.heroDescription, image: data.heroImage, applications: data.applications, faq: data.faq });
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><IndustrialCampaignPage data={data} /></>;
}
