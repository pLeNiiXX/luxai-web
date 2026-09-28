export type Lang = 'es' | 'en';
export const LANGS: Lang[] = ['es', 'en'];
export const DEFAULT_LANG: Lang = 'es';

/**
 * Rutas estáticas con su pareja en el otro idioma.
 * Única fuente de verdad para navegación, hreflang, migas y sitemap.
 * Las páginas de colecciones (guías, demos) se resuelven con su `key`.
 */
export const routes = {
  home: { es: '/', en: '/en/' },
  demos: { es: '/demostraciones/', en: '/en/demos/' },
  pricing: { es: '/precios/', en: '/en/pricing/' },
  how: { es: '/como-funciona/', en: '/en/how-it-works/' },
  agencies: { es: '/video-para-inmobiliarias/', en: '/en/real-estate-agencies/' },
  rentals: { es: '/video-alquiler-vacacional/', en: '/en/luxury-vacation-rentals/' },
  guides: { es: '/guias/', en: '/en/guides/' },
  faq: { es: '/preguntas-frecuentes/', en: '/en/faq/' },
  about: { es: '/sobre-luxai/', en: '/en/about/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
  legal: { es: '/aviso-legal/', en: '/en/aviso-legal/' },
  privacy: { es: '/privacidad/', en: '/en/privacidad/' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

/** Prefijos de las colecciones por idioma */
export const collectionBase = {
  demos: { es: '/demostraciones/', en: '/en/demos/' },
  guides: { es: '/guias/', en: '/en/guides/' },
} as const;

export const url = (key: RouteKey, lang: Lang) => routes[key][lang];

export const SITE_URL = 'https://luxaivideo.com';
export const abs = (path: string) => new URL(path, SITE_URL).href;

export const otherLang = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');

export const htmlLang = { es: 'es', en: 'en' } as const;
export const ogLocale = { es: 'es_ES', en: 'en_GB' } as const;
