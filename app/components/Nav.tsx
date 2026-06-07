"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["How it works", "Features", "Pricing"];

  return (
    <header
      style={{
        transition: "background 0.4s, border-color 0.4s",
        background: scrolled ? "rgba(2,6,23,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : undefined,
        borderBottom: scrolled
          ? "1px solid rgba(51,65,85,0.5)"
          : "1px solid transparent",
      }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* logo */}
        <a
          href="/"
          className="flex items-center gap-2 font-display font-800 text-xl text-base-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            width={32}
            height={32}
            aria-hidden="true"
          >
            <rect width="64" height="64" rx="14" fill="#10b981" />
            <circle cx="32" cy="20" r="10" fill="#ecfdf5" opacity="0.15" />
            <path
              d="M32 44 L32 26"
              stroke="#ecfdf5"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M32 34 C26 30 20 30 20 24 C20 24 26 22 32 28"
              fill="#ecfdf5"
              opacity="0.9"
            />
            <path
              d="M32 28 C38 22 44 22 44 16 C44 16 38 14 32 22"
              fill="#ffffff"
            />
            <circle cx="26" cy="47" r="2" fill="#ecfdf5" opacity="0.6" />
            <circle cx="32" cy="49" r="2" fill="#ecfdf5" opacity="0.8" />
            <circle cx="38" cy="47" r="2" fill="#ecfdf5" opacity="0.6" />
          </svg>
          Sproute
        </a>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-base-400">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-base-100 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* desktop ctas */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://sproute-rho.vercel.app"
            className="text-sm text-base-400 hover:text-base-100 transition-colors duration-200"
          >
            Sign in
          </a>
          <a
            href="https://sproute-rho.vercel.app"
            className="text-sm bg-brand-500 hover:bg-brand-400 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/20"
          >
            Get started free
          </a>
        </div>

        {/* hamburger */}
        <button
          onClick={() => setMobileOpen((p) => !p)}
          className="md:hidden text-base-400 hover:text-base-100"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-base-950/95 backdrop-blur-xl border-t border-base-800 px-6 py-5 space-y-4">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setMobileOpen(false)}
              className="block text-base-300 hover:text-base-100 transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="https://sproute-rho.vercel.app"
            className="block w-full text-center bg-brand-500 text-white py-2.5 rounded-xl font-medium text-sm"
          >
            Get started free
          </a>
        </div>
      )}
    </header>
  );
}
