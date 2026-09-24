'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(path + '/');
  };

  const navLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Teachers', href: '/channels' },
    { name: 'Videos', href: '/videos' },
    { name: 'Benchmark', href: '/benchmark' },
    { name: 'Study', href: '/study' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[var(--ink)]/95 text-[var(--text)] backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="font-display text-lg font-semibold text-[var(--gold)] md:text-xl">
                Rightly Dividing
              </Link>
            </div>
            <div className="ml-8 hidden items-center space-x-1 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive(link.href)
                      ? 'bg-white/10 text-[var(--gold-soft)]'
                      : 'text-[var(--muted)] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-6 hidden items-center md:flex">
            <Link
              href="/dashboard"
              className="rounded-md bg-[var(--gold)] px-4 py-2 text-sm font-medium text-[var(--ink)] hover:bg-[var(--gold-soft)]"
            >
              Open tools
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-[var(--muted)] hover:bg-white/10 hover:text-white focus:outline-none"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} border-t border-white/10 md:hidden`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                isActive(link.href)
                  ? 'bg-white/10 text-[var(--gold-soft)]'
                  : 'text-[var(--muted)] hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/dashboard"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 block rounded-md bg-[var(--gold)] px-3 py-2 text-center text-base font-medium text-[var(--ink)]"
          >
            Open tools
          </Link>
        </div>
      </div>
    </nav>
  );
}
