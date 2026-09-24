import type { Metadata, Viewport } from "next";
import "@flaticon/flaticon-uicons/css/brands/all.css";
import "./globals.css";
import "@/styles/identity.css";
import "@/styles/pages.css";
import "@/styles/case-study.css";
import { fontVariables } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Nav } from "@/components/layout/nav";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/motion/page-transition";
import { Cursor } from "@/components/layout/cursor";
import { managed, indexableEnvironment } from "@/lib/managed";
import { PersonJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.name, url: siteConfig.url }], creator: siteConfig.name,
  verification: { google: managed.site.googleVerification || undefined, other: managed.site.bingVerification ? { "msvalidate.01": managed.site.bingVerification } : undefined },
  robots: { index: managed.site.index && indexableEnvironment, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <body>
        <PersonJsonLd />
          <LenisProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-base focus:text-[var(--accent-foreground)]"
            >
              Skip to content
            </a>
            <Cursor />
            <Nav />
            <PageTransition />
            <main id="main" tabIndex={-1}>{children}<ContactSection /></main>
            <Footer />
          </LenisProvider>
      </body>
    </html>
  );
}
