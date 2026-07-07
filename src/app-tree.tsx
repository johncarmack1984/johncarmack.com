import { StrictMode } from "react";

import { ThemeProvider } from "@/components/theme-provider";

import App from "@/App";

// The single React tree, shared by the client entry (hydrate) and the server
// entry (prerender). Both must render the identical tree or hydration mismatches.
export function AppTree() {
  return (
    <StrictMode>
      <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
        <App />
      </ThemeProvider>
    </StrictMode>
  );
}
