import type { Metadata } from 'next';
import { Contact } from '@/components/sections/contact';

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://aceros.com.br/contato#page',
  url: 'https://aceros.com.br/contato',
  name: 'Contato Aceros',
  about: { '@id': 'https://aceros.com.br/#organization' },
  inLanguage: 'pt-BR',
};

export const metadata: Metadata = {
  title: 'Contato — Solicite Orçamento de Aços Centrifugados',
  description:
    'Fale com nossa equipe técnica. Solicite orçamento de tubos, buchas e componentes centrifugados em aços inoxidáveis. Atendimento Brasil e exterior.',
  alternates: { canonical: '/contato' },
  openGraph: {
    title: 'Contato — Solicite Orçamento de Aços Centrifugados',
    description:
      'Fale com a Aceros: envie seu projeto e receba proposta comercial de peças em aços inoxidáveis fabricadas sob medida.',
    url: '/contato',
  },
};

export default function ContatoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Contact />
    </>
  );
}
