
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
  titleKey: keyof typeof t.expertise_sectors.page;
  descriptionKey: keyof typeof t.expertise_sectors.page;
  imageId: string;
};

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const productImage = PlaceHolderImages.find(
              img => img.id === product.imageId
            );
            return (
              <Dialog key={product.id}>
                <div
                  className={cn('group animate-fade-in-up')}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="flex h-full flex-col overflow-hidden rounded-2xl shadow-xl border-none transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
                    {productImage && (
                      <DialogTrigger asChild>
                        <div className="relative w-full bg-white">
                          <Image
                            src={productImage.imageUrl}
                            alt={productImage.description}
                            width={400}
                            height={400}
                            data-ai-hint={productImage.imageHint}
                            className="object-contain transition-transform duration-500 group-hover:scale-105 w-full h-auto"
                          />
                        </div>
                      </DialogTrigger>
                    )}
                    <Separator />
                    <div className="flex flex-col flex-grow p-6 bg-background">
                      <CardHeader className="p-0">
                        <CardTitle className="font-headline text-lg font-bold text-center">
                          {(t.expertise_sectors.page as any)[product.titleKey]}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col flex-grow p-0 mt-4">
                        <CardDescription className="flex-grow text-center">
                          {(t.expertise_sectors.page as any)[
                            product.descriptionKey
                          ]}
                        </CardDescription>
                        <div className="flex flex-col gap-2 mt-6">
                          <Button
                            asChild
                            size="sm"
                            variant="accent"
                            className="w-full text-xs"
                          >
                            <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank">
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
                        fill
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
              className="bg-green-600 text-white hover:bg-green-700 transition-transform duration-300 hover:scale-105"
            >
              <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank">
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
