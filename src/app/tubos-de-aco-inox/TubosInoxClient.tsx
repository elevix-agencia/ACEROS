'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Settings, ShieldCheck, Users, FileText, PenTool, Factory, Globe, HardHat,
  Thermometer, Zap, Phone, Mail, MapPin, Send, Plus, Layers, Award, Search, Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { saveContactMessage } from '@/lib/contact-actions';
import { RelatedSolutions } from '@/components/landing-pages/related-solutions';
import { useLanguage } from '@/hooks/use-language';
import { tubosCopy } from './tubos-copy';

const stripIcons = [Settings, PenTool, Globe, ShieldCheck, Users];
const differentialIcons = [Settings, ShieldCheck, Zap, Layers, FileText, Award, PenTool, Globe, Users];
const applicationIcons = [Factory, HardHat, Thermometer, Layers, Settings, Globe, Settings];
const galleryUrls = [
  '/images/aceros/tubos/tubo-aco-inox-bruto-aceros-01.jpg',
  '/images/aceros/tubos/tubo-aco-inox-bruto-aceros-02.jpg',
  '/images/aceros/tubos/tubo-aco-inox-usinado-aceros-01.jpg',
  '/images/aceros/tubos/tubo-aco-inox-usinado-aceros-02.jpg',
  '/images/aceros/tubos/tubo-aco-inox-polido-aceros-05.jpg',
  '/images/aceros/tubos/tubo-aco-inox-polido-aceros-02.jpg',
  '/images/aceros/tubos/tubo-aco-inox-polido-aceros-07.jpg',
  '/images/aceros/tubos/tubo-aco-inox-misto-aceros-01.jpg',
];

export function TubosInoxClient() {
  const { toast } = useToast();
  const { language } = useLanguage();
  const c = tubosCopy[language] ?? tubosCopy.pt;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const whatsappNumber = '551155556551';
  const whatsappMessage = encodeURIComponent(c.whatsappMessage);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.set('source', 'lp-tubos');
    formData.set('product', 'Tubos de aço inox centrifugados');
    formData.set('privacy', formData.get('privacy') ? 'true' : 'false');

    try {
      const result = await saveContactMessage(formData);
      if (result.success) {
        toast({ title: c.toastOkTitle, description: c.toastOkDesc });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.error);
      }
    } catch (error: any) {
      toast({ variant: 'destructive', title: c.toastErrTitle, description: error.message || c.toastErrDesc });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-foreground font-body overflow-x-hidden">
      {/* Hero */}
      <section className="relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-[#07121e] text-white">
        <Image src="/images/aceros/tubos/tubo-aco-inox-polido-aceros-05.jpg" alt={c.heroImgAlt} fill sizes="100vw" className="object-cover object-center opacity-70" priority />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#07121e_0%,rgba(7,18,30,.94)_42%,rgba(7,18,30,.42)_72%,rgba(7,18,30,.12)_100%)]" />
        <div className="absolute left-0 top-0 h-full w-1 bg-accent" />
        <div className="container relative z-10 mx-auto flex min-h-[calc(100svh-80px)] items-center px-4 py-10 sm:py-16 lg:pb-28 lg:pt-20">
          <div className="w-full max-w-[920px]">
            <div className="mb-5 flex animate-fade-in-up items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-accent sm:mb-7 sm:text-[11px] sm:tracking-[0.24em]">
              <span className="h-px w-10 bg-accent" />
              {c.heroEyebrow}
            </div>
            <h1 className="max-w-[900px] animate-fade-in-up text-balance font-headline text-[2rem] font-semibold uppercase leading-[1.08] tracking-[-0.025em] text-white sm:text-[clamp(2.25rem,3.35vw,3.65rem)]">
              {c.heroTitle}
            </h1>
            <p className="mt-5 max-w-[700px] animate-fade-in-up border-l border-accent/80 pl-4 text-[15px] leading-6 text-slate-200 sm:mt-7 sm:pl-5 sm:text-lg sm:leading-8">
              {c.heroLead}
            </p>
            <div className="mt-7 flex animate-fade-in-up flex-col gap-3 sm:mt-10 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-none bg-accent px-8 text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#cf5f11] sm:h-16">
                <Link href="#form-landing-tubos">{c.ctaRequestQuote}</Link>
              </Button>
              <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="track-whatsapp-tubos inline-flex h-14 items-center justify-center gap-2 whitespace-nowrap rounded-none border border-white/35 bg-white/5 px-8 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-[#07121e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-16">
                {c.ctaWhatsappTeam}
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-20 hidden border-t border-white/15 bg-[#07121e] lg:block">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300 [&>span]:border-r [&>span]:border-white/10 [&>span]:px-5 [&>span]:py-4 [&>span:last-child]:border-0">
              {c.strip.map((s, i) => {
                const Icone = stripIcons[i];
                return <span key={s} className="flex items-center gap-2"><Icone className="h-5 w-5" /> {s}</span>;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase">{c.introTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{c.introP1}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.introP2}</p>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/images/aceros/tubos/tubo-aco-inox-usinado-aceros-03.jpg" alt={c.introImgAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Especificações */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 uppercase">{c.specsTitle}</h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="p-6 font-semibold">{c.specsCol1}</th>
                    <th className="p-6 font-semibold">{c.specsCol2}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {c.specRows.map(([col1, col2]) => (
                    <tr key={col1}>
                      <td className="p-6 font-bold bg-slate-50/50">{col1}</td>
                      <td className="p-6">{col2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-6 text-slate-500 italic text-center">{c.specsFooter}</p>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 uppercase">{c.differentialsTitle}</h2>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {c.differentials.map((item, i) => {
              const Icone = differentialIcons[i] ?? Settings;
              return (
                <Card key={item.title} className="flex h-full flex-col border-slate-100 transition-shadow hover:shadow-lg">
                  <CardHeader className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-4 rounded-xl text-primary mb-4"><Icone className="h-8 w-8" /></div>
                    <CardTitle className="flex min-h-[3.5rem] items-center justify-center text-xl leading-tight">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 text-center text-muted-foreground">{item.text}</CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="bg-primary py-14 text-white sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase">{c.applicationsTitle}</h2>
            <p className="text-slate-400 mt-4">{c.applicationsLead}</p>
          </div>
          <div className="grid grid-cols-2 items-stretch gap-8 md:grid-cols-3 lg:grid-cols-5">
            {c.applicationLabels.map((label, i) => {
              const Icone = applicationIcons[i] ?? Factory;
              return (
                <div key={label} className="flex h-full min-h-[150px] flex-col items-center justify-center gap-4 rounded-2xl bg-white/5 p-6 transition-colors hover:bg-white/10">
                  <Icone className="h-10 w-10 text-accent" />
                  <span className="font-semibold text-center">{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 uppercase">{c.galleryTitle}</h2>
            <p className="text-muted-foreground mt-4">{c.galleryLead}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryUrls.map((url, i) => {
              const alt = c.galleryAlts[i] ?? '';
              return (
                <Dialog key={url}>
                  <DialogTrigger asChild>
                    <button type="button" aria-label={`${c.zoomAria}: ${alt}`} className="group relative block aspect-square w-full cursor-pointer overflow-hidden rounded-xl bg-gray-100 text-left shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
                      <Image src={url} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"><Search className="h-10 w-10 text-white" /></span>
                      <span className="absolute bottom-0 w-full bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 pt-10 text-sm font-medium leading-snug text-white">{alt}</span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-4">
                    <DialogHeader><DialogTitle className="pr-8 text-left text-base">{alt}</DialogTitle></DialogHeader>
                    <div className="relative aspect-video w-full mt-4"><Image src={url} alt={alt} fill sizes="(max-width: 896px) 95vw, 896px" className="object-contain" /></div>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 uppercase">{c.processTitle}</h2>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-slate-200 hidden md:block"></div>
            <div className="space-y-12">
              {c.processSteps.map((item, i) => (
                <div key={item.title} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full md:text-right">
                    <div className={`${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'} p-6 bg-white rounded-2xl shadow-md`}>
                      <span className="text-xl font-bold text-[#a94700]">{String(i + 1).padStart(2, '0')}</span>
                      <h4 className="text-lg font-bold text-slate-900 mt-2">{item.title}</h4>
                      <p className="text-muted-foreground mt-2">{item.desc}</p>
                    </div>
                  </div>
                  <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#b54b00] font-bold text-white ring-8 ring-slate-50"><Plus className="h-5 w-5" /></div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ISO */}
      <section className="relative overflow-hidden bg-primary py-14 text-white sm:py-20">
        <div className="absolute inset-0 opacity-5"><div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1 text-accent text-sm font-semibold uppercase tracking-wide mb-4"><Award className="h-4 w-4" /> {c.isoBadge}</div>
              <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase leading-tight mb-6">{c.isoTitle1}<span className="text-accent">{c.isoTitleAccent}</span></h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">{c.isoLead}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/5 border border-slate-700 rounded-lg p-4">
                  <div className="text-slate-400 uppercase text-xs mb-1">{c.isoCertLabel}</div>
                  <div className="text-white font-mono font-bold">60300915 QM15</div>
                </div>
                <div className="bg-white/5 border border-slate-700 rounded-lg p-4">
                  <div className="text-slate-400 uppercase text-xs mb-1">{c.isoValidLabel}</div>
                  <div className="text-white font-bold">19/11/2028</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-6 italic">{c.isoFooter}</p>
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

      {/* CTA mid */}
      <section className="bg-[#b54b00] py-14 text-white sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase mb-6">{c.ctaMidTitle}</h2>
          <p className="mx-auto mb-10 max-w-3xl text-xl text-white/90">{c.ctaMidLead}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-black px-12 py-8 text-xl"><Link href="#form-landing-tubos">{c.ctaMidRequest}</Link></Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-12 py-8 text-xl">
              <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="track-whatsapp-tubos">{c.ctaMidWhatsapp}</Link>
            </Button>
          </div>
        </div>
      </section>

      <RelatedSolutions currentPath="/tubos-de-aco-inox" />

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 uppercase">{c.faqTitle}</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {c.faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i + 1}`}>
                <AccordionTrigger className="text-left font-bold text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Formulário */}
      <section id="form-landing-tubos" className="bg-slate-50 py-14 sm:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 bg-primary text-white flex flex-col justify-center">
              <h2 className="font-headline text-3xl font-bold uppercase mb-6">{c.formTitle}</h2>
              <p className="text-slate-300 mb-3">{c.formLead1}</p>
              <p className="mb-8 text-sm font-semibold text-white">{c.formLead2}</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-3 rounded-full"><Phone className="h-6 w-6 text-accent" /></div>
                  <Link href="tel:+551155556551" className="track-telefone-tubos hover:text-accent transition-colors">+55 (11) 5555-6551</Link>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-3 rounded-full"><Mail className="h-6 w-6 text-accent" /></div>
                  <Link href="mailto:vendas@aceros.com.br" className="track-email-tubos hover:text-accent transition-colors">vendas@aceros.com.br</Link>
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
                  <div><label htmlFor="tubos-name" className="text-sm font-bold text-slate-700 block mb-2">{c.formName} *</label><Input id="tubos-name" name="name" autoComplete="name" placeholder={c.formNamePh} required className="bg-slate-50 border-slate-200" disabled={isSubmitting} /></div>
                  <div><label htmlFor="tubos-company" className="text-sm font-bold text-slate-700 block mb-2">{c.formCompany} *</label><Input id="tubos-company" name="company" autoComplete="organization" placeholder={c.formCompanyPh} required className="bg-slate-50 border-slate-200" disabled={isSubmitting} /></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label htmlFor="tubos-phone" className="text-sm font-bold text-slate-700 block mb-2">{c.formPhone} *</label><Input id="tubos-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(00) 00000-0000" required className="bg-slate-50 border-slate-200" disabled={isSubmitting} /></div>
                    <div><label htmlFor="tubos-city" className="text-sm font-bold text-slate-700 block mb-2">{c.formCity}</label><Input id="tubos-city" name="city" autoComplete="address-level1" placeholder={c.formCityPh} className="bg-slate-50 border-slate-200" disabled={isSubmitting} /></div>
                  </div>
                  <div><label htmlFor="tubos-email" className="text-sm font-bold text-slate-700 block mb-2">{c.formEmail} *</label><Input id="tubos-email" name="email" type="email" autoComplete="email" placeholder={c.formEmailPh} required className="bg-slate-50 border-slate-200 track-email-tubos" disabled={isSubmitting} /></div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div><label htmlFor="tubos-material" className="mb-2 block text-sm font-bold text-slate-700">{c.formMaterial}</label><Input id="tubos-material" name="material" placeholder={c.formMaterialPh} className="border-slate-200 bg-slate-50" disabled={isSubmitting} /></div>
                    <div><label htmlFor="tubos-deadline" className="mb-2 block text-sm font-bold text-slate-700">{c.formDeadline}</label><Input id="tubos-deadline" name="deadline" placeholder={c.formDeadlinePh} className="border-slate-200 bg-slate-50" disabled={isSubmitting} /></div>
                  </div>
                  <div><label htmlFor="tubos-dimensions" className="mb-2 block text-sm font-bold text-slate-700">{c.formDimensions} *</label><Input id="tubos-dimensions" name="dimensions" placeholder={c.formDimensionsPh} required className="border-slate-200 bg-slate-50" disabled={isSubmitting} /></div>
                  <div><label htmlFor="tubos-drawing" className="mb-2 block text-sm font-bold text-slate-700">{c.formDrawing}</label><Input id="tubos-drawing" name="drawing" type="file" accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.jpg,.jpeg,.png" className="h-auto border-slate-200 bg-slate-50 py-2 text-sm" disabled={isSubmitting} /><p className="mt-2 text-xs leading-5 text-slate-500">{c.formDrawingHelp}</p></div>
                  <div><label htmlFor="tubos-message" className="text-sm font-bold text-slate-700 block mb-2">{c.formMessage}</label><Textarea id="tubos-message" name="message" placeholder={c.formMessagePh} rows={4} className="bg-slate-50 border-slate-200" disabled={isSubmitting} /></div>
                </div>
                <label className="flex items-start gap-3 text-xs leading-relaxed text-slate-600">
                  <input type="checkbox" id="tubos-privacy" name="privacy" required disabled={isSubmitting} className="mt-0.5 h-4 w-4 shrink-0 accent-orange-500" />
                  <span>{c.formPrivacyA}<Link href="/politica-de-privacidade" className="underline font-bold text-slate-900 hover:text-accent">{c.formPrivacyLink}</Link>{c.formPrivacyB} *</span>
                </label>
                <Button type="submit" disabled={isSubmitting} className="w-full rounded-none bg-[#b54b00] py-7 text-base font-bold uppercase tracking-wider text-white hover:bg-[#963e00] sm:text-lg">
                  {isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" />{c.formSubmitting}</> : <><Send className="mr-2 h-5 w-5" /> {c.formSubmit}</>}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
