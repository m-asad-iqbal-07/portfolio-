import type { ExperienceItem, Service, StackGroup, Testimonial } from "@/types/content";

export const services: Service[] = [
  {
    id: "connected-product-engineering",
    icon: "fi fi-rr-diagram-project",
    title: "Connected product engineering",
    tagline: "Mobile, web, backend, and data",
    description:
      "I build the connected parts of a product as one system: customer-facing apps, internal interfaces, APIs, databases, caching, and third-party integrations.",
    includes: [
      "React Native mobile apps",
      "React and TypeScript web interfaces",
      "Node.js and Express services",
      "PostgreSQL and Redis architecture",
      "REST APIs, webhooks, and integrations",
    ],
  },
  {
    id: "production-mobile-delivery",
    icon: "fi fi-rr-mobile-button",
    title: "Production mobile delivery",
    tagline: "React Native, Expo, and EAS",
    description:
      "I take cross-platform apps from code through production builds, store submission, release fixes, and whatever ownership comes after launch.",
    includes: [
      "React Native and Expo development",
      "EAS Build and release workflows",
      "App Store and Google Play delivery",
      "Authentication and native features",
      "Post-launch maintenance",
    ],
  },
  {
    id: "operational-systems",
    icon: "fi fi-rr-settings-sliders",
    title: "ERP and operational workflows",
    tagline: "Systems shaped around real work",
    description:
      "I turn messy operational processes into working software — inventory, dispatch, employee ops, workflow automation, client access, real-time coordination.",
    includes: [
      "Inventory and warehouse workflows",
      "Dispatch and field operations",
      "Employee and company systems",
      "Role-based operational interfaces",
      "Data automation and webhook flows",
    ],
  },
  {
    id: "web-cms",
    icon: "fi fi-rr-browser",
    title: "Web and CMS delivery",
    tagline: "Product interfaces and structured content",
    description:
      "Responsive React interfaces and WordPress builds that are actually maintainable — clear content structure, reusable components, editing that doesn't fight you.",
    includes: [
      "React and TypeScript frontends",
      "Responsive product interfaces",
      "WordPress and custom post types",
      "Bricks and Elementor builds",
      "Query loops and reusable content",
    ],
  },
];

export const processSteps = [
  {
    step: "fi fi-rr-map",
    title: "Map",
    body: "Understand the users, the operational reality, what already exists, and the outcome the product needs to hit.",
  },
  {
    step: "fi fi-rr-link-alt",
    title: "Connect",
    body: "Figure out how interfaces, services, data, integrations, and releases fit together.",
  },
  {
    step: "fi fi-rr-hammer",
    title: "Build",
    body: "Ship testable pieces across mobile, web, backend, and infrastructure with clear ownership.",
  },
  {
    step: "fi fi-rr-rocket-lunch",
    title: "Operate",
    body: "Support releases, store delivery, fixes, monitoring, and everything after launch.",
  },
];

export const faqs: { q: string; a: string }[] = [];

export const experience: ExperienceItem[] = [
  {
    company: "Allure Digital",
    role: "Associate Software Engineer",
    period: "Aug 2025 — Present",
    description: "Building and running production apps across mobile, web, backend, and ops.",
    highlights: [
      "Shipped QuickWorX and BrothersFix to both the App Store and Google Play.",
      "Own the ongoing ERP functionality and releases for both.",
      "Building Allure Dispatch — web app, backend services, data layer, and mobile companion.",
      "Working across APIs, webhooks, EAS builds, WordPress, PostgreSQL, and Redis.",
    ],
  },
  {
    company: "Crew Innovations",
    role: "React Native Developer",
    period: "Sep 2024 — Jul 2025 · Remote",
    description:
      "Built and contributed to cross-platform apps covering operations, employee systems, commerce, trading, weather, and mobile R&D.",
    highlights: [
      "Shipped Weatherly and contributed to SkinPixa and other mobile R&D projects.",
      "Worked across React Native, React, Node.js, Express, MongoDB, Firebase, and production deploys.",
    ],
  },
];

export const stackGroups: StackGroup[] = [
  { group: "Mobile", items: ["React Native", "Expo", "EAS Build", "React Navigation", "Redux", "Context API"] },
  { group: "Web", items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Material UI"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "FastAPI", "WebSockets", "Webhooks"] },
  { group: "Data", items: ["PostgreSQL", "Redis", "Firebase", "Supabase", "MongoDB"] },
  { group: "Product delivery", items: ["App Store", "Google Play", "Git", "Postman", "Responsive UI", "User flows"] },
  { group: "Web and CMS", items: ["WordPress", "Bricks", "Elementor", "Custom post types", "Query loops"] },
];

export const values = [
  "Frontend, backend, data, integrations, and releases — one product, built as one thing.",
  "Ship, then fix and improve based on what actually happens after launch.",
  "Understand the actual use case before picking a solution.",
];

export const credentials = [
  { label: "Education", value: "BS Software Engineering · University of Mianwali · 2021 — 2025" },
  { label: "Languages", value: "English · Urdu" },
  { label: "Availability", value: "Open to full-time roles, freelance work, and remote gigs" },
];

export const testimonials: Testimonial[] = [];
