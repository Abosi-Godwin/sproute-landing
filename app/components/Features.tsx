import {
    Brain, Target, MessageSquare, Clock,
    BarChart2, Shield, Smartphone, Zap
} from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: Target,
            title: "Opportunity scoring",
            description:
                "Each business gets scored 1-10 based on signals like missing website, review count and listing status. Hot leads rise to the top automatically.",
        },
        {
            icon: Brain,
            title: "AI message generation",
            description:
                "Three message angles generated per lead — Curiosity, Friendly and Direct. All under 65 words, all sounding like a real person.",
        },
        {
            icon: MessageSquare,
            title: "Chat Helper",
            description:
                "Paste what the prospect said and get a suggested reply based on their business context, your service and the conversation history.",
        },
        {
            icon: Clock,
            title: "Follow-up sequences",
            description:
                "Automatically generated Day 3, Day 7 and Day 14 follow-up messages. Day 7 references the business's specific pain points.",
        },
        {
            icon: BarChart2,
            title: "Pipeline tracking",
            description:
                "New, Messaged, Replied, Converted. See your full pipeline at a glance and know exactly which leads need attention today.",
        },
        {
            icon: Shield,
            title: "Reply templates",
            description:
                "Pre-written responses for every scenario — interested, asked price, how did you find us, not now, auto-reply and more.",
        },
        {
            icon: Zap,
            title: "Daily outreach goal",
            description:
                "Set a daily target and track your streak. The dashboard shows your progress and keeps you accountable to consistent outreach.",
        },
        {
            icon: Smartphone,
            title: "Works on your phone",
            description:
                "Fully optimised for mobile. Install it to your home screen and use it like an app — search, message and track between WhatsApp conversations.",
        },
    ];

    return (
        <section id="features" className="py-20 px-6 border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold">
                        Everything you need to fill your pipeline
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        Not a CRM. Not a mass sender. A focused outreach tool built around
                        how freelancers actually win clients on WhatsApp.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map(({ icon: Icon, title, description }) => (
                        <div
                            key={title}
                            className="bg-zinc-900 border border-white/5 rounded-xl p-5 space-y-3 hover:border-white/10 transition-colors"
                        >
                            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                <Icon className="w-4 h-4 text-emerald-400" />
                            </div>
                            <h3 className="font-display text-sm font-bold">{title}</h3>
                            <p className="text-xs text-zinc-500 leading-relaxed">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}