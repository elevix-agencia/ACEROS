
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  Drill,
  Building2,
  FlaskConical,
  Utensils,
  Thermometer,
  Droplets,
  Zap,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Send,
  Search,
  Plus
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
import { Icon } from '@/components/icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { LocationMap } from '@/components/sections/location-map';

export function BuchaInoxClient() {
  const { toast } = useToast();
  const whatsappNumber = '551155556551';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de um orçamento para Buchas de Aço Inox sob medida.');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio para GA/Google Ads
    console.log('Conversão: Envio do formulário disparado.');
    toast({
      title: "Solicitação Enviada!",
      description: "Nossa equipe técnica entrará em contato em breve.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-background text-foreground font-body overflow-x-hidden">
      {/* Botão Flutuante WhatsApp */}
      <Link 
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        className="track-whatsapp fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform md:bottom-10 md:right-10 flex items-center justify-center"
      >
        <MessageCircle className="h-8 w-8" />
      </Link>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-900">
        <Image 
          src="https://i.imgur.com/DpEHlwU.png" 
          alt="Produção industrial de buchas de aço inox" 
          fill 
          className="object-cover opacity-30"
          priority
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-headline text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-tight"
            >
              Bucha de Aço Inox Fabricada Sob Medida
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg md:text-2xl text-slate-300 max-w-2xl"
            >
              Produzimos buchas de aço inox com alta resistência e qualidade para atender às mais diversas aplicações industriais.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-xl px-10 py-8">
                <Link href="#form-landing-bucha">Solicitar Orçamento</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-xl px-10 py-8">
                <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" className="track-whatsapp">
                  Falar com um Especialista
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Faixa de Diferenciais */}
        <div className="absolute bottom-0 w-full bg-accent/90 backdrop-blur-sm py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center md:justify-between gap-6 text-white text-sm font-semibold uppercase tracking-wider">
              <span className="flex items-center gap-2"><Settings className="h-5 w-5" /> Fabricação sob medida</span>
              <span className="flex items-center gap-2"><PenTool className="h-5 w-5" /> Conforme desenho técnico</span>
              <span className="flex items-center gap-2"><Globe className="h-5 w-5" /> Atendimento em todo o Brasil</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-5 w-5" /> Controle rigoroso</span>
              <span className="flex items-center gap-2"><Users className="h-5 w-5" /> Equipe especializada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase">Excelência em Componentes Industriais</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A <strong>Aceros</strong> é referência na fabricação de buchas de aço inox para ambientes que exigem máxima resistência mecânica e durabilidade. Nossos componentes são projetados para suportar atmosferas corrosivas, altas temperaturas e regimes de trabalho severos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada peça passa por um rigoroso controle de fabricação, garantindo que as tolerâncias dimensionais e as propriedades metalúrgicas atendam perfeitamente à necessidade do seu projeto, reduzindo paradas inesperadas e aumentando a vida útil dos seus equipamentos.
            </p>
          </motion.div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="https://i.imgur.com/Pwf19y1.jpeg" 
              alt="Processo de fabricação de buchas na Aceros" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Informações Técnicas */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 uppercase">Especificações Técnicas</h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-6 font-semibold">Categoria</th>
                    <th className="p-6 font-semibold">Detalhes Disponíveis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-6 font-bold bg-slate-50/50">Ligas Disponíveis</td>
                    <td className="p-6">Aço Inox 304, 304L, 316, 316L, 310, 420 (Consulte outras ligas)</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold bg-slate-50/50">Processo Produtivo</td>
                    <td className="p-6">Fundição por Centrifugação ou Estática + Usinagem CNC de Precisão</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold bg-slate-50/50">Dimensões</td>
                    <td className="p-6">Diâmetros e comprimentos sob consulta (Fabricação conforme projeto)</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold bg-slate-50/50">Tolerâncias</td>
                    <td className="p-6">Rigoroso controle dimensional conforme normas técnicas</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold bg-slate-50/50">Normas Técnicas</td>
                    <td className="p-6">ABNT, ASTM, DIN, AISI</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold bg-slate-50/50">Inspeção</td>
                    <td className="p-6">Controle de dureza, análise química (Spectro), Ultrassom e Líquido Penetrante</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-6 text-slate-500 italic text-center">Consulte nossa equipe técnica para especificações conforme sua necessidade.</p>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 uppercase">Diferenciais Aceros</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Por que grandes indústrias confiam na Aceros para o fornecimento de buchas especiais.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Settings, title: 'Fabricação sob medida', text: 'Produção customizada para atender requisitos exatos de montagem.' },
              { icon: ShieldCheck, title: 'Alta resistência ao desgaste', text: 'Ligas selecionadas para máxima performance em ambientes abrasivos.' },
              { icon: CheckCircle, title: 'Controle rigoroso de qualidade', text: 'Inspeções em todas as etapas do processo produtivo.' },
              { icon: Users, title: 'Atendimento técnico especializado', text: 'Suporte de engenheiros especialistas em materiais metálicos.' },
              { icon: FileText, title: 'Produção conforme projeto', text: 'Capacidade de interpretar e executar projetos complexos.' },
              { icon: PenTool, title: 'Conforme desenho técnico', text: 'Precisão milimétrica seguindo seus desenhos originais.' },
              { icon: Factory, title: 'Soluções personalizadas', text: 'Desenvolvimento conjunto de soluções para problemas de corrosão.' },
              { icon: Globe, title: 'Atendimento para todo o Brasil', text: 'Logística ágil para atender indústrias em qualquer região.' },
              { icon: HardHat, title: 'Fabricação para aplicações severas', text: 'Especialistas em componentes que operam no limite térmico e químico.' }
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow border-slate-100">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-xl text-primary mb-4">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  {item.text}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase">Principais Aplicações</h2>
            <p className="text-slate-400 mt-4">Nossas buchas atendem os setores mais exigentes da cadeia produtiva.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: HardHat, label: 'Mineração' },
              { icon: Factory, label: 'Siderurgia' },
              { icon: FlaskConical, label: 'Indústria Química' },
              { icon: Building2, label: 'Cimento' },
              { icon: FileText, label: 'Papel e Celulose' },
              { icon: Utensils, label: 'Indústria Alimentícia' },
              { icon: Thermometer, label: 'Tratamento Térmico' },
              { icon: Droplets, label: 'Petroquímica' },
              { icon: Zap, label: 'Energia' },
              { icon: Settings, label: 'Bens de Capital' }
            ].map((app, i) => (
              <div key={i} className="flex flex-col items-center gap-4 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                <app.icon className="h-10 w-10 text-accent" />
                <span className="font-semibold text-center">{app.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-16 text-center text-slate-300 max-w-3xl mx-auto">
            Atendemos desde projetos específicos até fornecimentos contínuos para indústrias de diversos portes, garantindo sempre a mesma qualidade e compromisso.
          </p>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 uppercase">Galeria de Produtos</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: 'product-bushing-main', alt: 'Bucha em aço inox para aplicação industrial' },
              { id: 'product-bushing-gallery-1', alt: 'Bucha de aço inox usinada com precisão' },
              { id: 'product-bushing-gallery-2', alt: 'Bucha flangeada em aço inoxidável' },
              { id: 'product-bushing-gallery-3', alt: 'Controle de qualidade dimensional de buchas' }
            ].map((img, i) => {
              const placeholder = PlaceHolderImages.find(p => p.id === img.id);
              return (
                <div key={i} className="group relative aspect-square rounded-xl overflow-hidden shadow-md">
                  <Image 
                    src={placeholder?.imageUrl || ''} 
                    alt={img.alt} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.alt}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Processo de Fabricação (Timeline) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 uppercase">Nosso Processo</h2>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-slate-200 hidden md:block"></div>
            <div className="space-y-12">
              {[
                { step: '01', title: 'Recebimento do Projeto', desc: 'Análise detalhada dos requisitos fornecidos.' },
                { step: '02', title: 'Análise Técnica', desc: 'Validação de tolerâncias e viabilidade produtiva.' },
                { step: '03', title: 'Definição da Liga', desc: 'Escolha do material ideal para o regime de trabalho.' },
                { step: '04', title: 'Fabricação', desc: 'Geração do blank por centrifugação e usinagem CNC.' },
                { step: '05', title: 'Controle Dimensional', desc: 'Medição precisa para garantir conformidade com o desenho.' },
                { step: '06', title: 'Inspeção de Qualidade', desc: 'Ensaios não destrutivos e testes de dureza.' },
                { step: '07', title: 'Entrega', desc: 'Expedição segura para qualquer local do Brasil.' }
              ].map((item, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full md:text-right">
                    <div className={`${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'} p-6 bg-white rounded-2xl shadow-md`}>
                      <span className="text-accent font-bold text-xl">{item.step}</span>
                      <h4 className="text-lg font-bold text-slate-900 mt-2">{item.title}</h4>
                      <p className="text-muted-foreground mt-2">{item.desc}</p>
                    </div>
                  </div>
                  <div className="z-10 bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center font-bold ring-8 ring-slate-50">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://i.imgur.com/2tolqXg.jpeg" 
                alt="Equipe técnica Aceros em operação" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 mb-8 uppercase">Por que escolher a Aceros</h2>
              <div className="space-y-6">
                {[
                  'Fabricação própria com tecnologia de ponta',
                  'Equipe técnica altamente especializada',
                  'Atendimento consultivo e focado no seu projeto',
                  'Desenvolvimento de componentes sob medida',
                  'Alto padrão de qualidade e rastreabilidade',
                  'Soluções robustas para aplicações críticas'
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

      {/* CTA Intermediário */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase mb-6">Precisa de uma Bucha de Aço Inox?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-accent-foreground/90">
            Nossa equipe técnica está pronta para analisar seu projeto e indicar a melhor solução para sua necessidade.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-slate-900 text-white hover:bg-black px-12 py-8 text-xl">
              <Link href="#form-landing-bucha">Solicitar Cotação</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-12 py-8 text-xl">
              <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" className="track-whatsapp">
                Enviar Projeto via WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 uppercase">Perguntas Frequentes</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg">Quais ligas de aço inox a Aceros utiliza na fabricação de buchas?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Trabalhamos com as principais ligas do mercado, incluindo 304, 304L, 316, 316L, 310 e 420, garantindo resistência à corrosão e durabilidade conforme sua aplicação.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg">A Aceros produz buchas conforme desenho técnico?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Sim, nossa especialidade é a fabricação sob medida seguindo rigorosamente o desenho técnico ou projeto fornecido pelo cliente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold text-lg">Qual o prazo médio de entrega para as buchas sob medida?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                O prazo varia conforme a complexidade do projeto e a quantidade solicitada, mas priorizamos a agilidade sem abrir mão do controle de qualidade rigoroso.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-bold text-lg">Atendem pedidos de pequenas quantidades?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Atendemos demandas de diversos volumes, desde projetos específicos e peças únicas até fornecimentos contínuos para manutenção industrial.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-bold text-lg">Quais os diâmetros máximos e mínimos produzidos?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Nossa capacidade produtiva é versátil. Recomendamos o envio do seu desenho técnico para uma análise detalhada das dimensões requeridas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <section id="form-landing-bucha" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 bg-slate-900 text-white flex flex-col justify-center">
              <h2 className="font-headline text-3xl font-bold uppercase mb-6">Solicite seu Orçamento Gratuito</h2>
              <p className="text-slate-400 mb-8">Nossos especialistas estão prontos para analisar seu projeto e enviar uma proposta comercial competitiva.</p>
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
                  <span className="text-sm">Av. Eng. Luiz Carlos Berrini, 1376, São Paulo/SP</span>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="text-sm font-bold text-slate-700 block mb-2">Nome Completo *</label>
                    <Input placeholder="Seu nome" required className="bg-slate-50 border-slate-200" />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-700 block mb-2">Empresa *</label>
                    <Input placeholder="Nome da empresa" required className="bg-slate-50 border-slate-200" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-bold text-slate-700 block mb-2">Telefone / WhatsApp *</label>
                      <Input placeholder="(00) 00000-0000" required className="bg-slate-50 border-slate-200" />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-slate-700 block mb-2">Cidade / UF</label>
                      <Input placeholder="Cidade - UF" className="bg-slate-50 border-slate-200" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-700 block mb-2">E-mail Corporativo</label>
                    <Input type="email" placeholder="email@empresa.com.br" className="bg-slate-50 border-slate-200 track-email" />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-700 block mb-2">Mensagem / Especificações</label>
                    <Textarea placeholder="Descreva as dimensões, ligas ou envie o link do seu projeto..." rows={4} className="bg-slate-50 border-slate-200" />
                  </div>
                </div>
                <p className="text-[10px] text-slate-500">Seus dados serão utilizados exclusivamente para retorno do orçamento solicitado, conforme nossa Política de Privacidade.</p>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-8 text-xl font-bold uppercase tracking-wider">
                  <Send className="mr-2 h-5 w-5" /> Solicitar Orçamento
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé Landing Page */}
      <footer className="bg-white border-t py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Image 
                src="https://i.imgur.com/OBD0nJ0.png" 
                alt="Aceros Logo" 
                width={180} 
                height={50} 
                className="mb-6"
              />
              <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                Líder na fabricação de buchas e componentes em aços inoxidáveis e ligas especiais para alta performance industrial.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-tight">Contato</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /> +55 (11) 5555-6551</li>
                <li className="flex items-center gap-3"><MessageCircle className="h-4 w-4 text-accent" /> +55 (11) 5555-6551</li>
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /> vendas@aceros.com.br</li>
                <li className="flex items-start gap-3"><MapPin className="h-4 w-4 text-accent shrink-0" /> Av. Eng. Luiz Carlos Berrini, 1376, Monções, São Paulo/SP</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-tight">Nossa Localização</h4>
              <div className="rounded-xl overflow-hidden h-40 border shadow-sm grayscale hover:grayscale-0 transition-all">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3268953186254!2d-46.69639892550993!3d-23.59253456241042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce572f41e57c69%3A0x7769a7c973a95898!2sAv.%20Engenheiro%20Lu%C3%ADs%20Carlos%20Berrini%2C%201376%20-%20Cidade%20Mon%C3%A7%C3%B5es%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004571-000%2C%20Brazil!5e0!3m2!1sen!2sus!4v1721758838384!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Localização Aceros"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t text-center text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Aceros Inoxidáveis. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
