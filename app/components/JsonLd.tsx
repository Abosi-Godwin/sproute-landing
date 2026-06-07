import { SITE_URL, SITE_META } from "@/lib/config";

/* ── SoftwareApplication schema ── */
const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sproute",
  url: SITE_URL,
  description: SITE_META.description,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android, iOS",
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "NGN",
      description:
        "Up to 50 saved leads, generate outreach for 10 leads per day with 3 message variations each, full pipeline tracking, follow-up sequences, reply templates and Chat Helper.",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "3500",
      priceCurrency: "NGN",
      billingPeriod: "P1M",
      description:
        "Unlimited saved leads, generate outreach for 50 leads per day with 3 message variations each, priority support and early access to new features.",
    },
  ],
  featureList: [
    "Google Maps business discovery",
    "Opportunity scoring 1-10",
    "AI WhatsApp message generation",
    "Pipeline tracking",
    "Follow-up sequences",
    "Chat Helper for reply suggestions",
    "Daily outreach goal tracking",
    "Mobile PWA",
  ],
  screenshot: SITE_META.ogImage,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "24",
    bestRating: "5",
    worstRating: "1",
  },
};

/* ── WebSite schema (enables sitelinks searchbox) ── */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sproute",
  url: SITE_URL,
  description: SITE_META.description,
  inLanguage: "en-NG",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/* ── FAQPage schema (can get rich snippets in Google) ── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Sproute safe for my WhatsApp account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sproute is a workflow tool, not a mass-sending bot. It prepares the perfect message and opens it via a standard WhatsApp deep link so you hit send yourself. There is zero automation of WhatsApp — zero ban risk.",
      },
    },
    {
      "@type": "Question",
      name: "How does the AI message generation limit work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free users can generate outreach for 10 leads per day. Each lead gets 3 message variations — Curiosity, Friendly and Direct — so that is 30 unique messages per day. Pro users can generate outreach for 50 leads per day (150 messages).",
      },
    },
    {
      "@type": "Question",
      name: "Does Sproute work on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sproute is fully optimised for mobile. You can install it to your home screen as a PWA and use it between WhatsApp conversations — search, score leads, generate messages and track your pipeline all from your phone.",
      },
    },
    {
      "@type": "Question",
      name: "Which cities does Sproute work in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sproute searches Google Maps, so it works in any city where businesses have Google listings. It is currently used by freelancers in Asaba, Lagos, Enugu and other Nigerian cities.",
      },
    },
    {
      "@type": "Question",
      name: "Is Sproute free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Free plan is free forever with no credit card required. It includes up to 50 saved leads, 10-lead outreach generation per day, full pipeline tracking, follow-up sequences, Chat Helper and more.",
      },
    },
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
