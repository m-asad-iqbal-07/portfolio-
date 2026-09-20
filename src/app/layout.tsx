import type { Metadata, Viewport } from "next";
import "@flaticon/flaticon-uicons/css/regular/rounded.css";
import "@flaticon/flaticon-uicons/css/brands/all.css";
import "./globals.css";
import { fontVariables } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { Cursor } from "@/components/layout/cursor";
import { PersonJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name + " — " + siteConfig.role,
    template: "%s — " + siteConfig.shortName,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [
    "full-stack developer",
    "React Native developer",
    "Expo and EAS developer",
    "React and TypeScript developer",
    "Node.js and Express developer",
    "PostgreSQL and Redis",
    "mobile app delivery",
    "App Store and Google Play release",
    "ERP development",
    "operational software",
    "REST APIs and webhooks",
    "WordPress developer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name + " — " + siteConfig.role,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name + " — " + siteConfig.role,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#f1efe8" },
    { media: "(prefers-color-scheme: light)", color: "#f1efe8" },
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
            <main id="main">{children}</main>
            <Footer />
          </LenisProvider>
      </body>
    </html>
  );
}
