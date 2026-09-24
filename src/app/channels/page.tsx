import { Suspense } from 'react';
import MainLayout from '@/components/MainLayout';
import ChannelsClient from './ChannelsClient';

export default function Channels() {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="mx-auto max-w-6xl px-4 py-10 text-[var(--ink)]/60">Loading teachers…</div>
        }
      >
        <ChannelsClient />
      </Suspense>
    </MainLayout>
  );
}
