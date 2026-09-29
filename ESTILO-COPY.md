# Guía de estilo de copy · LUXAI

Documento de referencia para cualquiera que escriba textos de la web de LUXAI.

## Voz

- **Director creativo senior, no folleto.** Frases concretas y verificables, con detalle de oficio: qué se ve en el plano, qué se toca y qué no, cuánto tarda, cuánto cuesta.
- **Registro:** «vosotros» siempre en español (el cliente es un equipo o una agencia). En inglés, «you» directo, tono británico sobrio.
- **Seguridad sin grandilocuencia.** El lujo se transmite con precisión y calma, no con adjetivos.
- **Honestidad como argumento de venta:** cada plano sale de una sola foto. La IA calcula su profundidad y mueve la cámara dentro de ella: no hay estancias, muebles ni vistas añadidas, ni transiciones inventadas (entre planos, fundidos). Las demos regeneradas el 28/09/2026 lo cumplen. Si algún día se usa vídeo generativo, esta promesa hay que revisarla.

## Prohibido

- **Relleno:** «soluciones a medida», «llevamos vuestra marca al siguiente nivel», «revoluciona», «potencia», «descubre el poder de», «en el mundo actual», «sin lugar a dudas», «experiencia única», «de forma sencilla y rápida», «no es solo X, es Y».
- **Datos inventados:** porcentajes, estadísticas, testimonios, clientes, premios o «estudios demuestran». Cada cifra externa lleva su fuente enlazada y la fecha de consulta.
- **Promesas sobre plataformas de terceros** (Airbnb, idealista, Fotocasa, Rightmove…) si no están verificadas en su documentación oficial. Si algo se contradice entre fuentes, se dice así y se remite al centro de ayuda oficial.
- **Asesoría legal.** En temas de normativa, informar con fuentes y cerrar con la nota: «Esta guía es informativa y no sustituye el asesoramiento de un profesional».
- **Cualquier afirmación de que LUXAI vuela drones, hace fotos o graba.** LUXAI trabaja solo con fotos existentes.

## Datos de LUXAI (usar exactamente estos)

- **Servicio:** fotos reales de la propiedad → vídeo cinematográfico «de estilo aéreo» con movimiento de cámara generado con IA, montaje, música y branding. Sin rodaje, sin dron, sin permisos, sin visitar la propiedad.
- **Fotos:** entre 5 y 15, actuales, a 1920 × 1080 como mínimo.
- **Pieza estándar:** 20–30 s. Vídeo principal (pack Agencia): 45–60 s.
- **Formatos:** 16:9. Además, 9:16 en los packs Profesional y Agencia.
- **Plazo:** 72 h (Esencial y Profesional); 5 días laborables (Agencia). Demo gratis: 72 h. Respuesta: menos de 24 h.
- **Packs (IVA no incluido; precio de lanzamiento para los 10 primeros clientes):**
  - **Esencial, 129 €:** 1 vídeo, 2 fotos retocadas, 1 revisión.
  - **Profesional, 379 € (95 €/vídeo):** 4 vídeos, 6 fotos retocadas, vertical, música y branding, 2 revisiones por vídeo.
  - **Agencia, 649 € (81 €/vídeo):** 8 vídeos más 1 principal, 15 fotos retocadas, vertical, música y branding, 3 revisiones por vídeo.
- **Retoque:** solo luz, color y cielo. La propiedad no se altera.
- **Base:** Mallorca (Illes Balears). Trabajo en remoto para toda España y ámbito internacional.
- **Contacto:** contacto@luxaivideo.com.

## Enlaces internos (URL exactas, con barra final)

| Página | ES | EN |
|---|---|---|
| Home | `/` | `/en/` |
| Demostraciones | `/demostraciones/` | `/en/demos/` |
| Demo de la villa | `/demostraciones/villa-contemporanea-costa/` | `/en/demos/coastal-contemporary-villa/` |
| Demo de la finca | `/demostraciones/finca-rustica-mediterranea/` | `/en/demos/mediterranean-rustic-estate/` |
| Precios | `/precios/` | `/en/pricing/` |
| Cómo funciona | `/como-funciona/` | `/en/how-it-works/` |
| Inmobiliarias | `/video-para-inmobiliarias/` | `/en/real-estate-agencies/` |
| Alquiler vacacional | `/video-alquiler-vacacional/` | `/en/luxury-vacation-rentals/` |
| Guía dron o IA | `/guias/video-inmobiliario-dron-o-ia/` | `/en/guides/drone-vs-ai-property-video/` |
| Guía de fotos | `/guias/como-hacer-fotos-inmobiliarias/` | `/en/guides/real-estate-photos-for-video/` |
| Guía de formatos | `/guias/formatos-video-inmobiliario/` | `/en/guides/real-estate-video-formats/` |
| Guía de IA y transparencia | `/guias/ia-en-anuncios-inmobiliarios/` | `/en/guides/ai-disclosure-real-estate-listings/` |
| Preguntas frecuentes | `/preguntas-frecuentes/` | `/en/faq/` |
| Sobre LUXAI | `/sobre-luxai/` | `/en/about/` |
| Contacto | `/contacto/` | `/en/contact/` |

## Formato de las guías (Markdown en `web/src/content/guias/{es|en}/<slug>.md`)

```yaml
---
lang: es                      # es | en
key: dron-ia                  # misma key en ES y EN para emparejarlas
slug: video-inmobiliario-dron-o-ia
title: "H1 de la guía"
seoTitle: "Title ≤60 caracteres"
description: "Meta description ≤155 caracteres"
excerpt: "1–2 frases para la tarjeta del índice"
published: 2026-09-27
updated: 2026-09-27
readingMinutes: 8
order: 1
related: [fotos, formatos]    # keys de otras guías
faq:
  - q: "Pregunta real"
    a: "Respuesta de 2–4 frases; puede llevar <a href='/precios/'>enlaces</a>"
sources:
  - label: "Real Decreto 517/2024 (BOE)"
    url: "https://www.boe.es/..."
---
```

**Cuerpo:**
- Sin H1 (lo pinta la plantilla). Empieza con un párrafo de entrada de 2–3 frases que responda la pregunta principal (útil para buscadores con IA).
- Después, `##` y `###`.
- **Extensión:** 1.200–1.800 palabras en ES; la versión EN, adaptada y no traducida literalmente.
- **Tablas en Markdown** cuando haya comparativas.
- **Enlaces internos:** los 3 que marca el mapa de keywords, en el texto y con el ancla indicada. Enlaces externos solo a fuentes oficiales o serias.
- **Final:** un bloque de cierre breve que invite a pedir la demo (`/contacto/`), sin tono de venta agresivo.

## Marcas en los titulares (estilo claro, desde el 28/09/2026)

- **Dos tonos:** en los titulares de sección, de página y de la banda final, `|` marca dónde empieza la parte gris. Por ejemplo, `Tres packs, | precio cerrado`. Hay que cortar donde la frase respira: tras una coma, un punto o antes de «y», «sin» o «con». No se publica el signo.
- **Palabra destacada de la portada:** va entre asteriscos (`Vuestras fotos ya tienen una *película* dentro`) y sale en cursiva champán. Solo una palabra, y solo en la portada.
- **Mayúsculas:** los subtítulos y los textos cortos de tarjeta salen en mayúsculas por diseño (Abel). Se escriben en minúscula normal; la mayúscula la pone el estilo.
