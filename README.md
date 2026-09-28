# LUXAI · luxaivideo.com

Web de LUXAI Video: vídeo inmobiliario con IA para villas de lujo. Es multipágina, en español e inglés, y está hecha con Astro.

| Carpeta o archivo | Contenido |
|---|---|
| `web/` | Proyecto Astro. `npm run build` genera `web/dist/` |
| `herramientas/demos/` | Proceso de las demos por paralaje de profundidad (cada plano sale de una sola foto) |
| `media-originales/media/demos/` | Fotos de partida de las dos demos |
| `seo/` | Auditoría, mapa de keywords, investigación e informes de Lighthouse |
| `INFORME.md` | Estado del proyecto, pendientes y pasos para publicar |
| `DECISIONES.md` | Decisiones tomadas, cada una con su motivo |
| `ESTILO-COPY.md` | Voz de la marca y marcas de los titulares (`\|` y `*`) |
| `PROMPT-mejora-web-luxai.md` | Encargo original del rediseño |

## Trabajar en local

Requiere Node 22.12 o superior.

```bash
cd web
npm install
npm run dev                    # http://localhost:4321
npm run build                  # genera dist/
node scripts/check-links.mjs   # enlaces, metas, hreflang, JSON-LD y sitemaps
```

## Versiones

- `main`: estilo claro, con el menú en cápsula que se expande en panel.
- Etiqueta `estilo-oscuro`: la versión anterior, oscura y dorada.

## Publicar

- **Definitiva:** Cloudflare Pages, con raíz `web/`, comando `npm run build`, salida `dist` y `NODE_VERSION=22`. Los pasos completos están en `INFORME.md`.
- **Vista previa (no indexable):** `bash web/scripts/vista-previa-vercel.sh` publica en https://luxaivideo.vercel.app.
