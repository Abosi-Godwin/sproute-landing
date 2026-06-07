import { ArrowRight } from "lucide-react";

const APP_URL = "https://sproute-rho.vercel.app";

export default function FinalCTA() {
    return (
        <section className="py-20 px-6 border-t border-white/5">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                    Your next client is
                    <br />
                    <span className="text-emerald-400">already on Google Maps.</span>
                </h2>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                    Stop waiting for referrals. Start finding businesses that need
                    what you offer and reaching out with messages that get replies.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={APP_URL}
                        className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-4 rounded-xl transition-colors text-base w-full sm:w-auto justify-center"
                    >
                        Start prospecting free
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
                <p className="text-sm text-zinc-600">
                    Free forever. No credit card. Works on your phone.
                </p>
            </div>
        </section>
    );
}