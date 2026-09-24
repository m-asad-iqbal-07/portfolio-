import { PageJsonLd } from "@/components/seo/json-ld";
﻿import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/page-header";
import { ProjectArchive } from "@/components/sections/project-archive";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description:
    "Production systems, published mobile apps, full-stack platforms, scoped contributions, and R&D by Muhammad Asad Iqbal.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageJsonLd path="/work" />
      <PageHeader
        eyebrow="Work"
        variant="work"
        title={<>Work.<br /><em>In motion.</em></>}
        intro="Published apps, connected platforms, and focused contributions. Explore the product and the work behind it."
      />
      <div id="projects"><ProjectArchive /></div>
    </>
  );
}



