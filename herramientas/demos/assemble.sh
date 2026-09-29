#!/usr/bin/env bash
# Monta los planos de cada demo con fundidos y exporta todas las versiones que usa la web.
# Requiere: ffmpeg con libx264, libvpx-vp9 y libsvtav1. Ejecutar después de `python render.py final`.
set -euo pipefail
cd "$(dirname "$0")"
WEB="../../web"
FADE=0.7

assemble() {
  local demo="$1" dur="$2"; shift 2
  local clips=("$@") inputs=() filter="" prev="0:v" n=${#clips[@]}
  for c in "${clips[@]}"; do inputs+=(-i "work/clips/${demo}_${c}.mp4"); done
  for ((k = 1; k < n; k++)); do
    local off; off=$(python3 -c "print(round($k*($dur-$FADE), 3))")
    local out="v$k"; [[ $k -eq $((n - 1)) ]] && out="vout"
    filter+="[$prev][$k:v]xfade=transition=fade:duration=$FADE:offset=$off[$out];"
    prev="$out"
  done
  ffmpeg -loglevel error -y "${inputs[@]}" -filter_complex "${filter%;}" -map "[vout]" -c:v libx264 -preset slow -crf 14 -pix_fmt yuv420p "work/${demo}_master.mp4"

  local P="$WEB/public/media/demos/$demo" M="work/${demo}_master.mp4"
  ffmpeg -loglevel error -y -i "$M" -c:v libx264 -preset slow -crf 22 -profile:v high -pix_fmt yuv420p -movflags +faststart -an "$P/video-1080.mp4"
  ffmpeg -loglevel error -y -i "$M" -c:v libvpx-vp9 -crf 33 -b:v 0 -deadline good -cpu-used 2 -row-mt 1 -an "$P/video-1080.webm"
  ffmpeg -loglevel error -y -i "$M" -vf "scale=960:540:flags=lanczos" -c:v libx264 -preset slow -crf 29 -pix_fmt yuv420p -movflags +faststart -an "$P/preview.mp4"
  ffmpeg -loglevel error -y -i "$M" -vf "scale=960:540:flags=lanczos" -c:v libsvtav1 -crf 42 -preset 5 -g 240 -pix_fmt yuv420p -movflags +faststart -an "$P/preview-av1.mp4"
  ffmpeg -loglevel error -y -i "$M" -vf "scale=640:360:flags=lanczos" -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p -movflags +faststart -an "$P/preview-640.mp4"
  ffmpeg -loglevel error -y -i "$M" -vf "scale=640:360:flags=lanczos" -c:v libsvtav1 -crf 42 -preset 5 -g 240 -pix_fmt yuv420p -movflags +faststart -an "$P/preview-640-av1.mp4"
  # póster = primer fotograma (mismo encuadre con el que arranca el vídeo)
  ffmpeg -loglevel error -y -i "$M" -frames:v 1 "work/${demo}_poster.png"
  python3 -c "from PIL import Image; Image.open('work/${demo}_poster.png').convert('RGB').save('$WEB/src/assets/demos/${demo}/poster.webp','WEBP',quality=86)"
  echo "$demo: $(ffprobe -v error -show_entries format=duration -of csv=p=0 "$P/video-1080.mp4") s"
}

assemble demo-01 4.5 photo-1 photo-3 photo-2 photo-4
assemble demo-02 5.36 photo-1 photo-3 photo-5 photo-4 photo-2
ls -la "$WEB/public/media/demos/demo-01" "$WEB/public/media/demos/demo-02"
