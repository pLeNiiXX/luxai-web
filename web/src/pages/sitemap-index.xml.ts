import type { APIRoute } from 'astro';
import { abs } from '../i18n/routes';

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n<sitemap><loc>${abs('/sitemap-pages.xml')}</loc><lastmod>${today}</lastmod></sitemap>\n<sitemap><loc>${abs('/sitemap-video.xml')}</loc><lastmod>${today}</lastmod></sitemap>\n</sitemapindex>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
