import type { CatalogProject } from "./catalog";

/**
 * Projects intentionally hidden from the live portfolio.
 * Keep these records and their public assets intact so they can be restored later.
 */
export const draftCatalogProjects: CatalogProject[] = [
  {
    slug: "nujum",
    name: "Nujum Ecosystem",
    type: "Admin, Partner, and Technician apps",
    status: "Product build",
    period: "Crew Innovations · 2024 — 2025",
    description:
      "Three role-based React Native apps sharing real-time Firebase data and login.",
    contribution: "Built the connected mobile ecosystem and helped get it onto Google Play.",
    stack: ["React Native", "Firebase", "Role-based authentication", "Real-time data"],
    icon: "fi fi-rr-mobile-notch",
    screens: ["/projects/nujum/screen-1.webp", "/projects/nujum/screen-2.webp", "/projects/nujum/screen-3.webp"],
    mediaType: "Verified mobile screenshots · three role-based apps",
    href: "https://play.google.com/store/apps/details?id=com.najumalrabie.admin",
    proof: "Verified Google Play listing",
  },
  {
    slug: "meerak",
    name: "Meerak EMS",
    type: "Employee management mobile app",
    status: "Product build",
    period: "Crew Innovations · 2024 — 2025",
    description:
      "Real-time employee operations — chat, attendance, task tracking, leave requests, live notifications.",
    contribution: "Built the core employee workflows and real-time features.",
    stack: ["React Native", "Real-time data", "Attendance", "Tasks"],
    icon: "fi fi-rr-users-alt",
    screens: ["/projects/meerak/screen-1.webp", "/projects/meerak/screen-2.png", "/projects/meerak/screen-3.png"],
    mediaType: "One verified screenshot plus generated concepts",
    href: "https://play.google.com/store/apps/details?id=com.mamoonsafdar.MBB",
    proof: "Verified Google Play listing",
  },
  {
    slug: "tbb",
    name: "TBB — Try Before Buy",
    type: "AI-assisted commerce app",
    status: "Project build",
    period: "Crew Innovations · 2024 — 2025",
    description:
      "A cross-platform shopping app with AI-assisted virtual try-on and a full checkout flow.",
    contribution:
      "Worked across React Native, React, Node.js, Express, MongoDB, and the AI try-on feature.",
    stack: ["React Native", "React", "Node.js", "MongoDB", "AI try-on"],
    icon: "fi fi-rr-shopping-bag",
    screens: ["/projects/tbb/portfolio-board.png"],
    mediaType: "Generated concept · three screens in one image",
    mediaAlt: "TBB portfolio concept showing shopping, virtual try-on, and checkout screens",
  },
  {
    slug: "armanfxpamm",
    name: "ArmanFxPamm",
    type: "Trading and investment platform",
    status: "Project build",
    period: "Crew Innovations · 2024 — 2025",
    description:
      "A multi-platform trading app with secure login, account management, and third-party API integrations.",
    contribution: "Worked on the implementation across mobile and web.",
    stack: ["React Native", "Web application", "Secure authentication", "Trading APIs"],
    icon: "fi fi-rr-chart-line-up",
    screens: ["/projects/armanfxpamm/screen-1.png", "/projects/armanfxpamm/screen-2.png", "/projects/armanfxpamm/screen-3.png"],
    mediaType: "Generated concepts",
    href: "https://armaanfxpamm.com",
    proof: "Live web platform",
  },
];
