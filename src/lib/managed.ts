import content from "@/content/managed.json";
export type ManagedPage = (typeof content.pages)["/"];
export const managed = content;
export const managedPages: Record<string, ManagedPage> = content.pages;
export function getPageContent(path: string) { return managedPages[path]; }
export const indexableEnvironment = process.env.VERCEL_ENV !== "preview" && process.env.SEO_NOINDEX !== "true";
