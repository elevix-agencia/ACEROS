'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Layers, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function FurnaceAndPotProducts() {
  const { t } = useLanguage();

  const product2Images = [
    PlaceHolderImages.find(img => img.id === 'hot-dip-galvanizing-1'),
    PlaceHolderImages.find(img => img.id === 'hot-dip-galvanizing-2'),
    PlaceHolderImages.find(img => img.id === 'hot-dip-galvanizing-3'),
  ].filter(Boolean);

  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de um orçamento para produtos de siderurgia.'
  );
  const whatsappNumbers = ['551155556551', '551146442969', '551146442977'];

  return (
    <section
      className="relative py-20 sm:py-32 bg-gray-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-glow-blue opacity-20 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-glow-purple opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-24">
          {/* Produto 2: Linhas de Galvanização */}
          <div
            className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex flex-col justify-center md:order-last">
              <h3 className="font-headline text-2xl lg:text-3xl font-bold mb-4 text-white uppercase tracking-wider">
                LINHAS DE GALVANIZAÇÃO POR IMERSÃO A QUENTE (POTE)
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Componentes de alta performance submersos em banhos de Zinco,
                Zincalume e Alumínio+Si, e galvalume com ligas especiais da ACEROS que
                garantem durabilidade superior.
              </p>
              <ul className="space-y-4 text-gray-300 mb-8">
                <li className="flex items-start gap-3">
                  <Layers className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span>
                    Rolos de Imersão, Estabilizadores, Braços, Berços e Bicos
                    fundidos em peça única.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Layers className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span>
                    Ligas ACEROS TOTALMENTE LIVRES DE FERRITA para desempenho
                    superior.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Layers className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span>
                    Mancais (Buchas) bi-metálicas com desempenho de 3 a 7 vezes
                    maior.
                  </span>
                </li>
              </ul>
              <div className="flex flex-col gap-3">
                {whatsappNumbers.map((number, idx) => (
                  <Button
                    key={number}
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground w-fit transition-transform hover:scale-105"
                  >
                    <Link href={`https://wa.me/${number}?text=${whatsappMessage}`} target="_blank">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Solicitar Orçamento {idx + 1}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:order-first">
              {product2Images.map((image, index) =>
                image ? (
                  <Card
                    key={index}
                    className="group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up bg-gray-800/50 border-white/10"
                    style={{
                      animationDelay: `${0.2 + index * 0.15}s`,
                      animationFillMode: 'both',
                    }}
                  >
                    <CardContent className="p-4">
                      <div className="relative aspect-video w-full">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          data-ai-hint={image.imageHint}
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
