

import { ChevronRight, MapPin } from "lucide-react";
import { FadeUp } from "./FadeUp";

export default function FinalCTA() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-500/10 blur-[100px]" />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        <FadeUp>
          <div className="inline-flex items-center gap-2 text-xs text-brand-400 bg-brand-500/10 border border-brand-500/20 px-3 py-1.5 rounded-full mb-6 font-medium">
            <MapPin size={12} />
            Your next client is already on Google Maps
          </div>

          <h2 className="font-display font-800 text-4xl lg:text-5xl text-base-50 leading-tight mb-5">
            Stop waiting for referrals.{" "}
            <span className="text-brand-400">Start prospecting.</span>
          </h2>

          <p className="text-base-400 leading-relaxed mb-8">
            Find businesses that need what you offer and reach out with messages
            that get replies.
          </p>

          <a
            href="https://sproute-rho.vercel.app"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white px-8 py-4 rounded-xl font-medium text-base transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/30 hover:-translate-y-1"
          >
            Start prospecting free
            <ChevronRight size={18} />
          </a>

          <p className="text-base-600 text-xs mt-4">
            Free forever &nbsp;&middot;&nbsp; No credit card &nbsp;&middot;&nbsp; Works on your phone
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
