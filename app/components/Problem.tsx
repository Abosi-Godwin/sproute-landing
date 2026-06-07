"use client";

import { Check, X } from "lucide-react";
import { FadeUp } from "./shared";

const rows = [
  {
    bad: "Scrolling through Instagram hoping someone reaches out",
    good: "Searching any city and finding 20 hot leads in 30 seconds",
  },
  {
    bad: "Sending the same generic message to every business",
    good: "AI-generated messages tailored to each business's specific situation",
  },
  {
    bad: "Forgetting who you messaged and losing warm leads",
    good: "Full pipeline tracking with follow-up reminders and activity logs",
  },
  {
    bad: "Not knowing what to say when they finally reply",
    good: "Built-in Chat Helper that suggests the right response in real time",
  },
];

export default function Problem() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeUp className="text-center mb-14">
          <p className="text-brand-400 text-sm font-medium mb-3 uppercase tracking-widest">
            The truth
          </p>
          <h2 className="font-display font-800 text-4xl lg:text-5xl text-base-50 leading-tight">
            Most freelancers get clients by accident.{" "}
            <span className="text-brand-400">Sproute makes it a system.</span>
          </h2>
          <p className="text-base-400 mt-4 max-w-xl mx-auto leading-relaxed">
            The difference between freelancers who are always looking and those
            who are always booked is consistency and follow-through.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-4">
          {rows.map((row, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="bg-base-900/60 border border-base-800 rounded-2xl overflow-hidden">
                {/* bad */}
                <div className="flex items-start gap-3 p-4 border-b border-base-800">
                  <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center">
                    <X size={11} className="text-red-400" />
                  </div>
                  <p className="text-base-500 text-sm leading-relaxed">
                    {row.bad}
                  </p>
                </div>
                {/* good */}
                <div className="flex items-start gap-3 p-4">
                  <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-brand-500/15 flex items-center justify-center">
                    <Check size={11} className="text-brand-400" />
                  </div>
                  <p className="text-base-200 text-sm leading-relaxed font-medium">
                    {row.good}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* stats strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-base-800/60 pt-14">
          {[
            { val: 20, suffix: "+", label: "Leads found in 30s" },
            { val: 65, suffix: "", label: "Words per AI message" },
            { val: 3, suffix: "x", label: "Follow-up sequences" },
            { val: 100, suffix: "%", label: "Mobile optimised" },
          ].map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1}>
              <p className="font-display font-800 text-4xl text-brand-400">
                {s.val}{s.suffix}
              </p>
              <p className="text-base-500 text-sm mt-1">{s.label}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
