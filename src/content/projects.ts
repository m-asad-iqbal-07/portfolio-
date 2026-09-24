import type { Project } from "@/types/content";
import content from "./managed.json";

export const projects = content.projects as Project[];
export function getProject(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}
export const categories = ["All", "Mobile", "Web"] as const;
