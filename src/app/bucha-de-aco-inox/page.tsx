
import { Metadata } from 'next';
import { BuchaInoxClient } from './BuchaInoxClient';

export const metadata: Metadata = {
  title: 'Bucha de Aço Inox | Fabricação Sob Medida',
  description:
    'Buchas de aço inox fabricadas por centrifugação e usinadas sob medida para Sink Roll, Furnace Roll e outras aplicações industriais. Solicite uma análise técnica.',
  alternates: {
    canonical: '/bucha-de-aco-inox',
  },
  openGraph: {
    title: 'Bucha de Aço Inox Sob Medida | Aceros',
    description:
      'Buchas centrifugadas ASTM A297 para Sink Roll e Furnace Roll. Alta resistência a calor, abrasão e corrosão em ambientes de galvanização e tratamento térmico.',
    url: '/bucha-de-aco-inox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bucha de Aço Inox Sob Medida | Aceros',
    description:
      'Buchas centrifugadas para Sink Roll e Furnace Roll. Fabricação sob medida.',
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
          "text": "Fabricadas por centrifugação e usinadas conforme desenho, são destinadas às pontas de Sink Rolls e a outras aplicações industriais definidas conforme a condição de operação."
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
          "text": "São componentes dimensionados conforme o desenho e as condições de operação dos rolos utilizados em fornos de tratamento térmico."
        }
      },
      {
        "@type": "Question",
        "name": "Quais ligas de aço inox a Aceros utiliza na fabricação?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A liga é selecionada pela engenharia conforme a temperatura, a corrosão, a abrasão e os requisitos dimensionais de cada projeto, incluindo materiais conforme ASTM A297 quando aplicável."
        }
      },
      {
        "@type": "Question",
        "name": "A Aceros produz buchas conforme desenho técnico?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. A fabricação e a usinagem são realizadas sob medida conforme o desenho técnico e os requisitos informados pelo cliente."
        }
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Bucha de Aço Inox Centrifugada Sob Medida",
    "image": "https://aceros.com.br/images/aceros/buchas/bucha-aco-inox-aceros-06.jpg",
    "description": "Buchas de aço inox usinadas sob medida (ASTM A297), especialistas em bucha para ponta de Sink Roll e Furnace Roll. Alta resistência a calor, abrasão e corrosão em ambientes de galvanização e tratamento térmico.",
    "brand": { "@type": "Brand", "name": "Aceros" },
    "manufacturer": {
      "@type": "Organization",
      "name": "Aceros Centrifugados LTDA",
      "url": "https://aceros.com.br",
      "parentOrganization": { "@type": "Organization", "name": "Metalúrgica Daniela" }
    },
    "category": "Buchas industriais em aço inoxidável"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://aceros.com.br" },
      { "@type": "ListItem", "position": 2, "name": "Produtos", "item": "https://aceros.com.br/produtos" },
      { "@type": "ListItem", "position": 3, "name": "Buchas de aço inox", "item": "https://aceros.com.br/bucha-de-aco-inox" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BuchaInoxClient />
    </>
  );
}
