'use client';

import { Award, Factory, Globe, ShieldCheck, Users, Zap } from 'lucide-react';

const stats = [
  { number: '25+', label: 'anos de mercado', sub: 'desde 1999' },
  { number: '20', label: 'tornos mecânicos', sub: 'até 12m entre pontas' },
  { number: '5', label: 'CNCs de precisão', sub: 'tornos e fresadoras' },
  { number: '1.500+', label: 'peças fabricadas', sub: 'sob medida por ano' },
];

const certifications = [
  {
    icon: Award,
    title: 'ISO 9001:2015',
    description: 'Gestão da Qualidade certificada e revisada em 2019',
  },
  {
    icon: ShieldCheck,
    title: 'ABS Certified',
    description: 'Aprovado pelo American Bureau of Shipping para setor naval',
  },
  {
    icon: ShieldCheck,
    title: 'AWS D1.1 & ASME',
    description: 'Procedimentos de soldagem qualificados EPS, RQPS e RQSO',
  },
  {
    icon: ShieldCheck,
    title: 'RBNA / RINA',
    description: 'Homologado por sociedades classificadoras internacionais',
  },
];

const clients = [
  { name: 'Vale', region: 'Brasil — Mineração' },
  { name: 'Rolls Royce Marine', region: 'Finlândia — Propulsão Naval' },
  { name: 'Kawasaki Heavy Industries', region: 'Japão — Engenharia Pesada' },
  { name: 'Wärtsilä', region: 'Finlândia — Sistemas Marinhos' },
  { name: 'Flowserve', region: 'Alemanha — Válvulas Industriais' },
  { name: 'Drever / Efco / Danieli', region: 'Fornos Siderúrgicos' },
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
            Capacidade produtiva, qualificação técnica e clientes de referência mundial
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-accent transition-colors animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-accent font-headline mb-2">
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
              <ShieldCheck className="h-4 w-4" />
              Certificações
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold">
              Qualidade validada por normas internacionais
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-accent hover:bg-slate-800/60 transition-all animate-fade-in-up"
                style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: 'both' }}
              >
                <cert.icon className="h-8 w-8 text-accent mb-3" />
                <h4 className="font-headline text-lg font-bold mb-2">{cert.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1 text-accent text-sm font-semibold uppercase tracking-wide mb-3">
              <Globe className="h-4 w-4" />
              Referências no mercado
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold">
              Fornecemos para gigantes globais da indústria
            </h3>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
              A Metalúrgica Daniela — grupo do qual a Aceros faz parte — atende clientes de referência mundial em siderurgia, mineração, óleo & gás e propulsão naval.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clients.map((client, i) => (
              <div
                key={client.name}
                className="bg-slate-800/40 border border-slate-700 rounded-lg p-4 hover:border-accent transition-colors flex items-center gap-3 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + i * 0.05}s`, animationFillMode: 'both' }}
              >
                <div className="h-10 w-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-white">{client.name}</div>
                  <div className="text-xs text-slate-400">{client.region}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            Cada peça sai da nossa fábrica com{' '}
            <span className="text-white font-semibold">
              rastreabilidade total, laudos metalúrgicos e ensaios não destrutivos
            </span>
            . É por isso que somos referência em componentes centrifugados de alto desempenho no Brasil.
          </p>
        </div>
      </div>
    </section>
  );
}
