import type { Metadata } from 'next';
import { Qualifications } from '@/components/sections/qualifications';
import { QualityLab } from '@/components/sections/quality-lab';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';

export const metadata: Metadata = {
  title: 'Qualidade e Certificações — Aços Centrifugados Aceros',
  description:
    'Conheça a certificação ISO 9001:2015 da Aceros e os recursos de análise química, dureza, ultrassom e metrologia aplicados conforme os requisitos de cada projeto.',
  alternates: { canonical: '/qualificacao' },
  openGraph: {
    title: 'Qualidade e Certificações — Aceros',
    description:
      'ISO 9001:2015, laboratório, metrologia e controles aplicados à fabricação de componentes industriais sob medida.',
    url: '/qualificacao',
  },
};

export default function QualificacaoPage() {
  return (
    <div>
      <Qualifications />
      <QualityLab />
      <WhatsAppCta />
    </div>
  );
}
