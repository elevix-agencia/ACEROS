
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export function SteelCastingProducts() {
  const { t, language } = useLanguage();
  const copy = t.expertise_sectors.siderurgia.solutions.siderurgia_continuous_casting;
  const productImage = PlaceHolderImages.find(
    (img) => img.id === 'steel-casting-roller'
  );

  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de um orçamento para os rolos de lingotamento contínuo.'
  );
  const whatsappNumber = '551155556551';

  return (
    <motion.section
      className="relative py-20 sm:py-32 bg-white text-foreground overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {productImage && (
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden rounded-2xl shadow-2xl group cursor-pointer bg-white border border-slate-200">
                    <CardContent className="p-4">
                      <div className="relative w-full aspect-video">
                        <Image
                          src={productImage.imageUrl}
                          alt={productImage.description}
                          fill sizes="(max-width: 768px) 100vw, 50vw"
                          data-ai-hint={productImage.imageHint}
                          className="object-contain w-full h-auto transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-2 sm:p-4 bg-gray-900 border-accent/20 text-white">
                  <DialogHeader>
                    <DialogTitle className="text-white sr-only">
                      {productImage.description}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="relative aspect-video w-full mt-4">
                    <Image
                      src={productImage.imageUrl}
                      alt={productImage.description}
                      fill sizes="(max-width: 768px) 100vw, 50vw"
                      data-ai-hint={productImage.imageHint}
                      className="object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight text-accent sm:text-4xl">
              {copy.title}
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              {copy.description}
            </p>

            <div className="flex">
              <Button asChild size="lg" className="transition-transform hover:scale-105">
                <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {language === 'pt' ? 'Orçamento' : language === 'es' ? 'Cotización' : language === 'de' ? 'Angebot' : language === 'it' ? 'Preventivo' : 'Quote'}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
