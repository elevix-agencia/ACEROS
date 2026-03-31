'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function CaplCglProducts() {
  const { t } = useLanguage();

  const productImage = PlaceHolderImages.find(
    (img) => img.id === 'capl-cgl-product'
  );
  
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de um orçamento para produtos de siderurgia.');
  const whatsappNumbers = ['551155556551', '551146442969', '551146442977'];

  return (
    <section
      className="py-20 sm:py-32 bg-white text-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
           <div className="animate-slide-in-left">
            {productImage && (
              <Card className="overflow-hidden rounded-2xl shadow-2xl group">
                <CardContent className="p-0">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={productImage.imageUrl}
                      alt={productImage.description}
                      fill
                      data-ai-hint={productImage.imageHint}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          <div className="animate-slide-in-right">
            <h3 className="font-headline text-2xl lg:text-3xl font-bold mb-4 uppercase tracking-wider">
             ROLOS DO FORNO PARA TRANSPORTE DE BARRAS
            </h3>
             <p className="text-muted-foreground mb-6 text-lg">
                {t.expertise_sectors.page.furnace_capl_cgl_description}
              </p>
            <ul className="space-y-4 text-muted-foreground mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>{t.expertise_sectors.page.furnace_capl_cgl_item1}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>{t.expertise_sectors.page.furnace_capl_cgl_item2}</span>
              </li>
               <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>{t.expertise_sectors.page.furnace_capl_cgl_item3}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>{t.expertise_sectors.page.furnace_capl_cgl_item4}</span>
              </li>
            </ul>
            <div className="flex flex-col gap-3">
              {whatsappNumbers.map((number, idx) => (
                <Button key={number} asChild size="lg" className="w-full sm:w-fit">
                  <Link href={`https://wa.me/${number}?text=${whatsappMessage}`} target="_blank">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Solicitar Orçamento {idx + 1}
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
