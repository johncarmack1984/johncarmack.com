# Prerender plan: fix LCP 6.5s + the 6-word body shell

## Problem (from the seo-kit audit, 2026-06-26)

The site is a client-rendered Vite + React 18 SPA. The served HTML is an empty `<div id="root"></div>` (about 6 words of text), so:
- **GEO/SEO:** non-JS crawlers and most LLM answer engines see no body content (only the head, which now has title + Person schema).
- **LCP 6.5s (poor):** the largest contentful paint waits for the JS bundle to download, parse, and render. Confirmed Google ranking signal.

Both are fixed by **prerendering the route to static HTML at build time, then hydrating**: the body content lands in the initial HTML (crawlers + LLMs read it, LCP paints immediately), and React attaches on load.

## Recommended approach: `vite-react-ssg`

It is the maintained tool that wires Vite's SSR build + prerender (rolling our own would mean replicating Vite SSR plumbing; `react-snap` is the no-Vite-SSR fallback but is unmaintained and flaky on React 18 hydration). Single route, no data, so the migration is small.

### Steps
1. `bun add vite-react-ssg react-router-dom`
2. `src/main.tsx` - replace the `createRoot().render()` with the SSG entry, keeping the ThemeProvider as the layout:
   ```tsx
   import { ViteReactSSG } from "vite-react-ssg";
   import { ThemeProvider } from "@/components/theme-provider";
   import App from "./App";
   import "./globals.css";

   const routes = [{ path: "/", element: <App /> }];

   export const createRoot = ViteReactSSG(
     { routes },
     ({ router, isClient }) => {
       // wrap-all setup if needed
     },
     {
       // render the tree inside ThemeProvider on both server + client
     },
   );
   ```
   (If the wrapper option is awkward, make a `Layout` route element that renders `<ThemeProvider><Outlet/></ThemeProvider>` and nest `App` under it. ThemeProvider must wrap on the server too, or hydration will mismatch.)
3. `package.json` build script: `"build": "vite-react-ssg build"` (dev/preview/typecheck unchanged).
4. `index.html` - keep the inline pre-paint theme script. Add `suppressHydrationWarning` on the elements next-themes mutates if a warning appears (it sets `data-theme` on `<html>`, which the inline script also sets; this is the most likely hydration warning source).

### Gotchas specific to this codebase (verify each)
- **next-themes:** renders children on the server fine, but the `data-theme` attribute is client/inline-script set, so expect a possible hydration warning on `<html>`. The existing inline script in `index.html` already prevents the visual flash; keep it. Use `suppressHydrationWarning` if needed.
- **framer-motion:** SSR-safe, but entrance animations can flash on hydrate. Audit any `initial=` animations in the hero; set `initial={false}` where the first paint should match the prerendered state (this matters for LCP - the LCP element must not animate in from opacity 0).
- **Direct browser-API access:** grep `src/` for `window`, `document`, `localStorage`, `matchMedia` used during render (not in effects). Any such use must be guarded with `typeof window !== "undefined"` or moved into `useEffect`, or the build's renderToString step throws.
- **Single route only:** sitemap has 1 URL, so SSG prerenders exactly `/`. No route list to maintain yet.

### Test before merging (this repo auto-deploys to prod on merge)
1. `bun run build` then check `dist/index.html` - the `#root` div should now contain the rendered hero/projects/skills text, not be empty.
2. `seo-kit audit johncarmack.com --only crawl` - `raw_html_words` should jump from ~6 to several hundred, `h1_raw` should be populated, `render.thin_shell` finding should clear.
3. `bun run preview` and load in a browser: confirm it hydrates with **no console errors/warnings**, the theme toggle works, animations are not broken, and interactivity is intact.
4. Re-run PageSpeed (the `psi` provider) and confirm LCP drops well under 2.5s.
5. Only then: PR -> verify CI -> merge (which deploys). Do not merge on a green build alone; the browser hydration check in step 3 is the gate.

## Fallback if vite-react-ssg fights the ThemeProvider/motion setup
`react-snap` (postbuild puppeteer snapshot): switch `createRoot` -> `hydrateRoot` in `main.tsx`, add `"postbuild": "react-snap"` and a `reactSnap` config. Less code, but unmaintained and React 18 `hydrateRoot` can warn; treat as plan B.
