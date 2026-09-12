'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useLanguage } from '@/hooks/use-language';

const galleryImages = PlaceHolderImages.filter(
  img => img.id.startsWith('product-gallery-') || img.id.startsWith('history-')
);

export function MainGallery() {
  const { t } = useLanguage();
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section
      id="main-gallery"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center animate-fade-in-up mb-12">
          <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            {t.gallery.subtitle}
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
            {galleryImages.map((image, index) => {
              const isTechnicalPanel = image.id.startsWith('history-');

              return (
                <CarouselItem
                  key={image.id}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <Dialog>
                    <div
                      className="animate-fade-in-up"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: 'both',
                      }}
                    >
                      <DialogTrigger asChild>
                        <button
                          type="button"
                          aria-label={image.description}
                          className="group block w-full cursor-pointer rounded-2xl text-left transition-transform duration-500 hover:scale-105"
                        >
                          <Card className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-primary/20">
                            <div className="aspect-[4/3] w-full relative bg-white">
                              <Image
                                src={image.imageUrl}
                                alt=""
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                data-ai-hint={image.imageHint}
                                className={`${isTechnicalPanel ? 'object-contain p-2' : 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
                              />
                            </div>
                            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="relative min-h-20 bg-slate-950 px-5 py-4 text-white">
                              <p className="text-sm font-semibold leading-relaxed sm:text-base">
                                {image.description}
                              </p>
                            </div>
                          </Card>
                        </button>
                      </DialogTrigger>
                    </div>

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
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </section>
  );
}
