
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Aceros',
  description: 'Conheça nossa política de privacidade e como tratamos seus dados pessoais de acordo com a LGPD.',
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
      <h1 className="font-headline text-4xl font-bold mb-8 uppercase tracking-tight text-slate-900">Política de Privacidade</h1>
      
      <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
        <p>
          A Aceros tem o compromisso de proteger a sua privacidade. Esta Política de Privacidade explica como coletamos, usamos e protegemos as suas informações pessoais ao utilizar nossos serviços e website.
        </p>

        <h2 className="font-headline text-2xl font-bold mt-10 mb-4 text-slate-900">1. Coleta de Dados</h2>
        <p>
          Ao solicitar um orçamento ou entrar em contato conosco através de nossos formulários de landing pages, coletamos as seguintes informações:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Nome completo</li>
          <li>Nome da empresa</li>
          <li>E-mail corporativo</li>
          <li>Telefone / WhatsApp</li>
          <li>Cidade / UF</li>
        </ul>

        <h2 className="font-headline text-2xl font-bold mt-10 mb-4 text-slate-900">2. Finalidade do Tratamento de Dados</h2>
        <p>
          Os dados coletados são utilizados exclusivamente para as seguintes finalidades comerciais:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Elaboração e envio de propostas comerciais e orçamentos solicitados.</li>
          <li>Retorno de contato para esclarecimento de dúvidas técnicas ou comerciais.</li>
          <li>Envio de informações relevantes sobre nossos produtos e serviços (quando autorizado).</li>
        </ul>

        <h2 className="font-headline text-2xl font-bold mt-10 mb-4 text-slate-900">3. Base Legal e LGPD</h2>
        <p>
          Realizamos o tratamento de seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD). O tratamento ocorre mediante o seu consentimento ao preencher nossos formulários.
        </p>

        <h2 className="font-headline text-2xl font-bold mt-10 mb-4 text-slate-900">4. Armazenamento e Segurança</h2>
        <p>
          Seus dados são armazenados em servidores seguros e protegidos por medidas técnicas e administrativas para evitar acessos não autorizados ou uso indevido. Não compartilhamos seus dados com terceiros para fins de marketing.
        </p>

        <h2 className="font-headline text-2xl font-bold mt-10 mb-4 text-slate-900">5. Seus Direitos</h2>
        <p>
          Você tem o direito de solicitar, a qualquer momento, o acesso, correção ou exclusão de seus dados pessoais de nossa base. Para isso, entre em contato através do e-mail: <span className="font-bold">vendas@aceros.com.br</span>.
        </p>

        <h2 className="font-headline text-2xl font-bold mt-10 mb-4 text-slate-900">6. Alterações nesta Política</h2>
        <p>
          Esta política pode ser atualizada periodicamente. Recomendamos a revisão desta página para estar sempre informado sobre como protegemos suas informações.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t text-sm text-slate-500">
        <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
      </div>
    </div>
  );
}
