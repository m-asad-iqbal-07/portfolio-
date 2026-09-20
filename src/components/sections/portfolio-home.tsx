"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ProjectVisualStack } from "@/components/media/project-visual-stack";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { TechMark } from "@/components/ui/tech-mark";

const expertise = [
  {
    icon: "fi-rr-mobile-button",
    eyebrow: "React Native · Expo",
    title: "Mobile products",
    text: "Cross-platform apps, built and submitted to both stores.",
    images: ["/store/quickworx/screen-01.jpg", "/store/quickworx/screen-02.jpg", "/store/quickworx/screen-03.jpg"],
    href: "/services#production-mobile-delivery",
  },
  {
    icon: "fi-rr-browser",
    eyebrow: "React · TypeScript · Operational UI",
    title: "Web platforms",
    text: "Fast interfaces for the systems people actually use to get work done.",
    images: ["/images/allure-dispatch.png", "/projects/allure-dispatch/screen-2.png", "/projects/allure-dispatch/screen-3.png"],
    href: "/services#connected-product-engineering",
  },
  {
    icon: "fi-rr-api",
    eyebrow: "Node · PostgreSQL · Redis",
    title: "Connected systems",
    text: "Mobile, web, backend, data, integrations — built as one system.",
    images: ["/store/brothersfix/screen-01.jpg", "/store/brothersfix/screen-02.jpg", "/store/brothersfix/screen-03.jpg"],
    href: "/work/brothersfix",
  },
  {
    icon: "fi-rr-blueprint",
    eyebrow: "Architecture · Services · Delivery",
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

const caseStudies = [
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
  const root = useRef<HTMLDivElement>(null);
  const [openStack, setOpenStack] = useState<number | null>(0);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const mobile = window.matchMedia("(max-width: 760px)").matches;
      const distance = mobile ? 28 : 58;
      const angle = mobile ? 7 : 15;

      const hero = gsap.timeline({ defaults: { ease: "power3.out" } });
      hero
        .from(".personal-hero-collage", {
          y: mobile ? 60 : 95,
          z: -180,
          scale: 0.86,
          rotationY: -18,
          rotationX: 8,
          autoAlpha: 0,
          filter: "blur(10px)",
          duration: 1.22,
          transformPerspective: 1200,
        }, 0.05)
        .from("[data-hero-reveal]", {
          yPercent: 75,
          rotationX: -65,
          autoAlpha: 0,
          filter: "blur(5px)",
          transformOrigin: "50% 100%",
          transformPerspective: 1000,
          duration: 1.02,
          stagger: 0.16,
        }, 0.28)
        .from("[data-hero-side]", {
          y: 28,
          autoAlpha: 0,
          filter: "blur(4px)",
          duration: 0.75,
          stagger: 0.1,
        }, 0.82);

      gsap.to("[data-hero-visual]", {
        yPercent: 12,
        scale: 0.96,
        ease: "none",
        scrollTrigger: { trigger: ".personal-home-hero", start: "top top", end: "bottom top", scrub: 0.9 },
      });
      gsap.to(".personal-hero-title", {
        yPercent: -8,
        opacity: 0.42,
        ease: "none",
        scrollTrigger: { trigger: ".personal-home-hero", start: "top top", end: "bottom top", scrub: 0.9 },
      });

      gsap.utils.toArray<HTMLElement>(".personal-section-heading").forEach((section) => {
        gsap.from(section.children, {
          y: 30,
          autoAlpha: 0,
          filter: "blur(4px)",
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 92%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".expertise-card").forEach((card, index) => {
        gsap.from(card, {
          y: distance,
          rotationX: angle,
          rotationY: mobile ? 0 : (1.5 - index) * 3,
          scale: 0.95,
          autoAlpha: 0,
          transformPerspective: 1200,
          transformOrigin: "50% 100%",
          duration: 1.15,
          ease: "power3.out",
          delay: (index % (mobile ? 2 : 4)) * 0.08,
          scrollTrigger: { trigger: card, start: "top 93%", once: true },
        });
        const artwork = card.querySelector(".project-visual-stack");
        if (artwork) gsap.from(artwork, {
          scale: 1.06,
          duration: 1.65,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 93%", once: true },
        });
      });

      const stackIntro = document.querySelector<HTMLElement>(".stack-intro");
      if (stackIntro) gsap.from(stackIntro.children, {
        y: 30,
        autoAlpha: 0,
        stagger: 0.09,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: stackIntro, start: "top 90%", once: true },
      });
      gsap.from(".stack-accordion button", {
        x: mobile ? 0 : 55,
        y: mobile ? 22 : 0,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".stack-accordion", start: "top 88%", once: true },
      });

      gsap.utils.toArray<HTMLElement>(".personal-work-card").forEach((card, index) => {
        gsap.from(card, {
          y: distance,
          rotationX: angle * 0.7,
          scale: 0.95,
          autoAlpha: 0,
          transformPerspective: 1200,
          duration: 1.15,
          delay: (index % 2) * 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 92%", once: true },
        });
        card.querySelectorAll<HTMLElement>(".project-visual-frame").forEach((frame, frameIndex) => {
          gsap.fromTo(frame, { yPercent: frameIndex === 0 ? 3 : 7 }, {
            yPercent: frameIndex === 0 ? -3 : -7,
            ease: "none",
            scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1.35 },
          });
        });
      });

      gsap.utils.toArray<HTMLElement>(".shipped-work-card, .process-personal-grid article").forEach((card, index) => {
        gsap.from(card, {
          y: distance,
          rotationX: angle * 0.45,
          rotationY: mobile ? 0 : -4,
          scale: 0.96,
          autoAlpha: 0,
          transformPerspective: 1100,
          duration: 1.08,
          delay: (index % 4) * 0.065,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 93%", once: true },
        });

        if (card.classList.contains("shipped-work-card")) {
          card.querySelectorAll<HTMLElement>(".project-visual-frame").forEach((frame, frameIndex) => {
            gsap.fromTo(frame, { yPercent: frameIndex === 0 ? 2 : 5 }, {
              yPercent: frameIndex === 0 ? -2 : -5,
              ease: "none",
              scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1.45 },
            });
          });
        }
      });

      gsap.utils.toArray<HTMLElement>(".process-personal-intro").forEach((section) => {
        gsap.from(section.children, {
          y: 28,
          autoAlpha: 0,
          filter: "blur(3px)",
          stagger: 0.08,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 91%", once: true },
        });
      });
    },
    { scope: root },
  );
  return (
    <div className="personal-home" ref={root}>
      <section className="personal-home-hero">
        <h1 className="personal-hero-title">
          <span><i data-hero-reveal>I BUILD APPS AND</i></span>
          <span><i data-hero-reveal>WEB PLATFORMS.</i></span>
        </h1>
        <p className="personal-hero-subtitle" data-hero-side>Full-Stack Developer · Web, Mobile &amp; Backend</p>

        <div className="personal-hero-visual" data-hero-visual>
          <div className="personal-hero-collage personal-hero-portrait">
            <Image src="/images/hero/asad-allure-cutout-final.png" alt="Muhammad Asad Iqbal, full-stack developer" fill priority sizes="(max-width: 760px) 90vw, 42vw" />
          </div>
        </div>

        <div className="home-tech-orbit" aria-label="Technologies I work with">
          {["React", "React Native", "TypeScript", "Node.js", "PostgreSQL", "WordPress"].map((name, index) => (
            <span className={"home-tech-float home-tech-float-" + (index + 1)} key={name}><TechMark name={name} /></span>
          ))}
        </div>

        <div className="personal-hero-intro" data-hero-side>
          <p>I&apos;m Asad. I build mobile apps, web platforms, and their backends. My apps are live on the App Store and Google Play.</p>
          <Link href="/work">See the work <ArrowUpRight /></Link>
        </div>

        <a href="#work" className="personal-scroll-cue" data-hero-side><ArrowDown /> Explore</a>
      </section>

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
              <i className={"fi " + item.icon + " expertise-icon"} aria-hidden="true" />
              <div className="expertise-copy"><p>{item.eyebrow}</p><h3>{item.title}</h3><p>{item.text}</p></div>
              <span className="expertise-link-label">{item.href.startsWith("/services") ? "Explore service" : "View case study"}</span>
              <span className="expertise-arrow"><ArrowUpRight /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="personal-stack">
        <div className="stack-intro" data-home-reveal>
          <span>What I use</span>
          <h2>The full stack,<br />actually.</h2>
          <p>I work on the interface, the backend, the database, the integrations, and the releases — usually all on the same project.</p>
          <Link href="/about">More about me <ArrowUpRight /></Link>
        </div>
        <div className="stack-accordion" data-home-reveal>
          {stack.map(([title, detail], index) => (
            <button key={title} onClick={() => setOpenStack(openStack === index ? null : index)} aria-expanded={openStack === index} aria-controls={`stack-detail-${index}`}>
              <i className={"fi " + stackIcons[index]} aria-hidden="true" /><span>{title}</span><i>{openStack === index ? "−" : "+"}</i>
              <em id={`stack-detail-${index}`} hidden={openStack !== index}>{detail}</em>
            </button>
          ))}
        </div>
      </section>

      <section className="personal-process">
        <div className="process-personal-intro" data-home-reveal>
          <div>
            <span>How I work</span>
            <h2>Map. Connect.<br />Build. Operate.</h2>
          </div>
          <p>How I take an idea through release and beyond.</p>
        </div>
        <div className="process-personal-grid">
          {[
            ["fi-rr-map", "Map", "Understand the real work.", "Users, outcomes, states, risks, and the smallest useful release."],
            ["fi-rr-workflow", "Connect", "Design every boundary.", "Mobile, web, APIs, data, integrations, ownership, and what happens when something fails."],
            ["fi-rr-code-simple", "Build", "Ship working increments.", "Try them on real devices, test them, release them, without losing sight of the goal."],
            ["fi-rr-rocket-lunch", "Operate", "Own what happens next.", "Monitor it, maintain it, learn from it, improve it."],
          ].map(([icon, title, subtitle, copy]) => (
            <article key={title} data-home-reveal><i className={"fi " + icon} aria-hidden="true" /><h3>{title}</h3><h4>{subtitle}</h4><p>{copy}</p></article>
          ))}
        </div>
      </section>
      <section className="personal-home-contact">
        <h2>Let&apos;s build something useful.</h2>
        <p>Tell me what you need to build, improve, or keep running.</p>
        <Link href="/contact">Get in touch <ArrowUpRight /></Link>
      </section>
    </div>
  );
}
