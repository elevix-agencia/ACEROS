'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { carouselImages } from '@/lib/images';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  const { t } = useLanguage();

  return (
    <section className="relative h-screen min-h-[600px] w-full hero-section">
      <Carousel
        className="h-full w-full"
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-full">
          {carouselImages.map((image, index) =>
            image ? (
              <CarouselItem key={index}>
                <div className="relative h-screen w-full">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    sizes="100vw"
                    data-ai-hint={image.imageHint}
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                </div>
              </CarouselItem>
            ) : null
          )}
        </CarouselContent>
        
        <div className="absolute inset-0 z-10 flex flex-col items-center md:items-start justify-center text-center md:text-left text-white p-4 sm:p-8 md:p-16 lg:p-24">
            <motion.div
                className="max-w-3xl"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.3,
                        delayChildren: 0.2,
                      }
                    }
                }}
            >
                <motion.h1
                  className="font-headline text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-shadow-lg"
                  style={{ lineHeight: '1.1' }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } }
                  }}
                >
                    {t.hero.main_title}
                </motion.h1>
                <motion.p 
                  className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 text-shadow-md"
                   variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                >
                  {t.hero.subtitle}
                </motion.p>
                <motion.div 
                  className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start"
                   variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                >
                    <Button asChild size="lg" className="px-10 sm:px-12 py-6 sm:py-7 text-sm sm:text-base font-bold bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
                        <Link href="/contato">
                          {t.hero.contact_us}
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="px-10 sm:px-12 py-6 sm:py-7 text-sm sm:text-base font-bold border-2 border-white bg-transparent text-white transition-colors hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-lg">
                        <Link href="/produtos">{t.hero.learn_more}</Link>
                    </Button>
                </motion.div>
            </motion.div>
        </div>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 px-4">
          <div className="container mx-auto flex justify-between">
            <CarouselPrevious className="relative -left-4 h-12 w-12 border-white/40 bg-white/20 text-white hover:bg-white/30 transition-transform duration-300 hover:scale-105 hidden sm:flex" />
            <CarouselNext className="relative -right-4 h-12 w-12 border-white/40 bg-white/20 text-white hover:bg-white/30 transition-transform duration-300 hover:scale-105 hidden sm:flex" />
          </div>
        </div>
      </Carousel>
    </section>
  );
}
