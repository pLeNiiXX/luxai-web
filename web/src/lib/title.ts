/**
 * Titulares a dos tonos: «Qué hace la IA | y qué hacemos nosotros» → la parte tras «|» va en gris.
 * En el HTML solo queda el texto (el separador no se publica).
 */
export const splitTitle = (title: string) => {
  const [main, ...rest] = title.split('|');
  return { main: main.trim(), rest: rest.join(' ').trim() };
};

/** Texto plano del titular, para atributos y metadatos */
export const plainTitle = (title: string) => title.replace(/\s*\|\s*/g, ' ').replace(/\*/g, '');
