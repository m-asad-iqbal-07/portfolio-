import { services } from "@/content/data";
import { projects } from "@/content/projects";
﻿import { siteConfig } from "@/lib/site";
import { managedPages } from "@/lib/managed";
import type { Project } from "@/types/content";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export function PersonJsonLd() {
  return <JsonLd data={{ "@context": "https://schema.org", "@graph": [
    { "@type": "Person", "@id": `${siteConfig.url}/#person`, name: siteConfig.name, alternateName: siteConfig.shortName, jobTitle: siteConfig.role, email: `mailto:${siteConfig.email}`, telephone: siteConfig.phone, url: siteConfig.url, image: `${siteConfig.url}/images/hero/asad-professional-portrait.png`, sameAs: [siteConfig.socials.linkedin, siteConfig.socials.github], knowsAbout: ["React Native", "Expo", "React", "TypeScript", "Node.js", "Express", "REST APIs", "PostgreSQL", "Redis", "WordPress", "Mobile app delivery"] },
    { "@type": "WebSite", "@id": `${siteConfig.url}/#website`, name: siteConfig.name, alternateName: siteConfig.shortName, url: `${siteConfig.url}/`, inLanguage: "en", publisher: { "@id": `${siteConfig.url}/#person` } },
  ] }} />;
}
export function PageJsonLd({ path, project }: { path: string; project?: Project }) {
  const page = managedPages[path]; if (!page) return null;
  const url = new URL(page.canonical || path, siteConfig.url).toString();
  const type = path === "/about" ? "ProfilePage" : path === "/contact" ? "ContactPage" : path === "/work" ? "CollectionPage" : "WebPage";
  const crumbs = [{ name: "Home", item: `${siteConfig.url}/` }];
  if (project) crumbs.push({ name: "Work", item: `${siteConfig.url}/work` });
  if (path !== "/") crumbs.push({ name: project?.title || ({ "/work": "Work", "/services": "Services", "/about": "About", "/contact": "Contact", "/uses": "Toolkit" } as Record<string,string>)[path] || page.title, item: url });
  const graph: Record<string,unknown>[] = [{ "@type": type, "@id": `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: "en", isPartOf: { "@id": `${siteConfig.url}/#website` }, about: { "@id": `${siteConfig.url}/#person` }, ...(path === "/about" ? { mainEntity: { "@id": `${siteConfig.url}/#person` } } : {}), ...(path !== "/" ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}) }];
  if (path !== "/") graph.push({ "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: crumbs.map((crumb,index) => ({ "@type": "ListItem", position: index + 1, ...crumb })) });
  if (project) graph.push({ "@type": "Article", "@id": `${url}#article`, headline: project.title, description: project.summary, url, mainEntityOfPage: { "@id": `${url}#webpage` }, author: { "@id": `${siteConfig.url}/#person` }, publisher: { "@id": `${siteConfig.url}/#person` }, image: new URL(project.image, siteConfig.url).toString(), keywords: project.stack.join(", "), inLanguage: "en", about: { "@type": "SoftwareApplication", name: project.title, url: project.links?.website || project.links?.appstore || project.links?.playstore, applicationCategory: "BusinessApplication" } });
  if (path === "/services") services.forEach(service => graph.push({ "@type": "Service", "@id": `${url}#${service.id}`, name: service.title, description: service.description, serviceType: service.tagline, url: `${url}#${service.id}`, provider: { "@id": `${siteConfig.url}/#person` } }));
  if (path === "/work") graph.push({ "@type": "ItemList", name: "Project case studies", itemListElement: projects.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: `${siteConfig.url}/work/${item.slug}` })) });
  return <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />;
}
