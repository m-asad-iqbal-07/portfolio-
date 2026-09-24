"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useState, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

function LenisGsapBridge() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onScroll = () => ScrollTrigger.update();
    const update = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", onScroll);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(update);
    };
  }, [lenis]);

  return null;
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.085,
        smoothWheel: !reduced,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.05,
        syncTouch: false,
        overscroll: true,
        anchors: !reduced,
      }}
    >
      <LenisGsapBridge />
      {children}
    </ReactLenis>
  );
}