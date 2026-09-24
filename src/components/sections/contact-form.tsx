"use client";

import { useId, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";
const projectTypes = ["Connected product engineering", "Production mobile delivery", "ERP or operational workflow", "Web or CMS delivery", "Existing product takeover", "Full-time opportunity", "Other"];
const budgets = ["Below $1k", "$1k — $5k", "$5k — $15k", "$15k+", "Not sure yet"];

export function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting"); setError("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await response.json() as { ok: boolean; error?: string };
      if (!response.ok || !json.ok) throw new Error(json.error ?? "Your message could not be sent. Please try again or email me directly.");
      setStatus("success"); form.reset();
    } catch (submissionError) {
      setStatus("error");
      setError(submissionError instanceof Error ? submissionError.message : "Your message could not be sent. Please try again or email me directly.");
    }
  }

  if (status === "success") return <div className="contact-success" role="status" aria-live="polite">
    <CheckCircle2 size={42} aria-hidden="true" /><h3>Message received.</h3>
    <p>Thanks for getting in touch. I&apos;ll reply as soon as I can.</p>
    <button type="button" onClick={() => setStatus("idle")}>Send another message <ArrowRight size={18} /></button>
  </div>;

  return <form className="contact-form" onSubmit={onSubmit} aria-label="Project inquiry" aria-busy={status === "submitting"}>
    <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" className="contact-honeypot" />
    <div className="contact-field-row">
      <Field label="Your name" htmlFor={`${id}-name`} required><input id={`${id}-name`} name="name" required maxLength={120} autoComplete="name" placeholder="Name" /></Field>
      <Field label="Email address" htmlFor={`${id}-email`} required><input id={`${id}-email`} name="email" type="email" required maxLength={254} autoComplete="email" placeholder="you@example.com" /></Field>
    </div>
    <Field label="What can I help with?" htmlFor={`${id}-type`}><select id={`${id}-type`} name="projectType" defaultValue=""><option value="">Select an opportunity (optional)</option>{projectTypes.map(type => <option key={type}>{type}</option>)}</select></Field>
    <Field label="Budget" htmlFor={`${id}-budget`}><select id={`${id}-budget`} name="budget" defaultValue=""><option value="">Select a range (optional)</option>{budgets.map(budget => <option key={budget}>{budget}</option>)}</select></Field>
    <Field label="Tell me about it" htmlFor={`${id}-message`} required><textarea id={`${id}-message`} name="message" required maxLength={5000} rows={4} placeholder="What are you building, and where do you need help?" /></Field>
    {status === "error" && <div className="contact-error" role="alert"><p>{error}</p><a href={`mailto:${siteConfig.email}`}>Email me directly <ArrowRight size={15} /></a></div>}
    <button className="contact-submit" type="submit" disabled={status === "submitting"}>{status === "submitting" ? <>Sending…<LoaderCircle className="sending-icon" size={18} /></> : <>Send message<ArrowRight size={18} /></>}</button>
    <p className="contact-form-note">Your message goes directly to me. Fields marked * are required.</p>
  </form>;
}

function Field({ label, htmlFor, required = false, children }: { label: string; htmlFor: string; required?: boolean; children: React.ReactNode }) {
  return <div className="contact-field"><label htmlFor={htmlFor}>{label}{required && <span aria-hidden="true"> *</span>}</label>{children}</div>;
}
