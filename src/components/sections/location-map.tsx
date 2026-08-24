'use client';

import { useLanguage } from '@/hooks/use-language';

export function LocationMap() {
  const { t } = useLanguage();

  return (
    <section
      id="location"
      className="py-20 sm:py-32 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center animate-fade-in-up">
          <h2 className="mb-4 font-headline text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            {t.location.title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground">
            {t.location.subtitle}
          </p>
        </div>

        <div className="mt-12 sm:mt-20 animate-zoom-in">
          <div className="relative aspect-video w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border">
            <iframe
              src="https://www.google.com/maps?q=Rua+Alfa,+301,+Bairro+do+Una,+Itaquaquecetuba+SP,+08599-670&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t.location.map_title}
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <div
            className="text-center mt-6 animate-fade-in-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            <p className="text-muted-foreground text-lg">
              {t.footer.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
