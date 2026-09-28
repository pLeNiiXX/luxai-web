#!/usr/bin/env bash
# Publica el build como vista previa en Vercel: https://luxaivideo.vercel.app
# Es solo para enseñar la web: va marcada como noindex y sin los archivos de Cloudflare (_headers, _redirects).
# La web definitiva se despliega en Cloudflare Pages (ver INFORME.md).
# Uso: bash scripts/vista-previa-vercel.sh   (necesita la CLI de Vercel con sesión iniciada)
set -euo pipefail
cd "$(dirname "$0")/.."
OUT="../vista-previa-vercel"

npm run build
node scripts/check-links.mjs

mkdir -p "$OUT"
rsync -a --delete --exclude .vercel --exclude vercel.json --exclude _headers --exclude _redirects dist/ "$OUT/"
cat > "$OUT/vercel.json" <<'JSON'
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "trailingSlash": true,
  "headers": [
    { "source": "/(.*)", "headers": [{ "key": "X-Robots-Tag", "value": "noindex, nofollow" }] }
  ]
}
JSON

cd "$OUT"
[ -f .vercel/project.json ] || { vercel project add luxaivideo || true; vercel link --yes --project luxaivideo; }
vercel deploy --prod --yes
