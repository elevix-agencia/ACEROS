
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Layers, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { steelDetailCopy } from '@/lib/i18n/steel-detail-copy';

export function FurnaceAndPotProducts() {
  const { language, t } = useLanguage();
  const copy = steelDetailCopy[language];

  const product2Images = [
    PlaceHolderImages.find(img => img.id === 'hot-dip-galvanizing-1'),
    PlaceHolderImages.find(img => img.id === 'hot-dip-galvanizing-2'),
    PlaceHolderImages.find(img => img.id === 'hot-dip-galvanizing-3'),
  ].filter(Boolean);

  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de um orçamento para produtos de siderurgia.'
  );
  const whatsappNumber = '551155556551';

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
                {copy.potTitle}
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                {copy.potIntro}
              </p>
              <ul className="space-y-4 text-gray-300 mb-8">
                <li className="flex items-start gap-3">
                  <Layers className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span>
                    {copy.potItems[0]}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Layers className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span>
                    {copy.potItems[1]}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Layers className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span>
                    {copy.potItems[2]}
                  </span>
                </li>
              </ul>
              <div className="flex">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground w-fit transition-transform hover:scale-105"
                >
                  <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {t.hero.contact_us}
                  </Link>
                </Button>
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
                          fill sizes="(max-width: 768px) 100vw, 50vw"
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
