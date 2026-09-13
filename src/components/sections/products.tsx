'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cog, Layers, PenTool, Rocket } from 'lucide-react';
import { useLanguage, type Language } from '@/hooks/use-language';

type LandingCopy = {
  titulo: string;
  descricao: string;
  imagemAlt: string;
  bullets: string[];
};

type CatalogoCopy = { titulo: string; descricao: string; aplicacao: string };

type Copy = {
  eyebrow: string;
  title: string;
  lead: string;
  highlightsBadge: string;
  highlightsTitle: string;
  seeFullLine: string;
  catalogBadge: string;
  catalogTitle: string;
  catalogLead: string;
  ctaBadge: string;
  ctaTitle: string;
  ctaLead: string;
  ctaButton: string;
  landings: LandingCopy[];
  catalogo: CatalogoCopy[];
};

const landingsMeta = [
  { id: 'tubos', imagem: '/images/aceros/tubos/tubo-aco-inox-polido-aceros-12.jpg', href: '/tubos-de-aco-inox', icone: Layers },
  { id: 'buchas', imagem: '/images/aceros/buchas/bucha-aco-inox-aceros-06.jpg', href: '/bucha-de-aco-inox', icone: Cog },
  { id: 'rolos-forno', imagem: '/images/imgur/gbNL57g.png', href: '/rolos-de-forno', icone: Cog },
  { id: 'sink-rolls', imagem: '/images/imgur/KZhCZ6S.png', href: '/sink-rolls', icone: Layers },
  { id: 'fundicao-centrifugada', imagem: '/images/aceros/tubos/tubo-aco-inox-bruto-aceros-01.jpg', href: '/fundicao-centrifugada', icone: PenTool },
];

const dict: Record<Language, Copy> = {
  pt: {
    eyebrow: 'O que fabricamos',
    title: 'Peças centrifugadas em aço inoxidável, sob medida',
    lead: 'Não vendemos commodities de prateleira. Fabricamos componentes de alta liga para plantas industriais que operam nos limites de calor, abrasão e corrosão.',
    highlightsBadge: 'Linhas de destaque', highlightsTitle: 'Nossos carros-chefe',
    seeFullLine: 'Ver linha completa',
    catalogBadge: 'Catálogo completo', catalogTitle: 'Além dos tubos e buchas, também fabricamos',
    catalogLead: 'Portfólio completo de peças centrifugadas para siderurgia, mineração, tratamento térmico, naval e guseira.',
    ctaBadge: 'Projeto sob desenho', ctaTitle: 'Precisa de uma peça que não está no catálogo?',
    ctaLead: 'Fabricamos 100% sob desenho técnico. Nossa engenharia analisa o projeto, especifica a liga adequada (ASTM A297) e retorna uma proposta comercial.',
    ctaButton: 'Enviar meu desenho técnico',
    landings: [
      { titulo: 'Tubos Centrifugados', descricao: 'Tubos mecânicos fabricados por centrifugação em ligas selecionadas conforme a aplicação. Dimensões e acabamento definidos pelo desenho técnico.', imagemAlt: 'Tubos de aço inox centrifugados, usinados e polidos, fabricação Aceros', bullets: ['Estágios: bruto, usinado (munhão), polido, misto', 'Diâmetros, espessuras e comprimentos sob medida', 'Aplicações: fornos, sink rolls, tubos radiantes'] },
      { titulo: 'Buchas de Aço Inox', descricao: 'Buchas centrifugadas em ligas de alta dureza para aplicações industriais severas. Especialistas em buchas para ponta de Sink Roll (linhas de galvanização) e Furnace Roll (rolos de forno).', imagemAlt: 'Buchas de aço inox usinadas sob medida, fabricação Aceros', bullets: ['Usinagem conforme tolerâncias do desenho', 'Material selecionado para a condição de serviço', 'Aplicações: Sink Roll e rolos de forno'] },
      { titulo: 'Rolos de Forno', descricao: 'Furnace rolls centrifugados para fornos contínuos, linhas CAPL/CGL e tratamento térmico, em versões resfriadas ou não resfriadas.', imagemAlt: 'Rolo industrial para forno túnel CSP', bullets: ['Ligas ASTM A297 resistentes a altas temperaturas', 'Opções revestidas e não revestidas', 'Projeto conforme forno e condição de operação'] },
      { titulo: 'Sink Rolls', descricao: 'Rolos de imersão e componentes para linhas de galvanização a quente, incluindo braços, snout, buchas de ponta e conjuntos montados.', imagemAlt: 'Sink roll para galvanização por imersão a quente', bullets: ['Resistência ao contato com zinco fundido', 'Controle dimensional das pontas e buchas', 'Conjuntos fabricados conforme desenho'] },
      { titulo: 'Fundição Centrifugada', descricao: 'Tubos mecânicos, buchas e componentes cilíndricos em ligas especiais, do bruto de fundição à peça usinada e acabada.', imagemAlt: 'Tubos brutos produzidos por fundição centrifugada', bullets: ['Peças cilíndricas em ligas especiais', 'Bruto, pré-usinado ou pronto para montagem', 'Dimensões e liga conforme projeto técnico'] },
    ],
    catalogo: [
      { titulo: 'Sink Rolls', descricao: 'Rolos centrifugados para linhas de galvanização a quente (potes de zinco).', aplicacao: 'Siderurgia · Galvanização' },
      { titulo: 'Snout (Pote de Zincagem)', descricao: 'Componente estrutural para linhas de imersão em zinco fundido.', aplicacao: 'Siderurgia · Galvanização' },
      { titulo: 'Braços de Sink Roll', descricao: 'Braços de sustentação para conjuntos de Sink Roll em galvanização.', aplicacao: 'Siderurgia · Galvanização' },
      { titulo: 'Rolos para Fornos de Galvanização', descricao: 'Rolos centrifugados com e sem perfil para linhas de galvanização.', aplicacao: 'Siderurgia · Tratamento Térmico' },
      { titulo: 'Rolos para Zincagem', descricao: 'Rolos desenvolvidos conforme a condição de operação em contato com zinco fundido.', aplicacao: 'Siderurgia · Galvanização' },
      { titulo: 'Tubos Radiantes', descricao: 'Tubos radiantes para fornos de tratamento térmico contínuo.', aplicacao: 'Tratamento Térmico' },
      { titulo: 'Serpentinas de Alta Temperatura', descricao: 'Serpentinas fundidas para aplicações em siderurgia primária.', aplicacao: 'Siderurgia' },
      { titulo: 'Espulas Refratárias', descricao: 'Espulas em ligas resistentes ao calor para linhas siderúrgicas.', aplicacao: 'Siderurgia' },
      { titulo: 'Garrafas para Mini Alto-Fornos', descricao: 'Componentes fundidos para pequenos e médios altos-fornos.', aplicacao: 'Guseira · Siderurgia' },
      { titulo: 'Grelhas Industriais', descricao: 'Grelhas centrifugadas para linhas de sinterização e classificação.', aplicacao: 'Mineração · Siderurgia' },
      { titulo: 'Esticadores de Corrente', descricao: 'Componentes de precisão para transporte de material em plantas siderúrgicas.', aplicacao: 'Siderurgia · Manuseio' },
      { titulo: 'Rolos Laminadores', descricao: 'Rolos para linhas de laminação a quente, projetados sob especificação.', aplicacao: 'Siderurgia · Laminação' },
      { titulo: 'Rolos para Classificação de Minério', descricao: 'Rolos para peneiras de classificação de pellets e minério.', aplicacao: 'Mineração' },
      { titulo: 'Cilindros Inox + Tungstênio', descricao: 'Cilindros com adição de tungstênio para aplicações sujeitas a abrasão severa.', aplicacao: 'Mineração' },
    ],
  },
  en: {
    eyebrow: 'What we make',
    title: 'Custom centrifugally cast stainless steel parts',
    lead: 'We do not sell off-the-shelf commodities. We manufacture high-alloy components for industrial plants operating at the limits of heat, abrasion and corrosion.',
    highlightsBadge: 'Featured lines', highlightsTitle: 'Our flagship products',
    seeFullLine: 'See full line',
    catalogBadge: 'Full catalogue', catalogTitle: 'Beyond tubes and bushings, we also produce',
    catalogLead: 'Full portfolio of centrifugally cast parts for steelmaking, mining, heat treatment, naval and pig-iron plants.',
    ctaBadge: 'Custom drawing', ctaTitle: 'Need a part that is not in the catalogue?',
    ctaLead: 'We manufacture 100% from technical drawings. Our engineering team reviews the project, specifies the right alloy (ASTM A297) and returns a commercial proposal.',
    ctaButton: 'Send my technical drawing',
    landings: [
      { titulo: 'Centrifugally Cast Tubes', descricao: 'Mechanical tubes centrifugally cast in alloys selected for the application. Dimensions and finish defined by the technical drawing.', imagemAlt: 'Aceros centrifugally cast, machined and polished stainless steel tubes', bullets: ['Stages: rough, machined (trunnion), polished, mixed', 'Custom diameters, wall thickness and length', 'Applications: furnaces, sink rolls, radiant tubes'] },
      { titulo: 'Stainless Steel Bushings', descricao: 'Centrifugally cast bushings in high-hardness alloys for severe industrial applications. Specialists in Sink Roll end bushings (galvanising lines) and Furnace Roll bushings.', imagemAlt: 'Aceros custom-machined stainless steel bushings', bullets: ['Machining to drawing tolerances', 'Material selected for service conditions', 'Applications: Sink Roll and furnace rolls'] },
      { titulo: 'Furnace Rolls', descricao: 'Centrifugally cast furnace rolls for continuous furnaces, CAPL/CGL lines and heat treatment, in water-cooled or non-cooled versions.', imagemAlt: 'Industrial roll for CSP tunnel furnace', bullets: ['ASTM A297 alloys resistant to high temperatures', 'Coated and non-coated options', 'Design according to furnace and operating condition'] },
      { titulo: 'Sink Rolls', descricao: 'Immersion rolls and components for hot-dip galvanising lines, including arms, snout, end bushings and full assemblies.', imagemAlt: 'Sink roll for hot-dip galvanising', bullets: ['Resistance to molten zinc contact', 'Dimensional control of ends and bushings', 'Assemblies produced from the customer\'s drawing'] },
      { titulo: 'Centrifugal Casting', descricao: 'Mechanical tubes, bushings and cylindrical components in special alloys, from rough cast to finished machined part.', imagemAlt: 'Rough tubes produced by centrifugal casting', bullets: ['Cylindrical parts in special alloys', 'Rough, pre-machined or assembly-ready', 'Dimensions and alloy per technical project'] },
    ],
    catalogo: [
      { titulo: 'Sink Rolls', descricao: 'Centrifugally cast rolls for hot-dip galvanising lines (zinc pots).', aplicacao: 'Steelmaking · Galvanising' },
      { titulo: 'Snout (Zinc Pot)', descricao: 'Structural component for hot-dip zinc immersion lines.', aplicacao: 'Steelmaking · Galvanising' },
      { titulo: 'Sink Roll Arms', descricao: 'Support arms for Sink Roll assemblies in galvanising.', aplicacao: 'Steelmaking · Galvanising' },
      { titulo: 'Rolls for Galvanising Furnaces', descricao: 'Centrifugally cast rolls with or without profile for galvanising lines.', aplicacao: 'Steelmaking · Heat treatment' },
      { titulo: 'Rolls for Zinc Coating', descricao: 'Rolls designed to operate in contact with molten zinc.', aplicacao: 'Steelmaking · Galvanising' },
      { titulo: 'Radiant Tubes', descricao: 'Radiant tubes for continuous heat-treatment furnaces.', aplicacao: 'Heat treatment' },
      { titulo: 'High-Temperature Coils', descricao: 'Cast coils for primary steelmaking applications.', aplicacao: 'Steelmaking' },
      { titulo: 'Refractory Spools', descricao: 'Spools in heat-resistant alloys for steelmaking lines.', aplicacao: 'Steelmaking' },
      { titulo: 'Bottles for Mini Blast Furnaces', descricao: 'Cast components for small and medium blast furnaces.', aplicacao: 'Pig iron · Steelmaking' },
      { titulo: 'Industrial Grates', descricao: 'Centrifugally cast grates for sintering and classification lines.', aplicacao: 'Mining · Steelmaking' },
      { titulo: 'Chain Stretchers', descricao: 'Precision components for material handling in steelmaking plants.', aplicacao: 'Steelmaking · Handling' },
      { titulo: 'Rolling Mill Rolls', descricao: 'Rolls for hot rolling lines, engineered to specification.', aplicacao: 'Steelmaking · Rolling' },
      { titulo: 'Rolls for Ore Classification', descricao: 'Rolls for pellet and ore classification screens.', aplicacao: 'Mining' },
      { titulo: 'Stainless + Tungsten Cylinders', descricao: 'Cylinders with tungsten addition for applications under severe abrasion.', aplicacao: 'Mining' },
    ],
  },
  es: {
    eyebrow: 'Lo que fabricamos',
    title: 'Piezas centrifugadas en acero inoxidable, a medida',
    lead: 'No vendemos commodities de estantería. Fabricamos componentes de alta aleación para plantas industriales que operan en los límites de calor, abrasión y corrosión.',
    highlightsBadge: 'Líneas destacadas', highlightsTitle: 'Nuestros productos estrella',
    seeFullLine: 'Ver línea completa',
    catalogBadge: 'Catálogo completo', catalogTitle: 'Además de los tubos y bujes, también fabricamos',
    catalogLead: 'Portafolio completo de piezas centrifugadas para siderurgia, minería, tratamiento térmico, naval y arrabio.',
    ctaBadge: 'Proyecto a medida', ctaTitle: '¿Necesita una pieza que no está en el catálogo?',
    ctaLead: 'Fabricamos 100% a partir del plano técnico. Nuestra ingeniería analiza el proyecto, especifica la aleación adecuada (ASTM A297) y entrega una propuesta comercial.',
    ctaButton: 'Enviar mi plano técnico',
    landings: [
      { titulo: 'Tubos Centrifugados', descricao: 'Tubos mecánicos fabricados por centrifugación en aleaciones seleccionadas para la aplicación. Dimensiones y acabado según plano técnico.', imagemAlt: 'Tubos de acero inoxidable centrifugados, mecanizados y pulidos, fabricación Aceros', bullets: ['Etapas: bruto, mecanizado (muñón), pulido, mixto', 'Diámetros, espesores y longitudes a medida', 'Aplicaciones: hornos, sink rolls, tubos radiantes'] },
      { titulo: 'Bujes de Acero Inoxidable', descricao: 'Bujes centrifugados en aleaciones de alta dureza para aplicaciones industriales severas. Especialistas en bujes de punta para Sink Roll y Furnace Roll.', imagemAlt: 'Bujes de acero inoxidable mecanizados a medida, fabricación Aceros', bullets: ['Mecanizado según tolerancias del plano', 'Material seleccionado para la condición de servicio', 'Aplicaciones: Sink Roll y rodillos de horno'] },
      { titulo: 'Rodillos de Horno', descricao: 'Furnace rolls centrifugados para hornos continuos, líneas CAPL/CGL y tratamiento térmico, en versiones refrigeradas o no refrigeradas.', imagemAlt: 'Rodillo industrial para horno túnel CSP', bullets: ['Aleaciones ASTM A297 resistentes a altas temperaturas', 'Opciones con y sin recubrimiento', 'Proyecto según horno y condición de operación'] },
      { titulo: 'Sink Rolls', descricao: 'Rodillos de inmersión y componentes para líneas de galvanizado en caliente: brazos, snout, bujes de punta y conjuntos montados.', imagemAlt: 'Sink roll para galvanizado por inmersión en caliente', bullets: ['Resistencia al contacto con zinc fundido', 'Control dimensional de puntas y bujes', 'Conjuntos fabricados según plano'] },
      { titulo: 'Fundición Centrifugada', descricao: 'Tubos mecánicos, bujes y componentes cilíndricos en aleaciones especiales, del bruto a la pieza mecanizada y acabada.', imagemAlt: 'Tubos brutos producidos por fundición centrifugada', bullets: ['Piezas cilíndricas en aleaciones especiales', 'Bruto, pre-mecanizado o listo para montaje', 'Dimensiones y aleación según proyecto técnico'] },
    ],
    catalogo: [
      { titulo: 'Sink Rolls', descricao: 'Rodillos centrifugados para líneas de galvanizado en caliente (potes de zinc).', aplicacao: 'Siderurgia · Galvanizado' },
      { titulo: 'Snout (Pote de zincado)', descricao: 'Componente estructural para líneas de inmersión en zinc fundido.', aplicacao: 'Siderurgia · Galvanizado' },
      { titulo: 'Brazos de Sink Roll', descricao: 'Brazos de sujeción para conjuntos de Sink Roll en galvanizado.', aplicacao: 'Siderurgia · Galvanizado' },
      { titulo: 'Rodillos para Hornos de Galvanizado', descricao: 'Rodillos centrifugados con o sin perfil para líneas de galvanizado.', aplicacao: 'Siderurgia · Tratamiento térmico' },
      { titulo: 'Rodillos para Zincado', descricao: 'Rodillos desarrollados para operar en contacto con zinc fundido.', aplicacao: 'Siderurgia · Galvanizado' },
      { titulo: 'Tubos Radiantes', descricao: 'Tubos radiantes para hornos de tratamiento térmico continuo.', aplicacao: 'Tratamiento térmico' },
      { titulo: 'Serpentines de Alta Temperatura', descricao: 'Serpentines fundidos para aplicaciones en siderurgia primaria.', aplicacao: 'Siderurgia' },
      { titulo: 'Espulas Refractarias', descricao: 'Espulas en aleaciones resistentes al calor para líneas siderúrgicas.', aplicacao: 'Siderurgia' },
      { titulo: 'Botellas para Mini Altos Hornos', descricao: 'Componentes fundidos para altos hornos pequeños y medianos.', aplicacao: 'Arrabio · Siderurgia' },
      { titulo: 'Rejillas Industriales', descricao: 'Rejillas centrifugadas para líneas de sinterización y clasificación.', aplicacao: 'Minería · Siderurgia' },
      { titulo: 'Tensores de Cadena', descricao: 'Componentes de precisión para transporte de material en plantas siderúrgicas.', aplicacao: 'Siderurgia · Manejo' },
      { titulo: 'Rodillos Laminadores', descricao: 'Rodillos para líneas de laminación en caliente, diseñados según especificación.', aplicacao: 'Siderurgia · Laminación' },
      { titulo: 'Rodillos para Clasificación de Mineral', descricao: 'Rodillos para tamices de clasificación de pellets y mineral.', aplicacao: 'Minería' },
      { titulo: 'Cilindros Inox + Tungsteno', descricao: 'Cilindros con adición de tungsteno para aplicaciones con abrasión severa.', aplicacao: 'Minería' },
    ],
  },
  de: {
    eyebrow: 'Was wir fertigen',
    title: 'Maßgeschneiderte Edelstahl-Schleudergussteile',
    lead: 'Wir verkaufen keine Standardware. Wir fertigen Bauteile aus hochlegierten Werkstoffen für Industrieanlagen, die an den Grenzen von Hitze, Verschleiß und Korrosion arbeiten.',
    highlightsBadge: 'Wichtige Produktlinien', highlightsTitle: 'Unsere Aushängeschilder',
    seeFullLine: 'Zur kompletten Linie',
    catalogBadge: 'Vollständiger Katalog', catalogTitle: 'Neben Rohren und Buchsen fertigen wir auch',
    catalogLead: 'Komplettes Portfolio an Schleudergussteilen für Stahlwerk, Bergbau, Wärmebehandlung, Marine und Roheisen.',
    ctaBadge: 'Projekt nach Zeichnung', ctaTitle: 'Benötigen Sie ein Bauteil, das nicht im Katalog steht?',
    ctaLead: 'Wir fertigen zu 100 % nach technischer Zeichnung. Unsere Konstruktion prüft das Projekt, spezifiziert die passende Legierung (ASTM A297) und liefert ein Angebot.',
    ctaButton: 'Zeichnung senden',
    landings: [
      { titulo: 'Schleudergegossene Rohre', descricao: 'Mechanische Rohre im Schleuderguss aus für die Anwendung ausgewählten Legierungen. Abmessungen und Ausführung nach technischer Zeichnung.', imagemAlt: 'Von Aceros schleudergegossene, bearbeitete und polierte Edelstahlrohre', bullets: ['Ausführungen: Rohguss, bearbeitet (Zapfen), poliert, gemischt', 'Durchmesser, Wandstärken und Längen nach Maß', 'Anwendungen: Öfen, Sink Rolls, Strahlrohre'] },
      { titulo: 'Edelstahl-Buchsen', descricao: 'Schleudergegossene Buchsen aus hochharten Legierungen für schwere industrielle Einsätze. Spezialist für Sink-Roll- und Furnace-Roll-Endbuchsen.', imagemAlt: 'Nach Maß gefertigte Edelstahlbuchsen von Aceros', bullets: ['Bearbeitung nach Zeichnungstoleranzen', 'Werkstoff auf Einsatzbedingungen abgestimmt', 'Einsätze: Sink Roll und Ofenrollen'] },
      { titulo: 'Ofenrollen', descricao: 'Schleudergegossene Furnace Rolls für Durchlauföfen, CAPL/CGL-Linien und Wärmebehandlung, mit oder ohne Kühlung.', imagemAlt: 'Industrierolle für CSP-Tunnelofen', bullets: ['ASTM A297-Legierungen für Hochtemperatur-Einsatz', 'Beschichtete und unbeschichtete Ausführungen', 'Auslegung nach Ofen und Betriebsbedingung'] },
      { titulo: 'Sink Rolls', descricao: 'Tauchrollen und Komponenten für Feuerverzinkungslinien: Arme, Snout, Endbuchsen und komplette Baugruppen.', imagemAlt: 'Sink Roll für Feuerverzinkung', bullets: ['Beständig gegen Kontakt mit flüssigem Zink', 'Maßhaltige Enden und Buchsen', 'Baugruppen nach Kundenzeichnung'] },
      { titulo: 'Schleuderguss', descricao: 'Mechanische Rohre, Buchsen und zylindrische Bauteile aus Spezialwerkstoffen, vom Rohguss bis zum fertig bearbeiteten Bauteil.', imagemAlt: 'Rohgussrohre aus Schleuderguss', bullets: ['Zylindrische Teile aus Speziallegierungen', 'Rohguss, vorbearbeitet oder montagefertig', 'Abmessungen und Legierung nach technischem Projekt'] },
    ],
    catalogo: [
      { titulo: 'Sink Rolls', descricao: 'Schleudergegossene Rollen für Feuerverzinkungslinien (Zinktöpfe).', aplicacao: 'Stahl · Verzinkung' },
      { titulo: 'Snout (Zinktopf)', descricao: 'Strukturbauteil für Zinkbadlinien.', aplicacao: 'Stahl · Verzinkung' },
      { titulo: 'Sink-Roll-Arme', descricao: 'Trägerarme für Sink-Roll-Baugruppen in der Verzinkung.', aplicacao: 'Stahl · Verzinkung' },
      { titulo: 'Rollen für Verzinkungsöfen', descricao: 'Schleudergegossene Rollen mit oder ohne Profil für Verzinkungslinien.', aplicacao: 'Stahl · Wärmebehandlung' },
      { titulo: 'Rollen für Zinkbäder', descricao: 'Rollen für den Kontakt mit flüssigem Zink ausgelegt.', aplicacao: 'Stahl · Verzinkung' },
      { titulo: 'Strahlrohre', descricao: 'Strahlrohre für kontinuierliche Wärmebehandlungsöfen.', aplicacao: 'Wärmebehandlung' },
      { titulo: 'Hochtemperatur-Rohrspulen', descricao: 'Gegossene Rohrspulen für die Primärstahlerzeugung.', aplicacao: 'Stahl' },
      { titulo: 'Feuerfeste Spulen', descricao: 'Spulen aus hitzebeständigen Legierungen für Stahllinien.', aplicacao: 'Stahl' },
      { titulo: 'Flaschen für Mini-Hochöfen', descricao: 'Gegossene Bauteile für kleine und mittlere Hochöfen.', aplicacao: 'Roheisen · Stahl' },
      { titulo: 'Industrieroste', descricao: 'Schleudergegossene Roste für Sinter- und Klassieranlagen.', aplicacao: 'Bergbau · Stahl' },
      { titulo: 'Kettenspanner', descricao: 'Präzisionsteile für Materialtransport in Stahlwerken.', aplicacao: 'Stahl · Handling' },
      { titulo: 'Walzwerkrollen', descricao: 'Rollen für Warmwalzlinien, konstruiert nach Vorgabe.', aplicacao: 'Stahl · Walzwerk' },
      { titulo: 'Rollen für Erzklassierung', descricao: 'Rollen für Pellet- und Erzsiebe.', aplicacao: 'Bergbau' },
      { titulo: 'Zylinder Edelstahl + Wolfram', descricao: 'Zylinder mit Wolframzusatz für Einsätze mit starkem Verschleiß.', aplicacao: 'Bergbau' },
    ],
  },
  it: {
    eyebrow: 'Cosa produciamo',
    title: 'Pezzi centrifugati in acciaio inossidabile, su misura',
    lead: 'Non vendiamo commodity da scaffale. Realizziamo componenti in leghe alte per impianti industriali che operano ai limiti di calore, abrasione e corrosione.',
    highlightsBadge: 'Linee in evidenza', highlightsTitle: 'I nostri prodotti di punta',
    seeFullLine: 'Vedi linea completa',
    catalogBadge: 'Catalogo completo', catalogTitle: 'Oltre a tubi e boccole, produciamo anche',
    catalogLead: 'Portafoglio completo di pezzi centrifugati per siderurgia, mineraria, trattamento termico, navale e ghisa.',
    ctaBadge: 'Progetto su disegno', ctaTitle: 'Serve un pezzo che non è in catalogo?',
    ctaLead: 'Produciamo al 100% su disegno tecnico. La nostra ingegneria analizza il progetto, specifica la lega adeguata (ASTM A297) e restituisce una proposta commerciale.',
    ctaButton: 'Invia il mio disegno tecnico',
    landings: [
      { titulo: 'Tubi Centrifugati', descricao: 'Tubi meccanici prodotti per centrifugazione in leghe scelte per l\'applicazione. Dimensioni e finitura definite dal disegno tecnico.', imagemAlt: 'Tubi in acciaio inox centrifugati, lavorati e lucidati di Aceros', bullets: ['Fasi: grezzo, lavorato (perno), lucidato, misto', 'Diametri, spessori e lunghezze su misura', 'Applicazioni: forni, sink roll, tubi radianti'] },
      { titulo: 'Boccole in Acciaio Inox', descricao: 'Boccole centrifugate in leghe ad alta durezza per applicazioni industriali severe. Specialisti in boccole di estremità per Sink Roll e Furnace Roll.', imagemAlt: 'Boccole in acciaio inox lavorate su misura di Aceros', bullets: ['Lavorazione secondo tolleranze del disegno', 'Materiale selezionato per la condizione di servizio', 'Applicazioni: Sink Roll e rulli da forno'] },
      { titulo: 'Rulli da Forno', descricao: 'Furnace rolls centrifugati per forni continui, linee CAPL/CGL e trattamento termico, raffreddati o non raffreddati.', imagemAlt: 'Rullo industriale per forno a tunnel CSP', bullets: ['Leghe ASTM A297 per alte temperature', 'Versioni rivestite e non rivestite', 'Progettazione secondo forno e condizioni operative'] },
      { titulo: 'Sink Rolls', descricao: 'Rulli a immersione e componenti per linee di zincatura a caldo: bracci, snout, boccole di estremità e gruppi assemblati.', imagemAlt: 'Sink roll per zincatura a immersione a caldo', bullets: ['Resistenza al contatto con zinco fuso', 'Controllo dimensionale di estremità e boccole', 'Gruppi realizzati su disegno del cliente'] },
      { titulo: 'Fusione Centrifugata', descricao: 'Tubi meccanici, boccole e componenti cilindrici in leghe speciali, dal grezzo al pezzo finito lavorato.', imagemAlt: 'Tubi grezzi prodotti per fusione centrifugata', bullets: ['Pezzi cilindrici in leghe speciali', 'Grezzo, pre-lavorato o pronto per il montaggio', 'Dimensioni e lega secondo progetto tecnico'] },
    ],
    catalogo: [
      { titulo: 'Sink Rolls', descricao: 'Rulli centrifugati per linee di zincatura a caldo (pot di zinco).', aplicacao: 'Siderurgia · Zincatura' },
      { titulo: 'Snout (Pot di zincatura)', descricao: 'Componente strutturale per linee di immersione in zinco fuso.', aplicacao: 'Siderurgia · Zincatura' },
      { titulo: 'Bracci di Sink Roll', descricao: 'Bracci di supporto per gruppi Sink Roll in zincatura.', aplicacao: 'Siderurgia · Zincatura' },
      { titulo: 'Rulli per Forni di Zincatura', descricao: 'Rulli centrifugati con o senza profilo per linee di zincatura.', aplicacao: 'Siderurgia · Trattamento termico' },
      { titulo: 'Rulli per Zincatura', descricao: 'Rulli progettati per il contatto con zinco fuso.', aplicacao: 'Siderurgia · Zincatura' },
      { titulo: 'Tubi Radianti', descricao: 'Tubi radianti per forni di trattamento termico continuo.', aplicacao: 'Trattamento termico' },
      { titulo: 'Serpentini alta temperatura', descricao: 'Serpentini fusi per applicazioni siderurgiche primarie.', aplicacao: 'Siderurgia' },
      { titulo: 'Rocchetti Refrattari', descricao: 'Rocchetti in leghe resistenti al calore per linee siderurgiche.', aplicacao: 'Siderurgia' },
      { titulo: 'Bottiglie per Mini Altiforni', descricao: 'Componenti fusi per altiforni piccoli e medi.', aplicacao: 'Ghisa · Siderurgia' },
      { titulo: 'Griglie Industriali', descricao: 'Griglie centrifugate per linee di sinterizzazione e classificazione.', aplicacao: 'Mineraria · Siderurgia' },
      { titulo: 'Tenditori di Catena', descricao: 'Componenti di precisione per il trasporto materiali in siderurgia.', aplicacao: 'Siderurgia · Movimentazione' },
      { titulo: 'Rulli di Laminazione', descricao: 'Rulli per linee di laminazione a caldo, progettati su specifica.', aplicacao: 'Siderurgia · Laminazione' },
      { titulo: 'Rulli per Classificazione Minerale', descricao: 'Rulli per vagli di classificazione pellet e minerale.', aplicacao: 'Mineraria' },
      { titulo: 'Cilindri Inox + Tungsteno', descricao: 'Cilindri con aggiunta di tungsteno per applicazioni ad abrasione severa.', aplicacao: 'Mineraria' },
    ],
  },
};

export function Products() {
  const { language } = useLanguage();
  const c = dict[language] ?? dict.pt;
  const landings = landingsMeta.map((m, i) => ({ ...m, ...c.landings[i] }));

  return (
    <section id="products" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up max-w-3xl mx-auto">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">{c.eyebrow}</p>
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">{c.title}</h1>
          <p className="text-lg text-muted-foreground">{c.lead}</p>
        </div>

        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1 text-accent text-sm font-semibold uppercase tracking-wide mb-3">
              <Rocket className="h-4 w-4" />
              {c.highlightsBadge}
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-slate-900">{c.highlightsTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landings.map((lp, i) => (
              <article key={lp.id} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-slate-100 bg-white shadow-xl transition-all duration-500 hover:border-accent hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                <div className="relative aspect-[16/10] overflow-hidden bg-primary">
                  <Image src={lp.imagem} alt={lp.imagemAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-accent text-white rounded-full p-3 shadow-lg"><lp.icone className="h-6 w-6" /></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-headline text-2xl md:text-3xl font-bold uppercase leading-tight">{lp.titulo}</h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
                  <p className="text-muted-foreground leading-relaxed">{lp.descricao}</p>
                  <ul className="flex-1 space-y-2">
                    {lp.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-accent font-bold mt-0.5">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="mt-auto w-full group/btn bg-primary text-white hover:bg-accent transition-colors">
                    <Link href={lp.href} className="inline-flex items-center justify-center gap-2">
                      {c.seeFullLine}
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1 text-accent text-sm font-semibold uppercase tracking-wide mb-3">
              <Layers className="h-4 w-4" />
              {c.catalogBadge}
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-slate-900 mb-3">{c.catalogTitle}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{c.catalogLead}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.catalogo.map((prod, i) => (
              <div key={prod.titulo} className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-accent hover:shadow-lg transition-all animate-fade-in-up" style={{ animationDelay: `${i * 0.04}s`, animationFillMode: 'both' }}>
                <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{prod.aplicacao}</div>
                <h3 className="font-headline text-lg font-bold text-slate-900 mb-2 group-hover:text-accent transition-colors">{prod.titulo}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{prod.descricao}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1 text-accent text-sm font-semibold uppercase tracking-wide mb-4">
            <PenTool className="h-4 w-4" />
            {c.ctaBadge}
          </div>
          <h2 className="font-headline text-2xl md:text-3xl font-bold mb-4">{c.ctaTitle}</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">{c.ctaLead}</p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7 h-auto">
            <Link href="/contato">{c.ctaButton}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
