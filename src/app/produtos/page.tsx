import type { Metadata } from 'next';
import { Products } from '@/components/sections/products';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';

const productListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Linhas de produtos Aceros',
  itemListElement: [
    ['Tubos centrifugados', '/tubos-de-aco-inox'],
    ['Buchas de aço inox', '/bucha-de-aco-inox'],
    ['Rolos de forno', '/rolos-de-forno'],
    ['Sink Rolls', '/sink-rolls'],
    ['Fundição centrifugada', '/fundicao-centrifugada'],
  ].map(([name, path], index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name,
    url: `https://aceros.com.br${path}`,
  })),
};

export const metadata: Metadata = {
  title: 'Produtos | Peças Centrifugadas em Aço Inox Sob Medida',
  description:
    'Catálogo de produtos Aceros: tubos mecânicos, buchas, Sink Rolls, rolos de forno e componentes centrifugados em ligas especiais. Fabricação sob medida.',
  alternates: { canonical: '/produtos' },
  openGraph: {
    title: 'Produtos Aceros | Peças Centrifugadas em Aço Inox',
    description:
      'Tubos, buchas, Sink Rolls, rolos de forno e outros componentes fabricados sob medida por centrifugação.',
    url: '/produtos',
  },
};

export default function ProdutosPage() {
  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <Products />
      <WhatsAppCta />
    </div>
  );
}
