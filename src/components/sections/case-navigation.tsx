"use client";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
const sections = ["Context", "Approach", "Build", "Results", "Reflection"];
export function CaseNavigation() {
  const [active, setActive] = useState("context");
  const nav = useRef<HTMLElement>(null);
  const lenis = useLenis();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id.replace("case-", ""));
    }, { rootMargin: "-20% 0px -50% 0px" });
    sections.forEach(section => { const element = document.getElementById(`case-${section.toLowerCase()}`); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  return <nav ref={nav} className="case-navigation" aria-label="Case study contents">{sections.map(section => {
    const id = section.toLowerCase();
    return <a key={id} href={`#case-${id}`} aria-current={active === id ? "location" : undefined} onClick={event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const element = document.getElementById(`case-${id}`); if (!element) return;
      event.preventDefault();
      const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 80;
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight - (nav.current?.offsetHeight ?? 60) - 20;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (lenis) lenis.scrollTo(top, { immediate: reduced }); else window.scrollTo({ top, behavior: reduced ? "instant" : "smooth" });
      history.replaceState(history.state, "", `#case-${id}`); setActive(id);
    }}>{section}</a>;
  })}</nav>;
}
