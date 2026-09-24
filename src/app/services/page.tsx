import { PageJsonLd } from "@/components/seo/json-ld";
import { ProcessSteps } from "@/components/sections/process-steps";
﻿import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { processSteps, services } from "@/content/data";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/page-header";
import { ProjectVisualStack } from "@/components/media/project-visual-stack";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Full-stack product engineering across React Native, React, Node.js, operational systems, production releases, and structured WordPress delivery.",
  path: "/services",
});

const serviceTitles = ["Connected products", "Mobile app delivery", "Operational systems", "Websites & CMS"];

const serviceVisuals = [
  {
    images: ["/images/allure-dispatch.png", "/projects/allure-dispatch/screen-2.png", "/projects/allure-dispatch/screen-3.png"],
    label: "Allure Dispatch · product screen and supporting concepts",
    project: "Allure Dispatch",
    href: "/work/allure-dispatch",
    outcome: "A live web platform with shared services and a mobile companion in development.",
  },
  {
    images: ["/store/quickworx/screen-01.jpg", "/store/quickworx/screen-02.jpg", "/store/quickworx/screen-03.jpg"],
    label: "QuickWorX · official store screenshots",
    project: "QuickWorX",
    href: "/work/quickworx",
    outcome: "A mobile product shipped to both major app stores.",
  },
  {
    images: ["/store/brothersfix/screen-01.jpg", "/store/brothersfix/screen-02.jpg", "/store/brothersfix/screen-03.jpg"],
    label: "BrothersFix · official product screenshots",
    project: "BrothersFix",
    href: "/work/brothersfix",
    outcome: "Warehouse, client, and field workflows working together.",
  },
  {
    images: ["/projects/manhattan-lead/screen-1.png", "/projects/manhattan-lead/screen-2.png", "/projects/manhattan-lead/screen-3.png"],
    label: "Manhattan Lead · generated supporting concepts",
    project: "More web work",
    href: "/work",
    outcome: "Interfaces and content systems people can actually maintain.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageJsonLd path="/services" />
      <PageHeader
        eyebrow="Services"
        variant="services"
        title={<>Build it.<br /><em>Run it.</em></>}
        intro="I work across the parts that make a product useful: the interface, the systems behind it, and the path to a reliable release."
      />
      <section className="services-intro" aria-label="How I can help">
        <h2>The whole product.<br />Or the part you need.</h2>
        <p>Some projects need an app. Others need the API, data model, internal tools, and release process around it. I can work across that whole path or take ownership of a focused part.</p>
        <Link href="/contact">Tell me about your project <ArrowUpRight size={19} /></Link>
      </section>
      <nav className="service-navigation" aria-label="Explore services">{services.map((service, index) => <a key={service.id} href={`#${service.id}`}>{serviceTitles[index]}<ArrowUpRight size={16} /></a>)}</nav>
      <section className="service-ledger service-showcase" id="services">
        {services.map((service, index) => {
          const visual = serviceVisuals[index]!;
          return (
            <Reveal as="article" className="service-ledger-row service-visual-row" id={service.id} key={service.id}>
              <div className="service-visual">
                <ProjectVisualStack images={visual.images} title={service.title} sizes="(max-width: 800px) 92vw, 43vw" />
                <span>{visual.label}</span>
              </div>
              <div className="service-copy">
                <h2>{serviceTitles[index]}</h2>
                <p className="service-specialism">{service.tagline}</p>
                <p className="service-description">{service.description}</p>
                <p className="service-outcome"><Check size={18} aria-hidden="true" />{visual.outcome}</p>
                <div className="service-includes">
                  <h3>What this covers</h3>
                  <ul>
                    {service.includes.map((item) => <li key={item}><Check size={15} aria-hidden="true" />{item}</li>)}
                  </ul>
                </div>
                <Link className="service-project-link" href={visual.href}>{visual.href === "/work" ? "Explore web projects" : `View ${visual.project}`} <ArrowUpRight size={18} /></Link>
              </div>
            </Reveal>
          );
        })}
      </section>

      <section className="route-process">
        <div className="route-section-head">
          <h2>How I work.</h2>
          <p>Clear scope, working increments, and ownership after launch.</p>
        </div>
        <ProcessSteps className="route-process-grid" steps={processSteps} />
      </section>

    </>
  );
}
