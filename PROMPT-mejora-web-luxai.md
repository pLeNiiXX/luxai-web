# Prompt: mejora integral de luxaivideo.com

> Para pegar en Claude Code, en una carpeta de trabajo nueva o en la del repositorio de LUXAI.
> Datos de contexto verificados el 27 sep 2026. Antes de usarlos, confirma que siguen siendo ciertos.

---

## Rol

Vas a trabajar como tres perfiles a la vez:

1. **Director creativo senior** de una agencia que trabaja con marcas de lujo. Escribes copy concreto y con criterio. Nada que suene a plantilla ni a texto generado por IA.
2. **Ingeniero frontend especializado en motion**, con Astro, GSAP y ScrollTrigger. Buscas un movimiento que haga sentir el producto, no uno que solo decore.
3. **Consultor SEO** técnico y de contenidos, para búsquedas en español y en inglés.

## Objetivo

Hoy luxaivideo.com es una landing de una sola página. Quiero convertirla en una **web multipágina bilingüe (ES/EN)** que cumpla tres cosas:

1. **Posicionar** en Google, y en los buscadores con IA, para tres grupos de búsqueda: vídeo inmobiliario con IA, vídeo para villas de lujo y alquiler vacacional, y alternativa al vídeo con dron.
2. **Convertir** a agencias inmobiliarias de lujo y gestores de villas en solicitudes de *demo gratis*.
3. **Transmitir lujo a través del movimiento**, con el nivel de las mejores referencias de MotionSites, sin perder la identidad de LUXAI.

No quiero una landing con más secciones. Quiero páginas reales, cada una con su intención de búsqueda, su contenido propio y su enlazado interno.

## Contexto verificado del negocio

- **Qué es LUXAI:** convierte fotos reales de una propiedad en vídeos cinematográficos de estilo aéreo con IA, sin rodaje, dron ni permisos. Clientes: inmobiliarias de lujo, villas y alquiler vacacional de alto standing.
- **Ubicación:** operativa en Mallorca y Baleares, con alcance internacional (según el aviso legal). El schema declara como zonas Costa del Sol, Mallorca, Canarias y Costa Blanca.
- **Packs** (IVA no incluido; precio de lanzamiento solo para los 10 primeros clientes):
  - **Esencial, 129 €:** 1 vídeo de 20–30 s, 2 fotos retocadas, entrega en 72 h, 1 revisión.
  - **Profesional, 379 € (95 €/vídeo):** 4 vídeos, 6 fotos retocadas, versión vertical, música y branding, 72 h, 2 revisiones por vídeo.
  - **Agencia, 649 € (81 €/vídeo):** 8 vídeos más 1 principal de 45–60 s, 15 fotos retocadas, versión vertical, música y branding, entrega prioritaria en 5 días laborables, 3 revisiones por vídeo.
- **Proceso:** el cliente envía entre 5 y 15 fotos de al menos 1920×1080 → LUXAI crea movimientos de estilo aéreo y monta una pieza de 20–30 s → entrega en 16:9 y 9:16.
- **Garantía de honestidad (es parte del producto):** la IA no inventa ni altera la propiedad. El retoque solo toca luz, color y cielo.
- **Demo gratis:** con las fotos de un espacio, en 72 h, sin compromiso. Respuesta en menos de 24 h.
- **Contacto:** contacto@luxaivideo.com. El formulario envía JSON a `https://formsubmit.co/ajax/contacto@luxaivideo.com` junto con los UTM de la visita. El número de WhatsApp está vacío en el código, así que el botón de WhatsApp está roto.
- **Stack actual:** Astro estático detrás de Cloudflare (Pages), GSAP con ScrollTrigger y Lenis.
- **Identidad visual:**
  - Colores: fondo `#0b0b0c`, superficie elevada `#121113`, texto `#f2ede4`, texto secundario `#9a948a`, oro `#c8a97e`.
  - Tipografía: Jost Variable en mayúsculas y muy espaciada para titulares; Hanken Grotesk Variable para el texto.
  - Logo: emblema más el wordmark «LUXAI».
- **Recursos reales:** vídeo del hero en 4K, 2K y 1280, y dos demos con sus fotos originales («Villa Contemporánea Costa», 4 fotos; «Finca Rústica Mediterránea», 5 fotos y 24 s).

### Estado SEO de partida

**Lo que ya está bien:**
- title y meta description.
- canonical.
- hreflang es/en/x-default.
- JSON-LD con ProfessionalService, Service, Offers y FAQPage.
- robots.txt abierto, incluidos los bots de IA.
- sitemap-index.xml.

**Problemas encontrados:**
- El hreflang «en» de la home apunta a `/en` sin barra final, que redirige con un 308.
- Hay enlaces internos sin barra final que también dan 308.
- `/sitemap.xml` devuelve 404.
- Las miniaturas de las demos no tienen texto alternativo.
- El hero descarga el MP4 en 4K con `preload="auto"`.
- No hay analítica.
- Solo hay 3 FAQ y 2 razones de compra.
- No hay prueba social.
- El texto mezcla «tú» y «vosotros».
- Al aviso legal le faltan el titular y el NIF (LSSI, art. 10).

**Competencia a analizar:**
- fotoarteinmobiliario.es
- urbanizainteractiva.com
- pedra.ai
- instantdeco.ai
- inmorobot.com
- videógrafos con dron de Marbella y Mallorca

## Herramientas que debes usar

1. **Skill de auditoría SEO: `/marketing:seo-audit`** (auditoría completa de luxaivideo.com).
   - Qué debe cubrir: investigación de palabras clave en español y en inglés, análisis on-page, huecos de contenido, revisión técnica y comparación con la competencia.
   - Qué quiero como resultado: un plan dividido en *quick wins* e inversiones estratégicas.
   - Datos de volumen: si Ahrefs o Similarweb no están conectados, usa búsqueda web e indica el nivel de confianza de cada estimación.
   - Si la suite `claude-seo` está instalada, complementa con `seo-hreflang`, `seo-schema`, `seo-local` y `seo-geo`.
2. **MotionSites (MCP `motionsites`)** como fuente de dirección visual y de movimiento.
   - Usa `search_prompts` y `get_related_prompts` para localizar referencias: villas de lujo, arquitectura, estilo editorial y oscuro, cinematográfico, con el vídeo como protagonista.
   - Antes de gastar la cuota de `get_prompt` (sin plan solo hay 3 prompts gratis y los premium están bloqueados), revisa las previsualizaciones animadas, que son públicas.
   - Extrae los patrones de movimiento y **adáptalos a la marca LUXAI**. No copies ninguna plantilla tal cual.
   - Referencias clave: `luxury-real-estate`, `luxury-hero`, `layered-depth`, `luxury-editorial-ecommerce-design`, `coastal-estate`.
3. **Skills de acabado** (opcionales, si están instaladas): `emil-design-eng` para el pulido de interacciones y `redesign-existing-projects` para auditar antes de rediseñar.

## Modo de trabajo

- **Modo autónomo:** no te detengas a preguntar. Ante una decisión, elige la opción más razonable, anótala en `DECISIONES.md` con el motivo y sigue.
- **Datos de negocio que no puedas verificar** (nombres, NIF, testimonios, número de WhatsApp): **no los inventes**. Déjalos con el marcador `[CONFIRMAR: …]` y súmalos a la lista de pendientes.
- **Nada se publica en producción.** Trabajas en local y entregas el proyecto compilado con instrucciones de despliegue.
- **Código fuente:** si existe el repositorio, trabaja sobre él. Si no, reconstruye el proyecto en Astro a partir de la web publicada, con sus textos y recursos reales.

## Fases

### Fase 0: preparación
1. Crea la estructura de carpetas: `web/` (proyecto), `seo/` (auditoría y mapa de keywords), `DECISIONES.md` e `INFORME.md`.
2. Descarga los recursos de la web publicada: vídeos, fotos de las demos, emblema, favicon, og-image, y los textos en ES y EN, incluidos los legales.
3. Mide el punto de partida con Lighthouse en móvil y escritorio y guárdalo en `seo/baseline.md`.

### Fase 1: auditoría SEO y estrategia
1. Lanza `/marketing:seo-audit` sobre luxaivideo.com en modo *full site audit*.
2. Entregables:
   - `seo/AUDITORIA-SEO.md`.
   - `seo/MAPA-KEYWORDS.md`, con una tabla por página: keyword principal, keywords secundarias, intención, idioma y URL.
3. Usa la auditoría para **validar o corregir** la arquitectura inicial que propongo más abajo. Cada página tiene que responder a una intención de búsqueda distinta. Si dos páginas compiten por la misma keyword, fusiónalas.

### Fase 2: dirección visual y de movimiento (MotionSites)
1. Busca referencias en MotionSites y documenta en `DECISIONES.md` los patrones que adoptas y en qué página se usa cada uno.
2. Sistema de movimiento mínimo:
   - **Hero cinematográfico:** el vídeo se abre desde un marco hasta ocupar toda la pantalla y el titular aparece línea a línea con máscara.
   - **Secuencia «fotos → vídeo» anclada al scroll:** las fotos reales convergen en el vídeo. Es la pieza que demuestra el producto.
   - **Manifiesto** que se revela palabra a palabra con el scroll.
   - **Galería en acordeón** para las demos, con reproducción al pasar el ratón o al enfocar.
   - **Transiciones entre páginas** con View Transitions (CSS, mejora progresiva) y elemento compartido entre la tarjeta de una demo y su página.
3. Todo el movimiento respeta `prefers-reduced-motion`, no bloquea el LCP y no provoca CLS.

### Fase 3: arquitectura y copy
Arquitectura inicial, a validar con la auditoría. Cada página tiene su versión en `/en/` con un slug en inglés y hreflang recíproco:

| Página | ES | EN |
|---|---|---|
| Home | `/` | `/en/` |
| Servicio principal | `/video-inmobiliario-ia/` | `/en/ai-real-estate-video/` |
| Demos, listado y fichas | `/demostraciones/` más una ficha por demo | `/en/demos/`… |
| Precios | `/precios/` | `/en/pricing/` |
| Cómo funciona y requisitos de fotos | `/como-funciona/` | `/en/how-it-works/` |
| Para inmobiliarias | `/video-para-inmobiliarias/` | `/en/real-estate-agencies/` |
| Para alquiler vacacional de lujo | `/video-alquiler-vacacional/` | `/en/luxury-vacation-rentals/` |
| Zonas (índice y fichas con contenido único) | `/zonas/…` | `/en/areas/…` |
| Guías (índice y 3–4 guías de referencia) | `/guias/…` | `/en/guides/…` |
| Preguntas frecuentes | `/preguntas-frecuentes/` | `/en/faq/` |
| Sobre LUXAI | `/sobre-luxai/` | `/en/about/` |
| Contacto y demo | `/contacto/` | `/en/contact/` |
| Legales (conservar las URL actuales) | `/aviso-legal/`, `/privacidad/` | `/en/aviso-legal/`, `/en/privacidad/` |

Guías candidatas: IA frente a dron (coste, permisos, plazos, resultado), qué fotos hacen falta, formatos para portales y redes (16:9 y 9:16), y transparencia al usar IA en anuncios inmobiliarios.

**Reglas de copy:**
- Registro único con **«vosotros»**, porque el cliente es un equipo o una agencia.
- Frases concretas y verificables. Prohibido el relleno: «soluciones a medida», «llevamos tu marca al siguiente nivel», «revoluciona», «potencia», «descubre el poder de».
- **Nada inventado:** ni testimonios, ni logos de clientes, ni cifras, ni premios. La prueba social son las demos reales y las garantías del servicio.
- La versión EN es una adaptación natural para agencias y compradores internacionales, no una traducción literal.
- Los precios, plazos y condiciones son exactamente los del contexto.

### Fase 4: construcción
- **Astro estático**, sin convertir la web en una SPA.
  - Sin frameworks de cliente salvo que sean imprescindibles.
  - JS solo donde haya interacción.
  - Guías y zonas en *content collections*.
  - Textos de cada idioma en diccionarios con la misma forma, para que ES y EN no se desincronicen.
- **Mantener:** tokens de marca, tipografías, Lenis, GSAP, formulario con FormSubmit y UTM, estado de éxito, estado de error con alternativa por email y accesibilidad (skip link, foco visible, objetivos táctiles de 44 px).
- **Corregir:** el botón de WhatsApp se oculta si no hay número, y todos los enlaces internos llevan barra final.
- **Componentes:** cabecera con navegación y menú móvil, pie con mapa del sitio, migas de pan, bloque de CTA de demo, reproductor de vídeo con póster, tarjetas de precios, FAQ con `<details>` y tarjetas de guía.

### Fase 5: SEO técnico
- En cada página: title y description únicos, un solo H1, canonical con barra final, hreflang es/en/x-default recíproco y Open Graph y Twitter con imagen adecuada.
- **JSON-LD en `@graph`:**
  - Organization/ProfessionalService y WebSite.
  - Service con Offer en precios.
  - VideoObject en cada demo, con duración real, miniatura y fecha.
  - BreadcrumbList.
  - Article en las guías.
  - FAQPage donde haya preguntas.
  - Todo validado.
- **Archivos de rastreo:**
  - sitemap con alternates.
  - sitemap de vídeo.
  - `/sitemap.xml` redirigido a `/sitemap-index.xml`.
  - robots.txt actualizado.
  - `llms.txt` que resuma el servicio y las páginas clave.
- **Enlazado interno deliberado:** cada página enlaza con al menos otras tres relacionadas, con anclas descriptivas. Las guías enlazan al servicio y a precios.
- **Rendimiento:**
  - LCP < 2,5 s, CLS < 0,1, INP < 200 ms.
  - El póster del hero es el candidato a LCP.
  - El vídeo del hero es 2K como máximo, con carga diferida.
  - Las demos no se cargan hasta ser visibles.

### Fase 6: control de calidad
1. `astro build` sin errores ni avisos.
2. Comprobación de enlaces internos: cero enlaces rotos y cero redirecciones internas.
3. Validación del JSON-LD.
4. Lighthouse en móvil y escritorio en las páginas tipo, antes y después. Objetivo: 90 o más en todas las categorías.
5. Revisión visual en 375, 768 y 1440 px.
6. Navegación completa por teclado.
7. `prefers-reduced-motion` comprobado.
8. El formulario se prueba **sin enviar leads reales**, simulando la respuesta de FormSubmit.

### Fase 7: entrega
`INFORME.md` con:
- qué ha cambiado y por qué;
- métricas de antes y después;
- mapa del sitio final;
- decisiones tomadas;
- lista de pendientes para el propietario: NIF y titular en el aviso legal, número de WhatsApp, Search Console, analítica sin cookies (Cloudflare Web Analytics), casos reales y testimonios cuando existan;
- comandos para desplegar en Cloudflare Pages.

## Definición de terminado

- Todas las páginas de la arquitectura final existen en ES y EN, compiladas y enlazadas.
- La auditoría SEO y el mapa de keywords están guardados, y cada página apunta a una keyword principal distinta.
- Se aplica el sistema de movimiento, con alternativa para `prefers-reduced-motion`.
- Lighthouse da 90 o más en SEO, Accesibilidad y Buenas prácticas, y en Rendimiento no baja respecto al punto de partida.
- No hay datos inventados; todo lo pendiente está marcado con `[CONFIRMAR]`.
