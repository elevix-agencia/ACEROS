
'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/hooks/use-language';
import { Card } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const clientSectorImages = [
  'clients-carousel-2',
  'clients-carousel-3',
  'clients-carousel-4',
  'clients-carousel-5',
];

export function Clients() {
  const { t } = useLanguage();
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const images = PlaceHolderImages.filter(img =>
    clientSectorImages.includes(img.id)
  );

  return (
    <section className="w-full py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fade-in-up mb-12">
          <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t.clients?.title || 'Atendendo Gigantes da Indústria'}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            {t.clients?.subtitle ||
              'Nossa excelência em engenharia de materiais nos permite fornecer componentes críticos para os líderes globais em setores como mineração, naval, siderurgia e óleo & gás.'}
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
            {images.map((image, index) =>
              image ? (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className="animate-fade-in-up"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'both',
                    }}
                  >
                    <Card className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-primary/20">
                      <span className="absolute top-2 right-2 z-10 rounded-full bg-black/50 px-3 py-1 text-xs font-mono text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        #{String(index + 1).padStart(3, '0')}
                      </span>
                      <div className="aspect-[4/3] w-full relative">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          data-ai-hint={image.imageHint}
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ) : null
            )}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-1rem] sm:left-2 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-[-1rem] sm:right-2 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </section>
  );
}
