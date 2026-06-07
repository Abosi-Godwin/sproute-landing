import { Check, ArrowRight } from "lucide-react";

const APP_URL = "https://sproute-rho.vercel.app";

export default function Pricing() {
    const free = [
        "Up to 50 saved leads",
        "10 AI message generations per day",
        "Full pipeline tracking",
        "Follow-up sequences",
        "Reply templates",
        "Chat Helper",
        "Sales Playbook",
        "CSV export",
    ];

    const pro = [
        "Unlimited saved leads",
        "50 AI message generations per day",
        "Everything in Free",
        "Priority support",
        "Early access to new features",
    ];

    return (
        <section id="pricing" className="py-20 px-6 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold">
                        Simple pricing
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        Start free. Upgrade when your pipeline grows.
                        One closed client covers months of Pro.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Free */}
                    <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 space-y-6">
                        <div className="space-y-2">
                            <p className="font-display text-sm font-bold text-zinc-400 uppercase tracking-wider">
                                Free
                            </p>
                            <div className="flex items-end gap-1">
                                <span className="font-display text-5xl font-bold">₦0</span>
                            </div>
                            <p className="text-sm text-zinc-500">Forever free. No card needed.</p>
                        </div>

                        <ul className="space-y-3">
                            {free.map(item => (
                                <li key={item} className="flex items-start gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span className="text-sm text-zinc-300">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href={APP_URL}
                            className="block text-center text-sm font-medium bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-xl transition-colors"
                        >
                            Get started free
                        </a>
                    </div>

                    {/* Pro */}
                    <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8 space-y-6 relative overflow-hidden">
                        <div className="absolute top-4 right-4">
                            <span className="text-xs font-medium bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">
                                Coming soon
                            </span>
                        </div>

                        <div className="space-y-2">
                            <p className="font-display text-sm font-bold text-emerald-400 uppercase tracking-wider">
                                Pro
                            </p>
                            <div className="flex items-end gap-1">
                                <span className="font-display text-5xl font-bold">₦3,500</span>
                                <span className="text-zinc-400 mb-2">/month</span>
                            </div>
                            <p className="text-sm text-zinc-500">
                                One client covers 6+ months.
                            </p>
                        </div>

                        <ul className="space-y-3">
                            {pro.map(item => (
                                <li key={item} className="flex items-start gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span className="text-sm text-zinc-300">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href={APP_URL}
                            className="flex items-center justify-center gap-2 text-sm font-medium bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl transition-colors"
                        >
                            Start with Free
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}