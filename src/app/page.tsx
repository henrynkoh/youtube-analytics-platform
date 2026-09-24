import Link from 'next/link';
import MainLayout from '@/components/MainLayout';
import {
  MINISTRY_CHANNEL,
  STUDY_HUB_URL,
  VERSE_REF,
  VERSE_TEXT,
} from '@/lib/right-division-channels';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero — one composition: brand, headline, support, CTAs, full-bleed visual */}
      <section className="relative min-h-[100svh] overflow-hidden text-[var(--text)]">
        <div className="absolute inset-0 rd-glow" aria-hidden />
        <div className="absolute inset-0 rd-grid opacity-40" aria-hidden />
        <div
          className="absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full bg-[var(--gold)]/10 blur-3xl animate-rd-pulse"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-24 md:px-10">
          <p className="font-display animate-rd-fade-up text-3xl tracking-tight text-[var(--gold)] sm:text-4xl md:text-5xl">
            Rightly Dividing
          </p>
          <div className="animate-rd-shear mt-3 h-px w-40 bg-gradient-to-r from-[var(--gold)] to-transparent" />

          <h1 className="font-display animate-rd-fade-up-delay mt-8 max-w-3xl text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            the word of truth
          </h1>

          <p className="animate-rd-fade-up-delay mt-5 max-w-xl text-lg text-[var(--muted)] md:text-xl">
            Ministry analytics for KJV teachers who measure what they preach —
            channel growth, sermon reach, and short-form fruit for the grace message.
          </p>

          <div className="animate-rd-fade-up-delay-2 mt-10 flex flex-wrap gap-4">
            <Link href="/dashboard" className="btn-primary">
              Open dashboard
            </Link>
            <a
              href={STUDY_HUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Study hub
            </a>
          </div>

          <p className="animate-rd-fade-up-delay-2 mt-14 max-w-2xl border-l-2 border-[var(--gold)]/50 pl-4 text-sm italic text-[var(--muted)]">
            “{VERSE_TEXT}” — {VERSE_REF} (KJV)
          </p>
        </div>

        {/* Full-bleed scripture/atmosphere plane */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/80 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-8 right-6 hidden max-w-xs text-right md:block"
          aria-hidden
        >
          <p className="font-display text-6xl leading-none text-white/[0.06]">2 Tim</p>
          <p className="font-display text-8xl leading-none text-white/[0.08]">2:15</p>
        </div>
      </section>

      {/* One job: what this tool does for teachers */}
      <section className="border-t border-[var(--ink)]/10 bg-[var(--paper)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl text-[var(--ink)] md:text-4xl">
            Analytics that serve the Word
          </h2>
          <p className="mt-4 text-lg text-[var(--ink)]/65">
            Track how right-division teaching travels on YouTube — without burying the
            message under vanity metrics.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl text-[var(--ink)]">Channel health</h3>
            <p className="mt-2 text-[var(--ink)]/65">
              Subscribers, view velocity, and upload rhythm for grace-age teaching channels.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-[var(--ink)]">Sermon &amp; Shorts reach</h3>
            <p className="mt-2 text-[var(--ink)]/65">
              See which titles, topics, and formats carry Pauline truth farthest.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-[var(--ink)]">Teacher benchmarks</h3>
            <p className="mt-2 text-[var(--ink)]/65">
              Compare against fellow mid-Acts ministries — learn, not compete for applause.
            </p>
          </div>
        </div>
      </section>

      {/* One job: ministry home channel CTA */}
      <section className="bg-[var(--ink-2)] px-6 py-20 text-[var(--text)] md:px-10">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--gold)]">
              Home channel
            </p>
            <h2 className="font-display mt-2 text-3xl md:text-4xl">
              {MINISTRY_CHANNEL.handle}
            </h2>
            <p className="mt-3 max-w-md text-[var(--muted)]">
              {MINISTRY_CHANNEL.focus}. Open the dashboard or visit the 12-week study.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/channels" className="btn-primary">
              Analyze teachers
            </Link>
            <a
              href={MINISTRY_CHANNEL.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              YouTube
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
