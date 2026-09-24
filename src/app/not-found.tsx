export const metadata = { title: "Page not found | Asad Iqbal", robots: { index: false, follow: true }, alternates: { canonical: null } };
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[80svh] flex-col items-center justify-center text-center">
      <h1 className="mt-6 font-display text-[length:var(--text-hero)] font-bold leading-none tracking-[-0.04em] text-[var(--fg-primary)]">
        Lost the thread.
      </h1>
      <p className="mt-6 max-w-md text-[length:var(--text-lg)] text-[var(--fg-secondary)]">
        404 — That page doesn&apos;t exist — or it shipped somewhere else. Let&apos;s
        get you back on track.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/work" variant="ghost">
          See the work
        </ButtonLink>
      </div>
      <Link
        href="/contact"
        className="mt-8 font-mono text-[0.9375rem] uppercase tracking-widest text-[var(--fg-muted)] hover:text-[var(--accent)]"
      >
        Or get in touch →
      </Link>
    </section>
  );
}
