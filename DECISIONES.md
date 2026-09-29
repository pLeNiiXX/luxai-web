# Registro de decisiones · rediseño de luxaivideo.com

Ejecución autónoma del 27 sep 2026, ampliada el 28 sep (demos fieles y secciones claras). Cada decisión lleva su motivo, para poder revisarla o revertirla.

## Estrategia y arquitectura

| # | Decisión | Motivo |
|---|---|---|
| 1 | **La home es la página del servicio** («vídeo inmobiliario con IA»). Se descarta `/video-inmobiliario-ia/`. | La auditoría SEO detectó que las dos URL competirían por la misma keyword. La home es la URL con más autoridad y LUXAI vende un único servicio. |
| 2 | **Se descartan las páginas de zona** (`/zonas/…`). | No hay demanda (el autocompletado no sugiere «vídeo inmobiliario + ciudad») y hay riesgo de *doorway pages*: el servicio es remoto e idéntico en todas partes. Mallorca queda para una fase 2, cuando haya un caso real allí. |
| 3 | **La guía de precios se fusiona con `/precios/`.** | Perseguían la misma búsqueda. `/precios/` incluye ahora una comparativa en euros con tarifas publicadas de dron y videógrafo, con fuente y fecha. |
| 4 | **16 páginas por idioma y las legales**, con slugs propios en inglés y hreflang recíproco. | Arquitectura final del mapa de keywords (`seo/MAPA-KEYWORDS.md`). |
| 5 | **Navegación principal de 5 enlaces:** Demostraciones · Cómo funciona · Precios · Inmobiliarias · Alquiler vacacional, más el CTA. Guías, FAQ y «Sobre LUXAI» van en el pie y en el menú móvil. | Recomendación de la auditoría. La navegación completa aparece a partir de 1280 px; por debajo, menú. |
| 6 | **Las URL legales se conservan** (`/aviso-legal/`, `/privacidad/` y sus `/en/`). | Evitar redirecciones y no perder lo indexado. |

## Diseño y movimiento

| # | Decisión | Motivo |
|---|---|---|
| 7 | ~~**Se mantiene la identidad**~~ *Sustituida por la 39 el 28 sep.* **Se mantiene la identidad** (fondo carbón, marfil, oro, Jost en mayúsculas espaciadas y Hanken Grotesk) y **no se añade una serif**. | La cursiva serif como acento es hoy un cliché de las webs hechas con IA, y el wordmark de LUXAI ya es Jost. El lujo se trabaja con escala, espacio y movimiento. |
| 8 | **MotionSites se usa como referencia visual**, no como plantilla. | Vuestra cuenta ya había gastado los 3 prompts gratuitos (el MCP devuelve `free_limit_reached`) y los más relevantes («Luxury Real Estate», «Coastal Estate», «Luxury Hero») son premium. Se estudiaron sus previsualizaciones animadas, que son públicas (capturas en `referencias-motionsites/`), y se adaptaron sus patrones. |
| 9 | **Patrones adoptados:** hero con vídeo a pantalla completa (Luxury Hero); encuadre que se abre y secuencia anclada al scroll (Luxury Real Estate); texto que se ilumina palabra a palabra (Layered Depth); galería en acordeón para las demos (Luxury Real Estate / Luxury Editorial). | Cada patrón tiene una función: el anclado **demuestra el producto** (4 fotos que convergen en el vídeo) y el acordeón **enseña las demos**. |
| 10 | **Entrada del hero en CSS puro**, no en JS. | Con JS, el titular esperaba a la carga del script y el LCP en móvil subía a 3,4 s. En CSS pinta en el primer fotograma: 2,6 s. |
| 11 | **El «marco que se abre» del hero, solo en escritorio.** | En móvil recortaba el póster al pintarse y el LCP pasaba al vídeo. |
| 12 | **Vídeo del hero vertical (9:16) para móvil**, recortado del 4K original. | Antes el móvil se quedaba con una imagen fija y el escritorio descargaba el 4K: 15 MB y 54 MB. Ahora, 2,1 MB y 4,3 MB. |
| 13 | **Vídeos en AV1 con respaldo en H.264**; el WebM del hero se descarta. | En esta pieza el VP9 pesaba más que el H.264. El AV1 ahorra alrededor de un 20 %. |
| 14 | **Transiciones entre páginas con View Transitions en CSS**, con elemento compartido entre la tarjeta de cada demo y su ficha. | Mejora progresiva sin JS; los navegadores sin soporte navegan con normalidad. |
| 15 | **Lenis (scroll suave) solo con ratón o trackpad** y sin `prefers-reduced-motion`. | No interfiere con el scroll táctil ni con las preferencias de accesibilidad. |

## Copy

| # | Decisión | Motivo |
|---|---|---|
| 16 | **«Vosotros» en todo el sitio.** | La web actual mezclaba «tú» y «vosotros». El cliente es un equipo o una agencia. |
| 17 | **Nuevo titular de la home:** «Vuestras fotos ya tienen una película dentro». La keyword va en el H1 como antetítulo: «Vídeo inmobiliario con IA para villas de lujo». | Un titular con idea propia, sin perder la keyword. |
| 18 | **Nada inventado:** sin testimonios, logos, cifras de clientes ni promesas sobre portales. | La honestidad es el argumento de marca («no inventamos nada») y protege frente a la publicidad engañosa. |
| 19 | **Airbnb:** se dice claramente que la información sobre si admite vídeo se contradice. | Lo pedía la auditoría. Mejor que prometer un canal que no controláis. |
| 20 | **Política de transparencia con la IA en «Sobre LUXAI»** (5 compromisos). | Da confianza y responde al artículo 50 del Reglamento europeo de IA, aplicable desde el 2/08/2026, y a la política de etiquetado de idealista. **Son compromisos redactados por mí: confirmad que los asumís.** |

## Técnica

| # | Decisión | Motivo |
|---|---|---|
| 21 | **Astro 7 estático**, sin frameworks de cliente. | El mismo stack que la web actual, rápido y bueno para SEO. |
| 22 | **Formulario:** se mantiene FormSubmit (`formsubmit.co/ajax/contacto@luxaivideo.com`). Se añaden el pack de interés, la página, el idioma y un honeypot antispam. | No romper la captación de leads que ya funciona. |
| 23 | **El botón de WhatsApp se oculta** mientras no haya número. | En la web actual enlazaba a `wa.me/` vacío. |
| 24 | **Sitemaps propios:** `sitemap-index.xml` → `sitemap-pages.xml` (con hreflang) y `sitemap-video.xml`. Redirección 301 de `/sitemap.xml` y `/sitemap-0.xml`. | La integración oficial no empareja slugs distintos por idioma. |
| 25 | **Barra final en todas las URL** (`trailingSlash: 'always'`). | La web actual tenía enlaces y hreflang sin barra que respondían con 308. |
| 26 | **VideoObject solo en las fichas de demo**, no en la home. | Google indexa el vídeo en su *watch page*. |
| 27 | **CSS en línea** en cada página. | Elimina dos peticiones que bloqueaban el render (unos 160 ms en móvil). |
| 28 | **Los originales de los vídeos se guardan** en `media-originales/`, fuera de la carpeta que se publica. | No se borra nada del propietario. |

## Honestidad del mensaje (decisión añadida durante el control de calidad)

| # | Decisión | Motivo |
|---|---|---|
| 29 | ~~**Se retira la promesa de fidelidad absoluta**~~ *Sustituida por la 36 el 28 sep, al regenerar las demos.* («no inventamos nada», «si la foto no lo muestra, el vídeo tampoco», «comparad: son los mismos»). La sustituye un mensaje verificable: la IA genera el movimiento y las transiciones, puede recrear lo que queda fuera del encuadre, cada plano se revisa con el cliente y el vídeo se etiqueta como IA. | Comparé fotograma a fotograma las dos demos con sus fotos (capturas en `referencias-motionsites/`). La finca muestra un recibidor, un salón con sofás, un porche y una piscina con unas diez tumbonas que no están en ninguna foto; la fachada del inicio y la entrada de la villa tampoco coinciden. Mantener la promesa junto a esas demos sería publicidad engañosa y chocaría con el art. 50 del Reglamento de IA. Si regeneráis las demos para que sean fieles, se puede recuperar un mensaje más fuerte. |
| 30 | **Las fotos de las demos se llaman «fotos de partida», no «fotos reales».** | Por su aspecto podrían ser renders o imágenes generadas, y no lo he podido verificar. |
| 31 | **Botón de pausa en cada vídeo que arranca solo**, y sin reproducción automática con ahorro de datos, red 2G o movimiento reducido. | WCAG 2.2.2 (nivel A) exige poder pausar lo que se mueve más de 5 s. No se bloquea en 3G porque muchas redes móviles reales se clasifican así. |
| 32 | **El formulario funciona sin JavaScript** (endpoint normal de FormSubmit); con JS se envía por AJAX. | Resiliencia: una solicitud de demo no debe depender del JS. |
| 33 | **Precarga de páginas al pasar el ratón** (`prefetchAll`). | Junto con las View Transitions, la navegación entre páginas es casi inmediata. |

## Demos fieles y secciones claras (28 sep 2026)

| # | Decisión | Motivo |
|---|---|---|
| 34 | **Las demos se regeneran con paralaje por profundidad (2.5D), no con vídeo generativo.** Cada plano sale de una sola foto: un mapa de profundidad calculado con IA decide cuánto se desplaza cada píxel, y todos se toman de la propia foto. | Pediste demos fieles a las fotos. Los modelos imagen-a-vídeo (Kling y similares) rellenan lo que queda fuera del encuadre, que era justo el problema de las demos anteriores. El paralaje es fiel por construcción y se puede verificar: el script comprueba en cada fotograma que no se muestrea fuera de la foto. Además, la cuenta de Magnific tenía 5 créditos y un clip de Kling de 5 s en 1080p cuesta 325; no se ha comprado nada. |
| 35 | **Modelo de profundidad: Depth Anything V2 Small (Apache-2.0).** | Las variantes Base, Large y Giant son CC-BY-NC-4.0, no comerciales. Empecé con la Base y la sustituí; los mapas de las dos son prácticamente iguales (comparativa en `herramientas/demos/work/qa/`). |
| 36 | **Vuelve la promesa de fidelidad, con el método a la vista:** «cada plano sale de una sola foto; nada entra en el plano que no estuviera en la foto». | Con las demos nuevas es verificable plano a plano. Obliga también al servicio: si algún vídeo de cliente se hace con vídeo generativo, hay que cambiar el texto (ver `INFORME.md`). |
| 37 | **Secciones en marfil (`#faf8f4`) alternas con el carbón.** Van en claro los bloques de lectura (manifiesto, qué hace la IA, por qué LUXAI, precios, comparativas, FAQ, cuerpo de las guías y textos legales). Se quedan en oscuro los momentos de imagen: hero, pieza de fotos a vídeo, demos, proceso, llamadas a la acción y pie. | Pediste contraste. El claro descansa la vista en los bloques largos y hace que el vídeo, siempre sobre oscuro, pese más. Los componentes heredan los tokens invertidos, así que no hay estilos duplicados. |
| 38 | **Oro oscurecido a `#7a5c34` y botón principal en tinta sobre fondo claro.** El pack recomendado se queda oscuro dentro de su sección clara. | El oro original sobre marfil no llega a AA; el oscuro da 5,8:1. La tarjeta oscura destaca el pack recomendado sin añadir más elementos. |

## Nuevo estilo visual (28 sep 2026, tarde)

| # | Decisión | Motivo |
|---|---|---|
| 39 | **Cambio completo de estilo, tomando como referencia nubo.framer.website:** claro, blanco y hueso, grafito en lugar de negro, esquinas redondeadas, botones píldora y menú en cápsula flotante. Se conservan el logotipo, el contenido, las URL y el SEO. | Lo pediste expresamente. La versión oscura queda guardada en `versiones/` para comparar o volver. |
| 40 | **Tipografías de la referencia: Google Sans Flex y Abel**, las dos con licencia OFL. Google Sans Flex va recortada a los caracteres de la web y al eje de peso 400–600 (31 KB). | Son las familias que definen ese estilo. El recorte compensa que la variable completa pese el doble que la fuente anterior. |
| 41 | **Titulares a dos tonos, marcados con `\|` en los textos**, y una palabra en cursiva champán en la portada, marcada con `*`. | Es el recurso más reconocible de la referencia. Con un marcador en el texto, cada titular decide dónde cambia de tono sin tocar los componentes. En el HTML solo queda el texto. |
| 42 | **El acento cálido solo aparece sobre imagen.** Sobre fondo claro, la jerarquía se hace con grafito y gris. | El champán sobre blanco no llega a contraste AA, y la referencia es monocroma. |
| 43 | **Los textos largos siguen en Google Sans Flex, no en Abel.** Las mayúsculas de Abel quedan para subtítulos, etiquetas y textos cortos de tarjeta. | En las guías, las respuestas de las FAQ y los textos legales, la mayúscula condensada cansa al leer. |
| 44 | **Menú como el de la referencia:** cápsula negra con el logo y el icono en todas las pantallas, que se expande en un panel con los enlaces, una foto de demo y una franja con datos, idioma y botón de demo. | Lo pediste expresamente: «ese me gustaba mucho». La navegación queda a un clic también en escritorio. La conversión la sostienen los botones de la portada y la banda final de cada página. |
| 45 | **Rendimiento móvil:** la foto de portada sin prioridad alta y en AVIF, GSAP después de la carga, imágenes inferiores con prioridad baja y favicon ligero. **Abel sigue precargada.** | En móvil, el LCP es el titular, no la foto (que ocupa toda la pantalla y el navegador trata como fondo). Todo lo que se descargaba antes competía con la fuente del titular. Sin la precarga de Abel, la franja de datos de la portada saltaba (CLS 0,18). |
