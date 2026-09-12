
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Settings, 
  ShieldCheck, 
  CheckCircle, 
  Users, 
  FileText, 
  PenTool, 
  Factory, 
  Globe, 
  HardHat,
   Thermometer,
  Phone,
  Mail,
  MapPin,
  Send,
  Plus,
  Layers,
  Award,
  Search,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { saveContactMessage } from '@/lib/contact-actions';
import { RelatedSolutions } from '@/components/landing-pages/related-solutions';

export function BuchaInoxClient() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const whatsappNumber = '551155556551';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de um orçamento para Buchas de Aço Inox sob medida.');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.set('source', 'lp-bucha');
    formData.set('product', 'Buchas de aço inox centrifugadas');
    formData.set('privacy', formData.get('privacy') ? 'true' : 'false');

    try {
      const result = await saveContactMessage(formData);
      
      if (result.success) {
        toast({
          title: "Solicitação Recebida!",
          description: "Sua mensagem foi enviada com sucesso. Nossa equipe entrará em contato em breve.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.error);
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Ops! Algo deu errado",
        description: error.message || "Tente enviar novamente ou use o botão do WhatsApp para um atendimento imediato.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-foreground font-body overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-[#07121e] text-white">
        <Image
          src="/images/aceros/buchas/bucha-aco-inox-aceros-02.jpg"
          alt="Bucha de aço inox usinada sob medida, fabricação Aceros"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#07121e_0%,rgba(7,18,30,.94)_42%,rgba(7,18,30,.42)_72%,rgba(7,18,30,.12)_100%)]" />
        <div className="absolute left-0 top-0 h-full w-1 bg-accent" />
        <div className="container relative z-10 mx-auto flex min-h-[calc(100svh-80px)] items-center px-4 py-10 sm:py-16 lg:pb-28 lg:pt-20">
          <div className="w-full max-w-[920px]">
            <div className="mb-5 flex animate-fade-in-up items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-accent sm:mb-7 sm:text-[11px] sm:tracking-[0.24em]">
              <span className="h-px w-10 bg-accent" />
              Fabricação industrial sob medida
            </div>
            <h1
              className="max-w-[900px] animate-fade-in-up text-balance font-headline text-[2rem] font-semibold uppercase leading-[1.08] tracking-[-0.025em] text-white sm:text-[clamp(2.25rem,3.35vw,3.65rem)]"
            >
              Bucha de Aço Inox Fabricada Sob Medida
            </h1>
            <p
              className="mt-5 max-w-[700px] animate-fade-in-up border-l border-accent/80 pl-4 text-[15px] leading-6 text-slate-200 sm:mt-7 sm:pl-5 sm:text-lg sm:leading-8"
            >
              Buchas centrifugadas e usinadas conforme desenho técnico, com liga selecionada para a condição de serviço.
            </p>
            <div
              className="mt-7 flex animate-fade-in-up flex-col gap-3 sm:mt-10 sm:flex-row"
            >
              <Button asChild size="lg" className="h-14 rounded-none bg-accent px-8 text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#cf5f11] sm:h-16">
                <Link href="#form-landing-bucha">Solicitar Orçamento</Link>
              </Button>
              <Link 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="track-whatsapp inline-flex h-14 items-center justify-center gap-2 whitespace-nowrap rounded-none border border-white/35 bg-white/5 px-8 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-[#07121e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-16"
              >
                Falar com a equipe técnica
              </Link>
            </div>
          </div>
        </div>
        
        <div className="relative z-20 hidden border-t border-white/15 bg-[#07121e] lg:block">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300 [&>span]:border-r [&>span]:border-white/10 [&>span]:px-5 [&>span]:py-4 [&>span:last-child]:border-0">
              <span className="flex items-center gap-2"><Settings className="h-5 w-5" /> Fabricação sob medida</span>
              <span className="flex items-center gap-2"><PenTool className="h-5 w-5" /> Conforme desenho técnico</span>
              <span className="flex items-center gap-2"><Globe className="h-5 w-5" /> Atendimento Brasil e exterior</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-5 w-5" /> Controle de qualidade</span>
              <span className="flex items-center gap-2"><Users className="h-5 w-5" /> Equipe especializada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase">Excelência em Componentes Industriais</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A Aceros é a divisão de aços inoxidáveis do grupo <strong>Metalúrgica Daniela</strong>. Não comercializamos produtos commodities ou tubos comuns de prateleira: nossa fábrica produz via <strong>processo de centrifugação</strong> peças de alta liga resistentes a <strong>calor, abrasão e oxidação severa (norma ASTM A297)</strong>, usinadas sob medida para o projeto do cliente.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa engenharia fornece <strong>buchas para ponta de Sink Roll</strong> (rolos para potes de zinco em linhas de galvanização) e componentes para <strong>Rolos de Forno (Furnace Rolls para tratamento térmico)</strong>, usinados conforme o desenho e as condições de trabalho informadas pelo cliente.
            </p>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/aceros/buchas/bucha-aco-inox-aceros-03.jpg"
              alt="Processo de fabricação e usinagem de bucha de aço inox Aceros"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Informações Técnicas */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 uppercase">Especificações Técnicas</h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="p-6 font-semibold">Categoria</th>
                    <th className="p-6 font-semibold">Detalhes Disponíveis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-6 font-bold bg-slate-50/50">Ligas Disponíveis</td>
                    <td className="p-6">Ligas selecionadas conforme a aplicação, incluindo materiais conforme ASTM A297 quando aplicável</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold bg-slate-50/50">Processo Produtivo</td>
                    <td className="p-6">Fundição por Centrifugação ou Estática + Usinagem CNC de Precisão</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold bg-slate-50/50">Aplicações Especiais</td>
                    <td className="p-6">Buchas para ponta de Sink Roll e Rolos de Forno (Furnace Roll)</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold bg-slate-50/50">Dimensões</td>
                    <td className="p-6">Diâmetros e comprimentos sob consulta (Fabricação conforme projeto)</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold bg-slate-50/50">Normas Técnicas</td>
                    <td className="p-6">ABNT, ASTM, DIN, AISI</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold bg-slate-50/50">Inspeção</td>
                    <td className="p-6">Rastreabilidade e ensaios definidos para o fornecimento, incluindo dureza, análise química, ultrassom e líquido penetrante quando aplicáveis</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-6 text-slate-500 italic text-center">Consulte nossa equipe técnica para especificações conforme sua necessidade.</p>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 uppercase">Diferenciais Aceros</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Capacidades técnicas para a fabricação de buchas centrifugadas sob medida.</p>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Award, title: 'Peça de Alta Liga (Não Commodity)', text: 'Fabricação própria por centrifugação + Engenharia de Materiais + Usinagem CNC sob medida.' },
              { icon: Settings, title: 'Fabricação sob medida', text: 'Produção customizada para atender requisitos exatos de montagem.' },
              { icon: ShieldCheck, title: 'Seleção de ligas', text: 'Material definido conforme abrasão, corrosão, temperatura e requisitos mecânicos.' },
              { icon: CheckCircle, title: 'Controle de qualidade', text: 'Inspeções e ensaios definidos conforme os requisitos do fornecimento.' },
              { icon: Users, title: 'Atendimento técnico', text: 'Apoio da equipe de engenharia na análise da aplicação.' },
              { icon: FileText, title: 'Produção conforme projeto', text: 'Fabricação e usinagem orientadas pelo desenho técnico.' },
              { icon: Factory, title: 'Soluções personalizadas', text: 'Desenvolvimento conforme as condições de serviço informadas pelo cliente.' },
              { icon: Globe, title: 'Brasil e exterior', text: 'Atendimento comercial para projetos nacionais e internacionais.' },
              { icon: HardHat, title: 'Aplicações severas', text: 'Componentes desenvolvidos para condições térmicas, mecânicas e químicas específicas.' }
            ].map((item, i) => (
              <Card key={i} className="flex h-full flex-col border-slate-100 transition-shadow hover:shadow-lg">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-xl text-primary mb-4">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="flex min-h-[3.5rem] items-center justify-center text-xl leading-tight">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 text-center text-muted-foreground">
                  {item.text}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="bg-primary py-14 text-white sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase">Principais Aplicações</h2>
            <p className="text-slate-400 mt-4">Aplicações atendidas conforme desenho e requisitos de operação.</p>
          </div>
          <div className="grid grid-cols-2 items-stretch gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: HardHat, label: 'Mineração' },
              { icon: Factory, label: 'Siderurgia' },
              { icon: Layers, label: 'Sink Roll & Pontas' },
              { icon: Thermometer, label: 'Rolos de Forno' },
              { icon: Thermometer, label: 'Tratamento Térmico' },
              { icon: Factory, label: 'Galvanização' },
              { icon: Settings, label: 'Metalurgia' }
            ].map((app, i) => (
              <div key={i} className="flex h-full min-h-[150px] flex-col items-center justify-center gap-4 rounded-2xl bg-white/5 p-6 transition-colors hover:bg-white/10">
                <app.icon className="h-10 w-10 text-accent" />
                <span className="font-semibold text-center">{app.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-16 text-center text-slate-300 max-w-3xl mx-auto">
            Cada projeto é analisado conforme aplicação, desenho técnico, material e requisitos de inspeção informados pelo cliente.
          </p>
        </div>
      </section>

      {/* Galeria */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 uppercase">Galeria de Produtos</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { url: '/images/aceros/buchas/bucha-aco-inox-aceros-01.jpg', alt: 'Bucha de aço inox usinada sob medida da Aceros' },
              { url: '/images/aceros/buchas/bucha-aco-inox-aceros-02.jpg', alt: 'Bucha centrifugada de aço inox para aplicação industrial' },
              { url: '/images/aceros/buchas/bucha-aco-inox-aceros-03.jpg', alt: 'Bucha de aço inox com acabamento e usinagem de alta precisão' },
              { url: '/images/aceros/buchas/bucha-aco-inox-aceros-04.jpg', alt: 'Bucha para ponta de sink roll, fabricação Aceros' },
              { url: '/images/aceros/buchas/bucha-aco-inox-aceros-05.jpg', alt: 'Bucha de aço inox em inspeção dimensional' },
              { url: '/images/aceros/buchas/bucha-aco-inox-aceros-06.jpg', alt: 'Bucha de aço inox pronta para expedição' }
            ].map((img, i) => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <button type="button" aria-label={`Ampliar: ${img.alt}`} className="group relative block aspect-square w-full cursor-pointer overflow-hidden rounded-xl bg-gray-100 text-left shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
                    <Image
                      src={img.url}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      <Search className="h-10 w-10 text-white" />
                    </span>
                    <span className="absolute bottom-0 w-full bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 pt-10 text-sm font-medium leading-snug text-white">
                      {img.alt}
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-4">
                  <DialogHeader>
                    <DialogTitle className="pr-8 text-left text-base">{img.alt}</DialogTitle>
                  </DialogHeader>
                  <div className="relative mt-4 aspect-video w-full">
                    <Image src={img.url} alt={img.alt} fill sizes="(max-width: 896px) 95vw, 896px" className="object-contain" />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Processo (Timeline) */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 uppercase">Nosso Processo</h2>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-slate-200 hidden md:block"></div>
            <div className="space-y-12">
              {[
                { step: '01', title: 'Recebimento do Projeto', desc: 'Análise detalhada dos requisitos fornecidos.' },
                { step: '02', title: 'Análise Técnica', desc: 'Validação de tolerâncias e viabilidade produtiva pela engenharia.' },
                { step: '03', title: 'Definição da Liga', desc: 'Seleção do material conforme as condições de serviço e a norma aplicável.' },
                { step: '04', title: 'Fabricação', desc: 'Geração do blank por centrifugação e usinagem CNC de precisão.' },
                { step: '05', title: 'Controle Dimensional', desc: 'Medição das dimensões e tolerâncias especificadas no desenho.' },
                { step: '06', title: 'Inspeção de Qualidade', desc: 'Ensaios e verificações definidos conforme os requisitos do fornecimento.' },
                { step: '07', title: 'Entrega', desc: 'Expedição protegida conforme as condições definidas na proposta.' }
              ].map((item, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full md:text-right">
                    <div className={`${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'} p-6 bg-white rounded-2xl shadow-md`}>
                      <span className="text-xl font-bold text-[#a94700]">{item.step}</span>
                      <h4 className="text-lg font-bold text-slate-900 mt-2">{item.title}</h4>
                      <p className="text-muted-foreground mt-2">{item.desc}</p>
                    </div>
                  </div>
                  <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#b54b00] font-bold text-white ring-8 ring-slate-50">
                    <Plus className="h-5 w-5" />
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher Aceros */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/aceros/buchas/bucha-aco-inox-aceros-05.jpg"
                alt="Bucha de aço inox, acabamento final e controle da Aceros"
                fill
                sizes="(max-width: 768px) 100vw, 50vw" 
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 mb-8 uppercase">Por que escolher a Aceros</h2>
              <div className="space-y-6">
                {[
                  'Divisão de inoxidáveis do Grupo Metalúrgica Daniela',
                  'Fabricação por centrifugação em ligas ASTM A297, quando aplicável',
                  'Experiência em componentes para Sink Roll e Furnace Roll',
                  'Desenvolvimento de componentes sob medida (não commodities)',
                  'Controle e rastreabilidade conforme os requisitos do fornecimento',
                  'Soluções para aplicações sujeitas a calor, abrasão e corrosão'
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificação ISO 9001:2015 - Selo de Confiança */}
      <section className="relative overflow-hidden bg-primary py-14 text-white sm:py-20">
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
                Nosso Sistema de Gestão da Qualidade é certificado pela <strong className="text-white">DQS GmbH</strong>,
                com acreditação <strong className="text-white">DAkkS</strong> e reconhecimento da rede <strong className="text-white">IQNet</strong>.
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
                Conforme os requisitos do fornecimento, a documentação pode incluir rastreabilidade, laudo metalúrgico,
                ensaios de dureza, análise química e ultrassom.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-accent/20 to-transparent rounded-3xl p-12 border border-accent/30 flex flex-col items-center justify-center text-center">
                <Award className="h-24 w-24 text-accent mb-6" />
                <div className="text-white text-4xl font-headline font-bold mb-2">DQS</div>
                <div className="text-slate-400 text-sm uppercase tracking-widest mb-6">Deutsche Qualitäts Zertifizierung</div>
                <div className="flex gap-3 text-xs text-slate-300">
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-slate-600">DAkkS</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-slate-600">IQNet</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-slate-600">ISO 9001:2015</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Intermediário */}
      <section className="bg-[#b54b00] py-14 text-white sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase mb-6">Precisa de uma Bucha de Aço Inox?</h2>
          <p className="mx-auto mb-10 max-w-3xl text-xl text-white/90">
            Nossa equipe técnica avalia o desenho e as condições de serviço para orientar os próximos passos do projeto.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-black px-12 py-8 text-xl">
              <Link href="#form-landing-bucha">Solicitar Cotação</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-12 py-8 text-xl">
              <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="track-whatsapp">
                Enviar Projeto via WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <RelatedSolutions currentPath="/bucha-de-aco-inox" />

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 uppercase">Perguntas Frequentes</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg">Quais as vantagens das buchas para Sink Roll da Aceros?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Fabricadas por centrifugação e usinadas conforme desenho, são destinadas às pontas de Sink Rolls e a outras aplicações industriais definidas conforme a condição de operação.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg">Vocês trabalham com produtos commodities / tubos de prateleira?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Não. A Aceros é focada exclusivamente em engenharia e fabricação sob medida de componentes de alta liga centrifugados e usinados conforme desenho técnico.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold text-lg">Qual a aplicação das buchas para Rolos de Forno (Furnace Rolls)?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                São componentes dimensionados conforme o desenho e as condições de operação dos rolos utilizados em fornos de tratamento térmico.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-bold text-lg">Quais ligas de aço inox a Aceros utiliza na fabricação?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                A liga é selecionada pela engenharia conforme a temperatura, corrosão, abrasão e requisitos dimensionais do projeto, incluindo materiais conforme ASTM A297 quando aplicável.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-bold text-lg">A Aceros produz buchas conforme desenho técnico?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Sim. A fabricação e a usinagem são realizadas sob medida conforme o desenho técnico e os requisitos informados pelo cliente.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Formulário */}
      <section id="form-landing-bucha" className="bg-slate-50 py-14 sm:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 bg-primary text-white flex flex-col justify-center">
              <h2 className="font-headline text-3xl font-bold uppercase mb-6">Solicite seu Orçamento de Buchas</h2>
              <p className="text-slate-300 mb-3">Nossa equipe técnica analisa as informações do projeto e prepara a proposta comercial.</p>
              <p className="mb-8 text-sm font-semibold text-white">Retorno comercial em até um dia útil.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-3 rounded-full"><Phone className="h-6 w-6 text-accent" /></div>
                  <Link href="tel:+551155556551" className="track-telefone hover:text-accent transition-colors">+55 (11) 5555-6551</Link>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-3 rounded-full"><Mail className="h-6 w-6 text-accent" /></div>
                  <Link href="mailto:vendas@aceros.com.br" className="track-email hover:text-accent transition-colors">vendas@aceros.com.br</Link>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-3 rounded-full"><MapPin className="h-6 w-6 text-accent" /></div>
                  <span className="text-sm">Rua Hans Oersted, 20–118, Cidade Monções, São Paulo/SP</span>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="bucha-name" className="text-sm font-bold text-slate-700 block mb-2">Nome Completo *</label>
                    <Input id="bucha-name" name="name" autoComplete="name" placeholder="Seu nome" required className="bg-slate-50 border-slate-200" disabled={isSubmitting} />
                  </div>
                  <div>
                    <label htmlFor="bucha-company" className="text-sm font-bold text-slate-700 block mb-2">Empresa *</label>
                    <Input id="bucha-company" name="company" autoComplete="organization" placeholder="Nome da empresa" required className="bg-slate-50 border-slate-200" disabled={isSubmitting} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="bucha-phone" className="text-sm font-bold text-slate-700 block mb-2">Telefone / WhatsApp *</label>
                      <Input id="bucha-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(00) 00000-0000" required className="bg-slate-50 border-slate-200" disabled={isSubmitting} />
                    </div>
                    <div>
                      <label htmlFor="bucha-city" className="text-sm font-bold text-slate-700 block mb-2">Cidade / UF</label>
                      <Input id="bucha-city" name="city" autoComplete="address-level1" placeholder="Cidade - UF" className="bg-slate-50 border-slate-200" disabled={isSubmitting} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="bucha-email" className="text-sm font-bold text-slate-700 block mb-2">E-mail Corporativo *</label>
                    <Input id="bucha-email" name="email" type="email" autoComplete="email" placeholder="email@empresa.com.br" required className="bg-slate-50 border-slate-200 track-email" disabled={isSubmitting} />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="bucha-material" className="mb-2 block text-sm font-bold text-slate-700">Liga ou material</label>
                      <Input id="bucha-material" name="material" placeholder="Se conhecido" className="border-slate-200 bg-slate-50" disabled={isSubmitting} />
                    </div>
                    <div>
                      <label htmlFor="bucha-deadline" className="mb-2 block text-sm font-bold text-slate-700">Prazo desejado</label>
                      <Input id="bucha-deadline" name="deadline" placeholder="Ex.: 60 dias" className="border-slate-200 bg-slate-50" disabled={isSubmitting} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="bucha-dimensions" className="mb-2 block text-sm font-bold text-slate-700">Dimensões e quantidade *</label>
                    <Input id="bucha-dimensions" name="dimensions" placeholder="Diâmetros, comprimento e quantidade" required className="border-slate-200 bg-slate-50" disabled={isSubmitting} />
                  </div>
                  <div>
                    <label htmlFor="bucha-drawing" className="mb-2 block text-sm font-bold text-slate-700">Desenho técnico</label>
                    <Input id="bucha-drawing" name="drawing" type="file" accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.jpg,.jpeg,.png" className="h-auto border-slate-200 bg-slate-50 py-2 text-sm" disabled={isSubmitting} />
                    <p className="mt-2 text-xs leading-5 text-slate-500">PDF, DWG, DXF, STEP, IGES, JPG ou PNG, até 5 MB.</p>
                  </div>
                  <div>
                    <label htmlFor="bucha-message" className="text-sm font-bold text-slate-700 block mb-2">Informações adicionais</label>
                    <Textarea id="bucha-message" name="message" placeholder="Informe a aplicação, o conjunto e outras condições de operação." rows={4} className="bg-slate-50 border-slate-200" disabled={isSubmitting} />
                  </div>
                </div>
                <label className="flex items-start gap-3 text-xs leading-relaxed text-slate-600">
                  <input
                    type="checkbox"
                    id="bucha-privacy"
                    name="privacy"
                    required
                    disabled={isSubmitting}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-orange-500"
                  />
                  <span>
                    Li e aceito a <Link href="/politica-de-privacidade" className="underline font-bold text-slate-900 hover:text-accent">Política de Privacidade</Link> e autorizo o uso dos dados para retorno desta solicitação. *
                  </span>
                </label>
                <Button type="submit" disabled={isSubmitting} className="w-full rounded-none bg-[#b54b00] py-7 text-base font-bold uppercase tracking-wider text-white hover:bg-[#963e00] sm:text-lg">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" /> Solicitar Orçamento
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
