export default function ResumePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Resume</h1>
      <p className="text-zinc-700 dark:text-zinc-300">
        Add your resume PDF in <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-900">/public/resume.pdf</code>.
      </p>

      <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
        <a
          href="/resume.pdf"
          className="underline underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          Download resume
        </a>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          Optional: you can embed it using an iframe, but downloading is simplest.
        </p>
      </div>
    </div>
  );
}