import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "brothersfix",
    title: "BrothersFix Ecosystem",
    client: "BrothersFix",
    role: "Mobile Developer · ERP Feature Owner",
    period: "2026 — Present",
    category: "Mobile",
    featured: true,
    image: "/store/brothersfix/screen-01.jpg",
    screens: [
      "/store/brothersfix/screen-01.jpg",
      "/store/brothersfix/screen-02.jpg",
      "/store/brothersfix/screen-03.jpg",
      "/store/brothersfix/screen-04.jpg",
      "/store/brothersfix/screen-05.jpg",
    ],
    summary:
      "A warehouse product that ties together ERP inventory, barcode/QR scanning, client-specific views, and a React Native app for the field team.",
    outcome: "Live on the App Store, Google Play, and the web · still actively owned",
    stack: ["React Native", "Expo", "React", "Node.js", "Express", "REST APIs", "PostgreSQL", "Redis"],
    links: {
      appstore: "https://apps.apple.com/us/app/brothersfix/id6756797086",
      playstore: "https://play.google.com/store/apps/details?id=com.brothersfix.brothersfix",
      website: "https://app.brothersfix.com",
    },
    metrics: [
      { label: "Distribution", value: "iOS + Android" },
      { label: "Operations", value: "Web ERP" },
      { label: "Ownership", value: "Active" },
    ],
    context: [
      "Warehouse teams were juggling stock control, client jobs, and field updates across a pile of disconnected tools — no shared source of truth, no real audit trail.",
      "The system needed to handle nested inventory, individual-unit tracking, client isolation, and scanning that actually holds up on a warehouse floor.",
    ],
    approach: [
      "I connected the ERP-side inventory logic to a React Native app built for scanning and fieldwork, so the warehouse floor and the office stay in sync.",
      "Mobile and web share the same data contracts, so item status, movement, remarks, and media stay consistent no matter which surface you're on.",
    ],
    build: [
      {
        heading: "Inventory and relocation",
        body: [
          "Built real-time stock visibility, nested folders/locations, and the ability to move items or groups around while keeping their full history.",
        ],
      },
      {
        heading: "Barcode and QR operations",
        body: [
          "Wired up scanning so warehouse staff can pull up an item, check measurements and remarks, and log movement right from the floor.",
        ],
      },
      {
        heading: "Production delivery",
        body: [
          "Shipped the React Native app to iOS and Android, and I'm still extending the ERP side and shipping fixes and improvements post-launch.",
        ],
      },
    ],
    results: [
      "Live on both major app stores, plus a web ERP at app.brothersfix.com.",
      "One connected system handles inventory, scanning, client views, remarks, media, and field activity.",
    ],
    reflection: [
      "The best version of this treats the mobile app and the ERP as one product, not two. Keeping that boundary clear makes changes after launch a lot less scary.",
    ],
  },
  {
    slug: "allure-dispatch",
    title: "Allure Dispatch",
    client: "Allure Digital",
    role: "Full-Stack Product Engineer",
    period: "2026 — Present",
    category: "Web",
    featured: true,
    image: "/images/allure-dispatch.png",
    screens: [
      "/images/allure-dispatch.png",
      "/projects/allure-dispatch/screen-2.png",
      "/projects/allure-dispatch/screen-3.png",
    ],
    summary:
      "An in-house dispatch platform — React on the front, Node/Express behind it, webhook integrations, and a React Native companion app currently in development.",
    outcome: "Live operations platform · mobile companion in progress",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "React Native", "REST APIs"],
    links: { website: "https://dispatch.alluredigital.net" },
    metrics: [
      { label: "Surface", value: "Operations web" },
      { label: "Backend", value: "REST + webhooks" },
      { label: "Mobile", value: "In progress" },
    ],
    context: [
      "Dispatch coordination needed one system connecting office decisions, real-world events, and what the dispatchers actually need to act on.",
    ],
    approach: [
      "I built the web management side and got the service contracts stable first, then extended the same backend out toward a focused mobile companion.",
    ],
    build: [
      {
        heading: "Operations surface",
        body: [
          "Built the React platform around dispatch workflows and the state that matters for it — nothing more, nothing less.",
        ],
      },
      {
        heading: "Services and data",
        body: [
          "Built Node.js/Express REST APIs on PostgreSQL and Redis, with webhook-driven integrations.",
        ],
      },
      {
        heading: "Mobile companion",
        body: [
          "The React Native dispatcher app is being built against the same service and data contracts right now.",
        ],
      },
    ],
    results: [
      "The web platform is live at dispatch.alluredigital.net.",
      "The backend is built so the mobile companion can plug into it without a rewrite.",
    ],
    reflection: [
      "Getting the service and data boundaries right early keeps web and mobile from drifting apart as scope grows.",
    ],
  },
  {
    slug: "quickworx",
    title: "QuickWorX",
    client: "Allure Digital",
    role: "Mobile Developer · ERP Feature Owner",
    period: "2026 — Present",
    category: "Mobile",
    featured: true,
    image: "/store/quickworx/screen-01.jpg",
    screens: [
      "/store/quickworx/screen-01.jpg",
      "/store/quickworx/screen-02.jpg",
      "/store/quickworx/screen-03.jpg",
    ],
    summary:
      "A published employee app that pulls attendance, leave, payroll, HR support, company news, and profile management into one place.",
    outcome: "Published on iOS and Android · maintained after launch",
    stack: ["React Native", "Expo", "EAS Build", "REST APIs", "Firebase", "Redux", "Location", "Push notifications"],
    links: {
      appstore: "https://apps.apple.com/us/app/quickworx/id6756424360",
      playstore: "https://play.google.com/store/apps/details?id=app.rork.quickworx",
    },
    metrics: [
      { label: "Distribution", value: "iOS + Android" },
      { label: "Coverage", value: "Employee operations" },
      { label: "Ownership", value: "Post-launch" },
    ],
    context: [
      "Employees and HR were bouncing between too many disconnected tools for everyday stuff. Attendance, leave approvals, payroll info, support tickets, and company updates needed to feel like one app, not five.",
    ],
    approach: [
      "I covered the whole employee lifecycle in React Native, and I still own the ERP side after launch.",
      "The build ties together auth, location, API state, notifications, and store delivery into one release workflow I actually maintain.",
    ],
    build: [
      {
        heading: "Employee self-service",
        body: [
          "Built attendance, leave/WFH requests, payroll history, support tickets, news, events, and profile flows.",
        ],
      },
      {
        heading: "Device integrations",
        body: [
          "Wired up location-aware attendance, authentication, push notifications, and consistent state across iOS and Android.",
        ],
      },
      {
        heading: "Release ownership",
        body: [
          "Handled EAS builds, store submission, compliance, version updates, bug fixes, and ongoing production support.",
        ],
      },
    ],
    results: [
      "Live on both the Apple App Store and Google Play.",
      "Still getting ERP improvements, releases, and production support after launch.",
    ],
    reflection: [
      "For an employee app, staying reliable after launch matters as much as the first release. Feedback from actual use is part of the loop, not a separate maintenance phase.",
    ],
  },
  {
    slug: "iyurek",
    title: "iYurek",
    client: "Freelance",
    role: "Scoped Architecture Contributor",
    period: "2024 — 2025",
    category: "Mobile",
    featured: true,
    image: "/store/iyurek/screen-01.png",
    screens: [
      "/store/iyurek/screen-01.png",
      "/store/iyurek/screen-02.png",
      "/store/iyurek/screen-03.png",
      "/store/iyurek/screen-04.png",
      "/store/iyurek/screen-05.png",
      "/store/iyurek/screen-06.png",
      "/store/iyurek/screen-07.png",
      "/store/iyurek/screen-08.png",
    ],
    summary:
      "A published market-analysis app for stocks, forex, and crypto. My freelance scope was one thing: untangling tightly coupled logic into clearer service and module boundaries.",
    outcome: "Published iOS product · one focused architecture contribution",
    stack: ["Architecture refactor", "Service boundaries", "Modular code", "Production mobile app"],
    links: { appstore: "https://apps.apple.com/us/app/iyurek/id6502875896" },
    metrics: [
      { label: "Product", value: "Published" },
      { label: "Scope", value: "One feature" },
      { label: "Focus", value: "Architecture" },
    ],
    context: [
      "Inside the feature I was assigned, the code was monolithic — hard to isolate, hard to maintain, hard to touch without breaking something unrelated.",
    ],
    approach: [
      "I mapped out the feature's boundaries, pulled apart the responsibilities that had been jammed together, and reorganized it into focused modules.",
    ],
    build: [
      {
        heading: "Boundary mapping",
        body: [
          "Went through the existing feature and mapped its dependencies and responsibilities before touching the structure.",
        ],
      },
      {
        heading: "Modular refactor",
        body: [
          "Moved logic behind clearer module and service boundaries while keeping behavior identical in the live app.",
        ],
      },
      {
        heading: "Scoped delivery",
        body: [
          "Kept everything compatible with the existing published app, and kept my claim limited to the one feature I actually touched.",
        ],
      },
    ],
    results: [
      "A real architecture and maintainability improvement, scoped to the assigned feature.",
      "The app is still live on the App Store with cleaner boundaries in the area I worked on.",
    ],
    reflection: [
      "A portfolio should be precise about scope. This was a solid feature-level contribution — not ownership of the whole iYurek product, and I'm not going to pretend otherwise.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const categories = ["All", "Mobile", "Web"] as const;
