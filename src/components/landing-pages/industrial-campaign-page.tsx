'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, FileCheck2, Gauge, Loader2, MessageCircle, Search, Send, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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
    fields.set('source', data.source);
    fields.set('product', data.title);
    fields.set('privacy', fields.get('privacy') ? 'true' : 'false');

    try {
      const result = await saveContactMessage(fields);
      if (!result.success) throw new Error(result.error);

      const trackedWindow = window as Window & { dataLayer?: Array<Record<string, unknown>> };
      trackedWindow.dataLayer?.push({ event: 'generate_lead', lead_source: data.source });
      toast({ title: 'Solicitação enviada', description: 'Nossa equipe técnica entrará em contato.' });
      form.reset();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Não foi possível enviar',
        description: error instanceof Error ? error.message : 'Fale conosco pelo WhatsApp para agilizar sua cotação.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-white text-[#07121e]">
      <section className="relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-[#07121e] text-white">
        <Image src={data.heroImage} alt={data.heroAlt} fill priority sizes="100vw" className="object-cover object-center opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#07121e_0%,rgba(7,18,30,.94)_42%,rgba(7,18,30,.42)_72%,rgba(7,18,30,.12)_100%)]" />
        <div className="absolute left-0 top-0 h-full w-1 bg-[#ef7b21]" />
        <div className="relative mx-auto flex min-h-[calc(100svh-80px)] max-w-[1280px] items-center px-5 py-10 sm:py-16 lg:px-10 lg:pb-28 lg:pt-20">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#ef7b21] sm:mb-7 sm:text-sm">
              <span className="h-px w-10 bg-[#ef7b21]" />{data.eyebrow}
            </p>
            <h1 className="text-balance font-headline text-[2rem] font-semibold uppercase leading-[1.08] tracking-[-0.025em] sm:text-[clamp(2.25rem,3.35vw,3.65rem)]">
              {data.title}
            </h1>
            <p className="mt-7 max-w-2xl border-l-2 border-[#ef7b21] pl-5 text-lg leading-8 text-slate-200">
              {data.heroDescription}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild className="h-14 rounded-none bg-[#b54b00] px-7 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#963e00] sm:h-16">
                <Link href="#solicitar-orcamento">Solicitar orçamento <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" className="h-14 rounded-none border-white/50 bg-transparent px-7 text-base font-bold uppercase text-white hover:bg-white hover:text-[#07121e]">
                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="track-whatsapp">Falar no WhatsApp <MessageCircle className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden border-b border-slate-200 bg-[#0d1d2d] text-white sm:block">
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

      <section className="py-14 sm:py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 lg:grid-cols-2 lg:px-10">
          <div className="relative min-h-[320px] overflow-hidden border-b-4 border-[#ef7b21] bg-slate-100 sm:min-h-[430px]">
            <Image src={data.detailImage} alt={data.detailAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#a94700]">Engenharia aplicada</p>
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

      <section className="bg-[#f3f4f6] py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#a94700]">Aplicações industriais</p>
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">Onde este produto trabalha</h2>
          </div>
          <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.applications.map((application, index) => (
              <article key={application.title} className="flex h-full flex-col border-t-4 border-[#ef7b21] bg-white p-7 shadow-sm">
                <span className="text-xs font-bold tracking-widest text-[#a94700]">0{index + 1}</span>
                <h3 className="mt-3 min-h-[3.5rem] font-headline text-xl font-bold">{application.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{application.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#b54b00] py-14 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">Especificação orientada pela aplicação</h2>
          <div className="mt-10 grid gap-px overflow-hidden bg-white/30 sm:grid-cols-2 lg:grid-cols-4">
            {data.specs.map((spec) => (
              <div key={spec.label} className="bg-[#b54b00] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/75">{spec.label}</p>
                <p className="mt-2 text-lg font-bold leading-7">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#a94700]">Produtos reais Aceros</p>
              <h2 className="font-headline text-3xl font-bold sm:text-4xl">Fabricação e acabamento</h2>
            </div>
            <p className="max-w-xl text-slate-600">Imagens do acervo técnico e do catálogo da empresa, correspondentes às aplicações apresentadas.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {data.gallery.map((image) => (
              <Dialog key={image.src}>
                <DialogTrigger asChild>
                  <button type="button" aria-label={`Ampliar: ${image.alt}`} className="group relative block aspect-[4/3] w-full overflow-hidden bg-slate-100 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef7b21] focus-visible:ring-offset-2">
                    <Image src={image.src} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"><Search className="h-9 w-9 text-white" /></span>
                    <span className="absolute bottom-0 w-full bg-gradient-to-t from-black/95 via-black/65 to-transparent p-4 pt-10 text-sm font-semibold leading-snug text-white">{image.alt}</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-4">
                  <DialogHeader><DialogTitle className="pr-8 text-left text-base">{image.alt}</DialogTitle></DialogHeader>
                  <div className="relative aspect-video w-full"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 896px) 95vw, 896px" className="object-contain" /></div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07121e] py-14 text-white sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 lg:grid-cols-3 lg:px-10">
          {[
            [ShieldCheck, 'Controle de qualidade', 'Análise de liga, dureza, ultrassom e inspeção dimensional conforme os requisitos do fornecimento.'],
            [Gauge, 'Usinagem de precisão', 'Acabamento dimensional adequado à montagem e à condição real de trabalho.'],
            [FileCheck2, 'Rastreabilidade', 'Identificação e documentação técnica desde a matéria-prima até a peça final.'],
          ].map(([Icon, title, text]) => {
            const ItemIcon = Icon as typeof ShieldCheck;
            return <div key={String(title)} className="flex gap-4"><ItemIcon className="h-9 w-9 shrink-0 text-[#ef7b21]" /><div><h3 className="font-headline text-xl font-bold">{String(title)}</h3><p className="mt-2 leading-7 text-slate-300">{String(text)}</p></div></div>;
          })}
        </div>
      </section>

      <RelatedSolutions currentPath={data.path} />

      <section className="py-14 sm:py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#a94700]">Dúvidas técnicas</p>
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
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a94700]">Cotação técnica</p>
            <h2 className="mt-3 font-headline text-3xl font-bold">Envie seu projeto</h2>
            <p className="mt-3 leading-7 text-slate-600">Nossa equipe analisa desenho, liga, dimensões e condição de operação.</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor={`${data.source}-name`} className="mb-2 block text-sm font-bold text-slate-700">Nome completo *</label><Input id={`${data.source}-name`} name="name" autoComplete="name" required minLength={2} className="h-12 rounded-none bg-white" disabled={isSubmitting} /></div>
                <div><label htmlFor={`${data.source}-company`} className="mb-2 block text-sm font-bold text-slate-700">Empresa *</label><Input id={`${data.source}-company`} name="company" autoComplete="organization" required className="h-12 rounded-none bg-white" disabled={isSubmitting} /></div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor={`${data.source}-phone`} className="mb-2 block text-sm font-bold text-slate-700">Telefone / WhatsApp *</label><Input id={`${data.source}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" required minLength={10} className="h-12 rounded-none bg-white" disabled={isSubmitting} /></div>
                <div><label htmlFor={`${data.source}-email`} className="mb-2 block text-sm font-bold text-slate-700">E-mail corporativo *</label><Input id={`${data.source}-email`} name="email" autoComplete="email" required type="email" className="h-12 rounded-none bg-white" disabled={isSubmitting} /></div>
              </div>
              <div><label htmlFor={`${data.source}-city`} className="mb-2 block text-sm font-bold text-slate-700">Cidade / UF</label><Input id={`${data.source}-city`} name="city" autoComplete="address-level1" className="h-12 rounded-none bg-white" disabled={isSubmitting} /></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor={`${data.source}-material`} className="mb-2 block text-sm font-bold text-slate-700">Liga ou material</label><Input id={`${data.source}-material`} name="material" placeholder="Se conhecido" className="h-12 rounded-none bg-white" disabled={isSubmitting} /></div>
                <div><label htmlFor={`${data.source}-deadline`} className="mb-2 block text-sm font-bold text-slate-700">Prazo desejado</label><Input id={`${data.source}-deadline`} name="deadline" placeholder="Ex.: 60 dias" className="h-12 rounded-none bg-white" disabled={isSubmitting} /></div>
              </div>
              <div><label htmlFor={`${data.source}-dimensions`} className="mb-2 block text-sm font-bold text-slate-700">Dimensões e quantidade *</label><Input id={`${data.source}-dimensions`} name="dimensions" required placeholder="Diâmetros, comprimento e quantidade" className="h-12 rounded-none bg-white" disabled={isSubmitting} /></div>
              <div><label htmlFor={`${data.source}-drawing`} className="mb-2 block text-sm font-bold text-slate-700">Desenho técnico</label><Input id={`${data.source}-drawing`} name="drawing" type="file" accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.jpg,.jpeg,.png" className="h-auto rounded-none bg-white py-2 text-sm" disabled={isSubmitting} /><p className="mt-2 text-xs leading-5 text-slate-500">PDF, DWG, DXF, STEP, IGES, JPG ou PNG, até 5 MB.</p></div>
              <div><label htmlFor={`${data.source}-message`} className="mb-2 block text-sm font-bold text-slate-700">Informações adicionais</label><Textarea id={`${data.source}-message`} name="message" rows={5} placeholder={data.formHint} className="rounded-none bg-white" disabled={isSubmitting} /></div>
              <label className="flex items-start gap-3 text-xs leading-5 text-slate-600"><input type="checkbox" name="privacy" required disabled={isSubmitting} className="mt-0.5 h-4 w-4 shrink-0 accent-orange-600" /><span>Li e aceito a <Link href="/politica-de-privacidade" className="font-semibold text-slate-900 underline">Política de Privacidade</Link> e autorizo o uso dos dados para retorno desta solicitação. *</span></label>
              <p className="text-sm font-semibold text-slate-700">Retorno comercial em até um dia útil.</p>
              <Button type="submit" disabled={isSubmitting} className="h-14 w-full rounded-none bg-[#b54b00] text-base font-bold uppercase text-white hover:bg-[#963e00]">
                {isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" />Enviando...</> : <><Send className="mr-2 h-5 w-5" />Solicitar orçamento</>}
              </Button>
              <Button asChild variant="outline" className="h-14 w-full rounded-none border-[#07121e] text-base font-bold uppercase">
                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="track-whatsapp"><MessageCircle className="mr-2 h-5 w-5" />Falar no WhatsApp</Link>
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
