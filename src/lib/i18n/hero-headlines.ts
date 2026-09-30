import type { Language } from '@/hooks/use-language';

type SlideText = { title: string; subtitle: string };

// Matches the home carousel order: Sink Roll, bushings, polished tubes.
export const heroHeadlines: Record<Language, [SlideText, SlideText, SlideText]> = {
  pt: [
    {
      title: 'Peças centrifugadas em aços inoxidáveis e superligas, conforme o projeto',
      subtitle: 'Tubos, buchas, Sink Rolls, rolos para fornos e outros componentes fabricados conforme desenho e condições de operação.',
    },
    {
      title: 'Tubos e buchas centrifugadas em aço inoxidável',
      subtitle: 'Buchas e componentes em ligas selecionadas para aplicações severas em siderurgia, mineração e grelhas para tratamento térmico.',
    },
    {
      title: 'Da fundição à usinagem: componentes industriais conforme o projeto',
      subtitle: 'Dimensões, liga e acabamento definidos de acordo com a aplicação industrial de cada cliente.',
    },
  ],
  en: [
    {
      title: 'Centrifugally cast parts in stainless steels and superalloys to project specifications',
      subtitle: 'Tubes, bushings, Sink Rolls, furnace rolls and other components made to drawings and operating conditions.',
    },
    {
      title: 'Centrifugally cast stainless steel tubes and bushings',
      subtitle: 'Bushings and components in selected alloys for demanding steel and mining applications, as well as heat-treatment grates.',
    },
    {
      title: 'From casting to machining: industrial components to project specifications',
      subtitle: 'Dimensions, alloy and finish defined for each customer’s industrial application.',
    },
  ],
  es: [
    {
      title: 'Piezas centrifugadas en aceros inoxidables y superaleaciones según proyecto',
      subtitle: 'Tubos, bujes, Sink Rolls, rodillos de horno y otros componentes fabricados según plano y condiciones de operación.',
    },
    {
      title: 'Tubos y bujes centrifugados de acero inoxidable',
      subtitle: 'Bujes y componentes en aleaciones seleccionadas para aplicaciones exigentes en siderurgia, minería y rejillas para tratamiento térmico.',
    },
    {
      title: 'De la fundición al mecanizado: componentes industriales según proyecto',
      subtitle: 'Dimensiones, aleación y acabado definidos para la aplicación industrial de cada cliente.',
    },
  ],
  de: [
    {
      title: 'Schleudergussteile aus Edelstahl und Superlegierungen nach Projektvorgabe',
      subtitle: 'Rohre, Buchsen, Sink Rolls, Ofenrollen und weitere Bauteile nach Zeichnung und Betriebsbedingungen.',
    },
    {
      title: 'Schleudergegossene Edelstahlrohre und Buchsen',
      subtitle: 'Buchsen und Bauteile aus ausgewählten Legierungen für anspruchsvolle Stahl- und Bergbauanwendungen sowie Roste zur Wärmebehandlung.',
    },
    {
      title: 'Vom Guss bis zur Bearbeitung: Industriebauteile nach Projektvorgabe',
      subtitle: 'Maße, Legierung und Oberfläche werden für die industrielle Anwendung des Kunden festgelegt.',
    },
  ],
  it: [
    {
      title: 'Pezzi centrifugati in acciai inox e superleghe secondo progetto',
      subtitle: 'Tubi, boccole, Sink Rolls, rulli per forni e altri componenti realizzati secondo disegno e condizioni operative.',
    },
    {
      title: 'Tubi e boccole centrifugati in acciaio inox',
      subtitle: 'Boccole e componenti in leghe selezionate per applicazioni impegnative in siderurgia, estrazione e griglie per trattamenti termici.',
    },
    {
      title: 'Dalla fusione alla lavorazione: componenti industriali secondo progetto',
      subtitle: 'Dimensioni, lega e finitura definite per l’applicazione industriale di ogni cliente.',
    },
  ],
};
