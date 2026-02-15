import Link from "next/link";
import type { Project } from "../lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border border-zinc-200 p-5 hover:shadow-sm dark:border-zinc-800">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {project.summary}
          </p>
        </div>
        {project.featured ? (
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs dark:bg-zinc-900">
            Featured
          </span>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((t) => (
          <span
            key={t}
            className="rounded-full border border-zinc-200 px-2 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm font-medium underline underline-offset-4"
        >
          Read more
        </Link>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          >
            Live
          </a>
        ) : null}
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </div>
  );
}