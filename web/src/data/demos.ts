import type { ImageMetadata } from 'astro';
import d1p1 from '../assets/demos/demo-01/photo-1.webp';
import d1p2 from '../assets/demos/demo-01/photo-2.webp';
import d1p3 from '../assets/demos/demo-01/photo-3.webp';
import d1p4 from '../assets/demos/demo-01/photo-4.webp';
import d1poster from '../assets/demos/demo-01/poster.webp';
import d2p1 from '../assets/demos/demo-02/photo-1.webp';
import d2p2 from '../assets/demos/demo-02/photo-2.webp';
import d2p3 from '../assets/demos/demo-02/photo-3.webp';
import d2p4 from '../assets/demos/demo-02/photo-4.webp';
import d2p5 from '../assets/demos/demo-02/photo-5.webp';
import d2poster from '../assets/demos/demo-02/poster.webp';
import type { Lang } from '../i18n/routes';

type L<T = string> = Record<Lang, T>;

export interface Demo {
  key: string;
  num: string;
  slug: L;
  title: L;
  tagline: L;
  summary: L;
  /** Descripción larga para la ficha y el VideoObject */
  description: L;
  /** Planos que componen la pieza, en orden */
  shots: L<string[]>;
  style: L;
  photos: { src: ImageMetadata; alt: L }[];
  poster: ImageMetadata;
  video: { mp4: string; webm: string; preview: string; durationSec: number; iso: string; width: number; height: number };
  /** Nombre único para la transición de elemento compartido entre tarjeta y ficha */
  vt: string;
}

export const DEMOS: Demo[] = [
  {
    key: 'villa-costa',
    num: '01',
    slug: { es: 'villa-contemporanea-costa', en: 'coastal-contemporary-villa' },
    title: { es: 'Villa Contemporánea Costa', en: 'Coastal Contemporary Villa' },
    tagline: {
      es: 'Piscina infinita, pista de tenis y atardecer sobre el mar',
      en: 'Infinity pool, tennis court and an oceanfront sunset',
    },
    summary: {
      es: '4 fotografías → 1 vídeo de 16 s',
      en: '4 photographs → 1 film of 16 s',
    },
    description: {
      es: 'Secuencia de 16 segundos a partir de 4 fotografías de la villa: piscina infinita, entrada principal, terraza al atardecer y vista aérea final. Cada plano sale de una sola foto: la IA calcula su profundidad y la cámara se mueve dentro de ella, sin estancias ni objetos añadidos.',
      en: 'A 16-second sequence from 4 photographs of the villa: infinity pool, main entrance, sunset terrace and a final aerial view. Every shot comes from a single photo: the AI computes its depth and the camera moves inside it, with no rooms or objects added.',
    },
    shots: {
      es: [
        'Deslizamiento lateral sobre la piscina infinita, con la fachada al fondo (foto 1).',
        'Avance hacia la entrada principal entre palmeras (foto 3).',
        'Elevación suave sobre la terraza superior y la pista de tenis al atardecer (foto 2).',
        'Vista aérea que se abre sobre la parcela y el mar (foto 4).',
      ],
      en: [
        'A lateral glide across the infinity pool, with the façade behind (photo 1).',
        'A push towards the main entrance between the palms (photo 3).',
        'A gentle rise over the upper terrace and the tennis court at sunset (photo 2).',
        'An aerial view that opens out over the plot and the sea (photo 4).',
      ],
    },
    style: { es: 'Contemporánea · costa', en: 'Contemporary · coastal' },
    photos: [
      { src: d1p1, alt: { es: 'Piscina infinita y fachada contemporánea', en: 'Infinity pool and contemporary façade' } },
      { src: d1p2, alt: { es: 'Terraza superior, pista de tenis y piscina al atardecer', en: 'Upper deck, tennis court and pool at dusk' } },
      { src: d1p3, alt: { es: 'Entrada principal con palmeras y rotonda', en: 'Main entrance with palms and driveway' } },
      { src: d1p4, alt: { es: 'Vista panorámica aérea de la villa sobre el mar', en: 'Panoramic aerial view of the villa above the sea' } },
    ],
    poster: d1poster,
    video: {
      mp4: '/media/demos/demo-01/video-1080.mp4',
      webm: '/media/demos/demo-01/video-1080.webm',
      preview: '/media/demos/demo-01/preview.mp4',
      durationSec: 16,
      iso: 'PT15.9S',
      width: 1920,
      height: 1080,
    },
    vt: 'demo-villa-costa',
  },
  {
    key: 'finca-rustica',
    num: '02',
    slug: { es: 'finca-rustica-mediterranea', en: 'mediterranean-rustic-estate' },
    title: { es: 'Finca Rústica Mediterránea', en: 'Mediterranean Rustic Estate' },
    tagline: {
      es: 'Piedra natural, piscina privada y olivos centenarios',
      en: 'Natural stone, a private pool and century-old olive trees',
    },
    summary: {
      es: '5 fotografías → 1 vídeo de 24 s',
      en: '5 photographs → 1 film of 24 s',
    },
    description: {
      es: 'Secuencia de 24 segundos a partir de 5 fotografías: camino de lavanda, portalón de madera, salón con chimenea, piscina de piedra y vista aérea final. Cada plano sale de una sola foto: la IA calcula su profundidad y la cámara se mueve dentro de ella, sin estancias ni objetos añadidos.',
      en: 'A 24-second sequence from 5 photographs: lavender path, wooden door, living room with fireplace, stone pool and a final aerial view. Every shot comes from a single photo: the AI computes its depth and the camera moves inside it, with no rooms or objects added.',
    },
    shots: {
      es: [
        'Avance por el camino de piedra entre lavandas hacia la entrada (foto 1).',
        'Acercamiento al portalón de madera entre los dos olivos en maceta (foto 3).',
        'Deslizamiento lateral por el salón con chimenea y techo de vigas (foto 5).',
        'Deslizamiento junto a la piscina de piedra entre cipreses (foto 4).',
        'Vista aérea que se abre sobre la finca, los viñedos y los olivos (foto 2).',
      ],
      en: [
        'A push along the stone path between the lavender towards the entrance (photo 1).',
        'A slow approach to the wooden door between the two potted olive trees (photo 3).',
        'A lateral glide through the living room with its fireplace and beamed ceiling (photo 5).',
        'A glide alongside the stone pool between the cypresses (photo 4).',
        'An aerial view that opens out over the estate, its vineyards and olive groves (photo 2).',
      ],
    },
    style: { es: 'Rústica · mediterránea', en: 'Rustic · Mediterranean' },
    photos: [
      { src: d2p1, alt: { es: 'Camino de piedra con lavanda hacia la entrada principal', en: 'Stone path with lavender leading to the entrance' } },
      { src: d2p2, alt: { es: 'Vista aérea de la finca con piscina entre viñedos y olivos', en: 'Aerial view of the estate and pool among vineyards and olive groves' } },
      { src: d2p3, alt: { es: 'Porche rústico con arcos y portalón de madera maciza', en: 'Rustic arched porch with a solid wood door' } },
      { src: d2p4, alt: { es: 'Piscina de piedra natural con tumbonas y cipreses', en: 'Natural stone pool with loungers and cypress trees' } },
      { src: d2p5, alt: { es: 'Salón señorial con chimenea, arcos y techo de vigas de madera', en: 'Grand living room with fireplace, arches and exposed timber beams' } },
    ],
    poster: d2poster,
    video: {
      mp4: '/media/demos/demo-02/video-1080.mp4',
      webm: '/media/demos/demo-02/video-1080.webm',
      preview: '/media/demos/demo-02/preview.mp4',
      durationSec: 24,
      iso: 'PT24S',
      width: 1920,
      height: 1080,
    },
    vt: 'demo-finca-rustica',
  },
];

export const demoBySlug = (lang: Lang, slug: string) => DEMOS.find((d) => d.slug[lang] === slug);
