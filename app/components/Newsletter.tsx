"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    if (!email || !email.includes("@")) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  }

  return (
    <section className="py-16 px-6 border-y border-base-800/60">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-brand-400 text-sm font-medium mb-2 uppercase tracking-widest">
          Stay in the loop
        </p>
        <h2 className="font-display font-700 text-2xl text-base-50 mb-2">
          Get outreach tips in your inbox
        </h2>
        <p className="text-base-500 text-sm mb-6">
          No spam. Just actionable tips on landing clients with WhatsApp outreach.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-brand-400 font-medium text-sm">
            <CheckCircle size={18} />
            You&apos;re in — we&apos;ll be in touch.
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="your@email.com"
              className="flex-1 bg-base-900 border border-base-700 focus:border-brand-500/60 text-base-100 placeholder:text-base-600 rounded-xl px-4 py-2.5 text-sm outline-none transition-colors duration-200"
            />
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-400 disabled:opacity-60 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 shrink-0"
            >
              {loading ? "..." : (
                <>Subscribe <ArrowRight size={14} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
