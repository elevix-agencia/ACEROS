import type { Language } from '@/hooks/use-language';

type DetailCopy = {
  tunnelIntro: string;
  cooledTitle: string;
  cooledText: string;
  dryTitle: string;
  dryText: string;
  potTitle: string;
  potIntro: string;
  potItems: [string, string, string];
};

export const steelDetailCopy: Record<Language, DetailCopy> = {
  pt: {
    tunnelIntro: 'A Aceros fabrica rolos resfriados e não resfriados para fornos, conforme o desenho e as condições de operação do cliente.',
    cooledTitle: 'Rolos refrigerados',
    cooledText: 'Soluções para aplicações com aderência de carepa, com anéis produzidos por fundição centrífuga ou estática e isolamento térmico definido no projeto.',
    dryTitle: 'Rolos não refrigerados',
    dryText: 'Rolos produzidos em liga selecionada conforme a temperatura, a atmosfera e o regime de operação do forno.',
    potTitle: 'Linhas de galvanização por imersão a quente (pote)',
    potIntro: 'Componentes sob medida para conjuntos que trabalham em linhas de galvanização por imersão a quente.',
    potItems: ['Sink Rolls, braços, Snout, buchas de ponta e conjuntos montados conforme o projeto da linha.', 'Material selecionado conforme o banho, a temperatura, os esforços e o histórico de operação.', 'Centrifugação, usinagem e controle dimensional integrados ao fornecimento.'],
  },
  en: {
    tunnelIntro: 'Aceros manufactures cooled and uncooled furnace rolls to the customer’s drawing and operating conditions.',
    cooledTitle: 'Cooled rolls',
    cooledText: 'Solutions for scale pickup applications, with rings made by centrifugal or static casting and thermal insulation specified for the project.',
    dryTitle: 'Uncooled rolls',
    dryText: 'Rolls made from an alloy selected for the furnace temperature, atmosphere and operating conditions.',
    potTitle: 'Hot-dip galvanizing lines (zinc pot)',
    potIntro: 'Custom components for assemblies operating in hot-dip galvanizing lines.',
    potItems: ['Sink Rolls, arms, snouts, end bushings and assembled units to the line design.', 'Material selected for the bath, temperature, loads and operating history.', 'Centrifugal casting, machining and dimensional inspection integrated into the supply.'],
  },
  es: {
    tunnelIntro: 'Aceros fabrica rodillos refrigerados y no refrigerados para hornos según el plano y las condiciones de operación del cliente.',
    cooledTitle: 'Rodillos refrigerados',
    cooledText: 'Soluciones para aplicaciones con adherencia de cascarilla, con anillos de fundición centrífuga o estática y aislamiento térmico definido para el proyecto.',
    dryTitle: 'Rodillos no refrigerados',
    dryText: 'Rodillos fabricados con una aleación seleccionada según la temperatura, la atmósfera y las condiciones de operación del horno.',
    potTitle: 'Líneas de galvanizado por inmersión en caliente (baño)',
    potIntro: 'Componentes a medida para conjuntos que operan en líneas de galvanizado por inmersión en caliente.',
    potItems: ['Sink Rolls, brazos, snouts, bujes de extremo y conjuntos montados según el proyecto de la línea.', 'Material seleccionado según el baño, la temperatura, los esfuerzos y el historial de operación.', 'Fundición centrífuga, mecanizado y control dimensional integrados al suministro.'],
  },
  de: {
    tunnelIntro: 'Aceros fertigt gekühlte und ungekühlte Ofenrollen nach Zeichnung und Betriebsbedingungen des Kunden.',
    cooledTitle: 'Gekühlte Rollen',
    cooledText: 'Lösungen bei Zunderanhaftung mit zentrifugal oder statisch gegossenen Ringen und projektspezifischer Wärmedämmung.',
    dryTitle: 'Ungekühlte Rollen',
    dryText: 'Rollen aus einer Legierung, die nach Ofentemperatur, Atmosphäre und Betriebsbedingungen ausgewählt wird.',
    potTitle: 'Feuerverzinkungslinien (Zinkbad)',
    potIntro: 'Maßgefertigte Komponenten für Anlagen in Feuerverzinkungslinien.',
    potItems: ['Sink Rolls, Arme, Snouts, Endbuchsen und Baugruppen gemäß Anlagenzeichnung.', 'Werkstoffauswahl nach Bad, Temperatur, Belastung und Betriebshistorie.', 'Schleuderguss, Bearbeitung und Maßprüfung als Teil des Lieferumfangs.'],
  },
  it: {
    tunnelIntro: 'Aceros produce rulli per forni raffreddati e non raffreddati secondo il disegno e le condizioni operative del cliente.',
    cooledTitle: 'Rulli raffreddati',
    cooledText: 'Soluzioni per applicazioni con adesione di scaglie, con anelli ottenuti per colata centrifuga o statica e isolamento termico definito dal progetto.',
    dryTitle: 'Rulli non raffreddati',
    dryText: 'Rulli realizzati con una lega scelta in base alla temperatura, all’atmosfera e alle condizioni operative del forno.',
    potTitle: 'Linee di zincatura a caldo (vasca)',
    potIntro: 'Componenti su misura per gruppi impiegati nelle linee di zincatura a caldo.',
    potItems: ['Sink Rolls, bracci, snout, boccole terminali e gruppi assemblati secondo il progetto della linea.', 'Materiale scelto in base al bagno, alla temperatura, ai carichi e alla storia operativa.', 'Colata centrifuga, lavorazione meccanica e controllo dimensionale integrati nella fornitura.'],
  },
};
