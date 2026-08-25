'use client';

import { Award, Factory, Flame, Layers, ShieldCheck, Sparkles } from 'lucide-react';

const stats = [
  { number: '1999', label: 'Grupo Daniela desde', sub: 'Aceros como divisão de inox desde 2015' },
  { number: 'ASTM', label: 'A297', sub: 'ligas HK, HH, HP e superligas' },
  { number: '3', label: 'países atendidos', sub: 'Portugal, EUA e Itália' },
  { number: '100%', label: 'sob medida', sub: 'projetos por desenho técnico' },
];

const differenciais = [
  {
    icon: Flame,
    title: 'Aços refratários de alta temperatura',
    description:
      'Peças fabricadas em ligas que resistem a temperaturas extremas — ideais para fornos, sink rolls, furnace rolls e tubos radiantes.',
  },
  {
    icon: Layers,
    title: 'Buchas de elevada dureza',
    description:
      'Especialistas em buchas centrifugadas com desempenho superior em aplicações que exigem tolerância dimensional e resistência mecânica.',
  },
  {
    icon: Sparkles,
    title: 'Resistência à abrasão extrema',
    description:
      'Peças cilindros de aço inoxidável com adição de tungstênio — exclusividade Aceros para o setor de mineração.',
  },
];

const certifications = [
  {
    icon: Award,
    title: 'ISO 9001:2015',
    description:
      'Certificado nº 60300915 QM15 — emitido pela DQS GmbH (Alemanha) com acreditação DAkkS e IQNET. Válido até novembro/2028.',
  },
  {
    icon: ShieldCheck,
    title: 'Normas ASME e AWS',
    description:
      'Procedimentos de soldagem qualificados (EPS, RQPS e RQSO) conforme normas internacionais reconhecidas.',
  },
  {
    icon: Factory,
    title: 'Laboratório próprio',
    description:
      'Análise química por espectrometria, ensaio de dureza e ultrassom realizados internamente — controle total de qualidade.',
  },
];

export function TrustSignals() {
  return (
    <section className="bg-slate-900 text-white py-20 sm:py-28" id="credibilidade">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
            Por que grandes indústrias escolhem a Aceros
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto">
            Especialistas em aços centrifugados que resistem onde os aços comuns falham
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-accent transition-colors animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-accent font-headline mb-2">
                {stat.number}
              </div>
              <div className="text-slate-200 font-semibold">{stat.label}</div>
              <div className="text-slate-400 text-sm mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1 text-accent text-sm font-semibold uppercase tracking-wide mb-3">
              <Sparkles className="h-4 w-4" />
              Nossos diferenciais
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold">
              O que fazemos melhor que a concorrência
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differenciais.map((d, i) => (
              <div
                key={d.title}
                className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 hover:border-accent hover:bg-slate-800/60 transition-all animate-fade-in-up"
                style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: 'both' }}
              >
                <d.icon className="h-9 w-9 text-accent mb-3" />
                <h4 className="font-headline text-lg font-bold mb-2">{d.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1 text-accent text-sm font-semibold uppercase tracking-wide mb-3">
              <ShieldCheck className="h-4 w-4" />
              Certificações e Qualidade
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold">
              Qualidade validada por normas internacionais
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-accent hover:bg-slate-800/60 transition-all animate-fade-in-up"
                style={{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: 'both' }}
              >
                <cert.icon className="h-8 w-8 text-accent mb-3" />
                <h4 className="font-headline text-lg font-bold mb-2">{cert.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            Cada peça sai da nossa fábrica com{' '}
            <span className="text-white font-semibold">
              rastreabilidade total, laudo metalúrgico e ensaios não destrutivos
            </span>
            . É por isso que somos referência em componentes centrifugados de alto desempenho para{' '}
            <span className="text-white font-semibold">mineração, tratamento térmico, setor naval e siderurgia</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
