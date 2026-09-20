import type { Metadata } from "next";
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
      <PageHeader
        eyebrow="Work"
        variant="work"
        title={<>Work.<br /><em>In motion.</em></>}
        intro="All of this work is part of my portfolio. Each project clearly states what I built, owned, contributed to, or explored as R&D."
      />
      <div id="projects"><ProjectArchive /></div>
    </>
  );
}



