import type { Metadata } from 'next';
import LigasContent from './LigasContent';

export const metadata: Metadata = {
  title: 'Ligas de Aço Inox | ASTM A297 e Série 300/400',
  description:
    'Ligas trabalhadas pela Aceros: aços inoxidáveis das séries 300 e 400 e graus ASTM A297 para componentes industriais fabricados conforme o projeto.',
  alternates: { canonical: '/ligas' },
  openGraph: {
    title: 'Ligas de Aço Inox | Aceros Centrifugados',
    description:
      'Aços inoxidáveis e ligas resistentes ao calor, abrasão e corrosão. Série 300, 400 e ASTM A297 para aplicações industriais severas.',
    url: '/ligas',
  },
};

export default function LigasPage() {
  return <LigasContent />;
}
