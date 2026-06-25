

import { Check } from "lucide-react";
import { FadeUp } from "./FadeUp";

const freeFeatures = [
  "Up to 50 saved leads",
  "10 AI message generations per day",
  "Full pipeline tracking",
  "Follow-up sequences",
  "Reply templates",
  "Chat Helper",
  "Sales Playbook",
  "CSV export",
];

const proFeatures = [
  "Unlimited saved leads",
  "50 AI message generations per day",
  "Everything in Free",
  "Priority support",
  "Early access to new features",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-base-900/30">
      <div className="max-w-3xl mx-auto">
        <FadeUp className="text-center mb-14">
          <p className="text-brand-400 text-sm font-medium mb-3 uppercase tracking-widest">
            Pricing
          </p>
          <h2 className="font-display font-800 text-4xl lg:text-5xl text-base-50">
            Simple pricing
          </h2>
          <p className="text-base-400 mt-4">
            Start free. Upgrade when your pipeline grows. One closed client
            covers months of Pro.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-5">
          {/* free tier */}
          <FadeUp delay={0}>
            <div className="h-full bg-base-900 border border-base-800 rounded-2xl p-7">
              <p className="text-base-400 text-sm font-medium mb-1">Free</p>
              <p className="font-display font-800 text-4xl text-base-50 mb-1">
                ₦0
              </p>
              <p className="text-base-600 text-sm mb-6">
                Forever free. No card needed.
              </p>
              <ul className="space-y-3 mb-8">
                {freeFeatures.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <Check size={13} className="text-brand-400 shrink-0" />
                    <span className="text-base-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://sproute-rho.vercel.app"
                className="block text-center bg-base-800 hover:bg-base-700 border border-base-700 text-base-200 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              >
                Get started free
              </a>
            </div>
          </FadeUp>

          {/* pro tier */}
          <FadeUp delay={0.1}>
            <div className="h-full relative bg-base-900 border border-brand-500/40 rounded-2xl p-7 overflow-hidden">
              {/* accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/8 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="relative">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-base-400 text-sm font-medium">Pro</p>
                  <span className="text-xs bg-brand-500/15 text-brand-400 border border-brand-500/30 px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                </div>
                <p className="font-display font-800 text-4xl text-base-50 mb-1">
                  ₦3,500
                  <span className="text-base-500 font-400 text-base">/mo</span>
                </p>
                <p className="text-base-600 text-sm mb-6">
                  One client covers 6+ months.
                </p>
                <ul className="space-y-3 mb-8">
                  {proFeatures.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <Check size={13} className="text-brand-400 shrink-0" />
                      <span className="text-base-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://paystack.shop/pay/u00f3ooq4x"
                  className="block text-center bg-brand-500 hover:bg-brand-400 text-white py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25 hover:-translate-y-0.5"
                >
                  Start with pro
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
