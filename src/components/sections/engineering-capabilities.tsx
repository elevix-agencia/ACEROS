import {
  Boxes,
  Cog,
  Flame,
  Gauge,
  Layers,
  Ruler,
  Sparkles,
  Thermometer,
} from 'lucide-react';

const softwares = [
  { nome: 'SolidWorks', desc: 'Modelagem 3D paramétrica e desenho técnico' },
  { nome: 'AutoCAD', desc: 'Detalhamento e desenhos 2D de produção' },
  { nome: 'Cálculo Estrutural', desc: 'Análises com temperatura de até 800 °C' },
  { nome: 'Elementos Finitos', desc: 'Simulação de tensões e deformações' },
  { nome: 'Navcad / Propcad', desc: 'Hidrodinâmica e propulsão naval (Hidrocomp)' },
  { nome: 'Matematics', desc: 'Cálculos avançados de engenharia' },
];

const parqueMaquinas = [
  { numero: '20', label: 'Tornos mecânicos', sub: 'até 1.700 mm de diâmetro · 12 m entre pontas', icone: Cog },
  { numero: '3', label: 'Tornos CNC', sub: 'até 1.240 mm de diâmetro · 6 m entre pontas', icone: Gauge },
  { numero: '1', label: 'Mandrilhadora CN', sub: 'curso 1.200 × 1.200 × 1.200 mm', icone: Ruler },
  { numero: '2', label: 'Fresadoras CNC', sub: 'curso horizontal até 3.000 mm', icone: Boxes },
  { numero: '400 t', label: 'Prensa hidráulica', sub: 'capacidade máxima', icone: Layers },
  { numero: '63 mm', label: 'Corte plasma CNC', sub: 'espessura máxima de chapa', icone: Sparkles },
];

export function EngineeringCapabilities() {
  return (
    <>
      {/* Softwares de Engenharia */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
              Softwares de Engenharia
            </p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ferramentas de projeto de nível internacional
            </h2>
            <p className="text-lg text-muted-foreground">
              Nossa engenharia trabalha com os principais softwares do mercado para dimensionar,
              simular e validar cada projeto antes da fabricação.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {softwares.map((sw, i) => (
              <div
                key={sw.nome}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:border-accent hover:shadow-lg transition-all animate-fade-in-up"
                style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}
              >
                <h3 className="font-headline text-xl font-bold text-slate-900 mb-2">{sw.nome}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{sw.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parque de Máquinas */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
              Nossa Fábrica
            </p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
              Parque de máquinas para peças de qualquer porte
            </h2>
            <p className="text-lg text-slate-300">
              Da usinagem CNC de precisão milimétrica ao torneamento de peças de até 12 metros —
              nossa fábrica está equipada para fabricar componentes centrifugados e usinados
              de porte industrial.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {parqueMaquinas.map((m, i) => (
              <div
                key={m.label}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center hover:border-accent transition-colors animate-fade-in-up"
                style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'both' }}
              >
                <m.icone className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-bold text-white font-headline mb-1">
                  {m.numero}
                </div>
                <div className="text-white font-semibold text-sm">{m.label}</div>
                <div className="text-slate-400 text-xs mt-2 leading-snug">{m.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-300 max-w-3xl mx-auto text-base">
              Além dos itens acima, contamos com <strong className="text-white">3 fresadoras convencionais,
              calandras até 4″, plainas, retíficas, prensas hidráulicas, equipamentos de solda TIG/MIG/MAG
              e eletrodo revestido (EPS, RQPS e RQSO)</strong> e uma linha completa de instrumentos calibrados
              RBC para garantir precisão e confiança em cada peça.
            </p>
          </div>
        </div>
      </section>

      {/* Processo de Centrifugação */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1 text-accent text-sm font-semibold uppercase tracking-wide mb-4">
                <Flame className="h-4 w-4" />
                Nosso processo
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Fundição por Centrifugação de aço a{' '}
                <span className="text-accent">1.500 – 1.630 °C</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                A centrifugação é o processo de fabricação em que o aço líquido, a temperaturas
                entre 1.500 e 1.630 °C, é vazado em uma matriz de aço baixo carbono (coquilha)
                pré-aquecida e em rotação. A força centrífuga expulsa o metal contra as paredes
                da matriz, formando peças tubulares com diâmetros interno e externo perfeitamente
                concêntricos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                O resultado é uma microestrutura densa, livre de porosidade e com controle
                dimensional preciso — muito superior a processos de fundição convencionais.
                Depois da centrifugação, cada peça passa por beneficiamento térmico
                (solubilização e envelhecimento) para atingir as propriedades finais exigidas.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    Temperatura de vazamento
                  </div>
                  <div className="text-2xl font-headline font-bold text-slate-900">1.500 – 1.630 °C</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Norma aplicada</div>
                  <div className="text-2xl font-headline font-bold text-slate-900">ASTM A297</div>
                </div>
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/aceros/tubos/tubo-aco-inox-bruto-aceros-01.jpg"
                alt="Tubo centrifugado bruto — resultado do processo de fundição"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs uppercase tracking-widest text-accent mb-1">Resultado</div>
                <div className="text-lg font-bold">Tubo centrifugado bruto</div>
                <div className="text-sm text-slate-200 mt-1">Pronto para usinagem CNC</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
