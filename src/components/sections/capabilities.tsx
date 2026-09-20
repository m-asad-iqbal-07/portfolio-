"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { stackGroups } from "@/content/data";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { RevealWords } from "@/components/motion/reveal-words";

export function Capabilities() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.utils.toArray<HTMLElement>(".stack-grid article").forEach((card, index) => {
        gsap.from(card, {
          y: 32,
          autoAlpha: 0,
          filter: "blur(4px)",
          duration: 0.85,
          delay: (index % 3) * 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".stack-grid .reveal-text").forEach((block) => {
        const words = block.querySelectorAll(".reveal-word");
        gsap.fromTo(
          words,
          { opacity: 0.16, filter: "blur(2px)" },
          {
            opacity: 1,
            filter: "blur(0px)",
            ease: "none",
            stagger: 0.03,
            scrollTrigger: {
              trigger: block,
              start: "top 92%",
              end: "bottom 65%",
              scrub: 0.5,
            },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section className="stack-section" ref={root}>
      <div className="route-section-head">
        <span>Capabilities</span>
        <h2>Capabilities.</h2>
      </div>
      <div className="stack-grid">
        {stackGroups.map((group) => (
          <article key={group.group}>
            <i className="fi fi-rr-code-simple" aria-hidden="true" />
            <h3>{group.group}</h3>
            <p className="reveal-text"><RevealWords text={group.items.join(" · ")} /></p>
          </article>
        ))}
      </div>
      <Link className="stack-detail-link" href="/uses">
        Full breakdown with more detail on how I use each
        <i className="fi fi-rr-arrow-up-right" aria-hidden="true" />
      </Link>
    </section>
  );
}
