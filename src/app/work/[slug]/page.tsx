import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import type { CaseSection } from "@/types/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return pageMetadata({ title: "Case study not found" });
  return pageMetadata({
    title: project.title,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="mt-4 space-y-4">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="max-w-2xl text-[var(--fg-secondary)]">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function Part({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal
      as="section"
      className="border-t border-[var(--border)] py-12 md:grid md:grid-cols-[120px_1fr] md:gap-10"
    >
      <i className={"fi " + icon + " text-xl text-[var(--accent)]"} aria-hidden="true" />
      <div>
        <h2 className="font-display text-[length:var(--text-xl)] font-medium tracking-tight text-[var(--fg-primary)]">
          {title}
        </h2>
        {children}
      </div>
    </Reveal>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const isDispatch = project.slug === "allure-dispatch";
  const isScoped = project.slug === "iyurek";
  const productLabel = isScoped ? "Engagement" : "Product";

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${project.title} — ${project.summary}`,
    about: project.title,
    author: { "@type": "Person", name: siteConfig.name },
    keywords: project.stack.join(", "),
    url: `${siteConfig.url}/work/${project.slug}`,
  };

  return (
    <article className="pb-28">
      <JsonLd data={articleLd} />

      <header className="container-page case-study-header pb-10 pt-36 md:pt-44">
        <div className="case-study-copy">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 font-mono text-[0.9375rem] uppercase tracking-widest text-[var(--fg-muted)] transition-colors hover:text-[var(--accent)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All work
        </Link>

        <Reveal
          as="h1"
          className="mt-8 max-w-4xl font-display text-[length:var(--text-3xl)] font-bold tracking-[-0.03em] text-[var(--fg-primary)]"
        >
          {project.title}
        </Reveal>
        <p className="mt-5 max-w-2xl text-[length:var(--text-lg)] text-[var(--fg-secondary)]">
          {project.summary}
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <Meta label={productLabel} value={project.client} />
          <Meta label="Role" value={project.role} />
          <Meta label="Period" value={project.period} />
          <Meta label="Category" value={project.category} />
        </dl>

        <dl className="case-overview-details">
          <Meta label="Outcome" value={project.outcome} />
          <Meta label="Stack" value={project.stack.join(" · ")} />
        </dl>

        {project.links && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.appstore && (
              <ExtLink href={project.links.appstore} label="App Store" />
            )}
            {project.links.playstore && (
              <ExtLink href={project.links.playstore} label="Google Play" />
            )}
            {project.links.website && (
              <ExtLink href={project.links.website} label="Web" />
            )}
          </div>
        )}
        </div>
        <div className="case-hero-visual">
        <Image
          className={project.image.startsWith("/store/") ? "store-shot" : ""}
          src={project.image}
          alt={`${project.title} project presentation`}
          fill
          priority
          sizes="(max-width: 760px) 92vw, 45vw"
        />
        </div>
      </header>

{project.screens?.length ? (
        <section
          className="case-screen-gallery container-page"
          aria-label={isDispatch ? `${project.title} product screen and supporting concepts` : `${project.title} official product screens`}
        >
          <div className="case-screen-track">
            {project.screens.map((screen, index) => (
              <figure key={screen} className="case-screen">
                <Image
                  src={screen}
                  alt={isDispatch ? `${project.title} platform view ${index + 1}` : `${project.title} official product screen ${index + 1}`}
                  fill
                  sizes="(max-width: 760px) 68vw, 24vw"
                />
              </figure>
            ))}
          </div>
          <p>
            {isDispatch
              ? "One real product screen with generated supporting concepts for the other platform views."
              : isScoped
                ? "Official Apple App Store screenshots. The images show the wider product; my written claim stays limited to the one feature I worked on."
                : "Official product screenshots from the public store listing."}
          </p>
        </section>
      ) : null}

      <div className="container-page mt-12">
        <Part icon="fi-rr-document" title="Context">
          <Prose paragraphs={project.context} />
        </Part>
        <Part icon="fi-rr-blueprint" title="Approach">
          <Prose paragraphs={project.approach} />
        </Part>
        <Part icon="fi-rr-code-simple" title="Build">
          <div className="mt-4 space-y-8">
            {project.build.map((section: CaseSection) => (
              <div key={section.heading}>
                <h3 className="font-medium text-[var(--fg-primary)]">
                  {section.heading}
                </h3>
                <Prose paragraphs={section.body} />
              </div>
            ))}
          </div>
        </Part>
        <Part icon="fi-rr-trophy" title="Results">
          <ul className="mt-4 space-y-3">
            {project.results.map((result, index) => (
              <li
                key={index}
                className="flex max-w-2xl gap-3 text-[var(--fg-secondary)]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                {result}
              </li>
            ))}
          </ul>
        </Part>
        <Part icon="fi-rr-lightbulb-on" title="Reflection">
          <Prose paragraphs={project.reflection} />
        </Part>
      </div>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[0.9375rem] uppercase tracking-widest text-[var(--fg-muted)]">
        {label}
      </dt>
      <dd className="mt-1 text-base text-[var(--fg-primary)]">{value}</dd>
    </div>
  );
}

function ExtLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-strong)] px-4 py-2 text-base text-[var(--fg-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}


