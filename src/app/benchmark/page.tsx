import MainLayout from '@/components/MainLayout';
import Link from 'next/link';
import { RIGHT_DIVISION_CHANNELS } from '@/lib/right-division-channels';

export default function Benchmark() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8">
          <h1 className="font-display text-3xl text-[var(--ink)] md:text-4xl">Teacher benchmarks</h1>
          <p className="mt-2 max-w-2xl text-[var(--ink)]/65">
            Compare mid-Acts ministries side by side — cadence, reach, and engagement — to learn,
            not to chase applause.
          </p>
        </div>

        <div className="surface mb-10">
          <h2 className="font-display text-xl text-[var(--ink)]">Start a comparison</h2>
          <p className="mt-2 text-[var(--ink)]/60">
            Pick teachers from the right-division roster or add any channel URL.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/channels" className="btn-ink">
              Choose teachers
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-md border border-[var(--ink)]/20 px-5 py-2.5 font-medium text-[var(--ink)] hover:bg-white/60"
            >
              Back to desk
            </Link>
          </div>
        </div>

        <h2 className="font-display mb-4 text-xl text-[var(--ink)]">Suggested peer set</h2>
        <ul className="divide-y divide-[var(--ink)]/10 overflow-hidden rounded-lg border border-[var(--ink)]/10 bg-white/80">
          {RIGHT_DIVISION_CHANNELS.map((channel) => (
            <li key={channel.id} className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
              <div>
                <p className="font-medium text-[var(--ink)]">{channel.name}</p>
                <p className="text-sm text-[var(--ink)]/55">{channel.focus}</p>
              </div>
              <Link
                href={`/channels?q=${encodeURIComponent(channel.url)}`}
                className="text-sm font-medium text-[var(--ink)] underline-offset-2 hover:underline"
              >
                Include
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
}
