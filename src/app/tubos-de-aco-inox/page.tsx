
import { Metadata } from 'next';
import { TubosInoxClient } from './TubosInoxClient';

export const metadata: Metadata = {
  title: 'Tubos de Aço Inox Sob Medida | Fabricante Industrial',
  description:
    'A Aceros fabrica tubos de aço inox e tubos centrifugados sob medida para aplicações industriais. Especialistas em alta temperatura e abrasão. Solicite orçamento.',
  alternates: {
    canonical: '/tubos-de-aco-inox',
  },
  openGraph: {
    title: 'Tubos de Aço Inox Sob Medida — Aceros',
    description:
      'Tubos centrifugados ASTM A297 em ligas 304, 316, 310 e mais. Fabricação sob medida para siderurgia, petroquímica e tratamento térmico.',
    url: '/tubos-de-aco-inox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tubos de Aço Inox Sob Medida — Aceros',
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
          "text": "Diferente de tubos comuns de prateleira, nossos tubos centrifugados possuem densidade superior, ausência total de porosidade e são fabricados em ligas especiais ASTM A297 para suportar calor e abrasão extrema."
        }
      },
      {
        "@type": "Question",
        "name": "Quais são os estágios de acabamento oferecidos pela fábrica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oferecemos 4 estágios conforme seu projeto: 1. Bruto de centrifugação (alta densidade); 2. Usinado (munhão e corpo acetinado); 3. Polido/Acabado (peça espelhada com revenido térmico); 4. Misto (fornecimento sob demanda)."
        }
      },
      {
        "@type": "Question",
        "name": "A Aceros trabalha com produtos commodities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. Somos uma divisão da Metalúrgica Daniela focada exclusivamente em engenharia e fabricação sob medida de componentes de alta liga centrifugados e usinados conforme desenho técnico."
        }
      },
      {
        "@type": "Question",
        "name": "Quais as dimensões e ligas disponíveis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trabalhamos com ligas 304, 304L, 316, 316L, 310 e 420. As dimensões (diâmetro, espessura e comprimento) são fabricadas 100% sob medida para seu projeto."
        }
      },
      {
        "@type": "Question",
        "name": "Atendem pedidos para todo o Brasil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, possuímos logística estruturada para atender indústrias de todos os estados brasileiros com pontualidade e segurança."
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
      <TubosInoxClient />
    </>
  );
}
