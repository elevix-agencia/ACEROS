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
      description: t.certificates.dnv,
    },
    {
      id: 'cert-abs',
      name: 'ABS',
      description: t.certificates.abs,
    },
    {
      id: 'cert-bureau-veritas',
      name: 'Bureau Veritas',
      description: t.certificates.bureau_veritas,
    },
    {
      id: 'cert-lloyds',
      name: "Lloyd's Register",
      description: t.certificates.lloyds,
    },
  ];

  const galleryCertificateImages = PlaceHolderImages.filter(img =>
    img.id.startsWith('cert-gallery-')
  );

  const whatsappMessage = encodeURIComponent(t.whatsapp.message);
  const whatsappNumbers = ['551155556551', '551146442969', '551146442977'];

  return (
    <div>
      <section className="relative h-[60vh] min-h-[400px] w-full animate-fade-in">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            sizes="100vw"
            data-ai-hint={heroImage.imageHint}
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
          <div
            className="relative z-10 flex animate-fade-in-up flex-col items-center px-4"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
              {t.certificates.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-200 md:text-xl">
              {t.certificates.subtitle}
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 sm:py-32 bg-secondary/30">
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
                Veja alguns dos nossos certificados de qualidade e conformidade.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {galleryCertificateImages.map((image, index) => (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <div
                      className="animate-fade-in-up"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: 'both',
                      }}
                    >
                      <Card className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-primary/20 cursor-pointer">
                        <div className="aspect-square w-full">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            data-ai-hint={image.imageHint}
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </Card>
                    </div>
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
                        fill
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
                  {whatsappNumbers.map((number, idx) => (
                    <Button
                        key={number}
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                        <Link href={`https://wa.me/${number}?text=${whatsappMessage}`} target="_blank">
                            <MessageCircle className="mr-3 h-5 w-5" />
                            {t.cta.whatsapp} {idx + 1}
                        </Link>
                    </Button>
                  ))}
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
