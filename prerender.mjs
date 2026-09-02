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

const { render, structuredData } = await import(
  resolve(root, "dist-server/entry-server.js")
);
const appHtml = render();

// One build date for everything that carries one: the ProfilePage dateModified
// and the sitemap lastmod. Every deploy changes the rendered page, so this is
// honest, and it stops the hand-maintained sitemap date from going stale.
const buildDate = new Date().toISOString().slice(0, 10);

// JSON-LD lives in a <script>, so escape "<" to keep "</script>" and "<!--"
// out of the payload.
const jsonLd = JSON.stringify(structuredData(buildDate)).replace(
  /</g,
  "\\u003c",
);

const template = readFileSync(indexPath, "utf-8");
const rootMarker = '<div id="root"></div>';
const dataMarker = "<!--structured-data-->";
for (const marker of [rootMarker, dataMarker]) {
  if (!template.includes(marker)) {
    throw new Error(
      `prerender: expected ${marker} in dist/index.html (did the build output change?)`,
    );
  }
}

writeFileSync(
  indexPath,
  template
    .replace(rootMarker, `<div id="root">${appHtml}</div>`)
    .replace(
      dataMarker,
      `<script type="application/ld+json">${jsonLd}</script>`,
    ),
);
console.log(
  `prerender: injected ${appHtml.length} chars of HTML and ${jsonLd.length} chars of JSON-LD into dist/index.html`,
);

// The site is one URL; the sitemap only needs <loc> + a truthful <lastmod>.
// (changefreq/priority are ignored by Google, so they are gone.)
writeFileSync(
  resolve(root, "dist/sitemap.xml"),
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    "  <url>",
    "    <loc>https://johncarmack.com/</loc>",
    `    <lastmod>${buildDate}</lastmod>`,
    "  </url>",
    "</urlset>",
    "",
  ].join("\n"),
);
console.log(`prerender: wrote dist/sitemap.xml (lastmod ${buildDate})`);
