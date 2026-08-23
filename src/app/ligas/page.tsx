import type { Metadata } from 'next';
import { LocationMap } from '@/components/sections/location-map';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';

export const metadata: Metadata = {
  title: 'Ligas de Aço Inox — Aceros',
  description:
    'Ligas de aço inoxidável disponíveis na Aceros: 304, 304L, 316, 316L, 310, 420 e superligas ASTM A297 para aplicações em alta temperatura, abrasão e ambientes corrosivos.',
  alternates: { canonical: '/ligas' },
  openGraph: {
    title: 'Ligas de Aço Inox Aceros',
    description:
      'Ligas de aço inoxidável fabricadas por centrifugação para aplicações industriais severas.',
    url: '/ligas',
  },
};

export default function LigasPage() {
  return (
    <div className="pt-20">
      <h1 className="sr-only">Ligas de Aço Inoxidável Aceros</h1>
      <LocationMap />
      <WhatsAppCta />
    </div>
  );
}
