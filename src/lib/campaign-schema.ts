type CampaignSchemaInput = {
  path: string;
  name: string;
  description: string;
  image: string;
  applications: Array<{ title: string; description: string }>;
  faq: Array<{ question: string; answer: string }>;
};

const siteUrl = 'https://aceros.com.br';

export function buildCampaignSchema(input: CampaignSchemaInput) {
  const pageUrl = `${siteUrl}${input.path}`;
  const imageUrl = `${siteUrl}${input.image}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: input.name,
        description: input.description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${pageUrl}#service` },
        primaryImageOfPage: { '@type': 'ImageObject', url: imageUrl },
        inLanguage: 'pt-BR',
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: input.name,
        description: input.description,
        serviceType: input.name,
        provider: { '@id': `${siteUrl}/#organization` },
        areaServed: { '@type': 'Country', name: 'Brasil' },
        image: imageUrl,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Aplicações de ${input.name}`,
          itemListElement: input.applications.map((application) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: application.title,
              description: application.description,
            },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: input.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Produtos', item: `${siteUrl}/produtos` },
          { '@type': 'ListItem', position: 3, name: input.name, item: pageUrl },
        ],
      },
    ],
  };
}
