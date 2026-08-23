
'use client';
import { Hero } from '@/components/sections/hero';
import { QualityCta } from '@/components/sections/home-quality-cta';
import { LocationMap } from '@/components/sections/location-map';
import { About } from '@/components/sections/about';
import { Clients } from '@/components/sections/clients';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';
import { MainGallery } from '@/components/sections/main-gallery';
import { Sectors } from '@/components/sections/sectors';
import { ManufacturingHistory } from '@/components/sections/manufacturing-history';
import { ClientLogos } from '@/components/sections/client-logos';
import { TrustSignals } from '@/components/sections/trust-signals';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="pt-8 sm:pt-0">
        <About />
      </div>
      <TrustSignals />
      <Sectors />
      <MainGallery />
      <QualityCta />
      <Clients />
      <ManufacturingHistory />
      <ClientLogos />
      <LocationMap />
      
      {/* Seção de Redirecionamento para LPs */}
      <section className="py-12 bg-white border-t border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Button 
              asChild 
              size="lg" 
              className="track-home-to-lp bg-primary text-primary-foreground hover:bg-primary/90 font-headline font-bold text-lg md:text-xl px-10 py-8 h-auto rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <Link href="/bucha-de-aco-inox">
                Conheça nossa linha de Buchas de Aço Inox Sob Medida
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="track-home-to-lp-tubos bg-primary text-primary-foreground hover:bg-primary/90 font-headline font-bold text-lg md:text-xl px-10 py-8 h-auto rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <Link href="/tubos-de-aco-inox">
                Conheça nossa linha de Tubos de Aço Inox Sob Medida
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppCta />
    </>
  );
}
