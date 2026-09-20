# Muhammad Asad Iqbal — Portfolio v2 Implementation Plan

> Historical planning reference. The shipped design and copy are defined by [PORTFOLIO-CONTENT.md](./PORTFOLIO-CONTENT.md) and the current source in src/.

> A complete, executable blueprint for rebuilding `portfolio-asad-iqbal.vercel.app` from the ground up into a portfolio that wins clients, demonstrates seniority, and ranks. Built for Next.js 15 + GSAP + Lenis + Three.js, calibrated against 2026 award-winning portfolios.

**Owner:** Muhammad Asad Iqbal
**Role:** Associate Software Engineer (mobile + web)
**Goal:** Hire-me + Sell-services portfolio that ranks on Google and converts
**Build target:** Production-ready in 4 weeks (full-time) or 8 weeks (part-time)

---

## Table of Contents

1. [Why the Current Portfolio Fails](#1-why-the-current-portfolio-fails)
2. [Strategic Positioning](#2-strategic-positioning)
3. [Design System](#3-design-system)
4. [Tech Stack](#4-tech-stack)
5. [Information Architecture](#5-information-architecture)
6. [Page-by-Page Specification](#6-page-by-page-specification)
7. [Animation & Motion System](#7-animation--motion-system)
8. [Content Blueprint](#8-content-blueprint)
9. [Project Structure](#9-project-structure)
10. [Performance Budget](#10-performance-budget)
11. [SEO + AEO (AI Engine Optimization)](#11-seo--aeo-ai-engine-optimization)
12. [Accessibility](#12-accessibility)
13. [Implementation Phases](#13-implementation-phases-week-by-week)
14. [Code Patterns & Snippets](#14-code-patterns--snippets)
15. [Launch Checklist](#15-launch-checklist)
16. [Post-Launch Growth Loop](#16-post-launch-growth-loop)

---

## 1. Why the Current Portfolio Fails

A teardown so the rebuild fixes real problems, not imagined ones.

| Problem in current site | Why it hurts you |
|---|---|
| Generic dark theme, no visual identity | Nothing memorable, looks like 10,000 other React portfolios |
| Title says "Software Engineer" — no positioning | A recruiter can't tell what you actually sell |
| No case studies, just project cards | Clients buy outcomes, not screenshots |
| Mobile apps (BrothersFix, Quickworx) buried or missing | You shipped to App Store + Play Store — that's senior-level proof, hidden |
| SEO → Dev career arc invisible | Your SEO background is a **moat** — it makes you the dev who builds sites that rank |
| No services page, no pricing signals | Visitors don't know what to hire you for or how to start |
| No social proof / testimonials | Trust collapses to zero on first visit |
| Likely no `llms.txt`, no schema markup | AI engines (ChatGPT, Perplexity) can't cite you when someone asks for a dev |

**Fix:** Every problem above maps to a section in this plan.

---

## 2. Strategic Positioning

Before pixels, lock the story. Everything cascades from this.

### 2.1 One-Sentence Positioning

> **Muhammad Asad Iqbal — I build mobile apps and high-performance websites that ship to stores, rank on Google, and convert. Associate Software Engineer with an SEO background, based in Pakistan, working with clients worldwide.**

Why this works:
- "Ship to stores" = proof (BrothersFix + Quickworx on App Store & Play Store)
- "Rank on Google" = your SEO origin story is now a competitive advantage, not baggage
- "Convert" = client-language, not dev-language
- Geography stated = transparency, doesn't apologize for it

### 2.2 The Three Audiences

| Audience | What they want | Where they enter | Where they exit |
|---|---|---|---|
| **Recruiters / hiring managers** | Proof of seniority, clean code, App Store deploys | Hero, Experience, Projects | Resume download, LinkedIn |
| **Direct clients (small biz, agencies)** | Can this person fix my site / build my app? | Services, Case Studies | "Book a call" button |
| **Other devs / peer network** | What's the build? Cool tech? | Now / Blog / GitHub link | Twitter, GitHub follow |

The site must serve all three **without compromising any one of them**. Architecture below does this by routing each audience to the right section in two scroll-screens.

### 2.3 Services You Sell (lock these in copy)

1. **React Native + Expo mobile app development** (iOS + Android, App Store + Play Store submission)
2. **Full-stack web app development** (Next.js, React, Node)
3. **WordPress + Bricks Builder + Elementor sites** (premium custom builds, not template stuffing)
4. **SEO-friendly development** (technical SEO baked in — Core Web Vitals, schema, semantic HTML, sitemaps) — **this is your differentiator**
5. **App Store + Play Store deployment & maintenance** (ASO, screenshots, review handling)

### 2.4 USP (Unique Selling Proposition) — say this everywhere

> "I'm a software engineer who came up through SEO. So your site doesn't just look good — it loads in <1.5s, ranks for the right keywords, and works on every device your customers actually own."

Use this verbatim in: hero subtitle, About page, LinkedIn, every cold email.

---

## 3. Design System

This is the spine. Set it once in code (CSS variables + Tailwind config), reference it everywhere.

### 3.1 Visual Direction

**Chosen direction: "Editorial Brutalism + Engineered Polish"**

A hybrid drawing from 2026's two dominant currents:
- **Editorial brutalism** (Obys, Studio Namma, fromanother.love) — oversized typography, raw grids, intentional asymmetry, monospace accents
- **Engineered polish** (Linear, Vercel, Stripe-adjacent) — pristine spacing, restrained color, micro-interactions that feel alive but never gimmicky

**Why not pure brutalism?** Brutalism alone screams "designer." Polish alone screams "template." The blend says "engineer who can also see."

### 3.2 Color Tokens

Dark-first (dark mode is default in 2026), with a fully-realized light theme. Define as CSS custom properties so theme switching is free.

```css
/* Dark theme (default) */
--bg-base: #0A0A0B;        /* near-black, not pure #000 — easier on eyes */
--bg-elevated: #131316;    /* cards, modals */
--bg-subtle: #1C1C20;      /* hover states, dividers */
--fg-primary: #FAFAFA;     /* main text — off-white */
--fg-secondary: #A1A1AA;   /* secondary text */
--fg-muted: #71717A;       /* captions, meta */
--accent: #C7F284;         /* signature lime — bold, memorable, hard to forget */
--accent-foreground: #0A0A0B;
--border: rgba(255,255,255,0.08);
--border-strong: rgba(255,255,255,0.16);

/* Light theme */
--bg-base: #FAFAF7;        /* warm white — Pantone Cloud Dancer 2026 direction */
--bg-elevated: #FFFFFF;
--bg-subtle: #F4F4F0;
--fg-primary: #0A0A0B;
--fg-secondary: #3F3F46;
--fg-muted: #71717A;
--accent: #2D6F00;         /* deeper green for light mode contrast */
--accent-foreground: #FAFAF7;
--border: rgba(0,0,0,0.08);
--border-strong: rgba(0,0,0,0.16);

/* Semantic — same in both themes */
--success: #10B981;
--warning: #F59E0B;
--danger: #EF4444;
```

**The lime `#C7F284` accent is the brand asset.** Use it sparingly — hover states, key CTA, the cursor, the underline on the current nav item. Never on body text, never on large surfaces.

### 3.3 Typography

Two-typeface system. Variable fonts (single file each, multiple weights from one download).

| Role | Font | Source | Why |
|---|---|---|---|
| Display / Headlines | **Geist** or **Inter Display** | next/font (Vercel) | Editorial weight, variable, ships with Next.js |
| Body / UI | **Inter Variable** | next/font | The web's default for a reason — perfect at every size |
| Mono / Code / Accents | **JetBrains Mono** or **Geist Mono** | next/font | Says "developer" without being cliché Terminal-green |

**Type scale (use `clamp()` for fluid sizing — kinetic typography ready):**

```css
--text-xs:   clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);  /* 12-14 */
--text-sm:   clamp(0.875rem, 0.825rem + 0.25vw, 1rem);    /* 14-16 */
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);     /* 16-18 */
--text-lg:   clamp(1.125rem, 1rem + 0.625vw, 1.5rem);     /* 18-24 */
--text-xl:   clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem);    /* 24-36 */
--text-2xl:  clamp(2rem, 1.5rem + 2.5vw, 3.5rem);         /* 32-56 */
--text-3xl:  clamp(2.5rem, 1.75rem + 3.75vw, 5rem);       /* 40-80 */
--text-hero: clamp(3rem, 2rem + 5vw, 7.5rem);             /* 48-120 — viewport-scaled hero */
```

**Type rules of engagement:**
- Hero name renders at `--text-hero` weight 700, tracking `-0.04em` (tight, editorial)
- Section headings: weight 500, tracking `-0.02em`
- Body: weight 400, line-height `1.6`, max line-length `65ch`
- Mono everywhere for: timestamps, project IDs, file paths, hover details — small doses, never as body text

### 3.4 Spacing & Grid

8px base unit. Tailwind defaults are fine — just stay strict.

**Grid:** 12-column at desktop, 6-column at tablet, 4-column at mobile. Use CSS Grid with `subgrid` for nested alignment. Implement with `container queries` so components self-adapt.

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  container-type: inline-size;
}
@container (max-width: 768px) {
  .bento-grid { grid-template-columns: repeat(4, 1fr); }
}
```

### 3.5 Radius, Shadow, Border

- Radius: `12px` for cards, `16px` for hero blocks, `9999px` for pills, `0` for brutalist accent blocks
- Shadow: **almost never** in dark mode (use border + subtle gradient). In light mode, soft and singular: `0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)`
- Borders: hairlines, `1px solid var(--border)`. Brutalist sections use `1px solid var(--fg-primary)` instead

### 3.6 The Cursor

A custom cursor is the single highest-ROI "design moment" you can build. It costs ~50 lines of code and people remember it forever.

**Spec:**
- Hidden native cursor on desktop only (`@media (hover: hover)`)
- Default state: 8px circle, lime accent color, blend-mode `difference`
- Hover state on links/buttons: scales to 40px, reveals link target text inside
- Hover state on project cards: scales to 80px, shows "VIEW CASE" in mono
- Falls back gracefully on touch devices (no custom cursor)

Library: **`@spring-keyframes/cursor`** or hand-rolled with GSAP `quickTo()`. Hand-rolled is 30 lines.

---

## 4. Tech Stack

Calibrated for 2026. Everything here is current as of June 2026 and free or open source.

### 4.1 Core

| Layer | Choice | Version | Why |
|---|---|---|---|
| Framework | **Next.js** | 15.x (App Router) | SSR for SEO, Turbopack dev, RSC, Vercel-native |
| Language | **TypeScript** | 5.6+ | Non-negotiable for a senior portfolio |
| Runtime | **React** | 19 | Concurrent rendering, `use()` hook |
| Styling | **Tailwind CSS** | v4 | New engine, `@theme` directive, native CSS layers |
| Components | **shadcn/ui** | latest | Copy-paste primitives, you own the code |
| Component polish | **Magic UI** | latest | Particle effects, animated text (cherry-pick, don't go overboard) |

### 4.2 Animation & Motion

| Tool | Use for | Notes |
|---|---|---|
| **GSAP 3.13+** | Scroll-triggered choreography, timelines, complex sequences | **100% free as of 2025** (Webflow acquired, removed paywall) |
| **`@gsap/react`** | `useGSAP` hook — proper React integration | Auto-cleanup, no memory leaks |
| **Lenis 1.3+** | Buttery momentum scroll | 3KB. Import from `lenis/react` (the old `@studio-freight/react-lenis` is retired) |
| **Framer Motion / Motion** | Component-level micro-interactions, page transitions | Faster than GSAP for simple component animations |
| **Three.js + React Three Fiber** | One hero 3D moment only | Don't sprinkle 3D everywhere — performance budget |
| **Spline** (optional) | Designer-friendly 3D if you want a scene without writing GLSL | Heavier bundle, use thoughtfully |

**Hard rule:** Pick ONE 3D moment for the whole site. Heavy WebGL on every section drains mobile batteries and tanks Core Web Vitals.

### 4.3 Content & Data

| Tool | Use |
|---|---|
| **MDX** (`@next/mdx`) | Case studies + blog posts as `.mdx` files in repo. No CMS overhead for the initial release |
| **Sanity** *(optional v2)* | If you blog frequently, add Sanity later. Don't add it now |
| **Resend** | Contact form delivery (3000 emails/month free) |
| **react-email** | Email templates for Resend |

### 4.4 Tooling

| Tool | Why |
|---|---|
| **Biome** or **ESLint + Prettier** | Formatting + linting (Biome is faster, single config) |
| **Husky + lint-staged** | Pre-commit checks |
| **TypeScript strict mode** | `"strict": true, "noUncheckedIndexedAccess": true` |
| **pnpm** | Faster, disk-efficient package manager |

### 4.5 Hosting & Infra

| Service | Use | Cost |
|---|---|---|
| **Vercel** | Hosting, edge functions, image optimization | Hobby tier free |
| **Cloudflare** | DNS, optional caching layer | Free |
| **Plausible** or **Umami** | Privacy-friendly analytics (no GDPR cookie banner needed) | Plausible $9/mo, Umami self-host free |
| **Sentry** | Error tracking | Free dev tier |

**Don't use:** Google Analytics (cookie banner liability), Wix-style builders (the whole point is to demonstrate engineering).

---

## 5. Information Architecture

A small site, ruthlessly organized. Each route earns its existence.

```
/                    → Home (everything-in-one-scroll landing)
/work                → Work index (all case studies, filterable)
/work/[slug]         → Case study (deep dive on one project)
/services            → Services page (what you sell + how to start)
/about               → About (story, photo, values, timeline)
/blog                → Blog index (optional, planned later)
/blog/[slug]         → Blog post (MDX)
/now                 → Now page (Derek Sivers tradition: current focus, builds trust)
/contact             → Dedicated contact (form + email + booking link)
/uses                → "What I use" — gear, tools, editor setup (devs love this, drives backlinks)
/llms.txt            → AI engine readability layer (file-based, no UI)
/sitemap.xml         → Auto-generated
/robots.txt          → AI-friendly directives
```

### 5.1 Navigation

**Desktop:** Floating pill nav, top-right. Items: `Work / Services / About / Blog / Contact`. Active item underlined in accent color. Hover: subtle scale + accent fill.

**Mobile:** Hamburger → full-screen overlay menu with oversized type, stagger-animated. No links smaller than 32px tap target.

**Always visible:**
- Top-left: Wordmark "Asad Iqbal" (mono, weight 500). Click → home.
- Top-right: Theme toggle (sun/moon icon — `lucide-react`), CTA button "Hire Me" → `/contact`.

---

## 6. Page-by-Page Specification

The spec for each route. Build top to bottom, page by page.

### 6.1 Home — `/`

The most important page. Five sections, one continuous scroll, hard cap at ~3500px height on desktop.

#### Section 1: Hero (100vh)

**Layout:** Left-aligned, asymmetric.

**Content:**
```
Top eyebrow:    "ASSOCIATE SOFTWARE ENGINEER · KARACHI, PAKISTAN"
                (mono, 12px, accent color, letter-spacing 0.2em)

Headline (h1):  Hi, I'm Asad.
                I ship mobile apps,
                Build sites that rank.

Subhead (p):    Software engineer with an SEO background.
                React Native · Next.js · WordPress.
                Apps live on App Store & Play Store.

CTA row:        [ Hire me →  ]   [ See case studies ↓ ]
                (primary)         (ghost button)

Bottom row:     ─── scroll to explore   ↓   (mono, animated arrow)
```

**Motion:**
- On load: each word of headline stagger-reveals with `clipPath` mask, 60ms apart, ease `power3.out`
- Scroll: headline scales down + opacity to 0.4, hero pins for 1 viewport before unsticking (GSAP ScrollTrigger pin)
- Bottom arrow: continuous gentle bob (CSS keyframe, 2s loop)
- Background: a single very-subtle moving gradient (CSS `background-position` animation, 30s loop) or one 3D scene — pick one, not both

**3D option (if you commit to it here):** A slowly rotating wireframe geometric primitive (icosahedron or torus) in the right third of the screen, lime wireframe on dark, drifts with mouse parallax. Three.js + R3F. ~80 lines of code.

#### Section 2: Marquee Strip (40vh)

A horizontally scrolling, oversized type strip. The trick that makes portfolios feel "alive."

**Content (loops):**
> `REACT NATIVE  •  EXPO  •  NEXT.JS  •  TYPESCRIPT  •  WORDPRESS  •  BRICKS  •  ELEMENTOR  •  TAILWIND  •  NODE.JS  •  SEO  •  TECHNICAL SEO  •  CORE WEB VITALS  •  APP STORE  •  PLAY STORE  •  `

**Style:** Type at `clamp(4rem, 12vw, 10rem)`, weight 600, stroke-only (`-webkit-text-stroke: 1px var(--fg-primary); color: transparent;`). Every 3rd item is filled in accent color.

**Motion:** Pure CSS `@keyframes translateX`, infinite, 40s. Pauses on hover.

#### Section 3: Selected Work (Bento Grid, ~120vh)

The visual showpiece. Bento grid of 4-6 projects, asymmetric.

**Grid (desktop):**

```
┌──────────────────────────┬─────────────┐
│                          │  BrothersFix│
│   Quickworx (featured)   │   App Store │
│   (2 cols × 2 rows)      │   3-star avg│
│                          │             │
├─────────────┬────────────┼─────────────┤
│  WP Case 1  │  WP Case 2 │             │
│             │            │  See all →  │
└─────────────┴────────────┴─────────────┘
```

**Each tile:**
- Large preview (device mockup for apps, browser frame for sites)
- Project name (display font, h3)
- One-line outcome ("Live on App Store + Play Store · 4.6★ avg")
- Tech tag row (mono, accent on hover)
- "VIEW CASE" link → `/work/[slug]`

**Motion:**
- On enter viewport: tiles fade up + scale from 0.95 → 1, stagger 80ms
- Hover: tile scales to 1.02, preview image scales to 1.05 (inner), border lights to accent
- Click: page transition with shared element (Framer Motion `layoutId`)

#### Section 4: Services Quick-View (~80vh)

3-card row, each linking to deeper section on `/services`.

```
┌──────────────┬──────────────┬──────────────┐
│  📱 MOBILE   │  🌐 WEB      │  ⚙️ WORDPRESS│
│              │              │              │
│ React Native │ Next.js,     │ Bricks,      │
│ + Expo.      │ React, Node. │ Elementor.   │
│ Ship to App  │ Sites that   │ Custom builds│
│ Store + Play │ load <1.5s   │ that don't   │
│ Store.       │ and convert. │ look default.│
│              │              │              │
│ Learn more → │ Learn more → │ Learn more → │
└──────────────┴──────────────┴──────────────┘
```

Each card: subtle border, hover lifts (`translateY(-4px)`), accent border glow.

#### Section 5: Social Proof / Testimonials (~60vh)

3-5 testimonials. **If you don't have testimonials yet, get them this week** — ask employers, clients, mentors. A portfolio without testimonials looks like a junior portfolio.

**Layout:** Horizontal scroll snap on mobile, 3-up grid on desktop. Each card: pull quote (italic, larger), name + role + photo.

#### Section 6: CTA Footer (~50vh)

Big, confident closing CTA.

```
        Got a project? Let's talk.

        [ Book a 15-min call ]   asad@yourdomain.com

        Karachi · Pakistan · Available worldwide
```

Background: subtle moving gradient or grain texture. Email is `mailto:` link with copy-to-clipboard tooltip.

---

### 6.2 Work Index — `/work`

Filterable archive of all case studies.

- Header: "Selected Work — N projects."
- Filter chips: `All · Mobile · Web · WordPress · SEO`
- Grid: same bento style as home, but all projects
- Each card: same hover/transition behavior as home
- Bottom: "Don't see what you need? [Get in touch →]"

### 6.3 Case Study — `/work/[slug]`

The conversion engine. **Every case study follows the same 5-part framework:**

1. **Context** — Who was the client, what did they need, what was the constraint
2. **Approach** — How you decided to tackle it (your thinking, not just your output)
3. **Build** — Technical breakdown, key decisions, screenshots
4. **Outcome** — Metrics. Numbers. Star ratings. Load times. Conversion lifts.
5. **Reflection** — What you'd do differently next time (this signals seniority)

**Required case studies for launch (3 minimum):**

1. **BrothersFix** — Mobile app on App Store + Play Store
   - Stack: React Native, Expo, EAS Build, Firebase
   - Outcome: Live in both stores, [N installs, X.X★ avg rating]
   - Walk through: booking flow, technician scheduling, deep links, push notifications
2. **Quickworx** — Second mobile app
   - Similar structure to above
   - Highlight: differences in problem domain
3. **WordPress build (your best Bricks or Elementor project)**
   - Pick the one with the best visuals and any metrics you have
   - Stack: WP + Bricks/Elementor + custom CSS + plugins you used
   - Outcome: Page speed, traffic if available, what client said

**Template structure (MDX):**

```mdx
---
title: BrothersFix — On-demand appliance repair, in your pocket
slug: brothersfix
client: BrothersFix
role: Mobile Engineer
period: 2024 – Present
stack: [React Native, Expo, Firebase, Stripe, OneSignal]
links:
  appstore: https://...
  playstore: https://...
  website: https://...
cover: /case-studies/brothersfix/cover.png
metrics:
  - label: Live in
    value: 2 stores
  - label: Avg rating
    value: 4.6 ★
  - label: Cold-start time
    value: <2s
---

## Context

(1-2 paragraphs)

## Approach

(1-2 paragraphs + decision callouts)

## Build

(Multiple subsections with screenshots, code snippets, architecture diagrams)

## Outcome

(Metrics block + client quote if available)

## What I'd do differently

(1 paragraph — signals seniority)
```

### 6.4 Services — `/services`

Sales page. Treat it like a landing page.

**Sections:**
1. **Hero** — "Three things I do well." Headline + sub.
2. **Service block × 3:** Mobile / Web / WordPress
   - Each block: what's included, deliverables, timeline expectation, "starts from $X" (optional but recommended — qualifies leads)
3. **Process** — A 4-step visual: Discovery → Design + Spec → Build + Deploy → Support
4. **FAQ** — 6-8 questions. Use accordions. Include: "Do you work with international clients?", "How do you handle App Store rejections?", "Can you take over an existing project?"
5. **CTA** — Calendly/Cal.com embed for direct booking

### 6.5 About — `/about`

The personal page. Where buyers decide if they like you.

**Sections:**
1. **Photo + intro** — Real photo (no avatars). One paragraph: where you grew up professionally (SEO → developer trajectory)
2. **Timeline** — Vertical, with dates. Allure (SEO Graduate Trainee) → first dev role → current Associate Software Engineer. Each entry: company, role, dates, 1-line "what I did"
3. **Stack** — A visual grid of every tool you use, grouped by category
4. **Values / how I work** — 3-5 short statements. "I write tests." "I document as I build." "I prefer boring tech."
5. **Outside of work** — One short paragraph. Humanizes you.
6. **Currently** — Mini "Now" snippet linking to `/now`

### 6.6 Blog — `/blog`

**Ship v2 unless you already have 3 posts ready.** A single-post blog is worse than no blog.

When you do ship: MDX-based, syntax highlighting via Shiki, RSS feed, OG image generation via `@vercel/og`.

**Topic ideas (write these — they'll rank):**
- "How I shipped my first React Native app to both stores in 6 weeks"
- "Bricks Builder vs Elementor in 2026: a developer's honest take"
- "Technical SEO for React/Next.js sites: a checklist"
- "From SEO to software engineer: what each role taught me about the other"

### 6.7 Now — `/now`

One page. What you're working on right now. Update monthly. Devs respect this format — it builds trust.

### 6.8 Uses — `/uses`

Editor, OS, terminal, fonts, keyboard, mouse, monitor, headphones, browser extensions, deploys-to, hosts-with, books-currently-reading. Drives unexpected SEO traffic and links.

### 6.9 Contact — `/contact`

- Left column: Form (name, email, project type, budget range, message). Sends via Resend. Anti-spam: honeypot + simple math captcha (avoid reCAPTCHA — privacy + UX cost).
- Right column: Email + Calendly link + LinkedIn + GitHub + WhatsApp (if you want direct DM business)
- Success state: Don't redirect — confirm inline with a confetti moment or kinetic "Got it. Talk soon."

---

## 7. Animation & Motion System

A defined motion vocabulary makes a site feel intentional. Random animations make it feel templated.

### 7.1 The Five Motion Primitives

Every animation on the site reduces to one of these five. Build them once, reuse everywhere.

| Primitive | Use case | Implementation |
|---|---|---|
| **Reveal** | Element entering viewport for the first time | `clipPath` from `inset(0 100% 0 0)` to `inset(0 0 0 0)`, 0.8s `power3.out` |
| **Stagger** | Lists, nav items, marquee items | 60-100ms delay between siblings, same easing |
| **Pin + scrub** | Hero, big section transitions | GSAP `ScrollTrigger` with `pin: true, scrub: 1` |
| **Magnetic hover** | Primary CTAs, project cards | Cursor pulls element 8px max toward it, springs back |
| **Page transition** | Route changes | Curtain wipe in accent color, ~600ms; uses Next.js View Transitions API where supported, GSAP fallback |

### 7.2 The Rules

1. **Every animation must have a purpose.** Decorative motion is banned.
2. **Respect `prefers-reduced-motion`.** Wrap all motion in:
   ```js
   const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
   if (reduced) gsap.set(target, { opacity: 1 }); else animateNormal();
   ```
3. **No animation longer than 1s** unless it's an idle-loop background.
4. **No animation on mobile that doesn't also work on a $200 Android.** Test on real low-end devices.
5. **All scroll-driven animations must use `scrub`, not duration.** Otherwise scroll jank.

### 7.3 Page Transitions

Use Next.js 15's built-in View Transitions API for in-app navigation. Fallback to a GSAP-driven overlay curtain for browsers without support.

### 7.4 Kinetic Typography Moments

Two places only:
1. Hero headline — `clipPath` reveal on load
2. Section headings — characters split via `SplitText`, stagger up on viewport enter

Don't add more. Kinetic type everywhere becomes noise.

---

## 8. Content Blueprint

What to write. Tone, voice, exact copy starters.

### 8.1 Voice & Tone

- **Confident but not arrogant.** "I shipped two apps to both stores" not "I'm the best mobile dev in Pakistan."
- **Specific over general.** "Cold-start in 1.8s" not "fast performance."
- **First person, present tense** for current work; past tense for shipped work.
- **No hedging.** Cut "kinda," "sort of," "might be able to."
- **No buzzwords without proof.** "Full-stack" only if backed by a server-rendered project. "AI-powered" only if you actually integrated an LLM.

### 8.2 The Words That Must Appear (for SEO + AEO)

These should be in real sentences across the site, not stuffed:

- "React Native developer"
- "Expo developer"
- "Next.js developer"
- "WordPress developer Bricks Builder"
- "Elementor expert"
- "App Store deployment"
- "Play Store deployment"
- "Karachi software engineer" / "Pakistan software engineer" / "remote software engineer Pakistan"
- "Technical SEO developer"
- "Mobile app developer hire"

### 8.3 Hero Subheads to Test

Pick one for launch, A/B later:

1. "Software engineer with an SEO background. I build mobile apps that ship and websites that rank."
2. "I help small businesses launch apps and websites that actually convert."
3. "Mobile + web engineer in Karachi. Two apps live on the App Store and Play Store. Available worldwide."

### 8.4 Case Study Copy Starters

```
Context: "[Client] needed [outcome] in [constraint]. The existing
[thing] was [problem]."

Approach: "I started by [first move]. The team had been [common
mistake]. Instead, I [your insight]."

Outcome: "After [N weeks], the [app/site] [metric]. [Client] said
'[testimonial]'."
```

---

## 9. Project Structure

```
asad-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Vercel deploy on main
├── public/
│   ├── fonts/                       # If self-hosting, else use next/font
│   ├── case-studies/                # Project screenshots + cover images
│   ├── og/                          # Open Graph images
│   └── llms.txt                     # AI engine readability
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── page.tsx             # Home
│   │   │   ├── about/page.tsx
│   │   │   ├── services/page.tsx
│   │   │   ├── now/page.tsx
│   │   │   ├── uses/page.tsx
│   │   │   └── contact/page.tsx
│   │   ├── work/
│   │   │   ├── page.tsx             # Work index
│   │   │   └── [slug]/page.tsx      # Case study
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── api/
│   │   │   └── contact/route.ts     # Resend handler
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── opengraph-image.tsx      # Dynamic OG
│   ├── components/
│   │   ├── ui/                      # shadcn primitives
│   │   ├── motion/                  # Reveal, Stagger, Magnetic wrappers
│   │   ├── sections/                # HeroSection, BentoGrid, etc.
│   │   ├── three/                   # 3D scene components
│   │   └── layout/                  # Nav, Footer, ThemeToggle
│   ├── content/
│   │   ├── case-studies/            # MDX files
│   │   │   ├── brothersfix.mdx
│   │   │   ├── quickworx.mdx
│   │   │   └── ...
│   │   ├── blog/                    # MDX files
│   │   └── data/
│   │       ├── services.ts
│   │       ├── experience.ts
│   │       └── stack.ts
│   ├── lib/
│   │   ├── gsap.ts                  # ScrollTrigger registration
│   │   ├── lenis.ts                 # Lenis provider
│   │   ├── mdx.ts                   # MDX helpers
│   │   ├── og.ts                    # OG image generation
│   │   └── seo.ts                   # Metadata helpers
│   ├── styles/
│   │   └── tokens.css               # CSS custom properties
│   └── types/
│       └── content.ts
├── .env.local
├── .env.example
├── biome.json
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 10. Performance Budget

Non-negotiable targets. Measure with Lighthouse + WebPageTest on mid-range Android over throttled 4G.

| Metric | Target | Hard ceiling |
|---|---|---|
| **LCP** (Largest Contentful Paint) | <1.5s | <2.5s |
| **INP** (Interaction to Next Paint) | <100ms | <200ms |
| **CLS** (Cumulative Layout Shift) | <0.05 | <0.1 |
| **FCP** (First Contentful Paint) | <1.0s | <1.8s |
| **TTFB** | <500ms | <800ms |
| **Total bundle (initial JS)** | <120KB gzipped | <180KB |
| **Image total per page** | <500KB | <1MB |
| **Lighthouse Performance** | 95+ | 90+ |
| **Lighthouse SEO** | 100 | 100 |
| **Lighthouse Accessibility** | 100 | 95+ |

### 10.1 How to Hit These

- **Images:** `next/image` everywhere. AVIF + WebP, with proper `sizes` attribute. No raw `<img>`.
- **Fonts:** `next/font` with `display: 'swap'`, subset to Latin only (unless you need Urdu).
- **3D:** Dynamic import the Three.js scene (`dynamic(() => import('./Scene'), { ssr: false })`). Don't ship it to mobile if the device pixel ratio + window width suggest low-end:
  ```ts
  const isLowEnd = window.devicePixelRatio < 2 && window.innerWidth < 768;
  ```
- **Animations:** Pause GSAP timelines when off-screen (`ScrollTrigger.create({ trigger, onLeave: () => tl.pause() })`).
- **Third-party:** None on initial page load. Plausible/Umami loads via the standard `<Script strategy="afterInteractive" />`.

---

## 11. SEO + AEO (AI Engine Optimization)

In 2026 you're optimizing for two things: Google AND ChatGPT/Perplexity/Claude/etc. The second one is new and most portfolios skip it. **Don't.**

### 11.1 Technical SEO (you know this — execute it)

- Server-rendered (Next.js App Router does this by default for static pages)
- One H1 per page
- Semantic HTML: `<main>`, `<article>`, `<section>`, `<nav>`, `<aside>`
- Meta description per page (155 chars, action-oriented)
- Open Graph + Twitter Card per page, dynamic OG images via `@vercel/og`
- Canonical URLs
- `sitemap.xml` (auto-generated by Next.js `sitemap.ts`)
- `robots.txt` (allow all, point to sitemap)
- Schema.org JSON-LD: `Person`, `WebSite`, `BreadcrumbList`, and `Article` on blog/case studies. Use `next-seo` or hand-write — both fine.

### 11.2 The AEO Layer (new in 2026)

Add these files in `/public`:

**`/public/llms.txt`** — Markdown file describing your site for LLM crawlers:

```
# Muhammad Asad Iqbal

> Associate Software Engineer based in Karachi, Pakistan, specializing
> in React Native mobile apps, Next.js web development, and WordPress
> sites built with Bricks Builder and Elementor.

## About

Asad started his career as an SEO Graduate Trainee at Allure, transitioned
to Trainee Software Developer, and currently works as an Associate Software
Engineer. His SEO background informs every web project — sites are built
to rank as well as look good.

## Services

- React Native + Expo mobile app development (iOS + Android)
- App Store and Play Store submission and maintenance
- Next.js / React full-stack web development
- WordPress development with Bricks Builder and Elementor
- Technical SEO for React/Next.js sites

## Notable Projects

- BrothersFix — On-demand appliance repair mobile app, live on App
  Store and Play Store
- Quickworx — Mobile app, live on App Store and Play Store

## Contact

- Email: [your-email]
- LinkedIn: https://www.linkedin.com/in/muhammad-asad-iqbal-515ab8247/
- Portfolio: https://[your-domain]
```

**Why this matters:** ChatGPT, Perplexity, Claude, and other AI engines increasingly use `llms.txt` to summarize sites. Without it, when someone asks "find me a React Native developer in Pakistan," an AI assistant might not be able to reliably surface you. With it, you're quotable.

### 11.3 Backlink Strategy (post-launch)

- Submit `/uses` page to `https://uses.tech/` (will index)
- Submit portfolio to: `awwwards.com`, `httpster.net`, `siteinspire.com`, `godly.website`
- Write 1 technical Dev.to article per month linking back
- Star + contribute to open-source projects you use; many have "built with" pages

---

## 12. Accessibility

WCAG 2.2 AA minimum. The European Accessibility Act is live in 2025, and AI buyers care.

### 12.1 Checklist

- All interactive elements keyboard navigable (`tab`, `enter`, `esc`)
- Visible focus states with 3px outline in accent color
- Color contrast 4.5:1 for body, 3:1 for large text — verify in both themes
- `prefers-reduced-motion` respected everywhere
- All images have meaningful alt text (decorative ones `alt=""`)
- Form labels properly associated
- Skip-to-content link at top of page
- Live region (`aria-live`) for form success / error states
- Screen reader test with VoiceOver (Mac) and NVDA (Windows)
- Off-black `#0A0A0B` and off-white `#FAFAFA` instead of pure `#000`/`#FFF` (reduces visual vibration for astigmatism)

---

## 13. Implementation Phases (week-by-week)

Calibrated for full-time effort. Halve speed for part-time.

### Week 1 — Foundation

**Goal:** A deployable skeleton with design system locked.

- Day 1: Project init. `pnpm create next-app`, TS strict, Tailwind v4, Biome.
- Day 2: Set up CSS tokens (`tokens.css`), Tailwind theme extension, theme toggle (light/dark) working with `next-themes`.
- Day 3: Install shadcn/ui base, Magic UI selectively, set up font loading with `next/font`.
- Day 4: Lenis + GSAP integration. Build the 5 motion primitives (Reveal, Stagger, Pin, Magnetic, Page Transition).
- Day 5: Custom cursor. Navigation. Footer. Layout shell.
- Day 6: Deploy to Vercel under a staging subdomain. Set up Plausible/Umami.
- Day 7: Write the README. Decide on final color accent. Take a break.

### Week 2 — Home + Work

- Day 8-9: Hero section (text, motion, optional 3D scene).
- Day 10: Marquee strip. Bento grid for selected work.
- Day 11: Services quick-view section. Social proof carousel. CTA footer.
- Day 12-13: `/work` index page. Case study template + `/work/[slug]` route.
- Day 14: Write BrothersFix case study in MDX. Polish + push.

### Week 3 — Pages + Content

- Day 15: Quickworx case study. One WordPress case study.
- Day 16: `/services` full page.
- Day 17: `/about` (story + timeline + stack grid).
- Day 18: `/contact` (form + Resend integration + success state).
- Day 19: `/now` + `/uses` (low-effort, high-trust pages).
- Day 20-21: Get 3-5 testimonials. Take a real headshot. Capture screenshots/recordings of your apps.

### Week 4 — Polish + Ship

- Day 22: SEO — metadata on every page, sitemap, robots.txt, schema JSON-LD.
- Day 23: AEO — write `llms.txt`. Dynamic OG images via `@vercel/og`.
- Day 24: Performance pass — Lighthouse audit, image optimization, dynamic imports, code splitting.
- Day 25: Accessibility pass — keyboard nav, focus states, contrast, screen reader test.
- Day 26: Mobile QA on real devices. iOS Safari, Android Chrome, low-end Android.
- Day 27: Cross-browser QA. Firefox, Safari, Edge.
- Day 28: **Ship.** Buy domain if not already. Point DNS. Submit to Awwwards, Dev.to "Show", Hacker News (Show HN), Reddit r/webdev. Update LinkedIn link. Email the previous link audience.

---

## 14. Code Patterns & Snippets

Concrete patterns the implementer can lift directly. Targets Next.js 15 App Router + GSAP 3.13 + Lenis 1.3.

### 14.1 Lenis Provider (app-wide smooth scroll)

```tsx
// src/components/providers/lenis-provider.tsx
'use client';
import { ReactLenis } from 'lenis/react';
import { type ReactNode } from 'react';

export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
```

### 14.2 GSAP Setup with ScrollTrigger + Lenis Sync

```ts
// src/lib/gsap.ts
'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function syncLenisWithScrollTrigger(lenis: Lenis) {
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

export { gsap, ScrollTrigger };
```

### 14.3 Reveal Component (one of the five primitives)

```tsx
// src/components/motion/reveal.tsx
'use client';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { useRef, type ReactNode } from 'react';

export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      gsap.set(ref.current, { opacity: 1, clipPath: 'inset(0 0 0 0)' });
      return;
    }
    gsap.fromTo(
      ref.current,
      { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
      {
        opacity: 1,
        clipPath: 'inset(0 0 0 0)',
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, { dependencies: [delay] });

  return <Tag ref={ref as never}>{children}</Tag>;
}
```

### 14.4 Magnetic Button

```tsx
// src/components/motion/magnetic.tsx
'use client';
import { gsap } from '@/lib/gsap';
import { useRef, type ReactNode } from 'react';

export function Magnetic({ children, strength = 0.4 }: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * strength;
    const y = (e.clientY - (top + height / 2)) * strength;
    gsap.to(ref.current, { x, y, duration: 0.5, ease: 'power3.out' });
  }

  function handleLeave() {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block will-change-transform"
    >
      {children}
    </div>
  );
}
```

### 14.5 Contact Form Handler (Resend)

```ts
// src/app/api/contact/route.ts
import { Resend } from 'resend';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, projectType, budget, message, honeypot } = body;

  // Spam check
  if (honeypot) return Response.json({ ok: true }); // silently drop bots

  if (!name || !email || !message) {
    return Response.json({ ok: false, error: 'Missing fields' }, { status: 400 });
  }

  await resend.emails.send({
    from: 'Portfolio <hello@yourdomain.com>',
    to: ['your-email@gmail.com'],
    replyTo: email,
    subject: `New inquiry: ${projectType ?? 'General'} — ${name}`,
    text: `From: ${name} <${email}>\nProject: ${projectType}\nBudget: ${budget}\n\n${message}`,
  });

  return Response.json({ ok: true });
}
```

### 14.6 Tailwind v4 Theme Setup

```css
/* src/app/globals.css */
@import 'tailwindcss';
@import './styles/tokens.css';

@theme {
  --color-bg-base: var(--bg-base);
  --color-bg-elevated: var(--bg-elevated);
  --color-fg-primary: var(--fg-primary);
  --color-fg-secondary: var(--fg-secondary);
  --color-accent: var(--accent);
  --font-display: var(--font-geist);
  --font-body: var(--font-inter);
  --font-mono: var(--font-geist-mono);
}

html, body { background: var(--bg-base); color: var(--fg-primary); }
```

---

## 15. Launch Checklist

The day-of-launch ritual. Don't skip any.

### Technical
- [ ] Lighthouse: Performance 95+, SEO 100, Accessibility 100, Best Practices 100
- [ ] All routes return 200, no 404s on internal links
- [ ] Sitemap valid, submitted to Google Search Console + Bing Webmaster Tools
- [ ] `llms.txt` live at `/llms.txt`
- [ ] OG images render on Twitter, LinkedIn, Slack, WhatsApp link preview
- [ ] Contact form delivers to inbox (test with real submission)
- [ ] 404 page exists and is on-brand
- [ ] Both light and dark themes work in every browser
- [ ] No console errors on production build
- [ ] HTTPS, HSTS, security headers set in `next.config.ts`
- [ ] Analytics firing (verify in real-time view)

### Content
- [ ] All meta titles + descriptions written
- [ ] At least 3 case studies live with metrics
- [ ] At least 3 testimonials live
- [ ] Real photo on About page
- [ ] Current resume/CV uploaded and linked
- [ ] LinkedIn profile updated with new portfolio URL
- [ ] GitHub README updated with new portfolio URL

### Distribution (launch day)
- [ ] Tweet/post on X with screenshots
- [ ] LinkedIn post — short, what you built, link
- [ ] Show HN (Hacker News): "Show HN: My portfolio rebuild — Next.js + GSAP"
- [ ] Dev.to article "Why I rebuilt my portfolio and what I learned"
- [ ] Submit to Awwwards, Httpster, SiteInspire, Godly
- [ ] Personal message to last 10 clients/contacts: "Just launched, take a look"
- [ ] Update email signature with new URL

---

## 16. Post-Launch Growth Loop

A portfolio isn't done at launch. The compounding starts after.

### Monthly cadence (1-2 hours/month)

- Update `/now` page with current focus
- Add 1 new case study or update an existing one with new metrics
- Publish 1 blog post (technical, opinion, or process)
- Re-run Lighthouse + fix any regressions
- Check Search Console for impressions/clicks, optimize underperforming pages

### Quarterly

- Get 1-2 new testimonials from recent clients/colleagues
- Refresh OG images and hero copy if positioning has shifted
- Audit broken links + outdated stack listings

### Yearly

- Major design refresh (the field moves fast, so should you)
- Check what's now considered dated (in 2026 it was: parallax, stock photos, generic dark themes — by 2027 something else will be)

---

## Appendix A — Inspiration Reference Set

When implementing, refer back to these for specific moments. Each linked because they do one thing exceptionally well.

| Site | Steal this |
|---|---|
| brittanychiang.com | Clean dev portfolio fundamentals, tabbed experience section |
| adcker (Awwwards SOTM Apr 2026) | Bento + brutalism blend |
| obys.agency | Editorial typography, oversized type |
| studio-namma (Awwwards SOTD May 2026) | Modular grid, restrained motion |
| linear.app | Polish, micro-interactions, restraint |
| vercel.com | Type hierarchy, dark theme that doesn't look default |
| basement.studio | Custom cursor done right, page transitions |
| keita-yamada.com | WebGL background that doesn't kill performance |
| dennissnellenberg.com | Project transitions with shared element animation |
| paco.me | Personal voice in About page |

**Do not** copy any of these directly. Use them to calibrate the bar.

---

## Appendix B — Common Pitfalls to Avoid

1. **Adding 3D everywhere.** One scene, then stop.
2. **Stuffing the home page.** If it scrolls past 4 viewports, cut something.
3. **Using stock photos.** Use your own screenshots, your own face, or nothing.
4. **Generic project cards.** Every project needs a case study or it doesn't ship.
5. **Hiding the contact CTA.** "Hire Me" must be visible from the first viewport.
6. **Vague tech listings.** "React, Node, MongoDB" tells me nothing. "React + Next.js 15 + Postgres + Prisma" tells me you've shipped.
7. **Animating for the sake of it.** Motion budget: every animation must justify its existence in a 1-sentence design rationale.
8. **No real metrics.** "Helped clients grow" is meaningless. "Reduced LCP from 4.2s to 1.3s on a 12-page WordPress build" is gold.
9. **Skipping the SEO + AEO layer.** This is your wedge. You came from SEO. Use it.
10. **Launching with no testimonials.** Cold launch = cold leads. Get 3 testimonials first.

---

## Appendix C — Hand-off Brief (if you delegate to a builder)

If you give this plan to another developer (or to me) to build, the brief is:

> Build the portfolio described in `PORTFOLIO_IMPLEMENTATION_PLAN.md`. Stack is Next.js 15 + TypeScript + Tailwind v4 + GSAP + Lenis + Three.js (one scene only). Follow the design system in Section 3 exactly. Implement the 5 motion primitives in Section 7 first, then compose pages from them. Build in the order specified in Section 13. The 3 case studies in Section 6.3 are non-negotiable for launch — content provided separately. Performance budget in Section 10 is the success criterion. Ship to Vercel on `asad-iqbal.dev` (or chosen domain). Open the PR when Lighthouse hits all targets in Section 15.

---

**Last updated:** June 2026
**Plan version:** 1.0
**Next review:** After Week 2 milestone

> "A portfolio that ranks, ships, and converts. Built in 4 weeks. Worth 4 years of compounding."
