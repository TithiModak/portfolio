import projects from "../data/projects.json";
import type { Project } from "./types";

export function getAllProjects(): Project[] {
  return (projects as Project[]).slice().sort((a, b) => {
    const af = a.featured ? 1 : 0;
    const bf = b.featured ? 1 : 0;
    return bf - af;
  });
}

export function getProjectBySlug(slug: string): Project | undefined {
  return (projects as Project[]).find((p) => p.slug === slug);
}

export function getTechFilters(): string[] {
  const all = new Set<string>();
  (projects as Project[]).forEach((p) => p.techStack.forEach((t) => all.add(t)));
  return Array.from(all).sort();
}