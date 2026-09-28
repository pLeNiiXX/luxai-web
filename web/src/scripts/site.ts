import { loadMotion, initSmoothScroll, markDone, reducedMotion, getLenis, canAutoplay } from './core';

/* ------------------------------------------------------------------ *
 * Utilidades
 * ------------------------------------------------------------------ */
const store = {
  get(k: string) {
    try { return sessionStorage.getItem(k); } catch { return null; }
  },
  set(k: string, v: string) {
    try { sessionStorage.setItem(k, v); } catch { /* almacenamiento bloqueado: no pasa nada */ }
  },
};

/* ------------------------------------------------------------------ *
 * UTM: se guardan en la página de entrada y viajan con el formulario
 * ------------------------------------------------------------------ */
function captureUtm() {
  const p = new URLSearchParams(location.search);
  const s = p.get('utm_source') ?? '';
  const m = p.get('utm_medium') ?? '';
  const c = p.get('utm_campaign') ?? '';
  if (s || m || c) store.set('luxai_utm', `${s}/${m}/${c}`);
}
const utmOrigin = () => store.get('luxai_utm') ?? 'directo';

/* ------------------------------------------------------------------ *
 * Cabecera: sólida al hacer scroll, se esconde al bajar y vuelve al subir
 * ------------------------------------------------------------------ */
function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;
  let lastY = window.scrollY;
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    header.toggleAttribute('data-solid', y > 24);
    const menuOpen = document.documentElement.hasAttribute('data-menu-open');
    const goingDown = y > lastY + 4;
    const goingUp = y < lastY - 4;
    if (!menuOpen && goingDown && y > 320) header.setAttribute('data-hidden', '');
    else if (goingUp || y < 320) header.removeAttribute('data-hidden');
    lastY = y;
    ticking = false;
  };
  update();
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
  header.addEventListener('focusin', () => header.removeAttribute('data-hidden'));
}

/* ------------------------------------------------------------------ *
 * Menú móvil: el resto de la página queda inerte mientras está abierto
 * ------------------------------------------------------------------ */
function initMenu() {
  const btn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const panel = document.getElementById('mobile-menu');
  if (!btn || !panel) return;
  const root = document.documentElement;
  const background = [document.querySelector('main'), document.querySelector('footer'), document.querySelector('.skip-link')].filter(Boolean) as HTMLElement[];
  const setOpen = (open: boolean) => {
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? btn.dataset.labelClose! : btn.dataset.labelOpen!);
    root.toggleAttribute('data-menu-open', open);
    panel.toggleAttribute('inert', !open);
    background.forEach((el) => el.toggleAttribute('inert', open));
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      panel.querySelector<HTMLElement>('a')?.focus({ preventScroll: true });
    } else {
      lenis?.start();
    }
  };
  btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
  panel.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) setOpen(false);
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && root.hasAttribute('data-menu-open')) {
      setOpen(false);
      btn.focus();
    }
  });
  window.matchMedia('(width >= 1280px)').addEventListener('change', (e) => e.matches && setOpen(false));
}

/* ------------------------------------------------------------------ *
 * Modal de demo (dialog nativo) + envío a FormSubmit
 * ------------------------------------------------------------------ */
function fill(tpl: string, data: Record<string, string>) {
  return tpl.replace(/\{(\w+)\}/g, (_, k) => data[k] ?? '');
}

export function initDemoForms() {
  const dialog = document.getElementById('demo-modal') as HTMLDialogElement | null;
  const menuBtn = document.querySelector<HTMLElement>('[data-menu-toggle]');
  let lastFocus: HTMLElement | null = null;

  const open = (pack = '') => {
    if (!dialog) return;
    const packInput = dialog.querySelector<HTMLInputElement>('[data-pack-input]');
    if (packInput) packInput.value = pack;
    const active = document.activeElement as HTMLElement | null;
    // si se abre desde el menú móvil (que se cierra), el foco vuelve al botón del menú
    lastFocus = active?.closest('#mobile-menu') ? menuBtn : active;
    dialog.showModal();
    dialog.setAttribute('data-open', '');
    getLenis()?.stop();
    requestAnimationFrame(() => dialog.querySelector<HTMLInputElement>('input:not([type=hidden])')?.focus());
  };
  const close = () => {
    if (!dialog?.open) return;
    dialog.removeAttribute('data-open');
    window.setTimeout(() => {
      dialog.close();
      resetForm(dialog);
      getLenis()?.start();
      lastFocus?.focus({ preventScroll: true });
    }, reducedMotion() ? 0 : 240);
  };

  document.addEventListener('click', (e) => {
    // Cmd/Ctrl/Mayús-clic o botón central: se respeta abrir en otra pestaña
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const trigger = (e.target as HTMLElement).closest<HTMLElement>('[data-open-demo-modal]');
    if (trigger && dialog) {
      e.preventDefault();
      open(trigger.dataset.pack ?? '');
    }
  });
  dialog?.querySelectorAll('[data-modal-close]').forEach((b) => b.addEventListener('click', close));
  dialog?.addEventListener('cancel', (e) => {
    e.preventDefault();
    close();
  });
  // solo se cierra al pulsar el fondo si el gesto empezó también en el fondo (no al arrastrar una selección)
  let downOnBackdrop = false;
  dialog?.addEventListener('pointerdown', (e) => (downOnBackdrop = e.target === dialog));
  dialog?.addEventListener('click', (e) => {
    if (e.target === dialog && downOnBackdrop) close();
    downOnBackdrop = false;
  });

  if (location.hash === '#demo') {
    // en la página de contacto el formulario está en la propia página: se enfoca en lugar de abrir el modal
    const inline = document.querySelector<HTMLElement>('[data-inline-demo]');
    if (inline) inline.querySelector<HTMLInputElement>('input:not([type=hidden])')?.focus({ preventScroll: true });
    else if (dialog) open();
  }

  document.querySelectorAll<HTMLFormElement>('form[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (e) => submit(e, form));
  });
}

function resetForm(scope: HTMLElement) {
  const form = scope.querySelector<HTMLFormElement>('form[data-demo-form]');
  const content = scope.querySelector<HTMLElement>('[data-form-content]');
  const success = scope.querySelector<HTMLElement>('[data-form-success]');
  const error = scope.querySelector<HTMLElement>('[data-form-error]');
  if (success && !success.hidden) {
    form?.reset();
    if (content) content.hidden = false;
    success.hidden = true;
  }
  if (error) error.hidden = true;
}

async function submit(e: SubmitEvent, form: HTMLFormElement) {
  e.preventDefault();
  const scope = form.closest<HTMLElement>('[data-form-scope]') ?? form;
  const btn = form.querySelector<HTMLButtonElement>('[type=submit]');
  const label = btn?.querySelector('span');
  const original = label?.textContent ?? '';
  const content = scope.querySelector<HTMLElement>('[data-form-content]');
  const success = scope.querySelector<HTMLElement>('[data-form-success]');
  const error = scope.querySelector<HTMLElement>('[data-form-error]');
  const fd = new FormData(form);
  const honey = String(fd.get('_honey') ?? '');
  if (honey) return;
  const name = String(fd.get('name') ?? '').trim();
  const email = String(fd.get('email') ?? '').trim();
  const details = String(fd.get('property') ?? '').trim();
  const origin = utmOrigin();
  // sin JS el formulario usa el endpoint normal de FormSubmit; con JS, el de AJAX
  const endpoint = form.action.replace('://formsubmit.co/', '://formsubmit.co/ajax/').replace('/ajax/ajax/', '/ajax/');

  if (error) error.hidden = true;
  if (btn) {
    btn.disabled = true;
    if (label) label.textContent = form.dataset.sending ?? '…';
  }

  let ok = false;
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      signal: typeof AbortSignal !== 'undefined' && 'timeout' in AbortSignal ? AbortSignal.timeout(15000) : undefined,
      body: JSON.stringify({
        'Nombre del cliente': name || 'No especificado',
        'Email del cliente': email,
        'Detalles de la propiedad': details || 'Sin detalles',
        'Pack de interés': String(fd.get('pack') ?? '') || '—',
        'Canal de origen': form.dataset.channel ?? 'Formulario',
        'Página': location.pathname,
        'Idioma': document.documentElement.lang,
        'Origen UTM': origin,
        'Fecha y hora': new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' }),
        _replyto: email,
        _subject: `Nueva solicitud de demo: ${name || email}`,
        _template: 'table',
        _captcha: 'false',
        _honey: honey,
      }),
    });
    const json = await res.json().catch(() => null);
    ok = res.ok && !!json && (json.success === true || json.success === 'true');
  } catch {
    ok = false;
  }

  if (btn) {
    btn.disabled = false;
    if (label) label.textContent = original;
  }

  if (ok) {
    if (content) content.hidden = true;
    if (success) {
      success.hidden = false;
      success.querySelector<HTMLElement>('[tabindex="-1"]')?.focus();
    }
    return;
  }
  if (error) {
    const msg = fill(error.dataset.template ?? '', { name: name || '—', email: email || '—', details });
    const mail = error.querySelector<HTMLAnchorElement>('[data-error-email]');
    const wa = error.querySelector<HTMLAnchorElement>('[data-error-whatsapp]');
    if (mail) {
      const q = new URLSearchParams({ subject: error.dataset.subject ?? 'Demo', body: msg }).toString().replace(/\+/g, '%20');
      mail.href = `mailto:${error.dataset.email}?${q}`;
    }
    if (wa && wa.dataset.number) wa.href = `https://wa.me/${wa.dataset.number}?text=${encodeURIComponent(msg)}`;
    error.hidden = false;
  }
}

/* ------------------------------------------------------------------ *
 * Vídeos: se reproducen solo cuando se ven y todos tienen control de pausa (WCAG 2.2.2)
 * ------------------------------------------------------------------ */
function initVideos() {
  const vids = document.querySelectorAll<HTMLVideoElement>('video[data-inview]');
  if (vids.length) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          const v = en.target as HTMLVideoElement;
          if (!v.hasAttribute('data-inview')) continue; // un componente puede tomar el control (p. ej. la secuencia anclada)
          if (en.isIntersecting) {
            if (!v.hasAttribute('data-user-paused') && canAutoplay()) {
              if (v.preload === 'none') v.preload = 'auto';
              v.play().catch(() => {});
            }
          } else if (!v.paused) {
            v.pause();
          }
        }
      },
      { rootMargin: '200px 0px', threshold: 0.15 },
    );
    vids.forEach((v) => io.observe(v));
  }
  document.querySelectorAll<HTMLVideoElement>('video').forEach((v) => {
    v.addEventListener('playing', () => v.setAttribute('data-playing', ''));
  });

  document.querySelectorAll<HTMLButtonElement>('[data-video-toggle]').forEach((btn) => {
    const v = document.getElementById(btn.getAttribute('aria-controls') ?? '') as HTMLVideoElement | null;
    if (!v) return;
    const sync = () => {
      const playing = !v.paused;
      btn.toggleAttribute('data-paused', !playing);
      const lbl = btn.querySelector('[data-label]');
      if (lbl) lbl.textContent = playing ? btn.dataset.labelPause! : btn.dataset.labelPlay!;
    };
    btn.addEventListener('click', () => {
      if (v.paused) {
        v.removeAttribute('data-user-paused');
        if (v.preload === 'none') v.preload = 'auto';
        v.play().catch(() => {});
      } else {
        v.setAttribute('data-user-paused', '');
        v.pause();
      }
    });
    v.addEventListener('play', sync);
    v.addEventListener('pause', sync);
    sync();
  });
}

/* ------------------------------------------------------------------ *
 * Revelados genéricos
 * ------------------------------------------------------------------ */
async function initReveals() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  const m = await loadMotion();
  if (!m) {
    els.forEach(markDone);
    return;
  }
  const { gsap, ScrollTrigger, SplitText } = m;

  for (const el of els) {
    const type = el.dataset.reveal;
    const delay = Number(el.dataset.delay ?? 0);
    const start = el.dataset.start ?? 'top 86%';

    if (type === 'lines') {
      SplitText.create(el, {
        type: 'lines',
        mask: 'lines',
        tag: 'span',
        aria: 'none',
        linesClass: 'split-line',
        autoSplit: true,
        onSplit(self) {
          markDone(el);
          return gsap.from(self.lines, {
            yPercent: 105,
            duration: 1,
            stagger: 0.09,
            ease: 'expo.out',
            delay,
            scrollTrigger: { trigger: el, start, once: true },
          });
        },
      });
      continue;
    }

    if (type === 'stagger') {
      const kids = Array.from(el.children) as HTMLElement[];
      gsap.from(kids, { opacity: 0, y: 32, duration: 0.9, stagger: 0.09, delay, scrollTrigger: { trigger: el, start, once: true } });
      markDone(el);
      continue;
    }

    // 'fade': GSAP fija el estado inicial en línea al crear el tween, así que el elemento
    // se marca en el acto (evita que la red de seguridad CSS lo muestre y luego «salte»)
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay, scrollTrigger: { trigger: el, start, once: true } },
    );
    markDone(el);
  }

  /* manifiesto palabra a palabra ligado al scroll.
     Se prepara solo cuando la sección está a una pantalla de distancia. Las palabras parten de 0,4 de opacidad
     (0,5 sobre fondo claro) para que, aunque alguien se detenga a mitad, el texto grande siga pasando 3:1. */
  const wordsIO = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        if (!en.isIntersecting) continue;
        const el = en.target as HTMLElement;
        wordsIO.unobserve(el);
        const from = el.closest('.section--light') ? 0.5 : 0.4;
        SplitText.create(el, {
          type: 'words',
          tag: 'span',
          aria: 'none',
          autoSplit: true,
          onSplit(self) {
            return gsap.fromTo(
              self.words,
              { opacity: from },
              {
                opacity: 1,
                ease: 'none',
                stagger: 0.1,
                scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: 0.6 },
              },
            );
          },
        });
      }
    },
    { rootMargin: '0px 0px 100% 0px' },
  );
  document.querySelectorAll<HTMLElement>('[data-words]').forEach((el) => wordsIO.observe(el));

  /* parallax suave en imágenes marcadas */
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const amt = Number(el.dataset.parallax || 8);
    gsap.fromTo(
      el,
      { yPercent: -amt },
      { yPercent: amt, ease: 'none', scrollTrigger: { trigger: el.parentElement ?? el, start: 'top bottom', end: 'bottom top', scrub: true } },
    );
  });

  ScrollTrigger.refresh();
}

/* ------------------------------------------------------------------ */
captureUtm();
initHeader();
initMenu();
initDemoForms();
initVideos();
initSmoothScroll();
initReveals();
