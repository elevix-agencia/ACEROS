
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
        className="bg-secondary/50 py-20 sm:py-32"
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center animate-fade-in-up sm:mb-20">
            <h2 className="mb-4 font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              {t.contact.subtitle}
            </p>
          </div>

          <Card className="max-w-6xl mx-auto overflow-hidden shadow-xl rounded-2xl animate-fade-in-up">
            <CardContent className="grid p-0 md:grid-cols-5">
              <div className="p-8 sm:p-12 md:col-span-3">
                <h3 className="mb-8 font-headline text-2xl font-bold sm:text-3xl">
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
                              className="py-6 text-base"
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
                              className="py-6 text-base"
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
                              className="py-6 text-base"
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
                              className="text-base"
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
                        className="w-full py-7 text-lg bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105"
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
                        className="py-7 text-lg bg-green-600 text-white transition-transform duration-300 hover:scale-105 hover:bg-green-700 border-green-600"
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
              <div className="flex flex-col justify-center p-8 bg-secondary/50 sm:p-12 md:col-span-2">
                <h3 className="mb-8 font-headline text-2xl font-bold sm:text-3xl">
                  {t.contact.details_title}
                </h3>
                <p className="mb-10 -mt-2 text-lg text-muted-foreground">
                  {t.contact.details_hours}
                </p>
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <MapPin className="h-7 w-7 mt-1 text-primary shrink-0" />
                    <div>
                      <p className="text-xl font-semibold">
                        {t.contact.details_address_title}
                      </p>
                      <p className="text-lg text-muted-foreground">
                        {t.footer.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <Phone className="h-7 w-7 mt-1 text-primary shrink-0" />
                    <div>
                      <p className="text-xl font-semibold">
                        {t.contact.details_phone_title}
                      </p>
                      <p className="text-lg text-muted-foreground">
                        +55 (11) 5555-6551
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <Mail className="h-7 w-7 mt-1 text-primary shrink-0" />
                    <div>
                      <p className="text-xl font-semibold">{t.contact.form_email}</p>
                      <p className="text-lg text-muted-foreground">
                        comercial@aceros.com.br
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-20 sm:mt-32">
            <LocationMap />
          </div>
        </div>
      </section>
      <WhatsAppCta />
    </>
  );
}
