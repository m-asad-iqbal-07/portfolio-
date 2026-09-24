"use client";

import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "./contact-form";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  const pathname = usePathname();
  const description = pathname.startsWith("/work/")
    ? "Building something similar? Tell me about the product, the people using it, and where you need help."
    : pathname === "/services"
      ? "A new product, a focused feature, or a system that needs attention. Tell me what you have in mind."
      : "Tell me what you want to build, improve, or keep running. A clear starting point is all we need.";

  return <section className="contact-section" id="contact-panel" aria-labelledby="closing-contact-heading">
    <div className="closing-contact-panel">
      <div className="closing-contact-copy">
        <h2 id="closing-contact-heading">Let&apos;s talk.<br /><em>Let&apos;s build.</em></h2>
        <p>{description}</p>
        <a className="closing-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}<ArrowUpRight size={18} aria-hidden="true" /></a>
        <a className="closing-phone" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a>
        <p className="closing-availability"><span />{siteConfig.availability}</p>
      </div>
      <ContactForm key={pathname} />
    </div>
  </section>;
}
