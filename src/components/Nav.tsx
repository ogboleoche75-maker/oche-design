"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* OO Monogram */}
        <a href="#" className="font-bold text-xl tracking-tight text-slate-900 hover:text-blue-600 transition-colors">
          OO
        </a>

        {/* Nav links */}
        <ul className="hidden sm:flex items-center gap-8 text-sm font-medium text-slate-500">
          <li><a href="#work" className="hover:text-slate-900 transition-colors">Work</a></li>
          <li><a href="#about" className="hover:text-slate-900 transition-colors">About</a></li>
          <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-4 py-2 rounded-full border border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              Resume ↗
            </a>
          </li>
        </ul>

        {/* Mobile CTA */}
        <a
          href="#contact"
          className="sm:hidden px-4 py-1.5 rounded-full border border-slate-200 text-sm font-medium text-slate-700"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
