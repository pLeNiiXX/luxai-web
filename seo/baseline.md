# Punto de partida y comparación (Lighthouse 13.5)

Medido el 27/09/2026 con Chrome sin interfaz (headless) y la configuración estándar de Lighthouse: móvil con red y CPU simuladas, y escritorio con el preset `desktop`. La web actual se midió en https://luxaivideo.com/; la nueva, en el build local (`astro preview`). Las filas marcadas como «final» son posteriores a la revisión de código. El resto, anteriores: en ellas la accesibilidad salía en 96 por un parpadeo de las animaciones de entrada, ya corregido.

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | Peso total |
|---|---|---|---|---|---|---|---|
| Web actual · home · móvil | 91 | 95 | 100 | 100 | 3.5 s | 0 | 15,453 KiB |
| Web actual · home · escritorio | 98 | 95 | 100 | 100 | 1.0 s | 0 | 54,224 KiB |
| Web nueva · home · móvil (final) | 95 | 100 | 100 | 100 | 2.9 s | 0 | 2,091 KiB |
| Web nueva · home · escritorio (final) | 100 | 100 | 100 | 100 | 0.7 s | 0 | 4,301 KiB |
| Web nueva · /demostraciones/ · móvil (final) | 98 | 100 | 100 | 100 | 2.4 s | 0 | 888 KiB |
| Web nueva · /en/ · móvil | 96 | 96 | 100 | 100 | 2.8 s | 0 | 2,090 KiB |
| Web nueva · /precios/ · móvil | 99 | 96 | 100 | 100 | 1.8 s | 0 | 164 KiB |
| Web nueva · ficha de demo · móvil | 95 | 96 | 100 | 100 | 2.8 s | 0 | 412 KiB |
| Web nueva · /video-para-inmobiliarias/ · móvil | 98 | 96 | 100 | 100 | 2.3 s | 0 | 221 KiB |
| Web nueva · guía dron o IA · móvil | 100 | 96 | 100 | 100 | 1.7 s | 0 | 168 KiB |

Los JSON completos están en `seo/lighthouse/`. Ábrelos en https://googlechrome.github.io/lighthouse/viewer/ para ver el detalle.

## 28/09/2026 · demos fieles y secciones claras

Mismo método, sobre el build final: demos regeneradas por paralaje de profundidad, secciones en marfil y las correcciones de móvil. Los JSON son los `seo/lighthouse/v2-*.json`. Además, axe (WCAG 2.2 A/AA) da 0 incidencias en las 36 páginas, en móvil y en escritorio.

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | Peso total |
|---|---|---|---|---|---|---|---|
| home · móvil | 96 | 100 | 100 | 100 | 2.8 s | 0 | 2,129 KiB |
| home · escritorio | 100 | 100 | 100 | 100 | 0.6 s | 0 | 4,339 KiB |
| /en/ · móvil | 95 | 100 | 100 | 100 | 2.9 s | 0 | 2,129 KiB |
| /demostraciones/ · móvil | 99 | 100 | 100 | 100 | 2.1 s | 0 | 794 KiB |
| ficha de demo · móvil | 95 | 100 | 100 | 100 | 2.9 s | 0 | 423 KiB |
| /precios/ · móvil | 100 | 100 | 100 | 100 | 1.7 s | 0 | 164 KiB |
| /como-funciona/ · móvil | 100 | 100 | 100 | 100 | 1.7 s | 0 | 164 KiB |
| guía dron o IA · móvil | 100 | 100 | 100 | 100 | 1.7 s | 0 | 169 KiB |
| /contacto/ · móvil | 100 | 100 | 100 | 100 | 1.5 s | 0 | 160 KiB |
| /aviso-legal/ · móvil | 100 | 100 | 100 | 100 | 1.7 s | 0 | 161 KiB |

## 28/09/2026, tarde · nuevo estilo claro

Mismo método, sobre el build con el estilo nuevo. Los JSON son los `seo/lighthouse/v3-*.json`. axe (WCAG 2.2 A/AA): 0 incidencias en las 36 páginas.

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | Peso total |
|---|---|---|---|---|---|---|---|
| home · móvil | 92 | 100 | 100 | 100 | 3.2 s | 0 | 2,107 KiB |
| home · escritorio | 100 | 100 | 100 | 100 | 0.8 s | 0 | 4,317 KiB |
| /en/ · móvil | 95 | 100 | 100 | 100 | 2.9 s | 0 | 2,107 KiB |
| /demostraciones/ · móvil | 99 | 100 | 100 | 100 | 2.0 s | 0 | 801 KiB |
| ficha de demo · móvil | 95 | 100 | 100 | 100 | 2.9 s | 0 | 430 KiB |
| /precios/ · móvil | 99 | 100 | 100 | 100 | 2.1 s | 0 | 172 KiB |
| /como-funciona/ · móvil | 100 | 100 | 100 | 100 | 1.7 s | 0 | 171 KiB |
| guía dron o IA · móvil | 100 | 100 | 100 | 100 | 1.7 s | 0 | 176 KiB |
| /contacto/ · móvil | 99 | 100 | 100 | 100 | 2.1 s | 0 | 167 KiB |
| /aviso-legal/ · móvil | 99 | 100 | 100 | 100 | 2.1 s | 0 | 168 KiB |

## 28/09/2026, noche · menú nuevo y ajustes de rendimiento en móvil

Solo la home, que era la que había bajado. Los JSON son los `seo/lighthouse/v4-*.json`.

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | Peso total |
|---|---|---|---|---|---|---|---|
| home · móvil | 97 | 100 | 100 | 100 | 2.5 s | 0 | 2,053 KiB |
| home · móvil (2.ª medición) | 97 | 100 | 100 | 100 | 2.6 s | 0 | 2,053 KiB |
| /en/ · móvil | 98 | 100 | 100 | 100 | 2.4 s | 0 | 2,053 KiB |
| home · escritorio | 100 | 100 | 100 | 100 | 0.8 s | 0 | 4,271 KiB |
