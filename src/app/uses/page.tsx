import type { Metadata } from "next";
import { stackGroups } from "@/content/data";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = pageMetadata({
  title: "Stack",
  description:
    "The mobile, web, backend, data, delivery, and CMS tools Muhammad Asad Iqbal actually uses in production.",
  path: "/uses",
});

const icons = [
  "fi fi-rr-mobile-button",
  "fi fi-rr-browser",
  "fi fi-rr-api",
  "fi fi-rr-database",
  "fi fi-rr-rocket-lunch",
  "fi fi-rr-layout-fluid",
];

const details = [
  "React Native for the app itself, Expo to keep the build and dev loop sane, EAS for actually getting builds out to the stores. Redux or Context depending on how much state the app actually needs.",
  "React with TypeScript by default — plain JavaScript when a project already runs on it.",
  "Node/Express for most APIs. FastAPI shows up when a project needs Python, usually alongside something like an ML model or a data pipeline. WebSockets and webhooks for anything that has to happen in real time or react to an external system.",
  "PostgreSQL for relational data with real structure — that's the default for ERP and dispatch-style systems. Redis sits next to it for caching and anything that needs to be fast. Firebase and MongoDB come up on mobile-first or real-time apps (ResQNet and the Coffee Shop app) where I want auth, a live database, and notifications out of the box instead of wiring all of that up myself. Supabase is in the same bucket as Firebase — a managed Postgres-backed backend — for projects where that trade-off makes sense.",
  "The part that's not writing code — getting builds through App Store and Google Play review, testing APIs in Postman, keeping things in Git properly.",
  "For content-driven sites where a full custom build isn't the right call — WordPress with custom post types and query loops, built in Bricks or Elementor depending on the project.",
];

export default function UsesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stack"
        variant="stack"
        title={<>The tools.<br /><em>The why.</em></>}
        intro="What I reach for, and why."
      />
      <section className="uses-grid" id="toolkit">
        {stackGroups.map((group, index) => (
          <article key={group.group}>
            <i className={icons[index]} aria-hidden="true" />
            <h2>{group.group}</h2>
            <ul className="uses-stack-list">
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="uses-stack-copy">{details[index]}</p>
          </article>
        ))}
      </section>
    </>
  );
}



