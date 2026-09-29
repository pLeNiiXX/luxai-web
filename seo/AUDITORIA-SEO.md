# Auditoría SEO · luxaivideo.com

**Fecha:** 27 de septiembre de 2026
**Tipo:** auditoría completa (keywords ES+EN, on-page, huecos de contenido, técnica y competencia)
**Documento hermano:** `MAPA-KEYWORDS.md`, con la arquitectura final y title, meta y H1 de cada URL.

---

## 1. Resumen ejecutivo

luxaivideo.com tiene una **base técnica limpia** (Lighthouse 100 en SEO y en buenas prácticas y 95 en accesibilidad; canonical, hreflang y schema presentes) y un producto que se diferencia de verdad: servicio hecho por vosotros, de lujo, con **precios publicados** y demos reales. Casi ningún estudio local publica precios (de los revisados en Mallorca y Marbella, solo Kozman Media, en la Costa del Sol) y ninguno ofrece vídeo sin dron. El problema es de **estrategia, no de código**: todo cabe en una sola página de ~840 palabras, así que Google no tiene una URL que posicionar para «precio», «dron», «inmobiliarias», «alquiler vacacional» o «ejemplos». Los vídeos, que son el producto, no pueden aparecer en Google Vídeos, y no hay ni una señal de confianza: titular, autor, casos o política de IA.

**Mayor fortaleza:** oferta clara, con precios y plazos públicos (129 € / 379 € / 649 €, 72 h) y dos demos reales. Frente a la competencia es un diferenciador que casi nadie tiene.

**Las 3 prioridades con más impacto:**
1. **Pasar a una arquitectura multipágina** con una keyword por URL: 16 páginas por idioma en la fase 1 (ver `MAPA-KEYWORDS.md`).
2. **Convertir cada demo en una página de vídeo** (*watch page*) con `VideoObject` y sitemap de vídeo. Hoy los vídeos no se pueden indexar.
3. **Confianza y marca:**
   - Aviso legal completo (titular y NIF; ahora incumple el art. 10 de la LSSI).
   - Página «Sobre LUXAI».
   - Política de transparencia de la IA (el art. 50 de la Ley de IA de la UE se aplica desde el 2/08/2026).
   - Firmar como «LUXAI Video», porque «LUXAI» a secas es de LuxAI S.A., una empresa de robótica.

**Arreglos técnicos rápidos que no pueden esperar:**
- **Peso de la home:** 16 MB en móvil y 53 MB en escritorio, por el vídeo 4K y 120 fotogramas del hero.
- **Duplicados:** el `www` y el staging `*.pages.dev` responden 200.
- **hreflang:** el de la home apunta a una URL que redirige.
- **Medición:** no hay analítica.

**Valoración global: necesita trabajo.** Los cimientos técnicos están bien, pero no hay estrategia de contenidos ni autoridad. No hay nada que impida indexar, pero hoy la web solo puede posicionar para su propia marca y alguna búsqueda muy larga.

---

## 2. Método, fuentes y límites

| Qué | Cómo |
|---|---|
| Rastreo | Descarga directa (curl) de las 6 URL publicadas, robots.txt, sitemaps, cabeceras HTTP y redirecciones; comprobación de las variantes `www`, `http` y `*.pages.dev`. |
| Rendimiento | Lighthouse 12.8.2 en local (Chrome headless), en móvil y escritorio, sobre la home y 3 páginas de la competencia. PageSpeed Insights no estaba disponible (cuota agotada), así que **no hay datos de campo (CrUX)**. |
| Demanda | Autocompletado de Google, unas 130 semillas en España (`hl=es&gl=es`) y 50 en Reino Unido (`hl=en&gl=gb`). Si una búsqueda sale como sugerencia, tiene demanda recurrente; si no sale, la demanda es muy baja. |
| SERP | WebSearch (índice de EE. UU.) con consultas en español y en inglés, y lectura (WebFetch) de las páginas que rankean. Los **dominios** son fiables; las **posiciones exactas**, no. |
| Competencia | Sitemaps, títulos, H1, schema y precios de 8 competidores, más otros actores que aparecieron en las búsquedas. |
| Hechos para las guías | Fuentes primarias siempre que ha sido posible: BOE, Comisión Europea, CAIB, Registradores, centros de ayuda de los portales. |

**Límites:**
- **Ahrefs, Semrush y Similarweb no están conectados.** Los conectores de marketing necesitan autorización en los ajustes de conectores de claude.ai. Por eso no hay volúmenes, KD, backlinks ni tráfico numéricos: toda estimación va con nivel de **confianza (alta / media / baja)**. Si se conecta Ahrefs o Semrush, esta auditoría se puede completar con volúmenes y rankings reales.
- **No he tenido acceso a Search Console.** El dominio está verificado: hay dos registros TXT `google-site-verification` en el DNS. Por eso las «posiciones actuales» de este informe son «no detectada» o «aparece en el índice de EE. UU.», no rankings de Google.es.

---

## 3. Investigación de keywords

### 3.1 Señales de demanda (autocompletado de Google, 27/09/2026)

| Semilla | Mercado | Sugerencias | Qué indica |
|---|---|---|---|
| video inmobiliario | ES | 9: *con ia, precio, con dron, gratis, barcelona, marketing…* | Búsqueda principal viva. La IA y el precio son los modificadores más fuertes. |
| video inmobiliario con ia | ES | «crear video inmobiliario con ia» | Parte de la demanda busca hacerlo por su cuenta, con herramienta. |
| videos para inmobiliarias | ES | *videos ia para…, como hacer…, fotos y videos para…, editor…* | Demanda B2B, mezclada con gente que busca herramientas. |
| video inmobiliario + mallorca / marbella / malaga / alicante / tenerife / canarias / madrid | ES | **0 en las 7** | Demanda local de vídeo muy baja en español. |
| fotografia inmobiliaria + ciudad | ES | madrid, malaga, marbella, valencia… | Lo local existe en fotografía, no en vídeo. |
| formato video idealista / fotos para idealista | ES | sí / «tamaño», «como hacer» | Buen hueco para guías. |
| reels inmobiliarios | ES | *ejemplos, cómo hacer, música* | Guía de fase 2. |
| home staging virtual | ES | 9: *ia, idealista, tarifas…* | Mercado vecino grande. LUXAI no lo ofrece. |
| dron mallorca | ES | *volar, mapa, piloto, curso…* | Intención de aficionado o de normativa. |
| airbnb permite subir videos | ES | sí | Hay dudas reales sobre el vídeo en Airbnb. |
| convertir fotos en video (con ia) | ES | *gratis, online, sin registro* | Intención de herramienta gratis: **no atacar**. |
| ai real estate video | UK | *generator, editor, from photos, maker, free* | SERP de SaaS de autoservicio. |
| luxury real estate video | UK | *production, videographers, cinematic video* | **Intención de servicio de lujo.** |
| real estate video cost | UK | *videography cost, average, drone video pricing* | Guía de precios. |
| mallorca drone / drone marbella | UK | *laws, map, airport, zone, regulations* | Normativa: sección de la guía de dron. |
| airbnb video | UK | *tour, walkthrough, listing, can you post a video on airbnb* | Alquiler vacacional. |
| real estate video mallorca / marbella real estate video | UK | 0 | Volumen bajo. Aun así, el SERP de la versión «videographer» tiene intención B2B (ver 7.4). |

### 3.2 Tabla de oportunidades

Leyenda de oportunidad: combina demanda, dificultad y encaje con el negocio. «Posición actual» sale de WebSearch (índice de EE. UU.); no es un ranking de Google.es.

| # | Keyword | Idioma | Dificultad est. | Demanda (señal) | Oportunidad | Posición actual | Intención | Contenido recomendado | Confianza |
|---|---|---|---|---|---|---|---|---|---|
| 1 | precio vídeo inmobiliario / cuánto cuesta un vídeo inmobiliario | ES | Baja-media | Media | **Alta** | No detectada | Comercial | `/precios/` con comparativa en € (videógrafo, dron, IA) | Media |
| 2 | vídeo inmobiliario con IA | ES | Moderada-alta | Media-alta | **Alta** | No detectada. LUXAI sale en colas largas («video para villas de lujo», «cuántas fotos necesito para vídeo inmobiliario con IA») | Comercial | Home como pilar del servicio | Media |
| 3 | vídeo inmobiliario con dron (vs IA) / alternativa al dron | ES | Media | Media | **Alta** | No detectada | Informacional y comparativa | Guía dron o IA con normativa española | Media |
| 4 | ejemplos de vídeo inmobiliario (con IA) | ES | Baja-media | Media | **Alta** | No detectada | Comercial | `/demostraciones/` más fichas con `VideoObject` | Media |
| 5 | real estate video cost (Spain) | EN | Media en la versión España/€, alta en la genérica | Alta en la genérica; en «Spain» solo salen páginas de EE. UU. (hueco) | **Alta** | No | Comercial | `/en/pricing/` | Media |
| 6 | formato vídeo idealista / vídeo vertical u horizontal | ES | Baja-media | Baja-media | **Alta** | No | Informacional | Guía de formatos con tabla por portal | Media |
| 7 | IA en anuncios inmobiliarios / ¿es legal? | ES | Media (tema YMYL) | Baja pero en aumento (art. 50 desde agosto de 2026, prensa en septiembre) | **Alta** (autoridad y enlaces) | No | Informacional | Guía de IA más política propia | Media |
| 8 | drone-style property video without a drone | EN | Media | Baja-media, emergente | **Alta** | No | Comercial | `/en/` más la guía de dron EN | Media |
| 9 | real estate video Marbella / Mallorca | EN | Fácil-media | Baja (valor B2B alto) | **Alta, condicionada** (fase 2) | No | Comercial local | Páginas locales condicionales | Media |
| 10 | vídeos para inmobiliarias de lujo | ES | Fácil-media | Baja | Media-alta | No | Comercial | `/video-para-inmobiliarias/` | Media |
| 11 | luxury real estate video production | EN | Media-alta | Media | Media | No | Comercial | `/en/real-estate-agencies/` | Media |
| 12 | crear vídeo inmobiliario con IA | ES | Media | Media | Media | No (rankean pedra, cyberclick, iacrea) | Informacional y comercial | `/como-funciona/` | Media |
| 13 | luxury villa rental video / holiday villa video | EN | Fácil-media | Baja-media | Media | No | Comercial | `/en/luxury-vacation-rentals/` | Media |
| 14 | vídeo para alquiler vacacional / ¿Airbnb permite vídeos? | ES | Fácil-media | Baja | Media | No | Informacional y comercial | `/video-alquiler-vacacional/` | Media-baja |
| 15 | cómo hacer fotos inmobiliarias / fotos para idealista | ES | Media | Media | Media | No | Informacional | Guía de fotos | Media |
| 16 | Mallorca drone laws / can you fly a drone in Spain | EN | Media | Media (mucho aficionado) | Media | No | Informacional | Sección de la guía de dron EN | Media |
| 17 | reels inmobiliarios (ejemplos, cómo hacer) | ES | Media | Media | Media (fase 2) | No | Informacional | Guía de reels | Media |
| 18 | AI disclosure real estate listings (EU) | EN | Media-alta | Baja pero en aumento | Media | No | Informacional | Guía de IA EN | Media |
| 19 | vídeo inmobiliario Mallorca | ES | Baja-media | Muy baja | Media (fase 2) | Aparece para «producción vídeo inmobiliario lujo Mallorca» (índice de EE. UU.) | Comercial local | Página local condicional | Baja |
| 20 | tour virtual o vídeo inmobiliario | ES | Fácil-media | Baja-media | Baja-media (fase 2) | No | Informacional | Guía comparativa | Media-baja |
| 21 | vídeos para inmobiliarias (genérico) | ES | Alta | Media | Baja-media | No | Mixta (herramientas) | Secundaria de `/video-para-inmobiliarias/` | Media |
| 22 | AI real estate video (genérico) | EN | **Alta** (SaaS con plan gratis) | Alta | Baja-media (solo como categoría) | No | Herramienta y comercial | `/en/` (no como objetivo de ranking a corto plazo) | Alta |
| 23 | home staging virtual | ES | Alta | Alta | **Nula** (no se ofrece) | — | Herramienta | No atacar | Media |
| 24 | convertir fotos en vídeo con IA gratis | ES | Alta | Alta | **Nula** | — | Herramienta gratis | No atacar | Alta |

### 3.3 Lectura por grupos de búsqueda

- **Vídeo inmobiliario con IA (ES).** El SERP mezcla landings de herramientas (pedra, iacrea, instantdeco, urbanizainteractiva, que anuncia vídeos «desde 10 €»), tutoriales (cyberclick) y apps genéricas (akool, revid, magiclight). La cola de lujo, villa y estilo aéreo está vacía: ahí debe entrar LUXAI.
- **AI real estate video (EN).** Más de 15 SaaS con landings exact-match y plan gratuito: AutoReel, BetterSpace, Reel-E, ListingAI, VideoTour.ai, PropertyPhotoVideo, Pedra. Van de 0 a 60 $/mes y prometen el vídeo «en minutos». LUXAI no compite ahí. Su hueco: servicio hecho por vosotros, dirección de arte de lujo, entrega preparada para portales, etiquetado conforme al AI Act, precio por inmueble en euros y compradores internacionales. El análogo más cercano es YOPRST (Varsovia/Berlín), que produce desde ~2.000 $ ([prst.media](https://prst.media/en/ai-real-estate-videos-what-agencies-need-to-know/)).
- **Dron frente a IA.** En ES, las guías que rankean citan normativa de Chile ([iacrea](https://www.iacrea.com/es/blog/video-inmobiliario/video-con-dron-inmobiliario-la-guia-de-grabacion-2026)) o de EE. UU. ([pedra](https://pedra.ai/blog/drone-real-estate-video)); en EN, todo es FAA/Part 107. El enfoque de España (AESA, RD 517/2024) está sin ocupar.
- **Precio.** En ES hay calculadoras y blogs de servicios (tramitame, inmofotomadrid, fromthesky), pero ninguna guía en euros que compare videógrafo, dron e IA. En EN, la versión «Spain» solo devuelve páginas de EE. UU.
- **Local (Mallorca y Marbella).** En español apenas hay demanda. En inglés hay un SERP B2B de estudios pequeños y directorios; los revisados (viceversamedia, baleardigital, photographermarbellaspain, realestatephotographerspain) **no publican precios ni ofrecen IA**. El volumen es bajo pero el valor es alto.
- **Legal y transparencia.** Tema de actualidad: [Euronews, 25/09/2026](https://www.euronews.com/2026/09/25/could-the-eu-ai-act-deter-housefishing-in-european-real-estate); [Consumo, vía El Confidencial Digital](https://www.elconfidencialdigital.com/articulo/vivir/consumo/20250908121213978941.html); [fotocasa](https://blogprofesional.fotocasa.es/responsabilidad-legal-del-uso-de-ia-en-anuncios-inmobiliarios/), que cita el «art. 52», numeración del borrador; en el texto final es el art. 50.
- **Alquiler vacacional.** SERP informacional (lodgify, holidu, smoobu, comunidad de Airbnb) con información contradictoria sobre si Airbnb admite vídeo. En los foros de anfitriones se ve rechazo a la IA («AI slop»), así que hay que demostrar que el vídeo no inventa nada.

---

## 4. Auditoría on-page (estado actual)

Páginas analizadas: `/`, `/en/`, `/aviso-legal/`, `/privacidad/`, `/en/aviso-legal/` y `/en/privacidad/`.

### 4.1 Lo que ya está bien (no tocar sin motivo)

- Title y meta description presentes y únicos en la home ES y EN. El title ES tiene 55 caracteres y lleva la keyword delante («Vídeos Inmobiliarios con IA»).
- Un solo H1 por página, con la keyword principal («Vídeo inmobiliario con IA» / «AI Real Estate Video»).
- Canonical correcto en todas las páginas, con barra final. `html lang` correcto (`es` / `en`).
- Open Graph y Twitter Card completos, con imagen de 1200×630.
- JSON-LD válido: `ProfessionalService` + `Service` con 3 `Offer` + `FAQPage`.
- robots.txt abierto (incluye GPTBot, ClaudeBot, PerplexityBot y Applebot) y con el sitemap declarado.
- Dominio verificado en Search Console.
- Lighthouse en móvil: SEO 100, buenas prácticas 100, accesibilidad 95, rendimiento 98.

### 4.2 Problemas on-page

| Página | Problema | Severidad | Solución recomendada |
|---|---|---|---|
| Todo el sitio | **Una sola URL comercial por idioma.** Todas las intenciones (precio, proceso, ejemplos, inmobiliarias, alquiler vacacional, dron) compiten dentro de una página de ~840 palabras (ES) y ~825 (EN). Google no tiene una URL específica para cada búsqueda. | **Crítica** | Arquitectura multipágina de `MAPA-KEYWORDS.md`, con una keyword principal por URL. |
| `/` | **Sin `VideoObject`** para las dos demos. Google solo indexa vídeos incrustados en una *watch page* ([Google Search Central](https://developers.google.com/search/docs/appearance/video)), así que hoy las demos no pueden salir en Google Vídeos ni como resultado con vídeo. | Alta | Una página por demo con `VideoObject` (`name`, `description`, `thumbnailUrl`, `uploadDate`, `duration`, `contentUrl`) y sitemap de vídeo. |
| `/` | hreflang `en` apunta a `https://luxaivideo.com/en` (sin barra), que redirige con un 308 a `/en/`. La página EN declara `/en/`, así que el par no es recíproco con la URL canónica. | Alta | Cambiarlo a `https://luxaivideo.com/en/`. Generar el hreflang desde una sola función que siempre añada la barra. |
| `/` | «Por qué elegirnos» solo tiene 2 razones y la FAQ, 3 preguntas. Poca profundidad para competir y pocas respuestas que puedan citar los buscadores con IA. | Alta | Ampliar a 5–6 razones verificables y 6–10 preguntas por página. En el mapa hay más de 100 preguntas reales repartidas por página. |
| `/` | Ninguna prueba social ni autoría visible. Para un servicio de lujo con IA y sin reseñas, es el principal freno de confianza (E-E-A-T). | Alta | `/sobre-luxai/` con persona real, NIF y ubicación. Casos reales cuando los haya. **No inventar testimonios.** |
| `/aviso-legal/` | Faltan el titular (nombre o razón social), el NIF y el domicilio. Incumple el art. 10 de la LSSI y resta confianza. | Alta (legal y confianza) | Completarlo con los datos reales **[CONFIRMAR]**. |
| `/` | Mezcla de tratamiento: «tus villas», «¿Quieres verlo?», «Solicita tu vídeo» (tú) conviven con «Nos enviáis», «Recibís» (vosotros). | Media | «Vosotros» en todo el ES. |
| `/` | Las miniaturas de las fotos originales (9 imágenes) tienen `alt=""`. Son contenido (las fotos reales de las que sale el vídeo), no decoración. | Media | `alt` descriptivo, por ejemplo: «Foto original 2 de 4: terraza con piscina infinita al atardecer». |
| `/` | Los CTA «Pedir demo gratis» y «Elegir pack» son enlaces `mailto:` que Cloudflare ofusca como `/cdn-cgi/l/email-protection#…`, y esa URL da 404 a los bots. El JS los intercepta para abrir el modal, pero sin JS o para un rastreador son enlaces rotos. | Media | Que los CTA enlacen a `/contacto/` (o `/contacto/?pack=profesional`) y que el JS abra el modal encima. Desactivar *Email Obfuscation* si el email se muestra en texto. |
| `/` | El botón «Escribir por WhatsApp» tiene `href="#"` porque el número está vacío. | Media (conversión) | Ocultarlo hasta tener número. |
| `/` | El `Service` del schema dice «Producción de vídeo aéreo con IA para alquileres de lujo» y deja fuera a las inmobiliarias. Los `Offer` no llevan `url`, IVA ni descripción. | Media | `serviceType`: «Vídeo inmobiliario con IA». `Offer` con `priceSpecification` (`valueAddedTaxIncluded: false`), `url` y descripción. |
| Todas | Enlaces internos sin barra final (`/en`, `/aviso-legal`, `/privacidad`, `/en/aviso-legal`, `/en/privacidad`). Cada clic y cada rastreo pasa por un 308. | Media | Barra final en todos los `href` internos: `trailingSlash: 'always'` en Astro y revisar los enlaces escritos a mano. |
| `/` | `ProfessionalService` dice `areaServed: Worldwide` y el `Service` lista cuatro zonas: señales incoherentes. No hay `WebSite` ni `alternateName`. | Baja | Unificarlo (España + internacional). Añadir `WebSite` con `name: LUXAI` y `alternateName: LUXAI Video`. |
| `/` | Las imágenes de las demos no tienen `width` ni `height`. El CLS es 0,001 gracias al CSS, pero es frágil. | Baja | Dimensiones o `aspect-ratio` explícitos. |
| Legales (4) | `x-default` apunta a la home en vez de a la versión ES de cada página. Las meta descriptions son de relleno («Aviso Legal — LUXAI.»). | Baja | `x-default` = versión ES de la misma página. Metas reales (propuestas en el mapa). |
| `/en/` | Los IDs de sección están en español (`/en/#demostraciones`, `/en/#packs`). | Baja | Se resuelve con la arquitectura multipágina. |

### 4.3 Marca: conflicto de nombre en la SERP

Buscar «LUXAI» devuelve LuxAI S.A., empresa luxemburguesa de robótica social (QTrobot), en todos los resultados: [luxai.com](https://luxai.com/), [LinkedIn](https://www.linkedin.com/company/luxai), [Crunchbase](https://www.crunchbase.com/organization/luxai). Buscar «luxaivideo.com» tampoco devuelve la web en el índice de EE. UU. Consecuencia: la búsqueda de marca no va a funcionar sola. Hay que firmar como **«LUXAI Video»** donde pueda haber confusión (schema `alternateName`, perfiles sociales, firma de email, prensa) y enlazar desde perfiles propios: YouTube con las demos, Instagram y LinkedIn.

---

## 5. Huecos de contenido

**Estado actual.** Solo hay contenido de decisión (packs y formulario) dentro de una página. Nada de conocimiento (guías) ni de consideración (comparativas, ejemplos a fondo, precios de mercado). No hay contenido desactualizado porque el sitio es de septiembre de 2026. Contenido pobre: la home intenta cubrir todas las intenciones con ~840 palabras.

| # | Tema o keyword | Por qué importa | Formato | Prioridad | Esfuerzo |
|---|---|---|---|---|---|
| 1 | Comparativa de precios en €: videógrafo, dron o IA | Hay demanda («video inmobiliario precio») y ninguna guía española en euros que compare las tres opciones. En EN, «Spain» solo da resultados de EE. UU. La mayoría de los estudios locales no publica precios. | Sección central de `/precios/` | Alta | Media jornada |
| 2 | Páginas de vídeo por demo + `VideoObject` + sitemap de vídeo | Sin *watch page* no hay indexación del vídeo. Pedra tiene 6 sitemaps de vídeo. | Fichas de demo | Alta | Media jornada, más producir demos nuevas |
| 3 | Dron o IA con normativa española: RD 517/2024, aviso a Interior con 5 días naturales, zonas de aeródromo, espacios protegidos de Baleares | Las guías que rankean usan normativa de Chile o de la FAA. Responde a la promesa central («sin dron»). | Guía ES/EN | Alta | 1–2 días |
| 4 | Política de transparencia con la IA + guía «IA en anuncios inmobiliarios» | El art. 50 se aplica desde el 2/08/2026 y el tema está en prensa. Es la objeción número uno de un vendedor de lujo. FotoArte ya vende «sin manipular con IA». | Guía + bloque en `/sobre-luxai/` | Alta | 1–2 días más revisión legal |
| 5 | Página «Sobre» con titular, persona y ubicación | Confianza (E-E-A-T), cumplimiento de la LSSI y desambiguación frente a LuxAI S.A. | Página | Alta | 2 h |
| 6 | Tabla de especificaciones de vídeo por portal y red: idealista, Fotocasa, Kyero, Rightmove, JamesEdition, Reels, TikTok, YouTube | No existe ninguna que las junte. Kyero solo acepta YouTube/Vimeo en horizontal y Rightmove, incrustado o enlace. | Guía ES/EN | Media | Media jornada |
| 7 | «¿Airbnb admite vídeo?» y dónde sí rinde el vídeo de una villa | Información contradictoria en la red y 5 o más hilos en la comunidad de Airbnb. | Sección de `/video-alquiler-vacacional/` | Media | 1–2 h (una vez verificado) |
| 8 | «¿En qué se diferencia de una app de 10–29 €?» | Urbaniza anuncia vídeos desde 10 € y Pedra cuesta 29 €/mes: el comprador va a comparar. | Sección de la home y de `/precios/` | Media | 1–2 h |
| 9 | Cómo hacer fotos inmobiliarias que sirvan para vídeo | Demanda informacional («como hacer fotos para idealista») y mejora la materia prima de los pedidos. | Guía | Media | Media jornada |
| 10 | FAQ ampliada, contextual y sin duplicar | Solo hay 3 FAQ, y el mapa recoge más de 100 preguntas reales. | FAQ por página + `/preguntas-frecuentes/` | Media | Media jornada |
| 11 | Páginas locales Mallorca y Marbella (condicionales) | Hueco B2B en EN: los estudios revisados no publican precios ni usan IA. Mallorca es la base del negocio. | Landing local única | Media (fase 2) | 1 día cada una |
| 12 | Casos de estudio reales | Pedra titula sus casos por agencia y ciudad. Es la mejor prueba social posible y no se puede inventar. | `/casos/` | Media (cuando haya clientes) | Media jornada por caso |
| 13 | Reels inmobiliarios | Demanda en el autocompletado. Encaja con el entregable 9:16. | Guía (fase 2) | Media-baja | Media jornada |

**Clusters temáticos:**
1. **Vídeo inmobiliario con IA:** home (pilar) + cómo funciona + demos + precios.
2. **Dron frente a IA:** guía + páginas locales.
3. **Canales y audiencias:** inmobiliarias + alquiler vacacional + formatos + fotos + reels.
4. **Confianza:** sobre + guía de IA + FAQ.

---

## 6. Checklist técnico

| Comprobación | Estado | Detalle |
|---|---|---|
| HTTPS y redirección HTTP→HTTPS | Pass | `http://` → 301 → `https://`. HTTP/2 y HTTP/3, con 103 Early Hints para el póster del hero. |
| Versión www | **Fail** | `https://www.luxaivideo.com/` y cualquier ruta (probado con `/en/`) responden **200** con el sitio completo. El canonical apunta al dominio sin www y lo mitiga, pero hay contenido duplicado por host. **Arreglo:** una Redirect Rule en Cloudflare, `www.*` → 301 → `https://luxaivideo.com/${path}`. |
| Staging `luxai-web-bw9.pages.dev` | **Fail** | Responde 200, con canonical a luxaivideo.com y **sin `noindex`**. Ya aparece en resultados de búsqueda (índice de EE. UU.) para «video para villas de lujo». **Arreglo:** cabecera `X-Robots-Tag: noindex` para el host `*.pages.dev` (regla en `_headers` de Cloudflare Pages) o 301 al dominio propio mediante Bulk Redirects. |
| Barra final | Warning | Sin barra → 308 a la versión con barra, que es correcto. Pero hay enlaces internos y un hreflang que dependen de esa redirección. |
| robots.txt | Pass | Abierto, con los bots de IA permitidos y el sitemap declarado. |
| Sitemap | Warning | `/sitemap-index.xml` → `/sitemap-0.xml`, con 6 URL y alternates hreflang (bien). `/sitemap.xml` da **404**, y muchas herramientas y bots lo buscan ahí: añadir 301. No hay `x-default` en el sitemap. Declara el namespace de vídeo pero no lista ningún vídeo. |
| Canonical | Pass | Autorreferente, con barra, en las 6 URL. |
| hreflang | Warning | La home ES apunta a `en` sin barra (308). Las legales tienen `x-default` hacia la home. El resto es recíproco. |
| Datos estructurados | Warning | Válidos pero incompletos: faltan `WebSite`, `VideoObject`, `BreadcrumbList` (en cuanto haya subpáginas) y `Offer` con IVA. Aviso: desde 2023, Google solo muestra resultados enriquecidos de FAQ para webs gubernamentales y de salud ([documentación](https://developers.google.com/search/docs/appearance/structured-data/faqpage)). `FAQPage` sigue siendo útil para buscadores con IA, pero no dará desplegables en Google. |
| 404 | Pass | Las rutas que no existen devuelven un 404 real. `favicon.ico` y `apple-touch-icon.png` dan 404; es menor, porque en el `<head>` se declaran PNG. |
| llms.txt | Warning (opcional) | Da 404. Google no lo usa y el beneficio es bajo, pero cuesta poco: crearlo con la arquitectura nueva. |
| Rendimiento en móvil (laboratorio) | Pass con reservas | Rendimiento 98 · FCP 1,1 s · **LCP 2,5 s** (justo en el límite de «bueno») · TBT 20 ms · CLS 0,001. El elemento LCP es un párrafo del hero (`hero__sub`) que entra con animación, y eso retrasa el LCP. **Arreglo:** que el texto del hero se pinte sin esperar a GSAP y animar solo `transform`/`opacity` a partir de un estado ya visible. |
| Rendimiento en escritorio (laboratorio) | Warning | Rendimiento 88 · LCP 1,6 s · Speed Index 2,4 s. |
| **Peso de la página** | **Fail** | **Móvil: 16.302 KiB (≈16 MB)**, de los que ≈15 MB son `hero-4k.mp4`. **Escritorio: 52.678 KiB (≈53 MB)**: `hero-4k.mp4` (12 MB) **más** una secuencia de 120 fotogramas WebP (`/media/hero-frames/desktop/frame-001…120.webp`, 38 MB). **Causa:** el `<video>` del hero lleva `preload="auto"` y la primera `<source>` es `hero-4k.mp4` (19,4 MB) sin atributo `media`. Por eso **todos** los navegadores eligen el 4K, y el WebM 2K y el MP4 de 1280 no se usan nunca. **Arreglo:** 1280 en móvil y 2K en escritorio (elegido por JS o con `media`), `preload="metadata"`, el póster como LCP, y la secuencia de fotogramas cargada solo si se usa, comprimida o sustituida por *scrubbing* del vídeo. |
| Imágenes | Warning | `hero-2k.webp` (570 KB, 2560×1440) se sirve también en móvil: sobran ~400 KB. Las `photo-1.webp` de las demos están sobredimensionadas (~430 KB de ahorro). No hay `srcset`. |
| Caché | Warning | `/media/` se sirve con `max-age=14400` (4 h) y sin hash en el nombre. Ponerle hash o versión y `max-age` de 1 año con `immutable`. |
| Accesibilidad | Warning | 95/100. Hay un `role="tablist"` en `.demo-thumbs` sin hijos `role="tab"` (aria-required-children). Las miniaturas no tienen `alt`. |
| Móvil | Pass | Viewport correcto, sin scroll horizontal. |
| Analítica | **Fail** | No hay ninguna herramienta de medición. **Arreglo:** Cloudflare Web Analytics (sin cookies ni banner), un evento al enviar el formulario (con UTM y página de origen) y Search Console con el sitemap enviado. |
| Indexación | Sin verificar | Revisar en Search Console: «Páginas», «Inspección de URL» de `/` y `/en/`, y más adelante el informe de «Indexación de vídeos». |
| Perfil de Empresa de Google | Aviso | Solo pueden tenerlo negocios con ubicación que los clientes visiten o que se desplacen a donde está el cliente ([directrices](https://support.google.com/business/answer/3038177?hl=en)). Con entrega 100 % remota, **no crear perfil** salvo que haya atención presencial real. |

---

## 7. Competencia

### 7.1 Comparativa principal

Se eligen tres rivales representativos: el SaaS líder en España (Pedra), el competidor directo con el mismo producto (FotoArte) y el estudio de lujo local (Improntia). Lighthouse en móvil, una sola pasada de laboratorio el 27/09/2026, sobre la página comercial de vídeo de cada uno.

| Dimensión | LUXAI | Pedra | FotoArte | Improntia | Ganador |
|---|---|---|---|---|---|
| Páginas en el sitemap (aprox. indexables) | 6 | ~1.855 (6 idiomas, ~310 por idioma) | 18 | 64 (36 de ciudad con plantilla) | Pedra |
| Keywords en title/H1 | 1 grupo: vídeo inmobiliario con IA para villas de lujo | Vídeo desde fotos, home staging virtual, tours 360, app de vídeo | Vídeo inmobiliario desde fotos con IA; fotógrafo en Alicante/Murcia | Vídeo inmobiliario y alquiler vacacional en Marbella; dron | Pedra |
| Profundidad de contenido | ~840 palabras, sin blog | ~163 posts en ES, 37 páginas de ayuda, comparativas | 5 posts | Sin blog; páginas de ~2.600 palabras idénticas al 91 % | Pedra |
| Frecuencia de publicación | Ninguna | Alta: blog más 32 *release notes* | Baja | Nula | Pedra |
| Señales de enlaces (cualitativas, sin Ahrefs) | Dominio nuevo, sin menciones detectadas | 30.000 usuarios, partners (RE/MAX), casos con eXp, Capterra y G2 | Locales | Locales, muro de logos | Pedra |
| Técnica (Lighthouse en móvil) | **Rendimiento 98 · SEO 100 · LCP 2,5 s** · 16 MB | Rendimiento 53 · SEO 100 · LCP 13,2 s · ≈90 MB (91.660 KiB) | Rendimiento 94 · SEO 92 · LCP 2,6 s · 3 MB | Rendimiento 80 · SEO 100 · LCP 3,0 s · 35 MB | **LUXAI** |
| SERP features y schema | Ninguna conocida; schema básico | `VideoObject`, `AggregateRating` (inflado: 30.000 = usuarios), 6 sitemaps de vídeo | Schema local, `Offer` | `LocalBusiness`, `Service` | Pedra |
| Precios públicos | **Sí** (129 / 379 / 649 € + IVA) | Sí (29 €/mes) | Sí (120 € reportaje + vídeo IA) | No | Empate LUXAI / FotoArte (en precio para lujo, LUXAI) |
| Idiomas | ES/EN | 6 | ES | ES/EN | Pedra |
| Prueba social | Ninguna | Fuerte | 3 testimonios anónimos y una política «sin manipular con IA» | Contadores y logos | Pedra |

Fuentes: [pedra.ai/es/video-para-inmobiliarias](https://pedra.ai/es/video-para-inmobiliarias), [pedra.ai/es/pricing](https://pedra.ai/es/pricing), [pedra.ai/sitemap_index.xml](https://pedra.ai/sitemap_index.xml), [fotoarteinmobiliario.es/video-inmobiliario-desde-fotografias-ia](https://fotoarteinmobiliario.es/video-inmobiliario-desde-fotografias-ia/), [fotoarteinmobiliario.es/fotografia-inmobiliaria-verificada](https://fotoarteinmobiliario.es/fotografia-inmobiliaria-verificada/), [improntia.com](https://improntia.com/) (comparad [Estepona](https://improntia.com/fotografia-inmobiliaria-alquiler-vacacional-propiedades-estepona.php) con [Mijas](https://improntia.com/fotografia-inmobiliaria-alquiler-vacacional-propiedades-mijas.php)).

**Lectura:** LUXAI solo gana en técnica y en transparencia de precio para el segmento de lujo. Pedra gana en todo lo demás, pero vende otra cosa: autoservicio a 29 €/mes. No hay que ganarle en volumen, sino ocupar lo que Pedra no puede ser: servicio de lujo, hecho por vosotros, en España y etiquetado.

### 7.2 Fichas breves del resto

| Competidor | Qué es | Dato clave | Qué hacer |
|---|---|---|---|
| [urbanizainteractiva.com](https://urbanizainteractiva.com/videos-inmobiliarios-inteligencia-artificial/) | Agencia de inbound inmobiliario (Vitoria) con una herramienta de vídeo IA | Title exact-match «Videos inmobiliarios con Inteligencia artificial»; «desde 10 €»; 1.321 URL, ~310 de contenido real | Explicar por qué 129 € no es un pase de diapositivas de 10 €. |
| [instantdeco.ai](https://instantdeco.ai/es/caracteristicas/videos-inmobiliarios-ia/) | SaaS de staging y edición; el vídeo es secundario | 14–49 $/mes; 6 idiomas; precio en el title | Amenaza baja en vídeo. |
| [inmorobot.com](https://www.inmorobot.com/) | Directorio de herramientas IA para inmobiliarias (con afiliación) | 102 posts. Sus artículos de vídeo IA no mencionan a Pedra ni a LUXAI | **Pedir la inclusión** en el directorio y en «mejores herramientas de vídeo IA». |
| [magiclight.ai](https://magiclight.ai/tools/ai-real-estate-video-generator/) | Generador genérico de vídeo IA | ~5.900 páginas programáticas de «tools» en 16 idiomas | No es competidor de compra. No copiar el modelo programático. |
| [bynau.com](https://bynau.com/fotografia-real-estate-marbella-malaga/) | Estudio de foto y vídeo en Marbella | Sin H1 en la página de real estate; formulario que cualifica por valor del inmueble | Copiar la idea de cualificar por valor en el formulario. |
| [floorfy.com](https://floorfy.com/) | Proptech española de tours y vídeo IA | Desde 74 €/mes o 999 € el primer año | Otro paquete de autoservicio. |
| SaaS EN (AutoReel, BetterSpace, Reel-E, ListingAI, VideoTour.ai, PropertyPhotoVideo) | Autoservicio para agentes de EE. UU. | 0–60 $/mes; «en minutos»; mucho contenido comparativo y de costes | No competir por «AI real estate video generator». |
| [YOPRST / prst.media](https://prst.media/en/ai-real-estate-videos-what-agencies-need-to-know/) | Servicio de vídeo IA de gama alta (Varsovia/Berlín) | Desde ~2.000 $, argumento de «la IA genérica no vende un ático de 5 M$» | Es el referente de posicionamiento más parecido. Validar el precio de LUXAI al alza cuando acabe el lanzamiento. |
| Idealista (servicio propio de vídeo) | El portal vende vídeo a propietarios ([idealista](https://www.idealista.com/en/propietarios/video-para-vender-alquilar-casa)) | Competidor para particulares | LUXAI apunta a agencias y villas, no a particulares. |

### 7.3 Precios públicos del mercado (para la comparativa de `/precios/`)

| Proveedor | Qué | Precio | Fuente | Confianza |
|---|---|---|---|---|
| Blue Iris Media (Barcelona / Costa Dorada) | Paquete villa: 50–60 fotos, vídeo de 1–2 min, dron | 359 € + IVA | [tarifas 2026](https://www.blueirismedia.es/s/tarifas2026.pdf) | Alta |
| Blue Iris Media | Vídeo horizontal de 2–3 min con dron / solo dron | 160 € / desde 90 € + IVA | Ídem | Alta |
| Kozman Media (Costa del Sol) | Villa: 30 o más fotos y recorrido de 90–120 s | 300 € (IVA no indicado); dron +125 €; vertical +100 € | [kozmanmedia.com/services](https://kozmanmedia.com/services/) | Alta |
| From the Sky (España) | Vídeo de vivienda con dron / media jornada / cine o FPV | 150–300 € / 250–450 € / 600–1.200 € | [fromthesky.es](https://fromthesky.es/cuanto-cuesta-video-grabado-dron) | Media |
| FotoArte (Alicante/Murcia) | Reportaje de fotos + vídeo con IA / pack de vídeo premium con dron | 120 € / 320 € + IVA | [fotoarteinmobiliario.es](https://fotoarteinmobiliario.es/servicios-fotografia-inmobiliaria-en-alicante-y-murcia/) | Alta |
| Pedra | Referencia que da el propio SaaS para un videógrafo | «300–500 € por propiedad» | [pedra.ai](https://pedra.ai/es/video-para-inmobiliarias) | Media (es la cifra de un competidor) |
| Estudios de Mallorca y Marbella (Balear Digital, Viceversa, Improntia, ByNau) | Vídeo inmobiliario | **No publican precio** | Webs de cada uno | Alta |

**Recomendación de precio (no es SEO, pero afecta a la conversión):** los 129 € de Esencial están por debajo de cualquier estudio local y por encima de las apps. Presentarlo como «sin rodaje, sin dron, con dirección de arte», y **no** como la opción barata.

### 7.4 Quién ocupa el SERP, por grupo de búsqueda

| Grupo | Dominios que se repiten | Tipo |
|---|---|---|
| Vídeo inmobiliario con IA (ES) | cyberclick.es, pedra.ai, iacrea.com, instantdeco.ai, fotoarteinmobiliario.es, urbanizainteractiva.com, roomlift.ai, vivideo.ai; genéricas: akool, revid, magiclight | Herramientas y tutoriales |
| AI real estate video (EN) | autoreelapp.com, listingai.co, betterspace.ai, stagerai.com, photoaivideo.com, videotour.ai, reel-e.ai; genéricas: luma, veed, invideo | SaaS |
| Precio (ES) | tramitame.com, inmofotomadrid.es, fromthesky.es, cronoshare.com, tourestateai.com | Guías y servicios |
| Dron (ES), local | javiergomiz.com, baleardigital.es, urbanerfilms.com, juanjosobrino.com, drone-marbella.com, horizonskydrone.es, improntia.com | Operadores locales |
| Local EN (Mallorca, Marbella) | viceversamedia.eu, photographermarbellaspain.com, baleardigital.es, mallorca.com, seemallorca.com, dronesmallorca.es | Estudios y directorios; los revisados no publican precios ni usan IA |
| Alquiler vacacional | lodgify.com, holidu.es, smoobu.com, gescav.com, community.withairbnb.com | Software de gestión y foros |
| IA y legalidad | blogprofesional.fotocasa.es, euronews.com, letslaw.es, artificialintelligenceact.eu, housingwire.com | Portales, prensa y despachos |

### 7.5 Cinco conclusiones competitivas

1. **No pelear por la búsqueda genérica con precio de herramienta.** «Vídeo inmobiliario con IA desde fotos» ya lo ocupan herramientas de 10–29 €/mes. LUXAI gana en los modificadores de lujo, «sin dron», España, villas y alquiler vacacional.
2. **La transparencia es posicionamiento.** FotoArte ya vende «sin manipular con IA» y cita el art. 50. LUXAI debe ir más allá: política pública, etiqueta visible en cada vídeo y originales guardados.
3. **Contenido de fondo de embudo, no volumen.** Con Pedra y sus ~163 posts no se compite en cantidad. Mejor 6–8 páginas de decisión y consideración con su gemela en EN, más **pedir la inclusión** en InmoRobot y en directorios locales.
4. **Local sin *doorway*.** Improntia tiene 36 páginas de ciudad con plantilla. Dos páginas locales de verdad (Mallorca y Marbella, con caso real) pueden superarla. Un juego de cuatro zonas vacías, no.
5. **Técnica como ventaja.** LUXAI ya carga mejor que Pedra, que tarda 13 s en LCP y pesa ≈90 MB en su página de vídeo. Si se arregla el peso del hero y se añaden `VideoObject` y sitemap de vídeo, la ventaja técnica será clara.

---

## 8. Validación de la arquitectura propuesta (resumen)

El detalle completo, con keywords, title, meta, H1 y enlaces de cada URL, está en `MAPA-KEYWORDS.md`.

| Propuesta | Decisión |
|---|---|
| `/` | Validada, y pasa a ser **el pilar del servicio**. |
| `/video-inmobiliario-ia/` | **Descartada**: canibalizaría la home (misma keyword y misma intención). Su contenido va a la home. |
| `/demostraciones/` + 2 fichas | Validada (prioridad alta, por la indexación del vídeo). |
| `/precios/` | Validada. **Absorbe** la guía «¿precio de un vídeo inmobiliario?», que se descarta como URL. |
| `/como-funciona/` | Validada, con la keyword «crear vídeo inmobiliario con IA». |
| `/video-para-inmobiliarias/` | Validada, con la keyword «vídeos para inmobiliarias de lujo» (el genérico es difícil). |
| `/video-alquiler-vacacional/` | Validada (demanda baja en ES, media en EN). |
| `/zonas/` + 4 zonas | **Descartada** como juego de páginas (sin demanda en ES y con riesgo de *doorway*). **Se sustituye** por 2 páginas locales **condicionales** de fase 2 (`/video-inmobiliario-mallorca/` y `/video-inmobiliario-marbella/`), solo con caso real y contenido único. Costa Blanca y Canarias, descartadas. |
| `/guias/` + IA o dron, fotos, formatos, transparencia | Validadas (la de fotos, reorientada a «cómo hacer fotos inmobiliarias»). |
| `/preguntas-frecuentes/`, `/sobre-luxai/`, `/contacto/` | Validadas. En la FAQ, sin duplicar preguntas de otras páginas. |
| EN con slugs en inglés | Validado. Se descarta `/en/ai-real-estate-video/` (fusionada con `/en/`). |

**Resultado:** 16 URL por idioma en la fase 1, más las legales; en la fase 2, 2 páginas locales, 2 guías y demos o casos nuevos.

---

## 9. Plan de acción priorizado

### 9.1 Quick wins (esta semana)

| # | Qué hacer | Impacto | Esfuerzo | Dependencias |
|---|---|---|---|---|
| 1 | Redirect Rule en Cloudflare: `www.luxaivideo.com/*` → 301 → `https://luxaivideo.com/$1` | Alto | 15 min | Acceso a Cloudflare |
| 2 | Sacar el staging `luxai-web-bw9.pages.dev` del índice: `X-Robots-Tag: noindex` en `_headers` para el host pages.dev, o Bulk Redirect 301 al dominio | Alto (el duplicado ya se ve en buscadores) | 15–30 min | Cloudflare Pages |
| 3 | hreflang de la home `/en` → `/en/`; barra final en todos los enlaces internos; `x-default` de las legales hacia su versión ES | Medio | 30 min | — |
| 4 | `/sitemap.xml` → 301 → `/sitemap-index.xml` | Bajo-medio | 10 min | — |
| 5 | Hero: sacar `hero-4k.mp4` de primera fuente (1280 en móvil, 2K en escritorio), `preload="metadata"`, póster como LCP; cargar los 120 fotogramas solo si se usan (y comprimirlos) o sustituirlos por *scrubbing* del vídeo. Objetivo: menos de 3 MB en móvil y menos de 8 MB en escritorio en la primera carga | Alto (Core Web Vitals, datos móviles, coste) | 1–2 h | Revisar la animación GSAP del hero |
| 6 | Medición: Cloudflare Web Analytics, evento de envío del formulario (con UTM), sitemap enviado en Search Console y revisión de la indexación de `/` y `/en/` | Alto | 30–45 min | Acceso a Cloudflare y Search Console |
| 7 | Aviso legal con titular, NIF y domicilio | Alto (legal y confianza) | 15 min | Datos reales **[CONFIRMAR]** |
| 8 | `alt` descriptivo en las 9 miniaturas; corregir el `role="tablist"` (hijos `role="tab"` o quitar el rol) | Medio | 30 min | — |
| 9 | «Vosotros» en todo el texto ES | Medio | 30 min | — |
| 10 | Schema: `serviceType` «Vídeo inmobiliario con IA»; `Offer` con `priceSpecification` (IVA no incluido) y `url`; `WebSite` con `alternateName: LUXAI Video` | Medio | 30 min | — |
| 11 | CTA hacia `/contacto/` (o `#contacto` mientras siga siendo una sola página) en vez de `mailto:`; desactivar Email Obfuscation; ocultar WhatsApp hasta tener número | Medio | 30 min | — |
| 12 | Etiqueta visible en las demos y en los vídeos entregados, por ejemplo «Movimiento de cámara generado con IA a partir de fotos reales. La propiedad no se ha alterado.» | Alto (confianza y probable obligación del art. 50.4 para quien publica) | 1 h | Validación legal del texto |
| 13 | Title de la home con la marca desambiguada; perfiles de YouTube, Instagram y LinkedIn como «LUXAI Video» con enlace a la web | Medio | 1 h | — |

### 9.2 Inversiones estratégicas (este trimestre)

| # | Qué hacer | Impacto | Esfuerzo | Dependencias |
|---|---|---|---|---|
| 1 | **Migración a la arquitectura multipágina ES/EN** (16 URL por idioma), con migas de pan, hreflang recíproco, schema por tipo de página y enlazado interno del mapa | Alto | 5–8 días | `MAPA-KEYWORDS.md`, copy con «vosotros», quick wins 3, 5 y 10 |
| 2 | **Páginas de vídeo por demo** + `VideoObject` + sitemap de vídeo (ES y EN) + **4 demos nuevas** (objetivo: 6 en 6 meses: ático, obra nueva, villa de alquiler, interior) | Alto | 2–3 días, más la producción | Fotos con permiso de uso |
| 3 | `/precios/` con la comparativa en € (tabla 7.3, con fecha) y «¿en qué se diferencia de una app?» | Alto | Media jornada | Punto 1 |
| 4 | Guía **dron o IA** (ES/EN) con el RD 517/2024, el aviso a Interior, las zonas de aeródromo, los espacios protegidos de Baleares y los precios | Alto | 1–2 días | Ficha de hechos (fuentes en el anexo) |
| 5 | **`/sobre-luxai/` + política de transparencia con la IA** (5 compromisos verificables) + guía «IA en anuncios inmobiliarios» | Alto (confianza y enlaces) | 1–2 días | Revisión legal; datos del titular |
| 6 | Guías de **formatos** (tabla por portal) y de **fotos** | Medio | 1 día cada una | Verificar las especificaciones de idealista y Fotocasa |
| 7 | **Enlaces y menciones:** inclusión en InmoRobot y en sus comparativas; directorios locales (mallorca.com, seemallorca.com, tmdirectibiza); canal de YouTube con las demos; nota de prensa con el ángulo «IA etiquetada y fiel a la propiedad» (AI Act) a medios de Baleares y a prensa inmobiliaria | Medio-alto | Continuo, 2–3 h por semana | Página «Sobre» y guía de IA publicadas |
| 8 | **Páginas locales** Mallorca y Marbella (ES/EN), **solo con caso real** y contenido único | Medio | 1 día cada una | Un cliente o una demo local |
| 9 | Casos de estudio reales, con permiso y métricas verificables | Alto (conversión) | Media jornada por caso | Clientes |
| 10 | `llms.txt` y coherencia de entidad (mismo nombre, descripción y datos en la web, el schema y los perfiles) | Bajo-medio | 1 h | Punto 1 |
| 11 | (Fase 3, opcional) **versión DE** para el comprador y la agencia germanoparlante en Mallorca: los alemanes son el 6,52 % de los compradores extranjeros en España, la segunda nacionalidad ([ERI 2025](https://www.registradores.org/documents/33383/148210/ERI+Anuario+2025.pdf)) | Medio | 3–5 días | Datos de Search Console y de la demanda de la versión EN |

### 9.3 Qué medir (a partir de la semana 1)

- **Search Console:** impresiones y clics por grupo de URL (servicio, precios, guías, demos), consultas nuevas cada mes e informe de indexación de vídeos.
- **Analítica:** solicitudes de demo por página de entrada y por UTM; conversión de visita a demo de `/precios/` y de las guías.
- **Posición en Google.es y Google.co.uk** de 10 keywords objetivo: las filas 1–10 de la tabla 3.2. Primer punto de control a los 90 días de la migración.

---

## 10. Siguientes pasos que puedo preparar

- Briefs de contenido para las 4 guías y para `/precios/`, con estructura H2/H3, fuentes y FAQ asignadas.
- El copy completo (ES con «vosotros» y EN adaptado) de la home pilar y de las páginas de audiencia.
- Un calendario de publicación a 12 semanas basado en los huecos de contenido.
- La especificación técnica de la migración: rutas de Astro, diccionarios de idioma, `routes` para hreflang, schema por tipo y reglas de Cloudflare.
- Repetir la auditoría con volúmenes reales cuando se conecte Ahrefs o Semrush.

---

## Anexo: fuentes principales

**Google:**
- [Vídeo y *watch pages*](https://developers.google.com/search/docs/appearance/video)
- [FAQPage](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- [Políticas de spam (*doorways*)](https://developers.google.com/search/docs/essentials/spam-policies)
- [Directrices del Perfil de Empresa](https://support.google.com/business/answer/3038177?hl=en)

**Normativa:**
- [RD 517/2024 (BOE)](https://www.boe.es/buscar/act.php?id=BOE-A-2024-11377)
- [ENAIRE Drones](https://drones.enaire.es/)
- [Espacios naturales protegidos de Baleares, vuelo con dron](https://www.caib.es/sites/espaisnaturalsprotegits/es/5_at_vuelo_con_dron)
- [Red Natura 2000 de Baleares, drones](https://www.caib.es/sites/xarxanatura/es/uso_de_drones/)
- [RD 515/1989](https://www.boe.es/eli/es/rd/1989/04/21/515)
- [Ley 34/1988 General de Publicidad](https://www.boe.es/buscar/act.php?id=BOE-A-1988-26156)

**IA:**
- [Comisión Europea, FAQ del art. 50](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act)
- [Art. 50 del AI Act](https://artificialintelligenceact.eu/article/50/)
- [Código de buenas prácticas sobre contenido generado con IA](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content)
- [Proyecto de Ley Orgánica de IA (BOCG, 12/06/2026)](https://www.congreso.es/public_oficiales/L15/CONG/BOCG/A/BOCG-15-A-97-1.PDF)
- [California AB 723](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB723)
- [HousingWire, aviso de vídeo IA](https://www.housingwire.com/articles/ai-listing-video-disclosure-test/)
- [Euronews, 25/09/2026](https://www.euronews.com/2026/09/25/could-the-eu-ai-act-deter-housefishing-in-european-real-estate)

**Portales y plataformas:**
- [Kyero, vídeo](https://help.kyero.com/adding-a-video-to-a-property)
- [Rightmove Hub, vídeo](https://hub.rightmove.co.uk/how-to-share-a-virtual-tour-or-video-on-your-rightmove-listing/)
- [Witei, sobre idealista](https://faq.witei.com/en/articles/118118-idealista)
- [PDF de idealista](https://st3.idealista.com/static/es/pdf/tips/trucos_para_fotos_videos.pdf)
- [YouTube, formatos](https://support.google.com/youtube/answer/1722171)
- [YouTube Shorts](https://support.google.com/youtube/answer/12779649)
- [Ayuda de Airbnb (verificación con vídeo)](https://www.airbnb.com/help/article/3776)

**Mercado:**
- [Registradores, Anuario ERI 2025](https://www.registradores.org/documents/33383/148210/ERI+Anuario+2025.pdf): compradores extranjeros en 2025, 29,86 % en Baleares y 32,8 % en la provincia de Málaga, frente al 13,82 % de media en España.

**Estadísticas que NO hay que usar:** «403 % más consultas con vídeo» y «+40 % de leads / se vende un 50–75 % más rápido con home staging virtual». Circulan sin fuente primaria localizable.
