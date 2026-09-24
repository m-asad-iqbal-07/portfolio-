"use client";

import { ContentIcon } from "@/components/ui/content-icon";
import { getPageContent } from "@/lib/managed";
import { projects } from "@/content/projects";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ProjectVisualStack } from "@/components/media/project-visual-stack";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { ProcessSteps } from "@/components/sections/process-steps";
import { TechMark } from "@/components/ui/tech-mark";

const expertise = [
  {
    icon: "fi-rr-mobile-button",
    technologies: "React Native · Expo",
    title: "Mobile products",
    text: "Cross-platform apps, built and submitted to both stores.",
    images: ["/store/quickworx/screen-01.jpg", "/store/quickworx/screen-02.jpg", "/store/quickworx/screen-03.jpg"],
    href: "/services#production-mobile-delivery",
  },
  {
    icon: "fi-rr-browser",
    technologies: "React · TypeScript · Operational UI",
    title: "Web platforms",
    text: "Fast interfaces for the systems people actually use to get work done.",
    images: ["/images/allure-dispatch.png", "/projects/allure-dispatch/screen-2.png", "/projects/allure-dispatch/screen-3.png"],
    href: "/services#connected-product-engineering",
  },
  {
    icon: "fi-rr-api",
    technologies: "Node · PostgreSQL · Redis",
    title: "Connected systems",
    text: "Mobile, web, backend, data, integrations — built as one system.",
    images: ["/store/brothersfix/screen-01.jpg", "/store/brothersfix/screen-02.jpg", "/store/brothersfix/screen-03.jpg"],
    href: "/work/brothersfix",
  },
  {
    icon: "fi-rr-blueprint",
    technologies: "Architecture · Services · Delivery",
    title: "Product architecture",
    text: "Cleaning up code so it’s easier to maintain, extend, and not be afraid of.",
    images: ["/store/iyurek/screen-01.png", "/store/iyurek/screen-02.png", "/store/iyurek/screen-03.png"],
    href: "/work/iyurek",
  },
];

const stack = [
  ["Mobile", "React Native, Expo, EAS Build, Firebase, native features, store delivery"],
  ["Web", "React, TypeScript, JavaScript, responsive interfaces"],
  ["Backend and data", "Node.js, Express, REST APIs, PostgreSQL, Redis, webhooks"],
  ["Web and CMS", "WordPress, Bricks Builder, Elementor, custom post types, query loops"],
];
const stackIcons = ["fi-rr-mobile-button", "fi-rr-browser", "fi-rr-database", "fi-rr-chart-network"];

const caseStudyCards = [
  {
    title: "BrothersFix Ecosystem",
    category: "Warehouse ERP + mobile",
    result: "Inventory, scanning, client views, and field work — all connected across the ERP, iOS, and Android.",
    images: ["/store/brothersfix/screen-01.jpg", "/store/brothersfix/screen-02.jpg", "/store/brothersfix/screen-03.jpg"],
    href: "/work/brothersfix",
  },
  {
    title: "Allure Dispatch",
    category: "Full-stack operations platform",
    result: "A live dispatch platform — web app, backend, data, and a mobile companion currently in the works.",
    images: ["/images/allure-dispatch.png", "/projects/allure-dispatch/screen-2.png", "/projects/allure-dispatch/screen-3.png"],
    href: "/work/allure-dispatch",
  },
  {
    title: "QuickWorX",
    category: "Published employee app",
    result: "Attendance, leave, payroll, tickets, news — the whole employee experience, live on both app stores.",
    images: ["/store/quickworx/screen-01.jpg", "/store/quickworx/screen-02.jpg", "/store/quickworx/screen-03.jpg"],
    href: "/work/quickworx",
  },
  {
    title: "iYurek",
    category: "Scoped architecture contribution",
    result: "A focused refactor job — cleaning up module and service boundaries inside a live finance app.",
    images: ["/store/iyurek/screen-01.png", "/store/iyurek/screen-02.png", "/store/iyurek/screen-03.png"],
    href: "/work/iyurek",
  },
];

const caseStudies = caseStudyCards.map(card => {
  const project = projects.find(item => card.href === `/work/${item.slug}`);
  return project ? { ...card, title: project.title, result: project.summary } : card;
});

const shippedWork = [
  {
    name: "Closely",
    type: "Scoped email warm-up module",
    proof: "Live software · concept visuals only",
    images: ["/projects/closely/screen-1.png", "/projects/closely/screen-2.png", "/projects/closely/screen-3.png"],
    href: "https://closelyhq.com",
  },
  {
    name: "Manhattan Lead",
    type: "Lead-management web platform",
    proof: "Live software · concept visuals only",
    images: ["/projects/manhattan-lead/screen-1.png", "/projects/manhattan-lead/screen-2.png", "/projects/manhattan-lead/screen-3.png"],
    href: "https://app.manhattanlead.com",
  },
];
export function PortfolioHome() {
  const copy = getPageContent("/")!;
  const root = useRef<HTMLDivElement>(null);
  const [openStack, setOpenStack] = useState<number | null>(0);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from("[data-hero-reveal], [data-hero-side]", {
        y: 14, opacity: .75, duration: .7, stagger: .06, ease: "power3.out",
      });
      gsap.from(".personal-hero-collage", {
        y: 28, scale: .98, opacity: .8, duration: .9, ease: "power3.out",
      });
      gsap.utils.toArray<HTMLElement>(".personal-section-heading, .expertise-card, .personal-work-card, .stack-intro, .stack-accordion, .process-personal-intro, .process-personal-grid article").forEach(element => {
        gsap.from(element, {
          y: 18, opacity: .8, duration: .65, ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 92%", once: true },
        });
      });
    },
    { scope: root },
  );
  return (
    <div className="personal-home" ref={root}>
      <section className="personal-home-hero">
        <h1 className="personal-hero-title">
          <span><i data-hero-reveal>{copy.headingLine1}</i></span>
          <span><i data-hero-reveal>{copy.headingLine2}</i></span>
        </h1>


        <div className="personal-hero-visual" data-hero-visual>
          <div className="personal-hero-collage personal-hero-portrait">
            <Image src="/images/hero/asad-allure-cutout-final.png" alt="Muhammad Asad Iqbal, full-stack developer" fill priority sizes="(max-width: 760px) 90vw, 42vw" />
          </div>
        </div>

        <div className="personal-hero-intro" data-hero-side>
          <p>{copy.intro}</p>
          <Link href="/work">See the work <ArrowUpRight /></Link>
        </div>

        <p className="personal-hero-note" data-hero-side><span />From the first screen<br />to the final release.</p>
        <a href="#work" className="personal-scroll-cue" data-hero-side><ArrowDown /> Explore</a>
      </section>

      <div className="home-tech-strip" aria-label="Technologies I work with">{["React", "React Native", "TypeScript", "Node.js", "PostgreSQL", "WordPress"].map((name) => <span key={name}><TechMark name={name} /></span>)}</div>
      <section className="personal-work unified-home-work" id="work">
        <div className="personal-section-heading personal-section-heading-dark" data-home-reveal>
          <div><h2>Work.</h2></div>
          <p>Apps, platforms, focused contributions, and R&amp;D — all in one collection, with my exact scope clearly labeled.</p>
        </div>
        <div className="personal-work-grid unified-home-work-grid">
          {caseStudies.map((project) => (
            <Link href={project.href} className="personal-work-card" key={project.title} data-home-reveal>
              <div className="work-card-image"><ProjectVisualStack images={project.images} title={project.title} /></div>
              <div className="work-card-meta"><span>{project.category} · Case study</span><ArrowUpRight /></div>
              <h3>{project.title}</h3><p>{project.result}</p>
            </Link>
          ))}
          {shippedWork.map((project) => (
            <a href={project.href} target="_blank" rel="noreferrer" className="personal-work-card" key={project.name} data-home-reveal>
              <div className="work-card-image"><ProjectVisualStack images={project.images} title={project.name} /></div>
              <div className="work-card-meta"><span>{project.proof}</span><ArrowUpRight /></div>
              <h3>{project.name}</h3><p>{project.type}</p>
            </a>
          ))}
        </div>
        <Link className="unified-work-link" href="/work">View all projects <ArrowUpRight /></Link>
      </section>
      <section className="personal-expertise" id="expertise">
        <div className="personal-section-heading" data-home-reveal>
          <div><h2>What I<br />build.</h2></div>
          <p>Four areas I work in most.</p>
        </div>
        <div className="expertise-grid">
          {expertise.map((item) => (
            <Link className="expertise-card" href={item.href} key={item.title} data-home-reveal>
              <ProjectVisualStack images={item.images} title={item.title} sizes="(max-width: 760px) 85vw, 25vw" />
              <span className="expertise-shade" />
              <ContentIcon className={"fi " + item.icon + " expertise-icon"} />
              <div className="expertise-copy"><h3>{item.title}</h3><p className="expertise-technologies">{item.technologies}</p><p>{item.text}</p></div>
              <span className="expertise-link-label">{item.href.startsWith("/services") ? "Explore service" : "View case study"}</span>
              <span className="expertise-arrow"><ArrowUpRight /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="personal-stack">
        <div className="stack-intro" data-home-reveal>
          <h2>The full stack,<br />actually.</h2>
          <p>I work on the interface, the backend, the database, the integrations, and the releases — usually all on the same project.</p>
          <Link href="/about">More about me <ArrowUpRight /></Link>
        </div>
        <div className="stack-accordion" data-home-reveal>
          {stack.map(([title, detail], index) => (
            <button key={title} onClick={() => setOpenStack(openStack === index ? null : index)} aria-expanded={openStack === index} aria-controls={`stack-detail-${index}`}>
              <ContentIcon className={"fi " + stackIcons[index]} /><span>{title}</span><i>{openStack === index ? "−" : "+"}</i>
              <em id={`stack-detail-${index}`} hidden={openStack !== index}>{detail}</em>
            </button>
          ))}
        </div>
      </section>

      <section className="personal-process">
        <div className="process-personal-intro" data-home-reveal>
          <div>
            <h2>Map. Connect.<br />Build. Operate.</h2>
          </div>
          <p>How I take an idea through release and beyond.</p>
        </div>
        <ProcessSteps className="process-personal-grid" steps={[
          { title: "Map", subtitle: "Understand the real work.", body: "Users, outcomes, states, risks, and the smallest useful release." },
          { title: "Connect", subtitle: "Design every boundary.", body: "Mobile, web, APIs, data, integrations, ownership, and what happens when something fails." },
          { title: "Build", subtitle: "Ship working increments.", body: "Try them on real devices, test them, release them, without losing sight of the goal." },
          { title: "Operate", subtitle: "Own what happens next.", body: "Monitor it, maintain it, learn from it, improve it." },
        ]} />
      </section>

    </div>
  );
}
