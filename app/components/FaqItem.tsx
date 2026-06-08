"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-base-800 hover:border-base-700 rounded-2xl overflow-hidden transition-colors duration-300">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-display font-600 text-base-100 text-sm leading-snug">
          {q}
        </span>
        <ChevronDown
          size={16}
          className="text-base-500 shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      <div
        style={{
          maxHeight: open ? "300px" : "0px",
          transition: "max-height 0.35s ease",
          overflow: "hidden",
        }}
      >
        <p className="px-5 pb-5 text-base-400 text-sm leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}
