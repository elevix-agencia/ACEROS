import { Hero } from '@/components/sections/hero';
import { LocationMap } from '@/components/sections/location-map';
import { About } from '@/components/sections/about';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';
import { MainGallery } from '@/components/sections/main-gallery';
import { Sectors } from '@/components/sections/sectors';
import { TrustSignals } from '@/components/sections/trust-signals';

// Clients e ClientLogos removidos: sugeriam relacao com clientes especificos
// que a Aceros nao autoriza divulgar (Petrobras, Vale, Gerdau, etc.).
// A prova social agora fica so em TrustSignals — capacidade, certificacoes
// e diferenciais, sem citar nomes de clientes.

// FAQPage schema na home: alimenta People Also Ask e featured snippets no
// Google para buscas de topo de funil ("o que e aco centrifugado", "para que
// serve centrifugacao de acos"), aumentando CTR organico. Perguntas gerais
// de setor, sem repetir as FAQs especificas das paginas de produto.
const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que são aços centrifugados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aços centrifugados são peças fabricadas pelo processo de fundição por centrifugação, no qual o metal líquido é vertido em um molde rotativo. A força centrífuga empurra o material contra a parede do molde, gerando uma estrutura densa, sem porosidade central e com boa resistência mecânica, ideal para componentes industriais submetidos a alta temperatura, abrasão e corrosão.',
      },
    },
    {
      '@type': 'Question',
      name: 'Para que serve a centrifugação de aços?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A centrifugação é usada para fabricar tubos, buchas, rolos e outros componentes cilíndricos em ligas de alto desempenho (aços inoxidáveis, aços refratários ASTM A297, ligas de níquel). O processo é indicado quando o cliente precisa de peças sob medida, com estrutura densa e livre de defeitos internos, para operar em siderurgia, galvanização, tratamento térmico, mineração e indústria química.',
      },
    },
    {
      '@type': 'Question',
      name: 'Que tipos de peças a Aceros fabrica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Aceros fabrica tubos de aço inox, buchas, sink rolls para linhas de galvanização, rolos de forno para tratamento térmico e peças de fundição centrifugada em geral. Todo o fornecimento é sob medida, conforme desenho técnico do cliente e condição de operação da aplicação.',
      },
    },
    {
      '@type': 'Question',
      name: 'A Aceros trabalha com produtos de prateleira?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. A Aceros é focada em engenharia e fabricação sob medida de componentes de alta liga centrifugados e usinados. O escopo começa pela análise do desenho e das condições de operação; não há catálogo de produtos commodities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Em quais setores a Aceros atua?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Aceros atende siderurgia, mineração, galvanização por imersão a quente, tratamento térmico, indústria química, petroquímica e naval. Também fornece peças para fabricantes de equipamentos (OEMs) que montam fornos, linhas de galvanização e sistemas de alta temperatura.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual o prazo de entrega da Aceros?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O prazo depende do porte do pedido, da liga especificada e da disponibilidade de matéria-prima. Após a análise técnica do desenho, a Aceros emite proposta comercial com prazo confirmado para fabricação e entrega.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <Hero />
      <div className="pt-8 sm:pt-0">
        <About />
      </div>
      <TrustSignals />
      <Sectors />
      <MainGallery />
      <LocationMap />

      <WhatsAppCta />
    </>
  );
}
