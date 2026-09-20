"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const projectTypes = [
  "Connected product engineering",
  "Production mobile delivery",
  "ERP or operational workflow",
  "Web or CMS delivery",
  "Existing product takeover",
  "Full-time opportunity",
  "Other",
];

const budgets = ["Below $1k", "$1k — $5k", "$5k — $15k", "$15k+", "Not sure yet"];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const formElement = event.currentTarget;
    const data = Object.fromEntries(new FormData(formElement).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !json.ok) throw new Error(json.error ?? "Your message could not be sent. Please try again or email me directly.");
      setStatus("success");
      formElement.reset();
    } catch (submissionError) {
      setStatus("error");
      setError(submissionError instanceof Error ? submissionError.message : "Your message could not be sent. Please try again or email me directly.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="rounded-[var(--radius-block)] border border-[var(--accent)] bg-[var(--bg-elevated)] p-10 text-center">
        <i className="fi fi-rr-check-circle text-3xl text-[var(--accent)]" aria-hidden="true" />
        <p className="mt-4 font-display text-[length:var(--text-2xl)] font-medium text-[var(--fg-primary)]">Got it.</p>
        <p className="mt-3 text-[var(--fg-secondary)]">Thanks for reaching out — I&apos;ll get back to you as soon as I can.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 opacity-0" />

      <Field label="Name" htmlFor="name">
        <input id="name" name="name" required maxLength={120} autoComplete="name" className="input" />
      </Field>

      <Field label="Email" htmlFor="email">
        <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" className="input" />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Opportunity type (optional)" htmlFor="projectType">
          <select id="projectType" name="projectType" className="input" defaultValue="">
            <option value="" disabled>Select…</option>
            {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </Field>
        <Field label="Budget (optional)" htmlFor="budget">
          <select id="budget" name="budget" className="input" defaultValue="">
            <option value="" disabled>Select…</option>
            {budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
          </select>
        </Field>
      </div>

      <Field label="What needs to be built, fixed, or owned?" htmlFor="message">
        <textarea id="message" name="message" required maxLength={5000} rows={6} className="input resize-y" />
      </Field>

      {status === "error" ? <p role="alert" aria-live="assertive" className="text-base text-[var(--danger)]">{error}</p> : null}

      <button type="submit" disabled={status === "submitting"} className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--accent-foreground)] transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60">
        {status === "submitting" ? "Sending…" : "Send message"}
        <i className="fi fi-rr-arrow-right" aria-hidden="true" />
      </button>

      <style>{`
        .input {
          width: 100%;
          border-radius: 10px;
          border: 1px solid var(--border-strong);
          background: var(--bg-base);
          color: var(--fg-primary);
          padding: 0.7rem 0.9rem;
          font-size: var(--text-base);
          transition: border-color 0.2s ease;
        }
        .input:focus { border-color: var(--accent); outline: none; }
        .input::placeholder { color: var(--fg-muted); }
      `}</style>
    </form>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block font-mono text-[0.9375rem] uppercase tracking-widest text-[var(--fg-muted)]">{label}</label>
      {children}
    </div>
  );
}
