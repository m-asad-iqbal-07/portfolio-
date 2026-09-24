import { siteConfig } from "@/lib/site";
import { PageJsonLd } from "@/components/seo/json-ld";
﻿import type { Metadata } from "next";
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


export default function AboutPage() {
  return (
    <>
      <PageJsonLd path="/about" />
      <PageHeader
        eyebrow="About"
        variant="about"
        title={<>More than<br /><em>the code.</em></>}
        intro="A bit about what I do and how I got here."
      />

      <AboutStory />

      <AboutTimeline />

      <Capabilities />

      <section className="about-facts" aria-labelledby="about-facts-heading">
        <h2 id="about-facts-heading">A little more.</h2>
        <dl>{credentials.filter(credential => credential.label !== "Education").map(credential => <div key={credential.label}>
          <dt>{credential.label}</dt><dd>{credential.label === "Availability" ? siteConfig.availability : credential.value}</dd>
        </div>)}</dl>
      </section>
      <section className="about-principles" aria-labelledby="principles-heading">
        <h2 id="principles-heading">Operating<br />principles.</h2>
        <div>{values.map(value => <article key={value}><p>{value}</p></article>)}</div>
      </section>
    </>
  );
}



