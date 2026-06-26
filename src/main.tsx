import { hydrateRoot } from "react-dom/client";

import { AppTree } from "@/app-tree";
import "./globals.css";

// The HTML is prerendered to static markup at build time (see prerender.mjs),
// so the client hydrates the existing #root rather than rendering from empty.
hydrateRoot(document.getElementById("root")!, <AppTree />);
