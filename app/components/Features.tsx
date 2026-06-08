

import {
  Target,
  Sparkles,
  MessageSquare,
  Bell,
  BarChart3,
  FileText,
  Smartphone,
} from "lucide-react";
import { FadeUp } from "./FadeUp";

const features = [
  {
    icon: Target,
    title: "Opportunity scoring",
    desc: "Each business scored 1–10 based on signals like missing website, review count and listing status. Hot leads rise to the top automatically.",
  },
  {
    icon: Sparkles,
    title: "AI message generation",
    desc: "Three message angles per lead — Curiosity, Friendly and Direct. All under 65 words, all sounding like a real person.",
  },
  {
    icon: MessageSquare,
    title: "Chat Helper",
    desc: "Paste what the prospect said and get a suggested reply based on their business context, your service and the conversation history.",
  },
  {
    icon: Bell,
    title: "Follow-up sequences",
    desc: "Auto-generated Day 3, Day 7 and Day 14 follow-ups. Day 7 references the business's specific pain points.",
  },
  {
    icon: BarChart3,
    title: "Pipeline tracking",
    desc: "New, Messaged, Replied, Converted. See your full pipeline at a glance and know exactly which leads need attention today.",
  },
  {
    icon: FileText,
    title: "Reply templates",
    desc: "Pre-written responses for every scenario — interested, asked price, not now, auto-reply and more.",
  },
  {
    icon: Target,
    title: "Daily outreach goal",
    desc: "Set a daily target and track your streak. The dashboard shows your progress and keeps you accountable.",
  },
  {
    icon: Smartphone,
    title: "Works on your phone",
    desc: "Fully optimised for mobile. Install it to your home screen and use it like an app — search, message and track between WhatsApp conversations.",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  desc,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <FadeUp delay={delay} className="group">
      <div className="h-full bg-base-900 border border-base-800 hover:border-brand-500/40 rounded-2xl p-6 transition-all duration-500 hover:bg-base-800/60 hover:-translate-y-1">
        <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors duration-300">
          <Icon size={18} className="text-brand-400" />
        </div>
        <h3 className="font-display font-600 text-base-100 text-base mb-2">
          {title}
        </h3>
        <p className="text-base-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </FadeUp>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-base-900/30">
      <div className="max-w-6xl mx-auto">
        <FadeUp className="text-center mb-14">
          <p className="text-brand-400 text-sm font-medium mb-3 uppercase tracking-widest">
            What&apos;s inside
          </p>
          <h2 className="font-display font-800 text-4xl lg:text-5xl text-base-50 leading-tight">
            Everything you need to fill your pipeline
          </h2>
          <p className="text-base-400 mt-4 max-w-lg mx-auto">
            Not a CRM. Not a mass sender. A focused outreach tool built around
            how freelancers actually win clients on WhatsApp.
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              desc={f.desc}
              delay={i * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
