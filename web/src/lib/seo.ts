import { SITE, PACKS, packName } from '../data/site';
import type { Demo } from '../data/demos';
import { abs, routes, type Lang } from '../i18n/routes';

export const BUSINESS_ID = `${SITE.url}/#business`;
export const WEBSITE_ID = `${SITE.url}/#website`;

const businessDescription = {
  es: 'Estudio de vídeo inmobiliario con IA: convertimos fotos reales de villas y propiedades de lujo en vídeos cinematográficos de estilo aéreo, sin rodaje ni dron. Entrega en 72 h.',
  en: 'AI real estate video studio: we turn real photographs of luxury villas and properties into cinematic aerial-style films, with no shoot and no drone. Delivered in 72 hours.',
};

/** Nodos comunes a todas las páginas */
export function baseGraph(lang: Lang) {
  return [
    {
      '@type': 'ProfessionalService',
      '@id': BUSINESS_ID,
      name: SITE.name,
      alternateName: 'LUXAI Video',
      url: `${SITE.url}/`,
      logo: abs('/brand/emblema.png'),
      image: abs('/og-image.jpg'),
      description: businessDescription[lang],
      email: SITE.email,
      priceRange: '€€€',
      currenciesAccepted: 'EUR',
      address: { '@type': 'PostalAddress', addressRegion: SITE.region, addressCountry: SITE.country },
      areaServed: [
        ...SITE.areas.map((name) => ({ '@type': 'Place', name })),
        { '@type': 'Country', name: 'España' },
      ],
      knowsAbout: [
        'AI real estate video',
        'Luxury real estate marketing',
        'Aerial-style property video',
        'Vacation rental marketing',
        'Real estate photography retouching',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: SITE.email,
        availableLanguage: ['es', 'en'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE.url}/`,
      name: SITE.name,
      alternateName: 'LUXAI Video',
      inLanguage: ['es', 'en'],
      publisher: { '@id': BUSINESS_ID },
    },
  ];
}

export interface Crumb { name: string; path: string }

export function webPageNode(opts: {
  path: string;
  name: string;
  description: string;
  lang: Lang;
  type?: string;
  image?: string;
  hasBreadcrumb?: boolean;
}) {
  const u = abs(opts.path);
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': `${u}#webpage`,
    url: u,
    name: opts.name,
    description: opts.description,
    inLanguage: opts.lang,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
    ...(opts.image ? { primaryImageOfPage: { '@type': 'ImageObject', url: abs(opts.image) } } : {}),
    ...(opts.hasBreadcrumb ? { breadcrumb: { '@id': `${u}#breadcrumb` } } : {}),
  };
}

export function breadcrumbNode(path: string, crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${abs(path)}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

const serviceName = {
  es: 'Vídeo inmobiliario con IA a partir de fotografías',
  en: 'AI real estate video from photographs',
};
const serviceDesc = {
  es: 'Producción de vídeos cinematográficos de estilo aéreo con inteligencia artificial a partir de las fotos reales de la propiedad, para villas de lujo, inmobiliarias y alquiler vacacional. Formatos 16:9 y 9:16, entrega en 72 h.',
  en: 'Cinematic aerial-style films produced with artificial intelligence from a property’s real photographs, for luxury villas, real estate agencies and vacation rentals. 16:9 and 9:16 formats, delivered in 72 hours.',
};

export function serviceNode(lang: Lang, path: string) {
  return {
    '@type': 'Service',
    '@id': `${abs(path)}#service`,
    name: serviceName[lang],
    serviceType: lang === 'es' ? 'Producción de vídeo inmobiliario con IA' : 'AI real estate video production',
    description: serviceDesc[lang],
    provider: { '@id': BUSINESS_ID },
    areaServed: [...SITE.areas.map((name) => ({ '@type': 'Place', name })), { '@type': 'Country', name: 'España' }],
    audience: { '@type': 'BusinessAudience', audienceType: lang === 'es' ? 'Inmobiliarias de lujo y gestores de alquiler vacacional' : 'Luxury real estate agencies and vacation rental managers' },
    offers: PACKS.map((p) => ({
      '@type': 'Offer',
      name: packName[p.id][lang],
      price: p.price,
      priceCurrency: 'EUR',
      url: abs(routes.pricing[lang]),
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: p.price,
        priceCurrency: 'EUR',
        valueAddedTaxIncluded: false,
      },
    })),
  };
}

/** Fecha de publicación de las demos: primera fecha verificable en la web (aviso legal actualizado el 26/09/2026). */
const DEMO_UPLOAD_DATE = '2026-09-26T00:00:00+02:00';

export function videoNode(demo: Demo, lang: Lang, pagePath: string, thumb?: string) {
  return {
    '@type': 'VideoObject',
    '@id': `${abs(pagePath)}#video`,
    name: `${demo.title[lang]} · LUXAI`,
    description: demo.description[lang],
    thumbnailUrl: [abs(thumb ?? demo.poster.src)],
    uploadDate: DEMO_UPLOAD_DATE,
    duration: demo.video.iso,
    contentUrl: abs(demo.video.mp4),
    width: demo.video.width,
    height: demo.video.height,
    inLanguage: lang,
    publisher: { '@id': BUSINESS_ID },
    creator: { '@id': BUSINESS_ID },
  };
}

export function faqNode(path: string, items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${abs(path)}#faq`,
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: stripTags(i.a) },
    })),
  };
}

export function articleNode(opts: {
  path: string;
  headline: string;
  description: string;
  lang: Lang;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  const u = abs(opts.path);
  return {
    '@type': 'Article',
    '@id': `${u}#article`,
    headline: opts.headline,
    description: opts.description,
    inLanguage: opts.lang,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    mainEntityOfPage: { '@id': `${u}#webpage` },
    author: { '@id': BUSINESS_ID },
    publisher: { '@id': BUSINESS_ID },
    ...(opts.image ? { image: abs(opts.image) } : {}),
  };
}

export function itemListNode(path: string, items: { name: string; path: string }[]) {
  return {
    '@type': 'ItemList',
    '@id': `${abs(path)}#list`,
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: abs(it.path) })),
  };
}

export const stripTags = (s: string) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
