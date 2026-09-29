# Demos por paralaje de profundidad

Convierten fotos fijas en planos con movimiento de cámara **sin inventar nada**: cada píxel del vídeo se toma de la propia foto, desplazado según su profundidad (lo cercano se mueve más que lo lejano). Así se hicieron las dos demos de la web el 28/09/2026, y así se pueden hacer los vídeos de clientes si se quiere mantener la promesa de fidelidad de la web.

## Requisitos

- Python 3.11 y un entorno propio:
  ```bash
  python3.11 -m venv .venv
  .venv/bin/pip install torch transformers pillow numpy opencv-python-headless
  ```
- ffmpeg con libx264, libvpx-vp9 y libsvtav1 (el de Homebrew los trae).
- Modelo de profundidad: **Depth Anything V2 Small**, licencia Apache-2.0. Se descarga solo la primera vez (99 MB). No uséis las variantes Base, Large ni Giant: son CC-BY-NC-4.0 y no permiten uso comercial.

## Pasos

1. **Profundidad:** `.venv/bin/python depth.py`. Lee las fotos de `media-originales/media/demos/demo-XX/photo-N.webp` y guarda un PNG de 16 bits por foto en `work/`.
2. **Revisar el movimiento:** `.venv/bin/python render.py preview`. Genera `work/preview_sheet.jpg` con el inicio, la mitad y el final de cada plano.
3. **Ajustar** los movimientos en `MOTIONS` (dentro de `render.py`) y repetir el paso 2 hasta que ningún plano deforme líneas rectas.
4. **Render final:** `.venv/bin/python render.py final`. Planos a 1920 × 1080 y 30 fps en `work/clips/`. Cada plano imprime ✓ si todo el encuadre sale de la foto; si sale ⚠, hay que bajar el zoom o el desplazamiento de ese plano.
5. **Montaje y exportación:** `bash assemble.sh`. Encadena los planos con fundidos de 0,7 s y escribe en la web el MP4, el WebM, las muestras de 960 y 640 px (H.264 y AV1) y el póster.

**Para otra propiedad:** una carpeta con sus fotos junto a las de las demos, su nombre en la lista de `depth.py`, una entrada en `MOTIONS` con la duración y el orden de los planos, y una línea `assemble …` al final de `assemble.sh` (para un cliente, cambiad también la carpeta de salida, que hoy apunta a la web).

## Parámetros de cada plano (`MOTIONS`)

| Clave | Qué controla |
|---|---|
| `Z` | Zoom global al inicio y al final. `(1.05, 1.14)` es un avance; `(1.16, 1.05)`, un retroceso que abre el plano. |
| `dz` | Zoom que depende de la profundidad (efecto dolly): el primer término se acerca más que el fondo. |
| `pan` | Desplazamiento del encuadre, en fracción del ancho. |
| `off` | Paralaje lateral: cuánto más se mueve lo cercano que lo lejano. Da la sensación de cámara que se desliza. |
| `f` | Profundidad del plano que no se mueve (0 = lejos, 1 = cerca). |
| `c` | Centro del zoom, de 0 a 1 en cada eje. |

Hay que mantener el zoom siempre por encima de 1: es el margen que permite mover la cámara sin salirse de la foto.

## Qué no hace

No crea lo que la foto no muestra: ni estancias, ni el otro lado de una esquina, ni vuelos largos. Si un cliente necesita eso, hace falta otra técnica, y entonces el texto de la web sobre fidelidad debe cambiar.
