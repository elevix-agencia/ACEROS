import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';
import { Button } from '@/components/ui/button';
import { Beaker, Flame, ShieldCheck, Waves, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ligas de Aço Inox — ASTM A297 e Série 300/400',
  description:
    'Ligas trabalhadas pela Aceros: aços inoxidáveis das séries 300 e 400 e graus ASTM A297 para componentes industriais fabricados conforme o projeto.',
  alternates: { canonical: '/ligas' },
  openGraph: {
    title: 'Ligas de Aço Inox — Aceros Centrifugados',
    description:
      'Aços inoxidáveis e ligas resistentes ao calor, abrasão e corrosão. Série 300, 400 e ASTM A297 para aplicações industriais severas.',
    url: '/ligas',
  },
};

type Liga = {
  nome: string;
  familia: 'Série 300' | 'Série 400' | 'ASTM A297 (Refratária)' | 'Solução especial';
  descricao: string;
  aplicacoes: string[];
  destaque?: boolean;
};

const ligas: Liga[] = [
  {
    nome: 'AISI 304 / 304L',
    familia: 'Série 300',
    descricao:
      'Aço inoxidável austenítico com cromo (18%) e níquel (8%). Boa resistência à corrosão em ambientes atmosféricos, químicos leves e alimentícios. Versão L com baixo teor de carbono para melhor soldabilidade.',
    aplicacoes: ['Indústria química', 'Alimentícia', 'Estruturas'],
  },
  {
    nome: 'AISI 316 / 316L',
    familia: 'Série 300',
    descricao:
      'A adição de molibdênio contribui para a resistência à corrosão em determinados ambientes com cloretos. A aplicação deve ser avaliada conforme as condições do projeto.',
    aplicacoes: ['Petroquímica', 'Naval', 'Química agressiva'],
  },
  {
    nome: 'AISI 310',
    familia: 'Série 300',
    descricao:
      'Aço inoxidável austenítico com teores elevados de cromo e níquel, utilizado em aplicações que exigem avaliação de oxidação e fluência em alta temperatura.',
    aplicacoes: ['Fornos de tratamento térmico', 'Componentes siderúrgicos'],
  },
  {
    nome: 'AISI 420',
    familia: 'Série 400',
    descricao:
      'Aço inoxidável martensítico endurecível por têmpera, empregado em componentes cujo projeto exige dureza, resistência mecânica e resistência à corrosão moderada.',
    aplicacoes: ['Buchas', 'Componentes de precisão', 'Cutelaria industrial'],
  },
  {
    nome: 'ASTM A297 Gr. HK',
    familia: 'ASTM A297 (Refratária)',
    descricao:
      'Grau de aço fundido resistente ao calor, utilizado em componentes sujeitos à fluência e oxidação. Composição, temperatura e aplicação devem ser confirmadas na especificação do projeto.',
    aplicacoes: ['Tubos radiantes', 'Fornos de reforma', 'Petroquímica'],
    destaque: true,
  },
  {
    nome: 'ASTM A297 Gr. HH',
    familia: 'ASTM A297 (Refratária)',
    descricao:
      'Grau de aço fundido resistente ao calor, aplicado em componentes para fornos e tratamento térmico conforme temperatura, atmosfera e solicitação mecânica.',
    aplicacoes: ['Rolos de forno', 'Grelhas de tratamento térmico'],
    destaque: true,
  },
  {
    nome: 'ASTM A297 Gr. HP',
    familia: 'ASTM A297 (Refratária)',
    descricao:
      'Grau de aço fundido resistente ao calor, usado em aplicações que demandam avaliação de fluência, oxidação e estabilidade dimensional em ciclos térmicos.',
    aplicacoes: ['Reforma catalítica', 'Produção de hidrogênio', 'Craqueamento'],
    destaque: true,
  },
  {
    nome: 'Cilindro Inox + Tungstênio',
    familia: 'Solução especial',
    descricao:
      'Cilindros de aço inoxidável com adição de tungstênio, desenvolvidos conforme o projeto para aplicações sujeitas à abrasão em mineração e beneficiamento mineral.',
    aplicacoes: ['Mineração', 'Britagem', 'Peneiras de classificação'],
    destaque: true,
  },
];

const familiaIcones = {
  'Série 300': ShieldCheck,
  'Série 400': Zap,
  'ASTM A297 (Refratária)': Flame,
  'Solução especial': Beaker,
};

const familiaCores = {
  'Série 300': 'from-primary/20 to-primary/5 border-primary/30',
  'Série 400': 'from-slate-500/20 to-slate-500/5 border-slate-500/30',
  'ASTM A297 (Refratária)': 'from-orange-500/20 to-orange-500/5 border-orange-500/30',
  'Solução especial': 'from-accent/30 to-accent/10 border-accent',
};

export default function LigasPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Ligas trabalhadas pela Aceros',
    itemListElement: ligas.map((liga, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: liga.nome,
      description: liga.descricao,
    })),
  };

  return (
    <div className="pt-24 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
            Nossas ligas
          </p>
          <h1 className="font-headline text-3xl md:text-5xl font-bold uppercase leading-tight mb-6">
            Aços inoxidáveis e ligas resistentes ao calor,{' '}
            <span className="text-accent">selecionados por aplicação</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Trabalhamos com uma família ampla de ligas de aço inoxidável — série 300, 400 e
            graus ASTM A297 — para atender às condições informadas em cada projeto.
            Nossa engenharia avalia a liga com base na temperatura, no ambiente químico
            e regime de trabalho da sua planta.
          </p>
        </div>
      </section>

      {/* Grid de ligas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {ligas.map((liga, i) => {
              const Icone = familiaIcones[liga.familia];
              return (
                <article
                  key={liga.nome}
                  className={`relative bg-gradient-to-br ${familiaCores[liga.familia]} border-2 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all animate-fade-in-up ${liga.destaque ? 'ring-2 ring-accent/40' : ''}`}
                  style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}
                >
                  {liga.destaque && (
                    <span className="absolute -top-3 right-6 bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Destaque
                    </span>
                  )}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm flex-shrink-0">
                      <Icone className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-600 font-semibold uppercase tracking-wide mb-1">
                        {liga.familia}
                      </div>
                      <h3 className="font-headline text-xl md:text-2xl font-bold text-slate-900">
                        {liga.nome}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">{liga.descricao}</p>
                  <div className="flex flex-wrap gap-2">
                    {liga.aplicacoes.map((app) => (
                      <span
                        key={app}
                        className="bg-white/60 border border-slate-300 rounded-full px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA técnico */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1 text-accent text-sm font-semibold uppercase tracking-wide mb-4">
            <Waves className="h-4 w-4" />
            Consultoria de engenharia
          </div>
          <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">
            Não sabe qual liga escolher para sua aplicação?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Nossa engenharia analisa temperatura de trabalho, ambiente químico, ciclos térmicos
            e histórico de operação para orientar a seleção do material conforme o projeto.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-auto bg-[#b54b00] px-10 py-7 text-lg text-white hover:bg-[#963e00]"
            >
              <Link href="/contato">Falar com engenheiro</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-10 py-7 h-auto"
            >
              <Link href="/produtos">Ver catálogo de produtos</Link>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppCta />
    </div>
  );
}
