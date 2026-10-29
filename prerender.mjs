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

const { render, structuredData, llmsTxt } = await import(
  resolve(root, "dist-server/entry-server.js")
);
const appHtml = render();

// One build date for everything that carries one: the ProfilePage dateModified
// and the sitemap lastmod. Every deploy changes the rendered page, so this is
// honest, and it stops the hand-maintained sitemap date from going stale.
const buildDate = new Date().toISOString().replace(/\.\d{3}Z$/, "+00:00");

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

// /llms.txt: the page's words as Markdown for language-model crawlers (see
// src/lib/llms-txt.ts), headed by the page's own title and description.
const entities = {
  "&amp;": "&",
  "&quot;": '"',
  "&#39;": "'",
  "&lt;": "<",
  "&gt;": ">",
};
const headText = (pattern, name) => {
  const match = template.match(pattern);
  if (!match) {
    throw new Error(`prerender: expected ${name} in dist/index.html`);
  }
  return match[1].replace(/&(?:amp|quot|#39|lt|gt);/g, (e) => entities[e]);
};
const llms = llmsTxt({
  title: headText(/<title>([^<]*)<\/title>/, "a <title>"),
  description: headText(
    /<meta\s+name="description"\s+content="([^"]*)"/,
    "a meta description",
  ),
});
writeFileSync(resolve(root, "dist/llms.txt"), llms);
console.log(`prerender: wrote dist/llms.txt (${llms.length} chars)`);
