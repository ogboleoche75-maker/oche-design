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
          ? "backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(245,240,232,0.92)" : "transparent",
        borderColor: scrolled ? "var(--line)" : "transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* OO Monogram */}
        <a
          href="#"
          className="text-xl tracking-tight hover:opacity-60 transition-opacity"
          style={{ color: "var(--ink)", fontWeight: 700 }}
        >
          OO<span style={{ color: "var(--ink-muted)" }}>.</span>
        </a>

        {/* Nav links */}
        <ul className="hidden sm:flex items-center gap-8 text-sm tracking-wide uppercase"
            style={{ color: "var(--ink-muted)", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em" }}>
          <li><a href="#work" className="nav-link" style={{ color: "var(--ink)" }}>Work</a></li>
          <li><a href="#about" className="nav-link" style={{ color: "var(--ink)" }}>About</a></li>
          <li><a href="#contact" className="nav-link" style={{ color: "var(--ink)" }}>Contact</a></li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              className="nav-cta px-4 py-2 border"
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
              }}
            >
              Resume ↗
            </a>
          </li>
        </ul>

        {/* Mobile CTA */}
        <a
          href="#contact"
          className="nav-cta sm:hidden px-4 py-1.5 border text-xs tracking-widest uppercase"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
