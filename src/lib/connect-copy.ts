export function initConnectCopy(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-copy-email]').forEach((btn) => {
    if (btn.dataset.copyBound === '1') return;
    btn.dataset.copyBound = '1';
    btn.addEventListener('click', async () => {
      const email = btn.dataset.copyEmail;
      if (!email) return;
      try {
        await navigator.clipboard.writeText(email);
      } catch {
        return;
      }
      const label = btn.querySelector('[data-copy-label]');
      const copyIcon = btn.querySelector('[data-copy-icon]');
      const doneIcon = btn.querySelector('[data-copied-icon]');
      const previous = label?.textContent ?? '';
      const previousAria = btn.getAttribute('aria-label') ?? 'Copy email';
      if (label) label.textContent = 'Copied';
      copyIcon?.classList.add('hidden');
      doneIcon?.classList.remove('hidden');
      btn.setAttribute('aria-label', 'Email copied');
      window.setTimeout(() => {
        if (label) label.textContent = previous;
        copyIcon?.classList.remove('hidden');
        doneIcon?.classList.add('hidden');
        btn.setAttribute('aria-label', previousAria);
      }, 1600);
    });
  });
}
