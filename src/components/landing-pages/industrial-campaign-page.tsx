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
import { useLanguage, type Language } from '@/hooks/use-language';

type CampaignUi = {
  ctaRequest: string; ctaWhatsapp: string;
  strip: Array<[string, string]>;
  overviewEyebrow: string;
  applicationsEyebrow: string; applicationsTitle: string;
  specsTitle: string;
  galleryEyebrow: string; galleryTitle: string; galleryLead: string;
  pillars: Array<[string, string]>;
  faqEyebrow: string; faqTitle: string;
  quoteEyebrow: string; quoteTitle: string; quoteLead: string;
  formName: string; formCompany: string; formPhone: string; formEmail: string;
  formCity: string; formMaterial: string; formMaterialPh: string;
  formDeadline: string; formDeadlinePh: string;
  formDimensions: string; formDimensionsPh: string;
  formDrawing: string; formDrawingHelp: string;
  formMessage: string;
  formPrivacyA: string; formPrivacyLink: string; formPrivacyB: string;
  formReturn: string; formSubmitting: string; formSubmit: string;
  toastSuccessTitle: string; toastSuccessDesc: string;
  toastErrorTitle: string; toastErrorDesc: string;
  imageZoomAria: string;
};

const ui: Record<Language, CampaignUi> = {
  pt: {
    ctaRequest: 'Solicitar orçamento', ctaWhatsapp: 'Falar no WhatsApp',
    strip: [['Sob medida', 'Conforme desenho e condição de operação'], ['ASTM A297', 'Ligas resistentes a calor, abrasão e oxidação'], ['Controle técnico', 'Rastreabilidade, usinagem e inspeção']],
    overviewEyebrow: 'Engenharia aplicada',
    applicationsEyebrow: 'Aplicações industriais', applicationsTitle: 'Onde este produto trabalha',
    specsTitle: 'Especificação orientada pela aplicação',
    galleryEyebrow: 'Produtos reais Aceros', galleryTitle: 'Fabricação e acabamento',
    galleryLead: 'Imagens do acervo técnico e do catálogo da empresa, correspondentes às aplicações apresentadas.',
    pillars: [['Controle de qualidade', 'Análise de liga, dureza, ultrassom e inspeção dimensional conforme os requisitos do fornecimento.'], ['Usinagem de precisão', 'Acabamento dimensional adequado à montagem e à condição real de trabalho.'], ['Rastreabilidade', 'Identificação e documentação técnica desde a matéria-prima até a peça final.']],
    faqEyebrow: 'Dúvidas técnicas', faqTitle: 'Perguntas frequentes',
    quoteEyebrow: 'Cotação técnica', quoteTitle: 'Envie seu projeto',
    quoteLead: 'Nossa equipe analisa desenho, liga, dimensões e condição de operação.',
    formName: 'Nome completo', formCompany: 'Empresa', formPhone: 'Telefone / WhatsApp', formEmail: 'E-mail corporativo',
    formCity: 'Cidade / UF', formMaterial: 'Liga ou material', formMaterialPh: 'Se conhecido',
    formDeadline: 'Prazo desejado', formDeadlinePh: 'Ex.: 60 dias',
    formDimensions: 'Dimensões e quantidade', formDimensionsPh: 'Diâmetros, comprimento e quantidade',
    formDrawing: 'Desenho técnico', formDrawingHelp: 'PDF, DWG, DXF, STEP, IGES, JPG ou PNG, até 5 MB.',
    formMessage: 'Informações adicionais',
    formPrivacyA: 'Li e aceito a ', formPrivacyLink: 'Política de Privacidade', formPrivacyB: ' e autorizo o uso dos dados para retorno desta solicitação.',
    formReturn: 'Retorno comercial em até um dia útil.', formSubmitting: 'Enviando...', formSubmit: 'Solicitar orçamento',
    toastSuccessTitle: 'Solicitação enviada', toastSuccessDesc: 'Nossa equipe técnica entrará em contato.',
    toastErrorTitle: 'Não foi possível enviar', toastErrorDesc: 'Fale conosco pelo WhatsApp para agilizar sua cotação.',
    imageZoomAria: 'Ampliar',
  },
  en: {
    ctaRequest: 'Request a quote', ctaWhatsapp: 'Chat on WhatsApp',
    strip: [['Custom-made', 'To your drawing and operating condition'], ['ASTM A297', 'Alloys resistant to heat, abrasion and oxidation'], ['Technical control', 'Traceability, machining and inspection']],
    overviewEyebrow: 'Applied engineering',
    applicationsEyebrow: 'Industrial applications', applicationsTitle: 'Where this product works',
    specsTitle: 'Application-driven specification',
    galleryEyebrow: 'Real Aceros products', galleryTitle: 'Manufacturing and finishing',
    galleryLead: 'Images from our technical library and product catalogue, aligned with the applications shown here.',
    pillars: [['Quality control', 'Alloy analysis, hardness, ultrasound and dimensional inspection per the supply requirements.'], ['Precision machining', 'Dimensional finish matched to assembly and actual operating conditions.'], ['Traceability', 'Identification and technical documentation from raw material to finished part.']],
    faqEyebrow: 'Technical questions', faqTitle: 'Frequently asked questions',
    quoteEyebrow: 'Technical quote', quoteTitle: 'Send us your project',
    quoteLead: 'Our team reviews drawing, alloy, dimensions and operating conditions.',
    formName: 'Full name', formCompany: 'Company', formPhone: 'Phone / WhatsApp', formEmail: 'Business e-mail',
    formCity: 'City / State', formMaterial: 'Alloy or material', formMaterialPh: 'If known',
    formDeadline: 'Desired lead time', formDeadlinePh: 'E.g. 60 days',
    formDimensions: 'Dimensions and quantity', formDimensionsPh: 'Diameters, length and quantity',
    formDrawing: 'Technical drawing', formDrawingHelp: 'PDF, DWG, DXF, STEP, IGES, JPG or PNG, up to 5 MB.',
    formMessage: 'Additional information',
    formPrivacyA: 'I have read and accept the ', formPrivacyLink: 'Privacy Policy', formPrivacyB: ' and authorise the use of my data to reply to this request.',
    formReturn: 'Commercial reply within one business day.', formSubmitting: 'Sending...', formSubmit: 'Request a quote',
    toastSuccessTitle: 'Request submitted', toastSuccessDesc: 'Our technical team will reach out.',
    toastErrorTitle: 'Could not send', toastErrorDesc: 'Reach us on WhatsApp to speed up your quote.',
    imageZoomAria: 'Enlarge',
  },
  es: {
    ctaRequest: 'Solicitar presupuesto', ctaWhatsapp: 'Hablar por WhatsApp',
    strip: [['A medida', 'Según plano y condición de operación'], ['ASTM A297', 'Aleaciones resistentes al calor, abrasión y oxidación'], ['Control técnico', 'Trazabilidad, mecanizado e inspección']],
    overviewEyebrow: 'Ingeniería aplicada',
    applicationsEyebrow: 'Aplicaciones industriales', applicationsTitle: 'Dónde trabaja este producto',
    specsTitle: 'Especificación orientada a la aplicación',
    galleryEyebrow: 'Productos reales Aceros', galleryTitle: 'Fabricación y acabado',
    galleryLead: 'Imágenes del archivo técnico y del catálogo de la empresa, correspondientes a las aplicaciones mostradas.',
    pillars: [['Control de calidad', 'Análisis de aleación, dureza, ultrasonido e inspección dimensional según los requisitos del suministro.'], ['Mecanizado de precisión', 'Acabado dimensional adecuado al montaje y a la condición real de trabajo.'], ['Trazabilidad', 'Identificación y documentación técnica desde la materia prima hasta la pieza final.']],
    faqEyebrow: 'Dudas técnicas', faqTitle: 'Preguntas frecuentes',
    quoteEyebrow: 'Cotización técnica', quoteTitle: 'Envíe su proyecto',
    quoteLead: 'Nuestro equipo analiza plano, aleación, dimensiones y condición de operación.',
    formName: 'Nombre completo', formCompany: 'Empresa', formPhone: 'Teléfono / WhatsApp', formEmail: 'E-mail corporativo',
    formCity: 'Ciudad / Estado', formMaterial: 'Aleación o material', formMaterialPh: 'Si se conoce',
    formDeadline: 'Plazo deseado', formDeadlinePh: 'Ej.: 60 días',
    formDimensions: 'Dimensiones y cantidad', formDimensionsPh: 'Diámetros, longitud y cantidad',
    formDrawing: 'Plano técnico', formDrawingHelp: 'PDF, DWG, DXF, STEP, IGES, JPG o PNG, hasta 5 MB.',
    formMessage: 'Información adicional',
    formPrivacyA: 'He leído y acepto la ', formPrivacyLink: 'Política de Privacidad', formPrivacyB: ' y autorizo el uso de los datos para responder a esta solicitud.',
    formReturn: 'Respuesta comercial en un día hábil.', formSubmitting: 'Enviando...', formSubmit: 'Solicitar presupuesto',
    toastSuccessTitle: 'Solicitud enviada', toastSuccessDesc: 'Nuestro equipo técnico se pondrá en contacto.',
    toastErrorTitle: 'No se pudo enviar', toastErrorDesc: 'Contáctenos por WhatsApp para agilizar su cotización.',
    imageZoomAria: 'Ampliar',
  },
  de: {
    ctaRequest: 'Angebot anfordern', ctaWhatsapp: 'Auf WhatsApp schreiben',
    strip: [['Nach Maß', 'Nach Zeichnung und Betriebsbedingung'], ['ASTM A297', 'Legierungen gegen Hitze, Verschleiß und Oxidation'], ['Technische Kontrolle', 'Rückverfolgbarkeit, Bearbeitung und Prüfung']],
    overviewEyebrow: 'Angewandte Konstruktion',
    applicationsEyebrow: 'Industrielle Einsätze', applicationsTitle: 'Wo dieses Produkt arbeitet',
    specsTitle: 'Anwendungsgerechte Spezifikation',
    galleryEyebrow: 'Reale Aceros-Produkte', galleryTitle: 'Fertigung und Ausführung',
    galleryLead: 'Bilder aus unserem technischen Archiv und Katalog, passend zu den gezeigten Einsätzen.',
    pillars: [['Qualitätskontrolle', 'Legierungsanalyse, Härte, Ultraschall und Maßprüfung gemäß Liefervorgaben.'], ['Präzisionsbearbeitung', 'Maßhaltige Ausführung passend zu Montage und Betriebsbedingung.'], ['Rückverfolgbarkeit', 'Kennzeichnung und Dokumentation vom Rohstoff bis zum fertigen Bauteil.']],
    faqEyebrow: 'Technische Fragen', faqTitle: 'Häufige Fragen',
    quoteEyebrow: 'Technisches Angebot', quoteTitle: 'Senden Sie uns Ihr Projekt',
    quoteLead: 'Wir prüfen Zeichnung, Legierung, Abmessungen und Betriebsbedingung.',
    formName: 'Vollständiger Name', formCompany: 'Unternehmen', formPhone: 'Telefon / WhatsApp', formEmail: 'Geschäftliche E-Mail',
    formCity: 'Ort / Land', formMaterial: 'Legierung oder Werkstoff', formMaterialPh: 'Falls bekannt',
    formDeadline: 'Gewünschte Lieferzeit', formDeadlinePh: 'z. B. 60 Tage',
    formDimensions: 'Abmessungen und Menge', formDimensionsPh: 'Durchmesser, Länge und Menge',
    formDrawing: 'Technische Zeichnung', formDrawingHelp: 'PDF, DWG, DXF, STEP, IGES, JPG oder PNG, bis 5 MB.',
    formMessage: 'Weitere Angaben',
    formPrivacyA: 'Ich habe die ', formPrivacyLink: 'Datenschutzerklärung', formPrivacyB: ' gelesen und akzeptiert und erlaube die Datennutzung zur Beantwortung dieser Anfrage.',
    formReturn: 'Kaufmännische Antwort innerhalb eines Werktags.', formSubmitting: 'Wird gesendet...', formSubmit: 'Angebot anfordern',
    toastSuccessTitle: 'Anfrage gesendet', toastSuccessDesc: 'Unser Technik-Team meldet sich.',
    toastErrorTitle: 'Senden nicht möglich', toastErrorDesc: 'Schreiben Sie uns auf WhatsApp, um das Angebot zu beschleunigen.',
    imageZoomAria: 'Vergrößern',
  },
  it: {
    ctaRequest: 'Richiedi preventivo', ctaWhatsapp: 'Scrivi su WhatsApp',
    strip: [['Su misura', 'Secondo disegno e condizione operativa'], ['ASTM A297', 'Leghe resistenti a calore, abrasione e ossidazione'], ['Controllo tecnico', 'Tracciabilità, lavorazione e ispezione']],
    overviewEyebrow: 'Ingegneria applicata',
    applicationsEyebrow: 'Applicazioni industriali', applicationsTitle: 'Dove lavora questo prodotto',
    specsTitle: 'Specifica orientata all\'applicazione',
    galleryEyebrow: 'Prodotti reali Aceros', galleryTitle: 'Produzione e finitura',
    galleryLead: 'Immagini dall\'archivio tecnico e dal catalogo, coerenti con le applicazioni mostrate.',
    pillars: [['Controllo qualità', 'Analisi lega, durezza, ultrasuoni e ispezione dimensionale secondo i requisiti della fornitura.'], ['Lavorazione di precisione', 'Finitura dimensionale adeguata al montaggio e alla condizione reale di lavoro.'], ['Tracciabilità', 'Identificazione e documentazione tecnica dalla materia prima al pezzo finito.']],
    faqEyebrow: 'Domande tecniche', faqTitle: 'Domande frequenti',
    quoteEyebrow: 'Preventivo tecnico', quoteTitle: 'Invia il tuo progetto',
    quoteLead: 'Il nostro team analizza disegno, lega, dimensioni e condizione operativa.',
    formName: 'Nome completo', formCompany: 'Azienda', formPhone: 'Telefono / WhatsApp', formEmail: 'E-mail aziendale',
    formCity: 'Città / Provincia', formMaterial: 'Lega o materiale', formMaterialPh: 'Se noto',
    formDeadline: 'Tempo di consegna', formDeadlinePh: 'Es.: 60 giorni',
    formDimensions: 'Dimensioni e quantità', formDimensionsPh: 'Diametri, lunghezza e quantità',
    formDrawing: 'Disegno tecnico', formDrawingHelp: 'PDF, DWG, DXF, STEP, IGES, JPG o PNG, fino a 5 MB.',
    formMessage: 'Informazioni aggiuntive',
    formPrivacyA: 'Ho letto e accetto l\'', formPrivacyLink: 'Informativa sulla privacy', formPrivacyB: ' e autorizzo l\'uso dei dati per rispondere a questa richiesta.',
    formReturn: 'Risposta commerciale entro un giorno lavorativo.', formSubmitting: 'Invio in corso...', formSubmit: 'Richiedi preventivo',
    toastSuccessTitle: 'Richiesta inviata', toastSuccessDesc: 'Il nostro team tecnico ti contatterà.',
    toastErrorTitle: 'Impossibile inviare', toastErrorDesc: 'Scrivici su WhatsApp per accelerare il preventivo.',
    imageZoomAria: 'Ingrandisci',
  },
};

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

export function IndustrialCampaignPage({
  data: baseData,
  dataByLang,
}: {
  data: CampaignPageData;
  dataByLang?: Partial<Record<Language, CampaignPageData>>;
}) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage();
  const u = ui[language] ?? ui.pt;
  const data = dataByLang?.[language] ?? baseData;
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
      toast({ title: u.toastSuccessTitle, description: u.toastSuccessDesc });
      form.reset();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: u.toastErrorTitle,
        description: error instanceof Error ? error.message : u.toastErrorDesc,
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
                <Link href="#solicitar-orcamento">{u.ctaRequest} <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" className="h-14 rounded-none border-white/50 bg-transparent px-7 text-base font-bold uppercase text-white hover:bg-white hover:text-[#07121e]">
                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="track-whatsapp">{u.ctaWhatsapp} <MessageCircle className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden border-b border-slate-200 bg-[#0d1d2d] text-white sm:block">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 px-5 sm:grid-cols-3 lg:px-10">
          {u.strip.map(([title, text]) => (
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
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#a94700]">{u.overviewEyebrow}</p>
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
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#a94700]">{u.applicationsEyebrow}</p>
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">{u.applicationsTitle}</h2>
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
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">{u.specsTitle}</h2>
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
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#a94700]">{u.galleryEyebrow}</p>
              <h2 className="font-headline text-3xl font-bold sm:text-4xl">{u.galleryTitle}</h2>
            </div>
            <p className="max-w-xl text-slate-600">{u.galleryLead}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {data.gallery.map((image) => (
              <Dialog key={image.src}>
                <DialogTrigger asChild>
                  <button type="button" aria-label={`${u.imageZoomAria}: ${image.alt}`} className="group relative block aspect-[4/3] w-full overflow-hidden bg-slate-100 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef7b21] focus-visible:ring-offset-2">
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
          {([ShieldCheck, Gauge, FileCheck2] as const).map((ItemIcon, i) => {
            const [title, text] = u.pillars[i];
            return <div key={title} className="flex gap-4"><ItemIcon className="h-9 w-9 shrink-0 text-[#ef7b21]" /><div><h3 className="font-headline text-xl font-bold">{title}</h3><p className="mt-2 leading-7 text-slate-300">{text}</p></div></div>;
          })}
        </div>
      </section>

      <RelatedSolutions currentPath={data.path} />

      <section className="py-14 sm:py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#a94700]">{u.faqEyebrow}</p>
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">{u.faqTitle}</h2>
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
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a94700]">{u.quoteEyebrow}</p>
            <h2 className="mt-3 font-headline text-3xl font-bold">{u.quoteTitle}</h2>
            <p className="mt-3 leading-7 text-slate-600">{u.quoteLead}</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor={`${data.source}-name`} className="mb-2 block text-sm font-bold text-slate-700">{u.formName} *</label><Input id={`${data.source}-name`} name="name" autoComplete="name" required minLength={2} className="h-12 rounded-none bg-white" disabled={isSubmitting} /></div>
                <div><label htmlFor={`${data.source}-company`} className="mb-2 block text-sm font-bold text-slate-700">{u.formCompany} *</label><Input id={`${data.source}-company`} name="company" autoComplete="organization" required className="h-12 rounded-none bg-white" disabled={isSubmitting} /></div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor={`${data.source}-phone`} className="mb-2 block text-sm font-bold text-slate-700">{u.formPhone} *</label><Input id={`${data.source}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" required minLength={10} className="h-12 rounded-none bg-white" disabled={isSubmitting} /></div>
                <div><label htmlFor={`${data.source}-email`} className="mb-2 block text-sm font-bold text-slate-700">{u.formEmail} *</label><Input id={`${data.source}-email`} name="email" autoComplete="email" required type="email" className="h-12 rounded-none bg-white" disabled={isSubmitting} /></div>
              </div>
              <div><label htmlFor={`${data.source}-city`} className="mb-2 block text-sm font-bold text-slate-700">{u.formCity}</label><Input id={`${data.source}-city`} name="city" autoComplete="address-level1" className="h-12 rounded-none bg-white" disabled={isSubmitting} /></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor={`${data.source}-material`} className="mb-2 block text-sm font-bold text-slate-700">{u.formMaterial}</label><Input id={`${data.source}-material`} name="material" placeholder={u.formMaterialPh} className="h-12 rounded-none bg-white" disabled={isSubmitting} /></div>
                <div><label htmlFor={`${data.source}-deadline`} className="mb-2 block text-sm font-bold text-slate-700">{u.formDeadline}</label><Input id={`${data.source}-deadline`} name="deadline" placeholder={u.formDeadlinePh} className="h-12 rounded-none bg-white" disabled={isSubmitting} /></div>
              </div>
              <div><label htmlFor={`${data.source}-dimensions`} className="mb-2 block text-sm font-bold text-slate-700">{u.formDimensions} *</label><Input id={`${data.source}-dimensions`} name="dimensions" required placeholder={u.formDimensionsPh} className="h-12 rounded-none bg-white" disabled={isSubmitting} /></div>
              <div><label htmlFor={`${data.source}-drawing`} className="mb-2 block text-sm font-bold text-slate-700">{u.formDrawing}</label><Input id={`${data.source}-drawing`} name="drawing" type="file" accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.jpg,.jpeg,.png" className="h-auto rounded-none bg-white py-2 text-sm" disabled={isSubmitting} /><p className="mt-2 text-xs leading-5 text-slate-500">{u.formDrawingHelp}</p></div>
              <div><label htmlFor={`${data.source}-message`} className="mb-2 block text-sm font-bold text-slate-700">{u.formMessage}</label><Textarea id={`${data.source}-message`} name="message" rows={5} placeholder={data.formHint} className="rounded-none bg-white" disabled={isSubmitting} /></div>
              <label className="flex items-start gap-3 text-xs leading-5 text-slate-600"><input type="checkbox" name="privacy" required disabled={isSubmitting} className="mt-0.5 h-4 w-4 shrink-0 accent-orange-600" /><span>{u.formPrivacyA}<Link href="/politica-de-privacidade" className="font-semibold text-slate-900 underline">{u.formPrivacyLink}</Link>{u.formPrivacyB} *</span></label>
              <p className="text-sm font-semibold text-slate-700">{u.formReturn}</p>
              <Button type="submit" disabled={isSubmitting} className="h-14 w-full rounded-none bg-[#b54b00] text-base font-bold uppercase text-white hover:bg-[#963e00]">
                {isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" />{u.formSubmitting}</> : <><Send className="mr-2 h-5 w-5" />{u.formSubmit}</>}
              </Button>
              <Button asChild variant="outline" className="h-14 w-full rounded-none border-[#07121e] text-base font-bold uppercase">
                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="track-whatsapp"><MessageCircle className="mr-2 h-5 w-5" />{u.ctaWhatsapp}</Link>
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
