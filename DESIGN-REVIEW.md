# Portfolio Design Review

**Date:** 2026-09-18
**Method:** Two-pass automated design/UX review (critique, audit, harden, clarify, polish), run against the codebase at `e:\portfolio` using a design-audit methodology ("Impeccable") plus manual code-level analysis. No browser automation was available in this environment — all findings and fixes came from reading the actual rendered JSX/CSS/TS logic (component tree, className usage, media queries, hand-computed WCAG contrast ratios from the hex values in `tokens.css`), not from visual/screenshot verification. Anything that genuinely required seeing the rendered page was flagged instead of guessed at.

Scope: only code reachable from `src/app/**/page.tsx` and `layout.tsx` was scored. A significant amount of dead code from an earlier "editorial homepage" design (unused components and CSS blocks) was found and excluded from scoring since it has zero effect on what visitors see — see [Dead Code](#dead-code-found-not-fixed) below.

---

## Scores

| Report | Score | Band |
|---|---|---|
| **Critique** — Nielsen's 10 Usability Heuristics | **28/36 applicable** (77.8%) | Good |
| **Audit** — 5-dimension technical audit | **12/20** | Acceptable |

(Critique heuristic #10 "Help and Documentation" was scored N/A — genuinely inapplicable to a portfolio browsing experience with no multi-step task. Heuristic #7 "Flexibility and Efficiency" was scored, not waived, because a concrete gap exists — see Priority Issues.)

### Critique: Nielsen heuristics

| # | Heuristic | Score /4 | Rationale |
|---|---|---|---|
| 1 | Visibility of system status | 3 | Contact form has explicit idle/submitting/success/error states with `aria-live`; submit button relabels to "Sending…" and disables. Nav shows scroll state and active-route underline. Stack accordion uses `aria-expanded`. |
| 2 | Match between system and real world | 4 | Copy is plain and concrete, not marketing fluff. Project scope is stated honestly — the site's strongest heuristic. |
| 3 | User control and freedom | 3 | Skip-to-content link, "All work" back-link on case studies, footer "Back to top", 404 page gives three explicit recovery paths. No breadcrumb trail beyond the single back-link on deep case-study pages. |
| 4 | Consistency and standards | 3 | Nav/footer consistent across all pages, but the button/link system is fragmented: the one shared `ButtonLink` component is used in exactly one place site-wide; every other primary action is a bespoke one-off style. |
| 5 | Error prevention | 3 | Contact form has client-side HTML5 validation, honeypot anti-spam, and server-side re-validation. No proactive inline validation feedback (relies on native browser validation only). |
| 6 | Recognition rather than recall | 3 | Categories, stack chips, and scope labels are visible directly on every project card. |
| 7 | Flexibility and efficiency of use | 1 | A full category-filter UI (Mobile/Web/All) exists in the codebase but is dead — the live `/work` page is one unfiltered scroll of 11 projects. A real, already-built feature sits unused. |
| 8 | Aesthetic and minimalist design | 4 | Confined palette, fluid `clamp()` type scale, a genuinely custom three-screen "visual stack" presentation per project with per-project accent tones — bespoke, not template filler. |
| 9 | Error recovery | 4 | Contact form errors are specific and actionable, always with a hard-coded human-email fallback. 404 page is warm and gives next steps. |
| 10 | Help and documentation | N/A | No multi-step task in a portfolio browsing experience needs in-app help. |

**Design specificity verdict:** Not an interchangeable dev-portfolio template. The case-study copy is unusually honest about scope (e.g. "This was a solid feature-level contribution — not ownership of the whole iYurek product, and I'm not going to pretend otherwise"), screen galleries are labeled by provenance, and the three-screen visual-stack system is custom. Where it slips toward generic: the hero H1, the four-step process grid, and the services page structure all read as familiar freelance-developer patterns — competent but not distinctive.

**Overall impression:** A content-honest, visually considered portfolio that was let down by leftover construction debris (a second unused project-listing system, several generations of superseded CSS, and one real contrast bug that happened to land on the site's most important buttons). With those fixed, it reads as genuinely above average for the category.

**What's working:**
1. Scope honesty as a differentiator — nearly every non-owned project states what was and wasn't the author's work.
2. Reduced-motion discipline — `prefersReducedMotion()` is checked *before* setting up animations everywhere GSAP is touched, not just masked with CSS after the fact.
3. The contact form's failure path always leaves the visitor a way forward (never a dead-end "something went wrong").

### Audit: technical dimensions

| Dimension | Score /4 | Key finding |
|---|---|---|
| Accessibility | 2 | Strong ARIA/semantic foundation undermined by a systemic contrast bug on the skip link and both primary CTAs (fixed this pass). |
| Performance | 3 | Disciplined reduced-motion gating, `will-change` correctly scoped, `next/image` used throughout with `sizes`. No unbounded animation loops. |
| Theming | 2 | `tokens.css` centralizes the design system, but `globals.css` bypasses it constantly with duplicated raw hex literals instead of `var()` references. |
| Responsive design | 3 | Extensive breakpoint coverage with fluid typography; no horizontal-scroll risk. Some selectors are defined twice with conflicting values across the file (works today by source order, fragile long-term). |
| Implementation integrity | 2 | The case-study content system is genuinely bespoke and well-structured, offset by a second unused project-listing implementation, an unused content file, and CSS written as accumulating patches rather than maintained rules. |

---

## Changes made — Pass 1 (critique / audit / harden / clarify / polish)

- **Fixed:** mobile hamburger menu rendered *behind* page content (`z-index: -1` → `90`) — was untappable on every phone-width screen
- **Fixed:** custom cursor dot stayed permanently visible in the corner on touch devices — now only mounts on fine-pointer, non-reduced-motion devices
- **Fixed:** `--fg-muted` token contrast (~3.7:1 → ~4.95:1) — used for captions/labels across `/work/[slug]`, `/uses`, `/about`, `not-found`, and the contact form
- **Fixed:** white captions on the orange accent background (~3.8:1) on the contact page aside and about-page "values" section — switched to a dark ink tone (~5:1+)
- **Fixed:** overlapping icon badge and CTA label on the homepage "What I build" cards (both pinned to the same corner)
- **Fixed:** touch targets below 44px on the nav toggle (hamburger) and footer social links
- **Fixed:** `will-change: transform` applied unconditionally to every product-screenshot frame instead of only the ones GSAP actually scroll-scrubs
- **Fixed:** hardcoded `© 2026` in the footer → dynamic `{new Date().getFullYear()}`
- **Fixed:** work-grid category filter had no empty state if a filter matched zero projects
- **Fixed:** added scrollbar and caret theming (previously left at raw browser defaults)
- **Removed:** a decorative tiled grid-line background pattern flagged by the anti-pattern detector as a generic "AI slop" signature (kept the intentional gradient/glow backdrop underneath it)
- Validated with `tsc --noEmit` and `next build` after each change — clean both times

## Changes made — Pass 2 (scored critique/audit + final clarify/polish sweep)

- **Fixed (P0):** `--accent-foreground` was `#ffffff` on the `--accent` orange background — contrast ≈3.77:1, failing WCAG AA. This token backed the skip-to-content link, the homepage's final "Get in touch" CTA, the contact form's submit button, and the hero intro link's hover/focus state — every one of its usages failed, on the two most conversion-critical buttons on the site. Changed to `#141414` (~4.9:1, passes AA).
- **Fixed (P2):** footer nav links (Work/Services/About/Contact) had no vertical padding and a sub-44px tap target on mobile — added `min-height: 44px; padding: .5rem 0`.
- **Fixed (P3):** the contact form's "Opportunity type" and "Budget" fields (the only two optional fields, sitting next to required Name/Email fields) had no visual or screen-reader cue marking them optional — labels now read "Opportunity type (optional)" / "Budget (optional)".
- Validated with `tsc --noEmit` and `next build` — clean, all 18 routes compiled.

---

## Known issues not fixed (need a human decision or visual check)

1. **`/work` category filter is fully built but unwired** (`work-grid.tsx` + `project-card.tsx`) — the live `/work` page uses `ProjectArchive` instead, which has no filtering. Decide: wire the filter in, or delete the unused system.
2. **CSS selectors redefined 2–3 times across `globals.css`** (`.personal-hero-title`, `.stack-grid`, `.expertise-grid`, `.process-personal-grid`, etc.) — currently correct by source-order luck; consolidating into single authoritative rules is a refactor that risks changing rendered output without a browser available to verify against.
3. **Mobile-menu icon color (`#111`) vs. link text color (`#fff`) on the same accent-red background** — passes contrast independently but the two-tone combination is a visual-judgment call that needs the rendered page to verify.
4. **`--header-glass` token exists but the original `.is-scrolled` rule still hardcodes the same value** instead of referencing it — cosmetic duplication, zero rendering difference.
5. **`siteConfig.phone` is defined but never displayed anywhere** — content/product decision (do you want a phone number public?).
6. **`/now` silently redirects to `/about`** with nothing in the nav or footer linking to it — an orphaned route; may be intentional scaffolding for a future "now page."
7. **Footer's "Designed and built by…" attribution line is hidden below 640px** — likely intentional space-saving, flagged for awareness.

### Dead code found (not fixed)

Confirmed unreferenced by any live route — excluded from scoring, zero effect on what visitors see, but real maintenance debt:

- Components: `hero.tsx`, `cta.tsx`, `faq.tsx`, `testimonials.tsx`, `services-preview.tsx`, `marquee.tsx`, `selected-work.tsx`, `work-grid.tsx`, `project-card.tsx`, `magnetic.tsx`, `stagger.tsx`
- Content: `src/content/draft-projects.ts`, and the empty `faqs`/`testimonials` exports in `src/content/data.ts`
- CSS: roughly 700+ lines across two dead blocks in `globals.css` (an early "editorial homepage" block and a later "personal pathways / shipped-work" block) whose class names match nothing in any live component

Recommend a dedicated cleanup pass to delete this once you're confident none of it is needed for a future page.
