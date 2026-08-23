import type { Metadata } from 'next';
import { CertificatesCta } from '@/components/sections/certificates-cta';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';

export const metadata: Metadata = {
  title: 'Certificados e Selos de Qualidade — Aceros',
  description:
    'Certificados, laudos e selos de qualidade das peças fabricadas pela Aceros. Rastreabilidade total conforme normas ABNT, ASTM, DIN e AISI.',
  alternates: { canonical: '/certificados' },
  openGraph: {
    title: 'Certificados de Qualidade — Aceros',
    description:
      'Certificações e laudos técnicos garantindo a conformidade das peças em aços centrifugados.',
    url: '/certificados',
  },
};

export default function CertificadosPage() {
  return (
    <div className="pt-20">
      <h1 className="sr-only">Certificados e Selos de Qualidade da Aceros</h1>
      <CertificatesCta />
      <WhatsAppCta />
    </div>
  );
}
