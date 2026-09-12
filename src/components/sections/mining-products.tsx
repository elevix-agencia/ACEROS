
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/hooks/use-language';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { cn } from '@/lib/utils';
import { MessageCircle } from 'lucide-react';
import { Separator } from '../ui/separator';

type MiningProduct = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  imageId: string;
};

function formatProductTitle(title: string) {
  const normalized = title.toLocaleLowerCase('pt-BR');
  return normalized.charAt(0).toLocaleUpperCase('pt-BR') + normalized.slice(1);
}

export function MiningProducts() {
  const { t } = useLanguage();

  const products: MiningProduct[] = [
    {
      id: 'deck-rollers',
      titleKey: 'mining_deck_rollers_title',
      descriptionKey: 'mining_deck_rollers_description',
      imageId: 'mining-deck-rollers',
    },
    {
      id: 'deck-hot-cold',
      titleKey: 'mining_deck_hot_cold_title',
      descriptionKey: 'mining_deck_hot_cold_description',
      imageId: 'mining-deck-hot-cold',
    },
    {
      id: 'sinter-car-walls',
      titleKey: 'mining_sinter_car_walls_title',
      descriptionKey: 'mining_sinter_car_walls_description',
      imageId: 'mining-sinter-car-walls',
    },
    {
      id: 'grate-bars',
      titleKey: 'mining_grate_bars_title',
      descriptionKey: 'mining_grate_bars_description',
      imageId: 'mining-grate-bars',
    },
    {
      id: 'sinter-cars',
      titleKey: 'mining_sinter_cars_title',
      descriptionKey: 'mining_sinter_cars_description',
      imageId: 'mining-sinter-cars',
    },
    {
      id: 'blast-furnace',
      titleKey: 'mining_blast_furnace_title',
      descriptionKey: 'mining_blast_furnace_description',
      imageId: 'mining-blast-furnace-plates',
    },
  ];

  const whatsappMessage = encodeURIComponent(t.whatsapp.message);
  const whatsappNumber = '551155556551';

  return (
    <section className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fade-in-up mb-16">
          <h2 className="mb-4 font-headline text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            {t.expertise_sectors.page.featured_products_title}
          </h2>
        </div>
        <div className="grid auto-rows-fr gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const productImage = PlaceHolderImages.find(
              img => img.id === product.imageId
            );
            return (
              <Dialog key={product.id}>
                <div
                  className={cn('group h-full animate-fade-in-up')}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 shadow-[0_14px_35px_rgba(7,18,30,.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(7,18,30,.16)] cursor-pointer">
                    {productImage && (
                      <DialogTrigger asChild>
                        <div className="relative aspect-[16/7] w-full overflow-hidden bg-slate-100">
                          <Image
                            src={productImage.imageUrl}
                            alt={productImage.description}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            data-ai-hint={productImage.imageHint}
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </DialogTrigger>
                    )}
                    <Separator />
                    <div className="flex flex-col flex-grow bg-white p-6 sm:p-7">
                      <CardHeader className="p-0">
                        <CardTitle className="font-headline text-xl font-semibold leading-snug tracking-[-0.02em] text-center text-slate-900">
                          {formatProductTitle((t.expertise_sectors.page as any)[product.titleKey])}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col flex-grow p-0 mt-4">
                        <CardDescription className="flex-grow text-center font-body text-[15px] leading-6 text-slate-600">
                          {(t.expertise_sectors.page as any)[
                            product.descriptionKey
                          ]}
                        </CardDescription>
                        <div className="flex flex-col gap-2 mt-6">
                          <Button
                            asChild
                            size="sm"
                            variant="accent"
                            className="h-11 w-full rounded-none font-body text-sm font-semibold"
                          >
                            <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                              {t.cta.whatsapp_quote}
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>

                <DialogContent className="max-w-4xl p-2 sm:p-4 bg-background border-accent/20">
                  <DialogHeader>
                    <DialogTitle className="text-foreground sr-only">
                      {(t.expertise_sectors.page as any)[product.titleKey]}
                    </DialogTitle>
                  </DialogHeader>
                  {productImage && (
                    <div className="relative aspect-video w-full mt-4">
                      <Image
                        src={productImage.imageUrl}
                        alt={productImage.description}
                        fill sizes="(max-width: 768px) 100vw, 50vw"
                        data-ai-hint={productImage.imageHint}
                        className="object-contain rounded-lg"
                      />
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        <div className="mt-20 text-center animate-fade-in-up">
          <h3 className="mb-4 font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Fale conosco no WhatsApp
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            Tem alguma dúvida ou precisa de um orçamento personalizado? Nossa
            equipe está pronta para ajudar.
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-none bg-primary text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-primary/90"
            >
              <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-3 h-5 w-5" />
                Atendimento
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
