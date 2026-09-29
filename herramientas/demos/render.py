"""Renderiza los planos de las demos con paralaje por profundidad (2.5D).

Cada plano sale de UNA sola foto: cada píxel del fotograma se muestrea de la propia foto,
desplazado según su profundidad (lo cercano se mueve más que lo lejano). No se genera
contenido nuevo. El script verifica en cada fotograma que no se muestrea fuera de la imagen.

Uso:
  python render.py preview   # tiras de fotogramas a baja resolución para revisar el movimiento
  python render.py final     # planos a 1920×1080 / 30 fps en work/clips/
"""
import sys, math, pathlib, subprocess
import numpy as np, cv2

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[1]
SRC = ROOT / 'media-originales' / 'media' / 'demos'
WORK = HERE / 'work'
FPS = 30

# Movimientos. Unidades de pan/off: fracción del ancho. f = profundidad del plano focal (0 lejos, 1 cerca).
# Z = zoom global; dz = zoom dependiente de la profundidad (efecto dolly); c = centro del zoom (0..1).
MOTIONS = {
    'demo-01': {
        'dur': 4.5,
        'order': ['photo-1', 'photo-3', 'photo-2', 'photo-4'],
        'photo-1': dict(Z=(1.08, 1.11), pan=((0.012, 0), (-0.012, 0)), off=((0.028, 0), (-0.028, 0)), dz=(0.0, 0.05), f=0.35, c=(0.55, 0.50)),
        'photo-3': dict(Z=(1.05, 1.14), pan=((0, 0), (0, 0.004)), off=((0, 0), (0, 0)), dz=(0.0, 0.11), f=0.45, c=(0.52, 0.47)),
        'photo-2': dict(Z=(1.06, 1.11), pan=((0, -0.008), (0, 0.008)), off=((0, -0.015), (0, 0.015)), dz=(0.0, 0.03), f=0.40, c=(0.45, 0.45)),
        'photo-4': dict(Z=(1.16, 1.05), pan=((-0.006, 0), (0.006, 0)), off=((0.008, 0), (-0.008, 0)), dz=(0.04, 0.0), f=0.50, c=(0.45, 0.55)),
    },
    'demo-02': {
        'dur': 5.36,
        'order': ['photo-1', 'photo-3', 'photo-5', 'photo-4', 'photo-2'],
        'photo-1': dict(Z=(1.05, 1.15), pan=((0, 0), (0, -0.004)), off=((0, 0), (0, 0)), dz=(0.0, 0.12), f=0.35, c=(0.47, 0.47)),
        'photo-3': dict(Z=(1.05, 1.13), pan=((0, 0), (0, 0)), off=((0, 0), (0, 0)), dz=(0.0, 0.10), f=0.35, c=(0.50, 0.48)),
        'photo-5': dict(Z=(1.07, 1.12), pan=((0.010, 0), (-0.010, 0)), off=((0.022, 0), (-0.022, 0)), dz=(0.0, 0.06), f=0.30, c=(0.50, 0.50)),
        'photo-4': dict(Z=(1.08, 1.11), pan=((-0.012, 0), (0.012, 0)), off=((-0.028, 0), (0.028, 0)), dz=(0.0, 0.04), f=0.40, c=(0.50, 0.50)),
        'photo-2': dict(Z=(1.15, 1.05), pan=((0.006, -0.004), (-0.006, 0.004)), off=((0.008, 0), (-0.008, 0)), dz=(0.04, 0.0), f=0.50, c=(0.50, 0.55)),
    },
}


def ease(t: float) -> float:
    return 0.5 - 0.5 * math.cos(math.pi * t)


def lerp(a, b, t):
    return a + (b - a) * t


def load(demo: str, photo: str, W: int, H: int):
    img = cv2.imread(str(SRC / demo / f'{photo}.webp'), cv2.IMREAD_COLOR)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    dep = cv2.imread(str(WORK / f'{demo}_{photo}_depth.png'), cv2.IMREAD_UNCHANGED).astype(np.float32) / 65535.0
    h, w = img.shape[:2]
    s = max(W / w, H / h)
    nw, nh = round(w * s), round(h * s)
    img = cv2.resize(img, (nw, nh), interpolation=cv2.INTER_LANCZOS4 if s >= 1 else cv2.INTER_AREA)
    dep = cv2.resize(dep, (nw, nh), interpolation=cv2.INTER_LINEAR)
    x0, y0 = (nw - W) // 2, (nh - H) // 2
    img, dep = img[y0:y0 + H, x0:x0 + W], dep[y0:y0 + H, x0:x0 + W]
    # los bordes de lo cercano se quedan con lo cercano (sin halos) y se suaviza el desplazamiento
    k = max(3, int(round(5 * W / 1920)) | 1)
    dep = cv2.dilate(dep, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (k, k)))
    dep = cv2.GaussianBlur(dep, (0, 0), 2.0 * W / 1920)
    return img, dep


def render_clip(demo: str, photo: str, W: int, H: int, fps: int, dur: float):
    m = MOTIONS[demo][photo]
    img, dep = load(demo, photo, W, H)
    n = int(round(dur * fps))
    ys, xs = np.mgrid[0:H, 0:W].astype(np.float32)
    cx, cy = m['c'][0] * W, m['c'][1] * H
    f = m['f']
    worst = 0.0
    for i in range(n):
        e = ease(i / (n - 1))
        Z = lerp(*m['Z'], e)
        dz = lerp(*m['dz'], e)
        px, py = (lerp(m['pan'][0][j], m['pan'][1][j], e) * W for j in (0, 1))
        ox, oy = (lerp(m['off'][0][j], m['off'][1][j], e) * W for j in (0, 1))
        d = dep
        for _ in range(3):  # punto fijo: la profundidad se lee en el punto de origen
            rel = d - f
            k = Z * (1.0 + dz * rel)
            qx = cx + (xs - cx) / k - ox * rel - px
            qy = cy + (ys - cy) / k - oy * rel - py
            d = cv2.remap(dep, qx, qy, cv2.INTER_LINEAR, borderMode=cv2.BORDER_REPLICATE)
        out = ((qx < -0.5) | (qx > W - 0.5) | (qy < -0.5) | (qy > H - 0.5)).mean()
        worst = max(worst, float(out))
        frame = cv2.remap(img, qx, qy, cv2.INTER_CUBIC, borderMode=cv2.BORDER_REFLECT_101)
        yield frame
    if worst > 0.0005:
        print(f'  ⚠ {demo}/{photo}: {worst * 100:.3f}% de píxeles fuera de la foto en el peor fotograma', flush=True)
    else:
        print(f'  ✓ {demo}/{photo}: todo el encuadre sale de la foto (peor fotograma {worst * 100:.4f}% fuera)', flush=True)


def preview():
    from PIL import Image, ImageDraw
    W, H = 640, 360
    rows = []
    for demo, spec in MOTIONS.items():
        for photo in spec['order']:
            frames = list(render_clip(demo, photo, W, H, 10, spec['dur']))
            pick = [frames[0], frames[len(frames) // 2], frames[-1]]
            row = Image.new('RGB', (W * 3, H + 16), 'white')
            for k, fr in enumerate(pick):
                row.paste(Image.fromarray(fr), (k * W, 16))
            ImageDraw.Draw(row).text((4, 2), f'{demo} {photo}  (inicio · mitad · final)', fill='black')
            rows.append(row)
    sheet = Image.new('RGB', (W * 3, sum(r.height for r in rows)), 'white')
    y = 0
    for r in rows:
        sheet.paste(r, (0, y))
        y += r.height
    out = WORK / 'preview_sheet.jpg'
    sheet.save(out, quality=85)
    print(out)


def final():
    W, H = 1920, 1080
    (WORK / 'clips').mkdir(exist_ok=True)
    for demo, spec in MOTIONS.items():
        for photo in spec['order']:
            out = WORK / 'clips' / f'{demo}_{photo}.mp4'
            ff = subprocess.Popen(
                ['ffmpeg', '-loglevel', 'error', '-y', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{W}x{H}', '-r', str(FPS), '-i', '-',
                 '-c:v', 'libx264', '-preset', 'slow', '-crf', '14', '-pix_fmt', 'yuv420p', str(out)],
                stdin=subprocess.PIPE,
            )
            for fr in render_clip(demo, photo, W, H, FPS, spec['dur']):
                ff.stdin.write(np.ascontiguousarray(fr).tobytes())
            ff.stdin.close()
            ff.wait()
            print(out.name, flush=True)


if __name__ == '__main__':
    {'preview': preview, 'final': final}[sys.argv[1] if len(sys.argv) > 1 else 'preview']()
