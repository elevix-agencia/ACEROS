
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { MessageCircle } from 'lucide-react';

export function TunnelFurnaceRollers() {
  const productImage = PlaceHolderImages.find(
    (img) => img.id === 'tunnel-furnace-roller'
  );

  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de um orçamento para os rolos para fornos.'
  );
  const whatsappNumber = '551155556551';

  return (
    <section
      className="py-20 sm:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-slide-in-right md:order-last">
            {productImage && (
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden rounded-2xl shadow-2xl group cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative w-full">
                        <Image
                          src={productImage.imageUrl}
                          alt={productImage.description}
                          width={1024}
                          height={768}
                          data-ai-hint={productImage.imageHint}
                          className="object-contain w-full h-auto transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-2 sm:p-4 bg-background border-accent/20">
                  <DialogHeader>
                    <DialogTitle className="text-foreground sr-only">
                      {productImage.description}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="relative aspect-video w-full mt-4">
                    <Image
                      src={productImage.imageUrl}
                      alt={productImage.description}
                      fill
                      data-ai-hint={productImage.imageHint}
                      className="object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
          <div className="animate-slide-in-left md:order-first">
            <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              ROLOS PARA FORNOS
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Rolos resfriados (cooled) e não resfriados (uncooled) fazem parte da produção padrão da ACEROS. Até o momento, mais de 800 rolos foram fornecidos a Clientes de alto potencial. Podemos fornecer tanto projetos próprios quanto projetos conforme o Cliente.
            </p>

            <div className="space-y-4 text-muted-foreground mb-10">
              <div>
                <h4 className="font-semibold text-lg text-foreground">
                  Soluções Especiais e Rolo Refrigerado
                </h4>
                <p>
                  Foram desenvolvidas soluções especiais para lidar com problemas de aderência de carepa (scale pick-up). O rolo molhado (wet roll) é equipado com anéis (rodas/ tyrerings - rodas metálicas) fabricados por processo centrífugo (anéis tri-metálicos) ou por fundição estática. O isolamento térmico aprimorado permite bom desempenho e perdas de calor limitadas. Os rolos resfriados garantem o trabalho por um período não inferior a 18 meses de serviço contínuo até uma temperatura de 1.300°C limite.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground">
                  Rolo Seco
                </h4>
                <p>
                  O rolo seco é fundido usando uma superliga que minimiza a aderência de carepa (scale pick-up) e suporta temperaturas mais elevadas, de até 1.280°C.
                </p>
              </div>
            </div>

            <div className="flex">
              <Button asChild size="lg">
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
