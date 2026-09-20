export type Category = "Mobile" | "Web" | "WordPress" | "Backend";

export type Metric = { label: string; value: string };
export type CaseSection = { heading: string; body: string[] };

export type Project = {
  slug: string;
  title: string;
  client: string;
  role: string;
  period: string;
  category: Category;
  summary: string;
  outcome: string;
  stack: string[];
  featured?: boolean;
  image: string;
  screens?: string[];
  links?: { appstore?: string; playstore?: string; website?: string };
  metrics: Metric[];
  context: string[];
  approach: string[];
  build: CaseSection[];
  results: string[];
  reflection: string[];
};

export type Service = {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
};

export type StackGroup = { group: string; items: string[] };
export type Testimonial = { quote: string; name: string; role: string };
