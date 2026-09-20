"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/lib/site";

const navIcons = {
  "/work": "fi fi-rr-briefcase",
  "/services": "fi fi-rr-settings-sliders",
  "/about": "fi fi-rr-user",
  "/contact": "fi fi-rr-envelope",
} as const;

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={"site-header " + (scrolled ? "is-scrolled" : "")}>
      <Link href="/" className="site-wordmark" aria-label={siteConfig.name + " home"}>
        {siteConfig.name}
      </Link>

      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={pathname.startsWith(item.href) ? "is-active" : ""}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link href="/contact" className="nav-cta">
        Contact
        <i className="fi fi-rr-arrow-up-right" aria-hidden="true" />
      </Link>

      <button
        className="nav-toggle"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <i className={open ? "fi fi-rr-cross-small" : "fi fi-rr-menu-burger"} aria-hidden="true" />
      </button>

      {open ? (
        <div className="mobile-menu">
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <i className={navIcons[item.href]} aria-hidden="true" />
                {item.label}
              </Link>
            ))}
          </nav>
          <a href={"mailto:" + siteConfig.email}>{siteConfig.email}</a>
        </div>
      ) : null}
    </header>
  );
}
