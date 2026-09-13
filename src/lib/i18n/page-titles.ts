import type { Language } from '@/hooks/use-language';

// Titulos por rota nos 5 idiomas. Usados pelo <LocalizedTitle /> para
// atualizar document.title no cliente quando a usuaria troca de idioma
// (a metadata do Next fica fixada em PT no build server-side).

type L = Record<Language, string>;

export const pageTitles: Record<string, L> = {
  '/': {
    pt: 'Aceros Aços Centrifugados Sob Medida | Fabricação Industrial',
    en: 'Aceros Custom Centrifugally Cast Steels | Industrial Manufacturing',
    es: 'Aceros Fabricación Centrifugada a Medida | Fabricación Industrial',
    de: 'Aceros Schleuderguss nach Maß | Industriefertigung',
    it: 'Aceros Fusione Centrifugata su Misura | Produzione Industriale',
  },
  '/sobre': {
    pt: 'Sobre a Aceros | Aços Inoxidáveis Centrifugados',
    en: 'About Aceros | Centrifugally Cast Stainless Steels',
    es: 'Sobre Aceros | Aceros Inoxidables Centrifugados',
    de: 'Über Aceros | Schleudergegossene Edelstähle',
    it: 'Chi siamo | Acciai inossidabili centrifugati Aceros',
  },
  '/produtos': {
    pt: 'Produtos | Peças Centrifugadas em Aço Inox Sob Medida',
    en: 'Products | Custom Centrifugally Cast Stainless Steel Parts',
    es: 'Productos | Piezas Centrifugadas en Acero Inoxidable a Medida',
    de: 'Produkte | Edelstahl-Schleudergussteile nach Maß',
    it: 'Prodotti | Pezzi in acciaio inossidabile centrifugati su misura',
  },
  '/qualificacao': {
    pt: 'Qualidade e Certificações | Aços Centrifugados Aceros',
    en: 'Quality and Certifications | Aceros Centrifugally Cast Steels',
    es: 'Calidad y Certificaciones | Aceros Centrifugados',
    de: 'Qualität und Zertifizierungen | Aceros Schleuderguss',
    it: 'Qualità e certificazioni | Aceros Fusione Centrifugata',
  },
  '/engenharia': {
    pt: 'Engenharia Metalúrgica | Projetos Sob Medida',
    en: 'Metallurgical Engineering | Custom Projects',
    es: 'Ingeniería Metalúrgica | Proyectos a Medida',
    de: 'Metallurgische Konstruktion | Projekte nach Maß',
    it: 'Ingegneria metallurgica | Progetti su misura',
  },
  '/ligas': {
    pt: 'Ligas de Aço Inox | ASTM A297 e Série 300/400',
    en: 'Stainless Steel Alloys | ASTM A297 and Series 300/400',
    es: 'Aleaciones de Acero Inoxidable | ASTM A297 y Serie 300/400',
    de: 'Edelstahllegierungen | ASTM A297 und Serie 300/400',
    it: 'Leghe di acciaio inossidabile | ASTM A297 e Serie 300/400',
  },
  '/certificados': {
    pt: 'Certificações e Referências Técnicas | Aceros',
    en: 'Certifications and Technical References | Aceros',
    es: 'Certificaciones y Referencias Técnicas | Aceros',
    de: 'Zertifizierungen und Technische Referenzen | Aceros',
    it: 'Certificazioni e riferimenti tecnici | Aceros',
  },
  '/contato': {
    pt: 'Contato | Solicite Orçamento de Aços Centrifugados',
    en: 'Contact | Request a Centrifugally Cast Steel Quote',
    es: 'Contacto | Solicite Presupuesto de Aceros Centrifugados',
    de: 'Kontakt | Angebot für Schleudergussteile anfragen',
    it: 'Contatti | Richiedi un preventivo di fusione centrifugata',
  },
  '/blog': {
    pt: 'Blog Técnico | Aceros Centrifugados',
    en: 'Technical Blog | Aceros Centrifugally Cast Steels',
    es: 'Blog Técnico | Aceros Centrifugados',
    de: 'Fachblog | Aceros Schleuderguss',
    it: 'Blog tecnico | Aceros Fusione Centrifugata',
  },
  '/bucha-de-aco-inox': {
    pt: 'Bucha de Aço Inox | Fabricação Sob Medida',
    en: 'Stainless Steel Bushing | Custom Manufacturing',
    es: 'Buje de Acero Inoxidable | Fabricación a Medida',
    de: 'Edelstahlbuchse | Fertigung nach Maß',
    it: 'Boccola in acciaio inossidabile | Fabbricazione su misura',
  },
  '/tubos-de-aco-inox': {
    pt: 'Tubos de Aço Inox Sob Medida | Fabricação Industrial',
    en: 'Custom Stainless Steel Tubes | Industrial Manufacturing',
    es: 'Tubos de Acero Inoxidable a Medida | Fabricación Industrial',
    de: 'Edelstahlrohre nach Maß | Industriefertigung',
    it: 'Tubi in acciaio inossidabile su misura | Produzione industriale',
  },
  '/rolos-de-forno': {
    pt: 'Rolos de Forno Sob Medida | Furnace Rolls Industriais',
    en: 'Custom Furnace Rolls | Industrial Manufacturing',
    es: 'Rodillos de Horno a Medida | Furnace Rolls Industriales',
    de: 'Ofenrollen nach Maß | Industrielle Furnace Rolls',
    it: 'Rulli da forno su misura | Furnace Rolls industriali',
  },
  '/sink-rolls': {
    pt: 'Sink Rolls Sob Medida | Rolos de Imersão para Galvanização',
    en: 'Custom Sink Rolls | Immersion Rolls for Galvanising',
    es: 'Sink Rolls a Medida | Rodillos de Inmersión para Galvanizado',
    de: 'Sink Rolls nach Maß | Tauchrollen für Verzinkung',
    it: 'Sink Rolls su misura | Rulli a immersione per zincatura',
  },
  '/fundicao-centrifugada': {
    pt: 'Fundição Centrifugada Sob Medida | Aços Inoxidáveis',
    en: 'Custom Centrifugal Casting | Stainless Steels',
    es: 'Fundición Centrifugada a Medida | Aceros Inoxidables',
    de: 'Schleuderguss nach Maß | Edelstähle',
    it: 'Fusione centrifugata su misura | Acciai inossidabili',
  },
  '/politica-de-privacidade': {
    pt: 'Política de Privacidade | Aceros',
    en: 'Privacy Policy | Aceros',
    es: 'Política de Privacidad | Aceros',
    de: 'Datenschutzerklärung | Aceros',
    it: 'Informativa sulla privacy | Aceros',
  },
};

// Titulos para /atuacao/[slug] — chave = id do setor (mesmo do sectorsData)
export const sectorTitles: Record<string, L> = {
  mineracao: {
    pt: 'Mineração | Aços Centrifugados para o Setor',
    en: 'Mining | Centrifugally Cast Steels for the Sector',
    es: 'Minería | Aceros Centrifugados para el Sector',
    de: 'Bergbau | Schleuderguss für die Branche',
    it: 'Mineraria | Acciai centrifugati per il settore',
  },
  siderurgia: {
    pt: 'Siderurgia | Aços Centrifugados para o Setor',
    en: 'Steelmaking | Centrifugally Cast Steels for the Sector',
    es: 'Siderurgia | Aceros Centrifugados para el Sector',
    de: 'Stahl | Schleuderguss für die Branche',
    it: 'Siderurgia | Acciai centrifugati per il settore',
  },
  naval: {
    pt: 'Naval | Aços Centrifugados para o Setor',
    en: 'Naval | Centrifugally Cast Steels for the Sector',
    es: 'Naval | Aceros Centrifugados para el Sector',
    de: 'Marine | Schleuderguss für die Branche',
    it: 'Navale | Acciai centrifugati per il settore',
  },
  tratamento_termico: {
    pt: 'Tratamento Térmico | Aços Centrifugados para o Setor',
    en: 'Heat Treatment | Centrifugally Cast Steels for the Sector',
    es: 'Tratamiento Térmico | Aceros Centrifugados para el Sector',
    de: 'Wärmebehandlung | Schleuderguss für die Branche',
    it: 'Trattamento termico | Acciai centrifugati per il settore',
  },
  guseira: {
    pt: 'Indústria Guseira | Aços Centrifugados para o Setor',
    en: 'Pig-Iron Industry | Centrifugally Cast Steels for the Sector',
    es: 'Industria del Arrabio | Aceros Centrifugados para el Sector',
    de: 'Roheisenindustrie | Schleuderguss für die Branche',
    it: 'Industria della ghisa | Acciai centrifugati per il settore',
  },
  oleo_e_gas: {
    pt: 'Óleo e Gás | Aços Centrifugados para o Setor',
    en: 'Oil and Gas | Centrifugally Cast Steels for the Sector',
    es: 'Petróleo y Gas | Aceros Centrifugados para el Sector',
    de: 'Öl und Gas | Schleuderguss für die Branche',
    it: 'Petrolio e gas | Acciai centrifugati per il settore',
  },
};
