import { renderToString } from "react-dom/server";

import { AppTree } from "@/app-tree";

export { structuredData } from "@/lib/structured-data";

// Built via `vite build --ssr` into dist-server/, then imported by prerender.mjs
// to produce the static HTML injected into dist/index.html at build time.
export function render() {
  return renderToString(<AppTree />);
}
