'use client';

import { useLanguage } from '@/hooks/use-language';

export function LocationMap() {
  const { t } = useLanguage();

  return (
    <section
      id="location"
      className="bg-white py-16 sm:py-20"
    >
      <div>
        <div className="text-center animate-fade-in-up">
          <h2 className="mb-4 font-headline text-4xl font-bold tracking-tight text-[#07121e] sm:text-5xl">
            {t.location.title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground">
            {t.location.subtitle}
          </p>
        </div>

        <div className="mt-12 animate-zoom-in sm:mt-16">
          <div className="relative mx-auto aspect-video w-full max-w-6xl overflow-hidden border-t-4 border-[#ef7b21] shadow-[0_20px_50px_rgba(7,18,30,.16)]">
            <iframe
              src="https://www.google.com/maps?q=Rua+Hans+Oersted,+20-118,+Cidade+Moncoes,+Sao+Paulo,+SP,+04575-010&output=embed"
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
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Hans+Oersted%2C+20-118%2C+Cidade+Moncoes%2C+Sao+Paulo%2C+SP%2C+04575-010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-lg text-muted-foreground underline-offset-4 transition-colors hover:text-[#ef7b21] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef7b21]"
              aria-label="Abrir o endereço da Aceros no Google Maps"
            >
              {t.footer.address}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
