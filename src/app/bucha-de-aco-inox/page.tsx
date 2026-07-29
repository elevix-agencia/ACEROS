
import { Metadata } from 'next';
import { BuchaInoxClient } from './BuchaInoxClient';

export const metadata: Metadata = {
  title: 'Bucha de Aço Inox | Fabricação Sob Medida | Aceros',
  description: 'Fabricamos buchas de aço inox sob medida pelo processo de centrifugação (ASTM A297). Especialistas em Sink Roll e Furnace Roll. Solicite seu orçamento.',
  alternates: {
    canonical: 'https://www.aceros.com.br/bucha-de-aco-inox',
  },
};

export default function BuchaInoxPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quais ligas de aço inox a Aceros utiliza na fabricação de buchas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trabalhamos com as principais ligas do mercado, incluindo 304, 304L, 316, 316L, 310 e 420, além de ligas especiais fundidas sob a norma ASTM A297 para alta performance."
        }
      },
      {
        "@type": "Question",
        "name": "A Aceros produz buchas conforme desenho técnico?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, nossa especialidade é a fabricação sob medida seguindo rigorosamente o desenho técnico ou projeto fornecido pelo cliente, integrando fundição por centrifugação e usinagem CNC."
        }
      },
      {
        "@type": "Question",
        "name": "Quais as vantagens das buchas para Sink Roll da Aceros?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nossas buchas para ponta de Sink Roll são usinadas em ligas de alta resistência mecânica e química, projetadas para operar submersas em banhos de galvanização, reduzindo o desgaste e paradas de linha."
        }
      },
      {
        "@type": "Question",
        "name": "Vocês trabalham com produtos commodities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. A Aceros é uma fábrica de peças técnicas de alta liga. Nosso foco é a solução de engenharia para problemas de calor e abrasão, não comercializamos tubos comuns de prateleira."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a norma técnica base para a fabricação das buchas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nossa fabricação por centrifugação segue rigorosamente as normas internacionais, com destaque para a ASTM A297, garantindo total rastreabilidade e integridade metalúrgica."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BuchaInoxClient />
    </>
  );
}
