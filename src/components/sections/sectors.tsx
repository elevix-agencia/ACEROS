
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { sectorsData } from '@/lib/expertise-data';
import { Icon } from '@/components/icons';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Sectors() {
  const { t } = useLanguage();

  if (!t || !t.expertise_sectors) {
    return null; 
  }

  const sectors = sectorsData(t);
  const getLink = (id: string) => {
    const slug = id;
    if (slug === 'engenharia') {
      return `/${slug}`;
    }
    if (slug === 'certificados') {
      return '/qualificacao';
    }
    return `/atuacao/${slug}`;
  };

  const getImageUrl = (id: string) => {
    switch (id) {
      case 'mineracao':
        return '/images/imgur/WnOxyac.png';
      case 'naval':
        return '/images/imgur/jNzhuvc.png';
      case 'siderurgia':
        return '/images/imgur/u6BgJEO.jpeg';
      case 'oleo_e_gas':
        return '/images/imgur/Voi7tth.png';
      case 'guseira':
        return '/images/imgur/NJyU0UM.png';
      case 'tratamento_termico':
        return '/images/imgur/vMd79CP.jpeg';
      case 'engenharia':
        return '/images/imgur/rzsiIFj.png';
      case 'certificados':
        return '/images/imgur/edUTdWf.jpeg';
      default:
        return '';
    }
  };


  return (
    <section
      id="sectors"
      className="py-20 sm:py-32 bg-accent text-accent-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="text-center animate-fade-in-up mb-16">
          <h2 className="mb-4 font-headline text-4xl sm:text-5xl font-bold tracking-tight">
            {t.sectors.title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-accent-foreground/90">
            {t.sectors.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, index) => {
            const imageUrl = getImageUrl(sector.id);
            return (
            <div key={sector.id} className="mercado-atuacao-card animate-fade-in-up"
              style={{
                animationDelay: `${0.2 + index * 0.1}s`,
                animationFillMode: 'both',
              }}>
              <Card
                className="group flex flex-col h-full bg-background text-center"
              >
                <div 
                  className="icon-container" 
                >
                  <div className="relative w-full h-full">
                     <Image
                      src={imageUrl}
                      alt={sector.title}
                      fill
                      className="object-cover image-inner"
                     />
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="font-headline text-xl font-bold text-foreground">
                    {sector.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6 pt-0">
                  <p className="text-muted-foreground flex-grow mb-6 text-sm">
                    {sector.cardDescription}
                  </p>
                  <Button asChild variant="outline" className="mt-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <Link href={getLink(sector.id)}>
                      {t.hero.learn_more} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
