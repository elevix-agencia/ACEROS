
'use client';

import Image from 'next/image';
import { PlaceHolderImages, ImagePlaceholder } from '@/lib/placeholder-images';
import { useLanguage } from '@/hooks/use-language';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Eye, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export function SiderurgiaImageGallery() {
  const { t } = useLanguage();

  const imageIds = [
    'siderurgia-new-gallery-1',
    'siderurgia-new-gallery-2',
    'siderurgia-new-gallery-3',
    'siderurgia-new-gallery-4',
  ];

  const galleryImages = imageIds
    .map(id => PlaceHolderImages.find(img => img.id === id))
    .filter(Boolean) as ImagePlaceholder[];

  return (
    <section className="py-20 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-4 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Catálogo de Produtos
          </h2>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground">
            Explore os detalhes técnicos e a precisão de nossos componentes para a indústria siderúrgica.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryImages.map((image, index) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <Card className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-full border-2 border-transparent hover:border-primary transition-all duration-300">
                    <CardContent className="p-0 aspect-square">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill sizes="(max-width: 768px) 100vw, 50vw"
                        data-ai-hint={image.imageHint}
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                      />
                       <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="p-4 bg-primary/80 rounded-full">
                          <Search className="h-8 w-8 text-primary-foreground" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-full h-[90vh] p-4 bg-background/90 backdrop-blur-sm border-accent/20 flex flex-col">
                <DialogHeader>
                  <DialogTitle className="text-foreground sr-only">
                    {image.description}
                  </DialogTitle>
                </DialogHeader>
                <div className="relative flex-grow w-full h-full my-4">
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
          ))}
        </div>
      </div>
    </section>
  );
}
