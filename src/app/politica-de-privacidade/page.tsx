import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Aceros',
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
    <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
      <h1 className="font-headline text-4xl font-bold mb-4 uppercase tracking-tight text-slate-900">
        Política de Privacidade
      </h1>
      <p className="text-slate-600 mb-8">
        Tratamento de dados pessoais conforme a LGPD (Lei nº 13.709/2018).
      </p>

      <div className="prose prose-slate max-w-none space-y-5 text-slate-700 leading-relaxed">
        <p>
          Última atualização: agosto de 2026
        </p>
        <p>
          Esta Política de Privacidade explica como a Aceros trata os dados pessoais dos usuários que acessam nosso site e preenchem nossos formulários. Ao utilizar o site, você declara estar ciente das condições descritas abaixo.
        </p>

        <h2 className="font-headline text-2xl font-bold mt-10 mb-4 text-slate-900">
          1. Quem somos
        </h2>
        <p>
          A Aceros — Aços Centrifugados é a divisão de aços inoxidáveis do Grupo Metalúrgica Daniela, inscrita no CNPJ nº 29.506.517/0001-39, com sede na Av. Eng. Luiz Carlos Berrini, 1376, Cidade Monções, São Paulo/SP, CEP 04571-000. A Aceros atua como controladora dos dados pessoais tratados, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
        </p>

        <h2 className="font-headline text-2xl font-bold mt-10 mb-4 text-slate-900">
          2. Quais dados coletamos
        </h2>
        <p>Coletamos apenas os dados necessários para atender às suas solicitações:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Dados que você fornece:</strong> nome completo, nome da empresa, telefone/WhatsApp, e-mail, cidade/UF e a mensagem com as especificações do seu projeto.
          </li>
          <li>
            <strong>Dados de navegação coletados automaticamente:</strong> endereço IP, tipo de dispositivo e navegador, páginas visitadas e tempo de permanência, obtidos por meio de cookies e ferramentas de análise (como o Google Analytics).
          </li>
        </ul>
        <p>Não coletamos dados pessoais sensíveis nem dados de crianças e adolescentes.</p>

        <h2 className="font-headline text-2xl font-bold mt-10 mb-4 text-slate-900">
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

        <h2 className="font-headline text-2xl font-bold mt-10 mb-4 text-slate-900">
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

        <h2 className="font-headline text-2xl font-bold mt-10 mb-4 text-slate-900">
          5. Cookies e tecnologias de rastreamento
        </h2>
        <p>
          Nosso site utiliza cookies, que são pequenos arquivos armazenados no seu dispositivo para lembrar preferências e coletar estatísticas de uso. Usamos cookies essenciais (necessários ao funcionamento do site) e cookies de análise e marketing (Google Analytics, Google Ads e Google Tag Manager), que nos ajudam a entender como os visitantes usam o site e a exibir anúncios relevantes. Você pode gerenciar ou bloquear os cookies nas configurações do seu navegador, ciente de que isso pode afetar algumas funcionalidades.
        </p>

        <h2 className="font-headline text-2xl font-bold mt-10 mb-4 text-slate-900">
          6. Compartilhamento de dados
        </h2>
        <p>A Aceros não vende nem comercializa seus dados pessoais. Podemos compartilhar dados apenas com:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provedores de tecnologia que operam o site, o e-mail e as ferramentas de análise e anúncios (como o Google), estritamente para as finalidades aqui descritas.</li>
          <li>Autoridades públicas, quando exigido por lei ou ordem judicial.</li>
        </ul>
        <p>Esses terceiros são obrigados a proteger seus dados e a utilizá-los somente conforme nossas instruções.</p>

        <h2 className="font-headline text-2xl font-bold mt-10 mb-4 text-slate-900">
          7. Por quanto tempo guardamos seus dados
        </h2>
        <p>
          Guardamos seus dados apenas pelo tempo necessário para atender à sua solicitação e cumprir obrigações legais. Depois desse período, os dados são eliminados ou anonimizados de forma segura.
        </p>

        <h2 className="font-headline text-2xl font-bold mt-10 mb-4 text-slate-900">
          8. Segurança
        </h2>
        <p>
          Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda, alteração ou divulgação indevida. Ainda assim, nenhum sistema é totalmente imune, e você também deve zelar pela segurança das suas informações.
        </p>

        <h2 className="font-headline text-2xl font-bold mt-10 mb-4 text-slate-900">
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
        </ul>

        <h2 className="font-headline text-2xl font-bold mt-10 mb-4 text-slate-900">
          10. Como exercer seus direitos
        </h2>
        <p>
          Para exercer seus direitos ou tirar dúvidas sobre esta Política, entre em contato pelo e-mail{' '}
          <span className="font-semibold">privacidade@aceros.com.br</span> ou pelo e-mail comercial{' '}
          <span className="font-semibold">vendas@aceros.com.br</span>. Responderemos no menor prazo possível, conforme a legislação.
        </p>

        <h2 className="font-headline text-2xl font-bold mt-10 mb-4 text-slate-900">
          11. Alterações desta Política
        </h2>
        <p>
          Esta Política pode ser atualizada a qualquer momento para refletir mudanças legais ou em nossos processos. A versão vigente estará sempre publicada nesta página, com a data da última atualização.
        </p>

        <h2 className="font-headline text-2xl font-bold mt-10 mb-4 text-slate-900">
          12. Legislação e foro
        </h2>
        <p>
          Esta Política é regida pela legislação brasileira. Fica eleito o foro da comarca de São Paulo/SP para dirimir eventuais controvérsias, salvo disposição legal em contrário.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t text-sm text-slate-500">
        <p>Última atualização: agosto de 2026</p>
      </div>
    </div>
  );
}
