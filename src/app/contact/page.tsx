import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/page-header";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Talk full-stack product work, mobile delivery, operational systems, or an existing product with Muhammad Asad Iqbal.",
  path: "/contact",
});

const links = [
  {
    label: "Email",
    value: siteConfig.email,
    href: "mailto:" + siteConfig.email,
    icon: "fi fi-rr-envelope",
  },
  {
    label: "LinkedIn",
    value: "Professional profile",
    href: siteConfig.socials.linkedin,
    icon: "fi fi-brands-linkedin",
  },
  {
    label: "GitHub",
    value: "Code and repos",
    href: siteConfig.socials.github,
    icon: "fi fi-brands-github",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        variant="contact"
        title={<>Build<br /><em>together.</em></>}
        intro="Send a message with what you're building and what you need."
      />
      <section className="contact-board" id="contact-panel">
        <div className="contact-aside">
          <p>Contact panel</p>
          <h2>Contact</h2>
          <p className="contact-availability">{siteConfig.availability}.</p>
          <div>
            {links.map((link) => (
              <a
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noreferrer"}
                key={link.label}
              >
                <i className={link.icon} aria-hidden="true" />
                <span><small>{link.label}</small>{link.value}</span>
                <i className="fi fi-rr-arrow-up-right" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div className="contact-form-panel"><ContactForm /></div>
      </section>
    </>
  );
}



