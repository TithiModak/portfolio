import { getAllProjects } from "../../lib/projects";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-8 px-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Projects</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Here are some of my recent projects and work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-6 space-y-3 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors bg-white dark:bg-zinc-800"
          >
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {project.title}
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {project.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {(project.githubUrl || project.liveUrl) && (
              <div className="flex gap-4 pt-2 text-sm">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    GitHub →
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    Live →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}