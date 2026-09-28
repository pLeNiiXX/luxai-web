import type { APIRoute } from 'astro';
import { abs } from '../i18n/routes';
import { allPagePairs } from '../lib/pages';

export const GET: APIRoute = async () => {
  const pairs = await allPagePairs();
  const urls = pairs.flatMap((p) =>
    (['es', 'en'] as const)
      .filter((l) => p[l])
      .map((l) => {
        const alts = p.es && p.en
          ? `<xhtml:link rel="alternate" hreflang="es" href="${abs(p.es)}"/><xhtml:link rel="alternate" hreflang="en" href="${abs(p.en)}"/><xhtml:link rel="alternate" hreflang="x-default" href="${abs(p.es)}"/>`
          : '';
        const lm = p.lastmod?.[l];
        return `<url><loc>${abs(p[l]!)}</loc>${lm ? `<lastmod>${lm}</lastmod>` : ''}${alts}</url>`;
      }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
