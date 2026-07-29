
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
        "name": "Quais as vantagens das buchas para Sink Roll da Aceros?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fabricadas por centrifugação em ligas ASTM A297, oferecem altíssima resistência à oxidação térmica e corrosão pelo zinco fundido nas linhas de galvanização, garantindo menor desgaste na ponta dos rolos e reduzindo paradas não programadas."
        }
      },
      {
        "@type": "Question",
        "name": "Vocês trabalham com produtos commodities / tubos de prateleira?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. A Aceros é focada exclusivamente em engenharia e fabricação sob medida de componentes de alta liga centrifugados e usinados conforme desenho técnico."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a aplicação das buchas para Rolos de Forno (Furnace Rolls)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "São aplicadas na sustentação e acoplamento dos rolos centrifugados que operam dentro de fornos de tratamento térmico sob temperaturas extremas."
        }
      },
      {
        "@type": "Question",
        "name": "Quais ligas de aço inox a Aceros utiliza na fabricação?",
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
          "text": "Sim, nossa especialidade é a fabricação 100% sob medida seguindo rigorosamente o desenho técnico ou projeto fornecido pelo cliente, integrando fundição por centrifugação e usinagem CNC."
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
