'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Icon } from '@/components/icons';
import { useLanguage } from '@/hooks/use-language';

const qualityCtaImage = PlaceHolderImages.find(
  img => img.id === 'quality-cta-image'
);

export function QualityCta() {
  const { t } = useLanguage();

  const qualities = [
    {
      icon: 'Microscope' as const,
      title: t.quality?.analysis_title || 'Pesquisa e Análise',
      description: t.quality?.analysis_description || 'Análises de corrosão, análise química, ultrassom, dureza e ensaios mecânicos.',
    },
    {
      icon: 'ShieldCheck' as const,
      title: t.quality?.improvement_title || 'Melhoria Contínua',
      description: t.quality?.improvement_description || 'Estudo de melhorias no projeto e na metalurgia de peças fundidas e ligas especiais.',
    },
    {
      icon: 'Award' as const,
      title: t.quality?.resistance_title || 'Resistência Superior',
      description: t.quality?.resistance_description || 'Desenvolvimento de ligas resistentes ao calor, abrasão e corrosão para máxima performance.',
    },
  ];

  return (
    <section
      className="bg-accent text-accent-foreground py-20 sm:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 sm:gap-24 items-center">
          <div className="flex flex-col animate-fade-in-up md:animate-slide-in-right">
            <h2 className="mb-4 font-headline text-4xl sm:text-5xl font-bold tracking-tight text-accent-foreground">
              {t.quality?.title || 'Laboratórios e Qualidade'}
            </h2>
            <p className="mb-10 text-lg text-accent-foreground/90">
              {t.quality?.subtitle || 'Nossos laboratórios realizam pesquisas em análises de corrosão, análise química, ultrassom, dureza e ensaios mecânicos, permitindo que a Aceros possa estudar melhorias no projeto ou na metalurgia de peças fundidas, resistentes ao calor, abrasão e ligas especiais.'}
            </p>
            <div className="space-y-8 mb-10">
              {qualities.map((quality, index) => (
                <div
                  key={quality.title}
                  className="group flex items-start gap-5 p-2 rounded-2xl animate-fade-in-up"
                  style={{
                    animationDelay: `${0.2 + index * 0.2}s`,
                    animationFillMode: 'both',
                  }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background/20 text-accent-foreground flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-110">
                    <Icon name={quality.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-accent-foreground">
                      {quality.title}
                    </h3>
                    <p className="text-accent-foreground/90 text-sm">
                      {quality.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-accent-foreground border-accent-foreground text-accent hover:bg-accent-foreground/90 hover:text-accent transition-transform duration-300 hover:scale-110"
              >
                <Link href="/qualificacao">
                  {t.quality?.cta_button || 'Conheça Nossas Qualificações'}
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-[400px] sm:h-[500px] w-full animate-fade-in-up md:animate-slide-in-left order-first md:order-last">
            {qualityCtaImage && (
              <div className="w-full h-full overflow-hidden rounded-3xl shadow-2xl relative">
                <Image
                  src={qualityCtaImage.imageUrl}
                  alt={qualityCtaImage.description}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={qualityCtaImage.imageHint}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
