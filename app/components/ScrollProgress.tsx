"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total ? (scrolled / total) * 100 : 0);
      setShowTop(scrolled > 500);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      {/* thin emerald progress bar */}
      <div className="fixed top-0 left-0 z-[100] h-0.5 w-full bg-brand-500/10 pointer-events-none">
        <div
          className="h-full bg-brand-500"
          style={{ width: `${progress}%`, transition: "width 80ms linear" }}
        />
      </div>

      {/* back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        style={{
          opacity: showTop ? 1 : 0,
          transform: showTop ? "translateY(0)" : "translateY(12px)",
          pointerEvents: showTop ? "auto" : "none",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-brand-500 hover:bg-brand-400 text-white flex items-center justify-center shadow-lg shadow-brand-500/30 hover:-translate-y-0.5"
      >
        <ArrowUp size={16} />
      </button>
    </>
  );
}
