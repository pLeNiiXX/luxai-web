import type { APIRoute } from 'astro';
import { getImage } from 'astro:assets';
import { abs, collectionBase } from '../i18n/routes';
import { DEMOS } from '../data/demos';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async () => {
  const entries: string[] = [];
  for (const d of DEMOS) {
    const thumb = await getImage({ src: d.poster, width: 1280, format: 'jpg', quality: 78 });
    for (const lang of ['es', 'en'] as const) {
      entries.push(`<url><loc>${abs(`${collectionBase.demos[lang]}${d.slug[lang]}/`)}</loc><video:video>` +
        `<video:thumbnail_loc>${abs(thumb.src)}</video:thumbnail_loc>` +
        `<video:title>${esc(`${d.title[lang]} · LUXAI`)}</video:title>` +
        `<video:description>${esc(d.description[lang])}</video:description>` +
        `<video:content_loc>${abs(d.video.mp4)}</video:content_loc>` +
        `<video:duration>${d.video.durationSec}</video:duration>` +
        `<video:publication_date>2026-09-26</video:publication_date>` +
        `<video:family_friendly>yes</video:family_friendly>` +
        `</video:video></url>`);
    }
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n${entries.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
