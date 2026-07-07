// The prerender runs under NODE on purpose: under bun, react-dom/server
// resolves through bun's own export conditions and emits different markup
// (verified 2026-07-06 -- the theme inline script renders into #root under bun
// but not node). One runtime owns the prerendered bytes; it is node.
// Build-time prerender: render the app to static HTML and inject it into the
// client build's index.html, so crawlers and LLM answer engines see real body
// content (not an empty shell) and the browser paints the LCP immediately.
//
// Runs after both Vite builds:
//   vite build                       -> dist/ (client assets + empty-root index.html)
//   vite build --ssr entry-server    -> dist-server/entry-server.js (exports render())
//   node prerender.mjs               -> rewrites dist/index.html with rendered #root
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const indexPath = resolve(root, "dist/index.html");

const { render } = await import(resolve(root, "dist-server/entry-server.js"));
const appHtml = render();

const template = readFileSync(indexPath, "utf-8");
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error(
    `prerender: expected ${marker} in dist/index.html (did the build output change?)`,
  );
}

writeFileSync(
  indexPath,
  template.replace(marker, `<div id="root">${appHtml}</div>`),
);
console.log(
  `prerender: injected ${appHtml.length} chars of HTML into dist/index.html`,
);
