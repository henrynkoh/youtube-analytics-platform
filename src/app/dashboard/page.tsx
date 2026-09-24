import MainLayout from '@/components/MainLayout';
import Link from 'next/link';
import {
  MINISTRY_CHANNEL,
  RIGHT_DIVISION_CHANNELS,
  STUDY_HUB_URL,
} from '@/lib/right-division-channels';

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--gold)]">Ministry desk</p>
          <h1 className="font-display mt-2 text-3xl text-[var(--ink)] md:text-4xl">Dashboard</h1>
          <p className="mt-2 max-w-2xl text-[var(--ink)]/65">
            Insights for {MINISTRY_CHANNEL.handle} and fellow right-division teachers —
            channel health, video reach, and peer benchmarks.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Link href="/channels" className="surface block transition hover:border-[var(--gold)]/40">
            <h3 className="font-display text-lg text-[var(--ink)]">Analyze a teacher</h3>
            <p className="mt-2 text-sm text-[var(--ink)]/60">
              Paste a channel URL and review growth, cadence, and engagement.
            </p>
          </Link>
          <Link href="/videos" className="surface block transition hover:border-[var(--gold)]/40">
            <h3 className="font-display text-lg text-[var(--ink)]">Analyze a lesson</h3>
            <p className="mt-2 text-sm text-[var(--ink)]/60">
              Title, retention signals, and how a single teaching travels.
            </p>
          </Link>
          <Link href="/benchmark" className="surface block transition hover:border-[var(--gold)]/40">
            <h3 className="font-display text-lg text-[var(--ink)]">Benchmark peers</h3>
            <p className="mt-2 text-sm text-[var(--ink)]/60">
              Place your work beside other mid-Acts ministries.
            </p>
          </Link>
        </div>

        <div className="mb-12">
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 className="font-display text-xl text-[var(--ink)]">Right-division roster</h2>
            <Link href="/channels" className="text-sm font-medium text-[var(--ink)] underline-offset-2 hover:underline">
              View all
            </Link>
          </div>
          <ul className="divide-y divide-[var(--ink)]/10 overflow-hidden rounded-lg border border-[var(--ink)]/10 bg-white/80">
            {RIGHT_DIVISION_CHANNELS.slice(0, 4).map((channel) => (
              <li key={channel.id} className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
                <div>
                  <p className="font-medium text-[var(--ink)]">{channel.name}</p>
                  <p className="text-sm text-[var(--ink)]/55">{channel.focus}</p>
                </div>
                <Link
                  href={`/channels?q=${encodeURIComponent(channel.url)}`}
                  className="text-sm font-medium text-[var(--ink)] underline-offset-2 hover:underline"
                >
                  Analyze
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="surface flex flex-col gap-4 bg-[var(--ink)] text-[var(--text)] md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-xl text-[var(--gold)]">12-week KJV study</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Foundations through finishing strong — 344 posts on right division.
            </p>
          </div>
          <a
            href={STUDY_HUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0"
          >
            Open study hub
          </a>
        </div>
      </div>
    </MainLayout>
  );
}
