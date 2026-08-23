import type { Metadata } from 'next';
import { Qualifications } from '@/components/sections/qualifications';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';

export const metadata: Metadata = {
  title: 'Qualidade e Certificações — Aços Centrifugados Aceros',
  description:
    'Nossas certificações, normas e processos de controle de qualidade. Rastreabilidade total, ensaios de dureza, análise química e ultrassom em cada peça fabricada.',
  alternates: { canonical: '/qualificacao' },
  openGraph: {
    title: 'Qualidade e Certificações — Aceros',
    description:
      'Certificações e controle de qualidade das peças fabricadas pela Aceros conforme normas ABNT, ASTM, DIN e AISI.',
    url: '/qualificacao',
  },
};

export default function QualificacaoPage() {
  return (
    <div className="pt-20">
      <Qualifications />
      <WhatsAppCta />
    </div>
  );
}
