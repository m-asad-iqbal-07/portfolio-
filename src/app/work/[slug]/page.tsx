import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";
import { PageJsonLd } from "@/components/seo/json-ld";
import { ProjectGallery } from "@/components/media/project-gallery";
import { CaseNavigation } from "@/components/sections/case-navigation";

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const project = getProject(slug);
  return project ? pageMetadata({ title: project.title, description: project.summary, path: `/work/${project.slug}` }) : { title: "Case study not found", robots: { index: false, follow: true }, alternates: { canonical: null } };
}
function Prose({ paragraphs }: { paragraphs: string[] }) { return <div className="case-prose">{paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>; }

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = getProject(slug); if (!project) notFound();
  const isDispatch = project.slug === "allure-dispatch", isScoped = project.slug === "iyurek";
  const next = projects[(projects.findIndex(item => item.slug === slug) + 1) % projects.length]!;
  const [firstWord, ...remainingWords] = project.title.split(" ");
  const caption = isDispatch ? "The dashboard is a real product screenshot. The dispatch and operations views are generated concepts, not screenshots of shipped features." : isScoped ? "Official App Store screenshots of the wider product. My contribution was limited to one feature’s architecture." : "Official product screenshots from the public store listing.";
  return <article className={`case-study${isDispatch ? " case-study-web" : ""}`}>
    <PageJsonLd path={`/work/${project.slug}`} project={project} />
    <header className="case-intro">
      <nav className="page-breadcrumbs" aria-label="Breadcrumb"><Link href="/work">All projects</Link><ChevronRight size={14} aria-hidden="true" /><span aria-current="page">{project.title}</span></nav>
      <div className="case-headline"><h1>{firstWord}{remainingWords.length > 0 && <em>{remainingWords.join(" ")}</em>}</h1>
        <div className="case-intro-copy"><p className="case-summary">{project.summary}</p>
          <p className="case-status"><span aria-hidden="true" />{project.outcome}</p>
          <div className="case-product-links">
            {project.links?.appstore && <External href={project.links.appstore} label="App Store" />}
            {project.links?.playstore && <External href={project.links.playstore} label="Google Play" />}
            {project.links?.website && <External href={project.links.website} label="Visit live website" />}
          </div>
        </div>
      </div>
    </header>
    {project.screens?.length ? <ProjectGallery key={`gallery-${project.slug}`} title={project.title} screens={project.screens} landscape={isDispatch} caption={caption} /> : null}
    <div className="case-facts-wrap"><dl className="case-facts"><Meta label="Engagement" value={project.client} /><Meta label="My role" value={project.role} /><Meta label="Period" value={project.period} /><Meta label="Platform" value={project.category} /></dl><div className="case-stack"><span>Technology</span><ul>{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul></div></div>
    <CaseNavigation key={`contents-${project.slug}`} />
    <div className="case-story">
      <div className="case-overview">
        <section id="case-context"><h2>The context.</h2><Prose paragraphs={project.context} /></section>
        <section id="case-approach"><h2>The approach.</h2><Prose paragraphs={project.approach} /></section>
      </div>
      <section id="case-build" className="case-build-section">
        <div className="case-section-intro"><h2>What I built.</h2><p>{project.role}</p></div>
        {isDispatch && <div className="case-system" aria-label="Allure Dispatch system architecture">
          <div><span>Interface</span><strong>React + TypeScript</strong></div><ArrowRight aria-hidden="true" />
          <div><span>Shared services</span><strong>Node.js + Express</strong><p>REST APIs · Webhooks</p></div><ArrowRight aria-hidden="true" />
          <div><span>Data</span><strong>PostgreSQL + Redis</strong></div>
          <p className="case-system-mobile">React Native companion <span>In development · uses the same service contracts</span></p>
        </div>}
        <div className="case-build-list">{project.build.map(section => <div key={section.heading}><h3>{section.heading}</h3><Prose paragraphs={section.body} /></div>)}</div>
      </section>
      <section id="case-results" className="case-results"><h2>The outcome.</h2><ul>{project.results.map(result => <li key={result}><Check size={22} aria-hidden="true" /><p>{result}</p></li>)}</ul></section>
      <section id="case-reflection" className="case-reflection"><h2>Looking back.</h2><Prose paragraphs={project.reflection} /></section>
    </div>
    <nav className="case-next" aria-label="More case studies"><div className="case-next-top"><h2>Next project.</h2><Link href="/work"><ArrowLeft size={16} />All projects</Link></div>
      <Link className="case-next-project" href={`/work/${next.slug}`}><div className="case-next-copy"><h3>{next.title}</h3><p>{next.role}</p><span>Explore the case study <ArrowUpRight size={18} /></span></div><div className="case-next-image"><Image src={next.image} alt="" fill sizes="(max-width: 700px) 70vw, 35vw" /></div><ArrowUpRight className="case-next-arrow" aria-hidden="true" /></Link>
    </nav>
  </article>;
}
function Meta({ label, value }: { label: string; value: string }) { return <div><dt>{label}</dt><dd>{value}</dd></div>; }
function External({ href, label }: { href: string; label: string }) { return <a href={href} target="_blank" rel="noreferrer">{label}<ArrowUpRight size={16} aria-hidden="true" /></a>; }
