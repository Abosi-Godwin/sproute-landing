"use client";

import { MapPin, Target, Sparkles, BarChart3 } from "lucide-react";
import { FadeUp } from "./shared";

function StepCard({
  num,
  title,
  desc,
  delay,
}: {
  num: string;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <FadeUp delay={delay} className="flex gap-5">
      <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center">
        <span className="font-display font-800 text-brand-400 text-lg">
          {num}
        </span>
      </div>
      <div className="pt-1">
        <h3 className="font-display font-600 text-base-100 text-base mb-1.5">
          {title}
        </h3>
        <p className="text-base-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </FadeUp>
  );
}

const flowSteps = [
  {
    icon: MapPin,
    label: "Search",
    sub: "Lagos, Restaurants",
    active: true,
  },
  {
    icon: Target,
    label: "Score",
    sub: "12 Hot, 8 Warm leads",
    active: false,
  },
  {
    icon: Sparkles,
    label: "Generate",
    sub: "AI message ready",
    active: false,
  },
  {
    icon: BarChart3,
    label: "Track",
    sub: "3 replied, 1 converted",
    active: false,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* steps */}
        <div>
          <FadeUp>
            <p className="text-brand-400 text-sm font-medium mb-3 uppercase tracking-widest">
              The workflow
            </p>
            <h2 className="font-display font-800 text-4xl lg:text-5xl text-base-50 leading-tight mb-6">
              From search to signed client
            </h2>
            <p className="text-base-400 leading-relaxed mb-10">
              A complete workflow built around how outreach actually works —
              search, score, message, track.
            </p>
          </FadeUp>

          <div className="space-y-8">
            <StepCard
              num="01"
              title="Search any city"
              desc="Type any category and location. Sproute searches Google Maps and returns real local businesses with phone numbers, ratings and website status."
              delay={0.05}
            />
            <StepCard
              num="02"
              title="Score your leads"
              desc="Every business gets an opportunity score based on signals — no website, strong reviews, unclaimed listing. Sproute shows you who is most worth contacting first."
              delay={0.12}
            />
            <StepCard
              num="03"
              title="Generate your message"
              desc="AI writes three personalised WhatsApp messages for each business — Curiosity, Friendly and Direct. Pick the one that feels right and send it in one tap."
              delay={0.19}
            />
            <StepCard
              num="04"
              title="Track and follow up"
              desc="Move leads through your pipeline. Get follow-up reminders. When they reply, the Chat Helper suggests exactly what to say next."
              delay={0.26}
            />
          </div>
        </div>

        {/* sticky flow card */}
        <FadeUp delay={0.15} className="hidden lg:block sticky top-28">
          <div className="bg-base-900 border border-base-800 rounded-2xl p-6 space-y-4">
            {flowSteps.map((step, i) => (
              <div
                key={step.label}
                className="flex items-center gap-4 p-3 rounded-xl transition-colors duration-300"
                style={{
                  background: i === 0 ? "rgba(16,185,129,0.08)" : undefined,
                  borderLeft:
                    i === 0
                      ? "2px solid #10b981"
                      : "2px solid transparent",
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background:
                      i === 0
                        ? "rgba(16,185,129,0.15)"
                        : "rgba(30,41,59,1)",
                  }}
                >
                  <step.icon
                    size={16}
                    className={i === 0 ? "text-brand-400" : "text-base-500"}
                  />
                </div>
                <div>
                  <p
                    className={`text-sm font-medium leading-none ${
                      i === 0 ? "text-base-100" : "text-base-500"
                    }`}
                  >
                    {step.label}
                  </p>
                  <p className="text-xs text-base-600 mt-1">{step.sub}</p>
                </div>
                {i === 0 && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
