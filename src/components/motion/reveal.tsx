"use client";

import { useGSAP } from "@gsap/react";
import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  id?: string;
};

/**
 * A restrained entrance from a readable default, played once.
 * Respects prefers-reduced-motion (renders fully visible, no animation).
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        gsap.set(el, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        el,
        { opacity: .75, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        },
      );
    },
    { scope: ref, dependencies: [delay] },
  );

  return (
    <Tag ref={ref} className={className} id={id}>
      {children}
    </Tag>
  );
}
