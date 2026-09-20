const marks: Record<string, string> = {
  TypeScript: "fi-brands-typescript",
  "Node.js": "fi-brands-node-js",
  PostgreSQL: "fi-brands-postgre",
  WordPress: "fi-brands-wordpress",
};

export function TechMark({ name }: { name: string }) {
  return (
    <span className="tech-mark">
      {name === "React" || name === "React Native" ? (
        <svg className="tech-mark-icon" viewBox="-12 -11 24 22" fill="none" aria-hidden="true">
          <ellipse rx="11" ry="4.2" stroke="currentColor" strokeWidth="1.35" />
          <ellipse rx="11" ry="4.2" stroke="currentColor" strokeWidth="1.35" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" stroke="currentColor" strokeWidth="1.35" transform="rotate(120)" />
          <circle r="2" fill="currentColor" />
        </svg>
      ) : (
        <i className={"fi " + (marks[name] ?? "fi-rr-code-simple")} aria-hidden="true" />
      )}
      <span>{name}</span>
    </span>
  );
}
