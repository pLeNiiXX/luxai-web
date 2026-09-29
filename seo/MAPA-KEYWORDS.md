# Mapa de keywords y arquitectura final · luxaivideo.com

**Fecha:** 27 de septiembre de 2026 · **Complementa a:** `AUDITORIA-SEO.md` (misma carpeta).

## Cómo leer este documento

- **Regla de oro:** cada URL tiene **una** keyword principal y ninguna otra URL la usa como principal ni como secundaria. Si dos páginas perseguían lo mismo, se han fusionado.
- **Sin volúmenes inventados.** No hay Ahrefs ni Similarweb conectados. La demanda se mide con tres señales:
  1. Si la búsqueda aparece en el autocompletado de Google (España `hl=es&gl=es`; Reino Unido `hl=en&gl=gb`), consultado el 27/09/2026. Aparecer indica una demanda mínima recurrente; no aparecer indica demanda muy baja.
  2. Qué tipo de páginas rankean (WebSearch; índice de EE. UU., útil para ver dominios pero no posiciones).
  3. Lo que publican los competidores.
- **Confianza** de cada estimación: **alta** (dato directo verificable), **media** (dos señales coinciden), **baja** (una sola señal o deducción).
- Todas las URL llevan **barra final**. ES en la raíz, EN bajo `/en/` con slug en inglés. Cada par ES↔EN lleva hreflang recíproco y `x-default` apunta a la versión ES **de esa misma página**.
- Los 3 enlaces internos de cada ficha son enlaces **dentro del texto**, con el ancla propuesta. Van aparte de la navegación, el pie y el CTA de demo, que están en todas las páginas.
- Registro ES: **«vosotros»** en todo el sitio.

---

## 1. Qué pasa con la arquitectura propuesta

| Página propuesta | Decisión | Motivo |
|---|---|---|
| `/` | **Se valida, y pasa a ser el pilar del servicio** | Es la URL con más autoridad (todos los enlaces externos y de marca llegan aquí) y la única con historia. Se queda con «vídeo inmobiliario con IA». |
| `/video-inmobiliario-ia/` (pilar) | **Se descarta y se fusiona con `/`** | Buscaría la misma keyword y la misma intención que la home: canibalización pura. LUXAI vende un único servicio, así que la home es la página del servicio. Todo el contenido previsto para el pilar (qué es, para quién, por qué no inventa nada, formatos, FAQ) va a la home, que pasa de ~840 a ~1.500–2.000 palabras. Solo tendría sentido separarlo si un día la home se dedica a marca con varias líneas de servicio. EN: se descarta `/en/ai-real-estate-video/` por la misma razón. |
| `/demostraciones/` + 2 fichas | **Se valida (prioridad alta)** | Google solo indexa vídeos que estén en una *watch page*, es decir, una página cuyo contenido principal sea ese vídeo ([Google Search Central](https://developers.google.com/search/docs/appearance/video)). Hoy las demos no pueden salir en Google Vídeos. El índice ataca «ejemplos de vídeo inmobiliario»; las fichas no tienen volumen propio, pero aportan indexación del vídeo, prueba y enlazado. |
| `/precios/` | **Se valida y absorbe la guía de precio** | La guía «¿Cuánto cuesta un vídeo inmobiliario?» y `/precios/` perseguirían la misma búsqueda («precio vídeo inmobiliario»). Se fusionan en una sola página: los packs de LUXAI más una comparativa en euros de videógrafo, dron e IA. En español no hay ninguna guía de precios en euros que compare las tres opciones: tourestateai da precios de EE. UU. en dólares y cronoshare solo cubre fotografía. |
| Guía «¿Precio de un vídeo inmobiliario?» | **Se descarta como URL** (fusionada en `/precios/`) | Ver fila anterior. |
| `/como-funciona/` | **Se valida, con la keyword ajustada** | Se queda con «crear vídeo inmobiliario con IA», el proceso. Para esa búsqueda Google muestra tutoriales y páginas de ayuda con pasos (cyberclick, pedra/help, iacrea). Los requisitos de fotos se quedan aquí en forma de checklist corta, y la guía de fotos amplía. |
| Guía «Qué fotos necesitas» | **Se valida, reorientada** | Si solo hablara de los requisitos de LUXAI, competiría con `/como-funciona/`. Se reorienta a la búsqueda informacional amplia, «cómo hacer fotos inmobiliarias» (en el autocompletado salen «como hacer fotos para idealista» y «tamaño fotos para idealista»), con un apartado específico para vídeo. |
| `/video-para-inmobiliarias/` | **Se valida, con la keyword ajustada** | En el genérico «vídeo para inmobiliarias» dominan herramientas (flexclip, invideo, capcut) y fotocasa: difícil. La principal pasa a ser «vídeos para inmobiliarias de lujo», alcanzable y con el mismo posicionamiento. Ninguna página comercial de la competencia ataca el «lujo». |
| `/video-alquiler-vacacional/` | **Se valida** | En español la demanda es baja: «video para airbnb» solo sale como consulta exacta y «video alquiler vacacional» no sale en el autocompletado. Aun así, la audiencia es distinta, la página sirve de landing para campañas y hay un hueco claro: nadie explica bien si Airbnb admite vídeo (la información se contradice entre fuentes). En inglés la demanda es mayor: «airbnb video tour», «vacation rental video». |
| `/zonas/` (hub) + `costa-blanca`, `canarias` | **Se descarta** | **1. Sin demanda:** «video inmobiliario» + mallorca/marbella/malaga/alicante/tenerife/canarias/madrid da cero sugerencias de autocompletado en español (confianza media). **2. Riesgo de *doorway*:** el servicio se entrega en remoto y es igual en todas las zonas, así que un juego de páginas «servicio + ciudad» encaja en lo que Google define como *doorway abuse* ([políticas de spam de Google](https://developers.google.com/search/docs/essentials/spam-policies)). El competidor que lo hace, Improntia, tiene páginas de Estepona y Mijas idénticas en un 91 %. **3. Intención equivocada:** con «vídeo dron + ciudad», Google muestra operadores locales de dron, y LUXAI no lo es. |
| `/zonas/mallorca/`, `/zonas/costa-del-sol/` | **Se transforman en 2 páginas locales condicionales (fase 2), fuera de `/zonas/`**: `/video-inmobiliario-mallorca/` y `/video-inmobiliario-marbella/` | En inglés sí hay un hueco comercial B2B. En «real estate videographer Mallorca» y «Marbella real estate video production» rankean estudios pequeños y directorios; de los revisados, ninguno publica precios ni ofrece un enfoque de IA o «sin dron». Volumen bajo, valor alto (confianza media). Además, Mallorca es la base del negocio. **Condiciones:** al menos una demo o caso real de la zona; un 60–70 % o más de contenido único (aeródromos y permisos verificados en ENAIRE, mercado local, portales y nacionalidades compradoras); nunca una copia con la ciudad cambiada. Se atacan las búsquedas del **entregable** («vídeo inmobiliario en Marbella»), nunca las del **proveedor presencial** («videógrafo» o «piloto de dron en…»). |
| `/guias/` + IA vs dron | **Se valida (prioridad alta)** | Hueco real: las guías en español que rankean citan normativa de Chile (iacrea) o de EE. UU. (pedra, FAA). Ninguna explica el RD 517/2024, el aviso de 5 días a Interior ni las zonas de aeródromo de Palma. |
| Guía de formatos (16:9 / 9:16) | **Se valida** | «formato video idealista» sale en el autocompletado. Nadie publica una tabla actualizada de especificaciones por portal. |
| Guía de transparencia de la IA | **Se valida (prioridad media-alta)** | Tema de actualidad: el art. 50 de la Ley de IA de la UE se aplica desde el 2/08/2026 ([Comisión Europea](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act)), hubo cobertura en Euronews el 25/09/2026 y Consumo, Xataka y Cuatro también lo han tratado. La guía de fotocasa cita el «art. 52» (numeración del borrador). Es contenido que se cita y se enlaza, y responde a la objeción número uno de un comprador de lujo: «¿es falso?». |
| `/preguntas-frecuentes/` | **Se valida como página de soporte** | No aporta resultados enriquecidos: Google solo muestra FAQ de webs gubernamentales o de salud ([documentación](https://developers.google.com/search/docs/appearance/structured-data/faqpage)). Sí es útil para usuarios y buscadores con IA. Regla: aquí van las preguntas de contratación (derechos, música, IVA, plazos). Las preguntas de cada tema viven en su página y **no se duplican**. |
| `/sobre-luxai/` | **Se valida (prioridad alta por confianza)** | Sin autoría ni titular visible, un servicio de lujo con IA no genera confianza, y el aviso legal hoy incumple el art. 10 de la LSSI. Además, «LUXAI» a secas devuelve a LuxAI S.A., una empresa de robótica de Luxemburgo: hace falta una página de marca que lo desambigüe. |
| `/contacto/` | **Se valida** | Destino de todos los CTA. Hoy son `mailto:` ofuscados que dan 404 a los bots. |
| Legales | **Se conservan las URL** | Solo se corrigen el titular, el NIF, las metas y `x-default`. |

**Añadidas por la auditoría (fase 2, con evidencia):**
- `/guias/reels-inmobiliarios/`. En el autocompletado salen «reels inmobiliarios ejemplos», «como hacer reels inmobiliarios» y «musica para reels inmobiliarios». Encaja con el entregable 9:16.
- `/guias/tour-virtual-o-video/`. Ninguna comparativa entre tour 360 y vídeo que rankea incluye la IA; en el autocompletado salen «tour virtual inmobiliario» y «video 360 para inmobiliarias».
- **Nuevas fichas de demo** a medida que se produzcan, cada una con su `VideoObject`.
- **`/casos/`** cuando haya clientes reales (con permiso).

---

## 2. Arquitectura final

### Fase 1 (lanzamiento)

| # | ES | EN | Tipo |
|---|---|---|---|
| 1 | `/` | `/en/` | Home y pilar del servicio |
| 2 | `/demostraciones/` | `/en/demos/` | Índice de demos |
| 3 | `/demostraciones/villa-contemporanea-costa/` | `/en/demos/coastal-contemporary-villa/` | Ficha de demo (*watch page*) |
| 4 | `/demostraciones/finca-rustica-mediterranea/` | `/en/demos/mediterranean-rustic-estate/` | Ficha de demo (*watch page*) |
| 5 | `/precios/` | `/en/pricing/` | Precios y comparativa |
| 6 | `/como-funciona/` | `/en/how-it-works/` | Proceso y requisitos |
| 7 | `/video-para-inmobiliarias/` | `/en/real-estate-agencies/` | Landing por audiencia |
| 8 | `/video-alquiler-vacacional/` | `/en/luxury-vacation-rentals/` | Landing por audiencia |
| 9 | `/guias/` | `/en/guides/` | Hub de guías |
| 10 | `/guias/video-inmobiliario-dron-o-ia/` | `/en/guides/drone-vs-ai-property-video/` | Guía |
| 11 | `/guias/como-hacer-fotos-inmobiliarias/` | `/en/guides/real-estate-photos-for-video/` | Guía |
| 12 | `/guias/formatos-video-inmobiliario/` | `/en/guides/real-estate-video-formats/` | Guía |
| 13 | `/guias/ia-en-anuncios-inmobiliarios/` | `/en/guides/ai-disclosure-real-estate-listings/` | Guía |
| 14 | `/preguntas-frecuentes/` | `/en/faq/` | Soporte |
| 15 | `/sobre-luxai/` | `/en/about/` | Marca y confianza |
| 16 | `/contacto/` | `/en/contact/` | Conversión |
| 17 | `/aviso-legal/`, `/privacidad/` | `/en/aviso-legal/`, `/en/privacidad/` | Legales (se conservan las URL) |

**Total fase 1:** 16 páginas por idioma más las legales.

### Fase 2 (condicional)

| ES | EN | Condición para publicarla |
|---|---|---|
| `/video-inmobiliario-mallorca/` | `/en/mallorca-real-estate-video/` | **Primera página local.** Al menos 1 caso o demo real de Mallorca, más contenido local que no exista en ninguna otra página: zonas de aeródromo de Son Sant Joan y Son Bonet, espacios naturales y Red Natura 2000 en Baleares, y el dato de compradores extranjeros en Baleares (29,86 % en 2025). |
| `/video-inmobiliario-marbella/` | `/en/marbella-real-estate-video/` | **Segunda página local.** Al menos 1 caso o demo real de la Costa del Sol. Contenido local propio: restricciones de vuelo verificadas en ENAIRE (no está verificado si el CTR de Málaga cubre Marbella), mercado (32,8 % de compradores extranjeros en la provincia de Málaga en 2025) y portales internacionales. En inglés, prioridad mayor que en español. |
| `/guias/reels-inmobiliarios/` | `/en/guides/real-estate-reels/` | Cuando las 4 guías de fase 1 estén publicadas. En EN, prioridad baja: el SERP está dominado por plantillas de EE. UU. |
| `/guias/tour-virtual-o-video/` | `/en/guides/virtual-tour-vs-video/` | Opcional. |
| `/demostraciones/<nueva>/` | `/en/demos/<new>/` | Cada demo nueva. Objetivo: 6 demos en 6 meses, con variedad (ático, obra nueva, finca, villa de alquiler). |
| `/casos/<cliente>/` | `/en/case-studies/<client>/` | Cliente real, con permiso por escrito y métricas verificables. |

---

## 3. Matriz anti-canibalización (una keyword, una URL)

| Keyword principal | URL ES dueña | Búsquedas parecidas y adónde van |
|---|---|---|
| vídeo inmobiliario con IA | `/` | «crear vídeo inmobiliario con IA» → `/como-funciona/` · «ejemplos» → `/demostraciones/` · «precio» → `/precios/` |
| ejemplos de vídeo inmobiliario con IA | `/demostraciones/` | Nombre de cada demo → su ficha |
| precio vídeo inmobiliario | `/precios/` | Coste del dron → `/precios/` (la guía de dron enlaza allí y no compite por «precio») |
| crear vídeo inmobiliario con IA | `/como-funciona/` | «cómo hacer fotos inmobiliarias» → guía de fotos |
| vídeos para inmobiliarias de lujo | `/video-para-inmobiliarias/` | Especificaciones de portales → guía de formatos |
| vídeo para alquiler vacacional | `/video-alquiler-vacacional/` | «¿Airbnb permite vídeos?» se queda aquí y **no** va a la guía de formatos |
| vídeo inmobiliario con dron | `/guias/video-inmobiliario-dron-o-ia/` | «volar dron en Mallorca» se queda aquí **hasta que exista** la página de Mallorca; entonces se mueve |
| cómo hacer fotos inmobiliarias | `/guias/como-hacer-fotos-inmobiliarias/` | Requisitos concretos de LUXAI → `/como-funciona/` |
| formato vídeo idealista | `/guias/formatos-video-inmobiliario/` | «reels inmobiliarios» → guía de reels (fase 2) |
| IA en anuncios inmobiliarios | `/guias/ia-en-anuncios-inmobiliarios/` | Política propia de LUXAI → `/sobre-luxai/` |
| demo gratis vídeo inmobiliario con IA | `/contacto/` | — |
| LUXAI Video (marca) | `/sobre-luxai/` | La home también recibe búsquedas de marca: es normal y no se considera canibalización |
| vídeo inmobiliario Mallorca *(fase 2)* | `/video-inmobiliario-mallorca/` | Cuando exista, «volar dron en Mallorca» pasa de la guía de dron a esta página |
| vídeo inmobiliario Marbella *(fase 2)* | `/video-inmobiliario-marbella/` | «Costa del Sol» también va aquí. No habrá otra página de esa costa |

**EN:** la misma lógica con estas keywords principales:

| Keyword principal | URL EN |
|---|---|
| AI real estate video (con el enfoque «luxury, no drone») | `/en/` |
| AI real estate video examples | `/en/demos/` |
| real estate video cost (Spain) | `/en/pricing/` |
| turn real estate photos into video | `/en/how-it-works/` |
| luxury real estate video production | `/en/real-estate-agencies/` |
| luxury villa rental video | `/en/luxury-vacation-rentals/` |
| drone vs AI property video (Spain) | guía de dron |
| real estate photos for video | guía de fotos |
| real estate video formats | guía de formatos |
| AI disclosure real estate listings | guía de IA |
| free AI real estate video demo | `/en/contact/` |
| real estate video Mallorca *(fase 2)* | `/en/mallorca-real-estate-video/` |
| real estate video Marbella *(fase 2)* | `/en/marbella-real-estate-video/` |

---

## 4. Fichas por URL

Leyenda de intención: **T** transaccional · **C** comercial (comparar o evaluar) · **I** informacional · **N** navegacional · **S** soporte.

### 4.1 Home: `/` · `/en/`

| | ES `/` | EN `/en/` |
|---|---|---|
| **Keyword principal** | vídeo inmobiliario con IA | AI real estate video |
| **Secundarias** | vídeos inmobiliarios con inteligencia artificial · vídeo inmobiliario de lujo · vídeo para villas de lujo · vídeo de estilo aéreo con IA · convertir fotos de una villa en vídeo | luxury real estate video · aerial-style property video without a drone · AI property video Spain · cinematic villa video from photos · luxury villa video |
| **Intención** | C/T | C/T |
| **Evidencia y dificultad** | Autocompletado: sí («video inmobiliario con ia», «videos ia para inmobiliarias»). SERP: mezcla de landings de herramientas (pedra, iacrea, instantdeco, urbanizainteractiva) y tutoriales (cyberclick). Dificultad moderada-alta en la búsqueda principal; baja en las colas de «villa», «lujo» y «aéreo». Confianza media. | Autocompletado UK: sí («ai real estate video», con variantes *generator/maker/from photos*). SERP saturado de SaaS de autoservicio con plan gratis: AutoReel, BetterSpace, Reel-E, ListingAI, VideoTour.ai. **Dificultad alta en el genérico.** Victorias realistas: «luxury real estate video» (autocompletado: *production, cinematic, videography*), «drone-style property video without a drone» (SERP fragmentado y orientado a EE. UU.; el enfoque UE/AESA está vacío) y «AI property video Spain» (no hay páginas de España). Confianza media. |
| **Title** | Vídeo inmobiliario con IA para villas de lujo \| LUXAI *(53)* | AI Real Estate Video for Luxury Villas, No Drone \| LUXAI *(56)* |
| **Meta description** | Convertimos las fotos reales de vuestra villa en un vídeo cinematográfico de estilo aéreo, sin dron ni rodaje. En 16:9 y 9:16, en 72 h. Demo gratis. *(148)* | We turn your real property photos into a cinematic, aerial-style film. No drone, no crew. 16:9 and 9:16, delivered in 72 hours. Ask for a free demo. *(148)* |
| **H1** | Vídeo inmobiliario con IA para villas de lujo | AI real estate video for luxury villas. No drone, no shoot. |
| **Enlaces internos** | 1. `/demostraciones/`: «ved las fotos y el vídeo que sale de ellas» · 2. `/precios/`: «packs desde 129 €» · 3. `/como-funciona/`: «cómo convertimos vuestras fotos en vídeo» | 1. `/en/demos/`: «see the photos and the finished film» · 2. `/en/pricing/`: «packages from €129» · 3. `/en/how-it-works/`: «how we turn your photos into a film» |
| **Notas** | Absorbe el pilar descartado. Añadir: 5–6 razones verificables; bloque «qué hace la IA y qué no»; las 2 demos incrustadas, enlazando a su ficha; 6–8 FAQ **distintas** de las de otras páginas; mención a Mallorca/Baleares como base. Schema: `ProfessionalService` + `WebSite` (`alternateName: LUXAI Video`) + `Service` + `Offer`. | Adaptación, no traducción: pensada para agencias internacionales y compradores británicos, alemanes y neerlandeses (según el Anuario 2025 de Registradores, son las primeras nacionalidades compradoras). |

### 4.2 Demostraciones (índice): `/demostraciones/` · `/en/demos/`

| | ES | EN |
|---|---|---|
| **Keyword principal** | ejemplos de vídeo inmobiliario con IA | AI real estate video examples |
| **Secundarias** | vídeo inmobiliario ejemplos · vídeo marketing inmobiliario ejemplos · antes y después de fotos a vídeo · demo de vídeo inmobiliario | luxury real estate video examples · real estate video before and after · photo to video real estate examples · villa video example |
| **Intención** | C | C |
| **Evidencia y dificultad** | Autocompletado: «video marketing inmobiliario ejemplos». Dificultad baja-media. Confianza media. | «best luxury real estate videos» y «real estate drone video examples» salen en el autocompletado UK. Dificultad media. Confianza baja-media. |
| **Title** | Ejemplos de vídeo inmobiliario con IA, foto a foto \| LUXAI *(58)* | AI Real Estate Video Examples: Photos to Film \| LUXAI *(53)* |
| **Meta description** | Ved las fotos originales y el vídeo que sale de ellas: una villa contemporánea con piscina infinita y una finca rústica de piedra. Sin dron ni rodaje. *(150)* | See the original photos next to the finished film: a contemporary sea-view villa and a Mediterranean stone estate. No drone, no film crew. *(138)* |
| **H1** | Ejemplos de vídeo inmobiliario con IA: las fotos y el vídeo final | AI real estate video examples: the photos and the finished film |
| **Enlaces internos** | 1. Ficha de la villa: «villa contemporánea: de 4 fotos a vídeo» · 2. Ficha de la finca: «finca rústica: 5 fotos, 24 segundos» · 3. `/contacto/`: «pedid una demo con una de vuestras propiedades» | 1. Coastal villa: «coastal villa: 4 photos to film» · 2. Rustic estate: «stone estate: 5 photos, 24 seconds» · 3. `/en/contact/`: «get a demo with one of your properties» |
| **Notas** | Tarjeta por demo: póster, número de fotos, duración y formato. Schema `ItemList` + `BreadcrumbList`. Con solo 2 demos la página es corta: añadir un texto que explique qué mirar en cada demo (movimiento, luz, qué no se ha tocado). | Igual. |

### 4.3 Ficha de demo 1: `/demostraciones/villa-contemporanea-costa/` · `/en/demos/coastal-contemporary-villa/`

| | ES | EN |
|---|---|---|
| **Keyword principal** | vídeo de villa contemporánea con IA *(cola larga; el objetivo es la indexación del vídeo)* | contemporary villa video (AI) |
| **Secundarias** | vídeo villa con piscina infinita · vídeo aéreo de villa frente al mar · de 4 fotos a vídeo | infinity pool villa video · sea-view villa aerial-style video · 4 photos to video |
| **Intención** | C (prueba) | C |
| **Evidencia y dificultad** | Sin volumen medible. Valor: aparecer en Google Vídeos y en búsquedas de imágenes y vídeo; prueba para el comprador. Confianza alta en el mecanismo, sin dato de volumen. | Igual. |
| **Title** | Villa contemporánea: de 4 fotos a vídeo con IA \| LUXAI *(54)* | Coastal Villa: 4 Photos Turned into an AI Film \| LUXAI *(54)* |
| **Meta description** | Cuatro fotos de una villa frente al mar convertidas en una secuencia de estilo aéreo: piscina infinita, pista de tenis y atardecer. Vídeo en 16:9. *(146)* | Four photos of a sea-view villa turned into an aerial-style sequence: infinity pool, tennis court and sunset over the water. 16:9 film. *(135)* |
| **H1** | Villa Contemporánea Costa: de 4 fotos a un vídeo de estilo aéreo | Coastal Contemporary Villa: from 4 photos to an aerial-style film |
| **Enlaces internos** | 1. Ficha de la finca: «siguiente demo: finca rústica de piedra» · 2. `/como-funciona/`: «qué hace la IA con cada foto» · 3. `/precios/`: «cuánto cuesta un vídeo así» | 1. Rustic estate: «next demo: Mediterranean stone estate» · 2. `/en/how-it-works/`: «what the AI does with each photo» · 3. `/en/pricing/`: «what a film like this costs» |
| **Notas** | El vídeo es lo primero que se ve. Las 4 fotos originales con `alt` descriptivo. Transcripción o descripción de los planos. Schema `VideoObject`: `name`, `description`, `thumbnailUrl`, `uploadDate`, `duration` real, `contentUrl`. Incluirlo en el sitemap de vídeo. Etiqueta visible: «Movimiento de cámara generado con IA a partir de 4 fotos reales». | Igual. |

### 4.4 Ficha de demo 2: `/demostraciones/finca-rustica-mediterranea/` · `/en/demos/mediterranean-rustic-estate/`

| | ES | EN |
|---|---|---|
| **Keyword principal** | vídeo de finca rústica con IA *(cola larga; indexación del vídeo)* | rustic stone estate video (AI) |
| **Secundarias** | vídeo de casa de piedra con piscina · vídeo de finca con olivos · vídeo inmobiliario de exterior e interior | stone finca video · olive grove estate video · interior and exterior property film |
| **Intención** | C (prueba) | C |
| **Evidencia y dificultad** | Sin volumen medible. No afirmar que la finca está en Mallorca salvo que sea verdad. | Igual. |
| **Title** | Finca rústica: de 5 fotos a 24 s de vídeo con IA \| LUXAI *(56)* | Rustic Estate: 5 Photos, 24 Seconds of AI Film \| LUXAI *(54)* |
| **Meta description** | Cinco fotos de una finca de piedra convertidas en 24 segundos de vídeo: jardines de lavanda, piscina de piedra y paso al interior con chimenea. *(143)* | Five photos of a stone finca turned into 24 seconds of film: lavender gardens, natural stone pool and a move indoors to the fireplace and timber beams. *(151)* |
| **H1** | Finca Rústica Mediterránea: de 5 fotos a 24 segundos de vídeo | Mediterranean Rustic Estate: 5 photos, 24 seconds of film |
| **Enlaces internos** | 1. Ficha de la villa: «otra demo: villa contemporánea» · 2. `/video-alquiler-vacacional/`: «vídeo para fincas y villas de alquiler vacacional» · 3. `/contacto/`: «pedid la demo con vuestra finca» | 1. Coastal villa: «another demo: coastal contemporary villa» · 2. `/en/luxury-vacation-rentals/`: «video for rental villas and fincas» · 3. `/en/contact/`: «get a demo with your property» |
| **Notas** | Igual que la ficha 1. La duración del `VideoObject` es `PT24S`. | Igual. |

### 4.5 Precios: `/precios/` · `/en/pricing/`

| | ES | EN |
|---|---|---|
| **Keyword principal** | precio vídeo inmobiliario | real estate video cost (Spain) |
| **Secundarias** | cuánto cuesta un vídeo inmobiliario · precio de vídeo inmobiliario con IA · tarifas de vídeo inmobiliario · precio de vídeo con dron para inmobiliaria · cuánto cobra un videógrafo inmobiliario | how much does a real estate video cost · real estate videography cost · real estate drone video pricing · luxury real estate video production cost · AI real estate video price |
| **Intención** | C/T | C/T |
| **Evidencia y dificultad** | Autocompletado: «video inmobiliario precio», «fotografía inmobiliaria precios», «cuanto cuesta hacer un video con dron». SERP: calculadoras y blogs de servicios (tramitame, inmofotomadrid, fromthesky, skyfilmsbcn). No hay ninguna guía en euros que compare las tres opciones. Dificultad baja-media. Confianza media. | Autocompletado UK: «real estate videography cost», «average real estate video cost», «real estate drone video pricing», «how much do real estate videographers charge». El genérico es difícil: más de 20 guías de 2026, casi todas de SaaS (tryreelestate, reel-e, autoreel) y en dólares. Con «Spain» la búsqueda **solo devolvió páginas de EE. UU.**: hueco claro. Además, la mayoría de los estudios de Mallorca y Marbella no publica precios (Viceversa, Balear Digital, Improntia, ByNau; la excepción revisada es Kozman Media). Dificultad media en la versión España/EUR. Confianza media. |
| **Title** | Precio de un vídeo inmobiliario: packs desde 129 € \| LUXAI *(58)* | Real Estate Video Cost in Spain: Packages from €129 \| LUXAI *(59)* |
| **Meta description** | Packs de 129 €, 379 € y 649 € (IVA no incluido) y lo que cuesta en España un vídeo con videógrafo o con dron. Precio de lanzamiento: 10 primeros clientes. *(154)* | Packages at €129, €379 and €649 (VAT excluded), plus what a videographer or drone shoot typically costs in Spain. Launch pricing for our first 10 clients. *(154)* |
| **H1** | Precio de un vídeo inmobiliario, con y sin rodaje | What a real estate video costs, with and without a shoot |
| **Enlaces internos** | 1. `/como-funciona/`: «qué incluye cada vídeo y cómo se hace» · 2. `/guias/video-inmobiliario-dron-o-ia/`: «dron o IA: permisos y plazos» · 3. `/contacto/`: «pedid la demo gratis antes de elegir pack» | 1. `/en/how-it-works/`: «what each film includes» · 2. `/en/guides/drone-vs-ai-property-video/`: «drone or AI: permits and timing» · 3. `/en/contact/`: «get the free demo before choosing» |
| **Notas** | Comparativa con precios públicos y citados (ver la auditoría, apartado 7.3): Blue Iris Media, paquete villa a 359 € + IVA; Kozman Media, villa a 300 €; From the Sky, vídeo con dron de 150–300 €; Pedra calcula 300–500 € por un videógrafo; FotoArte, 120 € por reportaje + vídeo IA. Incluir fecha de consulta. Los packs llevan `Offer` con `priceSpecification` y `valueAddedTaxIncluded: false`. **Si cambian los precios de lanzamiento, cambiar el title.** | Precios de España en euros. Es el diferencial frente a las guías en dólares. |

### 4.6 Cómo funciona: `/como-funciona/` · `/en/how-it-works/`

| | ES | EN |
|---|---|---|
| **Keyword principal** | crear vídeo inmobiliario con IA | turn real estate photos into video |
| **Secundarias** | cómo se hace un vídeo inmobiliario a partir de fotos · cuántas fotos necesito para un vídeo inmobiliario con IA · plazo de entrega de un vídeo inmobiliario · vídeo inmobiliario en 16:9 y 9:16 · ¿la IA cambia la propiedad? | real estate photos to video · AI video from listing photos · how many photos for a real estate video · real estate video turnaround · 16:9 and 9:16 listing video |
| **Intención** | I/C | I/C |
| **Evidencia y dificultad** | Autocompletado: «crear video inmobiliario con ia», «crear videos inmobiliarios con ia». SERP: tutoriales y páginas de ayuda con pasos (cyberclick, pedra/help, iacrea). Dificultad media. Confianza media. | Autocompletado UK: «convert real estate photos to video», «real estate photos to video ai», «turn your real estate photos into video». SERP de SaaS. Dificultad media-alta. Confianza media. |
| **Title** | Crear un vídeo inmobiliario con IA: el proceso \| LUXAI *(54)* | How We Turn Real Estate Photos into Video \| LUXAI *(49)* |
| **Meta description** | De 5–15 fotos (mín. 1920×1080) a un vídeo de 20–30 s en 72 h: qué fotos enviar, qué hace la IA y qué no toca, formatos 16:9 y 9:16 y revisiones. *(144)* | From 5–15 photos (min. 1920×1080) to a 20–30 s film in 72 hours: what to send, what the AI does and never touches, 16:9 and 9:16 delivery, revisions. *(149)* |
| **H1** | Cómo convertimos vuestras fotos en un vídeo inmobiliario con IA | How we turn your real estate photos into a film |
| **Enlaces internos** | 1. `/guias/como-hacer-fotos-inmobiliarias/`: «cómo hacer fotos que sirvan para vídeo» · 2. `/demostraciones/`: «ejemplos con las fotos originales» · 3. `/precios/`: «packs, plazos y revisiones» | 1. `/en/guides/real-estate-photos-for-video/`: «photos that work for video» · 2. `/en/demos/`: «examples with the original photos» · 3. `/en/pricing/`: «packages, turnaround and revisions» |
| **Notas** | Pasos numerados reales: envío → selección → retoque (solo luz, color y cielo) → movimiento → montaje y música → entrega → revisiones. Checklist de requisitos. Bloque «qué no hace la IA». Schema `HowTo` opcional (no genera resultado enriquecido; útil para buscadores con IA). | Igual. |

### 4.7 Inmobiliarias: `/video-para-inmobiliarias/` · `/en/real-estate-agencies/`

| | ES | EN |
|---|---|---|
| **Keyword principal** | vídeos para inmobiliarias de lujo | luxury real estate video production |
| **Secundarias** | vídeos para inmobiliarias · vídeos con IA para inmobiliarias · vídeo para portales inmobiliarios · reels para inmobiliarias · vídeo marketing inmobiliario | real estate video for agencies · luxury real estate videography · video marketing for real estate agents · listing videos for portals · real estate reels for agencies |
| **Intención** | C/T | C/T |
| **Evidencia y dificultad** | Autocompletado: «videos para inmobiliarias», «videos ia para inmobiliarias», «fotos y videos para inmobiliarias», «reels inmobiliarios». En el genérico dominan flexclip, invideo, capcut, fotocasa y pedra (difícil). La variante «de lujo» no la ataca ninguna página comercial (fácil-media). Confianza media. | Autocompletado UK: «luxury real estate video production», «luxury real estate videographers», «luxury real estate cinematic video». Dificultad media. Confianza media. |
| **Title** | Vídeos para inmobiliarias de lujo: toda la cartera \| LUXAI *(58)* | Luxury Real Estate Video Production for Agencies \| LUXAI *(56)* |
| **Meta description** | Un vídeo por inmueble sin mandar a nadie a grabar: 16:9 para portales y web, 9:16 para Reels, con vuestra marca. Pack Agencia: 8 vídeos + 1 principal. *(150)* | A film for every listing without sending anyone to shoot: 16:9 for portals and web, 9:16 for Reels, in your branding. Agency pack: 8 videos + 1 hero film. *(154)* |
| **H1** | Vídeos para inmobiliarias de lujo: cada propiedad de la cartera, en vídeo | Luxury real estate video production for agencies |
| **Enlaces internos** | 1. `/precios/`: «pack Agencia: 8 vídeos y uno principal de 45–60 s» · 2. `/guias/formatos-video-inmobiliario/`: «formatos para idealista, Fotocasa y Reels» · 3. `/demostraciones/`: «ejemplos con fotos reales» | 1. `/en/pricing/`: «Agency pack: 8 films plus a 45–60 s hero film» · 2. `/en/guides/real-estate-video-formats/`: «formats for Idealista, Rightmove, Kyero and Reels» · 3. `/en/demos/`: «examples from real photos» |
| **Notas** | Problemas reales de una agencia: captar la exclusiva con un vídeo en la presentación al propietario, vídeo para toda la cartera y no solo para la estrella, marca propia, plazos. Sin cifras inventadas de conversión. | Pensada para agencias internacionales en España (Kyero, JamesEdition, Rightmove Overseas). |

### 4.8 Alquiler vacacional: `/video-alquiler-vacacional/` · `/en/luxury-vacation-rentals/`

| | ES | EN |
|---|---|---|
| **Keyword principal** | vídeo para alquiler vacacional | luxury villa rental video |
| **Secundarias** | vídeo para villas de alquiler vacacional de lujo · vídeo para Airbnb · ¿Airbnb permite subir vídeos? · vídeo para la web de reservas directas · promocionar un alquiler vacacional con vídeo | holiday villa video · vacation rental video · Airbnb video tour · can you add a video to an Airbnb listing · direct booking website video |
| **Intención** | C/I | C/I |
| **Evidencia y dificultad** | Autocompletado: «video para airbnb» (solo la exacta), «airbnb permite subir videos». SERP informacional: lodgify, holidu, smoobu, gescav y la comunidad de Airbnb con 5 o más hilos. Nadie trata el paso de fotos a vídeo con IA para villas (fácil-media). Confianza media-baja. | Autocompletado UK: «airbnb video tour», «airbnb video listing», «can you add a video to your airbnb listing», «airbnb videographer», «vacation rental marketing». Para «holiday villa video marketing» rankean posts antiguos y débiles (theluxurysignature, villamarketers): fácil-media. En el genérico «vacation rental video» dominan YouTube y los foros. Confianza media. |
| **Title** | Vídeo para alquiler vacacional de lujo y villas \| LUXAI *(55)* | Luxury Villa Rental Video, Made from Your Photos \| LUXAI *(56)* |
| **Meta description** | Vídeos de vuestras villas de alquiler para la web de reservas directas, Instagram y campañas, hechos con las fotos que ya tenéis. Sin rodaje ni dron. *(149)* | Films of your rental villas for your direct-booking site, Instagram and ads, made from the photos you already have. No shoot, no drone, 72-hour delivery. *(153)* |
| **H1** | Vídeo para villas de alquiler vacacional de lujo | Luxury villa rental video, made from your photos |
| **Enlaces internos** | 1. Ficha de la finca: «una finca en 24 segundos de vídeo» · 2. `/guias/formatos-video-inmobiliario/`: «formatos para web, Instagram y TikTok» · 3. `/precios/`: «precio por vídeo según el pack» | 1. Rustic estate: «a finca in 24 seconds of film» · 2. `/en/guides/real-estate-video-formats/`: «formats for web, Instagram and TikTok» · 3. `/en/pricing/`: «price per film by package» |
| **Notas** | **Honestidad:** la información sobre si Airbnb admite vídeo en el anuncio se contradice. Los hilos de la comunidad y motionmyproperty dicen que los anuncios estándar no lo admiten: el vídeo solo sirve para verificar el anuncio ([ayuda de Airbnb](https://www.airbnb.com/help/article/3776)) o en Experiencias. [Holidu](https://www.holidu.es/magazine/video-presentacion-alquiler-vacacional) afirma que sí. **Verificarlo en la plataforma antes de publicar** y decir con claridad dónde sí rinde el vídeo: web de reservas directas, Instagram, campañas, email a huéspedes que repiten. Objeción que hay que desactivar: en foros de anfitriones hay rechazo a la IA («AI slop»), así que la página debe enseñar que el vídeo no inventa nada. | Igual. |

### 4.9 Guías (hub): `/guias/` · `/en/guides/`

| | ES | EN |
|---|---|---|
| **Keyword principal** | guías de vídeo inmobiliario *(hub navegacional, sin volumen propio)* | real estate video guides |
| **Secundarias** | guía de vídeo inmobiliario con IA · vídeo marketing inmobiliario guía · consejos de vídeo inmobiliario | real estate video marketing guide · property video tips · AI real estate video guide |
| **Intención** | N/I | N/I |
| **Title** | Guías de vídeo inmobiliario con IA \| LUXAI *(42)* | Real Estate Video Guides \| LUXAI *(32)* |
| **Meta description** | Para inmobiliarias y gestores de villas: dron o IA, cómo hacer las fotos, formatos para idealista y redes, y cómo usar IA en anuncios sin engañar. *(146)* | For agencies and villa managers: drone or AI, which photos to take, video formats for portals and social, and how to use AI in listings honestly. *(145)* |
| **H1** | Guías de vídeo inmobiliario | Real estate video guides |
| **Enlaces internos** | Enlaza a **todas** las guías, más: 1. `/como-funciona/`: «cómo trabajamos» · 2. `/precios/`: «precios y comparativa» · 3. `/demostraciones/`: «ejemplos reales» | Todas las guías, más: 1. `/en/how-it-works/` · 2. `/en/pricing/` · 3. `/en/demos/` |
| **Notas** | Tarjeta por guía con fecha de actualización. Schema `CollectionPage` + `BreadcrumbList`. | Igual. |

### 4.10 Guía dron o IA: `/guias/video-inmobiliario-dron-o-ia/` · `/en/guides/drone-vs-ai-property-video/`

| | ES | EN |
|---|---|---|
| **Keyword principal** | vídeo inmobiliario con dron | drone vs AI property video (Spain) |
| **Secundarias** | alternativa al dron para vídeo inmobiliario · permiso para grabar con dron en zona urbana · volar un dron en Mallorca · ¿se puede hacer un vídeo aéreo sin dron? · dron para inmobiliaria | real estate drone video · can you fly a drone in Spain · Mallorca drone laws · AI drone-style video · real estate video without a drone |
| **Intención** | I/C | I/C |
| **Evidencia y dificultad** | Autocompletado: «video inmobiliario con dron», «dron para inmobiliaria», «puedo volar un dron en zona urbana», «donde volar dron en mallorca», «multa por volar dron en zona urbana». Las guías que rankean citan normativa de Chile o de EE. UU. Dificultad media. Confianza media. | Autocompletado UK: «mallorca drone laws / regulations / zone / map», «can you fly a drone in spain», «drone mallorca airport», «real estate drone video pricing». Mucha demanda de aficionados: el enfoque es el de quien vende o alquila una villa. Dificultad media. Confianza media. |
| **Title** | Vídeo inmobiliario con dron o con IA: coste y permisos *(54)* | Drone vs AI Property Video in Spain: Cost and Permits *(53)* |
| **Meta description** | Qué exige volar un dron sobre una villa en España (AESA, zona urbana, aeropuertos como Palma), cuánto cuesta y cuándo compensa más un vídeo con IA. *(147)* | What flying a drone over a villa in Spain involves (AESA, urban areas, airport zones like Palma), what it costs, and when an AI film makes more sense. *(150)* |
| **H1** | Vídeo inmobiliario con dron o con IA: qué conviene en cada caso | Drone or AI for property video in Spain: what each one takes |
| **Enlaces internos** | 1. `/precios/`: «comparativa de precios: videógrafo, dron e IA» · 2. Ficha de la villa: «ejemplo de plano de estilo aéreo sin dron» · 3. `/como-funciona/`: «cómo se hace el vídeo con IA» | 1. `/en/pricing/`: «videographer vs drone vs AI costs» · 2. Coastal villa: «an aerial-style shot with no drone» · 3. `/en/how-it-works/`: «how the AI film is made» |
| **Notas** | Ser justos: el dron gana cuando hace falta ver el entorno real (acceso, parcela, vecinos), y la IA gana en plazo, en coste y en zonas restringidas. Datos que hay que citar: RD 517/2024 (BOE), aviso a Interior con 5 días naturales en entorno urbano, prohibición de sobrevolar viviendas y jardines sin permiso de los titulares en categoría abierta, zonas de aeródromo de 6 × 5 km, coordinación con el aeropuerto de hasta 1 mes con silencio negativo, espacios naturales protegidos de Baleares y Red Natura 2000 (tasa de 120 €/día para uso profesional, tarifa de 2024). Schema `Article` con autor y `dateModified`. | Igual, en inglés y con las mismas fuentes. |

### 4.11 Guía de fotos: `/guias/como-hacer-fotos-inmobiliarias/` · `/en/guides/real-estate-photos-for-video/`

| | ES | EN |
|---|---|---|
| **Keyword principal** | cómo hacer fotos inmobiliarias | real estate photos for video |
| **Secundarias** | cómo hacer fotos para idealista · tamaño de las fotos para idealista · cuántas fotos poner en un anuncio de piso · fotos para vídeo inmobiliario · fotos inmobiliarias con el móvil | real estate photography tips · how many photos for a property listing · listing photo resolution · real estate photos with a phone |
| **Intención** | I | I |
| **Evidencia y dificultad** | Autocompletado: «como hacer fotos para idealista», «tamaño fotos para idealista», «fotografía inmobiliaria» con muchas variantes. SERP informacional con portales y fotógrafos. Dificultad media. Confianza media. | En EN el genérico de fotografía está dominado por sitios grandes de EE. UU. (alta). La cola «for video» tiene poca demanda y poca dificultad. Es contenido de soporte para la conversión. Confianza baja. |
| **Title** | Cómo hacer fotos inmobiliarias: guía y checklist \| LUXAI *(56)* | Real Estate Photos for Video: The Checklist \| LUXAI *(51)* |
| **Meta description** | Luz, altura de cámara, orden de estancias y resolución: la checklist para que vuestras fotos funcionen en idealista y también al convertirlas en vídeo. *(151)* | Light, camera height, room order and minimum resolution: the checklist that makes listing photos work on portals and as the raw material for a film. *(148)* |
| **H1** | Cómo hacer fotos inmobiliarias que también sirvan para vídeo | Real estate photos that also work for video |
| **Enlaces internos** | 1. `/como-funciona/`: «requisitos de las fotos para el vídeo» · 2. `/guias/formatos-video-inmobiliario/`: «formatos para idealista y redes» · 3. `/contacto/`: «enviadnos vuestras fotos para una demo» | 1. `/en/how-it-works/`: «photo requirements for the film» · 2. `/en/guides/real-estate-video-formats/` · 3. `/en/contact/` |
| **Notas** | Ejemplos propios de «esta foto sí, esta no», sacados de las demos. Sin estadísticas sin fuente. | En EN, prioridad de publicación baja dentro de la fase 1. |

### 4.12 Guía de formatos: `/guias/formatos-video-inmobiliario/` · `/en/guides/real-estate-video-formats/`

| | ES | EN |
|---|---|---|
| **Keyword principal** | formato vídeo idealista | real estate video formats |
| **Secundarias** | vídeo vertical u horizontal (inmobiliaria) · formato de reels 9:16 para inmobiliarias · cuántos vídeos admite idealista · subir vídeo a Fotocasa · cuánto debe durar un vídeo inmobiliario | vertical real estate video · Rightmove video tour · Idealista video format · Kyero video · Instagram Reels size for real estate |
| **Intención** | I | I |
| **Evidencia y dificultad** | Autocompletado: «formato video idealista», «video instagram vertical u horizontal», «formato reels instagram 9 16». En español no hay una tabla actualizada por portal. Dificultad baja-media. Confianza media. | Autocompletado UK: «rightmove video tour», «vertical real estate videos», «formato video idealista», «real estate reels». Dificultad media. Confianza baja-media. |
| **Title** | Formato de vídeo para idealista, Fotocasa y Reels \| LUXAI *(57)* | Real Estate Video Formats: Portals, Reels, YouTube \| LUXAI *(58)* |
| **Meta description** | Qué formato, duración y orientación usar en cada canal: idealista y Fotocasa, web y YouTube en 16:9, Reels y TikTok en 9:16. Con tabla por plataforma. *(150)* | Which format, length and orientation each channel needs: Idealista, Rightmove and Kyero, your website and YouTube in 16:9, Reels and TikTok in 9:16. *(148)* |
| **H1** | Formatos de vídeo inmobiliario: portales, web y redes | Real estate video formats for portals, web and social |
| **Enlaces internos** | 1. `/video-para-inmobiliarias/`: «vídeos para toda la cartera» · 2. `/precios/`: «packs con versión vertical 9:16» · 3. `/guias/como-hacer-fotos-inmobiliarias/`: «cómo hacer las fotos» | 1. `/en/real-estate-agencies/` · 2. `/en/pricing/` · 3. `/en/guides/real-estate-photos-for-video/` |
| **Notas** | **[VERIFICAR antes de publicar]** Las especificaciones de idealista se contradicen: el [PDF oficial](https://st3.idealista.com/static/es/pdf/tips/trucos_para_fotos_videos.pdf), sin fecha, habla de hasta 6 vídeos y grabación en horizontal, y otras fuentes de 4 vídeos y 100 o 600 MB. Idealista pide subir un archivo, y las pasarelas desde CRM no pasan enlaces de YouTube ([Witei](https://faq.witei.com/en/articles/118118-idealista)). Solo publicar lo comprobado en la plataforma, con fecha. Datos ya verificados: YouTube, 16:9 en MP4 H.264 ([ayuda de YouTube](https://support.google.com/youtube/answer/1722171)); Shorts, hasta 3 min en vertical ([ayuda](https://support.google.com/youtube/answer/12779649)); anuncios de Reels, 9:16 a 1440×2560 (Meta Ads Guide). **Consecuencia para el producto:** entregar un máster 16:9 en MP4 ligero (menos de 100 MB) para portales, además del 9:16. | Datos verificados: **Kyero** solo admite enlaces de YouTube o Vimeo, en horizontal y sin Shorts ([help.kyero.com](https://help.kyero.com/adding-a-video-to-a-property)). **Rightmove** permite incrustar YouTube o Vimeo o poner un enlace externo; quien publica por feed debe subirlo por el feed ([Rightmove Hub](https://hub.rightmove.co.uk/how-to-share-a-virtual-tour-or-video-on-your-rightmove-listing/)). Nadie publica una tabla que junte Kyero, idealista, Rightmove y redes. |

### 4.13 Guía de IA y transparencia: `/guias/ia-en-anuncios-inmobiliarios/` · `/en/guides/ai-disclosure-real-estate-listings/`

| | ES | EN |
|---|---|---|
| **Keyword principal** | IA en anuncios inmobiliarios | AI disclosure real estate listings |
| **Secundarias** | ¿es legal usar IA en anuncios inmobiliarios? · etiquetar contenido generado con IA · artículo 50 del Reglamento europeo de IA · fotos retocadas con IA en inmobiliaria · publicidad engañosa inmobiliaria | is it legal to use AI in real estate listings · EU AI Act Article 50 deepfake · AI real estate disclosure law · virtual staging disclosure · AI generated real estate photos |
| **Intención** | I | I |
| **Evidencia y dificultad** | Autocompletado: «etiquetar contenido de ia en instagram/facebook», «reglamento europeo ia 2026», «ley ia españa», «publicidad engañosa inmobiliaria», «idealista fotos ia». Tema de actualidad (Consumo 2025, Xataka, Cuatro, Infobae y Euronews en 2026). Es un tema YMYL: Google exige autoridad. Dificultad media-alta en genéricos y media en «anuncios inmobiliarios». Confianza media. | Autocompletado UK: «ai real estate disclosure law». En EE. UU. hay leyes (California AB 723, vigente desde el 1/01/2026). Dificultad media-alta. Confianza media. |
| **Title** | IA en anuncios inmobiliarios: qué es legal y qué indicar *(56)* | AI in Real Estate Listings: What to Disclose in the EU *(54)* |
| **Meta description** | Qué dicen el Reglamento europeo de IA (art. 50), la normativa de publicidad y los portales sobre imágenes y vídeos hechos con IA en anuncios de inmuebles. *(154)* | What the EU AI Act (Article 50), advertising law and property portals say about AI-generated or AI-edited images and video in real estate listings. *(147)* |
| **H1** | IA en anuncios inmobiliarios: qué se puede hacer y cómo indicarlo | AI in real estate listings: what is allowed and how to disclose it |
| **Enlaces internos** | 1. `/sobre-luxai/`: «nuestra política de transparencia con la IA» · 2. `/como-funciona/`: «qué hace la IA y qué no toca» · 3. `/preguntas-frecuentes/`: «dudas frecuentes sobre el uso de los vídeos» | 1. `/en/about/`: «our AI transparency policy» · 2. `/en/how-it-works/` · 3. `/en/faq/` |
| **Notas** | **Revisión por un abogado antes de publicar.** Fuentes: art. 50.4 y art. 3(60) de la Ley de IA de la UE (el deep fake incluye «lugares»); RD 515/1989, art. 3 (lo que se anuncia es exigible); Ley 34/1988; Proyecto de Ley Orgánica de IA (BOCG 12/06/2026, **todavía no es ley**). Ofrecer un texto de aviso listo para copiar. Autor identificado y `dateModified`. | Añadir el contexto de EE. UU. (AB 723) solo como referencia. |

### 4.14 Preguntas frecuentes: `/preguntas-frecuentes/` · `/en/faq/`

| | ES | EN |
|---|---|---|
| **Keyword principal** | preguntas frecuentes sobre vídeo inmobiliario con IA *(soporte)* | AI real estate video FAQ |
| **Secundarias** | derechos de uso del vídeo · música con licencia · factura con IVA · revisiones incluidas · qué pasa si no os gusta el resultado | video usage rights · licensed music · VAT invoice · revisions included · what if you don't like the result |
| **Intención** | S | S |
| **Title** | Preguntas frecuentes: vídeo inmobiliario con IA \| LUXAI *(55)* | AI Real Estate Video FAQ \| LUXAI *(32)* |
| **Meta description** | Plazos, revisiones, derechos de uso, música, formatos, facturación y qué hace (y qué no) la IA con vuestras fotos. Lo que nos preguntan antes de encargar. *(154)* | Turnaround, revisions, usage rights, music, formats, invoicing and what the AI does (and never does) with your photos: what clients ask before ordering. *(152)* |
| **H1** | Preguntas frecuentes | Frequently asked questions |
| **Enlaces internos** | 1. `/precios/`: «qué incluye cada pack» · 2. `/como-funciona/`: «el proceso paso a paso» · 3. `/contacto/`: «escribidnos si vuestra duda no está aquí» | 1. `/en/pricing/` · 2. `/en/how-it-works/` · 3. `/en/contact/` |
| **Notas** | Solo preguntas de contratación y uso. Las preguntas de cada tema, en su página (sin duplicar). `FAQPage` para buscadores con IA; no dará resultados enriquecidos en Google. | Igual. |

### 4.15 Sobre LUXAI: `/sobre-luxai/` · `/en/about/`

| | ES | EN |
|---|---|---|
| **Keyword principal** | LUXAI Video *(marca)* | LUXAI Video *(brand)* |
| **Secundarias** | quién está detrás de LUXAI · política de transparencia con la IA · vídeo inmobiliario desde Mallorca *(pasa a la página de Mallorca cuando exista)* | who is behind LUXAI · AI transparency policy · property video from Mallorca |
| **Intención** | N | N |
| **Evidencia y dificultad** | La SERP de «LUXAI» es de LuxAI S.A. (robótica, Luxemburgo): [luxai.com](https://luxai.com/), [LinkedIn](https://www.linkedin.com/company/luxai). Conviene firmar como «LUXAI Video». Confianza alta. | Igual. |
| **Title** | Sobre LUXAI: quién hace vuestros vídeos inmobiliarios *(53)* | About LUXAI: Who Makes Your Property Films *(42)* |
| **Meta description** | Quién está detrás de LUXAI, desde dónde trabajamos (Mallorca) y cómo usamos la IA: solo movimiento de cámara sobre fotos reales, sin inventar nada. *(147)* | Who is behind LUXAI, where we work from (Mallorca) and how we use AI: camera motion over real photos only, never inventing anything about the property. *(151)* |
| **H1** | Sobre LUXAI | About LUXAI |
| **Enlaces internos** | 1. `/guias/ia-en-anuncios-inmobiliarios/`: «qué dice la ley sobre la IA en anuncios» · 2. `/demostraciones/`: «nuestro trabajo» · 3. `/contacto/`: «hablad con nosotros» | 1. `/en/guides/ai-disclosure-real-estate-listings/` · 2. `/en/demos/` · 3. `/en/contact/` |
| **Notas** | Persona real con nombre y foto **[CONFIRMAR]**, titular y NIF **[CONFIRMAR]**, política de IA en 5 compromisos verificables. Schema `Organization` + `Person` con `sameAs` a sus perfiles. **No inventar trayectoria ni clientes.** | Igual. |

### 4.16 Contacto: `/contacto/` · `/en/contact/`

| | ES | EN |
|---|---|---|
| **Keyword principal** | demo gratis de vídeo inmobiliario con IA | free AI real estate video demo |
| **Secundarias** | presupuesto de vídeo inmobiliario · contratar vídeo inmobiliario con IA · pedir demo de vídeo de una villa | real estate video quote · hire AI real estate video · villa video demo |
| **Intención** | T | T |
| **Title** | Pedid una demo gratis de vídeo inmobiliario con IA \| LUXAI *(58)* | Get a Free AI Real Estate Video Demo \| LUXAI *(44)* |
| **Meta description** | Enviadnos las fotos de una propiedad y en 72 h tendréis una demo en vídeo, sin coste ni compromiso. Respondemos en menos de 24 h. *(129)* | Send us the photos of one property and you will have a video demo within 72 hours, free and with no commitment. We reply within 24 hours. *(137)* |
| **H1** | Pedid vuestra demo gratis | Get your free demo |
| **Enlaces internos** | 1. `/precios/`: «packs y precios» · 2. `/demostraciones/`: «qué vais a recibir» · 3. `/preguntas-frecuentes/`: «preguntas antes de enviar las fotos» | 1. `/en/pricing/` · 2. `/en/demos/` · 3. `/en/faq/` |
| **Notas** | Todos los CTA del sitio apuntan aquí (con `?pack=` si vienen de un pack); el modal se abre encima si hay JS. Evento de analítica al enviar. WhatsApp oculto hasta tener número. | Igual. |

### 4.17 Mallorca (fase 2, condicional): `/video-inmobiliario-mallorca/` · `/en/mallorca-real-estate-video/`

| | ES | EN |
|---|---|---|
| **Keyword principal** | vídeo inmobiliario Mallorca | real estate video Mallorca |
| **Secundarias** | vídeo de villas en Mallorca · vídeo aéreo de villa en Mallorca sin dron · volar un dron en Mallorca para grabar una casa *(se mueve desde la guía de dron)* · vídeo de fincas en Mallorca | Mallorca villa video · Mallorca villa drone video (alternative) · Mallorca drone laws for property filming · property video Mallorca |
| **Intención** | C (local) | C (local B2B) |
| **Evidencia y dificultad** | «video inmobiliario mallorca» no sale en el autocompletado (demanda muy baja). Rankean estudios locales (fotografoibiza.com/video-inmobiliario-mallorca, baleardigital, urbanerfilms) y LUXAI ya aparece en una búsqueda larga de «producción vídeo inmobiliario lujo Mallorca». Dificultad baja-media. Confianza baja. | En «real estate videographer Mallorca» rankean 9 proveedores y 2 directorios (mallorca.com, seemallorca.com), sin precios públicos ni enfoque de IA. Autocompletado UK: «mallorca drone video», «mallorca drone laws», «drone mallorca airport». Volumen bajo, valor alto. Dificultad fácil-media. Confianza media. |
| **Title** | Vídeo inmobiliario en Mallorca, sin dron ni rodaje \| LUXAI *(58)* | Real Estate Video in Mallorca, No Drone Needed \| LUXAI *(54)* |
| **Meta description** | Vídeos de estilo aéreo para villas y fincas de Mallorca hechos con vuestras fotos, sin permisos de vuelo junto al aeropuerto de Palma ni en la Tramuntana. *(154)* | Aerial-style films of Mallorca villas and fincas made from your photos: no flight permits near Palma airport or in the Tramuntana. 72-hour delivery. *(148)* |
| **H1** | Vídeo inmobiliario en Mallorca | Real estate video in Mallorca, without a drone |
| **Enlaces internos** | 1. `/guias/video-inmobiliario-dron-o-ia/`: «qué exige volar un dron en la isla» · 2. Demo o caso de Mallorca · 3. `/precios/`: «precios publicados» | 1. `/en/guides/drone-vs-ai-property-video/` · 2. Mallorca demo · 3. `/en/pricing/` |
| **Notas** | **No publicarla sin un caso real en Mallorca.** Contenido único: aeródromos de la isla (Son Sant Joan, Son Bonet, Pollença, verificados en [ENAIRE Drones](https://drones.enaire.es/)), espacios naturales de Baleares y Red Natura 2000, y datos del mercado (29,86 % de compradores extranjeros en Baleares en 2025; precio medio de 410.322 €, el más alto de España; Anuario 2025 de Registradores). Pedir el alta en los directorios locales (mallorca.com, seemallorca.com). | Si el mercado germanoparlante responde, valorar una versión DE (ver la auditoría). |

### 4.18 Marbella y Costa del Sol (fase 2, condicional): `/video-inmobiliario-marbella/` · `/en/marbella-real-estate-video/`

| | ES | EN |
|---|---|---|
| **Keyword principal** | vídeo inmobiliario Marbella | real estate video Marbella |
| **Secundarias** | vídeo inmobiliario Costa del Sol · vídeo de villas en Marbella · vídeo de lujo en Marbella sin dron · precio de vídeo inmobiliario en Marbella | property video Marbella · Costa del Sol villa video · Marbella villa video · real estate video cost Marbella |
| **Intención** | C (local) | C (local B2B) |
| **Evidencia y dificultad** | «video inmobiliario marbella» no sale en el autocompletado. En «vídeo dron + Marbella» rankean operadores locales (juanjosobrino, drone-marbella, improntia): no es para LUXAI. Dificultad media. Confianza baja. | En «Marbella real estate video production» rankean autónomos y estudios pequeños (photographermarbellaspain, viceversamedia, goltermanndesign con un post de 2021, bynau); ninguno publica precios ni usa IA. Improntia tiene páginas de ciudad plantilla. Dificultad fácil-media. Confianza media. |
| **Title** | Vídeo inmobiliario en Marbella, sin dron ni rodaje \| LUXAI *(58)* | Real Estate Video in Marbella, No Drone Needed \| LUXAI *(54)* |
| **Meta description** | Vídeos de estilo aéreo para villas de Marbella y la Costa del Sol con vuestras fotos: sin rodaje ni permisos de vuelo, precio publicado y 72 h de entrega. *(154)* | Aerial-style films of Marbella and Costa del Sol villas made from your photos: no shoot, no flight permits, published prices and 72-hour delivery. *(146)* |
| **H1** | Vídeo inmobiliario en Marbella y la Costa del Sol | Real estate video in Marbella, without a drone |
| **Enlaces internos** | 1. `/precios/`: «precios publicados, sin presupuesto a medida» · 2. Demo o caso de la Costa del Sol · 3. `/video-para-inmobiliarias/`: «vídeo para toda la cartera» | 1. `/en/pricing/` · 2. Costa del Sol demo · 3. `/en/real-estate-agencies/` |
| **Notas** | **No publicarla sin un caso real en la Costa del Sol.** Contenido único y verificado: espacio aéreo en ENAIRE (**no afirmar** que el CTR de Málaga cubre Marbella sin comprobarlo), mercado (32,8 % de compradores extranjeros en la provincia de Málaga en 2025; ERI 2025), portales internacionales. Ni una frase copiada de la página de Mallorca. | En inglés, prioridad mayor que en español. |

### 4.19 Legales (se conservan)

| URL | Title | Meta description | Nota |
|---|---|---|---|
| `/aviso-legal/` | Aviso legal \| LUXAI | Datos del titular de luxaivideo.com, condiciones de uso del sitio, propiedad intelectual y legislación aplicable. | Añadir titular, NIF y domicilio **[CONFIRMAR]**. |
| `/privacidad/` | Política de privacidad \| LUXAI | Qué datos recogemos en el formulario de demo, para qué los usamos, cuánto tiempo los guardamos y cómo ejercer vuestros derechos. | Mencionar FormSubmit como encargado del tratamiento y el envío de UTM. |
| `/en/aviso-legal/` | Legal Notice \| LUXAI | Details of the owner of luxaivideo.com, terms of use of the site, intellectual property and applicable law. | `x-default` → `/aviso-legal/`. |
| `/en/privacidad/` | Privacy Policy \| LUXAI | What data the demo form collects, what we use it for, how long we keep it and how to exercise your rights. | `x-default` → `/privacidad/`. |

---

## 5. Preguntas reales de usuarios (tipo «People Also Ask»)

Las preguntas vienen de encabezados o FAQ de páginas que rankean, de foros o del autocompletado de Google. La fuente va entre paréntesis. **(variante)** significa reformulada a partir del contenido de la fuente; **(autocompletado)**, que sale como sugerencia de Google el 27/09/2026. Cada pregunta se asigna a **una sola página** para no duplicar FAQ.

### 5.1 Español

**`/` · Home**
1. ¿Cómo funciona realmente un vídeo inmobiliario generado con IA? (variante; [tupisoenfotos](https://www.tupisoenfotos.com/post/v%C3%ADdeos-inmobiliarios-con-ia-c%C3%B3mo-la-tecnolog%C3%ADa-transforma-la-presentaci%C3%B3n-de-una-vivienda))
2. ¿Para qué tipo de inmuebles es ideal este tipo de vídeo? ([fotoarteinmobiliario](https://fotoarteinmobiliario.es/video-inmobiliario-desde-fotografias-ia))
3. ¿Por qué hacer un vídeo inmobiliario a partir de fotos en vez de grabarlo? ([pedra](https://pedra.ai/es/help/como-hacer-video-inmobiliario-con-ia))
4. ¿Se puede hacer un vídeo aéreo tipo dron sin dron? (variante; [revid](https://www.revid.ai/es/make/ai-drone-aerial-reveal-video))
5. ¿La IA altera o inventa elementos de la propiedad? (ya está en la web)
6. ¿Qué diferencia hay entre vuestro vídeo y una app de 10 €? (variante; la plantean [urbanizainteractiva](https://urbanizainteractiva.com/videos-inmobiliarios-inteligencia-artificial/) y [pedra](https://pedra.ai/es/pricing) con sus precios)

**`/demostraciones/` y fichas**
7. ¿Qué movimientos de cámara se usan para una villa (reveal, órbita)? (variante; [guía de dron de iacrea](https://www.iacrea.com/es/blog/video-inmobiliario/video-con-dron-inmobiliario-la-guia-de-grabacion-2026))
8. ¿Puedo descargar el vídeo en 4K? ([pedra](https://pedra.ai/es/help/como-hacer-video-inmobiliario-con-ia))
9. ¿Qué se ha retocado en estas fotos y qué no? (variante; la política de [fotoarteinmobiliario](https://fotoarteinmobiliario.es/fotografia-inmobiliaria-verificada/))

**`/precios/`**
10. ¿Cuánto cuestan los vídeos inmobiliarios profesionales? ([tourestateai](https://www.tourestateai.com/es/blogs/how-much-do-professional-real-estate-videos-cost))
11. ¿Cuánto cuesta un vídeo inmobiliario profesional? (variante; [inmofotomadrid](https://inmofotomadrid.es/blog/como-grabar-un-video-inmobiliario-que-vende/))
12. ¿Cuánto cuesta un vídeo con dron? ([fromthesky](https://fromthesky.es/cuanto-cuesta-video-grabado-dron))
13. ¿Es más barato contratar a un freelance o a una productora? ([fromthesky](https://fromthesky.es/cuanto-cuesta-video-grabado-dron))
14. ¿Cuánto cuesta un fotógrafo inmobiliario? ([cronoshare](https://www.cronoshare.com/cuanto-cuesta/fotografia-inmobiliaria))
15. ¿El precio lleva IVA? ¿Hasta cuándo dura el precio de lanzamiento? (variante propia; condiciones de LUXAI)

**`/como-funciona/`**
16. ¿Cómo se crea un vídeo inmobiliario a partir de una fotografía? ([fotoarteinmobiliario](https://fotoarteinmobiliario.es/video-inmobiliario-desde-fotografias-ia))
17. ¿Cuánto tarda en generarse el vídeo con IA? ([pedra](https://pedra.ai/es/help/como-hacer-video-inmobiliario-con-ia))
18. ¿Cuántas fotos necesito para un vídeo inmobiliario con IA? (variante; pedra recomienda 8–15 e instantdeco admite hasta 20)
19. ¿Qué resolución mínima necesita la foto? (variante; iacrea pide 1.200 × 900 px y LUXAI 1920 × 1080)
20. ¿La IA corrige una foto mala? (variante; [iacrea](https://www.iacrea.com/es/blog/tutoriales/crea-un-video-de-inmueble-con-iacrea-en-5-minutos))
21. ¿Sirven fotos de una vivienda vacía o en obra? (variante; [cyberclick](https://www.cyberclick.es/numerical-blog/video-inmobiliario-ia-tutorial))
22. ¿Funciona para obra nueva y vivienda sobre plano? ([pedra](https://pedra.ai/es/help/como-hacer-video-inmobiliario-con-ia))
23. ¿Necesito saber editar vídeo? ([pedra](https://pedra.ai/es/help/como-hacer-video-inmobiliario-con-ia))

**`/video-para-inmobiliarias/`**
24. ¿Los anuncios con vídeo salen más arriba en idealista? (variante; [inmolovers](https://inmolovers.com/portales/como-optimizar-anuncios-idealista))
25. ¿Las fotos y vídeos sirven para portales internacionales? ([marbellapropertyphoto](https://marbellapropertyphoto.com/fotografia-inmobiliaria-lujo-marbella/))
26. ¿Los reels ayudan de verdad a los agentes inmobiliarios a conseguir leads? ([aumovo](https://www.aumovo.com/es/blog/real-estate-reels-ideas))
27. ¿Qué deben publicar los agentes inmobiliarios en sus reels? ([aumovo](https://www.aumovo.com/es/blog/real-estate-reels-ideas))
28. ¿Podemos poner nuestra marca y nuestra música en los vídeos? (variante propia; lo incluye el pack Profesional)

**`/video-alquiler-vacacional/`**
29. ¿Es posible publicar un vídeo en mi anuncio de Airbnb? ([comunidad de Airbnb](https://community.withairbnb.com/t5/Ayuda/Es-posible-publicar-un-video-en-mi-anuncio/td-p/147887))
30. ¿Se pueden subir vídeos a la plataforma para mi anuncio? ([comunidad de Airbnb](https://community.withairbnb.com/t5/Optimiza-tu-anuncio/Se-pueden-subir-videos-a-la-plataforma-para-mi-anuncio/m-p/1720611))
31. ¿Cómo puedo mostrar un vídeo de mi casa a los interesados? ([comunidad de Airbnb](https://community.withairbnb.com/t5/Ayuda/Como-puedo-mostrar-un-video-de-mi-casa-a-los-interesados-en/td-p/543741))
32. ¿Cómo se promociona un alquiler vacacional con un vídeo? ([lodgify](https://www.lodgify.com/blog/vacation-rental-videos/))
33. ¿Por qué crear un vídeo para tu alojamiento? ([gescav](https://gescav.com/es/blog/video-para-promocionar-tu-alquiler-vacacional/))
34. ¿Cuánto debe durar el vídeo de un alquiler vacacional? (variante; gescav)
35. ¿Airbnb permite subir vídeos? (autocompletado: «airbnb permite subir videos»)

**`/guias/video-inmobiliario-dron-o-ia/`**
36. ¿Necesito permiso para grabar con dron en España? ([permisodrones](https://permisodrones.es/guias/permiso-zrvf-fotografia-aerea))
37. ¿Cuánto tarda la autorización de fotografía aérea? ([permisodrones](https://permisodrones.es/guias/permiso-zrvf-fotografia-aerea))
38. ¿Podéis volar sobre una urbanización con vecinos? ([mediterraneadron](https://mediterraneadron.com/servicios/videos-de-dron-para-agencias-inmobiliarias/))
39. ¿Puedo volar un dron sobre una propiedad privada? ([rpas-drones](https://rpas-drones.com/volar-dron-propiedad-privada-legalidad/))
40. ¿Necesito una licencia o un seguro para pilotar un dron pequeño? ([maldita](https://maldita.es/malditatecnologia/20230828/preguntas-respuestas-drones-grabar-espacio-publico-vivienda/))
41. ¿Dónde se pueden volar drones en Mallorca? ([droniteca](https://droniteca.com/blog/donde-volar-drones-en-mallorca/)) *(a la página de Mallorca cuando exista)*
42. ¿Puedo volar un dron en zona urbana? (autocompletado: «puedo volar un dron en zona urbana»)
43. ¿Qué multa hay por volar un dron en zona urbana? (autocompletado)
44. ¿Dron o IA: cuál es mejor para un vídeo inmobiliario? (variante)

**`/guias/como-hacer-fotos-inmobiliarias/`**
45. ¿Cuántas fotos debo colgar en un anuncio para vender un piso? ([helpmycash](https://www.helpmycash.com/preguntas/28950/cuantas-fotos-debo-colgar-en-un-anuncio-para-vender-un-piso/))
46. ¿Cómo se hacen fotos para idealista? (autocompletado)
47. ¿Qué tamaño deben tener las fotos para idealista? (autocompletado)
48. ¿Hace falta fotografía profesional para un vídeo con IA? (variante; [tupisoenfotos](https://www.tupisoenfotos.com/post/v%C3%ADdeos-inmobiliarios-con-ia-c%C3%B3mo-la-tecnolog%C3%ADa-transforma-la-presentaci%C3%B3n-de-una-vivienda))

**`/guias/formatos-video-inmobiliario/`**
49. ¿Cuántos vídeos, y de qué tamaño, admite idealista? (variante; [centro de ayuda de idealista](https://www.idealista.com/tools/centrodeayuda/etiquetas/videos/))
50. Vídeo vertical u horizontal: ¿cuál usar en cada red social? ([sandiafilms](https://www.sandiafilms.com/video-vertical-vs-horizontal-cual-usar-en-cada-red-social/))
51. ¿Cuánto debe durar un vídeo inmobiliario? (variante; tramitame habla de 20–60 s)
52. ¿Puedo usar el vídeo en Instagram y TikTok? ([pedra](https://pedra.ai/es/help/como-hacer-video-inmobiliario-con-ia))
53. ¿Qué formato de vídeo acepta idealista? (autocompletado: «formato video idealista»)

**`/guias/ia-en-anuncios-inmobiliarios/`**
54. ¿Es legal usar imágenes o vídeos con IA en anuncios inmobiliarios? (variante; [fotocasa](https://blogprofesional.fotocasa.es/responsabilidad-legal-del-uso-de-ia-en-anuncios-inmobiliarios/))
55. ¿Qué pasa cuando el anuncio no coincide con la realidad? ([fotocasa](https://blogprofesional.fotocasa.es/responsabilidad-legal-del-uso-de-ia-en-anuncios-inmobiliarios/))
56. ¿Cómo se justifica la información publicada en anuncios con IA? ([fotocasa](https://blogprofesional.fotocasa.es/responsabilidad-legal-del-uso-de-ia-en-anuncios-inmobiliarios/))
57. ¿Es ilegal retocar con IA las fotos de un piso? (variante; [El Confidencial Digital](https://www.elconfidencialdigital.com/articulo/vivir/consumo/20250908121213978941.html))
58. ¿Hay que etiquetar el contenido generado con IA? (variante; [Letslaw](https://letslaw.es/en/mandatory-labelling-ai-generated-content/))
59. ¿Esa chimenea es real o está generada con IA? ([Infobae](https://www.infobae.com/america/the-new-york-times/2026/09/09/esa-chimenea-es-real-o-esta-generada-con-ia/))
60. ¿Qué multa hay por no etiquetar contenido hecho con IA? (variante; [Euronews](https://www.euronews.com/2026/09/25/could-the-eu-ai-act-deter-housefishing-in-european-real-estate))

**`/preguntas-frecuentes/`**: preguntas de contratación (se responden con las condiciones reales de LUXAI)
61. ¿Cuántas revisiones incluye cada pack? (ya está en la web)
62. ¿Cómo funciona la demo de cortesía? (ya está en la web)
63. ¿Puedo poner mi propia voz en off? ([pedra](https://pedra.ai/es/help/como-hacer-video-inmobiliario-con-ia))
64. ¿Quién tiene los derechos del vídeo y dónde puedo usarlo? (variante propia; el aviso legal lo remite a cada contrato)
65. ¿La música tiene licencia para usarla en anuncios? (variante propia)
66. ¿Qué pasa con nuestras fotos después? ¿Las usáis como demo? (variante propia)

**`/sobre-luxai/`**
67. ¿Quién está detrás de LUXAI? (variante propia; la SERP de marca es de LuxAI S.A.)
68. ¿Cómo garantizáis que la IA no inventa nada? (variante propia)

### 5.2 Inglés

Las preguntas van literales de la fuente salvo las marcadas **(paraphrase)**. **(autocomplete)** es una sugerencia de Google UK del 27/09/2026. Reddit se ha leído a través de PullPush, porque el acceso directo está bloqueado.

**`/en/` · Home**
1. What is an AI video generator for real estate listings? ([Luma](https://lumalabs.ai/create/ai-video-generator-for-real-estate-listings))
2. Can I turn property photos into videos automatically? ([Luma](https://lumalabs.ai/create/ai-video-generator-for-real-estate-listings))
3. Is a photo-based real estate video as good as a filmed video? ([BetterSpace](https://www.betterspace.ai/blog/create-real-estate-video-from-photos))
4. How is this different from a photo slideshow? ([PhotoAIVideo](https://www.photoaivideo.com/ai-listing-video-maker-for-airbnb))
5. AI real estate videos: does the output actually hold up? ([YOPRST](https://prst.media/en/ai-real-estate-videos-what-agencies-need-to-know/))
6. Can an international buyer get a feel for the villa without flying over? (paraphrase; [Drones Mallorca](https://www.dronesmallorca.es/en/aerial-drone-photography-for-luxury-properties/))

**`/en/demos/` and demo pages**
7. Do the transitions look smooth, or like a cheap slideshow? (paraphrase; [r/realtors](https://www.reddit.com/r/realtors/comments/1wkvpo0/would_a_tool_that_turns_property_photos_into_a/))
8. Why do windows and straight lines warp in the zooms? (paraphrase; [r/airbnb_hosts](https://www.reddit.com/r/airbnb_hosts/comments/1wjjp5k/made_a_short_ai_video_tour_for_my_airbnb_using/)). Show in the demos that they don't.
9. What do the best luxury real estate videos have in common? (autocomplete: «best luxury real estate videos»)

**`/en/pricing/`**
10. How much does a real estate video cost? ([tryreelestate](https://tryreelestate.com/blog/real-estate-video-cost))
11. How much does a real estate videographer charge? ([tryreelestate](https://tryreelestate.com/blog/real-estate-video-cost))
12. Is AI video cheaper than hiring a videographer? ([Reel-E](https://www.reel-e.ai/blog/real-estate-video-cost))
13. How much does drone videography add to real estate video cost? ([AutoReel](https://www.autoreelapp.com/blog/real-estate-video-cost-calculator-2026-how-much-does-a-real-estate-video-cost))
14. Do I need a monthly subscription, or can I pay per video? ([PropertyPhotoVideo](https://propertyphotovideo.com/))
15. How much does a real estate video cost in Marbella or Mallorca? (paraphrase; no local provider answers it: [Viceversa](https://viceversamedia.eu/services-video-production-editorial-content-photograhy/real-estate-videos-photography/), [Balear Digital](https://www.baleardigital.es/en/real-estate-photo-and-video-in-mallorca/))

**`/en/how-it-works/`**
16. Can I make a real estate listing video using only photos? ([Amplifiles](https://www.amplifiles.ai/blog/ai-real-estate-video-tools-compared))
17. How many photos do you need to make a real estate video? ([BetterSpace](https://www.betterspace.ai/blog/create-real-estate-video-from-photos))
18. What photo quality works best? ([BetterSpace](https://www.betterspace.ai/ai-real-estate-video))
19. Do I need professional photos to get a good video? ([PhotoAIVideo](https://www.photoaivideo.com/ai-listing-video-maker-for-airbnb))
20. Do AI video generators replace a real estate videographer? ([Amplifiles](https://www.amplifiles.ai/blog/ai-real-estate-video-tools-compared))

**`/en/real-estate-agencies/`**
21. Are AI real estate videos good enough for MLS or YouTube? ([Amplifiles](https://www.amplifiles.ai/blog/ai-real-estate-video-tools-compared)). Adapt it to portals: Kyero, Rightmove, idealista.
22. Does a video made from photos help sell a property faster? ([BetterSpace](https://www.betterspace.ai/blog/create-real-estate-video-from-photos)). Answer without made-up figures.
23. What is the ROI of adding video to a real estate listing? ([Reel-E](https://www.reel-e.ai/blog/real-estate-video-cost))
24. Do Reels actually help real estate agents get leads? ([aumovo](https://www.aumovo.com/es/blog/real-estate-reels-ideas))

**`/en/luxury-vacation-rentals/`**
25. Can you add a video to your Airbnb listing? (autocomplete) / Can you post a video on Airbnb? (autocomplete)
26. How to add a video to Airbnb, Vrbo, or Booking.com listings? ([grupo de Facebook](https://www.facebook.com/groups/545990332638815/posts/2155531418351357/))
27. Hosts, do you use video for your listing? Ads, socials, guest requests? ([r/airbnb_hosts](https://www.reddit.com/r/airbnb_hosts/comments/1wm7x1m/hosts_do_you_use_video_for_your_listing_ads/))
28. Would an AI generated video tour of your listing (made from your existing photos) be useful to you? ([Airbnb Community](https://community.withairbnb.com/t5/Help-with-your-business/Would-an-AI-generated-video-tour-of-your-listing-made-from-your/m-p/2293434))
29. Does it work for VRBO and direct-booking sites too? ([PhotoAIVideo](https://www.photoaivideo.com/ai-listing-video-maker-for-airbnb))
30. Can the video highlight specific amenities like a hot tub or pool? ([PhotoAIVideo](https://www.photoaivideo.com/ai-listing-video-maker-for-airbnb))

**`/en/guides/drone-vs-ai-property-video/`**
31. Can I get aerial shots without a drone? ([Runway](https://runway.com/resources/real-estate-drone-video))
32. Is it legal to use an AI-generated aerial in a listing? ([Runway](https://runway.com/resources/real-estate-drone-video))
33. Can I fly a drone near an airport? ([Runway](https://runway.com/resources/real-estate-drone-video)) / Can you fly a drone in Spain? (autocomplete)
34. Are drones being replaced by AI in real estate? ([Aerial Northwest](https://aerialnorthwest.com/oregon-aerial-drone-flight-blog/are-drones-being-replaced-by-ai-in-real-estate.html))
35. What are the drone laws in Mallorca? (autocomplete: «mallorca drone laws», «mallorca drone regulations», «drone mallorca airport»). Answer citing [ENAIRE Drones](https://drones.enaire.es/) and the RD 517/2024.
36. How much do drone pilots charge for real estate photography? ([VideoTour.ai](https://videotour.ai/real-estate-drone-video))

**`/en/guides/real-estate-photos-for-video/`**
37. What are the photo upload requirements? ([tryreelestate](https://tryreelestate.com/))
38. What kind of images can be used for an AI Clip? ([Pixlmob](https://www.pixlmob.com/ai-clips))
39. Which photos should I animate? ([ImageMotion](https://www.imagemotion.ai/use-cases/airbnb-hosts))

**`/en/guides/real-estate-video-formats/`**
40. Which aspect ratios can I create? ([ListingAI](https://www.listingai.co/features/listing-images-to-video))
41. What size should a real estate Reel be? How long should a real estate Reel be? ([Amplifiles](https://www.amplifiles.ai/blog/how-to-make-real-estate-reels))
42. Can Kyero show vertical video or YouTube Shorts? (paraphrase; answer: no. [Kyero](https://help.kyero.com/adding-a-video-to-a-property))
43. Can I use a YouTube link on idealista? (paraphrase; [Witei](https://faq.witei.com/en/articles/118118-idealista)) / How do I share a video on my Rightmove listing? ([Rightmove Hub](https://hub.rightmove.co.uk/how-to-share-a-virtual-tour-or-video-on-your-rightmove-listing/))

**`/en/guides/ai-disclosure-real-estate-listings/`**
44. Do you have to disclose AI-generated listing photos? What about AI-generated video? ([tryreelestate](https://tryreelestate.com/blog/disclose-ai-generated-real-estate-photos))
45. At what point should AI be labeled? ([Euronews](https://www.euronews.com/2026/09/25/could-the-eu-ai-act-deter-housefishing-in-european-real-estate))
46. Do I have to disclose if I used AI to fix up my listing photos? ([FastExpert](https://www.fastexpert.com/advice/do-i-have-to-disclose-if-i-used-ai-to-fix-up-my-listing-10118/))
47. Does the video show a camera move that was never actually filmed? (paraphrase of the 5-question test; [HousingWire](https://www.housingwire.com/articles/ai-listing-video-disclosure-test/))
48. Are generated property videos compliant with MLS guidelines? ([PropertyPhotoVideo](https://propertyphotovideo.com/))

**`/en/faq/`**
49. Who owns the film and where can we use it? (own variant)
50. Is the music licensed for ads? (own variant)

---

## 6. Keywords que NO hay que atacar

| Keyword o grupo | Motivo |
|---|---|
| convertir fotos en vídeo (online gratis) · animar fotos con IA (gratis, sin registro) · fotos a vídeo IA gratis · crear vídeo con fotos IA gratis | Intención de herramienta gratuita y de hazlo tú mismo, en un SERP de apps genéricas (insmind, promeai, dreamface). Quien busca esto no compra un servicio de 129 €. |
| vídeos inmobiliarios con IA gratis · vídeo inmobiliario gratis · IA para inmobiliarias gratis | La misma intención de herramienta gratis. La demo gratis de LUXAI no satisface esa búsqueda: atraería leads que no encajan. |
| AI real estate video generator (free) · real estate video maker (free/app) · AI drone video generator (prompt/free) · turn listing photos into video (tool) | Intención de SaaS de autoservicio (AutoReel, BetterSpace, Reel-E, ListingAI, Pedra, MagicLight, Pollo, Steve AI), con planes gratis de 0 a 60 $/mes. Competencia de miles de páginas programáticas: MagicLight tiene unas 5.900 páginas de «tools». La home EN habla de ello, pero no puede competir por la intención de herramienta. |
| luxury property video Spain | Intención de comprador de vivienda: salen idealista, JamesEdition, Sotheby's y Luxinmo. |
| video production Mallorca · luxury villa video production Mallorca | Devuelve productoras de cine y alquiler de localizaciones para rodajes (mallorcacollection, fixermallorca). |
| luxury real estate video marketing (genérico EN) | SERP informacional de EE. UU. dominado por luxurypresence.com y luxuryhomemarketing.com. Difícil y fuera de mercado. |
| home staging virtual (IA, idealista, tarifas) · virtual staging AI | LUXAI no lo ofrece y el mercado está saturado de software (Pedra, InstantDeco y otros desde 1,75 € por foto). Solo mencionarlo en comparativas. |
| villas de lujo Mallorca / Marbella · villas de lujo en venta · Mallorca real estate (for sale, agents, luxury) · inmobiliaria de lujo Mallorca | Intención de comprador, inquilino o navegacional hacia agencias. Esas agencias son clientes potenciales de LUXAI, no su público de búsqueda. |
| vídeo dron Mallorca / Marbella · drone company Mallorca · piloto dron Mallorca · videógrafo Mallorca / Marbella | Intención local de contratar un operador de dron o un videógrafo que vaya a grabar (local pack). LUXAI no graba: posicionar ahí confunde al usuario y no convierte. Se responde desde la guía de dron o IA. **Ojo:** «vídeo inmobiliario en Mallorca / Marbella» (el entregable) sí se ataca, desde las páginas locales de fase 2. |
| fotógrafo / fotografía inmobiliaria + ciudad | LUXAI no hace sesiones de fotos. |
| formato reels (Instagram, medidas, 2026) · formato vídeo Instagram · tamaño vídeo reels | Especificaciones genéricas de redes, dominadas por medios de marketing digital. No hay comprador inmobiliario; solo interesa la variante «para inmobiliarias», dentro de la guía de formatos. |
| reglamento europeo IA · ley IA España · AI Act (genéricos) | Tema legal y de noticias (YMYL) con autoridades y medios. Solo se ataca la cola «anuncios inmobiliarios». |
| video villa · luxury villa video (download) · luxury house video download · vídeos de casas de lujo por dentro | Intención de bancos de vídeo o de entretenimiento (pexels, istock, YouTube). |
| volar dron Mallorca · mapa dron Mallorca · curso dron Mallorca · AESA drones registro | Intención de piloto aficionado. Solo como apartado dentro de la guía, nunca como página objetivo. |
| cuánto cobrar por un vídeo inmobiliario · cuánto cobra un piloto de drones | Lado de la oferta: videógrafos y pilotos que ponen precio a su trabajo, no clientes. |
| tour virtual 360 gratis · vídeo 360 para inmobiliarias | Producto distinto. Como mucho, una comparativa en fase 2. |
| casa rural (vídeo, promoción) | Ticket bajo y poco encaje con el posicionamiento de lujo. |
| «LUXAI» a secas | La SERP es de LuxAI S.A. (robótica en Luxemburgo). Trabajar «LUXAI Video». |
| video inmobiliarios drogados · video agente inmobiliario | Ruido del autocompletado (un vídeo viral) o intención ambigua. |

---

## 7. Notas de implementación SEO para esta arquitectura

1. **hreflang:** por cada par, `es` → URL ES, `en` → URL EN y `x-default` → URL ES, siempre con barra final y en el `<head>` y en el sitemap. Generarlo desde una tabla única de pares, un diccionario `routes` compartido.
2. **Migas de pan** visibles y `BreadcrumbList` en todas las páginas menos la home.
3. **Schema por tipo:**
   - Home: `ProfessionalService` + `WebSite` + `Service`.
   - Precios: `Service` + `Offer` con `priceSpecification` (`valueAddedTaxIncluded: false`).
   - Demos: `VideoObject`.
   - Guías: `Article` con `author` y `dateModified`.
   - Hub: `CollectionPage`.
   - FAQ: `FAQPage`.
   - Sobre: `Organization` + `Person`.
4. **Sitemaps:** `sitemap-index.xml` con las páginas y alternates, más un sitemap de vídeo con las fichas de demo. Redirigir con 301 `/sitemap.xml` → `/sitemap-index.xml`.
5. **Enlaces de la navegación principal (5):** Demostraciones · Cómo funciona · Precios · Inmobiliarias · Alquiler vacacional, más el CTA «Pedir demo». Guías, FAQ y Sobre van en el pie.
6. **Fechas visibles** («Actualizado el…») en las guías y en la comparativa de precios. Revisarlas cada trimestre: normativa, especificaciones de portales y precios de mercado.
7. **Nada inventado:** los marcadores `[CONFIRMAR]` y `[VERIFICAR]` de este mapa deben resolverse antes de publicar cada página.
