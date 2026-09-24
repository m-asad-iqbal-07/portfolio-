# SEO and content management

The public domain and editable content are stored in `src/content/managed.json`. The current domain is `https://m-asad-iqbal.vercel.app`. The previous `NEXT_PUBLIC_SITE_URL` setting is no longer the canonical URL authority, so a local development environment cannot accidentally publish localhost canonical URLs.

## Local editor

Run `npm run content:edit`, then open `http://127.0.0.1:3102`. No database, cloud account, or new package is needed. This is a local editing service, not a public admin login. It binds only to the loopback interface and is not included as a Next.js API route on Vercel.

The editor supports:

- Full meta titles and descriptions for all ten public pages.
- Canonical targets, per-page and site-wide indexing, and local social image paths.
- Visible page introductions, public profile/contact details, and the four case-study stories.
- Google Search Console and Bing verification tokens.
- An illustrative search preview, configuration findings, and a rendered technical audit.
- File export, validated atomic saves, revision conflicts, and automatic pre-save backups in `.content-backups/`.

Start the site separately, for example `npm run dev -- -p 3001`. The development build updates after saving. An already-running production preview and the deployed Vercel site do not update until rebuilt and deployed. Review `git diff`, run the checks below, then use your normal deployment workflow. The editor does not commit, push, deploy, or send email.

Backups are local and ignored by Git. To restore one, stop editing, copy the desired JSON backup to `src/content/managed.json`, run `npm run seo:validate`, and reload the editor. Export a copy before reloading if a conflict message reports that another tab or file changed the content. The browser holds unsaved edits only in memory.

Project routes, new projects, media uploads, secondary catalog entries, and deeper service/about/toolkit copy remain in source files. The editor intentionally handles the common content and SEO changes without becoming a full CMS.

## Implemented search foundations

- Unique, complete page titles without duplicated name suffixes; focused descriptions grounded in actual work.
- Absolute HTTPS canonical URLs on the public domain. Root URL slash normalization is treated as equivalent in the audit.
- Explicit Open Graph and Twitter metadata and social images on every public page.
- Index/follow and snippet/image preview controls; noindex on missing pages; permanent `/now` to `/about` redirect.
- Sitemap includes only enabled, self-canonical public pages. Removed invented shared modification dates. A canonical pointing at another page excludes the source from the sitemap.
- Robots advertises the sitemap and excludes API/admin paths. A normal site-wide noindex keeps crawling possible so crawlers can read the noindex instruction.
- Vercel preview deployments and `SEO_NOINDEX=true` emit noindex metadata/headers and block crawling. Public canonical URLs still point to the intended public origin.
- Connected Person, WebSite, WebPage, ProfilePage, ContactPage, CollectionPage, BreadcrumbList, Service, ItemList, and case-study Article data where applicable. JSON-LD escapes `<` before insertion into HTML. No fabricated ratings, prices, testimonials, or publication dates.
- Server-rendered headings, visible explanatory content, internal project links, responsive layouts, self-hosted fonts, optimized images, and early loading for the main imagery in page headers. Existing security headers remain enabled.

GEO / answer-engine work here means understandable, crawlable content and consistent identity/contribution facts. It is not a separate score. Google states that its AI search features use the same SEO foundations and require no special AI text file or schema: [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features).

## Verification and search accounts

For Google, create a URL-prefix property matching the exact public origin. In **Site & verification**, paste only the token from the HTML tag's `content` attribute. Save, rebuild, and deploy. Click **Verify** in Search Console, then submit `sitemap.xml`. A Domain property uses a DNS record at the domain provider instead. See [Google ownership verification](https://support.google.com/webmasters/answer/9008080).

A stored token is not proof that the account is connected. This project does not contain Google OAuth credentials, fetch Search Console analytics, submit indexing requests, or change DNS. The editor links to Search Console for those account-owned actions. Bing has a separate optional verification-token field.

If the public domain changes, update it in the editor, deploy, and configure permanent redirects at the hosting/domain layer. Canonical markup is a signal, not a substitute for redirects. See [Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

## Checks

```sh
npm run seo:validate
npm run test:seo
npm run build
npm start -- -p 3101
npm run seo:audit -- --base http://localhost:3101
```

The audit writes `.seo-reports/latest.json`; the editor can run the same checks against local ports 3000, 3001, or 3101. It compares actual rendered titles, descriptions, canonicals, robots directives, social metadata, H1s, language, image alt attributes, and JSON-LD with the saved configuration. It also checks internal links, sitemap membership, robots.txt, the social image endpoint, permanent redirect, and a genuine 404.

Title/description length findings are editorial suggestions, not ranking rules. Empty image alternatives are allowed for decorative images. This tool is not a Google Rich Results Test or a replacement for real-user performance monitoring.

## Remaining live-site actions

Deploy the completed changes; confirm the domain; verify Search Console ownership; submit the sitemap; inspect key live URLs; run Google's Rich Results Test and PageSpeed Insights against the deployed site; then monitor real indexing and Core Web Vitals. Indexing, rankings, AI citations, backlinks, and ongoing content quality cannot be guaranteed by repository changes. No live deployment or external account change was performed in this task.

## Verification completed locally

The production build and TypeScript checks pass. The rendered audit checked all ten public pages with zero errors and zero review findings; Search Console ownership remains unverified. Nine configuration tests and sixteen editor/browser checks passed, including saves, stale revisions, rejected cross-origin requests, and rendering saved metadata. Editor navigation remains accessible from an ordinary link while cross-site API requests are rejected.

Desktop (1440px) and mobile (390px) browser observations covered home, services, toolkit, and Allure Dispatch. All returned 200, had no browser runtime errors or horizontal overflow, and contained one closing contact panel and one footer. Replacing the general icon font with SVG icons removes its approximately 377 KB download. A closer display-font fallback reduced observed homepage layout shift from 0.127 to 0.020 on desktop and from 0.132 to 0.003 on mobile. These are unthrottled local observations, not field Core Web Vitals or a Lighthouse score. Before/after evidence is in `.visual-review/seo-performance.json` and `.visual-review/seo-performance-after.json`.
