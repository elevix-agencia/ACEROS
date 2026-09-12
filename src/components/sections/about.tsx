'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DraftingCompass, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { siteExtras } from '@/lib/i18n/site-extras';

type AboutProps = {
  headingLevel?: 'h1' | 'h2';
};

export function About({ headingLevel = 'h2' }: AboutProps) {
  const { language, t } = useLanguage();
  const copy = siteExtras[language].about;
  const Heading = headingLevel;

  const pillars = [
    {
      icon: DraftingCompass,
      title: t.about.mission_title,
      description: t.about.mission_description,
    },
    {
      icon: ShieldCheck,
      title: t.about.vision_title,
      description: t.about.vision_description,
    },
  ];

  return (
    <div>
      <section
        id="sobre"
        className="container mx-auto px-4 pt-20 pb-14 sm:pt-28 sm:pb-16"
      >
        <div className="grid gap-12 md:gap-20 md:grid-cols-2 items-center">
          <div className="flex flex-col justify-center animate-slide-in-left">
            <Heading className="mb-6 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {t.about.title}
            </Heading>
            <p className="mb-6 text-lg text-muted-foreground">
              {t.about.paragraph1}
            </p>
            <p className="text-lg text-muted-foreground">
              {t.about.paragraph2}
            </p>
          </div>
          <div className="relative flex items-center justify-center h-[300px] sm:h-[500px] animate-slide-in-right">
            <Card className="overflow-hidden rounded-none border-0 shadow-2xl w-full h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/images/aceros/generated/historia-fabrica-v3.webp"
                  alt={copy.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07121e] via-[#07121e]/75 to-transparent p-6 pt-20 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{copy.production}</p>
                  <p className="mt-2 max-w-sm text-sm text-slate-200">{copy.productionDescription}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="about-pillars" className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div
            className="mx-auto max-w-4xl text-center animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            <h2 className="mb-10 font-headline text-3xl font-bold tracking-tight text-foreground sm:mb-12 sm:text-4xl">
              {t.about.pillars_title}
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Card
                key={pillar.title}
                className="group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up bg-secondary/30"
                style={{
                  animationDelay: `${0.4 + index * 0.2}s`,
                  animationFillMode: 'both',
                }}
              >
                <CardHeader className="p-6 text-center sm:p-8">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                    <pillar.icon className="h-10 w-10" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-foreground">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 text-center sm:p-8 sm:pt-0">
                  <p className="text-lg text-muted-foreground">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
