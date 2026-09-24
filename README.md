# Asad Iqbal portfolio

Personal portfolio for Muhammad Asad Iqbal. The site uses the original editorial homepage, real project visuals, and case studies that distinguish owned work from scoped contributions and concepts.

## Run locally

```bash
npm install
npm run dev
```

Development writes generated files to `.next-dev`; `npm run build` and `npm start` use `.next`. This keeps production builds from corrupting a running development server. Use separate ports when running both servers.

The app uses Next.js 15, React 19, TypeScript, Tailwind CSS 4, GSAP, and Lenis. Content lives in `src/content/`; canonical copy and media notes live in `PORTFOLIO-CONTENT.md`.

## Contact form

Set `RESEND_API_KEY` and a verified `CONTACT_FROM_EMAIL` in `.env.local`. Form submissions are sent to the public contact email configured in `src/content/managed.json`. The form reports a delivery error and shows the direct email address if sending is unavailable.

## Verify

```bash
npm run build
```

The public canonical domain is configured in `src/content/managed.json` (not `NEXT_PUBLIC_SITE_URL`).

## Content and SEO editor

Run `npm run content:edit` and open `http://127.0.0.1:3102`. This local, database-free editor saves content and SEO settings to project files. Run the development site on port 3001 for previews; rebuild and deploy to publish.

Use `npm run seo:validate`, `npm run test:seo`, and `npm run seo:audit -- --base http://localhost:3101` for validation. See [SEO-CONTENT-GUIDE.md](SEO-CONTENT-GUIDE.md) for editing, backups, indexing, Search Console verification, audit scope, and deployment steps.

