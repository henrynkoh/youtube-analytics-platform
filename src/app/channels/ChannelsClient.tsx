'use client';

import { FormEvent, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { RIGHT_DIVISION_CHANNELS } from '@/lib/right-division-channels';

export default function ChannelsClient() {
  const searchParams = useSearchParams();
  const initial = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(initial);
  const [submitted, setSubmitted] = useState(initial);

  const matched = useMemo(() => {
    if (!submitted.trim()) return null;
    const q = submitted.toLowerCase();
    return (
      RIGHT_DIVISION_CHANNELS.find(
        (c) =>
          c.url.toLowerCase().includes(q) ||
          c.handle.toLowerCase().includes(q) ||
          c.name.toLowerCase().includes(q) ||
          c.id.toLowerCase().includes(q)
      ) ?? null
    );
  }, [submitted]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(query);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="font-display text-3xl text-[var(--ink)] md:text-4xl">Teacher channels</h1>
        <p className="mt-2 max-w-2xl text-[var(--ink)]/65">
          Analyze YouTube channels that labour in rightly dividing the word of truth.
        </p>
      </div>

      <div className="surface mb-10">
        <h2 className="font-display text-xl text-[var(--ink)]">Analyze a channel</h2>
        <form className="mt-4 space-y-3" onSubmit={onSubmit}>
          <label htmlFor="channelUrl" className="block text-sm font-medium text-[var(--ink)]/80">
            Channel URL, handle, or name
          </label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="text"
              id="channelUrl"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., https://youtube.com/@사랑과오래참음으로"
              className="input flex-grow"
            />
            <button type="submit" className="btn-ink shrink-0">
              Analyze
            </button>
          </div>
        </form>

        {submitted && (
          <div className="mt-6 border-t border-[var(--ink)]/10 pt-6">
            {matched ? (
              <div>
                <p className="text-sm uppercase tracking-wide text-[var(--gold)]">Matched roster</p>
                <h3 className="font-display mt-1 text-2xl text-[var(--ink)]">{matched.name}</h3>
                <p className="text-[var(--ink)]/60">
                  {matched.handle} · {matched.focus}
                </p>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-md bg-[var(--paper-deep)] p-4">
                    <p className="text-sm text-[var(--ink)]/55">Status</p>
                    <p className="mt-1 font-medium text-[var(--ink)]">Ready for API connect</p>
                  </div>
                  <div className="rounded-md bg-[var(--paper-deep)] p-4">
                    <p className="text-sm text-[var(--ink)]/55">Ministry</p>
                    <p className="mt-1 font-medium text-[var(--ink)]">
                      {matched.ministry ?? 'Right division'}
                    </p>
                  </div>
                  <div className="rounded-md bg-[var(--paper-deep)] p-4">
                    <p className="text-sm text-[var(--ink)]/55">Open</p>
                    <a
                      href={matched.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block font-medium text-[var(--ink)] underline-offset-2 hover:underline"
                    >
                      YouTube ↗
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-[var(--ink)]/65">
                No roster match for “{submitted}”. Connect the YouTube Data API to fetch live
                metrics for any channel URL.
              </p>
            )}
          </div>
        )}
      </div>

      <div>
        <h2 className="font-display mb-4 text-xl text-[var(--ink)]">Right-division teachers</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {RIGHT_DIVISION_CHANNELS.map((channel) => (
            <li key={channel.id}>
              <button
                type="button"
                onClick={() => {
                  setQuery(channel.url);
                  setSubmitted(channel.url);
                }}
                className="surface w-full text-left transition hover:border-[var(--gold)]/40"
              >
                <p className="font-medium text-[var(--ink)]">{channel.name}</p>
                <p className="mt-1 text-sm text-[var(--ink)]/55">{channel.focus}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
