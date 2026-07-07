
import { Metadata } from 'next';
import { TubosInoxClient } from './TubosInoxClient';

export const metadata: Metadata = {
  title: 'Tubos de Aço Inox Sob Medida | Fabricante Industrial | Aceros',
  description: 'A Aceros fabrica tubos de aço inox e tubos centrifugados sob medida para aplicações industriais. Solicite um orçamento com nossa equipe técnica.',
  alternates: {
    canonical: 'https://www.aceros.com.br/tubos-de-aco-inox',
  },
};

export default function TubosInoxPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quais ligas de aço inox são utilizadas na fabricação dos tubos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trabalhamos com as principais ligas como 304, 304L, 316, 316L, 310 e 420, garantindo máxima resistência térmica e química."
        }
      },
      {
        "@type": "Question",
        "name": "A Aceros fabrica tubos centrifugados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, somos especialistas em tubos fundidos por centrifugação, processo que garante maior densidade, ausência de porosidade e resistência superior."
        }
      },
      {
        "@type": "Question",
        "name": "Quais são as dimensões e diâmetros disponíveis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fabricamos sob medida conforme seu projeto técnico. Os diâmetros e comprimentos são definidos de acordo com a necessidade específica da sua aplicação."
        }
      },
      {
        "@type": "Question",
        "name": "Vocês atendem indústrias em todo o Brasil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, possuímos logística estruturada para atender indústrias de todos os estados brasileiros com pontualidade e segurança."
        }
      },
      {
        "@type": "Question",
        "name": "Quais normas técnicas são seguidas na produção dos tubos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Seguimos rigorosamente as normas ABNT, ASTM e DIN, garantindo a rastreabilidade total do material e qualidade certificada."
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
