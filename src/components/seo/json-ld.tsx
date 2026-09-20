import { siteConfig } from "@/lib/site";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        jobTitle: siteConfig.role,
        email: "mailto:" + siteConfig.email,
        url: siteConfig.url,
        sameAs: [siteConfig.socials.linkedin, siteConfig.socials.github],
        knowsAbout: [
          "React Native",
          "Expo",
          "EAS Build",
          "React",
          "TypeScript",
          "Node.js",
          "Express",
          "REST APIs",
          "PostgreSQL",
          "Redis",
          "Firebase",
          "WebSockets",
          "Webhooks",
          "WordPress",
          "App Store delivery",
          "Google Play delivery",
        ],
      },
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
