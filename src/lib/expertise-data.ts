
import type { IconName } from './icon-map';

export type Qualification = {
  icon: IconName;
  title: string;
  description: string;
};

export const qualificationsData = (t: any): Qualification[] => [
  {
    icon: 'Award',
    title: t.qualifications.items[0].title,
    description: t.qualifications.items[0].description,
  },
  {
    icon: 'Star',
    title: t.qualifications.items[1].title,
    description: t.qualifications.items[1].description,
  },
  {
    icon: 'ShieldCheck',
    title: t.qualifications.items[2].title,
    description: t.qualifications.items[2].description,
  },
  {
    icon: 'Zap',
    title: t.qualifications.items[3].title,
    description: t.qualifications.items[3].description,
  },
];

export type SectorSolution = {
  id: string;
  icon: IconName;
  title: string;
  description: string;
};

export type Sector = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cardDescription: string;
  icon: IconName;
  heroImageId: string;
  featureImageId: string;
  galleryImageIds?: string[];
  videoUrl?: string;
  videoUrls?: string[];
  solutions: SectorSolution[];
};

const solutionsBase: Record<string, { id: string; icon: IconName }[]> = {
    mineracao: [
        { id: 'mining_crusher_components', icon: 'Component' },
        { id: 'mining_sieving_parts', icon: 'Zap' },
        { id: 'mining_conveyor_systems', icon: 'ShieldCheck' },
    ],
    naval: [
        { id: 'naval_shaft_bushings', icon: 'Component' },
        { id: 'naval_propeller_components', icon: 'Zap' },
        { id: 'naval_system_pipes', icon: 'ShieldCheck' },
    ],
    siderurgia: [
        { id: 'siderurgia_continuous_casting', icon: 'Layers' },
        { id: 'siderurgia_tunnel_furnace_rollers', icon: 'Layers' },
        { id: 'siderurgia_hot_strip_mill_rollers', icon: 'Layers' },
        { id: 'siderurgia_capl_cgl_furnace', icon: 'Layers' },
        { id: 'siderurgia_hot_dip_galvanizing', icon: 'Layers' },
        { id: 'siderurgia_walking_beam_furnaces', icon: 'Layers' },
        { id: 'siderurgia_bar_furnace_parts', icon: 'Layers' },
    ],
    oleo_e_gas: [
        { id: 'oil_gas_valve_components', icon: 'Component' },
        { id: 'oil_gas_refinery_furnace_tubes', icon: 'Zap' },
        { id: 'oil_gas_subsea_equipment_parts', icon: 'ShieldCheck' },
    ],
    guseira: [
        { id: 'pig_iron_blast_furnace_components', icon: 'Component' },
        { id: 'pig_iron_torpedo_cars_ladles', icon: 'Zap' },
        { id: 'pig_iron_casting_systems', icon: 'ShieldCheck' },
    ],
    tratamento_termico: [
        { id: 'heat_treatment_grids_baskets', icon: 'Component' },
        { id: 'heat_treatment_rollers_radiant_tubes', icon: 'Zap' },
        { id: 'heat_treatment_spare_parts', icon: 'ShieldCheck' },
    ],
    engenharia: [
        { id: 'engineering_metallurgical_consulting', icon: 'Component' },
        { id: 'engineering_alloy_development', icon: 'Zap' },
        { id: 'engineering_component_design', icon: 'Lightbulb' },
    ],
    certificados: [],
};


export const sectorsData = (t: any): Sector[] => {
  if (!t || !t.expertise_sectors) {
    return [];
  }
  const tSectors = t.expertise_sectors;
  // Ordem por faturamento (confirmado pelo Daniel):
  // Mineração > Tratamento Térmico > Naval > Siderurgia > Guseira > Óleo & Gás
  const sectorIds = [
    'mineracao', 'tratamento_termico', 'naval', 'siderurgia',
    'guseira', 'oleo_e_gas', 'engenharia', 'certificados'
  ];

  return sectorIds.map(id => {
    const sectorTranslations = tSectors[id];
    const baseSolutions = solutionsBase[id] || [];
    
    const solutions = baseSolutions.map(sol => {
      const solutionTranslations = sectorTranslations?.solutions[sol.id];
      return {
        ...sol,
        title: solutionTranslations?.title || sol.id,
        description: solutionTranslations?.description || '',
      };
    });

    // Define a imagem do hero para 'certificados' como 'qualifications-hero'
    const heroImageId = `${id}-hero`;

    let videoUrls: string[] = [];
    if (id === 'mineracao') {
      videoUrls = [
        'https://player.cloudinary.com/embed/?cloud_name=dhsn2oxv5&public_id=tf_kpninn&profile=cld-default',
        'https://player.cloudinary.com/embed/?cloud_name=dhsn2oxv5&public_id=VID-20251115-WA0058_gntans&profile=cld-default',
        'https://player.cloudinary.com/embed/?cloud_name=dhsn2oxv5&public_id=VID-20251115-WA0068_lis5ad&profile=cld-default',
        'https://player.cloudinary.com/embed/?cloud_name=dhsn2oxv5&public_id=VID-20251115-WA0056_bpewfx&profile=cld-default',
      ];
    } else if (id === 'siderurgia') {
       videoUrls = [
        'https://res.cloudinary.com/dhsn2oxv5/video/upload/v1766405901/WhatsApp_Video_2025-12-21_at_14.38.20_cixbdt.mp4',
        'https://res.cloudinary.com/dhsn2oxv5/video/upload/v1766401871/WhatsApp_Video_2025-12-21_at_14.38.17_kdg7wu.mp4',
      ];
    } else if (id === 'guseira') {
      videoUrls = [
        'https://res.cloudinary.com/dhsn2oxv5/video/upload/v1764415184/VID-20251115-WA0058_gntans.mp4',
        'https://res.cloudinary.com/dhsn2oxv5/video/upload/v1763605197/VID-20251115-WA0057_iy6qug.mp4',
      ];
    } else if (id === 'tratamento_termico') {
      videoUrls = [
        'https://res.cloudinary.com/dhsn2oxv5/video/upload/v1766401871/WhatsApp_Video_2025-12-21_at_14.38.23_hvywoy.mp4',
        'https://res.cloudinary.com/dhsn2oxv5/video/upload/v1766401871/WhatsApp_Video_2025-12-21_at_14.38.17_kdg7wu.mp4'
      ];
    }
    
    let galleryImageIds: string[] = [];
    if (id === 'naval') {
      galleryImageIds = ['naval-gallery-1', 'naval-gallery-2', 'naval-gallery-3'];
    } else if (id === 'siderurgia') {
      galleryImageIds = ['steel-gallery-1', 'steel-gallery-2', 'steel-gallery-3'];
    } else if (id === 'tratamento_termico') {
      galleryImageIds = ['heat-treatment-gallery-1', 'heat-treatment-gallery-2', 'heat-treatment-gallery-3'];
    } else if (id === 'guseira') {
      galleryImageIds = ['guseira-new-media-1', 'guseira-new-media-2'];
    }


    return {
      id: id,
      title: sectorTranslations.title,
      subtitle: sectorTranslations.subtitle,
      description: sectorTranslations.description,
      cardDescription: sectorTranslations.cardDescription,
      icon: sectorTranslations.icon as IconName,
      heroImageId: heroImageId,
      featureImageId: `${id}-feature`,
      galleryImageIds: galleryImageIds,
      videoUrls: videoUrls,
      solutions: solutions,
    };
  });
};
