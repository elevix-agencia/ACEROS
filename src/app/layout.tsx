
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { AppProviders } from './providers';
import { CookieConsent } from '@/components/layout/cookie-consent';

const siteUrl = 'https://aceros.com.br';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aceros Aços Centrifugados Sob Medida | Fabricação Industrial',
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
    'aceros',
  ],
  authors: [{ name: 'Aceros Centrifugados' }],
  creator: 'Aceros Centrifugados LTDA',
  publisher: 'Aceros Centrifugados LTDA',
  alternates: {
    canonical: '/',
    // Sem hreflang: o site tem seletor de idioma para conveniencia do
    // visitante estrangeiro (indicacao, email direto), mas nao promete SEO
    // internacional. Se um dia rodar Ads fora do Brasil, mover para rotas
    // /en/ /es/ /de/ /it/ dedicadas e reativar hreflang.
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Aceros',
    title: 'Aceros Aços Centrifugados Sob Medida | Fabricação Industrial',
    description:
      'Fabricamos peças em aços inoxidáveis e superligas por centrifugação (ASTM A297) sob medida para siderurgia, mineração, petroquímica e tratamento térmico.',
    images: [
      {
        url: '/images/imgur/OBD0nJ0.png',
        width: 1024,
        height: 1024,
        alt: 'Aceros Aços Centrifugados',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aceros Aços Centrifugados Sob Medida',
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
  '@id': `${siteUrl}/#organization`,
  name: 'Aceros Centrifugados LTDA',
  legalName: 'Aceros Centrifugados LTDA',
  url: siteUrl,
  logo: `${siteUrl}/images/imgur/OBD0nJ0.png`,
  taxID: '29.506.517/0001-39',
  email: 'vendas@aceros.com.br',
  telephone: '+55 11 5555-6551',
  description:
    'Fabricante brasileira de aços inoxidáveis centrifugados. Fabricação sob medida de tubos, buchas e componentes em ligas especiais (ASTM A297).',
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
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: '+55 11 5555-6551',
    email: 'vendas@aceros.com.br',
    areaServed: 'BR',
    availableLanguage: ['Portuguese'],
  },
  sameAs: [],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'Aceros Aços Centrifugados',
  publisher: { '@id': `${siteUrl}/#organization` },
  inLanguage: 'pt-BR',
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
        {/* Google Consent Mode v2 - estado padrao "denied" antes de qualquer
            script do Google carregar. O CookieConsent atualiza para "granted"
            se a usuaria aceitar cookies de analytics/marketing. Garante que
            GTM/GA/Ads respeitem LGPD e nao coletem dados sem consentimento. */}
        <script
          id="google-consent-default"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','functionality_storage':'granted','security_storage':'granted','wait_for_update':500});gtag('set','ads_data_redaction',true);gtag('set','url_passthrough',true);`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased`}>
        <AppProviders>
          {children}
          <CookieConsent />
        </AppProviders>
      </body>
    </html>
  );
}
