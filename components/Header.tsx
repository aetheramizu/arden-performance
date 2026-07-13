'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-obsidian/95 border-white/[0.06] shadow-[0_1px_20px_rgba(0,0,0,0.3)]'
          : 'bg-obsidian/60 border-white/[0.03]'
      }`}
    >
      {/* Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-obsidian focus:text-warmWhite focus:px-6 focus:py-3 focus:border focus:border-white/20 focus:outline-none"
      >
        Skip to main content
      </a>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Brand Mark */}
        <Link
          href="#"
          className="font-serif text-2xl tracking-[0.25em] uppercase font-light text-warmWhite hover:text-white transition-colors duration-300"
          aria-label="ARDEN Homepage"
        >
          ARDEN
        </Link>

        {/* Editorial Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-12" aria-label="Main Navigation">
          <Link
            href="#exclusives"
            className="text-[10px] uppercase tracking-[0.2em] text-mutedGray hover:text-warmWhite transition-colors duration-200"
          >
            The Exclusives
          </Link>
          <Link
            href="#system"
            className="text-[10px] uppercase tracking-[0.2em] text-mutedGray hover:text-warmWhite transition-colors duration-200"
          >
            The System
          </Link>
          <Link
            href="#diagnostic"
            className="text-[10px] uppercase tracking-[0.2em] text-mutedGray hover:text-warmWhite transition-colors duration-200"
          >
            Diagnostics
          </Link>
          <Link
            href="#retreats"
            className="text-[10px] uppercase tracking-[0.2em] text-mutedGray hover:text-warmWhite transition-colors duration-200"
          >
            Retreat Chambers
          </Link>
        </nav>

        {/* Premium CTA Button */}
        <div className="flex items-center space-x-6">
          <Link
            href="#apply"
            className="relative group overflow-hidden px-6 py-3 md:px-5 md:py-2.5 border border-white/25 text-[10px] uppercase tracking-[0.2em] text-warmWhite rounded-none transition-all duration-300 hover:border-warmWhite hover:bg-white/[0.05] hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]"
          >
            <span className="relative z-10">Request Membership</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
