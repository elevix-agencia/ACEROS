'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { PlaceHolderImages, ImagePlaceholder } from '@/lib/placeholder-images';
import { useLanguage } from '@/hooks/use-language';

export function NavalCatalogSection() {
  const { t } = useLanguage();

  const catalogImages = PlaceHolderImages.filter(img =>
    img.id.startsWith('naval-catalog-')
  );

  return (
    <section className="py-20 sm:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Catálogo de Produtos Navais
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore nossa linha de componentes e peças para o setor naval.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {catalogImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-full transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1">
                    <CardContent className="p-0 aspect-square">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
                        data-ai-hint={image.imageHint}
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Search className="h-8 w-8 text-white" />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-4">
                  <div className="relative aspect-video w-full mt-4">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

    