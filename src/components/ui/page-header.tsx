import { getPageContent } from "@/lib/managed";
﻿import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowDownRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ProjectVisualStack } from "@/components/media/project-visual-stack";
import { TechMark } from "@/components/ui/tech-mark";

type PageVariant = "work" | "services" | "about" | "stack" | "contact";

const heroDetails: Record<PageVariant, { label: string; note: string; href: string; action: string }> = {
  work: { label: "Selected projects / real scope", note: "From shipped apps to focused contributions", href: "#projects", action: "Explore projects" },
  services: { label: "Build / ship / support", note: "Connected product work, from interface to release", href: "#services", action: "Explore services" },
  about: { label: "The person behind the work", note: "Mobile, web, backend, and the spaces between", href: "#story", action: "Read my story" },
  stack: { label: "Tools with a purpose", note: "A practical stack shaped by production work", href: "#toolkit", action: "See the toolkit" },
  contact: { label: "Start a conversation", note: "A clear brief is enough to get started", href: "#contact-panel", action: "Send a message" },
};

function HeaderVisual({ variant }: { variant: PageVariant }) {
  if (variant === "work" || variant === "services") {
    const work = variant === "work";
    return (
      <div className="editorial-hero-art editorial-hero-project">
        <ProjectVisualStack
          priority
          images={work
            ? ["/store/brothersfix/screen-01.jpg", "/store/brothersfix/screen-02.jpg", "/store/brothersfix/screen-03.jpg"]
            : ["/images/allure-dispatch.png", "/projects/allure-dispatch/screen-2.png", "/projects/allure-dispatch/screen-3.png"]}
          title={work ? "BrothersFix" : "Allure Dispatch"}
          sizes="(max-width: 760px) 90vw, 42vw"
        />
        <span className="editorial-hero-art-caption">{work ? "BrothersFix / published product screens" : "Allure Dispatch / product screen and concepts"}</span>
      </div>
    );
  }
  if (variant === "stack") {
    return (
      <div className="editorial-hero-art editorial-hero-stack" aria-label="React, React Native, TypeScript, Node.js, PostgreSQL and WordPress">
        {["React", "React Native", "TypeScript", "Node.js", "PostgreSQL", "WordPress"].map((name) => <TechMark name={name} key={name} />)}
        <span className="editorial-stack-line" aria-hidden="true" />
      </div>
    );
  }
  if (variant === "contact") {
    return (
      <div className="editorial-hero-art editorial-hero-contact">
        <Image src="/images/hero/contact-conversation.png" alt="An open envelope and message symbolizing a new conversation" fill priority sizes="(max-width: 760px) 90vw, 42vw" />
        <span className="editorial-hero-art-caption">A conversation starts here</span>
      </div>
    );
  }
  return (
    <div className={"editorial-hero-art editorial-hero-person editorial-hero-person-" + variant}>
      <Image src="/images/hero/asad-professional-portrait.png" alt="Muhammad Asad Iqbal" fill priority sizes="(max-width: 760px) 85vw, 38vw" />
      <span className="editorial-hero-art-caption">Muhammad Asad Iqbal / full-stack developer</span>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  variant,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  variant: PageVariant;
}) {
  const detail = heroDetails[variant];
  const copy = getPageContent(variant === "stack" ? "/uses" : `/${variant}`);
  return (
    <header className={"editorial-page-header editorial-page-header-" + variant}>
      <div className="editorial-hero-copy">
        <nav className="page-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span aria-current="page">{eyebrow}</span></nav>
        <Reveal as="h1" delay={0.05} className="editorial-page-title">{copy ? <>{copy.headingLine1}<br /><em>{copy.headingLine2}</em></> : title}</Reveal>
        {intro && <Reveal as="p" delay={0.1} className="editorial-page-intro">{copy?.intro || intro}</Reveal>}
        <Reveal delay={0.15}><a className="editorial-hero-action" href={detail.href}>{detail.action} <ArrowDownRight size={18} /></a></Reveal>
      </div>
      <div className="editorial-hero-visual-wrap">
        <HeaderVisual variant={variant} />
        <span className="editorial-hero-visual-note">{detail.note} <ArrowUpRight size={15} /></span>
      </div>
      <span className="editorial-page-rule" aria-hidden="true" />
    </header>
  );
}




