'use client';

import Image from 'next/image';

import { Card } from '@/components/ui/card';
import { Icon } from '@/components/icons';
import { useLanguage } from '@/hooks/use-language';
import { qualificationsData } from '@/lib/expertise-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Qualifications() {
  const { t } = useLanguage();
  const qualificationsHeroImage = PlaceHolderImages.find(
    image => image.id === 'qualifications-hero'
  );
  const labImage = PlaceHolderImages.find(
    image => image.id === 'metallurgy-lab'
  );

  return (
    <div>
      <section className="relative h-[60vh] min-h-[400px] w-full animate-fade-in">
        {qualificationsHeroImage && (
          <Image
            src={qualificationsHeroImage.imageUrl}
            alt={qualificationsHeroImage.description}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/15" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white">
          <div
            className="flex animate-fade-in-up flex-col items-center"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
              {t.qualifications.page_title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-200 md:text-xl">
              {t.qualifications.page_subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28" id="qualifications-details">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
            <div className="animate-slide-in-left">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Precisão documentada
              </p>
              <h2 className="mb-6 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t.qualifications.expertise_title}
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                {t.qualifications.expertise_paragraph1}
              </p>
              <p className="text-lg text-muted-foreground">
                {t.qualifications.expertise_paragraph2}
              </p>
            </div>
            {labImage && (
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl animate-slide-in-right">
                <Image
                  src={labImage.imageUrl}
                  alt={labImage.description}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualificationsData(t).map((qualification, index) => (
              <Card
                key={qualification.title}
                className="group flex flex-col border-white/40 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-in-up"
                style={{
                  animationDelay: `${0.2 + index * 0.1}s`,
                  animationFillMode: 'both',
                }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 transition-transform duration-300 group-hover:scale-110">
                  <Icon name={qualification.icon} className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-2 font-headline text-xl text-foreground">
                  {qualification.title}
                </h3>
                <p className="flex-grow text-sm leading-6 text-muted-foreground">
                  {qualification.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
