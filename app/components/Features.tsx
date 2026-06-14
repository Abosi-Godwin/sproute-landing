import {
  Target,
  Sparkles,
  MessageSquare,
  Bell,
  BarChart3,
  FileText,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { FadeUp } from "./FadeUp";

const features = [
  {
    icon: Target,
    title: "Focus on businesses most likely to become clients",
    desc: "Every business gets an opportunity score based on real signals — no website, strong reviews, unclaimed listing. Stop guessing, start prioritising.",
  },
  {
    icon: Sparkles,
    title: "Start conversations without staring at a blank screen",
    desc: "Three personalised message angles generated per lead — Curiosity, Friendly and Direct. All under 65 words, all sounding like a real person wrote them.",
  },
  {
    icon: MessageSquare,
    title: "Know exactly what to say when they reply",
    desc: "Paste what the prospect said and get a suggested reply based on their business, your service and the conversation so far. No more overthinking.",
  },
  {
    icon: Bell,
    title: "Never let a warm lead go cold",
    desc: "Automatically generated Day 3, Day 7 and Day 14 follow-ups keep you top of mind without being annoying. Day 7 references their specific situation.",
  },
  {
    icon: BarChart3,
    title: "Never lose track of a potential client again",
    desc: "New, Messaged, Replied, Converted. Your full pipeline at a glance so you always know who needs attention today and who is already moving forward.",
  },
  {
    icon: FileText,
    title: "Handle every response without overthinking",
    desc: "Pre-written replies for every scenario — interested, asked price, not now, auto-reply and more. Spend less time writing, more time closing.",
  },
  {
    icon: TrendingUp,
    title: "Build a habit that fills your pipeline",
    desc: "Set a daily outreach target and track your streak. Consistent action beats talent every time — the dashboard keeps you accountable.",
  },
  {
    icon: Smartphone,
    title: "Prospect between client calls, anywhere",
    desc: "Fully optimised for mobile. Install to your home screen and run your entire outreach operation from your phone between WhatsApp conversations.",
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
        <h3 className="font-display font-600 text-base-100 text-sm mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-base-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </FadeUp>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeUp className="text-center mb-14">
          <p className="text-brand-400 text-sm font-medium mb-3 uppercase tracking-widest">
            What you get
          </p>
          <h2 className="font-display font-800 text-4xl lg:text-5xl text-base-50 leading-tight">
            Stop juggling spreadsheets, notes and WhatsApp chats
          </h2>
          <p className="text-base-400 mt-4 max-w-lg mx-auto">
            Sproute replaces the manual chaos of freelance client hunting with
            one focused tool that keeps you moving forward.
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
