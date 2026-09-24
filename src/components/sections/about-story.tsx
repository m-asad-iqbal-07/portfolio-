"use client";

import { ContentIcon } from "@/components/ui/content-icon";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { RevealWords } from "@/components/motion/reveal-words";

const lead = "I'm Asad, a full-stack developer working across mobile, web, backend, and data.";

const bodyParagraphs = [
  "I've built warehouse inventory and scanning systems, employee ops apps, dispatch platforms, role-based mobile apps, real-time data apps, commerce, and some architecture cleanup work.",
  "Usual stack: React Native or React on the frontend, Node.js/Express on the backend, PostgreSQL, Redis, Firebase, or MongoDB for data.",
  siteConfig.availability,
];

export function AboutStory() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.utils.toArray<HTMLElement>(".reveal-text").forEach(block => {
        gsap.from(block, { y: 18, opacity: .6, duration: .65, ease: "power3.out",
          scrollTrigger: { trigger: block, start: "top 90%", once: true } });
      });
    },
    { scope: root },
  );

  return (
    <section className="about-story" id="story" ref={root}>
      <p className="about-lead reveal-text">
        <RevealWords text={lead} />
      </p>
      <div className="about-body">
        {bodyParagraphs.map((paragraph) => (
          <p className="reveal-text" key={paragraph}>
            <RevealWords text={paragraph} />
          </p>
        ))}
        <Link href="/contact">
          Contact
          <ContentIcon className="fi fi-rr-arrow-up-right" />
        </Link>
      </div>
    </section>
  );
}
