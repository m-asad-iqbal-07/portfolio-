import Image from "next/image";
import Link from "next/link";
import { catalogProjects } from "@/content/catalog";
import { projects } from "@/content/projects";
import { ProjectVisualStack } from "@/components/media/project-visual-stack";

const flagshipWork = projects.map((project) => ({
  slug: project.slug,
  name: project.title,
  type: project.role,
  status: project.outcome,
  period: project.period,
  description: project.summary,
  contribution: project.role,
  stack: project.stack,
  screens: project.screens,
  href: "/work/" + project.slug,
  internal: true,
  mediaType:
    project.slug === "allure-dispatch"
      ? "Product screenshot plus generated supporting concepts"
      : project.slug === "iyurek"
        ? "Official App Store screenshots · scoped contribution"
        : "Official product screenshots",
  mediaAlt: project.title + " product screens",
  proof: undefined as string | undefined,
}));

const allWork = [
  ...flagshipWork,
  ...catalogProjects.map((project) => ({ ...project, internal: false })),
];

export function ProjectArchive() {
  return (
    <section className="project-archive unified-work">
      <div className="route-section-head project-archive-head">
        <span>Products, contributions &amp; R&amp;D</span>
        <h2>All projects.</h2>
      </div>

      <p className="unified-work-intro">
        Every project here is part of my portfolio. The scope label explains whether I owned the build,
        contributed to a focused area, or developed it as R&amp;D — it does not rank the work.
      </p>

      <div className="project-archive-grid">
        {allWork.map((project) => {
          const content = (
            <>
              <div className="project-archive-visual">
                {project.screens?.length === 1 ? (
                  <Image
                    className="archive-composite-image"
                    src={project.screens[0]!}
                    alt={project.mediaAlt ?? project.name + " portfolio concept showing three product screens"}
                    fill
                    sizes="(max-width: 900px) 92vw, 46vw"
                  />
                ) : project.screens?.length ? (
                  <ProjectVisualStack
                    images={project.screens}
                    title={project.name}
                    sizes="(max-width: 760px) 92vw, 46vw"
                  />
                ) : null}
              </div>

              <p className="project-archive-media">{project.mediaType}</p>
              <div className="project-archive-meta">
                <span>{project.status}</span>
                <span>{project.period}</span>
              </div>
              <h3>{project.name}</h3>
              <p className="project-archive-type">{project.type}</p>
              <p>{project.description}</p>
              <p className="project-archive-scope">
                <i className="fi fi-rr-badge-check" aria-hidden="true" />
                {project.contribution}
              </p>
              <ul>
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
              {project.proof ? <small>{project.proof}</small> : null}
            </>
          );

          return project.internal ? (
            <Link className="project-archive-card" href={project.href!} key={project.slug}>
              {content}
            </Link>
          ) : project.href ? (
            <a className="project-archive-card" href={project.href} target="_blank" rel="noreferrer" key={project.slug}>
              {content}
            </a>
          ) : (
            <article className="project-archive-card" key={project.slug}>
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
}
