import "./globals.css";

import type { Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { cn } from "@/lib/utils";
import SiteNav from "@/components/nav/nav";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const dynamic = "force-static";

const url = process.env.VERCEL
  ? `https://johncarmack.com`
  : "http://localhost:3000";

const siteConfig = {
  name: "John Carmack - Senior Software Engineer",
  description: "26 years of expertise building exceptional user experiences.",
  url,
};

export const metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "John Carmack",
    "Software Engineer",
    "Senior Software Engineer",
    "rust",
    "javscript",
    "react",
  ],
  authors: [{ name: "John Carmack" }],
  creator: "John Carmack",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: "/opengraph-image.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": "275",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "light" },
    { media: "(prefers-color-scheme: dark)", color: "dark" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `bg-background min-h-screen font-sans antialiased`,
          fontSans.variable,
        )}
      >
        <ThemeProvider defaultTheme="system" enableSystem>
          <div className="bg-background relative mx-auto flex min-h-screen flex-col items-start justify-start">
            <SiteNav />
            {children}
          </div>
        </ThemeProvider>

        <TailwindIndicator />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
