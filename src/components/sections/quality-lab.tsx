'use client';

import {
  Award,
  Beaker,
  FileCheck,
  Gauge,
  Microscope,
  Ruler,
  ScanLine,
  ShieldCheck,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage, type Language } from '@/hooks/use-language';

type Copy = {
  certEyebrow: string;
  certTitle1: string; certTitleAccent: string;
  certLead: string;
  isoLabel: string;
  isoTitle: string;
  isoDesc: string;
  isoCertLabel: string;
  isoValidityLabel: string;
  isoOpenDoc: string;
  isoImgAlt: string;
  isoLinkAria: string;
  spectroLabel: string;
  spectroTitle: string;
  spectroDesc: string;
  spectroLinkAria: string;
  labEyebrow: string;
  labTitle: string;
  labLead: string;
  rollprofLabel: string;
  rollprofTitle: string;
  rollprofDesc: string;
  rollprofRolls: string;
  rollprofStandards: string;
  rollprofImgAlt: string;
  inspectionEyebrow: string;
  inspectionTitle: string;
  traceEyebrowIcon: string;
  traceTitle: string;
  traceLead: string;
  traceFooter: string;
  capacidades: Array<{ etiqueta: string; titulo: string; descricao: string; alt: string }>;
  equipamentos: Array<{ nome: string; tipo: string; descricao: string }>;
};

const dict: Record<Language, Copy> = {
  pt: {
    certEyebrow: 'Certificações e rastreabilidade',
    certTitle1: 'Qualidade ', certTitleAccent: 'documentada',
    certLead: 'A certificação do sistema de gestão e a calibração dos equipamentos trabalham juntas para garantir processos controlados e resultados confiáveis.',
    isoLabel: 'Sistema de gestão', isoTitle: 'ISO 9001:2015',
    isoDesc: 'Certificação DQS com acreditação DAkkS e reconhecimento da rede IQNet para o escopo industrial da Aceros.',
    isoCertLabel: 'Certificado', isoValidityLabel: 'Validade',
    isoOpenDoc: 'Abrir documento completo ↗',
    isoImgAlt: 'Certificado ISO 9001:2015 da Aceros válido até novembro de 2028',
    isoLinkAria: 'Abrir certificado ISO 9001:2015 da Aceros',
    spectroLabel: 'Registro técnico',
    spectroTitle: 'Revisão e calibração Spectromax',
    spectroDesc: 'Documento nº 2044/19 referente ao espectrômetro de emissão óptica utilizado na análise química das ligas.',
    spectroLinkAria: 'Abrir registro de revisão e calibração do espectrômetro',
    labEyebrow: 'Laboratório e metrologia',
    labTitle: 'O controle de qualidade acontecendo na prática',
    labLead: 'Análises químicas, ultrassom, dureza, ensaios de corrosão e ensaios mecânicos apoiam o desenvolvimento de ligas e a verificação dos requisitos definidos para cada projeto.',
    rollprofLabel: 'Controle de perfil',
    rollprofTitle: 'Medição especializada com Rollprof',
    rollprofDesc: 'A Aceros realiza a medição de perfis em rolos de forno, furnace rolls e sink rolls com profissional treinado pela Drever, Bélgica.',
    rollprofRolls: 'rolos controlados', rollprofStandards: 'padrões rastreados',
    rollprofImgAlt: 'Perfilômetro Rollprof realizando a medição de um rolo industrial',
    inspectionEyebrow: 'Capacidade de inspeção',
    inspectionTitle: 'Equipamentos, ensaios e processos qualificados',
    traceEyebrowIcon: 'Rastreabilidade e documentação',
    traceTitle: 'Ensaios e documentação conforme o projeto',
    traceLead: 'Conforme os requisitos acordados, o fornecimento pode incluir análise química, dureza, ultrassom, rastreabilidade e registros do processo.',
    traceFooter: 'Documentação técnica organizada para rastreabilidade e auditoria industrial.',
    capacidades: [
      { etiqueta: 'Ensaio não destrutivo', titulo: 'Ultrassom em peças fundidas e usinadas', descricao: 'Verificação de descontinuidades internas e integridade estrutural sem danificar a peça.', alt: 'Equipamento de ultrassom Krautkramer USM 36 utilizado no controle de qualidade da Aceros' },
      { etiqueta: 'Análise química', titulo: 'Composição da liga controlada na fusão', descricao: 'Amostras são preparadas e analisadas para orientar as correções necessárias durante o processo.', alt: 'Espectrômetro de emissão óptica Spectromax utilizado pela Aceros' },
      { etiqueta: 'Metrologia', titulo: 'Medição em ambiente climatizado', descricao: 'Instrumentos e padrões calibrados e rastreados pela RBC para o controle dimensional de grande porte.', alt: 'Sala de metrologia climatizada da Aceros' },
      { etiqueta: 'Ensaio de dureza', titulo: 'Durômetro com controle calibrado', descricao: 'Verificação das propriedades mecânicas previstas para cada liga e etapa do processo produtivo.', alt: 'Durômetro Mitutoyo utilizado no controle de dureza da Aceros' },
    ],
    equipamentos: [
      { nome: 'Spectromax', tipo: 'Análise Química', descricao: 'Espectrometria de emissão óptica durante a fusão para controlar a composição e ajustar a liga à especificação do projeto.' },
      { nome: 'Ultrassom Krautkramer USM 36', tipo: 'Ensaio Não Destrutivo', descricao: 'Inspeção de peças fundidas e usinadas para detectar descontinuidades internas, inclusões e trincas subsuperficiais.' },
      { nome: 'Rollprof (Perfilômetro)', tipo: 'Controle de Perfil', descricao: 'Medição de perfis de rolos de forno, furnace rolls e sink rolls por profissional com treinamento Drever, Bélgica.' },
      { nome: 'Durômetro', tipo: 'Ensaio de Dureza', descricao: 'Controle de dureza ao longo da produção para verificar o atendimento às propriedades mecânicas definidas no projeto.' },
      { nome: 'Ensaios de Corrosão e Mecânicos', tipo: 'Pesquisa e Validação', descricao: 'Avaliações para estudar o comportamento das ligas e apoiar melhorias em peças resistentes ao calor, abrasão e corrosão.' },
      { nome: 'Soldagem Qualificada', tipo: 'AWS D1.1 e ASME', descricao: 'Procedimentos TIG, MIG, MAG e eletrodo revestido com EPS, RQPS e RQSO qualificados e soldadores certificados.' },
    ],
  },
  en: {
    certEyebrow: 'Certifications and traceability',
    certTitle1: 'Documented ', certTitleAccent: 'quality',
    certLead: 'Management-system certification and equipment calibration work together to ensure controlled processes and reliable results.',
    isoLabel: 'Management system', isoTitle: 'ISO 9001:2015',
    isoDesc: 'DQS certification with DAkkS accreditation and IQNet network recognition for the Aceros industrial scope.',
    isoCertLabel: 'Certificate', isoValidityLabel: 'Valid through',
    isoOpenDoc: 'Open full document ↗',
    isoImgAlt: 'Aceros ISO 9001:2015 certificate valid through November 2028',
    isoLinkAria: 'Open the Aceros ISO 9001:2015 certificate',
    spectroLabel: 'Technical record',
    spectroTitle: 'Spectromax service and calibration',
    spectroDesc: 'Document nº 2044/19 for the optical emission spectrometer used in chemical analysis of the alloys.',
    spectroLinkAria: 'Open the spectrometer service and calibration record',
    labEyebrow: 'Laboratory and metrology',
    labTitle: 'Quality control in practice',
    labLead: 'Chemical analysis, ultrasound, hardness, corrosion and mechanical tests support alloy development and verification of the requirements defined for each project.',
    rollprofLabel: 'Profile control',
    rollprofTitle: 'Specialised measurement with Rollprof',
    rollprofDesc: 'Aceros performs profile measurement on furnace rolls, sink rolls and other rolls with a professional trained by Drever, Belgium.',
    rollprofRolls: 'rolls measured', rollprofStandards: 'traceable standards',
    rollprofImgAlt: 'Rollprof profilometer measuring an industrial roll',
    inspectionEyebrow: 'Inspection capability',
    inspectionTitle: 'Qualified equipment, tests and processes',
    traceEyebrowIcon: 'Traceability and documentation',
    traceTitle: 'Tests and documentation as defined by the project',
    traceLead: 'According to the agreed requirements, the supply may include chemical analysis, hardness, ultrasound, traceability and process records.',
    traceFooter: 'Technical documentation organised for traceability and industrial audit.',
    capacidades: [
      { etiqueta: 'Non-destructive test', titulo: 'Ultrasound on cast and machined parts', descricao: 'Verification of internal discontinuities and structural integrity without damaging the part.', alt: 'Krautkramer USM 36 ultrasound equipment used in Aceros quality control' },
      { etiqueta: 'Chemical analysis', titulo: 'Alloy composition controlled during melting', descricao: 'Samples are prepared and analysed to guide the corrections needed during the process.', alt: 'Spectromax optical emission spectrometer used by Aceros' },
      { etiqueta: 'Metrology', titulo: 'Measurement in a climate-controlled room', descricao: 'Instruments and standards calibrated and traceable through RBC for large-scale dimensional control.', alt: 'Aceros climate-controlled metrology room' },
      { etiqueta: 'Hardness test', titulo: 'Calibrated hardness tester', descricao: 'Verification of the mechanical properties expected for each alloy and production step.', alt: 'Mitutoyo hardness tester used in Aceros hardness control' },
    ],
    equipamentos: [
      { nome: 'Spectromax', tipo: 'Chemical analysis', descricao: 'Optical emission spectrometry during melting to control composition and adjust the alloy to the project specification.' },
      { nome: 'Krautkramer USM 36 ultrasound', tipo: 'Non-destructive test', descricao: 'Inspection of cast and machined parts to detect internal discontinuities, inclusions and sub-surface cracks.' },
      { nome: 'Rollprof (profilometer)', tipo: 'Profile control', descricao: 'Profile measurement of furnace rolls, sink rolls and other rolls by a professional trained by Drever, Belgium.' },
      { nome: 'Hardness tester', tipo: 'Hardness test', descricao: 'Hardness control throughout production to verify the mechanical properties defined in the project.' },
      { nome: 'Corrosion and mechanical tests', tipo: 'Research and validation', descricao: 'Assessments to study alloy behaviour and support improvements in heat, abrasion and corrosion-resistant parts.' },
      { nome: 'Qualified welding', tipo: 'AWS D1.1 and ASME', descricao: 'TIG, MIG, MAG and coated-electrode procedures with qualified WPS, PQR, and welder qualifications.' },
    ],
  },
  es: {
    certEyebrow: 'Certificaciones y trazabilidad',
    certTitle1: 'Calidad ', certTitleAccent: 'documentada',
    certLead: 'La certificación del sistema de gestión y la calibración de los equipos trabajan juntas para garantizar procesos controlados y resultados confiables.',
    isoLabel: 'Sistema de gestión', isoTitle: 'ISO 9001:2015',
    isoDesc: 'Certificación DQS con acreditación DAkkS y reconocimiento de la red IQNet para el alcance industrial de Aceros.',
    isoCertLabel: 'Certificado', isoValidityLabel: 'Validez',
    isoOpenDoc: 'Abrir documento completo ↗',
    isoImgAlt: 'Certificado ISO 9001:2015 de Aceros válido hasta noviembre de 2028',
    isoLinkAria: 'Abrir el certificado ISO 9001:2015 de Aceros',
    spectroLabel: 'Registro técnico',
    spectroTitle: 'Revisión y calibración Spectromax',
    spectroDesc: 'Documento nº 2044/19 correspondiente al espectrómetro de emisión óptica utilizado en el análisis químico de las aleaciones.',
    spectroLinkAria: 'Abrir el registro de revisión y calibración del espectrómetro',
    labEyebrow: 'Laboratorio y metrología',
    labTitle: 'El control de calidad puesto en práctica',
    labLead: 'Análisis químicos, ultrasonido, dureza, ensayos de corrosión y ensayos mecánicos apoyan el desarrollo de aleaciones y la verificación de los requisitos definidos para cada proyecto.',
    rollprofLabel: 'Control de perfil',
    rollprofTitle: 'Medición especializada con Rollprof',
    rollprofDesc: 'Aceros realiza la medición de perfiles en rodillos de horno, furnace rolls y sink rolls con un profesional formado por Drever, Bélgica.',
    rollprofRolls: 'rodillos controlados', rollprofStandards: 'patrones trazables',
    rollprofImgAlt: 'Perfilómetro Rollprof midiendo un rodillo industrial',
    inspectionEyebrow: 'Capacidad de inspección',
    inspectionTitle: 'Equipos, ensayos y procesos cualificados',
    traceEyebrowIcon: 'Trazabilidad y documentación',
    traceTitle: 'Ensayos y documentación según el proyecto',
    traceLead: 'Según los requisitos acordados, el suministro puede incluir análisis químico, dureza, ultrasonido, trazabilidad y registros del proceso.',
    traceFooter: 'Documentación técnica organizada para trazabilidad y auditoría industrial.',
    capacidades: [
      { etiqueta: 'Ensayo no destructivo', titulo: 'Ultrasonido en piezas fundidas y mecanizadas', descricao: 'Verificación de discontinuidades internas e integridad estructural sin dañar la pieza.', alt: 'Equipo de ultrasonido Krautkramer USM 36 utilizado en el control de calidad de Aceros' },
      { etiqueta: 'Análisis químico', titulo: 'Composición de la aleación controlada en la fusión', descricao: 'Se preparan y analizan muestras para orientar las correcciones necesarias durante el proceso.', alt: 'Espectrómetro de emisión óptica Spectromax utilizado por Aceros' },
      { etiqueta: 'Metrología', titulo: 'Medición en ambiente climatizado', descricao: 'Instrumentos y patrones calibrados y trazables por RBC para el control dimensional de gran tamaño.', alt: 'Sala de metrología climatizada de Aceros' },
      { etiqueta: 'Ensayo de dureza', titulo: 'Durómetro con control calibrado', descricao: 'Verificación de las propiedades mecánicas previstas para cada aleación y etapa del proceso productivo.', alt: 'Durómetro Mitutoyo utilizado en el control de dureza de Aceros' },
    ],
    equipamentos: [
      { nome: 'Spectromax', tipo: 'Análisis químico', descricao: 'Espectrometría de emisión óptica durante la fusión para controlar la composición y ajustar la aleación a la especificación del proyecto.' },
      { nome: 'Ultrasonido Krautkramer USM 36', tipo: 'Ensayo no destructivo', descricao: 'Inspección de piezas fundidas y mecanizadas para detectar discontinuidades internas, inclusiones y grietas subsuperficiales.' },
      { nome: 'Rollprof (perfilómetro)', tipo: 'Control de perfil', descricao: 'Medición de perfiles de rodillos de horno, furnace rolls y sink rolls por un profesional formado por Drever, Bélgica.' },
      { nome: 'Durómetro', tipo: 'Ensayo de dureza', descricao: 'Control de dureza a lo largo de la producción para verificar el cumplimiento de las propiedades mecánicas definidas en el proyecto.' },
      { nome: 'Ensayos de corrosión y mecánicos', tipo: 'Investigación y validación', descricao: 'Evaluaciones para estudiar el comportamiento de las aleaciones y apoyar mejoras en piezas resistentes al calor, abrasión y corrosión.' },
      { nome: 'Soldadura calificada', tipo: 'AWS D1.1 y ASME', descricao: 'Procedimientos TIG, MIG, MAG y electrodo revestido con WPS, PQR y calificación de soldadores certificados.' },
    ],
  },
  de: {
    certEyebrow: 'Zertifizierungen und Rückverfolgbarkeit',
    certTitle1: 'Dokumentierte ', certTitleAccent: 'Qualität',
    certLead: 'Die Zertifizierung des Managementsystems und die Kalibrierung der Geräte gewährleisten kontrollierte Prozesse und zuverlässige Ergebnisse.',
    isoLabel: 'Managementsystem', isoTitle: 'ISO 9001:2015',
    isoDesc: 'DQS-Zertifizierung mit DAkkS-Akkreditierung und IQNet-Anerkennung für den industriellen Geltungsbereich von Aceros.',
    isoCertLabel: 'Zertifikat', isoValidityLabel: 'Gültig bis',
    isoOpenDoc: 'Vollständiges Dokument öffnen ↗',
    isoImgAlt: 'ISO 9001:2015-Zertifikat von Aceros, gültig bis November 2028',
    isoLinkAria: 'ISO 9001:2015-Zertifikat von Aceros öffnen',
    spectroLabel: 'Technischer Nachweis',
    spectroTitle: 'Wartung und Kalibrierung des Spectromax',
    spectroDesc: 'Dokument Nr. 2044/19 zum optischen Emissionsspektrometer, das für die chemische Analyse der Legierungen verwendet wird.',
    spectroLinkAria: 'Nachweis der Wartung und Kalibrierung des Spektrometers öffnen',
    labEyebrow: 'Labor und Messtechnik',
    labTitle: 'Qualitätskontrolle in der Praxis',
    labLead: 'Chemische Analysen, Ultraschall, Härte, Korrosions- und Mechanikprüfungen unterstützen die Legierungsentwicklung und die Prüfung der projektspezifischen Anforderungen.',
    rollprofLabel: 'Profilkontrolle',
    rollprofTitle: 'Spezialisierte Messung mit Rollprof',
    rollprofDesc: 'Aceros führt die Profilmessung an Ofenrollen, Furnace Rolls und Sink Rolls durch – von Fachpersonal, geschult bei Drever, Belgien.',
    rollprofRolls: 'gemessene Rollen', rollprofStandards: 'rückverfolgbare Normale',
    rollprofImgAlt: 'Rollprof-Profilometer bei der Messung einer Industrierolle',
    inspectionEyebrow: 'Prüfkapazität',
    inspectionTitle: 'Qualifizierte Geräte, Prüfungen und Prozesse',
    traceEyebrowIcon: 'Rückverfolgbarkeit und Dokumentation',
    traceTitle: 'Prüfungen und Dokumentation gemäß Projektvorgabe',
    traceLead: 'Je nach vereinbarten Anforderungen können chemische Analyse, Härte, Ultraschall, Rückverfolgbarkeit und Prozessprotokolle Bestandteil der Lieferung sein.',
    traceFooter: 'Technische Dokumentation strukturiert für Rückverfolgbarkeit und Industrie-Audit.',
    capacidades: [
      { etiqueta: 'Zerstörungsfreie Prüfung', titulo: 'Ultraschall an Guss- und Bearbeitungsteilen', descricao: 'Prüfung innerer Diskontinuitäten und der strukturellen Integrität ohne Beschädigung des Bauteils.', alt: 'Ultraschallgerät Krautkramer USM 36 in der Aceros-Qualitätskontrolle' },
      { etiqueta: 'Chemische Analyse', titulo: 'Legierungszusammensetzung während der Schmelze kontrolliert', descricao: 'Proben werden vorbereitet und analysiert, um erforderliche Korrekturen im Prozess zu steuern.', alt: 'Optisches Emissionsspektrometer Spectromax bei Aceros' },
      { etiqueta: 'Messtechnik', titulo: 'Messung im klimatisierten Raum', descricao: 'Kalibrierte und über RBC rückverfolgbare Instrumente und Normale für die dimensionale Kontrolle großer Bauteile.', alt: 'Klimatisierter Messraum von Aceros' },
      { etiqueta: 'Härteprüfung', titulo: 'Kalibriertes Härteprüfgerät', descricao: 'Prüfung der für jede Legierung und Fertigungsstufe vorgesehenen mechanischen Eigenschaften.', alt: 'Mitutoyo-Härteprüfgerät in der Härtekontrolle von Aceros' },
    ],
    equipamentos: [
      { nome: 'Spectromax', tipo: 'Chemische Analyse', descricao: 'Optische Emissionsspektrometrie während der Schmelze zur Steuerung der Zusammensetzung und Anpassung an die Projektspezifikation.' },
      { nome: 'Ultraschall Krautkramer USM 36', tipo: 'Zerstörungsfreie Prüfung', descricao: 'Prüfung von Guss- und Bearbeitungsteilen zur Erkennung innerer Diskontinuitäten, Einschlüsse und oberflächennaher Risse.' },
      { nome: 'Rollprof (Profilometer)', tipo: 'Profilkontrolle', descricao: 'Profilmessung an Ofenrollen, Furnace Rolls und Sink Rolls durch bei Drever, Belgien, geschultes Fachpersonal.' },
      { nome: 'Härteprüfgerät', tipo: 'Härteprüfung', descricao: 'Härtekontrolle während der Produktion zur Prüfung der im Projekt definierten mechanischen Eigenschaften.' },
      { nome: 'Korrosions- und Mechanikprüfungen', tipo: 'Forschung und Validierung', descricao: 'Untersuchungen zum Verhalten der Legierungen und zur Unterstützung von Verbesserungen bei hitze-, verschleiß- und korrosionsbeständigen Bauteilen.' },
      { nome: 'Qualifiziertes Schweißen', tipo: 'AWS D1.1 und ASME', descricao: 'Verfahren WIG, MIG, MAG und Stabelektrode mit qualifizierten WPS, PQR und zertifiziertem Schweißpersonal.' },
    ],
  },
  it: {
    certEyebrow: 'Certificazioni e tracciabilità',
    certTitle1: 'Qualità ', certTitleAccent: 'documentata',
    certLead: 'La certificazione del sistema di gestione e la calibrazione delle apparecchiature lavorano insieme per garantire processi controllati e risultati affidabili.',
    isoLabel: 'Sistema di gestione', isoTitle: 'ISO 9001:2015',
    isoDesc: 'Certificazione DQS con accreditamento DAkkS e riconoscimento della rete IQNet per l\'ambito industriale di Aceros.',
    isoCertLabel: 'Certificato', isoValidityLabel: 'Validità',
    isoOpenDoc: 'Apri il documento completo ↗',
    isoImgAlt: 'Certificato ISO 9001:2015 di Aceros valido fino a novembre 2028',
    isoLinkAria: 'Apri il certificato ISO 9001:2015 di Aceros',
    spectroLabel: 'Registro tecnico',
    spectroTitle: 'Revisione e calibrazione Spectromax',
    spectroDesc: 'Documento nº 2044/19 relativo allo spettrometro a emissione ottica usato nell\'analisi chimica delle leghe.',
    spectroLinkAria: 'Apri il registro di revisione e calibrazione dello spettrometro',
    labEyebrow: 'Laboratorio e metrologia',
    labTitle: 'Il controllo qualità in pratica',
    labLead: 'Analisi chimiche, ultrasuoni, durezza, prove di corrosione e prove meccaniche supportano lo sviluppo delle leghe e la verifica dei requisiti definiti per ciascun progetto.',
    rollprofLabel: 'Controllo di profilo',
    rollprofTitle: 'Misurazione specializzata con Rollprof',
    rollprofDesc: 'Aceros esegue la misurazione dei profili di rulli da forno, furnace rolls e sink rolls con personale formato da Drever, Belgio.',
    rollprofRolls: 'rulli controllati', rollprofStandards: 'campioni tracciabili',
    rollprofImgAlt: 'Profilometro Rollprof durante la misurazione di un rullo industriale',
    inspectionEyebrow: 'Capacità di ispezione',
    inspectionTitle: 'Apparecchiature, prove e processi qualificati',
    traceEyebrowIcon: 'Tracciabilità e documentazione',
    traceTitle: 'Prove e documentazione secondo progetto',
    traceLead: 'Secondo i requisiti concordati, la fornitura può includere analisi chimica, durezza, ultrasuoni, tracciabilità e registrazioni di processo.',
    traceFooter: 'Documentazione tecnica organizzata per tracciabilità e audit industriale.',
    capacidades: [
      { etiqueta: 'Prova non distruttiva', titulo: 'Ultrasuoni su pezzi fusi e lavorati', descricao: 'Verifica delle discontinuità interne e dell\'integrità strutturale senza danneggiare il pezzo.', alt: 'Apparecchiatura a ultrasuoni Krautkramer USM 36 usata nel controllo qualità Aceros' },
      { etiqueta: 'Analisi chimica', titulo: 'Composizione della lega controllata in fusione', descricao: 'I campioni vengono preparati e analizzati per guidare le correzioni necessarie durante il processo.', alt: 'Spettrometro a emissione ottica Spectromax utilizzato da Aceros' },
      { etiqueta: 'Metrologia', titulo: 'Misurazione in ambiente climatizzato', descricao: 'Strumenti e campioni tarati e tracciabili tramite RBC per il controllo dimensionale di grandi dimensioni.', alt: 'Sala di metrologia climatizzata di Aceros' },
      { etiqueta: 'Prova di durezza', titulo: 'Durometro con controllo tarato', descricao: 'Verifica delle proprietà meccaniche previste per ciascuna lega e fase del processo produttivo.', alt: 'Durometro Mitutoyo usato nel controllo di durezza di Aceros' },
    ],
    equipamentos: [
      { nome: 'Spectromax', tipo: 'Analisi chimica', descricao: 'Spettrometria a emissione ottica durante la fusione per controllare la composizione e adeguare la lega alla specifica di progetto.' },
      { nome: 'Ultrasuoni Krautkramer USM 36', tipo: 'Prova non distruttiva', descricao: 'Ispezione di pezzi fusi e lavorati per individuare discontinuità interne, inclusioni e cricche sub-superficiali.' },
      { nome: 'Rollprof (profilometro)', tipo: 'Controllo di profilo', descricao: 'Misurazione dei profili di rulli da forno, furnace rolls e sink rolls con personale formato da Drever, Belgio.' },
      { nome: 'Durometro', tipo: 'Prova di durezza', descricao: 'Controllo di durezza lungo la produzione per verificare le proprietà meccaniche definite nel progetto.' },
      { nome: 'Prove di corrosione e meccaniche', tipo: 'Ricerca e validazione', descricao: 'Valutazioni per studiare il comportamento delle leghe e supportare miglioramenti su pezzi resistenti a calore, abrasione e corrosione.' },
      { nome: 'Saldatura qualificata', tipo: 'AWS D1.1 e ASME', descricao: 'Procedimenti TIG, MIG, MAG ed elettrodo rivestito con WPS, PQR e saldatori qualificati e certificati.' },
    ],
  },
};

const capacidadeMeta = [
  { imagem: '/images/imgur/Rb6onto.png', enquadramento: 'object-cover scale-[2.35] origin-[78%_50%]' },
  { imagem: '/images/aceros/drive/spectromax-real.jpg' },
  { imagem: '/images/aceros/drive/sala-metrologia-real.jpg' },
  { imagem: '/images/aceros/drive/durometro-mitutoyo-real.jpg', exibirInteira: true },
] as { imagem: string; enquadramento?: string; exibirInteira?: boolean }[];

const equipamentoIcons = [Beaker, Gauge, Ruler, ScanLine, Microscope, FileCheck];

export function QualityLab() {
  const { language } = useLanguage();
  const c = dict[language] ?? dict.pt;

  return (
    <>
      <section className="relative overflow-hidden bg-primary py-20 text-white">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-accent">
              <Award className="h-4 w-4" />
              {c.certEyebrow}
            </div>
            <h2 className="font-headline text-3xl font-bold uppercase leading-tight md:text-5xl">
              {c.certTitle1}<span className="text-accent">{c.certTitleAccent}</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">{c.certLead}</p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-2">
            <article className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] shadow-2xl">
              <div className="grid h-full sm:grid-cols-[0.92fr_1.08fr]">
                <Link href="/images/aceros/drive/certificado-iso.pdf" target="_blank" rel="noopener noreferrer" aria-label={c.isoLinkAria} className="flex min-h-[390px] items-center justify-center bg-white p-4">
                  <Image src="/images/aceros/generated/certificado-iso-2028.png" alt={c.isoImgAlt} width={795} height={1124} className="h-full max-h-[420px] w-auto object-contain" />
                </Link>
                <Link href="/images/aceros/drive/certificado-iso.pdf" target="_blank" rel="noopener noreferrer" aria-label={c.isoLinkAria} className="flex flex-col bg-neutral-800 p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{c.isoLabel}</p>
                  <h3 className="mt-3 font-headline text-2xl font-bold">{c.isoTitle}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{c.isoDesc}</p>
                  <dl className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
                    <div><dt className="text-slate-400">{c.isoCertLabel}</dt><dd className="font-mono font-bold text-white">60300915 QM15</dd></div>
                    <div><dt className="text-slate-400">{c.isoValidityLabel}</dt><dd className="font-bold text-white">19/11/2028</dd></div>
                  </dl>
                  <span className="mt-auto pt-6 text-sm font-semibold text-accent">{c.isoOpenDoc}</span>
                </Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] shadow-2xl">
              <div className="grid h-full sm:grid-cols-[1.08fr_0.92fr]">
                <Link href="/images/aceros/drive/certificado-calibracao-espectrometro.png" target="_blank" rel="noopener noreferrer" aria-label={c.spectroLinkAria} className="flex min-h-[390px] items-center justify-center bg-white p-3">
                  <Image src="/images/aceros/drive/certificado-calibracao-espectrometro.png" alt={c.spectroTitle} width={962} height={717} className="h-auto w-full object-contain" />
                </Link>
                <Link href="/images/aceros/drive/certificado-calibracao-espectrometro.png" target="_blank" rel="noopener noreferrer" aria-label={c.spectroLinkAria} className="flex flex-col bg-neutral-800 p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{c.spectroLabel}</p>
                  <h3 className="mt-3 font-headline text-2xl font-bold">{c.spectroTitle}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{c.spectroDesc}</p>
                  <span className="mt-auto pt-6 text-sm font-semibold text-accent">{c.isoOpenDoc}</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{c.labEyebrow}</p>
            <h2 className="font-headline text-3xl font-bold text-slate-900 md:text-4xl">{c.labTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">{c.labLead}</p>
          </div>
          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.capacidades.map((item, i) => {
              const meta = capacidadeMeta[i];
              return (
                <article key={item.titulo} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                      src={meta.imagem}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className={`${meta.enquadramento ?? (meta.exibirInteira ? 'object-contain p-2' : 'object-cover')} transition-transform duration-500 ${meta.enquadramento ? '' : 'group-hover:scale-105'}`}
                    />
                  </div>
                  <div className="p-6"><p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{item.etiqueta}</p><h3 className="mt-2 font-headline text-xl font-bold text-slate-900">{item.titulo}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.descricao}</p></div>
                </article>
              );
            })}
          </div>

          <article className="mx-auto mt-8 grid max-w-7xl overflow-hidden rounded-2xl bg-primary text-white shadow-xl md:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[320px] md:min-h-[390px]">
              <Image
                src="/images/aceros/drive/rollprof-inspecao-real.jpg"
                alt={c.rollprofImgAlt}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{c.rollprofLabel}</p>
              <h3 className="mt-3 font-headline text-3xl font-bold">{c.rollprofTitle}</h3>
              <p className="mt-5 leading-7 text-slate-300">{c.rollprofDesc}</p>
              <div className="mt-7 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div><strong className="block text-2xl text-white">+600</strong><span className="text-sm text-slate-400">{c.rollprofRolls}</span></div>
                <div><strong className="block text-2xl text-white">RBC</strong><span className="text-sm text-slate-400">{c.rollprofStandards}</span></div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{c.inspectionEyebrow}</p>
            <h2 className="font-headline text-3xl font-bold text-slate-900 md:text-4xl">{c.inspectionTitle}</h2>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {c.equipamentos.map((eq, i) => {
              const IconComp = equipamentoIcons[i] ?? Beaker;
              return (
                <article key={eq.nome} className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-accent hover:shadow-lg" style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="mb-4 inline-flex rounded-xl border border-slate-200 bg-slate-50 p-3"><IconComp className="h-6 w-6 text-accent" /></div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">{eq.tipo}</div>
                  <h3 className="font-headline text-lg font-bold text-slate-900">{eq.nome}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{eq.descricao}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-accent"><ShieldCheck className="h-4 w-4" /> {c.traceEyebrowIcon}</div>
            <h2 className="font-headline text-3xl font-bold text-slate-900 md:text-4xl">{c.traceTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{c.traceLead}</p>
            <p className="mt-5 text-sm italic text-slate-500">{c.traceFooter}</p>
          </div>
        </div>
      </section>
    </>
  );
}
