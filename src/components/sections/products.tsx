'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cog, Layers, PenTool, Rocket } from 'lucide-react';

// Landing pages destaque (as que vao rodar campanha Google Ads)
type LandingPage = {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  imagemAlt: string;
  bullets: string[];
  href: string;
  icone: typeof Cog;
};

const landingPagesDestaque: LandingPage[] = [
  {
    id: 'tubos',
    titulo: 'Tubos Centrifugados',
    descricao:
      'Tubos de aço inox fabricados por centrifugação em ligas ASTM A297 (HK, HH, HP) e ligas 304, 304L, 316, 316L, 310 e 420. Microestrutura densa, livre de porosidade, com alta resistência mecânica e térmica.',
    imagem: '/images/aceros/tubos/tubo-aco-inox-polido-aceros-05.jpg',
    imagemAlt: 'Tubos de aço inox centrifugados usinados e polidos — fabricação Aceros',
    bullets: [
      'Estágios: bruto, usinado (munhão), polido, misto',
      'Diâmetros, espessuras e comprimentos sob medida',
      'Aplicações: fornos, sink rolls, tubos radiantes',
    ],
    href: '/tubos-de-aco-inox',
    icone: Layers,
  },
  {
    id: 'buchas',
    titulo: 'Buchas de Aço Inox',
    descricao:
      'Buchas centrifugadas em ligas de alta dureza para aplicações industriais severas. Especialistas em buchas para ponta de Sink Roll (linhas de galvanização) e Furnace Roll (rolos de forno).',
    imagem: '/images/aceros/buchas/bucha-aco-inox-aceros-02.jpg',
    imagemAlt: 'Buchas de aço inox usinadas sob medida — fabricação Aceros',
    bullets: [
      'Usinagem CNC de precisão milimétrica',
      'Alta dureza superficial e vida útil prolongada',
      'Aplicações: Sink Roll, Furnace Roll, mancais',
    ],
    href: '/bucha-de-aco-inox',
    icone: Cog,
  },
];

// Catalogo completo Aceros (do catalogo MD, produtos que a Aceros faz de verdade)
type ProdutoCatalogo = {
  titulo: string;
  descricao: string;
  aplicacao: string;
};

const catalogoAceros: ProdutoCatalogo[] = [
  {
    titulo: 'Sink Rolls',
    descricao: 'Rolos centrifugados para linhas de galvanização a quente (potes de zinco).',
    aplicacao: 'Siderurgia · Galvanização',
  },
  {
    titulo: 'Snout (Pote de Zincagem)',
    descricao: 'Componente estrutural para linhas de imersão em zinco fundido.',
    aplicacao: 'Siderurgia · Galvanização',
  },
  {
    titulo: 'Braços de Sink Roll',
    descricao: 'Braços de sustentação para conjuntos de Sink Roll em galvanização.',
    aplicacao: 'Siderurgia · Galvanização',
  },
  {
    titulo: 'Rolos para Fornos de Galvanização',
    descricao: 'Rolos centrifugados com e sem perfil para linhas de galvanização.',
    aplicacao: 'Siderurgia · Tratamento Térmico',
  },
  {
    titulo: 'Rolos para Zincagem',
    descricao: 'Rolos resistentes ao ataque do zinco fundido, alta vida útil.',
    aplicacao: 'Siderurgia · Galvanização',
  },
  {
    titulo: 'Tubos Radiantes',
    descricao: 'Tubos radiantes para fornos de tratamento térmico contínuo.',
    aplicacao: 'Tratamento Térmico',
  },
  {
    titulo: 'Serpentinas de Alta Temperatura',
    descricao: 'Serpentinas fundidas para aplicações em siderurgia primária.',
    aplicacao: 'Siderurgia',
  },
  {
    titulo: 'Espulas Refratárias',
    descricao: 'Espulas em ligas resistentes ao calor para linhas siderúrgicas.',
    aplicacao: 'Siderurgia',
  },
  {
    titulo: 'Garrafas para Mini Alto-Fornos',
    descricao: 'Componentes fundidos para pequenos e médios altos-fornos.',
    aplicacao: 'Guseira · Siderurgia',
  },
  {
    titulo: 'Grelhas Industriais',
    descricao: 'Grelhas centrifugadas para linhas de sinterização e classificação.',
    aplicacao: 'Mineração · Siderurgia',
  },
  {
    titulo: 'Esticadores de Corrente',
    descricao: 'Componentes de precisão para transporte de material em plantas siderúrgicas.',
    aplicacao: 'Siderurgia · Manuseio',
  },
  {
    titulo: 'Rolos Laminadores',
    descricao: 'Rolos para linhas de laminação a quente, projetados sob especificação.',
    aplicacao: 'Siderurgia · Laminação',
  },
  {
    titulo: 'Rolos para Classificação de Minério',
    descricao: 'Rolos para peneiras de classificação de pellets e minério.',
    aplicacao: 'Mineração',
  },
  {
    titulo: 'Cilindros Inox + Tungstênio',
    descricao: 'Exclusividade Aceros: cilindros com adição de tungstênio para abrasão extrema.',
    aplicacao: 'Mineração',
  },
];

export function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Cabecalho */}
        <div className="text-center mb-16 animate-fade-in-up max-w-3xl mx-auto">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
            O que fabricamos
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Peças centrifugadas em aço inoxidável, sob medida
          </h2>
          <p className="text-lg text-muted-foreground">
            Não vendemos commodities de prateleira. Fabricamos componentes de alta liga para
            plantas industriais que operam nos limites de calor, abrasão e corrosão.
          </p>
        </div>

        {/* DESTAQUE: 2 Landing Pages (Tubos e Buchas) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1 text-accent text-sm font-semibold uppercase tracking-wide mb-3">
              <Rocket className="h-4 w-4" />
              Linhas de destaque
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold text-slate-900">
              Nossos carros-chefe
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {landingPagesDestaque.map((lp, i) => (
              <article
                key={lp.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-accent animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <Image
                    src={lp.imagem}
                    alt={lp.imagemAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-accent text-white rounded-full p-3 shadow-lg">
                    <lp.icone className="h-6 w-6" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="font-headline text-2xl md:text-3xl font-bold uppercase leading-tight">
                      {lp.titulo}
                    </h4>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-5">
                  <p className="text-muted-foreground leading-relaxed">{lp.descricao}</p>

                  <ul className="space-y-2">
                    {lp.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-accent font-bold mt-0.5">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    className="w-full group/btn bg-slate-900 text-white hover:bg-accent transition-colors"
                  >
                    <Link href={lp.href} className="inline-flex items-center justify-center gap-2">
                      Ver linha completa
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CATALOGO COMPLETO */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1 text-accent text-sm font-semibold uppercase tracking-wide mb-3">
              <Layers className="h-4 w-4" />
              Catálogo completo
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Além dos tubos e buchas, também fabricamos
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Portfólio completo de peças centrifugadas para siderurgia, mineração, tratamento térmico, naval e guseira.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {catalogoAceros.map((prod, i) => (
              <div
                key={prod.titulo}
                className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-accent hover:shadow-lg transition-all animate-fade-in-up"
                style={{ animationDelay: `${i * 0.04}s`, animationFillMode: 'both' }}
              >
                <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                  {prod.aplicacao}
                </div>
                <h4 className="font-headline text-lg font-bold text-slate-900 mb-2 group-hover:text-accent transition-colors">
                  {prod.titulo}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {prod.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final: Envio de Desenho */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1 text-accent text-sm font-semibold uppercase tracking-wide mb-4">
            <PenTool className="h-4 w-4" />
            Projeto sob desenho
          </div>
          <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">
            Precisa de uma peça que não está no catálogo?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Fabricamos 100% sob desenho técnico. Nossa engenharia analisa o projeto, especifica a
            liga ideal (ASTM A297) e retorna proposta comercial.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7 h-auto"
          >
            <Link href="/contato">Enviar meu desenho técnico</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
