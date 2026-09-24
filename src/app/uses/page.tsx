import { PageJsonLd } from "@/components/seo/json-ld";
import { getPageContent } from "@/lib/managed";
﻿import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, ChevronRight, Database, Globe, PanelsTopLeft, Rocket, Server, Smartphone, type LucideIcon } from "lucide-react";
import { stackGroups } from "@/content/data";
import { pageMetadata } from "@/lib/seo";
import "./uses.css";

export const metadata: Metadata = pageMetadata({
  title: "Toolkit",
  description: "The mobile, web, backend, data, delivery, and CMS tools Muhammad Asad Iqbal uses, and how he chooses them.",
  path: "/uses",
});

type ToolkitDetail = { id: string; icon: LucideIcon; summary: string; paragraphs: string[]; project?: { title: string; href: string } };
const details: Record<string, ToolkitDetail> = {
  Mobile: {
    id: "mobile", icon: Smartphone, summary: "From the first screen to a store release.",
    paragraphs: ["React Native and Expo for cross-platform apps, with React Navigation for moving between screens. EAS Build handles store builds and releases.", "Redux or Context API, depending on how much application state needs to be shared."],
    project: { title: "See the BrothersFix app", href: "/work/brothersfix" },
  },
  Web: {
    id: "web", icon: Globe, summary: "Interfaces built around the way people work.",
    paragraphs: ["React with TypeScript is my default. I work with plain JavaScript when that is what the existing project uses.", "HTML and CSS underpin the interface, with Material UI where the project calls for it."],
  },
  Backend: {
    id: "backend", icon: Server, summary: "The services that keep a product connected.",
    paragraphs: ["Node.js and Express for most REST APIs. FastAPI when a project needs Python, often alongside a model or data pipeline.", "WebSockets for live updates; webhooks for events coming from external systems."],
    project: { title: "See Allure Dispatch", href: "/work/allure-dispatch" },
  },
  Data: {
    id: "data", icon: Database, summary: "Storage chosen for the shape of the data.",
    paragraphs: ["PostgreSQL is my default for structured, relational data in ERP and dispatch systems. Redis supports caching and fast access.", "Firebase and MongoDB also feature in mobile-first projects such as ResQNet and the Coffee Shop app. I choose the setup around the app’s needs for live data, authentication, and notifications.", "Supabase offers a managed PostgreSQL backend when that trade-off fits the project."],
  },
  "Product delivery": {
    id: "delivery", icon: Rocket, summary: "The work between writing code and shipping it.",
    paragraphs: ["Git for version control, Postman for API testing, and App Store and Google Play workflows for releases.", "Responsive interfaces and user flows are part of delivery, alongside the review, testing, and release work around the code."],
  },
  "Web and CMS": {
    id: "cms", icon: PanelsTopLeft, summary: "Content-led sites that are practical to maintain.",
    paragraphs: ["WordPress when a content-driven site does not need a fully custom application.", "Bricks or Elementor depending on the project, with custom post types and query loops to structure and present the content."],
  },
};

export default function UsesPage() {
  const copy = getPageContent("/uses")!;
  return <div className="toolkit-page">
    <PageJsonLd path="/uses" />
    <header className="toolkit-hero">
      <div className="toolkit-hero-copy">
        <nav className="page-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span aria-current="page">Toolkit</span></nav>
        <h1>{copy.headingLine1}<br /><em>{copy.headingLine2}</em></h1>
        <p>{copy.intro}</p>
        <Link href="/work" className="toolkit-work-link">See the work behind the tools <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
      <nav className="toolkit-directory" aria-label="Explore toolkit categories">
        {stackGroups.map(group => { const detail = details[group.group]!; const Icon = detail.icon; return <a key={detail.id} href={`#toolkit-${detail.id}`}><Icon size={25} strokeWidth={1.6} aria-hidden="true" /><span>{group.group}</span><ArrowDownRight className="toolkit-directory-arrow" size={19} aria-hidden="true" /></a>; })}
      </nav>
    </header>
    <div className="toolkit-sections" id="toolkit">
      {stackGroups.map(group => { const detail = details[group.group]!; const Icon = detail.icon; return <section className="toolkit-section" id={`toolkit-${detail.id}`} aria-labelledby={`toolkit-heading-${detail.id}`} key={detail.id}>
        <div className="toolkit-category"><div className="toolkit-category-heading"><Icon size={30} strokeWidth={1.6} aria-hidden="true" /><h2 id={`toolkit-heading-${detail.id}`}>{group.group}</h2></div><p>{detail.summary}</p>{detail.project && <Link href={detail.project.href}>{detail.project.title}<ArrowUpRight size={17} aria-hidden="true" /></Link>}</div>
        <div className="toolkit-explanation"><ul aria-label={`${group.group} tools`}>{group.items.map(item => <li key={item}>{item}</li>)}</ul><div className="toolkit-prose">{detail.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div>
      </section>; })}
    </div>
  </div>;
}
