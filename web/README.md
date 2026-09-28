# luxaivideo.com

Web multipágina bilingüe (ES/EN) de LUXAI, hecha con Astro 7 (estático).

## Comandos

Requiere Node 22.12 o superior.

```bash
npm install
npm run dev                    # http://localhost:4321
npm run build                  # genera dist/
npm run preview                # sirve dist/
node scripts/check-links.mjs   # tras el build: enlaces, metas, H1, canonical, hreflang y JSON-LD
npx astro check                # tipos
```

## Estructura

| Carpeta o archivo | Contenido |
|---|---|
| `src/data/site.ts` | Datos de negocio: precios, plazos, email, WhatsApp y endpoint del formulario |
| `src/data/demos.ts` | Demos (fotos, vídeos, textos ES/EN). Cada entrada genera su ficha, su VideoObject y su sitemap de vídeo |
| `src/i18n/routes.ts` | Pares de URL ES/EN; fuente única para navegación, hreflang y sitemaps |
| `src/i18n/ui.ts` | Textos de interfaz compartidos |
| `src/views/*View.astro` | Páginas. El copy va en objetos `es` y `en` dentro de cada vista |
| `src/copy/home.ts` | Copy de la home |
| `src/content/guias/{es,en}/*.md` | Guías, emparejadas por `key` |
| `src/legal/*.html` | Textos legales |
| `src/scripts/site.ts` | Comportamiento global: cabecera, menú, modal, formulario, vídeos y revelados |
| `src/scripts/core.ts` | Carga de GSAP y Lenis (sin animaciones con `prefers-reduced-motion`) |
| `src/lib/seo.ts` | Schema.org (`@graph`) |
| `src/pages/sitemap-*.xml.ts` | Sitemaps de páginas (con hreflang) y de vídeo |
| `public/` | Vídeos optimizados, `robots.txt`, `llms.txt`, `_redirects` y `_headers` (Cloudflare Pages) |

## Despliegue en Cloudflare Pages

1. Comando de build `npm run build`, directorio de salida `dist`.
2. Variable de entorno `NODE_VERSION=22`.
