import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { managed, managedPages, indexableEnvironment } from "@/lib/managed";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!managed.site.index || !indexableEnvironment) return [];
  return Object.entries(managedPages).filter(([path, page]) => page.index && (!page.canonical || page.canonical === path)).map(([path]) => ({ url: new URL(path, siteConfig.url).toString() }));
}
