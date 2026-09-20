import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <Reveal as="p" className="eyebrow">
        {eyebrow}
      </Reveal>
      <Reveal
        as="h2"
        delay={0.05}
        className="mt-3 font-display text-[length:var(--text-2xl)] font-semibold tracking-[-0.02em] text-[var(--fg-primary)]"
      >
        {title}
      </Reveal>
      {intro && (
        <Reveal
          as="p"
          delay={0.1}
          className="mt-4 text-[length:var(--text-base)] leading-relaxed text-[var(--fg-secondary)]"
        >
          {intro}
        </Reveal>
      )}
    </div>
  );
}
