import { fileURLToPath, URL } from "node:url";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // Uncommon pinned dev port; strict so a taken port fails loudly instead of
  // silently shifting.
  server: { port: 47301, strictPort: true },
  plugins: [
    react(),
    // React Compiler runs as a Babel pass bridged into Rolldown (Vite 8 / plugin-react 6
    // are Oxc-based and no longer take a `babel` option). No-arg preset targets React 19.
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "es2022",
  },
});
