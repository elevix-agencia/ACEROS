'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function BarFurnaceProducts() {
  const { t } = useLanguage();

  const productImage = PlaceHolderImages.find(
    img => img.id === 'bar-furnace-product'
  );

  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de um orçamento para peças para forno de barras.'
  );
  const whatsappNumbers = ['551155556551', '551146442969', '551146442977'];

  return (
    <section
      className="py-20 sm:py-32 bg-secondary/50"
    >
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-background shadow-2xl grid md:grid-cols-2">
          <div className="relative min-h-[300px] md:min-h-0 w-full animate-slide-in-left p-8 bg-gray-100">
            {productImage && (
              <Image
                src={productImage.imageUrl}
                alt={productImage.description}
                fill
                data-ai-hint={productImage.imageHint}
                className="object-contain"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent md:bg-gradient-to-r"></div>
          </div>
          <div className="p-8 md:p-16 flex flex-col justify-center animate-slide-in-right">
            <h3 className="mb-4 font-headline text-2xl lg:text-3xl font-bold uppercase tracking-wider text-foreground">
              {(t.expertise_sectors.page as any).bar_furnace_title}
            </h3>
            <div className="mb-8">
              <p className="font-semibold text-lg text-primary">
                {(t.expertise_sectors.page as any).bar_furnace_subtitle}
              </p>
              <p className="text-muted-foreground mt-2">
                {(t.expertise_sectors.page as any).bar_furnace_description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {whatsappNumbers.map((number, idx) => (
                <Button
                  key={number}
                  asChild
                  size="lg"
                  className="w-full sm:w-fit group"
                >
                  <Link href={`https://wa.me/${number}?text=${whatsappMessage}`} target="_blank">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Orçamento {idx + 1}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
