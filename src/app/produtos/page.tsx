import type { Metadata } from 'next';
import { Products } from '@/components/sections/products';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';

export const metadata: Metadata = {
  title: 'Produtos — Peças Centrifugadas em Aço Inox Sob Medida',
  description:
    'Catálogo de produtos Aceros: tubos mecânicos, buchas, Sink Rolls, rolos de forno e componentes centrifugados em ligas especiais. Fabricação sob medida.',
  alternates: { canonical: '/produtos' },
  openGraph: {
    title: 'Produtos Aceros — Peças Centrifugadas em Aço Inox',
    description:
      'Tubos, buchas, Sink Rolls, rolos de forno e outros componentes fabricados sob medida por centrifugação.',
    url: '/produtos',
  },
};

export default function ProdutosPage() {
  return (
    <div className="pt-20">
      <Products />
      <WhatsAppCta />
    </div>
  );
}
