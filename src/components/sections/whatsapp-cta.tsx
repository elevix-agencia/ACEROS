'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { cn } from '@/lib/utils';

export function WhatsAppCta() {
  const { t } = useLanguage();

  const whatsappMessage = encodeURIComponent(t.whatsapp.message);
  const whatsappNumbers = ['551155556551', '551146442969', '551146442977'];

  return (
    <section
      className="py-20 sm:py-24 bg-accent text-accent-foreground"
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            'relative overflow-hidden text-center animate-fade-in-up'
          )}
        >
          {/* Efeitos de fundo minimalistas */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.1),rgba(255,255,255,0))]"
            aria-hidden="true"
          ></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
            aria-hidden="true"
          ></div>

          <div className="relative z-10">
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl drop-shadow-md">
              {t.whatsapp.title}
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-accent-foreground/90 drop-shadow-sm">
              {t.whatsapp.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              {whatsappNumbers.map((number, idx) => (
                <Button
                  key={number}
                  asChild
                  size="lg"
                  className="h-auto transform rounded-lg bg-green-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:bg-green-700 animate-pulse-slow"
                >
                  <Link href={`https://wa.me/${number}?text=${whatsappMessage}`} target="_blank">
                    <MessageCircle className="mr-3 h-6 w-6" />
                    {t.whatsapp.button} {idx + 1}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
