
'use client';

import Image from 'next/image';
import { PlaceHolderImages, ImagePlaceholder } from '@/lib/placeholder-images';
import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ArrowRight, CheckCircle, Search, MessageCircle } from 'lucide-react';


export function GuseiraStavesSection() {
  const { t } = useLanguage();

  const imageIds = [
    'guseira-stave-1', 'guseira-stave-2', 'guseira-stave-3',
    'guseira-stave-4', 'guseira-stave-5', 'guseira-stave-6', 'guseira-stave-7'
  ];

  const images = imageIds
    .map(id => PlaceHolderImages.find(img => img.id === id))
    .filter((img): img is ImagePlaceholder => !!img);
    
  const mainImage = images.find(img => img.id === 'guseira-stave-3');
  const otherImages = images.filter(img => img.id !== 'guseira-stave-3');


  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de mais informações sobre as Placas de Resfriamento (Staves).'
  );
  const whatsappNumber = '551155556551';
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const ImageCard = ({ image, className }: { image: ImagePlaceholder; className?: string }) => (
     <Dialog>
      <DialogTrigger asChild>
        <div className={cn("relative rounded-2xl shadow-lg overflow-hidden group cursor-pointer", className)}>
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className={cn(
                'object-cover transition-transform duration-500 group-hover:scale-110',
                image.id.includes('stave-1') || image.id.includes('stave-2') || image.id.includes('stave-4') || image.id.includes('stave-6') || image.id.includes('stave-7') ? 'object-contain p-2 bg-white' : ''
            )}
            data-ai-hint={image.imageHint}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Search className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-full h-[90vh] p-4 bg-background/90 backdrop-blur-sm border-accent/20 flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-foreground sr-only">{image.description}</DialogTitle>
        </DialogHeader>
        <div className="relative flex-grow w-full h-full my-4">
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            sizes="90vw"
            data-ai-hint={image.imageHint}
            className="object-contain rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <section className="relative py-20 sm:py-32 bg-secondary/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/10 to-background opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
            <motion.div 
                className="text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
            >
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                   Colunas de Reação Serpentinas Glendons
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                   {t.expertise_sectors.page.staves_description}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 h-[600px]">
                {/* Main Image */}
                {mainImage && (
                    <motion.div custom={0} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-3 md:row-span-2 h-full">
                        <ImageCard image={mainImage} className="w-full h-full" />
                    </motion.div>
                )}

                {/* Other Images */}
                {otherImages.slice(0, 2).map((image, i) => (
                    <motion.div custom={i + 1} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} key={image.id} className="md:col-span-2 h-full">
                        <ImageCard image={image} className="w-full h-full" />
                    </motion.div>
                ))}

                {otherImages.slice(2, 5).map((image, i) => (
                     <motion.div custom={i + 3} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} key={image.id} className="h-full">
                        <ImageCard image={image} className="w-full h-full" />
                    </motion.div>
                ))}
                 <motion.div custom={6} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-background/50 rounded-2xl p-8 flex flex-col justify-center items-center text-center h-full">
                    <h3 className="font-headline text-xl font-bold text-foreground mb-2">Pronto para Otimizar?</h3>
                    <p className="text-muted-foreground mb-4 text-xs">Fale com nossos especialistas.</p>
                    <div className="flex flex-col gap-2 w-full">
                      <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 text-xs">
                          <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank">
                              <MessageCircle className="mr-1 h-3 w-3" />
                              Solicitar Orçamento
                          </Link>
                      </Button>
                    </div>
                </motion.div>
                 {otherImages.slice(5).map((image, i) => (
                     <motion.div custom={i + 7} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} key={image.id} className="h-full">
                        <ImageCard image={image} className="w-full h-full" />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}


export function GuseiraTuyeresSection() {
    const { t } = useLanguage();

    const imageIds = [
        'guseira-tuyere-1', 'guseira-tuyere-2', 'guseira-tuyere-3', 
        'guseira-tuyere-4', 'guseira-tuyere-5', 'guseira-tuyere-6',
        'guseira-tuyere-7', 'guseira-tuyere-8'
    ];

    const images = imageIds
        .map(id => PlaceHolderImages.find(img => img.id === id))
        .filter((img): img is ImagePlaceholder => !!img);

    const whatsappMessage = encodeURIComponent('Olá! Gostaria de mais informações sobre as Válvulas de Sopro (Tuyeres).');
    const whatsappNumber = '551155556551';

    const mainImage = images[0];
    const sideImage1 = images[1];
    const sideImage2 = images[2];
    const gallery = images.slice(3);

    return (
        <section className="relative py-20 sm:py-32 bg-gray-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 via-transparent to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-accent mb-4 tracking-tight">
                        Colunas de Reação Serpentinas Glendons – Etapa 2
                    </h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        {t.expertise_sectors.page.tuyeres_description}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <motion.div 
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {mainImage && <ImageCard image={mainImage} className="aspect-video bg-white/5 p-4" />}
                        <div className="grid grid-cols-2 gap-8">
                            {sideImage1 && <ImageCard image={sideImage1} className="aspect-square" />}
                            {sideImage2 && <ImageCard image={sideImage2} className="aspect-square" />}
                        </div>
                    </motion.div>
                     <motion.div 
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="grid grid-cols-3 gap-4">
                            {gallery.map(img => (
                                <ImageCard key={img.id} image={img} className="aspect-square" />
                            ))}
                        </div>
                        <div className="bg-gray-800/50 rounded-2xl p-8 text-center border border-accent/20">
                            <h3 className="font-headline text-2xl font-bold text-white mb-3">Performance Incomparável</h3>
                            <p className="text-slate-300 mb-6">Nossas válvulas garantem a injeção precisa e eficiente, maximizando a produtividade do seu alto-forno.</p>
                            <div className="flex justify-center">
                              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                                  <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank">
                                      <MessageCircle className="mr-2 h-5 w-5" />
                                      Atendimento
                                  </Link>
                              </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const ImageCard = ({ image, className }: { image: ImagePlaceholder; className?: string }) => (
     <Dialog>
      <DialogTrigger asChild>
        <motion.div 
            className={cn("relative rounded-2xl shadow-lg overflow-hidden group cursor-pointer", className)}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={image.imageHint}
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Search className="h-8 w-8 text-white" />
            </div>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-full h-[90vh] p-4 bg-background/90 backdrop-blur-sm border-accent/20 flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-foreground sr-only">{image.description}</DialogTitle>
        </DialogHeader>
        <div className="relative flex-grow w-full h-full my-4">
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            sizes="90vw"
            data-ai-hint={image.imageHint}
            className="object-contain rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );

export function GuseiraHousingsSection() {
  const { t } = useLanguage();

  const drawingImage = PlaceHolderImages.find(img => img.id === 'guseira-housing-drawing');
  const photoImage = PlaceHolderImages.find(img => img.id === 'guseira-housing-photo');

  const whatsappMessage = encodeURIComponent('Olá! Gostaria de mais informações sobre Carcaças Usinadas.');
  const whatsappNumber = '551155556551';

  return (
    <section className="py-20 sm:py-32 bg-white text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            className="md:order-last"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {photoImage && (
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.div
                      className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image
                        src={photoImage.imageUrl}
                        alt={photoImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={photoImage.imageHint}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Search className="h-12 w-12 text-white" />
                      </div>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-4">
                    <div className="relative aspect-video w-full mt-4">
                      <Image src={photoImage.imageUrl} alt={photoImage.description} fill className="object-contain" />
                    </div>
                  </DialogContent>
                </Dialog>
              )}
              {drawingImage && (
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.div
                      className="absolute -bottom-8 -left-16 w-1/2 aspect-square rounded-2xl overflow-hidden shadow-xl cursor-pointer group border-4 border-white bg-gray-100 p-2"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                      <Image
                        src={drawingImage.imageUrl}
                        alt={drawingImage.description}
                        fill
                        className="object-contain"
                        data-ai-hint={drawingImage.imageHint}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Search className="h-8 w-8 text-white" />
                      </div>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-4">
                    <div className="relative aspect-video w-full mt-4">
                      <Image src={drawingImage.imageUrl} alt={drawingImage.description} fill className="object-contain" />
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                {t.expertise_sectors.page.housings_title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t.expertise_sectors.page.housings_description}
            </p>
            <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-semibold text-lg">Usinagem de Precisão</h4>
                        <p className="text-muted-foreground">Garantimos tolerâncias rigorosas e acabamento superior para um encaixe perfeito e performance otimizada.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-semibold text-lg">Materiais de Alta Resistência</h4>
                        <p className="text-muted-foreground">Utilizamos ligas especiais que oferecem máxima durabilidade e resistência à fadiga e ao impacto.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-semibold text-lg">Projetos Customizados</h4>
                        <p className="text-muted-foreground">Desenvolvemos carcaças sob medida para atender às especificações exclusivas de cada equipamento.</p>
                    </div>
                </div>
            </div>
            <div className="flex">
              <Button asChild size="lg" className="w-full sm:w-auto bg-orange-500 text-white hover:bg-orange-600">
                  <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function GuseiraWearPlatesSection() {
  const { t } = useLanguage();

  const photoImage = PlaceHolderImages.find(img => img.id === 'guseira-analise-quimica-1');
  const drawingImage = PlaceHolderImages.find(img => img.id === 'guseira-analise-quimica-2');
  
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de mais informações sobre a Análise Química Spectro.');
  const whatsappNumber = '551155556551';

  return (
    <section className="py-20 sm:py-32 bg-secondary/30 text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
           <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {photoImage && (
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.div
                      className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image
                        src={photoImage.imageUrl}
                        alt={photoImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={photoImage.imageHint}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Search className="h-12 w-12 text-white" />
                      </div>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-4">
                    <div className="relative aspect-video w-full mt-4">
                      <Image src={photoImage.imageUrl} alt={photoImage.description} fill className="object-contain" />
                    </div>
                  </DialogContent>
                </Dialog>
              )}
              {drawingImage && (
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.div
                      className="absolute -bottom-12 -right-12 w-1/2 aspect-square rounded-2xl overflow-hidden shadow-xl cursor-pointer group border-4 border-white bg-gray-100 p-2"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Image
                        src={drawingImage.imageUrl}
                        alt={drawingImage.description}
                        fill
                        className="object-contain"
                        data-ai-hint={drawingImage.imageHint}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Search className="h-8 w-8 text-white" />
                      </div>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-4">
                    <div className="relative aspect-video w-full mt-4">
                      <Image src={drawingImage.imageUrl} alt={drawingImage.description} fill className="object-contain" />
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Analise química Spectro
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              A análise química é realizada retirando corpos de prova durante a montagem da carga. São retiradas amostras, resfriadas e polidas para serem analisadas, onde o profissional Químico faz as correções necessárias com materiais Fe Cr, Fe Si, Fe W, Mo, Co entre outros necessários para cada liga, isto de acordo com informações dadas por normas e pelo Eng. Metalúrgico.
            </p>
            <div className="flex">
              <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Fale com um Especialista
                      <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function GuseiraStructuralComponentsSection() {
    const image = PlaceHolderImages.find(img => img.id === 'guseira-structural-component');
    const newImage = PlaceHolderImages.find(img => img.id === 'guseira-new-structural-component');
  
    return (
      <section className="relative py-20 sm:py-32 bg-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-gradient-to-br from-accent/10 via-transparent to-transparent rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-tl from-primary/10 via-transparent to-transparent rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
  
          <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
              <motion.h2 
                  className="font-headline text-4xl md:text-6xl font-bold text-white uppercase tracking-wider text-shadow-lg mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
              >
                  PROJETO COLUNAS DE REAÇÃO SERPENTINAS GLENDONS
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
                <motion.div 
                    className="relative w-full aspect-square"
                    initial={{ opacity: 0, scale: 0.8, x: -50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {image && (
                         <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-contain rounded-3xl shadow-2xl"
                            data-ai-hint={image.imageHint}
                        />
                    )}
                </motion.div>
                <motion.div 
                    className="relative w-full aspect-square"
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    {newImage && (
                         <Image
                            src={newImage.imageUrl}
                            alt={newImage.description}
                            fill
                            className="object-contain rounded-3xl shadow-2xl"
                            data-ai-hint={newImage.imageHint}
                        />
                    )}
                </motion.div>
              </div>
          </div>
      </section>
    );
  }

export function GuseiraMediaSection({ videoUrls, imageIds }: { videoUrls: string[], imageIds: string[] }) {
  const { t } = useLanguage();

  const images = imageIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter((img): img is ImagePlaceholder => !!img);

  const mediaItems = [
    ...videoUrls.map(url => ({ type: 'video', url, id: url })),
    ...images.map(img => ({ type: 'image', ...img }))
  ];

  if (mediaItems.length === 0) {
    return null;
  }

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Componentes Fundidos e Usinados em Ação
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Veja nossos processos de fabricação e a qualidade final das peças que produzimos para a indústria guseira.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto justify-center">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="p-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg border">
                {item.type === 'video' ? (
                  <iframe
                    src={item.url}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <Image
                    src={item.imageUrl}
                    alt={item.description}
                    fill
                    className="object-cover"
                    data-ai-hint={item.imageHint}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// Manter o componente original, mas não exportá-lo mais diretamente para a página
export function FeaturedProducts() {
  const { t } = useLanguage();

  return (
    <section>
        {/* Este componente pode ser mantido para uso futuro ou removido se não for mais necessário. */}
    </section>
  );
}
