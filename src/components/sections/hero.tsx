"use client";

import { ContentIcon } from "@/components/ui/content-icon";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { siteConfig } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Magnetic } from "@/components/motion/magnetic";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const elements = gsap.utils.toArray<HTMLElement>("[data-fade-in]");
    gsap.set(elements, { opacity: 0, y: 20 });
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.1,
    });
  }, { scope: root });

  return (
    <section ref={root} className="relative flex min-h-[100svh] flex-col justify-center">
      <div className="container-page w-full pt-20">
        <p data-fade-in className="font-mono text-[length:var(--text-xs)] uppercase tracking-[0.15em] text-[var(--fg-muted)]">
          {siteConfig.role}
        </p>
        <h1 data-fade-in className="mt-6 max-w-3xl font-display text-[length:var(--text-hero)] font-semibold leading-[1.08] tracking-[-0.025em] text-[var(--fg-primary)]">
          I build apps and web platforms.
        </h1>
        <p data-fade-in className="mt-6 max-w-lg text-[length:var(--text-lg)] leading-relaxed text-[var(--fg-secondary)]">
          I&apos;m Asad. I write mobile apps, web platforms, and the backends behind them.
        </p>
        <div data-fade-in className="mt-10 flex flex-wrap items-center gap-3">
          <Magnetic><ButtonLink href="/work">See the work</ButtonLink></Magnetic>
          <ButtonLink href="/contact" variant="ghost">Get in touch</ButtonLink>
        </div>
      </div>
      <div className="container-page pointer-events-none absolute inset-x-0 bottom-8">
        <div className="flex items-center gap-2 font-mono text-[length:var(--text-xs)] uppercase tracking-widest text-[var(--fg-muted)]">
          <ContentIcon className="fi fi-rr-arrow-small-down text-[var(--accent)]" />
          Scroll
        </div>
      </div>
    </section>
  );
}
