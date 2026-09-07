
'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
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
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  phone: z
    .string()
    .min(10, { message: 'Por favor, insira um telefone válido.' }),
  message: z
    .string()
    .min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
});

export function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const whatsappMessage = encodeURIComponent(t.whatsapp.message);
  const whatsappNumber = '551155556551';

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await saveContactMessage(values);
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
              Fale com a nossa equipe
            </p>
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              {t.contact.title}
            </h2>
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
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">{t.contact.form_name}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t.contact.form_name_placeholder}
                              className="rounded-none border-slate-300 bg-[#f8fafc] py-6 text-base focus-visible:ring-[#ef7b21]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">{t.contact.form_email}</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder={t.contact.form_email_placeholder}
                              className="rounded-none border-slate-300 bg-[#f8fafc] py-6 text-base focus-visible:ring-[#ef7b21]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">{t.contact.form_phone}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t.contact.form_phone_placeholder}
                              className="rounded-none border-slate-300 bg-[#f8fafc] py-6 text-base focus-visible:ring-[#ef7b21]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">{t.contact.form_message}</FormLabel>
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
                        <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank">
                          <MessageCircle className="w-5 h-5 mr-3" />
                          WhatsApp
                        </Link>
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
              <div className="flex flex-col justify-center bg-[#07121e] p-8 text-white sm:p-12 md:col-span-2">
                <h3 className="mb-8 font-headline text-2xl font-bold sm:text-3xl">
                  {t.contact.details_title}
                </h3>
                <p className="mb-10 -mt-2 text-base leading-7 text-slate-300">
                  {t.contact.details_hours}
                </p>
                <div className="space-y-8">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rua+Hans+Oersted%2C+20-118%2C+Cidade+Moncoes%2C+Sao+Paulo%2C+SP%2C+04575-010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-5 transition-colors hover:text-[#ef7b21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef7b21]"
                  >
                    <MapPin className="mt-1 h-7 w-7 shrink-0 text-[#ef7b21]" />
                    <div>
                      <p className="text-xl font-semibold">
                        {t.contact.details_address_title}
                      </p>
                      <p className="text-base leading-7 text-slate-300">
                        {t.footer.address}
                      </p>
                    </div>
                  </a>
                  <a
                    href="tel:+551155556551"
                    className="flex items-start gap-5 transition-colors hover:text-[#ef7b21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef7b21]"
                  >
                    <Phone className="mt-1 h-7 w-7 shrink-0 text-[#ef7b21]" />
                    <div>
                      <p className="text-xl font-semibold">
                        {t.contact.details_phone_title}
                      </p>
                      <p className="text-base leading-7 text-slate-300">
                        +55 (11) 5555-6551 (Industrial)
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:vendas@aceros.com.br"
                    className="flex items-start gap-5 transition-colors hover:text-[#ef7b21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef7b21]"
                  >
                    <Mail className="mt-1 h-7 w-7 shrink-0 text-[#ef7b21]" />
                    <div>
                      <p className="text-xl font-semibold">{t.contact.form_email}</p>
                      <p className="text-base leading-7 text-slate-300">
                        vendas@aceros.com.br
                      </p>
                    </div>
                  </a>
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
