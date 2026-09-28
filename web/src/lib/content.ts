import { getCollection, type CollectionEntry } from 'astro:content';
import { collectionBase, otherLang, type Lang } from '../i18n/routes';

export type Guide = CollectionEntry<'guias'>;

export async function getGuides(lang: Lang) {
  const all = await getCollection('guias', (e) => e.data.lang === lang);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export const guidePath = (g: Guide) => `${collectionBase.guides[g.data.lang]}${g.data.slug}/`;

export async function guideAlt(g: Guide) {
  const other = otherLang(g.data.lang);
  const match = (await getCollection('guias')).find((e) => e.data.lang === other && e.data.key === g.data.key);
  return match ? guidePath(match) : undefined;
}
