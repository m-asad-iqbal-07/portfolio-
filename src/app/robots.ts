import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { indexableEnvironment } from "@/lib/managed";
export default function robots(): MetadataRoute.Robots {
  return { rules: indexableEnvironment ? [{ userAgent: "*", allow: "/", disallow: ["/api/", "/admin/", "/admin"] }] : [{ userAgent: "*", disallow: "/" }], sitemap: `${siteConfig.url}/sitemap.xml` };
}
