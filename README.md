# Asad Iqbal portfolio

Personal portfolio for Muhammad Asad Iqbal. The site uses the original editorial homepage, real project visuals, and case studies that distinguish owned work from scoped contributions and concepts.

## Run locally

```bash
npm install
npm run dev
```

The app uses Next.js 15, React 19, TypeScript, Tailwind CSS 4, GSAP, and Lenis. Content lives in `src/content/`; canonical copy and media notes live in `PORTFOLIO-CONTENT.md`.

## Contact form

Set `RESEND_API_KEY` and a verified `CONTACT_FROM_EMAIL` in `.env.local`. Form submissions are sent to `masadiqbal385@gmail.com`. The form reports a delivery error and shows the direct email address if sending is unavailable.

## Verify

```bash
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` for production canonical URLs, sitemap, and Open Graph metadata.

