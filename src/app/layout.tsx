import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'YouTube Analytics Platform',
  description: 'Comprehensive YouTube channel and video analytics for content creators, marketers, and researchers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
