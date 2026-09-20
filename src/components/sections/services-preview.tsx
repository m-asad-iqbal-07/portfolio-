import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger } from "@/components/motion/stagger";

export function ServicesPreview() {
  return (
    <section className="border-t border-[var(--border)] py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="What I can help with."
        />

        <Stagger className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3" gap={0.08}>
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="group flex flex-col gap-3 rounded-[var(--radius-block)] border border-[var(--border)] p-6 transition-all duration-200 hover:border-[var(--border-strong)] hover:bg-[var(--bg-elevated)]"
            >
              <span className="text-2xl">{service.icon}</span>
              <div>
                <h3 className="font-medium text-[var(--fg-primary)]">
                  {service.title}
                </h3>
                <p className="mt-0.5 font-mono text-[length:var(--text-xs)] text-[var(--accent)]">
                  {service.tagline}
                </p>
              </div>
              <p className="text-[length:var(--text-sm)] leading-relaxed text-[var(--fg-secondary)]">
                {service.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-1 text-[length:var(--text-sm)] text-[var(--fg-muted)] transition-colors group-hover:text-[var(--fg-primary)]">
                More
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
