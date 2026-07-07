
import { Metadata } from 'next';
import { BuchaInoxClient } from './BuchaInoxClient';

export const metadata: Metadata = {
  title: 'Bucha de Aço Inox | Fabricação Sob Medida | Aceros',
  description: 'Fabricamos buchas de aço inox sob medida para aplicações industriais com alto rigor técnico. Solicite seu orçamento com a Aceros.',
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
          "text": "Trabalhamos com as principais ligas do mercado, incluindo 304, 304L, 316, 316L, 310 e 420, garantindo resistência à corrosão e durabilidade conforme sua aplicação."
        }
      },
      {
        "@type": "Question",
        "name": "A Aceros produz buchas conforme desenho técnico?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, nossa especialidade é a fabricação sob medida seguindo rigorosamente o desenho técnico ou projeto fornecido pelo cliente."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o prazo de entrega para as buchas sob medida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O prazo varia conforme a complexidade do projeto e a quantidade solicitada, mas priorizamos a agilidade sem abrir mão do controle de qualidade rigoroso."
        }
      },
      {
        "@type": "Question",
        "name": "Vocês atendem pedidos para todo o Brasil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, a Aceros possui logística estruturada para atender indústrias em todos os estados do Brasil com segurança e pontualidade."
        }
      },
      {
        "@type": "Question",
        "name": "Quais normas técnicas são seguidas na produção?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nossa fabricação segue normas nacionais e internacionais como ABNT, ASTM e DIN, com total rastreabilidade de materiais."
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
