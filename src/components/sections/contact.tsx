
'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock3 } from 'lucide-react';
import { LocationMap } from './location-map';
import { saveContactMessage } from '@/lib/contact-actions';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { WhatsAppCta } from './whatsapp-cta';
import { useLanguage } from '@/hooks/use-language';

const formSchema = z.object({
  name: z.string().min(2, { message: 'O nome é obrigatório.' }),
  company: z.string().min(2, { message: 'A empresa é obrigatória.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  phone: z
    .string()
    .min(10, { message: 'Por favor, insira um telefone válido.' }),
  product: z.string().min(2, { message: 'Informe o produto ou a aplicação.' }),
  material: z.string().optional(),
  dimensions: z.string().min(2, { message: 'Informe as dimensões e a quantidade.' }),
  deadline: z.string().optional(),
  location: z.string().min(2, { message: 'Informe o país e o estado.' }),
  drawing: z
    .any()
    .refine(
      (files) => !files?.[0] || files[0].size <= 5 * 1024 * 1024,
      'O arquivo deve ter no máximo 5 MB.',
    ),
  message: z.string().optional(),
  privacy: z.boolean().refine((accepted) => accepted, {
    message: 'É necessário aceitar a Política de Privacidade.',
  }),
});

export function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      product: '',
      material: '',
      dimensions: '',
      deadline: '',
      location: '',
      drawing: undefined,
      message: '',
      privacy: false,
    },
  });

  const whatsappMessage = encodeURIComponent(t.whatsapp.message);
  const whatsappNumber = '551155556551';

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = new FormData();
    payload.set('name', values.name);
    payload.set('company', values.company);
    payload.set('email', values.email);
    payload.set('phone', values.phone);
    payload.set('product', values.product);
    payload.set('material', values.material || '');
    payload.set('dimensions', values.dimensions);
    payload.set('deadline', values.deadline || '');
    payload.set('location', values.location);
    payload.set('message', values.message || '');
    payload.set('privacy', String(values.privacy));

    const drawing = values.drawing?.[0];
    if (drawing) payload.set('drawing', drawing);

    const result = await saveContactMessage(payload);
    if (result.success) {
      toast({
        title: t.contact.toast_success_title,
        description: t.contact.toast_success_description,
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: t.contact.toast_error_title,
        description:
          result.error || t.contact.toast_error_description,
      });
    }
  }

  return (
    <>
      <section
        id="contact"
        className="bg-[#f3f4f6]"
      >
        <div className="bg-[#07121e] py-16 text-white sm:py-20">
          <div className="mx-auto max-w-[1280px] px-5 text-center lg:px-10">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#ef7b21]">
              {t.contact.eyebrow}
            </p>
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              {t.contact.title}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              {t.contact.subtitle}
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[1280px] px-5 pt-16 lg:px-10 lg:pt-20">
          <Card className="mx-auto max-w-6xl overflow-hidden rounded-none border-0 border-t-4 border-[#ef7b21] shadow-[0_24px_60px_rgba(7,18,30,.14)] animate-fade-in-up">
            <CardContent className="grid p-0 md:grid-cols-5">
              <div className="p-8 sm:p-12 md:col-span-3">
                <h3 className="mb-8 font-headline text-2xl font-bold text-[#07121e] sm:text-3xl">
                  {t.contact.form_title}
                </h3>
                <p className="-mt-4 mb-8 text-sm leading-6 text-slate-600">
                  {t.contact.form_required_hint}
                </p>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">{t.contact.form_name} *</FormLabel>
                          <FormControl><Input required autoComplete="name" placeholder={t.contact.form_name_placeholder} className="rounded-none border-slate-300 bg-[#f8fafc] py-6 text-base focus-visible:ring-[#ef7b21]" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="company" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">{t.contact.form_company} *</FormLabel>
                          <FormControl><Input required autoComplete="organization" placeholder={t.contact.form_company_placeholder} className="rounded-none border-slate-300 bg-[#f8fafc] py-6 text-base focus-visible:ring-[#ef7b21]" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">{t.contact.form_email} *</FormLabel>
                          <FormControl><Input required autoComplete="email" type="email" placeholder={t.contact.form_email_placeholder} className="rounded-none border-slate-300 bg-[#f8fafc] py-6 text-base focus-visible:ring-[#ef7b21]" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">{t.contact.form_phone} *</FormLabel>
                          <FormControl><Input required autoComplete="tel" inputMode="tel" placeholder={t.contact.form_phone_placeholder} className="rounded-none border-slate-300 bg-[#f8fafc] py-6 text-base focus-visible:ring-[#ef7b21]" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField control={form.control} name="product" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">{t.contact.form_product} *</FormLabel>
                          <FormControl><Input required placeholder={t.contact.form_product_placeholder} className="rounded-none border-slate-300 bg-[#f8fafc] py-6 text-base focus-visible:ring-[#ef7b21]" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="material" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">{t.contact.form_material}</FormLabel>
                          <FormControl><Input placeholder={t.contact.form_material_placeholder} className="rounded-none border-slate-300 bg-[#f8fafc] py-6 text-base focus-visible:ring-[#ef7b21]" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField control={form.control} name="dimensions" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">{t.contact.form_dimensions} *</FormLabel>
                          <FormControl><Input required placeholder={t.contact.form_dimensions_placeholder} className="rounded-none border-slate-300 bg-[#f8fafc] py-6 text-base focus-visible:ring-[#ef7b21]" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="deadline" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">{t.contact.form_deadline}</FormLabel>
                          <FormControl><Input placeholder={t.contact.form_deadline_placeholder} className="rounded-none border-slate-300 bg-[#f8fafc] py-6 text-base focus-visible:ring-[#ef7b21]" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="location" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">{t.contact.form_location} *</FormLabel>
                        <FormControl><Input required autoComplete="address-level1" placeholder={t.contact.form_location_placeholder} className="rounded-none border-slate-300 bg-[#f8fafc] py-6 text-base focus-visible:ring-[#ef7b21]" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="drawing" render={({ field: { onChange, value: _value, ...field } }) => (
                      <FormItem>
                        <FormLabel className="text-base">{t.contact.form_drawing}</FormLabel>
                        <FormControl>
                          <Input type="file" accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.jpg,.jpeg,.png" className="h-auto rounded-none border-slate-300 bg-[#f8fafc] py-3 text-sm file:mr-4 file:border-0 file:bg-[#07121e] file:px-4 file:py-2 file:font-semibold file:text-white" onChange={(event) => onChange(event.target.files)} {...field} />
                        </FormControl>
                        <p className="text-sm leading-5 text-slate-500">{t.contact.form_drawing_help}</p>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">{t.contact.form_message_optional}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t.contact.form_message_placeholder}
                              rows={5}
                              className="rounded-none border-slate-300 bg-[#f8fafc] text-base focus-visible:ring-[#ef7b21]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField control={form.control} name="privacy" render={({ field }) => (
                      <FormItem className="flex items-start gap-3 space-y-0 border border-slate-200 bg-slate-50 p-4">
                        <FormControl>
                          <Checkbox required checked={field.value} onCheckedChange={field.onChange} aria-required="true" className="mt-1 border-slate-500 data-[state=checked]:border-[#ef7b21] data-[state=checked]:bg-[#ef7b21]" />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal leading-6 text-slate-700">
                            {t.contact.form_privacy_agreement}{' '}
                            <Link href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#b84d08] underline underline-offset-2">
                              {t.contact.form_privacy_link}
                            </Link>.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )} />
                    <div className="flex flex-col gap-4 pt-4">
                      <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="w-full rounded-none bg-[#ef7b21] py-7 text-lg font-bold text-white transition-colors hover:bg-[#cf5f11]"
                      >
                        <Send className="w-5 h-5 mr-3" />
                        {form.formState.isSubmitting
                          ? t.contact.form_submitting
                          : t.contact.form_submit}
                      </Button>
                      <Button
                        key="whatsapp-contact"
                        asChild
                        variant="outline"
                        className="rounded-none border-[#07121e] bg-[#07121e] py-7 text-lg font-bold text-white hover:border-[#12263a] hover:bg-[#12263a] hover:text-white"
                      >
                        <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-5 h-5 mr-3" />
                          WhatsApp
                        </Link>
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
              <div className="relative flex flex-col overflow-hidden bg-[#07121e] p-8 text-white sm:p-12 md:col-span-2">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#ef7b21]/10 blur-3xl" />
                <div className="relative z-10 flex h-full flex-col justify-center">
                  <h3 className="mb-8 font-headline text-2xl font-bold sm:text-3xl">
                    {t.contact.details_title}
                  </h3>
                  <div className="mb-5 flex items-start gap-4 border border-white/10 bg-white/[0.06] p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#ef7b21]/15 text-[#ef7b21]">
                      <Clock3 className="h-6 w-6" />
                    </span>
                    <p className="text-base leading-7 text-slate-200">
                      {t.contact.details_hours}
                    </p>
                  </div>
                  <div className="space-y-4">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rua+Hans+Oersted%2C+20-118%2C+Cidade+Moncoes%2C+Sao+Paulo%2C+SP%2C+04575-010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-[#ef7b21]/70 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef7b21]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#ef7b21]/15 text-[#ef7b21] transition-colors group-hover:bg-[#ef7b21] group-hover:text-white">
                      <MapPin className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.12em] text-white">
                        {t.contact.details_address_title}
                      </p>
                      <p className="mt-1 text-base leading-7 text-slate-300">
                        {t.footer.address}
                      </p>
                    </div>
                  </a>
                  <a
                    href="tel:+551155556551"
                    className="group flex items-start gap-4 border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-[#ef7b21]/70 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef7b21]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#ef7b21]/15 text-[#ef7b21] transition-colors group-hover:bg-[#ef7b21] group-hover:text-white">
                      <Phone className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.12em] text-white">
                        {t.contact.details_phone_title}
                      </p>
                      <p className="mt-1 text-base leading-7 text-slate-300">
                        +55 (11) 5555-6551 (Industrial)
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:vendas@aceros.com.br"
                    className="group flex items-start gap-4 border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-[#ef7b21]/70 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef7b21]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#ef7b21]/15 text-[#ef7b21] transition-colors group-hover:bg-[#ef7b21] group-hover:text-white">
                      <Mail className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.12em] text-white">{t.contact.form_email}</p>
                      <p className="mt-1 text-base leading-7 text-slate-300">
                        vendas@aceros.com.br
                      </p>
                    </div>
                  </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-16 lg:mt-20">
            <LocationMap />
          </div>
        </div>
      </section>
      <WhatsAppCta />
    </>
  );
}
