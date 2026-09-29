# Informe · rediseño de luxaivideo.com

**Fecha:** 27 de septiembre de 2026, actualizado el 28 · **Estado:** construido y verificado. **Vista previa para enseñar:** https://luxaivideo.vercel.app (no indexable). **La web real (luxaivideo.com) no se ha tocado.**

## Qué he hecho

1. **Escribí el prompt** que pediste: [`PROMPT-mejora-web-luxai.md`](PROMPT-mejora-web-luxai.md).
2. **Lo ejecuté en modo autónomo:**
   - auditoría SEO con la skill `marketing:seo-audit`;
   - dirección de movimiento a partir de MotionSites;
   - reconstrucción de la web en Astro con 16 páginas por idioma y las legales;
   - SEO técnico completo;
   - control de calidad.
3. **No se ha tocado la web publicada ni se ha borrado nada.** Los originales de vídeo y foto están en `media-originales/`.

## Nuevo estilo visual (28 de septiembre, tarde)

Pediste cambiar por completo el estilo, tomando como referencia https://nubo.framer.website/. La web pasa de oscura y dorada a clara y editorial. El contenido, las URL y todo el SEO se mantienen.

- **Color:** blanco y hueso (`#f7f6f3`) alternos, texto grafito (`#262626`) en lugar de negro y un único acento champán, solo sobre imagen: la palabra en cursiva del titular de portada.
- **Tipografía:** las mismas familias que la referencia, ambas con licencia libre (OFL):
  - Google Sans Flex para titulares y texto, con interletra apretada. La he recortado a los caracteres de la web y a los pesos 400–600: pesa 31 KB en lugar de 51.
  - Abel en mayúsculas para subtítulos, etiquetas y textos cortos de tarjeta.
- **Titulares a dos tonos:** la segunda parte va en gris. En los textos se marca con `|`; por ejemplo, `Tres packs, | precio cerrado`. La palabra destacada de la portada va entre asteriscos: `*película*`.
- **Piezas:**
  - menú en cápsula grafito flotante;
  - botones píldora;
  - tarjetas y medios con esquinas de 20–28 px;
  - preguntas frecuentes en pastillas;
  - etiqueta con un cuadradito de cuatro puntos;
  - pack recomendado y bloque «Lo que hacemos nosotros» en grafito;
  - banda final y pie como tarjetas redondeadas.
- **Movimiento:** se conservan las animaciones. Las fotos convergen en el vídeo, el manifiesto se oscurece palabra a palabra y la portada se abre desde una tarjeta redondeada.
- **La versión oscura está guardada** en la etiqueta git `estilo-oscuro` del repositorio y, en local, en `versiones/web-estilo-oscuro-2026-09-28/` (el código completo, sin `node_modules`). Para volver a ella, basta con copiarla sobre `web/`.
- **Vista previa de Vercel:** actualizada con el estilo nuevo el 28/09 por la tarde, y con el menú y las mejoras de rendimiento esa misma noche (https://luxaivideo.vercel.app).
- **Verificación:**
  - axe (WCAG 2.2 A/AA): 0 incidencias en las 36 páginas, en móvil y en escritorio.
  - Sin desbordes a 320 y 375 px.
  - `check-links`: 0 errores; `astro check`: 0 errores.
  - Lighthouse: accesibilidad, buenas prácticas y SEO a 100 en las 10 páginas medidas. Rendimiento entre 92 y 100.
  - La home en móvil baja de 95–98 a 92 (LCP de laboratorio de 2,8 a 3,2 s). El peso es el mismo y la fuente pesa menos que la anterior; la diferencia está en cómo Lighthouse simula el pintado del titular, que ahora es el elemento más grande.

## Menú de la referencia y rendimiento en móvil (28 de septiembre, noche)

- **Menú como el de Nubo:**
  - Cerrado es una cápsula negra con el logo y el icono de menú, en todas las pantallas. Ya no hay enlaces sueltos en la barra.
  - Al abrirlo, la cápsula se expande en un panel negro. Los enlaces entran uno a uno y, al pasar el ratón, sus letras «ruedan». A la derecha, la foto de la demo 01 se descubre de izquierda a derecha y lleva a las demostraciones.
  - Abajo van la frase de la marca, dos datos (72 h, 129 €), el cambio de idioma y el botón «Pedir demo gratis».
  - Se cierra con la X, con Escape o pulsando fuera. El foco vuelve al botón y, mientras está abierto, el resto de la página queda inerte.
- **Home en móvil (Lighthouse):**
  - Rendimiento de 92 a 97–98.
  - LCP de 3,2 a 2,4–2,6 s.
  - CLS a 0.
  - Cómo:
    - la foto de portada ya no se pide con prioridad alta y se sirve en AVIF;
    - GSAP y sus plugins se cargan cuando la página ya ha terminado;
    - las imágenes de debajo de la portada van con prioridad baja;
    - el favicon pasa de 20 KB a 4 KB.
  - Quitar la precarga de Abel empeoraba el CLS (la franja de datos de la portada cambiaba de alto al llegar la fuente), así que la mantengo.

## Cambios del 28 de septiembre

### Demos regeneradas, fieles a sus fotos

- **Cómo están hechas:** cada plano sale de una sola foto. Una IA de estimación de profundidad calcula qué está cerca y qué lejos, y la cámara se mueve dentro de la imagen con paralaje: lo cercano se desplaza más que el fondo. No se genera contenido; cada píxel del vídeo se toma de la foto.
- **Comprobado:** el script verifica en cada fotograma que no se muestrea fuera de la foto (peor fotograma de los 9 planos: 0,0000 %). Revisé además los bordes a tamaño real y el primer y último fotograma de cada plano.
- **Resultado:**
  - Villa: 16 s y 4 planos (fotos 1, 3, 2 y 4).
  - Finca: 24 s y 5 planos (fotos 1, 3, 5, 4 y 2).
  - Fundidos de 0,7 s entre planos y sin sonido (las pistas de audio originales eran silencio digital).
- **Por qué no vídeo generativo:** Kling y los demás modelos de imagen a vídeo rellenan lo que queda fuera del encuadre, que era justo el problema. Además, la cuenta de Magnific tenía 5 créditos y un clip de Kling de 5 s en 1080p cuesta 325. No he comprado nada.
- **Licencia del modelo:** uso Depth Anything V2 **Small**, con licencia Apache-2.0. Empecé con la variante Base, pero es CC-BY-NC-4.0 (no comercial), así que rehíce los mapas y los vídeos con la Small. Los mapas salen prácticamente iguales: la comparativa está en `herramientas/demos/work/qa/`.
- **Mensaje:** con demos fieles, la web vuelve a prometer fidelidad, ahora explicando el método: «cada plano sale de una sola foto; nada entra en el plano que no estuviera en la foto». Está ajustado en la home, las fichas de demo, las FAQ, las guías y `llms.txt`.
- **Herramientas:** el proceso completo está en `herramientas/demos/`, con un README. Sirve también para hacer los vídeos de clientes con el mismo método.

### Secciones en blanco (sustituido por el nuevo estilo)

- **Qué va en claro:** fondo marfil (`#faf8f4`) en los bloques de lectura:
  - home: manifiesto, qué hace la IA, por qué LUXAI, precios y FAQ;
  - resto de páginas: los packs y la comparativa de precios, los pasos y los límites del proceso, los bloques de inmobiliarias y alquiler vacacional, las fotos de partida de cada demo, la mitad de los grupos de FAQ, «Sobre LUXAI», el listado y el cuerpo de las guías y los textos legales.
- **Qué sigue en oscuro:** los momentos de imagen. Hero, pieza de fotos a vídeo, demos, proceso, llamadas a la acción y pie. El vídeo siempre se ve sobre carbón.
- **Contraste:** los componentes heredan los colores invertidos. El oro pasa a `#7a5c34` en las secciones claras (5,8:1 sobre marfil), el texto secundario da 6,5:1 y el botón principal pasa a tinta. El pack recomendado se queda oscuro dentro de su sección clara, así destaca solo.

### Fallos que encontré al verificar, ya corregidos

- **Guías en móvil: el texto se cortaba por la derecha.** La tabla comparativa ensanchaba la columna de texto a 560 px en una pantalla de 412, y la página recorta lo que desborda. Venía de la versión anterior; en oscuro la auditoría no lo detectaba.
- **Contacto:** desbordaba 5 px en pantallas de 375 px, por la misma causa.
- **Móviles de 320 px:**
  - los botones de ancho completo no podían partir su texto en dos líneas;
  - «CONTEMPORÁNEA» no cabía en la ficha de la villa.

  Ahora los botones parten línea y la palabra se guiona.
- **Tablas de las guías:** la primera columna es ahora cabecera de fila, para los lectores de pantalla.
- **Cabecera:** el degradado de debajo de la barra dejaba una sombra gris sobre las secciones claras.
- **Ficha de demo:** atribuía a la IA los fundidos entre planos. Son montaje, y así se dice ahora.
- **«Por qué LUXAI»:** el texto de los puntos con título corto quedaba descolgado.

**Verificación:**
- axe (WCAG 2.2 A/AA): 0 incidencias en las 36 páginas, en móvil y en escritorio.
- `check-links`: 37 páginas y 0 errores.
- `astro check`: 0 errores.
- Lighthouse: en la tabla de abajo.

## Vista previa en Vercel

- **Dirección:** https://luxaivideo.vercel.app, en el proyecto `luxaivideo` de Vercel.
- **Qué es:** el mismo build verificado en local, sin recompilar en Vercel. Todas las respuestas llevan `X-Robots-Tag: noindex, nofollow`, así que Google no la indexará como copia de la web.
- **Actualizarla:** `bash web/scripts/vista-previa-vercel.sh`. Compila, comprueba los enlaces y despliega la carpeta `vista-previa-vercel/`.
- **Ojo con el formulario:** es el real. Una solicitud enviada desde la vista previa llega a contacto@luxaivideo.com.
- **Es temporal:** el plan gratuito de Vercel es para uso no comercial. La web definitiva va a Cloudflare Pages, como estaba previsto. Cuando esté publicada, conviene borrar el proyecto `luxaivideo` de Vercel.

## Dónde está cada cosa

| Carpeta o archivo | Contenido |
|---|---|
| `web/` | Proyecto Astro. `npm run build` genera `web/dist/`, listo para subir |
| `seo/AUDITORIA-SEO.md` | Auditoría completa (skill `marketing:seo-audit`) |
| `seo/MAPA-KEYWORDS.md` | Arquitectura final, keyword por URL, titles, metas y preguntas reales |
| `seo/INVESTIGACION-CONTENIDOS.md` | Hechos con fuente para guías y páginas: drones, formatos, IA y alquiler turístico |
| `seo/lighthouse/` | Informes Lighthouse, antes y después |
| `referencias-motionsites/` | Capturas de las referencias de movimiento estudiadas |
| `herramientas/demos/` | Proceso de las demos por paralaje de profundidad, con README |
| `versiones/web-estilo-oscuro-2026-09-28/` | Copia de la web con el estilo oscuro anterior |
| `vista-previa-vercel/` | Copia del build que se sube a Vercel (la genera el script; no se edita a mano) |
| `DECISIONES.md` | 45 decisiones tomadas, cada una con su motivo |
| `ESTILO-COPY.md` | Guía de voz y datos del negocio para quien escriba en la web |

## Antes y después

| Métrica (home) | Antes | Después |
|---|---|---|
| Páginas indexables | 1 landing + EN + 2 legales | **16 por idioma** + legales (36 URL) |
| Peso de la home, móvil | 15,4 MB | **2,1 MB** |
| Peso de la home, escritorio | 54,2 MB | **4,3 MB** |
| LCP móvil (Lighthouse) | 3,5 s | **2,3–2,9 s** |
| LCP escritorio | 1,0 s | **0,6 s** |
| Rendimiento, móvil / escritorio | 91 / 98 | **95–98 / 100** |
| Accesibilidad | 95 | **100** en las 10 páginas medidas; axe: 0 incidencias en las 36 |
| Buenas prácticas / SEO | 100 / 100 | **100 / 100** |
| Vídeos indexables (VideoObject + sitemap de vídeo) | 0 | **2 fichas × 2 idiomas** |
| FAQ con respuesta | 3 | **Más de 45**, repartidas sin duplicar |

## Revisión de código independiente (ya aplicada)

Un agente revisor auditó el código después de la primera versión. Estos son los arreglos aplicados y verificados en el navegador:

- **Formulario:**
  - Los UTM se guardan en la página de entrada y llegan al envío aunque el usuario navegue antes de enviar.
  - Si el navegador bloquea el almacenamiento, el envío ya no falla.
  - La petición tiene un tiempo límite de 15 s.
  - Sin JavaScript, el formulario también funciona (endpoint normal de FormSubmit).
  - El campo antispam se envía al servidor.
- **Animaciones:** los bloques que aparecen con el scroll ya no parpadean. El encuadre del hero pasa a CSS (sin saltos).
- **Vídeos:**
  - Todas las muestras que arrancan solas tienen botón de pausa (WCAG 2.2.2).
  - El vídeo del hero se ve también si se reproduce a mano.
  - Con ahorro de datos o red 2G no arranca nada solo.
  - Las muestras en móvil pasan a 640 px (un 40 % menos de peso).
- **Accesibilidad:**
  - Con el menú móvil abierto, el resto de la página queda inerte y sin scroll.
  - El foco vuelve a su sitio al cerrar el modal.
  - Las tarjetas de demo muestran el foco.
  - El selector de idioma incluye su texto visible.
  - Contraste de los campos del formulario reforzado.
  - Las tablas de las guías se pueden recorrer con el teclado.
- **Modal:** ya no se cierra al arrastrar una selección de texto fuera, y Cmd/Ctrl-clic abre en pestaña nueva.
- **SEO:**
  - Se quita el `embedUrl` incorrecto del VideoObject.
  - La miniatura del schema es la misma que la del sitemap de vídeo.
  - `lastmod` por idioma.
  - La 404 ya no emite canonical ni schema.
- **Verificador (`scripts/check-links.mjs`):** comprueba además las URL del JSON-LD, `og:image`, los sitemaps, las fuentes de vídeo y las anclas.

Pendientes que salieron de la revisión y dependen de vosotros: están en la lista de abajo (alias de FormSubmit y política CSP).

## Mapa del sitio (ES · EN)

- `/` · `/en/`: vídeo inmobiliario con IA (home y página del servicio)
- `/demostraciones/` · `/en/demos/`, con dos fichas de vídeo:
  - `/demostraciones/villa-contemporanea-costa/` · `/en/demos/coastal-contemporary-villa/`
  - `/demostraciones/finca-rustica-mediterranea/` · `/en/demos/mediterranean-rustic-estate/`
- `/precios/` · `/en/pricing/`: packs más una comparativa con las tarifas publicadas de vídeo con dron en España
- `/como-funciona/` · `/en/how-it-works/`
- `/video-para-inmobiliarias/` · `/en/real-estate-agencies/`
- `/video-alquiler-vacacional/` · `/en/luxury-vacation-rentals/`
- `/guias/` · `/en/guides/`, con 4 guías:
  - dron o IA
  - cómo hacer fotos inmobiliarias
  - formatos de vídeo
  - IA en anuncios inmobiliarios
- `/preguntas-frecuentes/` · `/en/faq/`
- `/sobre-luxai/` · `/en/about/`
- `/contacto/` · `/en/contact/`
- `/aviso-legal/`, `/privacidad/` y sus versiones `/en/`: las URL no cambian
- **Archivos técnicos:** `sitemap-index.xml` → `sitemap-pages.xml` (con hreflang) y `sitemap-video.xml`; `robots.txt`; `llms.txt`; `_redirects`; `_headers`

## Qué cambia en diseño y movimiento

- **Estilo:** claro y editorial desde el 28/09 por la tarde (detalle arriba, en «Nuevo estilo visual»). El logotipo se mantiene.
- **El hero:** vídeo 1080p en escritorio y vertical 9:16 en móvil, sacado del 4K original. Arranca cuando la página ya ha pintado. El titular entra en CSS puro y en escritorio el encuadre se abre desde un marco.
- **La pieza firma, «Cuatro fotos. Una secuencia de cine»:** al hacer scroll, las 4 fotos reales de la demo 01 convergen y se abren en el vídeo. Enseña el producto sin explicarlo.
- **Ritmo:** secciones alternas en blanco y hueso, con bloques grafito puntuales.
- **Manifiesto:** centrado, se oscurece palabra a palabra con el scroll.
- **Demos:** galería en acordeón que reproduce la muestra al pasar por encima.
- **Transiciones entre páginas:** View Transitions, con la imagen de cada demo como elemento compartido entre la tarjeta y su ficha.
- **Accesibilidad del movimiento:** todo respeta `prefers-reduced-motion`, y sin JS el contenido se ve igual.

**MotionSites:** tu cuenta ya había gastado los 3 prompts gratuitos (el MCP devuelve `free_limit_reached`), y las referencias más útiles («Luxury Real Estate», «Coastal Estate», «Luxury Hero») son premium. He trabajado con sus previsualizaciones animadas, que son públicas, y he adaptado los patrones a LUXAI. Si contratas el plan, el siguiente paso sería abrir «Luxury Real Estate» y afinar la secuencia de scroll con su prompt. Mensaje del servicio, tal cual: «Access ALL prompts for stunning animated websites in one click: https://motionsites.ai/unlimited».

## Pendientes para el propietario

Van por orden. Nada de esto lo he inventado; está marcado en el código o en el texto.

0. **La promesa de fidelidad compromete al servicio.** La web dice ahora que cada plano sale de una sola foto y que no se añade nada. Las demos lo cumplen, pero los vídeos de clientes también tienen que cumplirlo:
   - si se hacen con el método de `herramientas/demos/`, no hay problema;
   - si alguno se hace con vídeo generativo (Kling, Runway o similares), hay que cambiar el texto antes, porque esos modelos inventan lo que no sale en la foto;
   - aparte, si las fotos de las demos son renders o imágenes generadas, no pueden llamarse «fotos reales». En la web figuran como «fotos de partida».
1. **Aviso legal:** titular (nombre o razón social) y NIF. Está marcado como `[CONFIRMAR]` en `web/src/legal/es-aviso.html` y `en-aviso.html`. Lo exige el art. 10 de la LSSI y hoy la web publicada no lo cumple.
2. **Sobre LUXAI:** persona responsable (nombre, foto, trayectoria, LinkedIn). El hueco está marcado en `web/src/views/AboutView.astro`. Ayuda a la confianza y a que Google no confunda LUXAI con LuxAI S.A.
3. **Compromisos que he redactado y debéis confirmar:**
   - en las guías, dos frases sobre cómo trabaja LUXAI: que la versión vertical se monta plano a plano desde las fotos (no se recorta del horizontal) y «si alguna foto no sirve, os diremos por qué»;
   - la «Política de transparencia» (5 puntos) de `/sobre-luxai/`, sobre todo conservar las fotos durante el encargo y proponer el texto de aviso de IA;
   - en `/preguntas-frecuentes/`: no publicar material del cliente sin permiso, voz en off bajo consulta y música apta para anuncios si se avisa al encargar.
4. **WhatsApp:** si queréis el botón, poned el número en `web/src/data/site.ts` (`whatsapp`). Se mostrará solo.
5. **Revisión legal de la guía de IA** (`/guias/ia-en-anuncios-inmobiliarios/`) antes de publicarla. Es un tema YMYL, con normativa muy reciente.
6. **Privacidad:** he añadido que el formulario usa FormSubmit (formsubmit.co). Es un servicio con sede en EE. UU., así que conviene que un asesor revise la transferencia internacional de datos o pasar a un proveedor de la UE.
7. **Especificaciones de idealista y Airbnb:** la guía de formatos y la página de alquiler vacacional explican que las fuentes se contradicen. Comprobadlo en el panel de cada plataforma y actualizad el texto.
8. **FormSubmit:** sustituid el email del endpoint por el alias aleatorio que da FormSubmit (`web/src/data/site.ts`, `formEndpoint`), para no exponer el correo en el código.
9. **Política de seguridad de contenidos (CSP):** no la he añadido para no romper nada al activar Cloudflare Web Analytics. Cuando esté todo publicado, se puede añadir en `public/_headers`. HSTS ya está.
10. **Precio de lanzamiento:** el title de `/precios/` dice «packs desde 129 €». Si cambian los precios, cambiad `web/src/data/site.ts` y el title.

## Pendientes técnicos al publicar (Cloudflare)

1. **Desplegar.** Astro 7 exige Node 22.12 o superior: en Cloudflare Pages, variable `NODE_VERSION=22`. Hay dos opciones:
   - **Git:** raíz `web/`, comando `npm run build` y salida `dist`.
   - **Subida directa:**
     ```bash
     cd web && npm install && npm run build && npx wrangler pages deploy dist --project-name=luxai-web
     ```
2. **`www` → sin `www`:** crear una regla de redirección 301 en Cloudflare. Hoy `www.luxaivideo.com` responde 200 con toda la web y la duplica.
3. **Staging indexado:** `luxai-web-bw9.pages.dev` está en buscadores. Redirigirlo con una *Bulk Redirect* de Cloudflare al dominio principal.
4. **Search Console:**
   - verificar el dominio;
   - enviar `https://luxaivideo.com/sitemap-index.xml`;
   - pedir la indexación de las fichas de demo.
5. **Analítica sin cookies:** activar Cloudflare Web Analytics desde el panel, sin código y sin banner de cookies.
6. **Probar el formulario una vez en producción** con un email propio. En local lo he probado simulando la respuesta de FormSubmit, para no enviar leads falsos: funcionan el envío correcto, el error y la alternativa por email.

## Cómo trabajar con el proyecto

**Repositorio:** https://github.com/pLeNiiXX/luxai-web (público). La rama `main` es la versión actual; la etiqueta `estilo-oscuro`, la anterior. Si en el ordenador hay varias cuentas de GitHub, activa con `gh auth switch` la que tiene acceso antes de hacer `git push`.

```bash
cd web
npm install
npm run dev                    # desarrollo en http://localhost:4321
npm run build                  # genera dist/
node scripts/check-links.mjs   # verifica enlaces, metas, hreflang y JSON-LD
```

- **Textos de cada página:** en `web/src/views/*View.astro` (objetos `es` y `en`) y en `web/src/copy/home.ts`.
- **Guías:** Markdown en `web/src/content/guias/{es,en}/`.
- **Precios, plazos y contacto:** en un solo archivo, `web/src/data/site.ts`.
- **Nueva demo:** añadir sus fotos a `web/src/assets/demos/`, los vídeos a `web/public/media/demos/` y una entrada en `web/src/data/demos.ts`. La ficha, el sitemap de vídeo y el schema se generan solos.
- **Vídeos por paralaje (demos o clientes):** los pasos están en `herramientas/demos/README.md`.
