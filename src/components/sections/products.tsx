
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages, ImagePlaceholder } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Eye, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { WhatsAppCta } from './whatsapp-cta';

type Product = {
  id: string;
  name: string;
  description: string;
  imageIds: string[];
  videoUrl?: string;
};

export function Products() {
  const { t } = useLanguage();
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  const products: Product[] = [
    {
      id: 'itrac-seal',
      name: t.products.itrac_seal_name,
      description: t.products.itrac_seal_description,
      imageIds: ['itrac-cert-1', 'itrac-cert-2', 'itrac-cert-3', 'itrac-cert-4'],
    },
    {
      id: 'classification-seals',
      name: t.products.classification_seals_name,
      description: t.products.classification_seals_description,
      imageIds: [
        'cert-international-main',
        'cert-international-1',
        'cert-international-2',
        'cert-international-3',
        'cert-international-4',
      ],
    },
    {
      id: 'product-tube',
      name: t.products.product_tube_name,
      description: t.products.product_tube_description,
      imageIds: [
        'product-tube',
        'product-tube-2',
        'product-tube-3',
        'product-tube-4',
        'product-tube-5',
        'product-tube-6',
        'product-tube-7',
        'product-tube-8',
        'product-tube-9',
      ],
    },
    {
      id: 'product-bushing',
      name: t.products.product_bushing_name,
      description: t.products.product_bushing_description,
      imageIds: [
        'product-bushing-main',
        'product-bushing-gallery-1',
        'product-bushing-gallery-2',
        'product-bushing-gallery-3',
        'product-bushing-gallery-4',
        'product-bushing-gallery-5',
        'product-bushing-gallery-6',
        'product-bushing-gallery-7',
      ],
    },
    {
      id: 'product-ring',
      name: t.products.product_ring_name,
      description: t.products.product_ring_description,
      imageIds: [
        'product-ring-main',
        'product-ring-gallery-1',
        'product-ring-gallery-2',
        'product-ring-gallery-3',
        'product-ring-gallery-4',
      ],
    },
    {
      id: 'product-valve-body',
      name: t.products.product_valve_body_name,
      description: t.products.product_valve_body_description,
      imageIds: [
        'product-valve-body',
        'product-valve-body-2',
        'product-valve-body-3',
        'product-valve-body-4',
      ],
    },
    {
      id: 'product-rollers',
      name: t.products.product_rollers_name,
      description: t.products.product_rollers_description,
      imageIds: ['product-rollers-new', 'product-rollers-2-new'],
    },
    {
      id: 'product-large-ring',
      name: t.products.product_large_ring_name,
      description: t.products.product_large_ring_description,
      imageIds: ['product-large-ring', 'product-large-ring-2'],
    },
    {
      id: 'product-machined-parts',
      name: t.products.product_machined_parts_name,
      description: t.products.product_machined_parts_description,
      imageIds: [
        'product-machined-parts-new',
        'product-machined-parts-2-new',
      ],
    },
    {
      id: 'product-custom-castings',
      name: t.products.product_custom_castings_name,
      description: t.products.product_custom_castings_description,
      imageIds: [
        'product-custom-castings',
        'product-custom-castings-2',
        'product-custom-castings-3',
        'product-custom-castings-4',
        'product-custom-castings-5',
        'product-custom-castings-6',
      ],
       videoUrl:
        'https://player.cloudinary.com/embed/?cloud_name=dhsn2oxv5&public_id=VID-20251115-WA0058_hskpbv&profile=cld-default',
    },
    {
      id: 'product-thick-wall-pipe',
      name: t.products.product_thick_wall_pipe_name,
      description: t.products.product_thick_wall_pipe_description,
      imageIds: [
        'product-thick-wall-pipe',
        'product-thick-wall-pipe-2',
        'product-thick-wall-pipe-3',
        'product-thick-wall-pipe-4',
        'product-thick-wall-pipe-5',
        'product-thick-wall-pipe-6',
      ],
      videoUrl: 'https://player.cloudinary.com/embed/?cloud_name=dhsn2oxv5&public_id=VID-20251115-WA0056_epvppw&profile=cld-default'
    },
    {
      id: 'product-flange',
      name: t.products.product_flange_name,
      description: t.products.product_flange_description,
      imageIds: [
        'product-flange',
        'product-flange-2',
        'product-flange-3',
        'product-flange-4',
        'product-flange-5',
        'product-flange-6',
      ],
      videoUrl: 'https://player.cloudinary.com/embed/?cloud_name=dhsn2oxv5&public_id=VID-20251115-WA0055_tbyjin&profile=cld-default',
    },
    {
      id: 'product-housing',
      name: t.products.product_housing_name,
      description: t.products.product_housing_description,
      imageIds: ['product-housing'],
      videoUrl: 'https://player.cloudinary.com/embed/?cloud_name=dhsn2oxv5&public_id=VID-20251115-WA0057_iy6qug&profile=cld-default',
    },
    {
      id: 'product-collars',
      name: t.products.product_collars_name,
      description: t.products.product_collars_description,
      imageIds: ['product-collars'],
      videoUrl: 'https://player.cloudinary.com/embed/?cloud_name=dhsn2oxv5&public_id=V%C3%ADdeo_do_WhatsApp_de_2025-11-15_%C3%A0_s_14.36.09_0017d2ce_kvcvoh&profile=cld-default',
    },
     {
      id: 'product-precision-parts',
      name: t.products.product_precision_parts_name,
      description: t.products.product_precision_parts_description,
      imageIds: [
        'new-product-main',
        'new-product-gallery-1',
        'new-product-gallery-2',
        'new-product-gallery-3',
        'new-product-gallery-4',
        'new-product-gallery-5',
      ],
      videoUrl:
        'https://player.cloudinary.com/embed/?cloud_name=dhsn2oxv5&public_id=tf_tvmts3&profile=cld-default',
    },
  ];

  const whatsappMessage = encodeURIComponent(t.whatsapp.message);
  const whatsappNumber = '551155556551';

  return (
    <>
      <section
        id="products"
        className="py-20 sm:py-32 bg-white text-foreground"
      >
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h2 className="mb-4 font-headline text-4xl sm:text-5xl font-bold tracking-tight">
              {t.products.title}
            </h2>
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground">
              {t.products.subtitle}
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const displayImage = PlaceHolderImages.find(
                img => img.id === product.imageIds[0]
              );
              const galleryImages =
                product.imageIds
                  ?.map(id => PlaceHolderImages.find(img => img.id === id))
                  .filter(Boolean) as ImagePlaceholder[] || [];

              const galleryItems = [
                ...galleryImages.map(img => ({ ...img, type: 'image' })),
                ...(product.videoUrl ? [{ type: 'video', url: product.videoUrl, id: product.videoUrl }] : [])
              ];


              return (
                <Dialog key={product.name}>
                  <div
                    className={cn('group w-full animate-fade-in-up')}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'both',
                    }}
                  >
                    <Card className="relative z-10 h-full transform-gpu rounded-2xl bg-card border-2 border-transparent transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-primary/20 flex flex-col overflow-hidden bg-secondary/30">
                       <div className="overflow-hidden aspect-square relative p-4">
                          {displayImage ? (
                              <Image
                                src={displayImage.imageUrl}
                                alt={displayImage.description}
                                fill
                                data-ai-hint={displayImage.imageHint}
                                className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                              />
                          ) : product.videoUrl && (
                             <iframe
                              src={product.videoUrl}
                              className="w-full h-full"
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                            ></iframe>
                          )}
                      </div>
                      <CardHeader className="pt-0 text-center">
                        <CardTitle className="font-headline text-xl text-foreground">
                          {product.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center flex-grow flex flex-col justify-end p-4 pt-0">
                        <div className="flex flex-col gap-2 mt-4">
                          <Button
                            asChild
                            size="sm"
                            variant="accent"
                            className="bg-accent text-accent-foreground hover:bg-accent/90 flex-grow text-xs"
                          >
                            <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank">
                              <MessageCircle className="mr-1 h-3 w-3" />
                              Orçamento
                            </Link>
                          </Button>
                          <DialogTrigger asChild>
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-full text-xs"
                              disabled={galleryItems.length <= 1}
                            >
                              <Eye className="mr-2 h-4 w-4" />
                               {galleryItems.length > 1 ? "Ver galeria" : "Ver mídia"}
                            </Button>
                          </DialogTrigger>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <DialogContent className="bg-background border-accent/20 max-w-4xl">
                    <DialogHeader>
                      <DialogTitle className="text-foreground">
                        {product.name}
                      </DialogTitle>
                    </DialogHeader>
                    {galleryItems.length > 0 && (
                      <Carousel
                        className="w-full mt-4"
                        opts={{ loop: true }}
                        plugins={[plugin.current]}
                        onMouseEnter={() => plugin.current.stop()}
                        onMouseLeave={() => plugin.current.reset()}
                      >
                        <CarouselContent>
                          {galleryItems.map((item, i) => (
                            <CarouselItem key={i}>
                              <div className="relative aspect-video w-full">
                                { 'type' in item && item.type === 'video' ? (
                                  <iframe
                                    src={item.url}
                                    className="w-full h-full"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                  ></iframe>
                                ) : 'imageUrl' in item && (
                                  <Image
                                    src={item.imageUrl}
                                    alt={item.description}
                                    fill
                                    data-ai-hint={item.imageHint}
                                    className="object-contain rounded-lg"
                                  />
                                )}
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
                      </Carousel>
                    )}
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </div>
      </section>
      <WhatsAppCta />
    </>
  );
}
