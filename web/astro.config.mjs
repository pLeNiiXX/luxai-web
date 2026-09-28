// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://luxaivideo.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  // Astro 7 cambió el valor por defecto a 'jsx' (elimina espacios entre elementos inline)
  compressHTML: true,
  // precarga al pasar el ratón: con las View Transitions, la navegación entre páginas es casi inmediata
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  image: { layout: 'constrained' },
});
