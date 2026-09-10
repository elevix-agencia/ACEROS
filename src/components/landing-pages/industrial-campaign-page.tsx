'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, FileCheck2, Gauge, Loader2, MessageCircle, Send, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { saveContactMessage } from '@/lib/contact-actions';
import { useToast } from '@/hooks/use-toast';
import { RelatedSolutions } from './related-solutions';

export type CampaignPageData = {
  path: string;
  source: string;
  eyebrow: string;
  title: string;
  heroDescription: string;
  heroImage: string;
  heroAlt: string;
  overviewTitle: string;
  overview: string[];
  detailImage: string;
  detailAlt: string;
  benefits: string[];
  applications: Array<{ title: string; description: string }>;
  specs: Array<{ label: string; value: string }>;
  gallery: Array<{ src: string; alt: string }>;
  faq: Array<{ question: string; answer: string }>;
  whatsappText: string;
  formHint: string;
};

const whatsappNumber = '551155556551';

export function IndustrialCampaignPage({ data }: { data: CampaignPageData }) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(data.whatsappText)}`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;
    const fields = new FormData(form);
    const result = await saveContactMessage({
      name: fields.get('name'),
      company: fields.get('company'),
      phone: fields.get('phone'),
      email: fields.get('email'),
      city: fields.get('city'),
      message: fields.get('message'),
      source: data.source,
    });

    if (result.success) {
      toast({ title: 'Solicitação enviada', description: 'Nossa equipe técnica entrará em contato.' });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Não foi possível enviar',
        description: result.error || 'Fale conosco pelo WhatsApp para agilizar sua cotação.',
      });
    }
    setIsSubmitting(false);
  }

  return (
    <main className="bg-white text-[#07121e]">
      <section className="relative min-h-[680px] overflow-hidden bg-[#07121e] text-white">
        <Image src={data.heroImage} alt={data.heroAlt} fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07121e] via-[#07121e]/90 to-[#07121e]/25" />
        <div className="relative mx-auto flex min-h-[680px] max-w-[1280px] items-center px-5 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#ef7b21]">
              <span className="h-px w-10 bg-[#ef7b21]" />{data.eyebrow}
            </p>
            <h1 className="font-headline text-4xl font-bold uppercase leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
              {data.title}
            </h1>
            <p className="mt-7 max-w-2xl border-l-2 border-[#ef7b21] pl-5 text-lg leading-8 text-slate-200">
              {data.heroDescription}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild className="h-14 rounded-none bg-[#ef7b21] px-7 text-base font-bold uppercase hover:bg-[#cf5f11]">
                <Link href="#solicitar-orcamento">Solicitar orçamento <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" className="h-14 rounded-none border-white/50 bg-transparent px-7 text-base font-bold uppercase text-white hover:bg-white hover:text-[#07121e]">
                <Link href={whatsappUrl} target="_blank">Falar no WhatsApp <MessageCircle className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#0d1d2d] text-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 px-5 sm:grid-cols-3 lg:px-10">
          {[
            ['Sob medida', 'Conforme desenho e condição de operação'],
            ['ASTM A297', 'Ligas resistentes a calor, abrasão e oxidação'],
            ['Controle técnico', 'Rastreabilidade, usinagem e inspeção'],
          ].map(([title, text]) => (
            <div key={title} className="border-white/10 py-7 sm:border-r sm:px-6 first:pl-0 last:border-r-0">
              <p className="font-headline text-xl font-bold">{title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 lg:grid-cols-2 lg:px-10">
          <div className="relative min-h-[430px] overflow-hidden border-b-4 border-[#ef7b21] bg-slate-100">
            <Image src={data.detailImage} alt={data.detailAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#ef7b21]">Engenharia aplicada</p>
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{data.overviewTitle}</h2>
            {data.overview.map((paragraph) => <p key={paragraph} className="mt-5 text-lg leading-8 text-slate-600">{paragraph}</p>)}
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {data.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-base font-medium text-slate-800">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#ef7b21]" />{benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f6] py-20 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#ef7b21]">Aplicações industriais</p>
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">Onde este produto trabalha</h2>
          </div>
          <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.applications.map((application, index) => (
              <article key={application.title} className="flex h-full flex-col border-t-4 border-[#ef7b21] bg-white p-7 shadow-sm">
                <span className="text-xs font-bold tracking-widest text-[#ef7b21]">0{index + 1}</span>
                <h3 className="mt-3 min-h-[3.5rem] font-headline text-xl font-bold">{application.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{application.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ef7b21] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">Especificação orientada pela aplicação</h2>
          <div className="mt-10 grid gap-px overflow-hidden bg-white/30 sm:grid-cols-2 lg:grid-cols-4">
            {data.specs.map((spec) => (
              <div key={spec.label} className="bg-[#ef7b21] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/75">{spec.label}</p>
                <p className="mt-2 text-lg font-bold leading-7">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#ef7b21]">Produtos reais Aceros</p>
              <h2 className="font-headline text-3xl font-bold sm:text-4xl">Fabricação e acabamento</h2>
            </div>
            <p className="max-w-xl text-slate-600">Imagens do acervo técnico e do catálogo da empresa, correspondentes às aplicações apresentadas.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {data.gallery.map((image) => (
              <div key={image.src} className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07121e] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 lg:grid-cols-3 lg:px-10">
          {[
            [ShieldCheck, 'Qualidade assegurada', 'Análise de liga, dureza, ultrassom e inspeção dimensional conforme o projeto.'],
            [Gauge, 'Usinagem de precisão', 'Acabamento dimensional adequado à montagem e à condição real de trabalho.'],
            [FileCheck2, 'Rastreabilidade', 'Identificação e documentação técnica desde a matéria-prima até a peça final.'],
          ].map(([Icon, title, text]) => {
            const ItemIcon = Icon as typeof ShieldCheck;
            return <div key={String(title)} className="flex gap-4"><ItemIcon className="h-9 w-9 shrink-0 text-[#ef7b21]" /><div><h3 className="font-headline text-xl font-bold">{String(title)}</h3><p className="mt-2 leading-7 text-slate-300">{String(text)}</p></div></div>;
          })}
        </div>
      </section>

      <RelatedSolutions currentPath={data.path} />

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#ef7b21]">Dúvidas técnicas</p>
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">Perguntas frequentes</h2>
            <Accordion type="single" collapsible className="mt-8">
              {data.faq.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base font-bold">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-base leading-7 text-slate-600">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div id="solicitar-orcamento" className="scroll-mt-28 bg-[#f3f4f6] p-7 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ef7b21]">Cotação técnica</p>
            <h2 className="mt-3 font-headline text-3xl font-bold">Envie seu projeto</h2>
            <p className="mt-3 leading-7 text-slate-600">Nossa equipe analisa desenho, liga, dimensões e condição de operação.</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2"><Input name="name" required minLength={2} placeholder="Nome *" className="h-12 rounded-none bg-white" /><Input name="company" placeholder="Empresa" className="h-12 rounded-none bg-white" /></div>
              <div className="grid gap-4 sm:grid-cols-2"><Input name="phone" required minLength={10} placeholder="Telefone / WhatsApp *" className="h-12 rounded-none bg-white" /><Input name="email" required type="email" placeholder="E-mail corporativo *" className="h-12 rounded-none bg-white" /></div>
              <Input name="city" placeholder="Cidade / UF" className="h-12 rounded-none bg-white" />
              <Textarea name="message" rows={5} placeholder={data.formHint} className="rounded-none bg-white" />
              <p className="text-xs leading-5 text-slate-500">Ao enviar, você concorda com o uso dos dados para retorno da solicitação, conforme nossa <Link href="/politica-de-privacidade" className="font-semibold underline">Política de Privacidade</Link>.</p>
              <Button type="submit" disabled={isSubmitting} className="h-14 w-full rounded-none bg-[#ef7b21] text-base font-bold uppercase hover:bg-[#cf5f11]">
                {isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" />Enviando...</> : <><Send className="mr-2 h-5 w-5" />Solicitar orçamento</>}
              </Button>
              <Button asChild variant="outline" className="h-14 w-full rounded-none border-[#07121e] text-base font-bold uppercase">
                <Link href={whatsappUrl} target="_blank"><MessageCircle className="mr-2 h-5 w-5" />Falar no WhatsApp</Link>
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
