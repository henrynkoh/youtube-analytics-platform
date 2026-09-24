import './globals.css';
import { Fraunces, Outfit } from 'next/font/google';
import { Metadata } from 'next';
import Providers from '@/components/Providers';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rightly Dividing · Ministry YouTube Analytics',
  description:
    'Channel and video analytics for KJV right-division Bible teachers — study to shew thyself approved, rightly dividing the word of truth (2 Timothy 2:15).',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${fraunces.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
