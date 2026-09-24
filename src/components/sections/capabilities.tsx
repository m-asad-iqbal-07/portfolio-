import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { stackGroups } from "@/content/data";

export function Capabilities() {
  return <section className="capabilities-section" aria-labelledby="capabilities-heading">
    <div className="about-section-heading"><h2 id="capabilities-heading">Capabilities.</h2><p>Mobile, web, backend, and the delivery work that connects them.</p></div>
    <div className="capability-list">{stackGroups.map(group => <article key={group.group}>
      <h3>{group.group}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
    </article>)}</div>
    <Link className="capabilities-link" href="/uses">Explore my toolkit <ArrowUpRight size={18} /></Link>
  </section>;
}
