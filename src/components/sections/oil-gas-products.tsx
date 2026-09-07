
'use client';

import Image from 'next/image';
import { PlaceHolderImages, ImagePlaceholder } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/use-language';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import { Icon } from '../icons';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Search, Video } from 'lucide-react';

type ProductFeature = {
  id: string;
  name: string;
  description: string;
  icon: 'Component' | 'Factory' | 'ShieldCheck';
  imageIds: string[];
  videoUrls?: string[];
};

type MediaItem =
  | (ImagePlaceholder & { type: 'image' })
  | { type: 'video'; url: string; id: string };

const MediaViewer = ({ item }: { item: MediaItem }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
          <CardContent className="p-0">
            <div className="relative aspect-video w-full">
              {item.type === 'video' ? (
                <video
                  src={item.url.replace('/upload/', '/upload/q_auto:low,w_400/')}
                  className="h-full w-full object-cover pointer-events-none"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Prévia silenciosa de vídeo industrial da Aceros"
                />
              ) : (
                'imageUrl' in item && (
                  <Image
                    src={item.imageUrl}
                    alt={item.description}
                    fill
                    data-ai-hint={item.imageHint}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )
              )}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Search className="h-10 w-10 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-full h-[90vh] p-4 bg-background/90 backdrop-blur-sm border-accent/20 flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-foreground sr-only">
            {item.type === 'image' ? item.description : 'Vídeo'}
          </DialogTitle>
        </DialogHeader>
        <div className="relative flex-grow w-full h-full my-4 flex items-center justify-center">
          {item.type === 'video' ? (
            <video
              src={item.url.replace('/upload/', '/upload/q_auto:best/')}
              className="h-full w-full object-contain"
              controls
              muted
              playsInline
              preload="metadata"
              aria-label="Vídeo industrial da Aceros"
            />
          ) : (
            <Image
              src={item.imageUrl}
              alt={item.description}
              fill
              sizes="90vw"
              className="object-contain rounded-lg"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export function OilGasProducts() {
  const { t } = useLanguage();

  const products: ProductFeature[] = [
    {
      id: 'valves',
      name: t.expertise_sectors.page.oil_gas_valves_title,
      description: t.expertise_sectors.page.oil_gas_valves_description,
      icon: 'ShieldCheck',
      videoUrls: [
        'https://res.cloudinary.com/dhsn2oxv5/video/upload/v1766273411/WhatsApp_Video_2025-12-20_at_20.27.13_qf8iqn.mp4',
      ],
      imageIds: [
        'oil-gas-valve-1',
        'oil-gas-valve-2',
        'oil-gas-valve-3',
        'oil-gas-valve-4',
        'oil-gas-valve-5',
      ],
    },
    {
      id: 'connections',
      name: t.expertise_sectors.page.oil_gas_connections_title,
      description: t.expertise_sectors.page.oil_gas_connections_description,
      icon: 'Component',
      videoUrls: [
        'https://res.cloudinary.com/dhsn2oxv5/video/upload/v1766273695/WhatsApp_Video_2025-12-20_at_20.24.36_nixhxv.mp4',
        'https://res.cloudinary.com/dhsn2oxv5/video/upload/v1766273695/WhatsApp_Video_2025-12-20_at_20.26.50_qh5fv9.mp4',
        'https://res.cloudinary.com/dhsn2oxv5/video/upload/v1766273639/WhatsApp_Video_2025-12-20_at_20.23.41_q2uiqn.mp4',
      ],
      imageIds: ['oil-gas-connection-1', 'oil-gas-connection-2'],
    },
    {
      id: 'custom_parts',
      name: t.expertise_sectors.page.oil_gas_custom_parts_title,
      description: t.expertise_sectors.page.oil_gas_custom_parts_description,
      icon: 'Factory',
      videoUrls: [
        'https://res.cloudinary.com/dhsn2oxv5/video/upload/v1763605197/V%C3%ADdeo_do_WhatsApp_de_2025-11-15_%C3%A0_s_14.36.09_0017d2ce_kvcvoh.mp4',
      ],
      imageIds: ['oil-gas-piece-2', 'oil-gas-piece-5', 'oil-gas-piece-9'],
    },
  ];

  return (
    <section
      id="oil-gas-products"
      className="py-20 sm:py-32 bg-white text-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="text-center animate-fade-in-up mb-16">
          <h2 className="mb-4 font-headline text-4xl sm:text-5xl font-bold tracking-tight">
            {t.expertise_sectors.page.oil_gas_products_title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground">
            {t.expertise_sectors.page.oil_gas_products_subtitle}
          </p>
          <div className="mt-4 flex justify-center">
            <Separator className="h-1 w-24 bg-accent" />
          </div>
        </div>

        <div className="space-y-24">
          {products.map((product, index) => {
            const productImages = product.imageIds
              .map(id => PlaceHolderImages.find(img => img.id === id))
              .filter((img): img is ImagePlaceholder => Boolean(img));

            let galleryItems: MediaItem[] = [];

            if (product.videoUrls && product.videoUrls.length > 0) {
              galleryItems.unshift(
                ...product.videoUrls.map(url => ({
                  type: 'video' as const,
                  url,
                  id: url,
                }))
              );
            }

            if (productImages.length > 0) {
              galleryItems.push(
                ...productImages.map(img => ({ ...img, type: 'image' as const }))
              );
            }

            const mainItem = galleryItems.length > 0 ? galleryItems.shift() : undefined;

            return (
              <div
                key={product.id}
                className={cn(
                  'grid md:grid-cols-2 gap-12 lg:gap-24 items-center animate-fade-in-up'
                )}
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: 'both',
                }}
              >
                <div
                  className={cn('relative grid grid-cols-2 gap-4', {
                    'md:order-last': index % 2 !== 0,
                  })}
                >
                  {mainItem && (
                    <div className="col-span-2">
                      <MediaViewer item={mainItem} />
                    </div>
                  )}

                  {galleryItems.slice(0, 4).map(item => (
                    <div
                      key={item.id}
                      className={cn(
                        'col-span-1',
                        mainItem && galleryItems.length === 1 && 'col-span-2'
                      )}
                    >
                      <MediaViewer item={item} />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon name={product.icon} className="h-7 w-7" />
                    </div>
                    <h3 className="font-headline text-2xl sm:text-3xl font-bold">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-lg mb-8">
                    {product.description}
                  </p>
                  <Button asChild size="lg">
                    <Link href="/contato">{t.cta.request_quote}</Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
