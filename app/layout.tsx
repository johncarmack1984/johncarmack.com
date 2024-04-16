import "./globals.css";

import {
  Inter as FontSans,
  Ibarra_Real_Nova as FontSerif,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Topbar from "../components/topbar";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontSerif = FontSerif({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: "John Carmack",
  description: "Senior Software Engineer with 26 Years of Experience",
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
        <Analytics />
      </body>
    </html>
  );
}
