# Prerendering

The site is a single-route Vite + React 18 SPA. Without prerendering, the served HTML is an empty `<div id="root"></div>` (about 6 words of text), which hurts two things:
- **GEO/SEO:** non-JS crawlers and most LLM answer engines see no body content, only the head.
- **LCP:** the largest contentful paint waits for the JS bundle to download, parse, and render (measured ~6.5s, "poor").

Both are fixed by rendering the route to static HTML at build time and hydrating it on the client: the body content lands in the initial HTML (crawlers and LLMs read it, the LCP paints immediately) and React attaches on load.

## How it works

A small custom Vite SSR prerender, no extra runtime dependencies (`react-dom/server` is already present). It deliberately injects **only** the rendered `#root` body and leaves `index.html`'s `<head>` (title, meta, canonical, Person/ProfilePage JSON-LD) untouched, so the hand-tuned head/schema is never rewritten.

- `src/app-tree.tsx` -- the single React tree (StrictMode + ThemeProvider + App), imported by both entries so the server and client render identically (hydration parity).
- `src/main.tsx` -- client entry: `hydrateRoot` (was `createRoot().render`).
- `src/entry-server.tsx` -- server entry: exports `render()` = `renderToString(<AppTree/>)`.
- `prerender.mjs` -- reads the client build's `dist/index.html`, replaces the empty `<div id="root"></div>` with the rendered markup, writes it back.

Build pipeline (`bun run build`):
1. `vite build` -> `dist/` (client assets + empty-root `index.html`).
2. `vite build --ssr src/entry-server.tsx --outDir dist-server` -> `dist-server/entry-server.js`.
3. `node prerender.mjs` -> rewrites `dist/index.html` with the rendered `#root`.

`dist-server/` is a throwaway build artifact (gitignored).

## Why not vite-react-ssg / react-snap

`vite-react-ssg` manages the `<head>` and requires pulling in `react-router-dom` for what is a single static route; a custom prerender keeps the head 100% under our control and adds no dependencies. `react-snap` is a puppeteer post-build snapshot but is unmaintained and flaky on React 18 hydration.

## Verifying a change to the render path

This repo auto-deploys to prod on merge to main, so verify before merging:
1. `bun run build`, then confirm `dist/index.html`'s `#root` contains the rendered hero/projects/skills text (not empty) and the head still has the title + Person schema.
2. `bun run preview` and load in a browser (or headless via CDP): hydration must produce **no console errors/warnings**, the theme toggle must open and switch the theme, and `#root` DOM nodes must carry a `__reactFiber$` key (proof React hydrated rather than silently client-rendered).
3. After deploy, re-run PageSpeed on the live URL and confirm LCP is well under 2.5s (LCP can only be measured on a public URL).

## Hydration notes specific to this codebase
- **next-themes** sets `data-theme` on `<html>`, which is outside the `#root` hydration boundary, so it does not cause mismatches. The inline pre-paint theme script in `index.html` stays (it runs before `#root` and prevents the flash). next-themes also renders its own script inside the provider; the two are idempotent.
- **framer-motion** is SSR-safe. The only `initial={{opacity:0}}` is the mobile-nav sheet (an overlay), not the LCP element, so the hero is not animated in from transparent.
- No component reads a browser API (`window`/`document`/`localStorage`/`matchMedia`) during render; the theme-dependent hero background reads through `useSunHidden`, which defaults to a stable value and only touches the theme in `useEffect`.
