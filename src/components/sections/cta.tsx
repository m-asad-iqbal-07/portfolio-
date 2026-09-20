"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";

export function Cta() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: the mailto link still works
    }
  }

  return (
    <section className="border-t border-[var(--border)] py-24 md:py-32">
      <div className="container-page">
        <Reveal
          as="p"
          className="font-mono text-[length:var(--text-xs)] uppercase tracking-[0.15em] text-[var(--fg-muted)]"
        >
          Contact
        </Reveal>
        <Reveal
          as="h2"
          delay={0.05}
          className="mt-4 max-w-2xl font-display text-[length:var(--text-3xl)] font-semibold tracking-[-0.025em] text-[var(--fg-primary)]"
        >
          Get in touch.
        </Reveal>
        <Reveal
          as="p"
          delay={0.1}
          className="mt-4 max-w-md text-[length:var(--text-lg)] text-[var(--fg-secondary)]"
        >
          I'm open to freelance work — apps, websites, or WordPress builds.
          Send me a message and I'll reply within a day or two.
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic>
              <ButtonLink href="/contact" data-cursor="Let's talk">
                Send a message
              </ButtonLink>
            </Magnetic>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-2.5 text-[length:var(--text-sm)] text-[var(--fg-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--fg-primary)]"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
              {copied ? "Copied" : siteConfig.email}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
