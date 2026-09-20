import { testimonials } from "@/content/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger } from "@/components/motion/stagger";

export function Testimonials() {
  return (
    <section className="border-t border-[var(--border)] py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Testimonials" title="What people say." />

        <Stagger
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          gap={0.08}
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-[var(--radius-block)] border border-[var(--border)] bg-[var(--bg-elevated)] p-6"
            >
              <blockquote className="text-[length:var(--text-base)] leading-relaxed text-[var(--fg-secondary)]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-[var(--border)]">
                <p className="text-[length:var(--text-sm)] font-medium text-[var(--fg-primary)]">{t.name}</p>
                <p className="font-mono text-[length:var(--text-xs)] text-[var(--fg-muted)]">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
