import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../../lib/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <p className="text-zinc-700 dark:text-zinc-300">{project.summary}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-zinc-200 px-2 py-1 text-xs dark:border-zinc-800"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2 text-sm">
          {project.liveUrl ? (
            <a className="underline underline-offset-4" href={project.liveUrl} target="_blank" rel="noreferrer">
              Live demo
            </a>
          ) : null}
          {project.githubUrl ? (
            <a className="underline underline-offset-4" href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : null}
        </div>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Details</h2>
        <p className="text-zinc-700 dark:text-zinc-300">{project.description}</p>
      </section>
    </article>
  );
}