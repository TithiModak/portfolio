export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="text-zinc-700 dark:text-zinc-300">
        This form posts to a simple API route (no accounts). It currently logs the message.
        You can connect it to an email service later.
      </p>

      <form
        className="space-y-3 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
        action="/api/contact"
        method="post"
      >
        <div className="space-y-1">
          <label className="text-sm">Name</label>
          <input
            name="name"
            required
            className="w-full rounded-lg border border-zinc-200 bg-transparent px-3 py-2 dark:border-zinc-800"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-zinc-200 bg-transparent px-3 py-2 dark:border-zinc-800"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full rounded-lg border border-zinc-200 bg-transparent px-3 py-2 dark:border-zinc-800"
          />
        </div>

        <button
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}