"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";
import { Brand } from "./brand";

const links = [{ href: "/", label: "Home" }, ...navItems];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const surfaces = Array.from(document.querySelectorAll<HTMLElement>("main, .site-footer"));
    surfaces.forEach((surface) => { surface.inert = true; });
    menu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
      if (event.key === "Tab") {
        const elements = [toggle.current, ...Array.from(menu.current?.querySelectorAll<HTMLElement>("a, button") ?? [])].filter(Boolean) as HTMLElement[];
        const first = elements[0], last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    const onResize = () => { if (window.innerWidth > 900) setOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      surfaces.forEach((surface) => { surface.inert = false; });
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);
  const active = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return <>
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " menu-is-open" : ""}`}>
      <Brand />
      <nav className="site-nav" aria-label="Primary navigation">
        {links.filter((item) => item.href !== "/contact").map((item) =>
          <Link key={item.href} href={item.href} className={active(item.href) ? "is-active" : ""} aria-current={active(item.href) ? "page" : undefined}>
            <span className="nav-label"><span>{item.label}</span><span aria-hidden="true">{item.label}</span></span>
          </Link>)}
      </nav>
      <Link href="/contact" className="nav-cta">Let&apos;s talk <span className="cta-arrow"><ArrowUpRight size={17} /></span></Link>
      <button ref={toggle} className={`nav-toggle${open ? " is-open" : ""}`} type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>
        <span /><span />
      </button>
    </header>
    {open && <div ref={menu} id="mobile-navigation" className="mobile-navigation" data-lenis-prevent>
      <nav aria-label="Mobile navigation">
        {links.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={active(item.href) ? "page" : undefined}>{item.label}<ArrowUpRight /></Link>)}
      </nav>
      <div className="mobile-navigation-bottom"><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><div>
        <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
        <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
      </div></div>
    </div>}
  </>;
}
