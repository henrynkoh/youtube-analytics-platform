import MainLayout from '@/components/MainLayout';

export default function Videos() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8">
          <h1 className="font-display text-3xl text-[var(--ink)] md:text-4xl">Lesson &amp; Shorts analysis</h1>
          <p className="mt-2 max-w-2xl text-[var(--ink)]/65">
            Measure how individual teachings travel — titles, topics, and formats that carry
            Pauline truth.
          </p>
        </div>

        <div className="surface mb-10">
          <h2 className="font-display text-xl text-[var(--ink)]">Analyze a video</h2>
          <form className="mt-4 space-y-3">
            <label htmlFor="videoUrl" className="block text-sm font-medium text-[var(--ink)]/80">
              Video URL or ID
            </label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="text"
                id="videoUrl"
                placeholder="e.g., https://www.youtube.com/watch?v=…"
                className="input flex-grow"
              />
              <button type="submit" className="btn-ink shrink-0">
                Analyze
              </button>
            </div>
            <p className="text-sm text-[var(--ink)]/50">
              Live metrics require a YouTube Data API key in your environment.
            </p>
          </form>
        </div>

        <div className="surface">
          <p className="text-center text-[var(--ink)]/55">
            No lessons analyzed yet. Paste a teaching URL above to begin.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
