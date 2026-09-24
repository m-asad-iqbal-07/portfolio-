---
name: Asad Iqbal Portfolio
description: Reference-led editorial identity for a mobile, web, and backend engineering portfolio.
colors:
  accent: "#f51b27"
  accent-hover: "#d91c2b"
  accent-on-dark: "#ff6255"
  accent-deep: "#b91724"
  field-bg: "#262626"
  field-border: "#595959"
  inverse-secondary: "#c8c8c8"
  success-on-dark: "#a7d6a1"
  error-on-dark: "#ffc0b5"
  error-border: "#e48b7e"
  bg-base: "#ffffff"
  bg-elevated: "#fafafa"
  bg-subtle: "#f0f0f0"
  fg-primary: "#111111"
  fg-secondary: "#55554f"
  fg-muted: "#68675e"
  dark-panel: "#1b1b1b"
  case-gallery: "#171717"
  case-system: "#202020"
  case-reflection: "#f3f3f3"
  toolkit-arrow: "#bdbdbd"
  toolkit-rule: "#dddddd"
  border: "rgba(17, 17, 17, 0.12)"
  border-strong: "rgba(17, 17, 17, 0.28)"
  theme-border: "#aaa89f"
  danger: "#d83424"
typography:
  display:
    fontFamily: "Inter Tight, Arial, sans-serif"
    fontSize: "clamp(5rem, 12.3vw, 12rem)"
    fontWeight: 900
    lineHeight: 0.91
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Inter Tight, Arial, sans-serif"
    fontSize: "clamp(3rem, 6.5vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.97
    letterSpacing: "-0.035em"
  page-title:
    fontFamily: "Inter Tight, Arial, sans-serif"
    fontSize: "clamp(4rem, 7.5vw, 7rem)"
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  case-title:
    fontFamily: "Inter Tight, Arial, sans-serif"
    fontSize: "clamp(3.5rem, 6.3vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  case-heading:
    fontFamily: "Inter Tight, Arial, sans-serif"
    fontSize: "clamp(2.4rem, 3.6vw, 3.75rem)"
    fontWeight: 900
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  case-body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.85
  case-reflection:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(1.4rem, 2.5vw, 2.3rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "-0.02em"
  closing-headline:
    fontFamily: "Inter Tight, Arial, sans-serif"
    fontSize: "clamp(3rem, 5.5vw, 5.5rem)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  route-headline:
    fontFamily: "Inter Tight, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 5.5vw, 5.5rem)"
    fontWeight: 900
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  toolkit-title:
    fontFamily: "Inter Tight, Arial, sans-serif"
    fontSize: "clamp(3.5rem, 6.4vw, 6rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.04em"
  toolkit-heading:
    fontFamily: "Inter Tight, Arial, sans-serif"
    fontSize: "clamp(2rem, 3vw, 3rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Inter Tight, Arial, sans-serif"
    fontSize: "clamp(2.3rem, 4vw, 4.3rem)"
    fontWeight: 900
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(0.98rem, 0.94rem + 0.2vw, 1.08rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.7rem"
    letterSpacing: "0.11em"
  nav:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0"
rounded:
  card: "0"
  block: "0"
  featured-media: "14px"
  closing-panel: "20px"
  compact-panel: "16px"
  case-inset: "12px"
  case-stage: "8px"
  case-stage-mobile: "4px"
  field: "10px"
  action: "100px"
  pill: "9999px"
spacing:
  site-gutter: "clamp(1.25rem, 4.5vw, 5rem)"
  container-gutter: "clamp(1.25rem, 4vw, 4rem)"
  mobile-gutter: "1.25rem"
  section-gap: "clamp(3rem, 6vw, 6rem)"
  closing-section: "clamp(4rem, 7vw, 7rem)"
  closing-panel: "clamp(2rem, 4.2vw, 4.5rem)"
components:
  button-contact:
    backgroundColor: "{colors.fg-primary}"
    textColor: "{colors.bg-base}"
    rounded: "{rounded.action}"
    padding: "0.35rem 0.4rem 0.35rem 1.35rem"
  button-contact-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.bg-base}"
  button-primary:
    backgroundColor: "{colors.fg-primary}"
    textColor: "{colors.bg-base}"
    rounded: "{rounded.action}"
    padding: "0.9rem 1.15rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.bg-base}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.fg-primary}"
    rounded: "{rounded.action}"
    padding: "0.9rem 1.15rem"
  button-submit:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.bg-base}"
    rounded: "{rounded.action}"
    padding: "0.9rem 1.3rem"
    width: "100%"
  button-submit-hover:
    backgroundColor: "{colors.accent-deep}"
    textColor: "{colors.bg-base}"
  input:
    backgroundColor: "{colors.field-bg}"
    textColor: "{colors.bg-base}"
    rounded: "{rounded.field}"
    padding: "0.8rem 0.95rem"
    width: "100%"
  closing-panel:
    backgroundColor: "{colors.fg-primary}"
    textColor: "{colors.bg-base}"
    rounded: "{rounded.closing-panel}"
    padding: "{spacing.closing-panel}"
  navigation:
    typography: "{typography.nav}"
    textColor: "{colors.fg-primary}"
  toolkit-tool:
    textColor: "{colors.fg-primary}"
  featured-card:
    textColor: "{colors.bg-base}"
    padding: "0 0 2rem"
  identity:
    textColor: "{colors.fg-primary}"
---

# Design System: Asad Iqbal Portfolio

## Overview

**Creative North Star: "The Reference-led Editorial Portfolio"**

A reference-led editorial portfolio built around bold, tightly set headlines, a personal portrait, and a compact AI monogram. White reading surfaces, near-black work sections, and direct red accents give the content a clear rhythm without softening the engineering character.

The identity is shared across routes through locally served Inter Tight and Manrope, the fixed name-and-monogram header, a universal black contact panel, and a substantial dark footer. Services, case studies, the work archive, story, and toolkit carry the same typography, image framing, and spacing. Motion reinforces navigation and interactive affordances: rolling labels, restrained image scaling, moving arrows, and a branded route curtain. Reduced-motion preferences bypass the curtain, reveal content immediately, disable smooth wheel and anchor scrolling, and collapse decorative transition durations.

The local Content & SEO editor is a separate Operate surface, not a public-site redesign. It uses system sans, fixed type sizes, labeled native forms, white/gray surfaces, and red action/error states without hero animation. Its desktop sidebar is 230px; forms stack at 900px and navigation becomes a two-by-two grid at 640px. Fields, buttons, and help panels use 6px, 8px, and 12px rounding respectively. These local choices do not change the public tokens above. The editor reads and saves `src/content/managed.json` on `127.0.0.1:3102`, without a database; publishing requires rebuild and deployment. Preserve clear validation, revision-conflict, save, and audit-limit messages. See `.impeccable/surfaces/content-editor.md` for the scoped contract and `SEO-CONTENT-GUIDE.md` for workflow.

**Key Characteristics:**

- Oversized black/red display typography with compact leading.
- Locally served Inter Tight 900 and Manrope 400/700.
- White page introductions, dark project sections, and a black closing contact panel before the four-column desktop footer.
- AI monogram repeated in the header, footer, and route curtain.
- Responsive composition and keyboard-visible interactive states.

This document records the implemented cascade: `tokens.css` and `globals.css`, followed by `identity.css` and then `pages.css`. `pages.css` supplies cross-route layouts, rounded controls, and shared contact-panel overrides. `case-study.css` follows the shared styles and owns the local project-detail layouts and evidence viewer. The Toolkit route imports its scoped `src/app/uses/uses.css` for the category directory and reading rows. `src/lib/fonts.ts` is the font-loading authority. Values here describe the implementation; they do not replace its CSS.

## Colors

The palette pairs clear white and near-black surfaces with three context-specific reds. Token values in the frontmatter are normative.

### Primary

- **Vivid Red** (`accent`): monogram's I, hero emphasis, section labels, selection, and focus outlines.
- **Interaction Red** (`accent-hover`): active desktop navigation and pill-action hover backgrounds.
- **Coral on Ink** (`accent-on-dark`): closing headline emphasis, dark-panel focus outlines, footer arrows, mobile active navigation, and project arrow hover states.
- **Deep Interaction Red** (`accent-deep`): submit hover, secondary action hover, and small service and case-study accents.

**The Red Context Rule.** Use the vivid accent for identity and emphasis, the darker red for light-surface navigation states, and the brighter coral for small accents on dark surfaces.

### Neutral

- **White Canvas** (`bg-base`): page and home introductions; inverse text on dark surfaces.
- **Raised White** (`bg-elevated`) and **Soft Gray** (`bg-subtle`): supporting content and legacy component surfaces.
- **Ink** (`fg-primary`): primary type, black actions, footer, menu, and route curtain.
- **Secondary Graphite** (`fg-secondary`) and **Muted Graphite** (`fg-muted`): supporting copy and metadata on light surfaces.
- **Dark Panel** (`dark-panel`): nested project surfaces.
- **Case Gallery Ink** (`case-gallery`): the project-detail viewer and expanded-image dialog. **Case System Ink** (`case-system`) separates the Allure data-flow inset from its black build section. **Case Reflection Gray** (`case-reflection`) distinguishes the closing reflection. These are local project-detail surfaces, not global palette replacements.
- **Subtle Rule** (`border`), **Strong Rule** (`border-strong`), and **Ledger Rule** (`theme-border`): boundaries and editorial divisions.
- **Toolkit Arrow Gray** (`toolkit-arrow`) and **Toolkit Row Rule** (`toolkit-rule`): the directory arrows at rest and the fine divisions between category sections.
- **Field Charcoal** (`field-bg`) and **Field Rule** (`field-border`): filled, fully outlined controls inside the black contact panel.
- **Inverse Secondary** (`inverse-secondary`): supporting copy on black.
- **Soft Success** (`success-on-dark`): contact availability marker and success icon.
- **Soft Error** (`error-on-dark`) and **Error Rule** (`error-border`): readable submission error text and its outlined container on black. The inherited **Error Red** (`danger`) remains a global semantic token; the closing form uses these inverse treatments.

Dark sections are deliberate page surfaces. The light and dark theme selectors currently share the same global token values; this is not an independently switchable dark theme.

## Typography

**Display Font:** Inter Tight, with Arial and sans-serif fallback. The local file provides weight 900.
**Body Font:** Manrope, with Arial and sans-serif fallback. Local files provide weights 400 and 700.
**Label Font:** Manrope. The inherited `--font-mono` name now resolves to Manrope; it does not denote a third monospaced face.

### Hierarchy

- **Display:** homepage headline, split into black and red lines.
- **Headline:** section headings; mobile home section headings use 3.5rem.
- **Page title:** shared route introductions; at 600px and below this becomes `clamp(3.5rem, 14vw, 5rem)`.
- **Case title:** project-detail introductions pair an ink first word with the remaining title in Interaction Red. At 1000px and below use `clamp(3rem, 6.5vw, 4.5rem)`; at 700px and below use `clamp(3rem, 12vw, 4.8rem)`.
- **Case heading / body:** local story headings and prose with a maximum 65ch reading measure; at 700px and below headings are 2.5rem and prose is 1rem. Build rows use 1rem body text.
- **Case reflection:** enlarged Manrope prose at 46ch maximum, paired with a restrained .9rem bold Manrope heading. Its more specific local rule preserves the enlarged reflection scale on mobile.
- **Closing headline:** the white/coral shared invitation. At 1000px it becomes 3.5rem; at 600px it uses `clamp(2.8rem, 11vw, 4rem)`.
- **Route headline:** major cross-route section headings.
- **Title:** featured project names, with less compressed leading than display text.
- **Toolkit title / heading:** the two-line black/red route title and icon-led category headings. At 700px and below the title uses `clamp(3rem, 12vw, 4.8rem)` and category headings are 2.25rem. Tool names are plain bold Manrope (1rem, 1.6 leading); explanations use regular Manrope (1rem, 1.8 leading) with a 65ch maximum.
- **Body:** default reading text; process copy uses 1rem (16px) with 1.75 leading. Several established project-card descriptions use .9375rem and 1.6 leading. Operating-principle statements use `clamp(1.125rem, 1.6vw, 1.5rem)` with 1.6 leading, reaching 24px on wide desktops.
- **Label:** compact metadata where it supplies information. Decorative eyebrows above headings have been removed. Expertise technologies follow the title in sentence case (.8rem, 1.5 leading). Navigation uses the separate bold sentence-case nav role.

At 900px and below, the homepage display is 12vw. At 600px and below it is 12.1vw with .96 leading. The mobile introduction has a maximum reading width of 38ch. The footer brand and closing invitation scale independently of body text. Editorial action labels use .85rem, weight 700, sentence case, and normal tracking. Contact controls use .9rem, increasing to 1rem below 600px.

**The Shared Identity Rule.** Use the same monogram and font pairing across every route; scale the lockup to its context without redrawing it.

## Layout

Shared identity surfaces use the fluid site gutter. Legacy content containers retain an 82rem maximum width and their separate container gutter. Do not assume every surface shares a single fixed container.

The fixed desktop header is 96px high, reducing to 80px after scrolling beyond 28px. At 900px and below it stays 80px high and replaces the desktop navigation with a menu toggle; the contact action remains visible. Section anchors have 110px scroll clearance.

The homepage portrait overlaps the centered display on desktop, with introduction at left and supporting note at right. At 600px and below the headline, portrait, and introduction become a vertical flow. The technology strip changes to three columns. Featured work uses a two-column desktop grid and one column below 700px.

The footer uses four columns above 1050px and two below. At 600px and below, identity and contact sections span both columns while exploration and service links remain side by side. The invitation belongs to the separate contact panel inside main, immediately before the footer. Footer navigation and contact links retain at least 44px interaction height.

The universal contact section has white outer space and a two-column black panel, with introduction at left and form at right. At 1000px panel padding is 2.5rem and paired fields stack; at 850px the panel becomes one column and paired fields share a row again. Below 600px fields stack, the outer gutter is 1rem, and panel padding is 2rem 1.25rem.

Services use four-column section navigation that becomes two columns at 850px, followed by image-and-copy service sections and a dark process sequence. The introduction becomes one column at 600px. Case studies use a local gutter of `max(var(--site-gutter), calc((100vw - 1536px) / 2))`, capping the wide reading surface at 1536px. A two-column title-and-summary introduction leads into the evidence viewer, a ruled four-column facts strip, and a plain wrapping technology list. Facts reduce to two columns at 1000px. A horizontal five-link contents bar stays beneath the header at an 80px top offset; section jumps clear the measured header and bar plus 20px, with 165px native scroll margin. Context and approach share a two-column overview. At 700px the introduction, overview, build rows, outcomes, data flow, and next-project panel stack; the contents bar remains horizontally scrollable.

Home and Services share content-height process steps: four columns above 1100px, two at 1100px and below, and one at 480px and below. A top rule and 1.5rem top padding establish each step; there is no minimum card height. Home process and expertise introductions keep supporting copy directly below their heading.

About capabilities form a two-column ruled ledger, becoming one column at 700px and below. Category and tool lists sit side by side on wide screens, stack from 1100px through 701px, return to pairs in the single-column ledger, and stack again at 480px and below. Personal facts use a concise definition list. Operating principles pair a proper section heading with ruled statements. Facts and principles become single-column sections at 700px. The About story uses two columns with a 60ch prose measure, stacking at 760px; timeline entries use compact 3rem bottom spacing, reduced to 2.5rem at 760px.

The Toolkit has a two-column hero with its introduction at left and a black six-link category directory at right. A local gutter of `max(var(--site-gutter), calc((100vw - 1440px) / 2))` caps the content surface at 1440px. Six ruled category rows pair icon, heading, and summary at left with tool names and short explanatory paragraphs at right. At 1000px gaps tighten to 2.5rem; at 700px the hero and rows stack, section padding reduces to 2.25rem, and directory links remain at least 60px high. Category anchors have 112px header clearance. Archive imagery retains the shared media framing. Existing 760px and 700px breakpoints still control inherited route grids and home sections.

## Elevation & Depth

The identity uses flat color fields and fine rules. The portrait has no frame shadow or rounded enclosure. Project screenshot compositions retain dimensional overlap and strong shadows, while the scrolled header receives only a faint ambient shadow.

### Shadow Vocabulary

- **Scrolled header:** `0 8px 24px #11111106`.
- **Project screenshot frame:** `0 28px 65px rgba(0,0,0,.48)`.

**The Structural Depth Rule.** Keep primary surfaces flat; reserve strong shadows for layered project screenshots and the faint ambient shadow for the scrolled header.

## Shapes

Primary page sections and editorial ledgers retain square geometry. Featured imagery, archive images, and service images use the featured-media radius. The closing panel uses the closing-panel radius, reduced to compact-panel on mobile. The project-detail viewer shell and next-project panel also use compact-panel; its dialog and system inset use case-inset, and the image stage uses case-stage, reduced to case-stage-mobile at 700px. Form controls and error containers use the field radius. Header, hero, editorial, project, and submit actions use the action radius; social links are pills or circles. The Toolkit directory uses compact-panel rounding; its tool names are plain text rather than enclosed tags.

Device screenshot frames preserve their own responsive rounding: phone compositions use `clamp(12px, 1.8vw, 25px)`, and web compositions use `clamp(7px, 1vw, 14px)`. These frame values are distinct from the enclosing card shape.

## Components

### Buttons

The header contact action is a black pill with a circular arrow inset. On hover it turns Interaction Red, rises 2px, and moves the arrow diagonally. The homepage work action uses a similar pill and rises 3px.

Shared editorial buttons are rounded pills with sentence-case labels and at least 48px height. Primary actions are ink and turn Interaction Red on hover. Outlined ghost actions gain Deep Interaction Red text and border. Full-width contact submit is Interaction Red, darkens on hover, and has a minimum height of 52px; its arrow moves 4px to the right.

### Cards

Featured project cards use a rounded imagery window above metadata, a large project name, and descriptive text. A bottom rule anchors the group. Pointer hover scales the imagery wrapper to 1.045 and shifts the metadata arrow by 4px diagonally. Nested screenshot images also have their own scale treatment. Focus uses a 3px accent outline with 4px offset.

### Inputs / Fields

Contact inputs, native selects, and the textarea use filled charcoal surfaces, a complete field border, and rounded corners. Visible labels stay above controls; required markers accompany native required attributes. Controls are at least 48px high and the textarea is vertically resizable with a 115px minimum. Placeholder text is muted; entered text is white. Keyboard focus uses a coral border and 2px outline with 3px offset.

The form contains required name, email, and message fields plus optional opportunity and budget selects. While sending, the form announces busy state and submit is disabled at 70% opacity with a sending label and spinner. Failure preserves entered values and displays an alert with an email fallback. Success replaces the form with a polite status, confirmation icon, and send-another action. Form state resets on route changes. The spinner stops under reduced motion.

### Navigation

Desktop labels roll upward within a clipped line box over .45s. Active links use Interaction Red and an underline. The mobile menu fills the viewport below the header with Ink and large display-font links, plus contact and social actions. The implementation locks page scroll, makes the main and footer inert, traps keyboard focus, closes with Escape, and returns focus to the toggle.

### Identity and Footer

The custom inline SVG uses a 72 by 64 viewBox with an uppercase ink A and a separate red uppercase I; the A inherits white in dark contexts. The header monogram renders at 58 by 52px, the footer at 60px square, and the route curtain at 112 by 100px. Its name lockup uses Inter Tight, followed by a small Manrope service descriptor. Hover lowers the lockup opacity to .8 without rotating the symbol.

Every route ends with one shared contact destination inside main: the large white/coral invitation, direct email and phone links, availability note, and working inquiry form. Supporting copy adapts for services and project-detail routes. The footer follows with identity, exploration, services, and contact columns; it does not repeat the invitation. Circular social actions invert to white on hover. Footer text links shift 3px to the right and turn coral.

### Services and Case Studies

Service navigation links directly to each service section. Sections combine existing product imagery, scope, included work, outcome copy, and a project link. The shared process sequence uses content-height steps with numbered headings and top rules; Services uses coral step numbers on ink. Service and project facts remain grounded in existing content.

Case studies retain breadcrumbs, external product links, status, structured facts, and a plain technology list. The selected-screen viewer presents evidence inside a black frame. Allure opens on a real dashboard screenshot in a focusable, vertically scrollable preview (`clamp(300px, 44vw, 640px)` high; 350px on mobile), with separate Live dashboard, Dispatch concept, and Operations concept tabs. Phone galleries show one large selected screen and adjacent screen previews on desktop; the previews disappear at 700px, where the stage is 430px high.

Tabs use roving keyboard focus with Left/Right arrows and Home/End. Named previous/next controls disable at the ends, and the counter announces selection. Expanding the selected screenshot opens a native modal dialog with a sticky close control, native Escape handling and focus restoration, body scroll lock, and paused Lenis scrolling. Web screenshots retain their full image dimensions inside the scrollable viewer and dialog. Persistent captions, toolbar labels, and image alternatives distinguish real product screenshots from generated concepts; iYurek also states the narrower feature-architecture contribution.

The five contents links are Context, Approach, Build, Results, and Reflection, with an active underline. The black build section uses ruled heading-and-prose rows. Allure adds an interface-to-services-to-data flow and explicitly labels the React Native companion as in development. Outcomes use ruled checkmarked rows, reflection uses its local gray surface, and a large image-and-title panel leads to the next project. The existing shared contact panel and footer remain the single closing destination.

### Toolkit

The black directory presents six named category links with distinct line icons and directional arrows. Each category repeats its icon beside the heading, followed by a short summary and grounded project links for Mobile (BrothersFix) and Backend (Allure Dispatch). The page reuses all 34 existing entries from the shared tool groups without visible counts, rankings, or numbered badges. Tool lists are semantic, wrapping lists above readable paragraphs. Directory arrows move diagonally on hover, project-link arrows move upward, and reduced motion removes both transforms. The shared contact panel and footer follow once.

### Route Transition

A fixed Ink curtain carries the AI monogram and destination label. Ordinary internal page links cover the outgoing page over .38s and navigate after coverage. The destination scroll position (top or the anchor with 110px clearance) is restored under cover; fonts and visible image decoding receive up to 500ms before two animation frames and a .62s reveal. Resetting the curtain pixel translation to zero prevents inherited CSS offsets from combining with its percentage travel. A current Lenis reference keeps scroller initialization from tearing down an in-flight curtain. Browser Back/Forward uses a .35s opacity reveal while retaining native scroll restoration. External destinations, downloads, modified clicks, and same-path links bypass the curtain.

Reduced motion bypasses the curtain, makes scroll reveals immediately visible, disables Lenis smooth wheel and anchor scrolling, and disables decorative CSS motion. Content renders visible before reveal animation initializes. Content entrances play once from readable opacity (.7 to .8), with no clip wipe or scroll reversal: shared reveals use .55s and a 16px rise at 88% of the viewport; staggered groups use .7s and 18px at 85%; home section entrances use .65s and 18px at 92%. Normal hover easing is `cubic-bezier(.16, 1, .3, 1)`; route motion uses GSAP `power3.inOut`. Controls retain the global 2px accent focus outline with 4px offset unless a component supplies its own documented focus style.

## Do's and Don'ts

### Do:

- Do use the shared local fonts and preserve the AI monogram geometry.
- Do keep project screenshots, scope labels, and contact information grounded in existing content.
- Do use the red focus treatment and preserve mobile menu keyboard behavior.
- Do bypass page curtains, smooth scrolling, and decorative motion when reduced motion is requested.
- Do keep one complete closing contact panel before the footer on every route.
- Do preserve explicit gallery captions, form states, and visible keyboard controls.
- Do distinguish real project screenshots, generated concepts, and contribution scope in the evidence viewer.
- Do lead with headings and place supporting technology metadata below them.
- Do size process and About content to its text, using ruled rows and readable body copy.

### Don't:

- Don't restore the former warm-paper identity or substitute a generic font pairing.
- Don't replace the distinct media, panel, field, and action radii with a single global radius.
- Don't use the route curtain for external links, downloads, or same-route anchors.
- Don't hide essential labels or actions behind hover-only behavior.

### Font loading and content icons

The Inter Tight display face uses a local Arial Bold fallback adjusted to 85% to approximate its condensed width during font loading. Homepage animated title lines stay together to prevent a fallback wrap. General content icons use shared Lucide SVGs through `ContentIcon`; brand marks retain the smaller brand-only font. Keep meaningful icon shapes and the existing visual slots when extending content rather than restoring the full general-purpose icon font.
