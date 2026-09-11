'use client';
import { Hero } from '@/components/sections/hero';
import { LocationMap } from '@/components/sections/location-map';
import { About } from '@/components/sections/about';
import { WhatsAppCta } from '@/components/sections/whatsapp-cta';
import { MainGallery } from '@/components/sections/main-gallery';
import { Sectors } from '@/components/sections/sectors';
import { TrustSignals } from '@/components/sections/trust-signals';

// Clients e ClientLogos removidos: sugeriam relacao com clientes especificos
// que a Aceros nao autoriza divulgar (Petrobras, Vale, Gerdau, etc.).
// A prova social agora fica so em TrustSignals — capacidade, certificacoes
// e diferenciais, sem citar nomes de clientes.

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
      <LocationMap />

      <WhatsAppCta />
    </>
  );
}
