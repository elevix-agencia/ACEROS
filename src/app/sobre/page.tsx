import type { Metadata } from 'next';
import { About } from '@/components/sections/about';
import { LocationMap } from '@/components/sections/location-map';
// Testimonials removido: continham depoimentos ficticios de empresas reais
// (Petrobras, Vale, Gerdau, etc.) sem autorizacao — risco juridico serio.
// Reintroduzir apenas com depoimentos reais + termo de autorizacao assinado.
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://aceros.com.br/sobre#page',
  url: 'https://aceros.com.br/sobre',
  name: 'Sobre a Aceros',
  about: { '@id': 'https://aceros.com.br/#organization' },
  inLanguage: 'pt-BR',
};

export const metadata: Metadata = {
  title: 'Sobre a Aceros — Aços Inoxidáveis Centrifugados',
  description:
    'Conheça a Aceros: divisão de aços inoxidáveis do Grupo Metalúrgica Daniela, especialista em fabricação sob medida de peças centrifugadas em ligas ASTM A297 para setores industriais exigentes.',
  alternates: { canonical: '/sobre' },
  openGraph: {
    title: 'Sobre a Aceros — Aços Inoxidáveis Centrifugados',
    description:
      'História, missão e expertise da Aceros na fabricação de peças em aços inoxidáveis centrifugados.',
    url: '/sobre',
  },
};

export default function SobrePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <About headingLevel="h1" />
      <LocationMap />
      <WhatsAppCta />
    </div>
  );
}
