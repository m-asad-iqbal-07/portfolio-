import content from "@/content/managed.json";
const profile = content.profile;
export const site = {
  name: profile.name, shortName: profile.shortName, role: profile.role,
  tagline: "I build apps and web platforms.", description: profile.description,
  url: new URL(content.site.url).origin,
  email: profile.email, phone: profile.phone, availability: profile.availability,
  usp: "Interfaces, services, data, integrations, and releases.",
  socials: { linkedin: profile.linkedin, github: profile.github },
  resume: "/Muhammad-Asad-Iqbal-Resume.pdf",
};
export const siteConfig = site;
export const navItems = [
  { label: "Work", href: "/work" }, { label: "Services", href: "/services" },
  { label: "About", href: "/about" }, { label: "Contact", href: "/contact" },
] as const;
