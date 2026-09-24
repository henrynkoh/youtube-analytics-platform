import MainLayout from '@/components/MainLayout';
import {
  STUDY_HUB_URL,
  STUDY_BLOG_URL,
  VERSE_REF,
  VERSE_TEXT,
  MINISTRY_CHANNEL,
} from '@/lib/right-division-channels';

const WEEKS = [
  { week: 1, theme: 'Foundations of Right Division' },
  { week: 2, theme: 'The Grace Age Defined' },
  { week: 3, theme: 'Israel, Law, and the Kingdom' },
  { week: 4, theme: "Paul's Epistles – Our Instruction" },
  { week: 5, theme: 'Practical Right Division' },
  { week: 6, theme: 'Advanced Dispensational Truths' },
  { week: 7, theme: 'Common Doctrinal Pitfalls' },
  { week: 8, theme: 'Advanced Application & Maturity' },
  { week: '9–12', theme: 'Continued studies through Finishing Strong' },
];

export default function StudyPage() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--gold)]">{VERSE_REF}</p>
        <h1 className="font-display mt-3 text-3xl text-[var(--ink)] md:text-4xl">
          Rightly dividing the word of truth
        </h1>
        <blockquote className="mt-6 border-l-2 border-[var(--gold)] pl-4 text-lg italic text-[var(--ink)]/75">
          {VERSE_TEXT}
        </blockquote>

        <p className="mt-8 text-[var(--ink)]/70">
          This analytics desk sits beside the public KJV study library — a 12-week, 344-post
          series on mid-Acts dispensational truth, published for {MINISTRY_CHANNEL.handle}.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={STUDY_HUB_URL} target="_blank" rel="noopener noreferrer" className="btn-ink">
            Open study hub
          </a>
          <a
            href={STUDY_BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-[var(--ink)]/20 px-5 py-2.5 font-medium text-[var(--ink)] hover:bg-white/60"
          >
            Blog
          </a>
        </div>

        <h2 className="font-display mt-14 text-2xl text-[var(--ink)]">Series overview</h2>
        <ol className="mt-6 space-y-3">
          {WEEKS.map((item) => (
            <li
              key={String(item.week)}
              className="flex gap-4 border-b border-[var(--ink)]/8 pb-3 last:border-0"
            >
              <span className="w-14 shrink-0 font-medium text-[var(--gold)]">W{item.week}</span>
              <span className="text-[var(--ink)]/80">{item.theme}</span>
            </li>
          ))}
        </ol>
      </div>
    </MainLayout>
  );
}
