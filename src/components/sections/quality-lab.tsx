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
import Image from 'next/image';
import Link from 'next/link';

const capacidadesVisuais = [
  {
    imagem: '/images/imgur/Rb6onto.png',
    alt: 'Equipamento de ultrassom Krautkramer USM 36 utilizado no controle de qualidade da Aceros',
    etiqueta: 'Ensaio não destrutivo',
    titulo: 'Ultrassom em peças fundidas e usinadas',
    descricao: 'Verificação de descontinuidades internas e integridade estrutural sem danificar a peça.',
    enquadramento: 'object-cover scale-[2.35] origin-[78%_50%]',
  },
  {
    imagem: '/images/aceros/drive/spectromax-real.jpg',
    alt: 'Espectrômetro de emissão óptica Spectromax utilizado pela Aceros',
    etiqueta: 'Análise química',
    titulo: 'Composição da liga controlada na fusão',
    descricao: 'Amostras são preparadas e analisadas para orientar as correções necessárias durante o processo.',
  },
  {
    imagem: '/images/aceros/drive/sala-metrologia-real.jpg',
    alt: 'Sala de metrologia climatizada da Aceros',
    etiqueta: 'Metrologia',
    titulo: 'Medição em ambiente climatizado',
    descricao: 'Instrumentos e padrões calibrados e rastreados pela RBC para o controle dimensional de grande porte.',
  },
  {
    imagem: '/images/aceros/drive/durometro-mitutoyo-real.jpg',
    alt: 'Durômetro Mitutoyo utilizado no controle de dureza da Aceros',
    etiqueta: 'Ensaio de dureza',
    titulo: 'Durômetro com controle calibrado',
    descricao: 'Verificação das propriedades mecânicas previstas para cada liga e etapa do processo produtivo.',
    exibirInteira: true,
  },
];

const equipamentos = [
  {
    icone: Beaker,
    nome: 'Spectromax',
    tipo: 'Análise Química',
    descricao: 'Espectrometria de emissão óptica durante a fusão para controlar a composição e ajustar a liga à especificação do projeto.',
  },
  {
    icone: Gauge,
    nome: 'Ultrassom Krautkramer USM 36',
    tipo: 'Ensaio Não Destrutivo',
    descricao: 'Inspeção de peças fundidas e usinadas para detectar descontinuidades internas, inclusões e trincas subsuperficiais.',
  },
  {
    icone: Ruler,
    nome: 'Rollprof (Perfilômetro)',
    tipo: 'Controle de Perfil',
    descricao: 'Medição de perfis de rolos de forno, furnace rolls e sink rolls por profissional com treinamento Drever, Bélgica.',
  },
  {
    icone: ScanLine,
    nome: 'Durômetro',
    tipo: 'Ensaio de Dureza',
    descricao: 'Controle de dureza ao longo da produção para verificar o atendimento às propriedades mecânicas definidas no projeto.',
  },
  {
    icone: Microscope,
    nome: 'Ensaios de Corrosão e Mecânicos',
    tipo: 'Pesquisa e Validação',
    descricao: 'Avaliações para estudar o comportamento das ligas e apoiar melhorias em peças resistentes ao calor, abrasão e corrosão.',
  },
  {
    icone: FileCheck,
    nome: 'Soldagem Qualificada',
    tipo: 'AWS D1.1 e ASME',
    descricao: 'Procedimentos TIG, MIG, MAG e eletrodo revestido com EPS, RQPS e RQSO qualificados e soldadores certificados.',
  },
];

export function QualityLab() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary py-20 text-white">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-accent">
              <Award className="h-4 w-4" />
              Certificações e rastreabilidade
            </div>
            <h2 className="font-headline text-3xl font-bold uppercase leading-tight md:text-5xl">
              Qualidade <span className="text-accent">documentada</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              A certificação do sistema de gestão e a calibração dos equipamentos trabalham juntas para garantir processos controlados e resultados confiáveis.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-2">
            <article className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] shadow-2xl">
              <div className="grid h-full sm:grid-cols-[0.92fr_1.08fr]">
                <Link href="/images/aceros/drive/certificado-iso.pdf" target="_blank" rel="noopener noreferrer" aria-label="Abrir certificado ISO 9001:2015 da Aceros" className="flex min-h-[390px] items-center justify-center bg-white p-4">
                  <Image src="/images/aceros/generated/certificado-iso-2028.png" alt="Certificado ISO 9001:2015 da Aceros válido até novembro de 2028" width={795} height={1124} className="h-full max-h-[420px] w-auto object-contain" />
                </Link>
                <div className="flex flex-col justify-center p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Sistema de gestão</p>
                  <h3 className="mt-3 font-headline text-2xl font-bold">ISO 9001:2015</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">Certificação DQS com acreditação DAkkS e reconhecimento da rede IQNet para o escopo industrial da Aceros.</p>
                  <dl className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
                    <div><dt className="text-slate-400">Certificado</dt><dd className="font-mono font-bold text-white">60300915 QM15</dd></div>
                    <div><dt className="text-slate-400">Validade</dt><dd className="font-bold text-white">19/11/2028</dd></div>
                  </dl>
                  <span className="mt-6 text-sm font-semibold text-accent">Abrir documento completo ↗</span>
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] shadow-2xl">
              <div className="grid h-full sm:grid-cols-[1.08fr_0.92fr]">
                <Link href="/images/aceros/drive/certificado-calibracao-espectrometro.png" target="_blank" rel="noopener noreferrer" aria-label="Abrir certificado de revisão e calibração do espectrômetro" className="flex min-h-[390px] items-center justify-center bg-white p-3">
                  <Image src="/images/aceros/drive/certificado-calibracao-espectrometro.png" alt="Registro de análise química e certificado de calibração número 2044/19 do espectrômetro" width={962} height={717} className="h-auto w-full object-contain" />
                </Link>
                <div className="flex flex-col justify-center p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Equipamento de laboratório</p>
                  <h3 className="mt-3 font-headline text-2xl font-bold">Calibração Spectromax</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">Registro de revisão e calibração nº 2044/19 do espectrômetro de emissão óptica utilizado na análise química das ligas.</p>
                  <p className="mt-5 text-xs leading-5 text-slate-400">Documento histórico recuperado da página técnica anterior da Aceros.</p>
                  <span className="mt-6 text-sm font-semibold text-accent">Ampliar documento ↗</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Laboratório e metrologia</p>
            <h2 className="font-headline text-3xl font-bold text-slate-900 md:text-4xl">O controle de qualidade acontecendo na prática</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Análises químicas, ultrassom, dureza, ensaios de corrosão e ensaios mecânicos apoiam o desenvolvimento de ligas e a validação de cada componente.</p>
          </div>
          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capacidadesVisuais.map(item => (
              <article key={item.titulo} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={item.imagem}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={`${item.enquadramento ?? (item.exibirInteira ? 'object-contain p-2' : 'object-cover')} transition-transform duration-500 ${item.enquadramento ? '' : 'group-hover:scale-105'}`}
                  />
                </div>
                <div className="p-6"><p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{item.etiqueta}</p><h3 className="mt-2 font-headline text-xl font-bold text-slate-900">{item.titulo}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.descricao}</p></div>
              </article>
            ))}
          </div>

          <article className="mx-auto mt-8 grid max-w-7xl overflow-hidden rounded-2xl bg-primary text-white shadow-xl md:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[320px] md:min-h-[390px]">
              <Image
                src="/images/aceros/drive/rollprof-inspecao-real.jpg"
                alt="Perfilômetro Rollprof realizando a medição de um rolo industrial"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Controle de perfil</p>
              <h3 className="mt-3 font-headline text-3xl font-bold">Medição especializada com Rollprof</h3>
              <p className="mt-5 leading-7 text-slate-300">
                A Aceros realiza a medição precisa de perfis em rolos de forno, furnace rolls e sink rolls com profissional treinado e qualificado pela Drever, Bélgica.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div><strong className="block text-2xl text-white">+600</strong><span className="text-sm text-slate-400">rolos controlados</span></div>
                <div><strong className="block text-2xl text-white">RBC</strong><span className="text-sm text-slate-400">padrões rastreados</span></div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Capacidade de inspeção</p>
            <h2 className="font-headline text-3xl font-bold text-slate-900 md:text-4xl">Equipamentos, ensaios e processos qualificados</h2>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {equipamentos.map((eq, i) => (
              <article key={eq.nome} className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-accent hover:shadow-lg" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="mb-4 inline-flex rounded-xl border border-slate-200 bg-slate-50 p-3"><eq.icone className="h-6 w-6 text-accent" /></div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">{eq.tipo}</div>
                <h3 className="font-headline text-lg font-bold text-slate-900">{eq.nome}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{eq.descricao}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-accent"><ShieldCheck className="h-4 w-4" /> Rastreabilidade e documentação</div>
            <h2 className="font-headline text-3xl font-bold text-slate-900 md:text-4xl">Ensaios e documentação conforme o projeto</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Cada fornecimento é acompanhado pela documentação definida para o projeto, que pode incluir análise química, dureza, ultrassom e registros do processo.</p>
            <p className="mt-5 text-sm italic text-slate-500">Documentação técnica organizada para rastreabilidade e auditoria industrial.</p>
          </div>
        </div>
      </section>
    </>
  );
}
