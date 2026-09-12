import type { Metadata } from 'next';
import { CertificatesCta } from '@/components/sections/certificates-cta';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';

export const metadata: Metadata = {
  title: 'Certificações e Referências Técnicas — Aceros',
  description:
    'Certificações do sistema de gestão, documentos técnicos e referências de classificadoras aplicáveis aos fornecimentos da Aceros.',
  alternates: { canonical: '/certificados' },
  openGraph: {
    title: 'Certificações e Referências Técnicas — Aceros',
    description:
      'Documentos do sistema de gestão e referências técnicas aplicáveis aos projetos e fornecimentos.',
    url: '/certificados',
  },
};

export default function CertificadosPage() {
  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Certificações e referências técnicas da Aceros',
            description: 'Documentos do sistema de gestão e referências técnicas aplicáveis aos fornecimentos.',
            url: 'https://aceros.com.br/certificados',
            isPartOf: { '@id': 'https://aceros.com.br/#website' },
            about: { '@id': 'https://aceros.com.br/#organization' },
          }),
        }}
      />
      <CertificatesCta />
      <WhatsAppCta />
    </div>
  );
}
