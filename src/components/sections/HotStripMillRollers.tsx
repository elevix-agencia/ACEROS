
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ShieldCheck, Layers, Award, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';

export function HotStripMillRollers() {
  const { t } = useLanguage();

  const productImage1 = PlaceHolderImages.find(
    img => img.id === 'hot-strip-mill-roller'
  );
  const productImage2 = PlaceHolderImages.find(
    img => img.id === 'hot-strip-mill-roller-2'
  );

  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de um orçamento para os Rolos para Laminador de Tiras a Quente.'
  );
  const whatsappNumber = '551155556551';

  return (
    <section
      className="relative py-20 sm:py-32 bg-accent text-accent-foreground overflow-hidden"
    >
      <div
        className="absolute inset-0 animate-gradient-move bg-gradient-to-br from-transparent via-white/10 to-transparent"
        style={{ backgroundSize: '200% 200%' }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-0 left-0 right-0 h-2/3 bg-repeat opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundPosition: 'top center',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col gap-8">
            {productImage1 && (
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative"
              >
                <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden bg-white group">
                  <Image
                    src={productImage1.imageUrl}
                    alt={productImage1.description}
                    width={500}
                    height={375}
                    data-ai-hint={productImage1.imageHint}
                    className="object-contain w-full h-auto p-4"
                  />
                </div>
              </motion.div>
            )}
            {productImage2 && (
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative"
              >
                <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden bg-white group">
                  <Image
                    src={productImage2.imageUrl}
                    alt={productImage2.description}
                    width={500}
                    height={375}
                    data-ai-hint={productImage2.imageHint}
                    className="object-contain w-full h-auto p-4"
                  />
                </div>
              </motion.div>
            )}
          </div>
          <div className="animate-slide-in-right">
            <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
              ROLOS PARA TRANSPORTE DE TIRAS A QUENTE (HSP)
            </h2>
            <p className="mb-8 text-lg text-accent-foreground/90">
              Nova geração de rolos para MESA DE TRANSFERÊNCIA, MESA DE SAÍDA, LOOPER, TENSION (tensão), PINCH (aperto) e WRAPPER (enrolador).
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 mt-1 items-center justify-center rounded-lg bg-accent-foreground/10 text-accent-foreground">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-accent-foreground">
                    Processo Bi-metálico
                  </h4>
                  <p className="text-accent-foreground/80">
                    Microestrutura de aço inoxidável martensítico e ferrítico com camada externa dura e interna com menor dureza e resistente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 mt-1 items-center justify-center rounded-lg bg-accent-foreground/10 text-accent-foreground">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-accent-foreground">
                    Garantia de Performance
                  </h4>
                  <p className="text-accent-foreground/80">
                    Redução máxima de runout de 0,5 mm (mono-metálica) ou 0,3 mm (bi-metálica) por milhão de tonelada processada.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 mt-1 items-center justify-center rounded-lg bg-accent-foreground/10 text-accent-foreground">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-accent-foreground">
                    Aplicações Críticas
                  </h4>
                  <p className="text-accent-foreground/80">
                    Para rolos (pinch rollers), utilizamos uma mesa bi-metálica centrifugada para garantir o melhor desempenho.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex">
              <Button
                asChild
                size="lg"
                className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 transition-transform hover:scale-105"
              >
                <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar Orçamento
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
