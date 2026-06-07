"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, Sparkles, Star, Zap } from "lucide-react";

/* ── animated dashboard mock ── */
function DashboardMock() {
  const leads = [
    { name: "TopView Hotel Asaba", cat: "Hotel", score: 10, tag: "🔥 Hot" },
    { name: "Ella's Store", cat: "Boutique", score: 8, tag: "⚡ Warm" },
    { name: "Goodness Boutique", cat: "Clothing", score: 7, tag: "⚡ Warm" },
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActive((p) => (p + 1) % leads.length),
      2200
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* glow */}
      <div className="absolute inset-0 bg-brand-500/20 blur-3xl rounded-3xl scale-110 pointer-events-none" />

      <div className="relative bg-base-900 border border-base-700/60 rounded-2xl overflow-hidden shadow-2xl">
        {/* browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-base-800">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-brand-500/70" />
          <span className="ml-auto text-xs text-base-500 font-mono">
            sproute-rho.vercel.app
          </span>
        </div>

        {/* stats row */}
        <div className="grid grid-cols-3 gap-px bg-base-800 border-b border-base-800">
          {[
            { label: "Saved", val: "200" },
            { label: "Messaged", val: "18" },
            { label: "Replied", val: "6" },
          ].map((s) => (
            <div key={s.label} className="bg-base-900 px-3 py-2.5 text-center">
              <p className="text-base-400 text-xs">{s.label}</p>
              <p className="text-base-50 font-display font-700 text-lg leading-none mt-0.5">
                {s.val}
              </p>
            </div>
          ))}
        </div>

        {/* leads list */}
        <div className="p-3 space-y-2">
          {leads.map((l, i) => (
            <div
              key={l.name}
              style={{
                transition: "all 0.4s ease",
                background:
                  i === active
                    ? "linear-gradient(90deg,rgba(16,185,129,.12),transparent)"
                    : undefined,
                borderColor:
                  i === active ? "rgba(16,185,129,.35)" : "transparent",
              }}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl border"
            >
              <div>
                <p className="text-base-100 text-sm font-medium leading-none">
                  {l.name}
                </p>
                <p className="text-base-500 text-xs mt-1">{l.cat}</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-brand-400 font-mono font-600">
                  {l.score}/10
                </span>
                <p className="text-xs text-base-500 mt-0.5">{l.tag}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ai message preview */}
        <div className="mx-3 mb-3 p-3 bg-brand-500/10 border border-brand-500/20 rounded-xl flex items-start gap-2">
          <Sparkles size={14} className="text-brand-400 mt-0.5 shrink-0" />
          <p className="text-xs text-base-300 leading-relaxed">
            <span className="text-brand-400 font-medium">AI message ready</span>{" "}
            &mdash; &ldquo;Hey TopView, noticed your listing could use a
            website&hellip;&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── hero ── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-24 overflow-hidden">
      {/* bg glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-500/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-brand-600/5 blur-[80px] pointer-events-none" />

      {/* grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(51,65,85,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(51,65,85,0.12) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* left — copy */}
        <div>
          <div
            className="inline-flex items-center gap-2 text-xs text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1.5 rounded-full mb-6 font-medium"
            style={{ animation: "fadeDown 0.6s ease 0.1s both" }}
          >
            <Zap size={12} />
            Built for freelancers who mean business
          </div>

          <h1
            className="font-display font-800 text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-base-50 mb-6"
            style={{ animation: "fadeUp 0.7s ease 0.25s both" }}
          >
            Find businesses.{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Land clients.
            </span>
          </h1>

          <p
            className="text-base-400 text-lg leading-relaxed mb-8 max-w-md"
            style={{ animation: "fadeUp 0.7s ease 0.4s both" }}
          >
            Sproute helps freelancers discover local businesses on Google Maps,
            score which ones are worth contacting, and generate personalised
            WhatsApp messages that actually get replies.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 mb-8"
            style={{ animation: "fadeUp 0.7s ease 0.55s both" }}
          >
            <a
              href="https://sproute-rho.vercel.app"
              className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-400 text-white px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/25 hover:-translate-y-0.5"
            >
              Start for free
              <ArrowRight size={15} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-base-800 hover:bg-base-700 text-base-200 border border-base-700 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              See how it works
            </a>
          </div>

          <p
            className="text-base-600 text-xs flex items-center gap-1.5"
            style={{ animation: "fadeUp 0.7s ease 0.65s both" }}
          >
            <Check size={12} className="text-brand-500" />
            No credit card required &nbsp;&middot;&nbsp;
            <Check size={12} className="text-brand-500" />
            Works on your phone
          </p>
        </div>

        {/* right — dashboard */}
        <div
          style={{ animation: "fadeLeft 0.9s ease 0.3s both" }}
          className="hidden lg:block"
        >
          <DashboardMock />
        </div>
      </div>

      {/* trusted by strip */}
      <div
        className="absolute bottom-8 inset-x-0 text-center"
        style={{ animation: "fadeUp 0.6s ease 0.8s both" }}
      >
        <p className="text-base-600 text-xs flex items-center justify-center gap-2">
          <Star size={11} className="text-brand-500" />
          Used by freelancers closing real clients in Asaba, Lagos and Enugu
          <Star size={11} className="text-brand-500" />
        </p>
      </div>
    </section>
  );
}
