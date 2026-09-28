/**
 * Datos de negocio verificados en la web publicada (27 sep 2026).
 * Si cambia un precio o un plazo, se cambia AQUÍ y se actualiza en todas las páginas y en el schema.
 */
export const SITE = {
  name: 'LUXAI',
  url: 'https://luxaivideo.com',
  email: 'contacto@luxaivideo.com',
  /** [CONFIRMAR] Número de WhatsApp en formato internacional (p. ej. 34600000000). Vacío = el botón no se muestra. */
  whatsapp: '',
  /** Endpoint normal de FormSubmit (funciona sin JS). Con JS se envía al de AJAX (/ajax/). [RECOMENDADO] sustituir el email por el alias aleatorio que da FormSubmit. */
  formEndpoint: 'https://formsubmit.co/contacto@luxaivideo.com',
  region: 'Illes Balears',
  country: 'ES',
  areas: ['Mallorca', 'Costa del Sol', 'Costa Blanca', 'Canarias'],
  responseTime: { es: 'menos de 24 h', en: 'under 24 hours' },
  demoTurnaround: '72 h',
  photos: { min: 5, max: 15, minRes: '1920 × 1080' },
  clipLength: '20–30 s',
  mainFilmLength: '45–60 s',
  launchOfferSlots: 10,
} as const;

export type PackId = 'esencial' | 'profesional' | 'agencia';

export interface Pack {
  id: PackId;
  price: number;
  videos: number;
  mainFilm: boolean;
  perVideo: number | null;
  photos: number;
  vertical: boolean;
  musicBranding: boolean;
  deliveryDays: { es: string; en: string };
  revisions: number;
  featured: boolean;
}

export const PACKS: Pack[] = [
  {
    id: 'esencial',
    price: 129,
    videos: 1,
    mainFilm: false,
    perVideo: null,
    photos: 2,
    vertical: false,
    musicBranding: false,
    deliveryDays: { es: '72 h', en: '72 hours' },
    revisions: 1,
    featured: false,
  },
  {
    id: 'profesional',
    price: 379,
    videos: 4,
    mainFilm: false,
    perVideo: 95,
    photos: 6,
    vertical: true,
    musicBranding: true,
    deliveryDays: { es: '72 h', en: '72 hours' },
    revisions: 2,
    featured: true,
  },
  {
    id: 'agencia',
    price: 649,
    videos: 8,
    mainFilm: true,
    perVideo: 81,
    photos: 15,
    vertical: true,
    musicBranding: true,
    deliveryDays: { es: '5 días laborables', en: '5 business days' },
    revisions: 3,
    featured: false,
  },
];

export const packName = {
  esencial: { es: 'Esencial', en: 'Essential' },
  profesional: { es: 'Profesional', en: 'Professional' },
  agencia: { es: 'Agencia', en: 'Agency' },
} as const;
