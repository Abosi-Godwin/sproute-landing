"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const APP_URL = "https://sproute-rho.vercel.app";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  
  <rect width="64" height="64" rx="14" fill="#10b981"/>
  
  <circle cx="32" cy="20" r="10" fill="#ecfdf5" opacity="0.15"/>

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

  <circle cx="26" cy="47" r="2" fill="#ecfdf5" opacity="0.6"/>
  <circle cx="32" cy="49" r="2" fill="#ecfdf5" opacity="0.8"/>
  <circle cx="38" cy="47" r="2" fill="#ecfdf5" opacity="0.6"/>
</svg>
                    </div>
                    <span className="font-display font-bold text-lg">Sproute</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {["How it works", "Features", "Pricing"].map(item => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                            className="text-sm text-zinc-400 hover:text-white transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-3">
                    <a
                        href={APP_URL}
                        className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                        Sign in
                    </a>
                    <a
                        href={APP_URL}
                        className="text-sm font-medium bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        Get started free
                    </a>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 text-zinc-400"
                >
                    {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {open && (
                <div className="md:hidden border-t border-white/5 bg-[#09090b] px-6 py-4 space-y-4">
                    {["How it works", "Features", "Pricing"].map(item => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                            onClick={() => setOpen(false)}
                            className="block text-sm text-zinc-400 hover:text-white transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href={APP_URL}
                        className="block text-sm font-medium text-center bg-emerald-500 text-white px-4 py-3 rounded-lg"
                    >
                        Get started free
                    </a>
                </div>
            )}
        </nav>
    );
}