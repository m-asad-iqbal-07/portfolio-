import { PageJsonLd } from "@/components/seo/json-ld";
﻿import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Talk full-stack product work, mobile delivery, operational systems, or an existing product with Muhammad Asad Iqbal.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageJsonLd path="/contact" />
      <PageHeader
        eyebrow="Contact"
        variant="contact"
        title={<>Build<br /><em>together.</em></>}
        intro="Send a message with what you're building and what you need."
      />
</>
  );
}



