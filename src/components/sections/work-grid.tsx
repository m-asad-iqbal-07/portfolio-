"use client";

import { useState } from "react";
import { categories, projects } from "@/content/projects";
import { ProjectCard } from "./project-card";

const categoryIcons = {
  All: "fi fi-rr-apps",
  Mobile: "fi fi-rr-mobile-button",
  Web: "fi fi-rr-browser",
} as const;

export function WorkGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="editorial-work-grid">
      <div className="editorial-filters" aria-label="Filter flagship projects">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            aria-pressed={category === filter}
          >
            <i className={categoryIcons[category]} aria-hidden="true" />
            {category}
          </button>
        ))}
      </div>
      {filtered.length ? (
        <div className="editorial-project-grid">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="editorial-empty">No projects in this category yet.</p>
      )}
    </div>
  );
}
