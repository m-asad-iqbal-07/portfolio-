# Draft Projects Archive

Status: Hidden from the live portfolio. These records and their image assets are intentionally retained so they can be restored later.

Code registry: `src/content/draft-projects.ts`

## Nujum Ecosystem

- Slug: `nujum`
- Type: Admin, Partner, and Technician apps
- Status: Product build
- Period: Crew Innovations · 2024 — 2025
- Description: Three role-based React Native apps sharing real-time Firebase data and login.
- Contribution: Built the connected mobile ecosystem and helped get it onto Google Play.
- Stack: React Native · Firebase · Role-based authentication · Real-time data
- Link: https://play.google.com/store/apps/details?id=com.najumalrabie.admin
- Proof: Verified Google Play listing
- Media: `/projects/nujum/screen-1.webp`, `/projects/nujum/screen-2.webp`, `/projects/nujum/screen-3.webp`
- Media type: Verified mobile screenshots — three role-based apps.

## Meerak EMS

- Slug: `meerak`
- Type: Employee management mobile app
- Status: Product build
- Period: Crew Innovations · 2024 — 2025
- Description: Real-time employee operations — chat, attendance, task tracking, leave requests, and live notifications.
- Contribution: Built the core employee workflows and real-time features.
- Stack: React Native · Real-time data · Attendance · Tasks
- Link: https://play.google.com/store/apps/details?id=com.mamoonsafdar.MBB
- Proof: Verified Google Play listing
- Media: `/projects/meerak/screen-1.webp`, `/projects/meerak/screen-2.png`, `/projects/meerak/screen-3.png`
- Media type: One verified screenshot plus generated concepts.

## TBB — Try Before Buy

- Slug: `tbb`
- Type: AI-assisted commerce app
- Status: Project build
- Period: Crew Innovations · 2024 — 2025
- Description: A cross-platform shopping app with AI-assisted virtual try-on and a full checkout flow.
- Contribution: Worked across React Native, React, Node.js, Express, MongoDB, and the AI try-on feature.
- Stack: React Native · React · Node.js · MongoDB · AI try-on
- Media: `/projects/tbb/portfolio-board.png`
- Media type: Generated concept — three screens in one image.
- Shows: Product discovery, virtual try-on, and cart.
- Alt text: TBB portfolio concept showing shopping, virtual try-on, and checkout screens.

## ArmanFxPamm

- Slug: `armanfxpamm`
- Type: Trading and investment platform
- Status: Project build
- Period: Crew Innovations · 2024 — 2025
- Description: A multi-platform trading app with secure login, account management, and third-party API integrations.
- Contribution: Worked on the implementation across mobile and web.
- Stack: React Native · Web application · Secure authentication · Trading APIs
- Link: https://armaanfxpamm.com
- Proof: Live web platform
- Media: `/projects/armanfxpamm/screen-1.png`, `/projects/armanfxpamm/screen-2.png`, `/projects/armanfxpamm/screen-3.png`
- Media type: Generated concepts.

## How to restore

1. Move the required object from `draftCatalogProjects` in `src/content/draft-projects.ts` back into `catalogProjects` in `src/content/catalog.ts`.
2. If it should also appear in the original homepage's shipped-work grid, restore its card in `src/components/sections/portfolio-home.tsx`.
3. Restore its section and media-manifest row in `PORTFOLIO-CONTENT.md`.
4. The project images do not need to be restored because they remain in `public/projects`.