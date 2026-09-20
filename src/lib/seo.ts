import type { Metadata } from "next";
import { siteConfig } from "./site";

type PageMetaInput = {
  title?: string;
  description?: string;
  path?: string;
};

/** Build per-page metadata with canonical + OG/Twitter, inheriting site defaults. */
export function pageMetadata({
  title,
  description,
  path = "/",
}: PageMetaInput = {}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const fullTitle = title
    ? `${title} — ${siteConfig.shortName}`
    : `${siteConfig.name} — ${siteConfig.role}`;
  const desc = description ?? siteConfig.description;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
  };
}
