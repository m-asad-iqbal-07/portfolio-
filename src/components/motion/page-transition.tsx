"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLenis } from "lenis/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Monogram } from "@/components/layout/brand";

const routeNames: Record<string, string> = { "/": "Home", "/work": "Selected work", "/services": "Services", "/about": "About Asad", "/contact": "Let’s talk", "/uses": "My toolkit", "/work/brothersfix": "BrothersFix", "/work/allure-dispatch": "Allure Dispatch", "/work/quickworx": "QuickWorX", "/work/iyurek": "iYurek" };

/** Cover first, commit the route underneath, then reveal its ready first frame. */
export function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();
  const lenisRef = useRef(lenis);
  const curtain = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  const pending = useRef<URL | null>(null);
  const previous = useRef(pathname);
  const fallback = useRef<ReturnType<typeof setTimeout> | null>(null);
  const finish = useRef<() => void>(() => {});

  // A newly initialized scroller must not cancel a curtain already in flight.
  useEffect(() => {
    lenisRef.current = lenis;
    if (pending.current) lenis?.stop();
  }, [lenis]);

  useEffect(() => {
    const node = curtain.current;
    if (!node) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const release = () => {
      if (fallback.current) clearTimeout(fallback.current);
      gsap.set(node, { y: 0, yPercent: 100, visibility: "hidden", pointerEvents: "none" });
      node.dataset.phase = "idle";
      pending.current = null;
      lenisRef.current?.start();
    };
    finish.current = release;
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || media.matches) return;
      const anchor = (event.target as Element)?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || (anchor.target && anchor.target !== "_self") || anchor.hasAttribute("download") || anchor.hasAttribute("data-no-transition")) return;
      const url = new URL(anchor.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname || !/^https?:$/.test(url.protocol) || /\.[a-z0-9]+$/i.test(url.pathname)) return;
      event.preventDefault();
      event.stopPropagation();
      if (pending.current) return;
      pending.current = url;
      lenisRef.current?.stop();
      router.prefetch(url.pathname);
      if (label.current) label.current.textContent = routeNames[url.pathname] ?? "Asad Iqbal";
      node.dataset.phase = "covering";
      gsap.killTweensOf(node);
      const content = node.querySelector(".route-curtain-content");
      gsap.set(node, { y: 0, visibility: "visible", pointerEvents: "auto" });
      gsap.timeline().fromTo(node, { yPercent: 100 }, { yPercent: 0, duration: .38, ease: "power3.inOut", onComplete: () => {
        node.dataset.phase = "covered";
        router.push(url.pathname + url.search + url.hash, { scroll: false });
      } }).fromTo(content, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: .3, ease: "power3.out" }, .14);
      fallback.current = setTimeout(() => { gsap.to(node, { yPercent: -100, duration: .3, onComplete: release }); }, 6000);
    };
    const onMotionChange = () => { if (media.matches) { gsap.killTweensOf(node); release(); } };
    document.addEventListener("click", onClick, true);
    media.addEventListener("change", onMotionChange);
    return () => {
      document.removeEventListener("click", onClick, true);
      media.removeEventListener("change", onMotionChange);
      if (fallback.current) clearTimeout(fallback.current);
      gsap.killTweensOf(node);
      lenisRef.current?.start();
    };
  }, [router]);

  useEffect(() => {
    if (previous.current === pathname) return;
    previous.current = pathname;
    const node = curtain.current;
    if (!node) return;
    let cancelled = false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const destination = pending.current;
    if (!destination) {
      // Browser history keeps its own restored position and never gets a second curtain.
      if (!reduced) gsap.fromTo("main", { opacity: .8 }, { opacity: 1, duration: .35, ease: "power2.out", clearProps: "opacity" });
      requestAnimationFrame(() => ScrollTrigger.refresh());
      return;
    }
    const reveal = async () => {
      const hashTarget = destination.hash ? document.getElementById(decodeURIComponent(destination.hash.slice(1))) : null;
      const top = hashTarget ? Math.max(0, hashTarget.getBoundingClientRect().top + window.scrollY - 110) : 0;
      if (lenisRef.current) lenisRef.current.scrollTo(top, { immediate: true, force: true });
      else window.scrollTo({ top, behavior: "instant" });
      const images = Array.from(document.images).filter(image => image.getBoundingClientRect().top < innerHeight && image.getBoundingClientRect().bottom > 0);
      await Promise.race([Promise.all([document.fonts.ready, ...images.map(image => image.decode().catch(() => {}))]), new Promise(resolve => setTimeout(resolve, 500))]);
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      if (cancelled) return;
      if (fallback.current) clearTimeout(fallback.current);
      ScrollTrigger.refresh();
      node.dataset.phase = "revealing";
      gsap.to(node, { yPercent: -100, duration: reduced ? 0 : .62, ease: "power3.inOut", onComplete: () => {
        finish.current();
        document.querySelector<HTMLElement>("main")?.focus({ preventScroll: true });
      } });
    };
    void reveal();
    return () => { cancelled = true; };
  }, [pathname]);

  return <div ref={curtain} className="route-curtain" data-phase="idle" aria-hidden="true">
    <div className="route-curtain-content"><Monogram className="route-monogram" /><span ref={label}>Asad Iqbal</span></div>
    <span className="route-curtain-signature">Designed with intent. Built with care.</span>
  </div>;
}
