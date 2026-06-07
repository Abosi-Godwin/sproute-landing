export default function Problem() {
    const problems = [
        {
            before: "Scrolling through Instagram hoping someone reaches out",
            after: "Searching any city and finding 20 hot leads in 30 seconds",
        },
        {
            before: "Sending the same generic message to every business",
            after: "AI-generated messages tailored to each business's specific situation",
        },
        {
            before: "Forgetting who you messaged and losing warm leads",
            after: "Full pipeline tracking with follow-up reminders and activity logs",
        },
        {
            before: "Not knowing what to say when they finally reply",
            after: "Built-in conversation helper that suggests the right response in real time",
        },
    ];

    return (
        <section className="py-20 px-6 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold">
                        Most freelancers get clients by accident.
                        <br />
                        <span className="text-emerald-400">Sproute makes it a system.</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        The difference between freelancers who are always looking for work
                        and those who are always booked is not skill — it is consistency and follow-through.
                    </p>
                </div>

                <div className="space-y-4">
                    {problems.map((item, i) => (
                        <div key={i} className="grid md:grid-cols-2 gap-4">
                            <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-5 flex items-start gap-3">
                                <span className="text-red-400 text-lg mt-0.5 shrink-0">✕</span>
                                <p className="text-sm text-zinc-400">{item.before}</p>
                            </div>
                            <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-5 flex items-start gap-3">
                                <span className="text-emerald-400 text-lg mt-0.5 shrink-0">✓</span>
                                <p className="text-sm text-zinc-300">{item.after}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}