import type { Metadata } from 'next';
import { Products } from '@/components/sections/products';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';

export const metadata: Metadata = {
  title: 'Produtos — Peças Centrifugadas em Aço Inox Sob Medida',
  description:
    'Catálogo de produtos Aceros: tubos, buchas, anéis, corpos de válvula, rolos, munhões, flanges e demais peças centrifugadas em aços inox ASTM A297. Fabricação sob medida.',
  alternates: { canonical: '/produtos' },
  openGraph: {
    title: 'Produtos Aceros — Peças Centrifugadas em Aço Inox',
    description:
      'Tubos, buchas, anéis e demais componentes fabricados por centrifugação em ligas ASTM A297 (304, 304L, 316, 316L, 310, 420).',
    url: '/produtos',
  },
};

export default function ProdutosPage() {
  return (
    <div className="pt-20">
      <h1 className="sr-only">Produtos Aceros — Peças Centrifugadas em Aço Inoxidável</h1>
      <Products />
      <WhatsAppCta />
    </div>
  );
}
