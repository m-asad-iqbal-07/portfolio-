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
 * Reveal primitive — clipPath wipe + fade as the element enters the viewport.
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
        gsap.set(el, { opacity: 1, clipPath: "inset(0 0 0 0)" });
        return;
      }

      gsap.fromTo(
        el,
        { opacity: 0, clipPath: "inset(0 100% 0 0)", y: 24 },
        {
          opacity: 1,
          clipPath: "inset(0 0 0 0)",
          y: 0,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
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
