import type { Metadata } from "next";
import { credentials, values } from "@/content/data";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/page-header";
import { AboutTimeline } from "@/components/sections/about-timeline";
import { AboutStory } from "@/components/sections/about-story";
import { Capabilities } from "@/components/sections/capabilities";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "About Muhammad Asad Iqbal — a full-stack developer building and running production mobile, web, backend, and data systems.",
  path: "/about",
});

const valueIcons = [
  "fi fi-rr-link-alt",
  "fi fi-rr-rocket-lunch",
  "fi fi-rr-bullseye-arrow",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        variant="about"
        title={<>More than<br /><em>the code.</em></>}
        intro="A bit about what I do and how I got here."
      />

      <AboutStory />

      <AboutTimeline />

      <Capabilities />

      <section className="credentials-section">
        <div className="route-section-head">
          <span>Profile</span>
          <h2>A little more.</h2>
        </div>
        <div className="credentials-grid credentials-grid-compact">
          {credentials.filter((credential) => credential.label !== "Education").map((credential) => (
            <article key={credential.label}>
              <i className="fi fi-rr-badge-check" aria-hidden="true" />
              <span>{credential.label}</span>
              <p>{credential.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="values-section">
        <span>Operating principles</span>
        {values.map((value, index) => (
          <p key={value}>
            <i className={valueIcons[index]} aria-hidden="true" />
            {value}
          </p>
        ))}
      </section>
    </>
  );
}



