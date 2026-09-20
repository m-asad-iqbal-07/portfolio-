export const site = {
  name: "Muhammad Asad Iqbal",
  shortName: "Asad Iqbal",
  role: "Full-Stack Developer — Web, Mobile & Backend",
  tagline: "I build apps and web platforms.",
  description:
    "Full-stack developer building production apps with React, React Native, Node.js, Express, PostgreSQL, Redis, and real release workflows.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "masadiqbal385@gmail.com",
  phone: "+92 333 794 1364",
  availability: "Open to full-time roles, freelance work, and remote gigs",
  usp: "Interfaces, services, data, integrations, and releases.",
  socials: {
    linkedin: "https://www.linkedin.com/in/muhammad-asad-iqbal-515ab8247/",
    github: "https://github.com/m-asad-iqbal-07",
  },
  resume: "/Muhammad-Asad-Iqbal-Resume.pdf",
} as const;

export const siteConfig = site;

export const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
