import {
  Award,
  Beaker,
  FileCheck,
  Gauge,
  Microscope,
  Ruler,
  ScanLine,
  ShieldCheck,
} from 'lucide-react';

const equipamentos = [
  {
    icone: Beaker,
    nome: 'Spectromax',
    tipo: 'Análise Química',
    descricao:
      'Análise por espectrometria de emissão óptica realizada durante o processo de fusão. Nosso engenheiro metalúrgico controla a composição da liga em tempo real, corrigindo matéria-prima e sucata para atingir a especificação exata.',
  },
  {
    icone: Gauge,
    nome: 'Ultrassom Krautkramer USM 36',
    tipo: 'Ensaio Não Destrutivo',
    descricao:
      'Equipamento portátil de ultrassom de última geração para inspeção de peças fundidas e usinadas. Detecta descontinuidades internas, inclusões e trincas subsuperficiais sem danificar a peça.',
  },
  {
    icone: Ruler,
    nome: 'Rollprof (Perfilômetro)',
    tipo: 'Controle Dimensional de Perfis',
    descricao:
      'Perfilômetro operado pelo Eng. Daniel Garcia, com treinamento e qualificação Inspetor Drever (Bélgica). Mais de 200 rolos de forno, furnace rolls e sink rolls inspecionados para clientes Drever, Efco e Danieli.',
  },
  {
    icone: ScanLine,
    nome: 'Durômetro',
    tipo: 'Ensaio de Dureza',
    descricao:
      'Ensaios de dureza em toda a linha de produção. Cada peça é testada para garantir que atende às especificações mecânicas do projeto.',
  },
  {
    icone: Microscope,
    nome: 'Sala de Metrologia Climatizada',
    tipo: 'Controle Dimensional',
    descricao:
      'Sala climatizada com centenas de instrumentos de medição calibrados e rastreados pela RBC (Rede Brasileira de Calibração). Controle dimensional de peças de grande porte.',
  },
  {
    icone: FileCheck,
    nome: 'Soldagem Qualificada',
    tipo: 'AWS D1.1 e ASME',
    descricao:
      'Procedimentos de soldagem TIG, MIG, MAG e eletrodo revestido com EPS, RQPS e RQSO qualificados. Todos os soldadores certificados conforme as normas AWS D1.1 e ASME.',
  },
];

export function QualityLab() {
  return (
    <>
      {/* Certificação ISO 9001 destacada */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1 text-accent text-sm font-semibold uppercase tracking-wide mb-4">
                <Award className="h-4 w-4" />
                Certificação Internacional
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase leading-tight mb-6">
                ISO 9001:2015 <span className="text-accent">Certificada</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Nosso Sistema de Gestão da Qualidade é auditado e certificado pela
                <strong className="text-white"> DQS GmbH (Alemanha)</strong>, um dos organismos mais
                respeitados de certificação do mundo, com acreditação <strong className="text-white">DAkkS</strong>{' '}
                e membro da <strong className="text-white">IQNet</strong>.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/5 border border-slate-700 rounded-lg p-4">
                  <div className="text-slate-400 uppercase text-xs mb-1">Certificado</div>
                  <div className="text-white font-mono font-bold">60300915 QM15</div>
                </div>
                <div className="bg-white/5 border border-slate-700 rounded-lg p-4">
                  <div className="text-slate-400 uppercase text-xs mb-1">Válido até</div>
                  <div className="text-white font-bold">19/11/2028</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-6 italic">
                Escopo certificado: fabricação de tubos centrifugados e fundidos estáticos em aço
                inoxidável, ligas resistentes ao calor, à abrasão e superligas; fabricação de
                dispositivos para tratamento térmico, tubos radiantes, grelhas e rolos transportadores.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-accent/20 to-transparent rounded-3xl p-12 border border-accent/30 flex flex-col items-center justify-center text-center">
                <Award className="h-24 w-24 text-accent mb-6" />
                <div className="text-white text-4xl font-headline font-bold mb-2">DQS</div>
                <div className="text-slate-400 text-sm uppercase tracking-widest mb-6">
                  Deutsche Qualitäts Zertifizierung
                </div>
                <div className="flex gap-3 text-xs text-slate-300 flex-wrap justify-center">
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-slate-600">DAkkS</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-slate-600">IQNet</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-slate-600">ISO 9001:2015</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratório Próprio */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
              Laboratório próprio
            </p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Controle de qualidade em todas as etapas
            </h2>
            <p className="text-lg text-muted-foreground">
              Nosso laboratório próprio realiza <strong>análise química</strong>, <strong>ensaio de dureza</strong>{' '}
              e <strong>ultrassom</strong> internamente. Cada peça sai da fábrica com laudo metalúrgico
              completo e rastreabilidade total.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {equipamentos.map((eq, i) => (
              <div
                key={eq.nome}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-accent hover:shadow-lg transition-all animate-fade-in-up"
                style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'both' }}
              >
                <div className="bg-white p-3 rounded-xl inline-flex mb-4 border border-slate-200">
                  <eq.icone className="h-6 w-6 text-accent" />
                </div>
                <div className="text-xs text-accent font-semibold uppercase tracking-wider mb-1">
                  {eq.tipo}
                </div>
                <h3 className="font-headline text-lg font-bold text-slate-900 mb-3">{eq.nome}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{eq.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rastreabilidade */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1 text-accent text-sm font-semibold uppercase tracking-wide mb-4">
              <ShieldCheck className="h-4 w-4" />
              Rastreabilidade Total
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Cada peça sai da fábrica com laudo metalúrgico
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Não fornecemos peça sem documentação. Todo pedido é entregue com{' '}
              <strong>certificado de análise química, ensaio de dureza, laudo de ultrassom</strong>{' '}
              e memorial descritivo do processo — atendendo aos requisitos das normas ABNT, ASTM,
              DIN, AISI e ASME.
            </p>
            <p className="text-slate-500 italic mt-6">
              Documentação técnica pronta para auditoria em plantas industriais críticas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
