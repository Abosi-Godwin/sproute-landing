import { ArrowRight, Star } from "lucide-react";

const APP_URL = "https://sproute-rho.vercel.app";

export default function Hero() {
    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium px-4 py-2 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Built for Nigerian freelancers
                </div>

                {/* Headline */}
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Find businesses.
                    <br />
                    <span className="text-emerald-400">Land clients.</span>
                </h1>

                {/* Subheadline */}
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Sproute helps freelancers discover local businesses on Google Maps,
                    score which ones are worth contacting, and generate personalised
                    WhatsApp messages that actually get replies.
                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={APP_URL}
                        className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-4 rounded-xl transition-colors text-base w-full sm:w-auto justify-center"
                    >
                        Start for free
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <p className="text-sm text-zinc-500">
                        No credit card required
                    </p>
                </div>

                {/* Social proof */}
                <div className="flex items-center justify-center gap-1 pt-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-sm text-zinc-400 ml-2">
                        Used by freelancers closing real clients in Asaba, Lagos and Enugu
                    </span>
                </div>

                {/* App preview */}
                <div className="relative mt-12 rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden shadow-2xl shadow-black/50">
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
                        <div className="w-3 h-3 rounded-full bg-red-500/60" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                        <div className="w-3 h-3 rounded-full bg-green-500/60" />
                        <span className="text-xs text-zinc-600 ml-2">sproute-rho.vercel.app</span>
                    </div>
                    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                            { label: "No Website", value: "200", color: "text-red-400" },
                            { label: "Needs Action", value: "18", color: "text-yellow-400" },
                            { label: "Messaged", value: "129", color: "text-blue-400" },
                            { label: "Conversion", value: "0%", color: "text-emerald-400" },
                        ].map(stat => (
                            <div key={stat.label} className="bg-zinc-800 rounded-xl p-4 text-left">
                                <p className="text-xs text-zinc-500 mb-2">{stat.label}</p>
                                <p className={`font-display text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                            </div>
                        ))}
                    </div>
                    <div className="px-6 pb-6 space-y-3">
                        {[
                            { name: "Ella's Store", cat: "Boutique", score: "8/10", color: "text-orange-400 bg-orange-500/10" },
                            { name: "Goodness Boutique", cat: "Clothing", score: "7/10", color: "text-orange-400 bg-orange-500/10" },
                            { name: "TopView Hotel Asaba", cat: "Hotel", score: "10/10", color: "text-orange-400 bg-orange-500/10" },
                        ].map(lead => (
                            <div key={lead.name} className="flex items-center justify-between bg-zinc-800 rounded-xl px-4 py-3">
                                <div>
                                    <p className="text-sm font-medium text-zinc-100">{lead.name}</p>
                                    <p className="text-xs text-zinc-500">{lead.cat}</p>
                                </div>
                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-lg ${lead.color}`}>
                                    {lead.score}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}