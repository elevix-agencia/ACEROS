import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de Privacidade da Aceros. Tratamento de dados pessoais conforme a LGPD (Lei nº 13.709/2018).',
  alternates: { canonical: '/politica-de-privacidade' },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <main className="bg-[#f3f4f6]">
      <header className="bg-[#07121e] py-14 text-white sm:py-16">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#ef7b21]">
            Transparência e segurança
          </p>
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Tratamento de dados pessoais conforme a LGPD (Lei nº 13.709/2018).
          </p>
        </div>
      </header>

      <article className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-4xl border-t-4 border-[#ef7b21] bg-white px-6 py-10 shadow-[0_20px_50px_rgba(7,18,30,.10)] sm:px-10 sm:py-12 lg:px-14">
          <div className="prose prose-slate max-w-none space-y-5 text-base leading-8 text-slate-700">
        <p>
          Última atualização: setembro de 2026
        </p>
        <p>
          Esta Política de Privacidade explica como a Aceros trata os dados pessoais dos usuários que acessam nosso site e preenchem nossos formulários. Ao utilizar o site, você declara estar ciente das condições descritas abaixo.
        </p>

        <h2 className="mt-10 mb-4 border-l-4 border-[#ef7b21] pl-4 font-headline text-2xl font-bold text-[#07121e]">
          1. Quem somos
        </h2>
        <p>
          A Aceros — Aços Centrifugados é a divisão de aços inoxidáveis do Grupo Metalúrgica Daniela, inscrita no CNPJ nº 29.506.517/0001-39, com endereço comercial na Rua Hans Oersted, 20–118, Cidade Monções, São Paulo/SP, CEP 04575-010. A Aceros atua como controladora dos dados pessoais tratados, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
        </p>

        <h2 className="mt-10 mb-4 border-l-4 border-[#ef7b21] pl-4 font-headline text-2xl font-bold text-[#07121e]">
          2. Quais dados coletamos
        </h2>
        <p>Coletamos apenas os dados necessários para atender às suas solicitações:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Dados que você fornece:</strong> nome completo, empresa, telefone/WhatsApp, e-mail, cidade/UF, produto, liga ou material, dimensões, quantidade, prazo, mensagem e eventual desenho técnico anexado.
          </li>
          <li>
            <strong>Dados de navegação coletados automaticamente:</strong> endereço IP, tipo de dispositivo e navegador, páginas visitadas e tempo de permanência, obtidos por meio de cookies e ferramentas de análise (como o Google Analytics).
          </li>
        </ul>
        <p>Não coletamos dados pessoais sensíveis nem dados de crianças e adolescentes.</p>

        <h2 className="mt-10 mb-4 border-l-4 border-[#ef7b21] pl-4 font-headline text-2xl font-bold text-[#07121e]">
          3. Para que usamos seus dados
        </h2>
        <p>Utilizamos seus dados para as seguintes finalidades:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Responder às solicitações de orçamento e contato comercial.</li>
          <li>Enviar propostas e informações técnicas e comerciais relacionadas aos produtos.</li>
          <li>Entrar em contato por telefone, WhatsApp ou e-mail sobre o seu pedido.</li>
          <li>Melhorar a experiência de navegação e o desempenho do site.</li>
          <li>Mensurar a eficácia das nossas campanhas de marketing e anúncios online.</li>
        </ul>

        <h2 className="mt-10 mb-4 border-l-4 border-[#ef7b21] pl-4 font-headline text-2xl font-bold text-[#07121e]">
          4. Base legal
        </h2>
        <p>O tratamento dos seus dados se fundamenta nas seguintes bases legais da LGPD:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Procedimentos preliminares a um contrato (art. 7º, V):</strong> quando você solicita um orçamento a seu pedido.
          </li>
          <li>
            <strong>Consentimento (art. 7º, I):</strong> ao preencher e enviar o formulário e ao aceitar os cookies.
          </li>
          <li>
            <strong>Legítimo interesse (art. 7º, IX):</strong> para melhorar nossos serviços e comunicações, sempre respeitando seus direitos.
          </li>
        </ul>

        <h2 className="mt-10 mb-4 border-l-4 border-[#ef7b21] pl-4 font-headline text-2xl font-bold text-[#07121e]">
          5. Cookies e tecnologias de rastreamento
        </h2>
        <p>
          Nosso site utiliza cookies, que são pequenos arquivos armazenados no seu dispositivo para lembrar preferências e, quando autorizado, medir o uso do site. Utilizamos cookies essenciais e podemos utilizar ferramentas de análise e marketing configuradas por meio do Google Tag Manager. Cookies opcionais só são ativados após sua autorização. Você pode aceitar, recusar ou alterar sua escolha a qualquer momento em “Preferências de cookies”, no rodapé do site.
        </p>

        <h2 className="mt-10 mb-4 border-l-4 border-[#ef7b21] pl-4 font-headline text-2xl font-bold text-[#07121e]">
          6. Compartilhamento de dados
        </h2>
        <p>A Aceros não vende nem comercializa seus dados pessoais. Podemos compartilhar dados apenas com:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provedores de tecnologia que operam o site, o e-mail e as ferramentas de análise e anúncios (como o Google), estritamente para as finalidades aqui descritas.</li>
          <li>Autoridades públicas, quando exigido por lei ou ordem judicial.</li>
        </ul>
        <p>Esses provedores estão sujeitos às respectivas obrigações contratuais e legais de privacidade e segurança.</p>

        <h2 className="mt-10 mb-4 border-l-4 border-[#ef7b21] pl-4 font-headline text-2xl font-bold text-[#07121e]">
          7. Por quanto tempo guardamos seus dados
        </h2>
        <p>
          Guardamos seus dados apenas pelo tempo necessário para atender à sua solicitação e cumprir obrigações legais. Depois desse período, os dados são eliminados ou anonimizados de forma segura.
        </p>

        <h2 className="mt-10 mb-4 border-l-4 border-[#ef7b21] pl-4 font-headline text-2xl font-bold text-[#07121e]">
          8. Segurança
        </h2>
        <p>
          Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda, alteração ou divulgação indevida. Ainda assim, nenhum sistema é totalmente imune, e você também deve zelar pela segurança das suas informações.
        </p>

        <h2 className="mt-10 mb-4 border-l-4 border-[#ef7b21] pl-4 font-headline text-2xl font-bold text-[#07121e]">
          9. Seus direitos
        </h2>
        <p>Nos termos do art. 18 da LGPD, você tem o direito de:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confirmar a existência de tratamento e acessar seus dados.</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
          <li>Solicitar a anonimização, o bloqueio ou a eliminação de dados desnecessários.</li>
          <li>Solicitar a portabilidade dos dados.</li>
          <li>Revogar o consentimento a qualquer momento.</li>
          <li>Ser informado sobre com quem seus dados foram compartilhados.</li>
          <li>Ser informado sobre a possibilidade de não fornecer consentimento e sobre as consequências dessa escolha.</li>
          <li>Opor-se ao tratamento realizado em desconformidade com a LGPD.</li>
          <li>Solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado, quando aplicável.</li>
        </ul>

        <h2 className="mt-10 mb-4 border-l-4 border-[#ef7b21] pl-4 font-headline text-2xl font-bold text-[#07121e]">
          10. Como exercer seus direitos
        </h2>
        <p>
          Para exercer seus direitos ou tirar dúvidas sobre esta Política, entre em contato pelo e-mail{' '}
          <a className="font-semibold text-[#07121e] underline decoration-[#ef7b21] underline-offset-4" href="mailto:vendas@aceros.com.br">vendas@aceros.com.br</a>. O pedido será encaminhado ao responsável pelo tratamento de dados e respondido conforme os prazos aplicáveis.
        </p>

        <h2 className="mt-10 mb-4 border-l-4 border-[#ef7b21] pl-4 font-headline text-2xl font-bold text-[#07121e]">
          11. Alterações desta Política
        </h2>
        <p>
          Esta Política pode ser atualizada a qualquer momento para refletir mudanças legais ou em nossos processos. A versão vigente estará sempre publicada nesta página, com a data da última atualização.
        </p>

        <h2 className="mt-10 mb-4 border-l-4 border-[#ef7b21] pl-4 font-headline text-2xl font-bold text-[#07121e]">
          12. Legislação e foro
        </h2>
        <p>
          Esta Política é regida pela legislação brasileira. Fica eleito o foro da comarca de São Paulo/SP para dirimir eventuais controvérsias, salvo disposição legal em contrário.
        </p>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8 text-sm text-slate-500">
            <p>Última atualização: setembro de 2026</p>
          </div>
        </div>
      </article>
    </main>
  );
}
