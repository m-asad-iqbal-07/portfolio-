import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger } from "@/components/motion/stagger";
import { ProjectCard } from "./project-card";

export function SelectedWork() {
  const shown = projects.slice(0, 3);

  return (
    <section className="container-page py-20 md:py-28">
      <SectionHeading
        eyebrow="Work"
        title="A few things I've built."
        intro="Flagship case studies show end-to-end ownership, context, implementation, and production outcomes."
      />

      <Stagger className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" gap={0.08}>
        {shown.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Stagger>

      <div className="mt-6">
        <Link
          href="/work"
          className="group inline-flex items-center gap-1.5 text-[length:var(--text-sm)] text-[var(--fg-secondary)] transition-colors hover:text-[var(--fg-primary)]"
        >
          See all projects
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
