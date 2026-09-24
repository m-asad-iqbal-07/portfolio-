export type CatalogProject = {
  slug: string;
  name: string;
  type: string;
  status: string;
  period: string;
  description: string;
  contribution: string;
  stack: string[];
  icon: string;
  screens?: string[];
  href?: string;
  proof?: string;
  mediaType: string;
  mediaAlt?: string;
};

export const catalogProjects: CatalogProject[] = [
  {
    slug: "closely",
    name: "Closely",
    type: "Email infrastructure contribution",
    status: "Scoped contribution",
    period: "Freelance · 2024 — 2025",
    description:
      "Built one focused email warm-up module to help sending domains build a healthier reputation and land in more inboxes.",
    contribution:
      "Feature-level contribution: the email warm-up module within the wider Closely platform.",
    stack: ["Email warm-up", "Domain reputation", "Deliverability"],
    icon: "fi fi-rr-envelope-dot",
    screens: ["/projects/closely/screen-1.png", "/projects/closely/screen-2.png", "/projects/closely/screen-3.png"],
    mediaType: "Generated concepts · three screens shown together",
    href: "https://closelyhq.com",
    proof: "Live web software",
  },
  {
    slug: "manhattan-lead",
    name: "Manhattan Lead",
    type: "Lead management platform",
    status: "Production system",
    period: "Web application",
    description:
      "A production platform for tracking sales leads and moving them through a pipeline in one place.",
    contribution: "Built out the lead-management experience and the workflows behind it.",
    stack: ["Web application", "Lead operations", "Production system"],
    icon: "fi fi-rr-chart-histogram",
    screens: ["/projects/manhattan-lead/screen-1.png", "/projects/manhattan-lead/screen-2.png", "/projects/manhattan-lead/screen-3.png"],
    mediaType: "Generated concepts · three screens shown together",
    href: "https://app.manhattanlead.com",
    proof: "Live web software",
  },
  {
    slug: "weatherly",
    name: "Weatherly",
    type: "Location-aware weather app",
    status: "Project build",
    period: "Crew Innovations · 2024 — 2025",
    description:
      "Real-time forecasts, location-aware weather, and alerts pulled from third-party APIs.",
    contribution: "Built the product workflow and the weather-data integrations.",
    stack: ["React Native", "Weather APIs", "Location data", "Alerts"],
    icon: "fi fi-rr-cloud-sun",
    screens: ["/projects/weatherly/portfolio-board.png"],
    mediaType: "Generated concept · three screens in one image",
    mediaAlt: "Weatherly portfolio concept showing locations, current conditions, and forecast screens",
  },
  {
    slug: "skinpixa",
    name: "SkinPixa",
    type: "On-device medical image analysis",
    status: "R&D project",
    period: "Jun 2025 — Jul 2025",
    description:
      "A React Native flow for on-device medical image analysis — captures an image, runs it through a local model, shows a careful risk read.",
    contribution:
      "Built the mobile experience, wired up TensorFlow Lite, and designed the risk/diagnosis screens.",
    stack: ["React Native", "TensorFlow Lite", "Mobile UI", "Data visualization"],
    icon: "fi fi-rr-microscope",
    screens: ["/projects/skinpixa/portfolio-board.png"],
    mediaType: "Generated concept · three screens in one image",
  },
  {
    slug: "agri-diagnosis",
    name: "Agri Diagnosis",
    type: "Bilingual crop disease detection",
    status: "R&D project",
    period: "Nov 2024 — May 2025",
    description:
      "An English/Urdu, offline-capable app that detects crop disease from a photo, using a FastAPI backend.",
    contribution:
      "Built the bilingual navigation, language switching, camera detection, and offline handling.",
    stack: ["React Native", "FastAPI", "Camera APIs", "Localization", "Offline UX"],
    icon: "fi fi-rr-leaf",
    screens: ["/projects/agri-diagnosis/portfolio-board.png"],
    mediaType: "Generated concept · three screens in one image",
  },
  {
    slug: "resqnet",
    name: "ResQNet",
    type: "Real-time disaster coordination",
    status: "R&D project",
    period: "May 2025",
    description:
      "A disaster-response app using Firebase, WebSockets, and geolocation to coordinate responders in real time.",
    contribution:
      "Built the React Native app, the real-time updates, location tagging, and the coordination data layer.",
    stack: ["React Native", "Firebase", "WebSockets", "Geolocation"],
    icon: "fi fi-rr-siren-on",
    screens: ["/projects/resqnet/portfolio-board.png"],
    mediaType: "Generated concept · three screens in one image",
  },
  {
    slug: "coffee-shop-app",
    name: "Coffee Shop App",
    type: "Firebase mobile commerce",
    status: "R&D project",
    period: "Jan 2025 — Mar 2025",
    description:
      "A full mobile commerce flow — login, browse, cart, checkout, confirmation — built on Firebase.",
    contribution:
      "Built the authentication, catalog, cart, checkout, and confirmation flows.",
    stack: ["React Native", "Firebase Auth", "Firebase", "State management"],
    icon: "fi fi-rr-mug-hot-alt",
    screens: ["/projects/coffee-shop-app/portfolio-board.png"],
    mediaType: "Generated concept · three screens in one image",
  },
];
