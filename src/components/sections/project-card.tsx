import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectVisualStack } from "@/components/media/project-visual-stack";
import type { Project } from "@/types/content";

export function ProjectCard({ project, className = "" }: { project: Project; className?: string }) {
  const visuals = project.screens?.length ? project.screens : [project.image];

  return (
    <Link href={"/work/" + project.slug} data-cursor="View" className={"editorial-project-card " + className}>
      <div className="editorial-project-top"><span>{project.category} / {project.period}</span><ArrowUpRight /></div>
      <div className="editorial-project-art editorial-project-art-image">
        <ProjectVisualStack images={visuals} title={project.title} />
      </div>
      <div className="editorial-project-copy">
        <p>{project.outcome}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div>{project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
      </div>
    </Link>
  );
}