import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';
import { Button } from '@/components/ui/button';
import { Beaker, Flame, ShieldCheck, Waves, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ligas de Aço Inox — ASTM A297 e Série 300/400',
  description:
    'Ligas trabalhadas pela Aceros: aços inoxidáveis com mais de 11% de cromo, série 300 (304, 304L, 316, 316L), série 400 (420), série 300H (310) e superligas ASTM A297 (HK, HH, HP) para aplicações em alta temperatura, abrasão e corrosão.',
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
  familia: 'Série 300' | 'Série 400' | 'ASTM A297 (Refratária)' | 'Exclusividade Aceros';
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
      'Adição de molibdênio (2-3%) confere resistência excelente a cloretos e ambientes marítimos. Ideal para setores petroquímico, offshore e químico agressivo.',
    aplicacoes: ['Petroquímica', 'Naval', 'Química agressiva'],
  },
  {
    nome: 'AISI 310',
    familia: 'Série 300',
    descricao:
      'Alto teor de cromo (25%) e níquel (20%) para máxima resistência à oxidação e fluência em altas temperaturas contínuas (até ~1.100 °C).',
    aplicacoes: ['Fornos de tratamento térmico', 'Componentes siderúrgicos'],
  },
  {
    nome: 'AISI 420',
    familia: 'Série 400',
    descricao:
      'Aço inox martensítico endurecível por têmpera. Alta dureza e resistência mecânica, com resistência à corrosão moderada. Ideal para componentes que exigem dureza e resistência ao desgaste.',
    aplicacoes: ['Buchas', 'Componentes de precisão', 'Cutelaria industrial'],
  },
  {
    nome: 'ASTM A297 Gr. HK',
    familia: 'ASTM A297 (Refratária)',
    descricao:
      'Liga fundida centrifugada com 24-28% de cromo e 18-22% de níquel. Máxima resistência à fluência e oxidação até 1.150 °C. Utilizada em tubos radiantes e fornos petroquímicos.',
    aplicacoes: ['Tubos radiantes', 'Fornos de reforma', 'Petroquímica'],
    destaque: true,
  },
  {
    nome: 'ASTM A297 Gr. HH',
    familia: 'ASTM A297 (Refratária)',
    descricao:
      'Liga com 24-28% de cromo e 11-14% de níquel. Excelente resistência à fluência a temperaturas de até 1.050 °C. Muito utilizada em fornos de tratamento térmico.',
    aplicacoes: ['Rolos de forno', 'Grelhas de tratamento térmico'],
    destaque: true,
  },
  {
    nome: 'ASTM A297 Gr. HP',
    familia: 'ASTM A297 (Refratária)',
    descricao:
      'Liga com 24-28% de cromo e 33-37% de níquel. Resistência à fluência superior à HK, com estabilidade dimensional em ciclos térmicos severos. Utilizada em tubos de reforma catalítica.',
    aplicacoes: ['Reforma catalítica', 'Produção de hidrogênio', 'Craqueamento'],
    destaque: true,
  },
  {
    nome: 'Cilindro Inox + Tungstênio',
    familia: 'Exclusividade Aceros',
    descricao:
      'Desenvolvimento exclusivo da Aceros: cilindros de aço inoxidável com adição de tungstênio, projetados para resistir a abrasão extrema em equipamentos de mineração e beneficiamento mineral.',
    aplicacoes: ['Mineração', 'Britagem', 'Peneiras de classificação'],
    destaque: true,
  },
];

const familiaIcones = {
  'Série 300': ShieldCheck,
  'Série 400': Zap,
  'ASTM A297 (Refratária)': Flame,
  'Exclusividade Aceros': Beaker,
};

const familiaCores = {
  'Série 300': 'from-blue-500/20 to-blue-500/5 border-blue-500/30',
  'Série 400': 'from-slate-500/20 to-slate-500/5 border-slate-500/30',
  'ASTM A297 (Refratária)': 'from-orange-500/20 to-orange-500/5 border-orange-500/30',
  'Exclusividade Aceros': 'from-accent/30 to-accent/10 border-accent',
};

export default function LigasPage() {
  return (
    <div className="pt-24 pb-20">
      <h1 className="sr-only">Ligas de Aço Inoxidável Aceros — Série 300, 400 e ASTM A297</h1>

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
            Nossas ligas
          </p>
          <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase leading-tight mb-6">
            Aços inoxidáveis com mais de 11% de cromo,{' '}
            <span className="text-accent">selecionados por aplicação</span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Trabalhamos com uma família ampla de ligas de aço inoxidável — série 300, 400 e
            superligas ASTM A297 — para atender cada projeto com o material certo.
            Nossa engenharia especifica a liga ideal com base na temperatura, ambiente químico
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
      <section className="py-16 bg-slate-900 text-white">
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
            e histórico de falhas para recomendar a liga ideal. Sem custo, sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7 h-auto"
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
