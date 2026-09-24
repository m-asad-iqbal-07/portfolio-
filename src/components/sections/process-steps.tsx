type Step = { title: string; body: string; subtitle?: string };

export function ProcessSteps({ steps, className }: { steps: Step[]; className: string }) {
  return <div className={className}>{steps.map((step, index) => <article key={step.title}>
    <div className="process-step-title"><h3>{step.title}</h3><span aria-label={`Step ${index + 1}`}>{String(index + 1).padStart(2, "0")}</span></div>
    {step.subtitle && <h4>{step.subtitle}</h4>}<p>{step.body}</p>
  </article>)}</div>;
}
