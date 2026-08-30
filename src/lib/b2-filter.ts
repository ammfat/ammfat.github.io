export function initB2Filter(root: HTMLElement, clearBtn: HTMLElement | null, emptyEl: HTMLElement | null) {
  function parseList(value: string | undefined) {
    return (value ?? '')
      .split(/[\s,]+/)
      .map((s) => s.trim())
      .filter(Boolean);
  }

  function setFilter(layer: string | null) {
    root.dataset.filter = layer ?? '';
    clearBtn?.classList.toggle('hidden', !layer);

    root.querySelectorAll<HTMLElement>('.layer-node, .layer-chip').forEach((el) => {
      const active = !!layer && el.dataset.layer === layer;
      el.setAttribute('aria-pressed', active ? 'true' : 'false');
      el.classList.toggle('is-active', active);
    });

    root.querySelectorAll<HTMLElement>('.stack-item').forEach((el) => {
      const toolLayers = parseList(el.dataset.layers);
      const match = !layer || toolLayers.includes(layer);
      el.classList.toggle('hidden', !match);
    });

    root.querySelectorAll<HTMLElement>('.stack-group').forEach((group) => {
      const anyVisible = [...group.querySelectorAll('.stack-item')].some(
        (el) => !el.classList.contains('hidden'),
      );
      group.classList.toggle('hidden', !anyVisible);
    });

    root.querySelectorAll<HTMLElement>('.work-item').forEach((el) => {
      const projectLayers = parseList(el.dataset.layers);
      const match = !layer || projectLayers.includes(layer);
      el.classList.toggle('hidden', !match);
    });

    const workItems = [...root.querySelectorAll('.work-item')];
    const anyVisible = workItems.some((el) => !el.classList.contains('hidden'));
    emptyEl?.classList.toggle('hidden', !layer || anyVisible);
  }

  function onActivate(el: Element) {
    const layer = (el as HTMLElement).dataset.layer;
    if (!layer) return;
    const current = root.dataset.filter;
    setFilter(current === layer ? null : layer);
  }

  root.querySelectorAll('.layer-node, .layer-chip').forEach((el) => {
    el.addEventListener('click', () => onActivate(el));
    el.addEventListener('keydown', (e) => {
      const ke = e as KeyboardEvent;
      if (ke.key === 'Enter' || ke.key === ' ') {
        ke.preventDefault();
        onActivate(el);
      }
    });
  });

  clearBtn?.addEventListener('click', () => setFilter(null));
}
