"use client";

import { useGSAP } from "@gsap/react";
import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type StaggerProps = {
  children: ReactNode;
  /** CSS selector for the children to stagger. Defaults to direct children. */
  selector?: string;
  gap?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Stagger primitive — fades + lifts a set of siblings in sequence on enter.
 */
export function Stagger({
  children,
  selector = ":scope > *",
  gap = 0.08,
  as: Tag = "div",
  className,
}: StaggerProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const items = el.querySelectorAll<HTMLElement>(selector);
      if (items.length === 0) return;

      if (prefersReducedMotion()) {
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        items,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: gap,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: ref, dependencies: [selector, gap] },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
