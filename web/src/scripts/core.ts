import type Lenis from 'lenis';

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/** ¿Podemos reproducir vídeos solos? No con movimiento reducido, ahorro de datos o red 2G. */
export function canAutoplay() {
  if (reducedMotion()) return false;
  const c = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  if (c?.saveData) return false;
  if (c?.effectiveType && /2g/.test(c.effectiveType)) return false; // slow-2g / 2g
  return true;
}

export const EASE = 'power3.out';
export const EASE_EXPO = 'expo.out';

type Motion = {
  gsap: typeof import('gsap').gsap;
  ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;
  SplitText: typeof import('gsap/SplitText').SplitText;
};

let motionPromise: Promise<Motion | null> | null = null;

/**
 * Carga GSAP + plugins una sola vez por página.
 * Devuelve null si el usuario prefiere movimiento reducido: los componentes muestran su estado final.
 */
export function loadMotion(): Promise<Motion | null> {
  if (reducedMotion()) return Promise.resolve(null);
  if (!motionPromise) {
    motionPromise = Promise.all([import('gsap'), import('gsap/ScrollTrigger'), import('gsap/SplitText')])
      .then(([g, st, sp]) => {
        const gsap = g.gsap;
        gsap.registerPlugin(st.ScrollTrigger, sp.SplitText);
        // evita recálculos por la barra de direcciones del móvil (y por los redimensionados de las auditorías)
        st.ScrollTrigger.config({ ignoreMobileResize: true });
        gsap.defaults({ ease: EASE, duration: 0.8 });
        return { gsap, ScrollTrigger: st.ScrollTrigger, SplitText: sp.SplitText };
      })
      .catch(() => null);
  }
  return motionPromise;
}

let lenisInstance: Lenis | null = null;
export const getLenis = () => lenisInstance;

export async function initSmoothScroll() {
  if (reducedMotion() || !finePointer()) return null;
  const m = await loadMotion();
  if (!m) return null;
  const { default: LenisCtor } = await import('lenis');
  const lenis = new LenisCtor({ duration: 1.1, smoothWheel: true, anchors: { offset: -88 } });
  lenis.on('scroll', m.ScrollTrigger.update);
  m.gsap.ticker.add((time) => lenis.raf(time * 1000));
  m.gsap.ticker.lagSmoothing(0);
  lenisInstance = lenis;
  return lenis;
}

/** Marca un elemento como revelado (lo saca del estado oculto del CSS). */
export const markDone = (el: Element) => el.setAttribute('data-reveal-done', '');
