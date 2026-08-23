import type { Metadata } from 'next';
import { Contact } from '@/components/sections/contact';

export const metadata: Metadata = {
  title: 'Contato — Solicite Orçamento de Aços Centrifugados',
  description:
    'Fale com nossa equipe técnica. Solicite orçamento de tubos, buchas e componentes centrifugados em aços inoxidáveis. Atendimento em todo o Brasil.',
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
    <div className="pt-20">
      <h1 className="sr-only">Contato Aceros — Solicite Orçamento Técnico</h1>
      <Contact />
    </div>
  );
}
