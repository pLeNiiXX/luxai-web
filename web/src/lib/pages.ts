import { getCollection } from 'astro:content';
import { routes, collectionBase, type Lang } from '../i18n/routes';
import { DEMOS } from '../data/demos';

export interface PagePair { es?: string; en?: string; lastmod?: Partial<Record<Lang, string>> }

/** Todas las páginas indexables, emparejadas por idioma (para sitemaps). */
export async function allPagePairs(): Promise<PagePair[]> {
  const pairs: PagePair[] = Object.values(routes).map((p) => ({ es: p.es, en: p.en }));
  for (const d of DEMOS) pairs.push({ es: `${collectionBase.demos.es}${d.slug.es}/`, en: `${collectionBase.demos.en}${d.slug.en}/` });
  const byKey = new Map<string, PagePair>();
  for (const g of await getCollection('guias')) {
    const e = byKey.get(g.data.key) ?? {};
    e[g.data.lang as Lang] = `${collectionBase.guides[g.data.lang as Lang]}${g.data.slug}/`;
    e.lastmod = { ...e.lastmod, [g.data.lang]: g.data.updated.toISOString().slice(0, 10) };
    byKey.set(g.data.key, e);
  }
  pairs.push(...byKey.values());
  return pairs;
}
