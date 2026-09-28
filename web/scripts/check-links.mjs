// Verificación estática del build: enlaces y recursos internos, anclas, metas SEO, hreflang, JSON-LD y sitemaps.
// Uso: npm run build && node scripts/check-links.mjs
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const SITE = 'https://luxaivideo.com';

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const files = walk(DIST);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const errors = [];
const warnings = [];
const pages = new Map(); // ruta → { alts, ids }

const toPath = (file) => '/' + relative(DIST, file).replace(/index\.html$/, '').replace(/\.html$/, '/');
const safeDecode = (s) => {
  try { return decodeURIComponent(s); } catch { return s; }
};
const splitRef = (ref) => {
  const [pathAndQuery, hash = ''] = ref.split('#');
  return { path: safeDecode(pathAndQuery.split('?')[0]), hash: safeDecode(hash) };
};
const resolves = (path) => {
  if (!path) return true;
  const p = join(DIST, path);
  if (path.endsWith('/')) return existsSync(join(p, 'index.html'));
  return existsSync(p);
};
const toInternal = (u) => (u.startsWith(SITE) ? u.slice(SITE.length) || '/' : u.startsWith('/') && !u.startsWith('//') ? u : null);

// 1ª pasada: ids y hreflang de cada página
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  const alts = {};
  for (const m of html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)) alts[m[1]] = m[2].replace(SITE, '');
  pages.set(toPath(file), { alts, ids, file });
}

// 2ª pasada: comprobaciones
for (const [path, { file, ids }] of pages) {
  const html = readFileSync(file, 'utf8');
  const is404 = path === '/404/';
  const where = path;

  if (!is404) {
    const titles = html.match(/<title>([^<]*)<\/title>/g) ?? [];
    if (titles.length !== 1) errors.push(`${where}: ${titles.length} <title>`);
    const title = titles[0]?.replace(/<\/?title>/g, '') ?? '';
    if (title.length > 65) warnings.push(`${where}: title de ${title.length} caracteres`);
    const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
    if (!desc) errors.push(`${where}: sin meta description`);
    else if (desc.length > 160) warnings.push(`${where}: description de ${desc.length} caracteres`);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    if (canonical !== SITE + path) errors.push(`${where}: canonical ${canonical} ≠ ${SITE + path}`);
  }
  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (h1s.length !== 1) errors.push(`${where}: ${h1s.length} <h1>`);

  // JSON-LD: válido y con URLs internas que existen
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let data;
    try {
      data = JSON.parse(m[1]);
    } catch (e) {
      errors.push(`${where}: JSON-LD inválido (${e.message})`);
      continue;
    }
    const urls = [];
    const visit = (v, key) => {
      if (typeof v === 'string' && key !== '@id' && v.startsWith(SITE)) urls.push(v);
      else if (Array.isArray(v)) v.forEach((x) => visit(x, key));
      else if (v && typeof v === 'object') Object.entries(v).forEach(([k, x]) => visit(x, k));
    };
    visit(data);
    for (const u of urls) {
      const { path: p } = splitRef(u.slice(SITE.length) || '/');
      if (!resolves(p)) errors.push(`${where}: JSON-LD apunta a un recurso inexistente ${u}`);
    }
  }

  // og:image
  const og = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
  if (og && toInternal(og) && !resolves(splitRef(toInternal(og)).path)) errors.push(`${where}: og:image inexistente ${og}`);

  // enlaces, recursos, fuentes de vídeo en data-* y anclas
  const refs = [
    ...[...html.matchAll(/\s(?:href|src|poster|data-(?:desktop|mobile)(?:-av1)?)="([^"]+)"/g)].map((m) => m[1]),
    ...[...html.matchAll(/\s(?:srcset|imagesrcset)="([^"]+)"/g)].flatMap((m) => m[1].split(',').map((s) => s.trim().split(' ')[0])),
  ];
  for (const raw of refs) {
    if (raw.startsWith('#')) {
      const id = safeDecode(raw.slice(1));
      if (id && !ids.has(id)) errors.push(`${where}: ancla sin destino ${raw}`);
      continue;
    }
    const ref = toInternal(raw);
    if (!ref) continue;
    const { path: p, hash } = splitRef(ref);
    if (!resolves(p)) errors.push(`${where}: enlace roto ${raw}`);
    const last = p.split('/').pop();
    if (p && !p.endsWith('/') && !last.includes('.')) warnings.push(`${where}: enlace sin barra final ${raw}`);
    if (hash && p.endsWith('/') && hash !== 'demo') {
      const target = pages.get(p);
      if (target && !target.ids.has(hash)) errors.push(`${where}: ancla sin destino ${raw}`);
    }
  }
}

// hreflang: recíproco, autorreferente y con x-default = versión ES
for (const [path, { alts }] of pages) {
  if (!Object.keys(alts).length) continue;
  if (alts['x-default'] !== alts.es) errors.push(`${path}: x-default (${alts['x-default']}) ≠ es (${alts.es})`);
  for (const [lang, target] of Object.entries(alts)) {
    if (lang === 'x-default') continue;
    const back = pages.get(target);
    if (!back) errors.push(`${path}: hreflang ${lang} → ${target} no existe`);
    else if (back.alts[lang] !== target) errors.push(`${path}: hreflang ${lang} no autorreferencia en ${target}`);
    else if (!Object.values(back.alts).includes(path)) errors.push(`${path}: ${target} no devuelve el hreflang`);
  }
}

// sitemaps: cada <loc> y cada recurso de vídeo existe
for (const f of files.filter((x) => /sitemap-.*\.xml$/.test(x))) {
  const xml = readFileSync(f, 'utf8');
  for (const m of xml.matchAll(/<(?:loc|video:thumbnail_loc|video:content_loc)>([^<]+)</g)) {
    const ref = toInternal(m[1]);
    if (ref && !resolves(splitRef(ref).path)) errors.push(`${relative(DIST, f)}: ${m[1]} no existe`);
  }
}

const uniq = (a) => [...new Set(a)];
console.log(`Páginas revisadas: ${pages.size}`);
console.log(`Errores: ${uniq(errors).length}`);
uniq(errors).forEach((e) => console.log('  ✗ ' + e));
console.log(`Avisos: ${uniq(warnings).length}`);
uniq(warnings).slice(0, 40).forEach((w) => console.log('  · ' + w));
process.exit(uniq(errors).length ? 1 : 0);
