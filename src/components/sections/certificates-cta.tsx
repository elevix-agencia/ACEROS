
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Separator } from '../ui/separator';
import { MessageCircle } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { useLanguage } from '@/hooks/use-language';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function CertificatesCta() {
  const { t } = useLanguage();

  const heroImage = PlaceHolderImages.find(img => img.id === 'certificates-hero');

  const certificateImages = [
    {
      id: 'cert-dnv',
      name: 'DNV',
      description: 'Referência de classificadora cujos requisitos podem ser considerados quando especificados no projeto.',
    },
    {
      id: 'cert-abs',
      name: 'ABS',
      description: 'Referência técnica do setor naval aplicável quando indicada nos requisitos do fornecimento.',
    },
    {
      id: 'cert-bureau-veritas',
      name: 'Bureau Veritas',
      description: 'Referência de inspeção e classificação considerada conforme a aplicação e a documentação contratual.',
    },
    {
      id: 'cert-lloyds',
      name: "Lloyd's Register",
      description: 'Referência de classificação para projetos que exijam requisitos específicos do setor naval.',
    },
  ];

  const galleryCertificateImages = PlaceHolderImages.filter(img =>
    img.id.startsWith('cert-gallery-')
  );

  const whatsappMessage = encodeURIComponent(t.whatsapp.message);
  const whatsappNumber = '551155556551';

  return (
    <div>
      <section className="relative isolate min-h-[calc(100svh-80px)] w-full overflow-hidden bg-[#07121e] text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            sizes="100vw"
            data-ai-hint={heroImage.imageHint}
            className="object-cover object-center opacity-70"
            priority
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#07121e_0%,rgba(7,18,30,.94)_42%,rgba(7,18,30,.42)_72%,rgba(7,18,30,.12)_100%)]" />
        <div className="absolute left-0 top-0 h-full w-1 bg-accent" />
        <div className="relative z-10 flex min-h-[calc(100svh-80px)] items-center text-white">
          <div className="container mx-auto px-4">
          <div
            className="max-w-[900px] animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-accent sm:mb-7 sm:text-sm"><span className="h-px w-10 bg-accent" />Qualidade e conformidade</p>
            <h1 className="text-balance font-headline text-[2rem] font-semibold uppercase leading-[1.08] tracking-[-0.025em] sm:text-[clamp(2.25rem,3.35vw,3.65rem)]">
              Certificações e referências técnicas
            </h1>
            <p className="mt-5 max-w-[720px] border-l border-accent/80 pl-4 text-base leading-7 text-slate-200 sm:mt-7 sm:pl-5 sm:text-lg sm:leading-8">
              Documentos do sistema de gestão e referências técnicas aplicáveis conforme os requisitos de cada fornecimento.
            </p>
          </div>
          </div>
        </div>
      </section>
      
      <section className="bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            {certificateImages.map((cert, index) => {
              const image = PlaceHolderImages.find(img => img.id === cert.id);
              return (
                <Card
                  key={cert.id}
                  className="group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up bg-background/70 border"
                  style={{ animationDelay: `${0.2 + index * 0.15}s`, animationFillMode: 'both' }}
                >
                  <CardContent className="grid items-center gap-8 p-0 md:grid-cols-12">
                    <div className="relative flex h-48 items-center justify-center overflow-hidden bg-white md:col-span-4 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-r-none">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={200}
                          height={100}
                          data-ai-hint={image.imageHint}
                          className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                        />
                      )}
                    </div>
                    <div className="p-8 md:col-span-8 text-left">
                      <h3 className="mb-3 font-headline text-2xl font-semibold text-foreground">
                        {cert.name}
                      </h3>
                      <p className="text-muted-foreground text-lg">{cert.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="my-16 sm:my-20 flex justify-center animate-fade-in-up">
              <Separator className="w-1/2 bg-border" />
          </div>

          <div className="mt-16 sm:mt-20">
            <div className="text-center animate-fade-in-up mb-12">
              <h3 className="mb-4 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Galeria de Certificados
              </h3>
              <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground">
                Consulte imagens e documentos disponíveis no acervo técnico da Aceros.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {galleryCertificateImages.map((image, index) => (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      aria-label={`Ampliar: ${image.description}`}
                      className="block w-full animate-fade-in-up cursor-pointer rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: 'both',
                      }}
                    >
                      <span className="group relative block overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-primary/20">
                        <span className="block aspect-square w-full">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill sizes="(max-width: 768px) 100vw, 50vw"
                            data-ai-hint={image.imageHint}
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </span>
                        <span className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-2 sm:p-4 bg-background border-accent/20">
                    <DialogHeader>
                      <DialogTitle className="text-foreground sr-only">
                        {image.description}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="relative aspect-video w-full mt-4">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill sizes="(max-width: 768px) 100vw, 50vw"
                        data-ai-hint={image.imageHint}
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>

          <div className="my-16 sm:my-20 flex justify-center animate-fade-in-up">
              <Separator className="w-1/2 bg-border" />
          </div>

          <div className="text-center animate-fade-in-up">
              <h3 className="mb-4 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  {t.cta.ready_title}
              </h3>
              <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground mb-10">
                  {t.cta.ready_subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
                  <Button
                      asChild
                      size="lg"
                      className="bg-accent text-accent-foreground transition-transform duration-300 hover:scale-110"
                  >
                      <Link href="/contato">{t.cta.request_quote}</Link>
                  </Button>
                  <Button
                      key="whatsapp-cert"
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                      <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="track-whatsapp">
                          <MessageCircle className="mr-3 h-5 w-5" />
                          {t.cta.whatsapp}
                      </Link>
                  </Button>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
