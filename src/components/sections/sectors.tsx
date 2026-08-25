'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { sectorsData } from '@/lib/expertise-data';

export function Sectors() {
  const { t } = useLanguage();

  if (!t || !t.expertise_sectors) return null;

  const sectors = sectorsData(t);

  const getLink = (id: string) => {
    if (id === 'engenharia') return '/engenharia';
    if (id === 'certificados') return '/qualificacao';
    return `/atuacao/${id}`;
  };

  const getImageUrl = (id: string) => {
    switch (id) {
      case 'mineracao':
        return '/images/aceros/drive/eixo-industrial.webp';
      case 'naval':
        return '/images/imgur/jNzhuvc.png';
      case 'siderurgia':
        return '/images/aceros/drive/tubos-polidos.webp';
      case 'oleo_e_gas':
        return '/images/aceros/drive/tubos-usinados.webp';
      case 'guseira':
        return '/images/aceros/drive/eixo-industrial.webp';
      case 'tratamento_termico':
        return '/images/aceros/drive/processo-termico.webp';
      case 'engenharia':
        return '/images/aceros/drive/tubos-polidos.webp';
      case 'certificados':
        return '/images/aceros/drive/tubos-usinados.webp';
      default:
        return '';
    }
  };

  return (
    <section id="sectors" className="bg-accent py-20 text-accent-foreground sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            {t.sectors.title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-accent-foreground/90 sm:text-xl">
            {t.sectors.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, index) => (
            <div
              key={sector.id}
              className="mercado-atuacao-card animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both' }}
            >
              <Card className="group flex h-full flex-col bg-background text-center">
                <div className="icon-container">
                  <div className="relative h-full w-full">
                    <Image
                      src={getImageUrl(sector.id)}
                      alt={sector.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="image-inner object-cover"
                    />
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="font-headline text-xl font-bold text-foreground">
                    {sector.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-grow flex-col p-6 pt-0">
                  <p className="mb-6 flex-grow text-sm text-muted-foreground">
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
          ))}
        </div>
      </div>
    </section>
  );
}
