import type { Language } from '@/hooks/use-language';

type ExtraTranslations = {
  common: { learnMore: string };
  hero: {
    eyebrow: string;
    slides: Array<{ alt: string; label: string }>;
    selectorLabel: string;
    showSlide: string;
    stats: [string, string, string, string];
    contentLabel: string;
  };
  about: { imageAlt: string; production: string; productionDescription: string };
  whatsapp: { label: string; message: string };
  carousel: { previous: string; next: string };
  home: { bushingsLink: string; tubesLink: string };
  sectors: { certificates: string; certificatesDescription: string; certificateAlt: string };
  footer: {
    privacy: string;
    cookiePreferences: string;
    homeLabel: string;
    mapLabel: string;
    mailLabel: string;
    phoneLabel: string;
    hours: [string, string];
    talkTitle: string;
    talkBody: string;
    quote: string;
    division: string;
  };
  trust: {
    eyebrow: string;
    title: string;
    stats: Array<{ number: string; label: string; sub: string }>;
    differentiatorsLabel: string;
    differentiatorsTitle: string;
    differentiators: Array<{ title: string; description: string }>;
    certificationsLabel: string;
    certificationsTitle: string;
    certifications: Array<{ title: string; description: string }>;
    closingBefore: string;
    closingStrong: string;
    closingMiddle: string;
    closingMarkets: string;
  };
};

export const siteExtras: Record<Language, ExtraTranslations> = {
  pt: {
    common: { learnMore: 'Saiba mais' },
    hero: {
      eyebrow: 'Engenharia metalúrgica desde 2015',
      slides: [
        { alt: 'Tubos de aço centrifugado usinados e polidos pela Aceros', label: 'Tubos centrifugados' },
        { alt: 'Buchas de aço inox centrifugado usinadas pela Aceros', label: 'Buchas centrifugadas' },
        { alt: 'Tubos de aço inox usinados e polidos pela Aceros', label: 'Tubos polidos' },
      ],
      selectorLabel: 'Selecionar imagem principal', showSlide: 'Exibir',
      stats: ['Grupo Daniela', 'Divisão Aceros', 'Países atendidos', 'Sob medida'], contentLabel: 'Ir para o conteúdo',
    },
    about: { imageAlt: 'Área de usinagem da fábrica Aceros com tubo de aço em produção', production: 'Produção Aceros', productionDescription: 'Estrutura industrial dedicada à usinagem de tubos e componentes sob medida.' },
    whatsapp: { label: 'Fale conosco pelo WhatsApp', message: 'Olá! Vim pelo site da Aceros e gostaria de solicitar um orçamento.' },
    carousel: { previous: 'Slide anterior', next: 'Próximo slide' },
    home: {
      bushingsLink: 'Conheça nossa linha de Buchas de Aço Inox Sob Medida',
      tubesLink: 'Conheça nossa linha de Tubos de Aço Inox Sob Medida',
    },
    sectors: {
      certificates: 'Certificados',
      certificatesDescription: 'Explore mais nossos certificados e selos de qualidade.',
      certificateAlt: 'Certificado ISO 9001:2015 da Aceros',
    },
    footer: {
      privacy: 'Política de Privacidade', cookiePreferences: 'Preferências de cookies',
      homeLabel: 'Aceros — Página inicial', mapLabel: 'Abrir o endereço da Aceros no mapa',
      mailLabel: 'Enviar e-mail para vendas da Aceros', phoneLabel: 'Ligar para a Aceros',
      hours: ['Seg a Qui: 07:30 às 17:30', 'Sex: 07:30 às 16:30'],
      talkTitle: 'Fale com a Aceros', talkBody: 'Solicite um orçamento sob medida. Nossa equipe técnica retorna com uma proposta comercial competitiva.',
      quote: 'Solicitar orçamento', division: 'Divisão de aços inoxidáveis do Grupo Metalúrgica Daniela',
    },
    trust: {
      eyebrow: 'Por que grandes indústrias escolhem a Aceros',
      title: 'Especialistas em aços centrifugados que resistem onde os aços comuns falham',
      stats: [
        { number: '1999', label: 'Grupo Daniela desde', sub: 'Aceros como divisão de inox desde 2015' },
        { number: 'ASTM', label: 'A297', sub: 'ligas HK, HH, HP e superligas' },
        { number: '+3', label: 'países atendidos', sub: 'presença internacional' },
        { number: '100%', label: 'sob medida', sub: 'projetos por desenho técnico' },
      ],
      differentiatorsLabel: 'Nossos diferenciais', differentiatorsTitle: 'O que fazemos melhor que a concorrência',
      differentiators: [
        { title: 'Aços refratários de alta temperatura', description: 'Peças fabricadas em ligas que resistem a temperaturas extremas — ideais para fornos, sink rolls, furnace rolls e tubos radiantes.' },
        { title: 'Buchas de elevada dureza', description: 'Especialistas em buchas centrifugadas com desempenho superior em aplicações que exigem tolerância dimensional e resistência mecânica.' },
        { title: 'Resistência à abrasão extrema', description: 'Peças cilíndricas de aço inoxidável com adição de tungstênio para aplicações severas no setor de mineração.' },
      ],
      certificationsLabel: 'Certificações e Qualidade', certificationsTitle: 'Qualidade validada por normas internacionais',
      certifications: [
        { title: 'ISO 9001:2015', description: 'Certificado nº 60300915 QM15 — emitido pela DQS GmbH (Alemanha) com acreditação DAkkS e IQNET. Válido até novembro/2028.' },
        { title: 'Normas ASME e AWS', description: 'Procedimentos de soldagem qualificados (EPS, RQPS e RQSO) conforme normas internacionais reconhecidas.' },
        { title: 'Laboratório próprio', description: 'Análise química por espectrometria, ensaio de dureza e ultrassom realizados internamente — controle total de qualidade.' },
      ],
      closingBefore: 'Cada peça sai da nossa fábrica com ', closingStrong: 'rastreabilidade total, laudo metalúrgico e ensaios não destrutivos',
      closingMiddle: '. É por isso que somos referência em componentes centrifugados de alto desempenho para ', closingMarkets: 'mineração, tratamento térmico, setor naval e siderurgia',
    },
  },
  en: {
    common: { learnMore: 'Learn more' },
    hero: {
      eyebrow: 'Metallurgical engineering since 2015',
      slides: [
        { alt: 'Centrifugally cast steel tubes machined and polished by Aceros', label: 'Centrifugally cast tubes' },
        { alt: 'Centrifugally cast stainless steel bushings machined by Aceros', label: 'Centrifugally cast bushings' },
        { alt: 'Stainless steel tubes machined and polished by Aceros', label: 'Polished tubes' },
      ],
      selectorLabel: 'Select main image', showSlide: 'Show',
      stats: ['Daniela Group', 'Aceros Division', 'Countries served', 'Custom-made'], contentLabel: 'Skip to content',
    },
    about: { imageAlt: 'Aceros machining area with a steel tube in production', production: 'Aceros production', productionDescription: 'Industrial facilities dedicated to machining custom tubes and components.' },
    whatsapp: { label: 'Contact us on WhatsApp', message: 'Hello! I found Aceros through the website and would like to request a quote.' },
    carousel: { previous: 'Previous slide', next: 'Next slide' },
    home: { bushingsLink: 'Discover our custom stainless steel bushings', tubesLink: 'Discover our custom stainless steel tubes' },
    sectors: { certificates: 'Certificates', certificatesDescription: 'Explore our certificates and quality seals.', certificateAlt: 'Aceros ISO 9001:2015 certificate' },
    footer: {
      privacy: 'Privacy Policy', cookiePreferences: 'Cookie preferences', homeLabel: 'Aceros — Home', mapLabel: 'Open the Aceros address in Maps',
      mailLabel: 'Email Aceros sales', phoneLabel: 'Call Aceros', hours: ['Mon–Thu: 7:30 AM–5:30 PM', 'Fri: 7:30 AM–4:30 PM'],
      talkTitle: 'Talk to Aceros', talkBody: 'Request a custom quote. Our technical team will respond with a competitive proposal.', quote: 'Request a quote',
      division: 'Stainless steel division of the Metalúrgica Daniela Group',
    },
    trust: {
      eyebrow: 'Why leading industries choose Aceros', title: 'Centrifugally cast steel specialists for applications where conventional steels fail',
      stats: [
        { number: '1999', label: 'Daniela Group since', sub: 'Aceros stainless steel division since 2015' },
        { number: 'ASTM', label: 'A297', sub: 'HK, HH, HP alloys and superalloys' },
        { number: '+3', label: 'countries served', sub: 'international presence' },
        { number: '100%', label: 'custom-made', sub: 'projects based on technical drawings' },
      ],
      differentiatorsLabel: 'Our differentiators', differentiatorsTitle: 'What sets our engineering apart',
      differentiators: [
        { title: 'High-temperature heat-resistant steels', description: 'Components made from alloys engineered for extreme temperatures — ideal for furnaces, sink rolls, furnace rolls and radiant tubes.' },
        { title: 'High-hardness bushings', description: 'Centrifugally cast bushings for applications requiring dimensional tolerance and superior mechanical resistance.' },
        { title: 'Extreme abrasion resistance', description: 'Cylindrical stainless steel components with tungsten additions for severe mining applications.' },
      ],
      certificationsLabel: 'Certifications and Quality', certificationsTitle: 'Quality validated by international standards',
      certifications: [
        { title: 'ISO 9001:2015', description: 'Certificate 60300915 QM15 — issued by DQS GmbH (Germany), with DAkkS and IQNET recognition. Valid through November 2028.' },
        { title: 'ASME and AWS standards', description: 'Qualified welding procedures (WPS, PQR and WPQ) according to internationally recognized standards.' },
        { title: 'In-house laboratory', description: 'Chemical analysis by spectrometry, hardness testing and ultrasonic inspection performed in-house.' },
      ],
      closingBefore: 'Every component leaves our plant with ', closingStrong: 'full traceability, a metallurgical report and non-destructive testing',
      closingMiddle: '. This is why we are a reference in high-performance centrifugally cast components for ', closingMarkets: 'mining, heat treatment, marine and steelmaking industries',
    },
  },
  es: {
    common: { learnMore: 'Más información' },
    hero: {
      eyebrow: 'Ingeniería metalúrgica desde 2015',
      slides: [
        { alt: 'Tubos de acero centrifugado mecanizados y pulidos por Aceros', label: 'Tubos centrifugados' },
        { alt: 'Bujes de acero inoxidable centrifugado mecanizados por Aceros', label: 'Bujes centrifugados' },
        { alt: 'Tubos de acero inoxidable mecanizados y pulidos por Aceros', label: 'Tubos pulidos' },
      ],
      selectorLabel: 'Seleccionar imagen principal', showSlide: 'Mostrar',
      stats: ['Grupo Daniela', 'División Aceros', 'Países atendidos', 'A medida'], contentLabel: 'Ir al contenido',
    },
    about: { imageAlt: 'Área de mecanizado de la fábrica Aceros con un tubo de acero en producción', production: 'Producción Aceros', productionDescription: 'Estructura industrial dedicada al mecanizado de tubos y componentes a medida.' },
    whatsapp: { label: 'Contáctenos por WhatsApp', message: '¡Hola! Conocí Aceros a través del sitio web y quisiera solicitar un presupuesto.' },
    carousel: { previous: 'Diapositiva anterior', next: 'Diapositiva siguiente' },
    home: { bushingsLink: 'Conozca nuestra línea de bujes de acero inoxidable a medida', tubesLink: 'Conozca nuestra línea de tubos de acero inoxidable a medida' },
    sectors: { certificates: 'Certificados', certificatesDescription: 'Conozca nuestros certificados y sellos de calidad.', certificateAlt: 'Certificado ISO 9001:2015 de Aceros' },
    footer: {
      privacy: 'Política de Privacidad', cookiePreferences: 'Preferencias de cookies', homeLabel: 'Aceros — Inicio', mapLabel: 'Abrir la dirección de Aceros en Maps',
      mailLabel: 'Enviar correo a ventas de Aceros', phoneLabel: 'Llamar a Aceros', hours: ['Lun–Jue: 7:30–17:30', 'Vie: 7:30–16:30'],
      talkTitle: 'Hable con Aceros', talkBody: 'Solicite un presupuesto a medida. Nuestro equipo técnico responderá con una propuesta competitiva.', quote: 'Solicitar presupuesto',
      division: 'División de aceros inoxidables del Grupo Metalúrgica Daniela',
    },
    trust: {
      eyebrow: 'Por qué las grandes industrias eligen Aceros', title: 'Especialistas en aceros centrifugados que resisten donde los aceros convencionales fallan',
      stats: [
        { number: '1999', label: 'Grupo Daniela desde', sub: 'División Aceros de inoxidable desde 2015' },
        { number: 'ASTM', label: 'A297', sub: 'aleaciones HK, HH, HP y superaleaciones' },
        { number: '+3', label: 'países atendidos', sub: 'presencia internacional' },
        { number: '100%', label: 'a medida', sub: 'proyectos según planos técnicos' },
      ],
      differentiatorsLabel: 'Nuestros diferenciales', differentiatorsTitle: 'Lo que distingue a nuestra ingeniería',
      differentiators: [
        { title: 'Aceros refractarios de alta temperatura', description: 'Piezas en aleaciones resistentes a temperaturas extremas, ideales para hornos, sink rolls, furnace rolls y tubos radiantes.' },
        { title: 'Bujes de alta dureza', description: 'Bujes centrifugados para aplicaciones que exigen tolerancia dimensional y elevada resistencia mecánica.' },
        { title: 'Resistencia extrema a la abrasión', description: 'Componentes cilíndricos de acero inoxidable con adición de tungsteno para aplicaciones severas en minería.' },
      ],
      certificationsLabel: 'Certificaciones y Calidad', certificationsTitle: 'Calidad validada por normas internacionales',
      certifications: [
        { title: 'ISO 9001:2015', description: 'Certificado 60300915 QM15, emitido por DQS GmbH (Alemania), con acreditación DAkkS e IQNET. Válido hasta noviembre de 2028.' },
        { title: 'Normas ASME y AWS', description: 'Procedimientos de soldadura cualificados según normas internacionales reconocidas.' },
        { title: 'Laboratorio propio', description: 'Análisis químico por espectrometría, dureza y ultrasonido realizados internamente.' },
      ],
      closingBefore: 'Cada pieza sale de nuestra fábrica con ', closingStrong: 'trazabilidad total, informe metalúrgico y ensayos no destructivos',
      closingMiddle: '. Por eso somos referencia en componentes centrifugados de alto desempeño para ', closingMarkets: 'minería, tratamiento térmico, sector naval y siderurgia',
    },
  },
  de: {
    common: { learnMore: 'Mehr erfahren' },
    hero: {
      eyebrow: 'Metallurgische Ingenieurtechnik seit 2015',
      slides: [
        { alt: 'Von Aceros bearbeitete und polierte Schleudergussrohre aus Stahl', label: 'Schleudergussrohre' },
        { alt: 'Von Aceros bearbeitete Schleudergussbuchsen aus Edelstahl', label: 'Schleudergussbuchsen' },
        { alt: 'Von Aceros bearbeitete und polierte Edelstahlrohre', label: 'Polierte Rohre' },
      ],
      selectorLabel: 'Hauptbild auswählen', showSlide: 'Anzeigen',
      stats: ['Daniela Gruppe', 'Aceros-Sparte', 'Belieferte Länder', 'Maßgefertigt'], contentLabel: 'Zum Inhalt springen',
    },
    about: { imageAlt: 'Bearbeitungsbereich im Aceros-Werk mit einem Stahlrohr in Produktion', production: 'Aceros-Produktion', productionDescription: 'Industrieanlage für die Bearbeitung maßgefertigter Rohre und Komponenten.' },
    whatsapp: { label: 'Kontaktieren Sie uns über WhatsApp', message: 'Hallo! Ich bin über die Aceros-Website auf Sie aufmerksam geworden und möchte ein Angebot anfordern.' },
    carousel: { previous: 'Vorherige Folie', next: 'Nächste Folie' },
    home: { bushingsLink: 'Entdecken Sie unsere maßgefertigten Edelstahlbuchsen', tubesLink: 'Entdecken Sie unsere maßgefertigten Edelstahlrohre' },
    sectors: { certificates: 'Zertifikate', certificatesDescription: 'Entdecken Sie unsere Zertifikate und Qualitätssiegel.', certificateAlt: 'ISO-9001:2015-Zertifikat von Aceros' },
    footer: {
      privacy: 'Datenschutzerklärung', cookiePreferences: 'Cookie-Einstellungen', homeLabel: 'Aceros — Startseite', mapLabel: 'Aceros-Adresse in Maps öffnen',
      mailLabel: 'E-Mail an den Aceros-Vertrieb', phoneLabel: 'Aceros anrufen', hours: ['Mo–Do: 07:30–17:30', 'Fr: 07:30–16:30'],
      talkTitle: 'Sprechen Sie mit Aceros', talkBody: 'Fordern Sie ein individuelles Angebot an. Unser Technikteam antwortet mit einem wettbewerbsfähigen Vorschlag.', quote: 'Angebot anfordern',
      division: 'Edelstahlsparte der Metalúrgica Daniela Gruppe',
    },
    trust: {
      eyebrow: 'Warum führende Industrien Aceros wählen', title: 'Spezialisten für Schleudergussstahl, wo herkömmliche Stähle versagen',
      stats: [
        { number: '1999', label: 'Daniela Gruppe seit', sub: 'Aceros-Edelstahlsparte seit 2015' },
        { number: 'ASTM', label: 'A297', sub: 'HK-, HH-, HP-Legierungen und Superlegierungen' },
        { number: '+3', label: 'bediente Länder', sub: 'internationale Präsenz' },
        { number: '100%', label: 'maßgefertigt', sub: 'Projekte nach technischen Zeichnungen' },
      ],
      differentiatorsLabel: 'Unsere Stärken', differentiatorsTitle: 'Was unsere Technik auszeichnet',
      differentiators: [
        { title: 'Hitzebeständige Hochtemperaturstähle', description: 'Bauteile aus Legierungen für extreme Temperaturen — ideal für Öfen, Sink Rolls, Furnace Rolls und Strahlrohre.' },
        { title: 'Buchsen mit hoher Härte', description: 'Schleudergegossene Buchsen für Anwendungen mit engen Maßtoleranzen und hoher mechanischer Festigkeit.' },
        { title: 'Extreme Abriebfestigkeit', description: 'Zylindrische Edelstahlkomponenten mit Wolframzusatz für anspruchsvolle Bergbauanwendungen.' },
      ],
      certificationsLabel: 'Zertifizierungen und Qualität', certificationsTitle: 'Durch internationale Normen bestätigte Qualität',
      certifications: [
        { title: 'ISO 9001:2015', description: 'Zertifikat 60300915 QM15, ausgestellt von DQS GmbH, mit DAkkS- und IQNET-Anerkennung. Gültig bis November 2028.' },
        { title: 'ASME- und AWS-Normen', description: 'Qualifizierte Schweißverfahren nach international anerkannten Normen.' },
        { title: 'Eigenes Labor', description: 'Chemische Analyse, Härteprüfung und Ultraschallprüfung werden intern durchgeführt.' },
      ],
      closingBefore: 'Jedes Bauteil verlässt unser Werk mit ', closingStrong: 'vollständiger Rückverfolgbarkeit, metallurgischem Bericht und zerstörungsfreier Prüfung',
      closingMiddle: '. Deshalb sind wir eine Referenz für Hochleistungs-Schleudergussteile für ', closingMarkets: 'Bergbau, Wärmebehandlung, Schiffbau und Stahlindustrie',
    },
  },
  it: {
    common: { learnMore: 'Scopri di più' },
    hero: {
      eyebrow: 'Ingegneria metallurgica dal 2015',
      slides: [
        { alt: 'Tubi in acciaio centrifugato lavorati e lucidati da Aceros', label: 'Tubi centrifugati' },
        { alt: 'Boccole in acciaio inox centrifugato lavorate da Aceros', label: 'Boccole centrifugate' },
        { alt: 'Tubi in acciaio inox lavorati e lucidati da Aceros', label: 'Tubi lucidati' },
      ],
      selectorLabel: 'Seleziona immagine principale', showSlide: 'Mostra',
      stats: ['Gruppo Daniela', 'Divisione Aceros', 'Paesi serviti', 'Su misura'], contentLabel: 'Vai al contenuto',
    },
    about: { imageAlt: 'Area di lavorazione dello stabilimento Aceros con un tubo in acciaio in produzione', production: 'Produzione Aceros', productionDescription: 'Struttura industriale dedicata alla lavorazione di tubi e componenti su misura.' },
    whatsapp: { label: 'Contattaci su WhatsApp', message: 'Salve! Ho conosciuto Aceros tramite il sito e vorrei richiedere un preventivo.' },
    carousel: { previous: 'Diapositiva precedente', next: 'Diapositiva successiva' },
    home: { bushingsLink: 'Scopri la nostra linea di boccole in acciaio inox su misura', tubesLink: 'Scopri la nostra linea di tubi in acciaio inox su misura' },
    sectors: { certificates: 'Certificati', certificatesDescription: 'Scopri i nostri certificati e marchi di qualità.', certificateAlt: 'Certificato ISO 9001:2015 Aceros' },
    footer: {
      privacy: 'Informativa sulla privacy', cookiePreferences: 'Preferenze cookie', homeLabel: 'Aceros — Home', mapLabel: 'Apri l’indirizzo Aceros in Maps',
      mailLabel: 'Invia un’e-mail alle vendite Aceros', phoneLabel: 'Chiama Aceros', hours: ['Lun–Gio: 07:30–17:30', 'Ven: 07:30–16:30'],
      talkTitle: 'Parla con Aceros', talkBody: 'Richiedi un preventivo su misura. Il nostro team tecnico risponderà con una proposta competitiva.', quote: 'Richiedi preventivo',
      division: 'Divisione acciai inossidabili del Gruppo Metalúrgica Daniela',
    },
    trust: {
      eyebrow: 'Perché le grandi industrie scelgono Aceros', title: 'Specialisti in acciai centrifugati che resistono dove gli acciai convenzionali cedono',
      stats: [
        { number: '1999', label: 'Gruppo Daniela dal', sub: 'Divisione inox Aceros dal 2015' },
        { number: 'ASTM', label: 'A297', sub: 'leghe HK, HH, HP e superleghe' },
        { number: '+3', label: 'paesi serviti', sub: 'presenza internazionale' },
        { number: '100%', label: 'su misura', sub: 'progetti da disegno tecnico' },
      ],
      differentiatorsLabel: 'I nostri vantaggi', differentiatorsTitle: 'Cosa distingue la nostra ingegneria',
      differentiators: [
        { title: 'Acciai refrattari per alte temperature', description: 'Componenti in leghe resistenti a temperature estreme, ideali per forni, sink roll, furnace roll e tubi radianti.' },
        { title: 'Boccole ad alta durezza', description: 'Boccole centrifugate per applicazioni che richiedono tolleranze dimensionali e alta resistenza meccanica.' },
        { title: 'Resistenza estrema all’abrasione', description: 'Componenti cilindrici in acciaio inox con aggiunta di tungsteno per applicazioni minerarie severe.' },
      ],
      certificationsLabel: 'Certificazioni e Qualità', certificationsTitle: 'Qualità convalidata da norme internazionali',
      certifications: [
        { title: 'ISO 9001:2015', description: 'Certificato 60300915 QM15, emesso da DQS GmbH (Germania), con riconoscimento DAkkS e IQNET. Valido fino a novembre 2028.' },
        { title: 'Norme ASME e AWS', description: 'Procedure di saldatura qualificate secondo norme internazionali riconosciute.' },
        { title: 'Laboratorio interno', description: 'Analisi chimica, prove di durezza e controlli a ultrasuoni eseguiti internamente.' },
      ],
      closingBefore: 'Ogni componente lascia il nostro stabilimento con ', closingStrong: 'tracciabilità completa, rapporto metallurgico e controlli non distruttivi',
      closingMiddle: '. Per questo siamo un riferimento nei componenti centrifugati ad alte prestazioni per ', closingMarkets: 'settori minerario, trattamento termico, navale e siderurgico',
    },
  },
};
