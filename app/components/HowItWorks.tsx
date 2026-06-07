import { Search, TrendingUp, MessageCircle, CheckCircle } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            icon: Search,
            number: "01",
            title: "Search any city",
            description:
                "Type any category and location. Sproute searches Google Maps and returns real local businesses with phone numbers, ratings and website status.",
        },
        {
            icon: TrendingUp,
            number: "02",
            title: "Score your leads",
            description:
                "Every business gets an opportunity score based on signals — no website, strong reviews, unclaimed listing. Sproute shows you who is most worth contacting first.",
        },
        {
            icon: MessageCircle,
            number: "03",
            title: "Generate your message",
            description:
                "AI writes three personalised WhatsApp messages for each business — Curiosity, Friendly and Direct. Pick the one that feels right and send it in one tap.",
        },
        {
            icon: CheckCircle,
            number: "04",
            title: "Track and follow up",
            description:
                "Move leads through your pipeline. Get follow-up reminders. When they reply, the Chat Helper suggests exactly what to say next to keep the conversation moving.",
        },
    ];

    return (
        <section id="how-it-works" className="py-20 px-6 border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold">
                        From search to signed client
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        A complete workflow built around how outreach actually works in Nigeria.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {steps.map(({ icon: Icon, number, title, description }) => (
                        <div
                            key={number}
                            className="bg-[#64748b] border border-white/5 rounded-2xl p-6 space-y-4 hover:border-emerald-500/20 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                                    <Icon className="w-5 h-5 text-emerald-400" />
                                </div>
                                <span className="font-display text-sm font-bold text-zinc-600">
                                    {number}
                                </span>
                            </div>
                            <h3 className="font-display text-xl font-bold">{title}</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}