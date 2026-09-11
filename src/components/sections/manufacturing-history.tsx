
'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/hooks/use-language';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Card } from '../ui/card';

const historyImages = PlaceHolderImages.filter(img =>
  img.id.startsWith('history-')
);

export function ManufacturingHistory() {
  const { t } = useLanguage();
  const plugin = React.useRef(Autoplay({ delay: 2500, stopOnInteraction: true }));

  return (
    <section
      className="py-20 sm:py-32 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center animate-fade-in-up mb-12">
          <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t.manufacturing_history.title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            {t.manufacturing_history.subtitle}
          </p>
        </div>

        <Carousel
          className="w-full"
          opts={{
            loop: true,
            align: 'start',
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {historyImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      aria-label={image.description}
                      className="group block w-full cursor-pointer rounded-lg text-left transition-transform duration-300 hover:scale-105"
                    >
                      <Card className="relative overflow-hidden rounded-lg shadow-lg">
                         <span className="absolute top-2 right-2 z-10 rounded-full bg-black/40 px-2.5 py-1 text-xs font-mono text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          #{String(index + 1).padStart(3, '0')}
                        </span>
                        <div className="relative aspect-square w-full bg-white">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            data-ai-hint={image.imageHint}
                            className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                          />
                           <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                      </Card>
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
                        fill
                        sizes="90vw"
                        data-ai-hint={image.imageHint}
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </section>
  );
}
