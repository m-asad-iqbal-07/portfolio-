"use client";

import { ContentIcon } from "@/components/ui/content-icon";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { experience } from "@/content/data";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const timelineItems = [
  {
    kind: "Education",
    title: "BS Software Engineering",
    organization: "University of Mianwali",
    period: "2021 — 2025",
    description: "Built the engineering foundation behind the product work I ship today.",
    highlights: ["Software engineering", "System design", "Application development"],
    icon: "fi fi-rr-graduation-cap",
  },
  ...experience.slice().reverse().map((item) => ({
    kind: "Experience",
    title: item.role,
    organization: item.company,
    period: item.period,
    description: item.description,
    highlights: item.highlights ?? [],
    icon: "fi fi-rr-briefcase",
  })),
];

export function AboutTimeline() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        ".about-timeline-progress",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            end: "bottom 72%",
            scrub: 0.8,
          },
        },
      );

      const mobile = window.matchMedia("(max-width: 760px)").matches;
      gsap.utils.toArray<HTMLElement>(".about-timeline-item").forEach((item, index) => {
        gsap.from(item, {
          x: mobile ? 0 : (index % 2 === 0 ? -16 : 16),
          y: 24,
          opacity: .7,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 86%",
            once: true,
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section className="about-timeline-section" ref={root}>
      <div className="route-section-head">
        <h2>My timeline.</h2>
      </div>
      <div className="about-timeline">
        <span className="about-timeline-line" aria-hidden="true">
          <i className="about-timeline-progress" />
        </span>
        {timelineItems.map((item) => (
          <article className="about-timeline-item" key={item.organization + item.period}>
            <div className="about-timeline-date">
              <time>{item.period}</time>
            </div>
            <span className="about-timeline-node" aria-hidden="true">
              <ContentIcon className={item.icon} />
            </span>
            <div className="about-timeline-card">
              <p>{item.kind}</p>
              <h3>{item.title}</h3>
              <h4>{item.organization}</h4>
              <p>{item.description}</p>
              <ul>
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
