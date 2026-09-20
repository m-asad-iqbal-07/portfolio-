"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Custom cursor — a lime dot that grows over interactive targets and reveals
 * a label on data-cursor elements. Desktop / fine-pointer only; touch devices
 * keep the native cursor untouched and never mount the dot at all.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  // Capability check runs once: only fine-pointer, motion-tolerant devices
  // ever mount the cursor dot in the DOM.
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(finePointer && !prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    if (!dot) return;

    document.documentElement.classList.add("has-custom-cursor");

    const moveX = gsap.quickTo(dot, "x", { duration: 0.25, ease: "power3.out" });
    const moveY = gsap.quickTo(dot, "y", { duration: 0.25, ease: "power3.out" });

    function onMove(e: MouseEvent) {
      moveX(e.clientX);
      moveY(e.clientY);

      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        "a, button, [data-cursor], [role='button']",
      );
      if (target) {
        setActive(true);
        setLabel(target.dataset.cursor ?? "");
      } else {
        setActive(false);
        setLabel("");
      }
    }

    function onLeave() {
      gsap.to(dot, { opacity: 0, duration: 0.2 });
    }
    function onEnter() {
      gsap.to(dot, { opacity: 1, duration: 0.2 });
    }

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full border border-white/70 text-[10px] font-medium uppercase tracking-widest text-white shadow-[0_4px_24px_rgba(0,0,0,.3)]"
      style={{
        width: active ? (label ? 80 : 40) : 12,
        height: active ? (label ? 80 : 40) : 12,
        marginLeft: active ? (label ? -40 : -20) : -6,
        marginTop: active ? (label ? -40 : -20) : -6,
        background: "var(--accent)",
        transition:
          "width 0.25s ease, height 0.25s ease, margin 0.25s ease",
        willChange: "transform",
      }}
    >
      {label}
    </div>
  );
}
