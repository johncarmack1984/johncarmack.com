import "./globals.css";

import type { Viewport } from "next";
import {
  Inter as FontSans,
  Ibarra_Real_Nova as FontSerif,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Topbar from "../components/topbar";

export const viewport: Viewport = {
  themeColor: "light",
};

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontSerif = FontSerif({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: {
    template: "%s | John Carmack",
    default: "John Carmack",
  },
  description: "Senior Software Engineer with 26 Years of Experience",
  generator: "Next.js",
  applicationName: "johncarmack.com",
  keywords: ["John Carmack", "Software Engineer", "Senior Software Engineer"],
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
    images: [
      {
        url: "https://johncarmack.com/assets/img/day.png",
        width: 902,
        height: 902,
        alt: "John Carmack - Senior Software Engineer",
      },
    ],
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
          fontSerif.variable,
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
