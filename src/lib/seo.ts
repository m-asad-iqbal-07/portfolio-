import type { Metadata } from "next";
import { siteConfig } from "./site";
import { managed, managedPages, indexableEnvironment } from "./managed";
type PageMetaInput = { title?: string; description?: string; path?: string };
export function pageMetadata({ title, description, path = "/" }: PageMetaInput = {}): Metadata {
  const page = managedPages[path];
  const canonical = new URL(page?.canonical || path, siteConfig.url).toString();
  const fullTitle = page?.title || (title ? `${title} | ${siteConfig.shortName}` : `${siteConfig.shortName} | Full-Stack Developer`);
  const desc = page?.description || description || siteConfig.description;
  const index = Boolean(page && page.index && managed.site.index && indexableEnvironment);
  const image = new URL(page?.image || "/opengraph-image", siteConfig.url).toString();
  return {
    title: { absolute: fullTitle }, description: desc,
    alternates: { canonical },
    openGraph: { title: fullTitle, description: desc, url: canonical, siteName: siteConfig.name, type: "website", locale: "en_US", images: [{ url: image, alt: `${siteConfig.shortName} — mobile, web and backend development` }] },
    twitter: { card: "summary_large_image", title: fullTitle, description: desc, images: [image] },
    robots: { index, follow: true, googleBot: { index, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  };
}
