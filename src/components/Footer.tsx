import Link from 'next/link';
import { STUDY_HUB_URL, STUDY_BLOG_URL, MINISTRY_CHANNEL } from '@/lib/right-division-channels';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--ink)] py-12 text-[var(--text)]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg text-[var(--gold)]">Rightly Dividing</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Ministry YouTube analytics for workmen who need not be ashamed — measuring
              reach so the Word can run.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg text-white">Tools</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li>
                <Link href="/channels" className="hover:text-[var(--gold-soft)]">
                  Teacher channels
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-[var(--gold-soft)]">
                  Video analysis
                </Link>
              </li>
              <li>
                <Link href="/benchmark" className="hover:text-[var(--gold-soft)]">
                  Benchmarks
                </Link>
              </li>
              <li>
                <Link href="/study" className="hover:text-[var(--gold-soft)]">
                  Study &amp; doctrine
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg text-white">Ministry</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li>
                <a href={STUDY_HUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold-soft)]">
                  KJV study hub
                </a>
              </li>
              <li>
                <a href={STUDY_BLOG_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold-soft)]">
                  Blog
                </a>
              </li>
              <li>
                <a href={MINISTRY_CHANNEL.url} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold-soft)]">
                  {MINISTRY_CHANNEL.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-[var(--muted)]">
          Scripture quotations are from the King James Version (public domain). · 2 Timothy 2:15
        </div>
      </div>
    </footer>
  );
}
