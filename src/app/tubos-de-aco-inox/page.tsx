
import { Metadata } from 'next';
import { TubosInoxClient } from './TubosInoxClient';

export const metadata: Metadata = {
  title: 'Tubos de Aço Inox Sob Medida | Fabricante Industrial',
  description:
    'Tubos mecânicos de aço inox fabricados por centrifugação, sob medida conforme desenho e condições da aplicação industrial. Solicite uma análise técnica.',
  alternates: {
    canonical: '/tubos-de-aco-inox',
  },
  openGraph: {
    title: 'Tubos de Aço Inox Sob Medida | Aceros',
    description:
      'Tubos centrifugados em ligas especiais, fabricados sob medida conforme desenho e condição de operação.',
    url: '/tubos-de-aco-inox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tubos de Aço Inox Sob Medida | Aceros',
    description:
      'Tubos centrifugados ASTM A297 para aplicações severas. Fabricação sob medida.',
  },
};

export default function TubosInoxPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quais as vantagens dos tubos centrifugados da Aceros?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Diferente de tubos comuns de prateleira, os tubos centrifugados são fabricados sob medida e o processo favorece uma estrutura densa, adequada a aplicações industriais severas."
        }
      },
      {
        "@type": "Question",
        "name": "Quais são os estágios de acabamento oferecidos pela fábrica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O fornecimento pode ser bruto de centrifugação, usinado, polido/acabado ou misto, conforme os requisitos definidos no projeto."
        }
      },
      {
        "@type": "Question",
        "name": "A Aceros trabalha com produtos commodities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. A Aceros é focada exclusivamente em engenharia e fabricação sob medida de componentes de alta liga centrifugados e usinados conforme desenho técnico."
        }
      },
      {
        "@type": "Question",
        "name": "Quais as dimensões e ligas disponíveis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A liga é selecionada conforme a temperatura, a abrasão, a corrosão e os requisitos do projeto. Diâmetro, espessura e comprimento são definidos conforme desenho técnico."
        }
      },
      {
        "@type": "Question",
        "name": "Atendem pedidos para o Brasil e exterior?",
        "acceptedAnswer": {
          "@type": "Answer",
            "text": "Sim. Atendemos projetos no Brasil e no exterior. Condições de entrega e prazos são confirmados na proposta comercial."
        }
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Tubo de Aço Inox Centrifugado Sob Medida",
    "image": "https://aceros.com.br/images/aceros/tubos/tubo-aco-inox-polido-aceros-05.jpg",
    "description": "Tubos de aço inox fabricados por centrifugação, sob medida para aplicações industriais e em ligas selecionadas conforme a condição de operação.",
    "brand": { "@type": "Brand", "name": "Aceros" },
    "manufacturer": {
      "@type": "Organization",
      "name": "Aceros Centrifugados LTDA",
      "url": "https://aceros.com.br"
    },
    "category": "Tubos industriais em aço inoxidável"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://aceros.com.br" },
      { "@type": "ListItem", "position": 2, "name": "Produtos", "item": "https://aceros.com.br/produtos" },
      { "@type": "ListItem", "position": 3, "name": "Tubos de aço inox", "item": "https://aceros.com.br/tubos-de-aco-inox" }
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
      <TubosInoxClient />
    </>
  );
}
