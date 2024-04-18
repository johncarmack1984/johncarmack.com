import "./globals.css";

import type { Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Topbar from "@/components/topbar";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const dynamic = "force-static";
export const revalidate = false;

export const viewport: Viewport = {
  width: 1,
};

const url = process.env.VERCEL
  ? `https://johncarmack.com`
  : "http://localhost:3000";

const metadataBase = new URL(url);

export const metadata = {
  metadataBase,
  title: {
    template: "%s | John Carmack",
    default: "John Carmack",
  },
  description: "Senior Software Engineer with 26 Years of Experience",
  generator: "Next.js",
  applicationName: "johncarmack.com",
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
  publisher: "John Carmack",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "John Carmack - Senior Software Engineer",
    description: "Senior Software Engineer with 26 Years of Experience",
    url: "https://johncarmack.com",
    siteName: "John Carmack",
    images: "/opengraph-image.png",
    locale: "en_US",
    type: "website",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `mx-auto flex min-h-screen flex-col items-start justify-start antialiased`,
          fontSans.variable,
        )}
      >
        <ThemeProvider defaultTheme="system" enableSystem>
          <Topbar />
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
