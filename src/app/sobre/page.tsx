import type { Metadata } from 'next';
import { About } from '@/components/sections/about';
import { LocationMap } from '@/components/sections/location-map';
import { MainGallery } from '@/components/sections/main-gallery';
// Testimonials removido: continham depoimentos ficticios de empresas reais
// (Petrobras, Vale, Gerdau, etc.) sem autorizacao — risco juridico serio.
// Reintroduzir apenas com depoimentos reais + termo de autorizacao assinado.
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';

export const metadata: Metadata = {
  title: 'Sobre a Aceros — Divisão de Aços Inox do Grupo Metalúrgica Daniela',
  description:
    'Conheça a Aceros: divisão de aços inoxidáveis do Grupo Metalúrgica Daniela, especialista em fabricação sob medida de peças centrifugadas em ligas ASTM A297 para setores industriais exigentes.',
  alternates: { canonical: '/sobre' },
  openGraph: {
    title: 'Sobre a Aceros — Divisão de Aços Inox do Grupo Metalúrgica Daniela',
    description:
      'História, missão e expertise da Aceros na fabricação de peças em aços inoxidáveis centrifugados.',
    url: '/sobre',
  },
};

export default function SobrePage() {
  return (
    <div className="pt-20 sm:pt-24">
      <h1 className="sr-only">Sobre a Aceros — Divisão de Aços Inoxidáveis do Grupo Metalúrgica Daniela</h1>
      <About />
      <MainGallery />
      <LocationMap />
      <WhatsAppCta />
    </div>
  );
}
