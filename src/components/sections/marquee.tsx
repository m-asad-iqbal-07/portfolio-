const stack = [
  "React Native",
  "Expo",
  "EAS Build",
  "Next.js",
  "TypeScript",
  "Node.js",
  "WordPress",
  "Bricks Builder",
  "Elementor",
  "Post-launch ownership",
  "Tailwind CSS",
  "Firebase",
];

export function Marquee() {
  return (
    <section
      className="border-y border-[var(--border)] py-8"
      aria-label="Technologies"
    >
      <div className="container-page">
        <p className="mb-4 font-mono text-[length:var(--text-xs)] uppercase tracking-[0.15em] text-[var(--fg-muted)]">
          What I work with
        </p>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--border-strong)] px-4 py-1.5 text-[length:var(--text-sm)] text-[var(--fg-secondary)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
