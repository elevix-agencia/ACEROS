
'use client';

import { useRef, useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { PlaceHolderImages, ImagePlaceholder } from '@/lib/placeholder-images';
import { useLanguage } from '@/hooks/use-language';
import { Sector } from '@/lib/expertise-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/icons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { SteelCastingProducts } from '@/components/sections/SteelCastingProducts';
import { TunnelFurnaceRollers } from '@/components/sections/TunnelFurnaceRollers';
import { HotStripMillRollers } from '@/components/sections/HotStripMillRollers';
import { CaplCglProducts } from '@/components/sections/CaplCglProducts';
import { FurnaceAndPotProducts } from '@/components/sections/FurnaceAndPotProducts';
import { WalkingBeamFurnace } from '@/components/sections/WalkingBeamFurnace';
import { BarFurnaceProducts } from '@/components/sections/BarFurnaceProducts';
import { MiningProducts } from '@/components/sections/mining-products';
import { GuseiraStavesSection, GuseiraTuyeresSection, GuseiraHousingsSection, GuseiraWearPlatesSection, GuseiraStructuralComponentsSection, GuseiraMediaSection } from '@/components/sections/featured-products';
import { OilGasProducts } from '@/components/sections/oil-gas-products';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Search, Check, BrainCircuit, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { SiderurgiaImageGallery } from '@/components/sections/SiderurgiaImageGallery';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { NavalCatalogSection } from '@/components/sections/NavalCatalogSection';
import { NavalProductCard } from '@/components/sections/NavalProductCard';

export function ExpertiseDetailsClient({
  pageData,
}: {
  pageData: ExpertisePageData;
}) {
  const { t } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!pageData) {
    return null;
  }

  const { sector, translations } = pageData;

  if (!sector) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>
          {(translations && translations.expertise_sectors.page.sector_not_found) ||
            'Setor não encontrado.'}
        </p>
      </div>
    );
  }

  const heroImage = PlaceHolderImages.find(img => img.id === sector.heroImageId);
  
  if (!isClient) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div>
      <section className="relative h-[60vh] min-h-[400px] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            sizes="100vw"
            data-ai-hint={heroImage.imageHint}
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
          <div className="relative z-10 flex flex-col items-center px-4">
            <motion.p 
              className="font-headline text-lg sm:text-xl font-medium tracking-wide text-accent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {translations.expertise_sectors.page.solutions_for}
            </motion.p>
            <motion.h1 
              className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {sector.title}
            </motion.h1>
            <motion.p 
              className="mt-6 max-w-3xl text-lg text-slate-200 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {sector.description}
            </motion.p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div>Carregando conteúdo...</div>}>
         <SectorContent sector={sector} translations={translations} />
      </Suspense>

      <WhatsAppCta />
    </div>
  );
}

function OilGasNewGallerySection() {
  const images = [
    PlaceHolderImages.find(img => img.id === 'oil-gas-new-gallery-1'),
    PlaceHolderImages.find(img => img.id === 'oil-gas-new-gallery-2'),
    PlaceHolderImages.find(img => img.id === 'oil-gas-new-gallery-3'),
  ].filter((img): img is ImagePlaceholder => !!img);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section 
      ref={containerRef}
      className="relative py-20 sm:py-32 bg-gray-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
      <motion.div 
        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-blue-900/30 via-transparent to-transparent opacity-50"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-cyan-900/30 via-transparent to-transparent opacity-50"
        style={{ y: y2 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative aspect-square rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-700"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
            >
              <Image 
                src={image.imageUrl} 
                alt={image.description} 
                fill 
                className="object-cover" 
                data-ai-hint={image.imageHint}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TratamentoTermicoNewSection({translations}: {translations: any}) {
  const images = [
    PlaceHolderImages.find(img => img.id === 'tratamento-new-1'),
    PlaceHolderImages.find(img => img.id === 'tratamento-new-2'),
    PlaceHolderImages.find(img => img.id === 'tratamento-new-3'),
    PlaceHolderImages.find(img => img.id === 'tratamento-new-4'),
  ].filter((img): img is ImagePlaceholder => !!img);

  return (
    <motion.section 
      className="relative py-20 sm:py-32 bg-white text-foreground overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-50"
        animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl opacity-50"
        animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "mirror", delay: 5 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            {translations.expertise_sectors.page.tratamento_new_section_title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {translations.expertise_sectors.page.tratamento_new_section_subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <CardContent className="p-0 aspect-square">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        data-ai-hint={image.imageHint}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Icon name="Search" className="h-10 w-10 text-white" />
                      </div>
                    </CardContent>
                  </Card>
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
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}


function TratamentoTermicoVideos({ videoUrls, translations }: { videoUrls: string[], translations: any }) {
  if (!videoUrls || videoUrls.length === 0) return null;

  return (
    <motion.section 
      className="py-20 sm:py-32 bg-secondary/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            {translations.expertise_sectors.page.tratamento_videos_title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {translations.expertise_sectors.page.tratamento_videos_subtitle}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videoUrls.map((url, index) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1">
                <iframe
                  src={url}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function TratamentoTermicoFinalSection() {
  const image = PlaceHolderImages.find(img => img.id === 'tratamento-final-section-image');

  if (!image) return null;

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
        >
          <Image
            src={image.imageUrl}
            alt={image.description}
            width={1200}
            height={800}
            data-ai-hint={image.imageHint}
            className="object-contain w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}

function TratamentoTermicoExtraGallery({translations}: {translations: any}) {
  const images = [
    PlaceHolderImages.find(img => img.id === 'tratamento-extra-1'),
    PlaceHolderImages.find(img => img.id === 'tratamento-extra-2'),
    PlaceHolderImages.find(img => img.id === 'tratamento-extra-3'),
    PlaceHolderImages.find(img => img.id === 'tratamento-extra-4'),
  ].filter((img): img is ImagePlaceholder => !!img);

  return (
    <motion.section 
      className="py-20 sm:py-32 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            {translations.expertise_sectors.page.tratamento_extra_gallery_title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {translations.expertise_sectors.page.tratamento_extra_gallery_subtitle}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-full transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2">
                    <CardContent className="p-0 aspect-square">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        data-ai-hint={image.imageHint}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Search className="h-10 w-10 text-white" />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-4">
                  <div className="relative aspect-video w-full mt-4">
                    <Image src={image.imageUrl} alt={image.description} fill className="object-contain rounded-lg" />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function GrelhaFornoPocoSection({translations}: {translations: any}) {
  const image = PlaceHolderImages.find(img => img.id === 'tratamento-grelha-forno-poco');

  if (!image) return null;

  return (
    <motion.section
      className="py-20 sm:py-32 bg-background text-foreground"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            {translations.expertise_sectors.page.grelha_forno_poco_title}
          </h2>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src={image.imageUrl}
              alt={image.description}
              width={1200}
              height={800}
              data-ai-hint={image.imageHint}
              className="object-contain w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function TratamentoTermicoOrangeGallery({translations}: {translations: any}) {
  const images = [
    PlaceHolderImages.find(img => img.id === 'tratamento-orange-1'),
    PlaceHolderImages.find(img => img.id === 'tratamento-orange-2'),
    PlaceHolderImages.find(img => img.id === 'tratamento-orange-3'),
    PlaceHolderImages.find(img => img.id === 'tratamento-orange-4'),
  ].filter((img): img is ImagePlaceholder => !!img);

  return (
    <motion.section 
      className="relative py-20 sm:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-foreground overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            {translations.expertise_sectors.page.tratamento_orange_gallery_title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {translations.expertise_sectors.page.tratamento_orange_gallery_subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-full transition-all duration-300 hover:shadow-orange-200 hover:-translate-y-2">
                    <CardContent className="p-0 aspect-[4/5]">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        data-ai-hint={image.imageHint}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                        
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-4">
                  <div className="relative aspect-video w-full mt-4">
                    <Image src={image.imageUrl} alt={image.description} fill className="object-contain rounded-lg" />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}


function TratamentoTermicoCreativeGallery({translations}: {translations: any}) {
  const { t } = useLanguage();
  const allImages = [
    PlaceHolderImages.find(img => img.id === 'tratamento-creative-1'),
    PlaceHolderImages.find(img => img.id === 'tratamento-creative-2'),
    PlaceHolderImages.find(img => img.id === 'tratamento-creative-3'),
    PlaceHolderImages.find(img => img.id === 'tratamento-creative-4'),
    PlaceHolderImages.find(img => img.id === 'tratamento-creative-5'),
  ].filter((img): img is ImagePlaceholder => !!img);

  const [mainImage, sideImage1, sideImage2, ...gallery] = allImages;

  const whatsappMessage = encodeURIComponent('Olá! Gostaria de mais informações sobre suas inovações em tratamento térmico.');
  const whatsappNumber = '551155556551';

  return (
    <motion.section 
        className="relative py-20 sm:py-32 bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 text-foreground overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
    >
        <motion.div 
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-amber-200/50 via-transparent to-transparent rounded-full filter blur-3xl opacity-60"
            animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 30, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div 
            className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-red-200/50 via-transparent to-transparent rounded-full filter blur-3xl opacity-60"
            animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 35, repeat: Infinity, repeatType: "mirror", delay: 5 }}
        />

        <div className="container mx-auto px-4 relative z-10">
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                    {translations.expertise_sectors.page.tratamento_creative_gallery_title}
                </h2>
                
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
                <motion.div 
                    className="space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {mainImage && <ImageCard image={mainImage} className="aspect-video bg-white/5 p-4" />}
                    <div className="grid grid-cols-2 gap-8">
                        {sideImage1 && <ImageCard image={sideImage1} className="aspect-square" />}
                        {sideImage2 && <ImageCard image={sideImage2} className="aspect-square" />}
                    </div>
                </motion.div>
                 <motion.div 
                    className="space-y-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="grid grid-cols-2 gap-4">
                        {gallery.map((img, index) => (
                           <motion.div
                             key={img.id}
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                           >
                            <ImageCard image={img} className="aspect-square" />
                           </motion.div>
                        ))}
                    </div>
                    <motion.div 
                        className="bg-white/50 rounded-2xl p-8 text-center border border-orange-200/50 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <h3 className="font-headline text-2xl font-bold text-foreground mb-3">{translations.expertise_sectors.page.tratamento_creative_cta_title}</h3>
                        <p className="text-muted-foreground mb-6">{translations.expertise_sectors.page.tratamento_creative_cta_subtitle}</p>
                        <div className="flex justify-center">
                          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                              <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank">
                                  {translations.expertise_sectors.page.tratamento_creative_cta_button}
                              </Link>
                          </Button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </motion.section>
  );
}



function MiningNewSection({translations}: {translations: any}) {
  const newImage = PlaceHolderImages.find(
    (img) => img.id === 'mining-new-pelletizing-image'
  );

  return (
    <section className="relative py-20 sm:py-32 bg-gray-900 text-white overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-80"></div>
       <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="animate-slide-in-left md:col-span-3">
             {newImage && (
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl glowing-border group cursor-pointer"
                  >
                    <Image
                      src={newImage.imageUrl}
                      alt={newImage.description}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      data-ai-hint={newImage.imageHint}
                      className="object-contain p-4"
                    />
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-full h-[90vh] p-4 bg-background/90 backdrop-blur-sm border-accent/20 flex flex-col">
                  <DialogHeader>
                    <DialogTitle className="text-foreground sr-only">
                      {newImage.description}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="relative flex-grow w-full h-full my-4">
                    <Image
                      src={newImage.imageUrl}
                      alt={newImage.description}
                      fill
                      sizes="90vw"
                      data-ai-hint={newImage.imageHint}
                      className="object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
          <div className="animate-slide-in-right md:col-span-2">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6 font-headline text-3xl font-bold tracking-tight text-accent sm:text-4xl"
            >
              {translations.expertise_sectors.page.mining_new_section_title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-body text-lg text-slate-200"
            >
              {translations.expertise_sectors.page.mining_new_section_subtitle}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiningNewSection2() {
  const image = PlaceHolderImages.find(
    (img) => img.id === 'mining-new-section-2-image'
  );

  return (
    <section className="relative py-16 sm:py-24 bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-secondary/30 opacity-80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center">
           {image && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
            >
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={1200}
                height={800}
                data-ai-hint={image.imageHint}
                className="object-contain w-full h-auto"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function MiningRollerScreens({translations}: {translations: any}) {
  const images = [
    PlaceHolderImages.find((img) => img.id === 'mining-new-gallery-1'),
    PlaceHolderImages.find((img) => img.id === 'mining-new-gallery-2'),
    PlaceHolderImages.find((img) => img.id === 'mining-new-gallery-3'),
    PlaceHolderImages.find((img) => img.id === 'mining-new-gallery-4'),
    PlaceHolderImages.find((img) => img.id === 'mining-new-gallery-5'),
  ].filter((img): img is ImagePlaceholder => !!img);

  return (
    <section className="relative py-20 sm:py-32 bg-accent overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, rgba(255,255,255,0.5), rgba(255,255,255,0.5) 1px, transparent 1px, transparent 60px)',
          backgroundSize: '84px 84px',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
            {translations.expertise_sectors.page.mining_roller_screens_title}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <CardContent className="p-0 aspect-square">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        data-ai-hint={image.imageHint}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Icon name="Search" className="h-10 w-10 text-white" />
                      </div>
                    </CardContent>
                  </Card>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NavalFlangesSection({translations}: {translations: any}) {
  const { t } = useLanguage();
  const images = [
    PlaceHolderImages.find((img) => img.id === 'naval-product-flange-1'),
    PlaceHolderImages.find((img) => img.id === 'naval-product-flange-2'),
    PlaceHolderImages.find((img) => img.id === 'naval-product-flange-3'),
    PlaceHolderImages.find((img) => img.id === 'naval-product-flange-4'),
    PlaceHolderImages.find((img) => img.id === 'naval-product-flange-5'),
  ].filter((img): img is ImagePlaceholder => !!img);

  return (
    <section className="relative py-20 sm:py-32 bg-orange-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-cyan-900/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            {translations.expertise_sectors.page.naval_flanges_title}
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            {translations.expertise_sectors.page.naval_flanges_subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.slice(0,1).map((image, index) => (
             <motion.div 
              key={image.id}
              className="md:col-span-2 md:row-span-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <ImageCard image={image} className="h-full w-full aspect-square" />
            </motion.div>
          ))}
          {images.slice(1,5).map((image, index) => (
             <motion.div 
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1, ease: "easeOut" }}
            >
              <ImageCard image={image} className="h-full w-full aspect-square" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NavalTubesSection({translations}: {translations: any}) {
  const { t } = useLanguage();
  const images = [
    PlaceHolderImages.find((img) => img.id === 'naval-product-tube-1'),
    PlaceHolderImages.find((img) => img.id === 'naval-product-tube-2'),
    PlaceHolderImages.find((img) => img.id === 'naval-product-tube-3'),
    PlaceHolderImages.find((img) => img.id === 'naval-product-tube-4'),
    PlaceHolderImages.find((img) => img.id === 'naval-product-tube-5'),
    PlaceHolderImages.find((img) => img.id === 'naval-propeller-blade-1'),
    PlaceHolderImages.find((img) => img.id === 'naval-propeller-blade-2'),
    PlaceHolderImages.find((img) => img.id === 'naval-propeller-installation'),
    PlaceHolderImages.find((img) => img.id === 'naval-propeller-detail'),
  ].filter((img): img is ImagePlaceholder => !!img);

  const whatsappMessage = encodeURIComponent(t.whatsapp.message);
  const whatsappNumber = '551155556551';

  return (
    <section className="relative py-20 sm:py-32 bg-gray-50 text-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:32px_32px] opacity-50"></div>
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-blue-100/30 via-transparent to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-cyan-100/20 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                    {translations.expertise_sectors.page.naval_tubes_title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    {translations.expertise_sectors.page.naval_tubes_subtitle}
                </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {images.map((image, index) => (
                   <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: (index + 1) * 0.1, ease: 'easeOut' }}
                    className={cn({
                        "md:col-span-2 md:row-span-2": index === 0,
                        "col-span-1": index > 0,
                    })}
                >
                    {image && <ImageCard image={image} className="aspect-square" />}
                </motion.div>
                ))}
            </div>
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="border-accent text-accent-foreground bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105">
                  <Link href="/contato">
                    {t.cta.request_quote}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border-accent text-accent-foreground bg-orange-500 hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-105"
                >
                  <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Link>
                </Button>
              </div>
            </motion.div>
        </div>
    </section>
  );
}

function NavalAnalysisSection({translations}: {translations: any}) {
  const images = [
    PlaceHolderImages.find(img => img.id === 'naval-product-3-img-1'),
    PlaceHolderImages.find(img => img.id === 'naval-product-3-img-2'),
    PlaceHolderImages.find(img => img.id === 'naval-product-3-img-3'),
  ].filter((img): img is ImagePlaceholder => !!img);

  return (
    <section className="relative py-20 sm:py-32 bg-white text-foreground overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-50"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl opacity-50"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "mirror",
          delay: 5
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">
            {translations.expertise_sectors.page.naval_analysis_title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {translations.expertise_sectors.page.naval_analysis_subtitle}
          </p>
        </motion.div>

        <div className="relative h-[500px] w-full [perspective:1000px]">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 100, rotateX: -30, rotateY: 20 * (index - 1) }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.2 * index, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-2/5 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-2 border-border/50"
              style={{
                top: `${10 + index * 15}%`,
                left: `${10 + index * 20}%`,
                zIndex: index,
              }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative w-full h-full cursor-pointer group">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-contain p-4 bg-gray-100/50"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm"><Search className="h-8 w-8 text-white"/></div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-full h-[90vh] p-4 bg-background/90 backdrop-blur-sm border-accent/20">
                  <div className="relative flex-grow h-full">
                    <Image src={image.imageUrl} alt={image.description} fill className="object-contain" />
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

function NavalAssembliesSection({translations}: {translations: any}) {
    const images = [
        PlaceHolderImages.find(img => img.id === 'naval-assembly-1'),
        PlaceHolderImages.find(img => img.id === 'naval-assembly-2'),
        PlaceHolderImages.find(img => img.id === 'naval-assembly-3'),
        PlaceHolderImages.find(img => img.id === 'naval-assembly-4'),
        PlaceHolderImages.find(img => img.id === 'naval-assembly-5'),
    ].filter((img): img is ImagePlaceholder => !!img);

    const newVideos = [
      { id: 'naval-video-1', url: 'https://res.cloudinary.com/dhsn2oxv5/video/upload/v1767758738/n_aqwurb.mp4' },
      { id: 'naval-video-2', url: 'https://res.cloudinary.com/dhsn2oxv5/video/upload/v1767758738/n1_tiluhk.mp4' },
    ];
    
    const mediaItems = [...images, ...newVideos];

    const VideoCard = ({ url, className }: { url: string; className?: string }) => (
      <motion.div
        className={cn("relative rounded-2xl shadow-lg overflow-hidden group cursor-pointer aspect-video", className)}
        whileHover={{ scale: 1.05, zIndex: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <video
          src={url}
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
            <Search className="h-8 w-8 text-white" />
          </div>
        </div>
      </motion.div>
    );

    return (
      <section className="py-20 sm:py-32 bg-white">
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                    {translations.expertise_sectors.page.naval_assemblies_title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    {translations.expertise_sectors.page.naval_assemblies_subtitle}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {mediaItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                    >
                       {'imageUrl' in item ? (
                          <ImageCard image={item as ImagePlaceholder} className="aspect-square" />
                        ) : (
                          <VideoCard url={item.url} />
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    );
}

function NavalConnectorsSection({translations}: {translations: any}) {
  const { t } = useLanguage();
  const images = [
    PlaceHolderImages.find(img => img.id === 'naval-connector-1'),
    PlaceHolderImages.find(img => img.id === 'naval-connector-2'),
  ].filter((img): img is ImagePlaceholder => !!img);

  const [mainImage, thumbnailImage] = images;
  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de um orçamento para o tratamento de Fosfato de Manganês.'
  );
  const whatsappNumber = '551155556551';

  return (
    <section className="py-20 sm:py-32 bg-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
              {translations.expertise_sectors.page.naval_connectors_title}
            </h2>
            <p className="text-lg leading-relaxed text-white/90 mb-8">
              {translations.expertise_sectors.page.naval_connectors_subtitle}
            </p>
            <div className="flex">
              <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-white/90">
                  <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank">
                      Solicitar Orçamento
                  </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {mainImage && (
              <div className="col-span-2">
                <ImageCard image={mainImage} className="aspect-square" />
              </div>
            )}
            {thumbnailImage && (
              <div className="col-span-1">
                <ImageCard image={thumbnailImage} className="aspect-square" />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function NavalNewProductsSection({translations}: {translations: any}) {
  const products = [
    {
      id: 'naval-panama-chock-bulwark',
      name: 'BUZINA PANAMÁ PARA FIXAÇÃO EM BORDA FALSA \n ABNT/NBR 6754 (DIN 81915)',
    },
    {
      id: 'naval-panama-chock-deck',
      name: 'BUZINA PANAMÁ PARA FIXAÇÃO EM CONVÉS \n ABNT/NBR 6754 (DIN 81915)',
    },
    {
      id: 'naval-triangular-towing-horn',
      name: 'BUZINA DE REBOQUE TRIANGULAR',
    },
     {
      id: 'naval-buzina-adicional',
      name: 'BUZINA DE REBOQUE ADICIONAL',
    },
  ];

  const images = products.map(p => PlaceHolderImages.find(img => img.id === p.id)).filter((img): img is ImagePlaceholder => !!img);

  return (
    <section className="relative py-20 sm:py-32 bg-white text-foreground overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            {translations.expertise_sectors.page.naval_new_products_title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const image = images.find(img => img.id === product.id);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              >
                <Card className="bg-background border-border/20 rounded-2xl h-full flex flex-col group overflow-hidden transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
                  {image && (
                    <CardContent className="p-4 bg-white aspect-square">
                      <div className="relative h-full w-full">
                        <Image
                          src={image.imageUrl}
                          alt={image.description || product.name}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </CardContent>
                  )}
                  <CardHeader className="text-center flex-grow flex flex-col justify-center p-6 bg-gray-50/50">
                    <CardTitle className="text-foreground text-base whitespace-pre-line leading-tight font-semibold">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function NavalWinchSection({translations}: {translations: any}) {
  const image = PlaceHolderImages.find(img => img.id === 'naval-winch-image');

  if (!image) return null;

  return (
    <section className="py-20 sm:py-32 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            {translations.expertise_sectors.page.naval_winch_title}
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl group"
        >
          <div className="relative aspect-video w-full">
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function KortNozzleSection({translations}: {translations: any}) {
  const processSteps = [
    {
      title: translations.expertise_sectors.page.kort_nozzle_step1_title,
      images: [
        PlaceHolderImages.find(img => img.id === 'kort-nozzle-1'),
        PlaceHolderImages.find(img => img.id === 'kort-nozzle-2'),
      ].filter((img): img is ImagePlaceholder => !!img),
    },
    {
      title: translations.expertise_sectors.page.kort_nozzle_step2_title,
      images: [
        PlaceHolderImages.find(img => img.id === 'kort-nozzle-3'),
        PlaceHolderImages.find(img => img.id === 'kort-nozzle-4'),
      ].filter((img): img is ImagePlaceholder => !!img),
    },
    {
      title: translations.expertise_sectors.page.kort_nozzle_step3_title,
      images: [
        PlaceHolderImages.find(img => img.id === 'kort-nozzle-5'),
      ].filter((img): img is ImagePlaceholder => !!img),
    },
     {
      title: translations.expertise_sectors.page.kort_nozzle_step4_title,
      images: [
        PlaceHolderImages.find(img => img.id === 'kort-nozzle-6'),
      ].filter((img): img is ImagePlaceholder => !!img),
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            {translations.expertise_sectors.page.kort_nozzle_title}
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {translations.expertise_sectors.page.kort_nozzle_subtitle}
          </p>
        </motion.div>

        <div className="space-y-16">
          {processSteps.map((step, stepIndex) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: stepIndex * 0.2 }}
            >
              <h3 className="font-headline text-2xl font-semibold text-accent mb-8 text-center">{step.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {step.images.map((image, imgIndex) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: imgIndex * 0.15 }}
                  >
                    <Card className="bg-gray-800 border-gray-700/50 rounded-2xl overflow-hidden shadow-lg group">
                      <CardContent className="p-0 aspect-[4/3] relative">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


const ImageCard = ({ image, className }: { image: ImagePlaceholder; className?: string }) => (
  <Dialog>
    <DialogTrigger asChild>
      <motion.div
        className={cn("relative rounded-2xl shadow-lg overflow-hidden group cursor-pointer aspect-[4/3]", className)}
        whileHover={{ scale: 1.05, zIndex: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover"
          data-ai-hint={image.imageHint}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
            <Search className="h-8 w-8 text-white" />
          </div>
        </div>
      </motion.div>
    </DialogTrigger>
    <DialogContent className="max-w-5xl w-full h-[90vh] p-4 bg-background/90 backdrop-blur-sm border-accent/20 flex flex-col">
      <DialogHeader>
        <DialogTitle className="text-foreground sr-only">{image.description}</DialogTitle>
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
);

const SectorContent = ({ sector, translations }: { sector: Sector; translations: any }) => {
  const { t } = useLanguage();
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const featureImage = PlaceHolderImages.find(img => img.id === sector.featureImageId);
  const galleryImages = sector.galleryImageIds?.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean) as ImagePlaceholder[] | undefined;
  const siderurgiaNewImage = PlaceHolderImages.find(img => img.id === 'siderurgia-new-section-image');

  const galleryItems = [
    ...(galleryImages?.map(img => ({ ...img, type: 'image' as const })) || []),
    ...(sector.videoUrl ? [{ type: 'video' as const, url: sector.videoUrl, id: sector.videoUrl }] : []),
    ...(sector.videoUrls?.map(url => ({ type: 'video' as const, url, id: url })) || []),
  ];

  const qualityPillars = [
    { icon: 'Award' as const, title: 'Qualidade Superior', description: 'Nossas ligas e processos garantem componentes que superam os padrões da indústria.' },
    { icon: 'Component' as const, title: 'Engenharia de Precisão', description: 'Cada peça é projetada para máxima eficiência, durabilidade e encaixe perfeito.' },
    { icon: 'ShieldCheck' as const, title: 'Durabilidade Extrema', description: 'Componentes construídos para resistir às condições mais severas de abrasão e impacto.' },
  ];

  switch (sector.id) {
    case 'guseira':
      return (
        <>
          <GuseiraStructuralComponentsSection />
          <GuseiraStavesSection />
          <GuseiraWearPlatesSection />
          <GuseiraTuyeresSection />
          <GuseiraMediaSection videoUrls={sector.videoUrls || []} imageIds={sector.galleryImageIds || []} />
          <GuseiraHousingsSection />
        </>
      );
    case 'mineracao':
      return (
        <>
          <section className="py-20 sm:py-32 bg-background text-foreground relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16 animate-fade-in-up">
                <h2 className="mb-4 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-accent">{translations.expertise_sectors.page.mining_quality_title}</h2>
                <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground">{translations.expertise_sectors.page.mining_quality_subtitle}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {qualityPillars.map((pillar, index) => (
                  <motion.div key={pillar.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
                    <Card className="group relative p-8 h-full text-center bg-card rounded-2xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent mx-auto transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                        <Icon name={pillar.icon} className="h-8 w-8" />
                      </div>
                      <h3 className="font-headline text-xl text-foreground font-bold mb-4">{pillar.title}</h3>
                      <p className="text-muted-foreground">{pillar.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <MiningRollerScreens translations={translations} />
          <MiningProducts />
          <MiningNewSection translations={translations} />
          <MiningNewSection2 />
        </>
      );
    case 'siderurgia':
      return (
        <>
          <SteelCastingProducts />
          <TunnelFurnaceRollers />
          <HotStripMillRollers />
          <CaplCglProducts />
          <SiderurgiaImageGallery />
          <FurnaceAndPotProducts />
          <WalkingBeamFurnace />
          <BarFurnaceProducts />
          <TratamentoTermicoNewSection translations={translations} />
          {sector.videoUrls && sector.videoUrls.length > 0 && <TratamentoTermicoVideos videoUrls={sector.videoUrls} translations={translations} />}
          <TratamentoTermicoFinalSection />
           {siderurgiaNewImage && (
            <section className="py-20 sm:py-32 bg-white">
              <div className="container mx-auto px-4">
                <div className="flex justify-center animate-fade-in-up">
                  <div className="relative w-full max-w-5xl rounded-xl overflow-hidden shadow-lg border">
                    <Image src={siderurgiaNewImage.imageUrl} alt={siderurgiaNewImage.description} width={1200} height={800} data-ai-hint={siderurgiaNewImage.imageHint} className="object-contain w-full h-auto" />
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      );
    case 'tratamento_termico':
      return (
        <>
          <TratamentoTermicoExtraGallery translations={translations} />
          <GrelhaFornoPocoSection translations={translations} />
          <TratamentoTermicoOrangeGallery translations={translations} />
          <TratamentoTermicoCreativeGallery translations={translations} />
        </>
      );
    case 'naval':
        return (
            <>
              <NavalCatalogSection />
              <NavalTubesSection translations={translations} />
              <NavalFlangesSection translations={translations} />
              <NavalAnalysisSection translations={translations} />
              <NavalAssembliesSection translations={translations} />
              <NavalConnectorsSection translations={translations} />
              <NavalNewProductsSection translations={translations} />
              <NavalWinchSection translations={translations} />
              <KortNozzleSection translations={translations} />
            </>
        );
    case 'oleo_e_gas':
        return (
            <>
              <OilGasProducts />
              <GuseiraHousingsSection />
              <OilGasNewGallerySection />
            </>
        );
    default:
      return (
        <>
           <motion.section className="py-20 sm:py-32 bg-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }}>
              <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                  <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, delay: 0.2 }}>
                      <h2 className="mb-6 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{translations.expertise_sectors.page.feature_title}</h2>
                      <p className="mb-8 text-lg text-muted-foreground">{translations.expertise_sectors.page.feature_description_1}{' '}<span className="font-bold text-primary">{sector.title}</span>.</p>
                      <ul className="space-y-4">
                        {[1, 2, 3].map(i => (
                            <li key={i} className="flex items-start gap-4">
                                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Icon name={i === 1 ? "Star" : i === 2 ? "ShieldCheck" : "Handshake"} className="h-5 w-5" />
                                </div>
                                <div><h4 className="font-semibold text-lg">{translations.expertise_sectors.page[`feature_item${i}`]}</h4></div>
                            </li>
                        ))}
                      </ul>
                  </motion.div>
                  {featureImage && (
                      <motion.div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, delay: 0.4 }}>
                          <Image src={featureImage.imageUrl} alt={featureImage.description} fill sizes="(max-width: 768px) 100vw, 50vw" data-ai-hint={featureImage.imageHint} className="object-cover transition-transform duration-500 hover:scale-110" />
                      </motion.div>
                  )}
              </div>
          </motion.section>
           {galleryItems.length > 0 && (
            <section className="py-20 sm:py-32 bg-secondary/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="mb-4 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                            {galleryItems.some(item => item.type === 'video') ? translations.expertise_sectors.page.video_title : translations.expertise_sectors.page.gallery_title}
                        </h2>
                    </div>
                    <Carousel className="w-full" opts={{ loop: true }} plugins={[plugin.current]} onMouseEnter={() => plugin.current.stop()} onMouseLeave={() => plugin.current.reset()}>
                        <CarouselContent>
                            {galleryItems.map((item, index) => (
                                <CarouselItem key={item.id || index} className="basis-full md:basis-1/2 lg:basis-1/3">
                                    <div className="p-2">
                                        {item.type === 'video' && 'url' in item ? (
                                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
                                                <iframe src={item.url} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                            </div>
                                        ) : item.type === 'image' && 'imageUrl' in item ? (
                                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
                                                <Image src={item.imageUrl} alt={item.description} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" data-ai-hint={item.imageHint} className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                            </div>
                                        ) : null}
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
                    </Carousel>
                </div>
            </section>
        )}
        </>
      );
  }
};
