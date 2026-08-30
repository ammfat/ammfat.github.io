# ammfat.github.io — agent notes

## Local server

Astro `npm run dev` already hot-reloads `.astro` and content. Do **not** start a second server on port 4321, and do **not** use `astro preview` while iterating — a stale `localhost` listener is why the browser can show an old copy.

- Prefer the existing HMR session.
- Restart when `astro.config` / Vite config changes, a new route 404s because an old process never watched it, or the tab still shows outdated copy.
- Then run `npm run dev:fresh` (kills whatever is on 4321, then one `astro dev`).
- Verify: `curl -s http://localhost:4321/b2/` should contain `Click to filter`.
