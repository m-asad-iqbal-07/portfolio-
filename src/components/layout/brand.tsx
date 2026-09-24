import { siteConfig } from "@/lib/site";
﻿import Link from "next/link";

export function Monogram({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 72 64" fill="none" aria-hidden="true">
    <path d="M3 54 23 10h11l20 44H42l-4-10H18l-4 10H3Zm19-20h12l-6-15-6 15Z" fill="currentColor" fillRule="evenodd" />
    <path d="M55 10h13v8h-2v28h2v8H55v-8h2V18h-2v-8Z" fill="var(--accent)" />
  </svg>;
}

export function Brand({ footer = false }: { footer?: boolean }) {
  return <Link href="/" className={`brand-lockup${footer ? " brand-lockup-footer" : ""}`} aria-label="Asad Iqbal — home">
    <Monogram className="brand-symbol" />
    <span className="brand-name">{siteConfig.shortName}<span>Web. Mobile. Backend.</span></span>
  </Link>;
}
