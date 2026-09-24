import { ArrowDown, ArrowUpRight, BadgeCheck, Blocks, BriefcaseBusiness, Code2, Database, GraduationCap, Network, PanelsTopLeft, Server, Smartphone, type LucideIcon } from "lucide-react";
const icons: Record<string, LucideIcon> = {
  "mobile-button": Smartphone, browser: PanelsTopLeft, api: Server, blueprint: Blocks,
  database: Database, "chart-network": Network, "graduation-cap": GraduationCap,
  briefcase: BriefcaseBusiness, "arrow-up-right": ArrowUpRight, "arrow-small-down": ArrowDown,
  apps: Blocks, "badge-check": BadgeCheck, "code-simple": Code2,
};
/** Preserve the existing icon slots without downloading an entire symbol font. */
export function ContentIcon({ className = "" }: { className?: string }) {
  const name = className.match(/fi-rr-([a-z-]+)/)?.[1] || "code-simple";
  const Icon = icons[name] || Code2;
  return <Icon className={className} aria-hidden="true" strokeWidth={1.7} style={{ width: "1em", height: "1em", display: "inline-block", verticalAlign: "middle", flexShrink: 0 }} />;
}
