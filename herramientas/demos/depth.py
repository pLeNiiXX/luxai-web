"""Mapas de profundidad de las fotos de las demos con Depth Anything V2 Small (IA de estimación monocular).
Salida: PNG de 16 bits (0 = lejos, 65535 = cerca) junto a cada foto, en herramientas/demos/work/.

Licencia: se usa la variante Small porque es Apache-2.0 (uso comercial permitido). Las variantes
Base, Large y Giant de Depth Anything V2 son CC-BY-NC-4.0: no sirven para material de un negocio.
"""
import sys, pathlib
import numpy as np, torch
from PIL import Image
from transformers import pipeline

ROOT = pathlib.Path(__file__).resolve().parents[2]
SRC = ROOT / 'media-originales' / 'media' / 'demos'
OUT = pathlib.Path(__file__).resolve().parent / 'work'
OUT.mkdir(exist_ok=True)

device = 'mps' if torch.backends.mps.is_available() else 'cpu'
pipe = pipeline('depth-estimation', model='depth-anything/Depth-Anything-V2-Small-hf', device=device)

for demo in ['demo-01', 'demo-02']:
    for photo in sorted((SRC / demo).glob('photo-*.webp')):
        img = Image.open(photo).convert('RGB')
        res = pipe(img)
        d = res['predicted_depth']
        d = d.squeeze().float().cpu().numpy()
        d = np.array(Image.fromarray(d).resize(img.size, Image.BICUBIC))
        d = (d - d.min()) / (d.max() - d.min() + 1e-8)
        out = OUT / f'{demo}_{photo.stem}_depth.png'
        Image.fromarray((d * 65535).astype(np.uint16)).save(out)
        print(out.name, img.size, flush=True)
