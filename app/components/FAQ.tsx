import FaqItem from "./FaqItem";
import { FadeUp } from "./FadeUp";

const faqs = [
  {
    q: "Is Sproute safe for my WhatsApp account?",
    a: "Yes. Sproute is a workflow tool, not a mass-sending bot. It prepares your message and opens it via a standard WhatsApp deep link — you hit send yourself. Zero automation of WhatsApp, zero ban risk.",
  },
  {
    q: "How does the AI message generation limit work?",
    a: "Free users can generate outreach for 10 leads per day. Each lead gets 3 message variations — Curiosity, Friendly and Direct — so that is 30 unique messages per day. Pro users get 50 leads per day (150 messages).",
  },
  {
    q: "Does Sproute work on mobile?",
    a: "Yes. Sproute is fully optimised for mobile. Install it to your home screen as a PWA and use it between WhatsApp conversations — search leads, generate messages and track your pipeline all from your phone.",
  },
  {
    q: "Which cities does Sproute work in?",
    a: "Sproute searches Google Maps, so it works in any city where businesses have Google listings. It is currently used by freelancers in Asaba, Lagos, Enugu, Warri, Abuja and more.",
  },
  {
    q: "Is Sproute really free?",
    a: "Yes. The Free plan is free forever with no credit card required. It includes up to 50 saved leads, 10-lead outreach generation per day, full pipeline tracking, follow-up sequences, Chat Helper and more.",
  },
  {
    q: "What kind of freelancers is Sproute built for?",
    a: "Any freelancer targeting local businesses — web designers, social media managers, photographers, videographers, copywriters, brand designers. If your clients are businesses with a physical presence, Sproute was built for you.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <FadeUp className="text-center mb-12">
          <p className="text-brand-400 text-sm font-medium mb-3 uppercase tracking-widest">
            FAQ
          </p>
          <h2 className="font-display font-800 text-4xl lg:text-5xl text-base-50 leading-tight">
            Questions we get asked
          </h2>
          <p className="text-base-400 mt-4 text-sm leading-relaxed">
            Everything you need to know before you start prospecting.
          </p>
        </FadeUp>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <FaqItem q={item.q} a={item.a} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
