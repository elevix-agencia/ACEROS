
'use client';

import Image from 'next/image';
import { PlaceHolderImages, ImagePlaceholder } from '@/lib/placeholder-images';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { MessageCircle } from 'lucide-react';

export function WalkingBeamFurnace() {
  const { t } = useLanguage();
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  const vigasMoveisImage1 = PlaceHolderImages.find(
    img => img.id === 'walking-beam-1'
  );
  const vigasMoveisImage2 = PlaceHolderImages.find(
    img => img.id === 'walking-beam-2'
  );
  const vedantesImages = PlaceHolderImages.filter(img =>
    ['vedantes-1', 'vedantes-2', 'vedantes-3', 'vedantes-4', 'vedantes-5'].includes(img.id)
  ).filter(Boolean) as ImagePlaceholder[];

  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de um orçamento para os Fornos de Vigas Móveis.'
  );
  const whatsappNumber = '551155556551';

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="relative grid md:grid-cols-2 gap-4 rounded-3xl overflow-hidden shadow-2xl bg-white">
          {/* Coluna da Esquerda */}
          <div className="p-8 sm:p-12 animate-slide-in-left">
            <h3 className="font-headline text-2xl lg:text-3xl font-bold mb-4 uppercase tracking-wider text-foreground">
             FORNOS DE VIGAS MÓVEIS PARA TRATAMENTO TÉRMICO DE TUBOS
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              VIGAS MÓVEIS, COLUNAS: Projeto e ligas especiais para otimizar a
              vida útil e minimizar o pick-up (aderência de material).
            </p>
            <div className="relative flex flex-col space-y-4 justify-center items-center">
              {vigasMoveisImage1 && (
                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 10, rotate: -2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative w-full"
                >
                  <Card className="overflow-hidden rounded-2xl shadow-lg border-4 border-white">
                    <Image
                      src={vigasMoveisImage1.imageUrl}
                      alt={vigasMoveisImage1.description}
                      width={400}
                      height={300}
                      data-ai-hint={vigasMoveisImage1.imageHint}
                      className="object-contain w-full h-auto"
                    />
                  </Card>
                </motion.div>
              )}
               {vigasMoveisImage2 && (
                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 10, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative w-full"
                >
                  <Card className="overflow-hidden rounded-2xl shadow-lg border-4 border-white">
                    <Image
                      src={vigasMoveisImage2.imageUrl}
                      alt={vigasMoveisImage2.description}
                      width={400}
                      height={300}
                      data-ai-hint={vigasMoveisImage2.imageHint}
                      className="object-contain w-full h-auto"
                    />
                  </Card>
                </motion.div>
              )}
            </div>
            <div className="flex mt-10">
              <Button asChild size="lg">
                <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar Orçamento
                </Link>
              </Button>
            </div>
          </div>

          {/* Coluna da Direita */}
          <div className="bg-gray-900 text-white p-8 sm:p-12 flex flex-col justify-between animate-slide-in-right">
            <div>
                <div className="relative grid grid-cols-1 gap-4 my-8">
                {vedantesImages.map((image, index) => (
                    <Card key={index} className="bg-gray-800/50 rounded-2xl overflow-hidden h-full">
                        <div className="relative aspect-square w-full">
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            data-ai-hint={image.imageHint}
                            className="object-contain p-4 rounded-2xl transition-transform duration-500 hover:scale-105"
                        />
                        </div>
                    </Card>
                ))}
                </div>
            </div>
            <div className="flex mt-auto w-full">
              <Button asChild size="lg" variant="accent" className="w-full">
                <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar Orçamento
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
