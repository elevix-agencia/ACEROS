
import type { Metadata } from 'next';
import './globals.css';
import { AppProviders } from './providers';
import { CookieConsent } from '@/components/layout/cookie-consent';

const siteUrl = 'https://aceros.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aceros — Aços Centrifugados Sob Medida | Fabricação Industrial',
    template: '%s | Aceros',
  },
  description:
    'Fabricamos peças em aços inoxidáveis e superligas por centrifugação (ASTM A297) sob medida para siderurgia, mineração, petroquímica e tratamento térmico. Solicite orçamento.',
  keywords: [
    'aços centrifugados',
    'aço inox',
    'centrifugação',
    'ASTM A297',
    'sink roll',
    'furnace roll',
    'tubos de aço inox',
    'buchas de aço inox',
    'fundição centrifugada',
    'ligas especiais',
    'metalúrgica daniela',
    'aceros',
  ],
  authors: [{ name: 'Aceros Centrifugados' }],
  creator: 'Aceros Centrifugados LTDA',
  publisher: 'Aceros Centrifugados LTDA',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Aceros',
    title: 'Aceros — Aços Centrifugados Sob Medida | Fabricação Industrial',
    description:
      'Fabricamos peças em aços inoxidáveis e superligas por centrifugação (ASTM A297) sob medida para siderurgia, mineração, petroquímica e tratamento térmico.',
    images: [
      {
        url: '/images/imgur/OBD0nJ0.png',
        width: 1024,
        height: 1024,
        alt: 'Aceros — Aços Centrifugados',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aceros — Aços Centrifugados Sob Medida',
    description:
      'Fabricação sob medida de aços inoxidáveis por centrifugação (ASTM A297).',
    images: ['/images/imgur/OBD0nJ0.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aceros Centrifugados LTDA',
  legalName: 'Aceros Centrifugados LTDA',
  url: siteUrl,
  logo: `${siteUrl}/images/imgur/OBD0nJ0.png`,
  taxID: '29.506.517/0001-39',
  description:
    'Divisão de aços inoxidáveis do Grupo Metalúrgica Daniela. Fabricação sob medida de tubos, buchas e componentes centrifugados em ligas especiais (ASTM A297).',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Hans Oersted, 20-118',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '04575-010',
    addressCountry: 'BR',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
  parentOrganization: {
    '@type': 'Organization',
    name: 'Metalúrgica Daniela',
    url: 'https://metalurgicadaniela.com.br',
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <AppProviders>
          {children}
          <CookieConsent />
        </AppProviders>
      </body>
    </html>
  );
}
