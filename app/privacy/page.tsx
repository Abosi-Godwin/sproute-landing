import Link from "next/link";

export const metadata = {
    title: "Privacy Policy — Sproute",
    description: "How Sproute collects, uses and protects your data.",
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-base-950 text-base-100">
            <div className="max-w-2xl mx-auto px-6 py-20">
                <Link href="/" className="text-brand-400 text-sm hover:text-brand-300 transition-colors">
                    ← Back to Sproute
                </Link>

                <h1 className="font-display text-4xl font-bold text-base-50 mt-8 mb-2">
                    Privacy Policy
                </h1>
                <p className="text-base-500 text-sm mb-12">Last updated: June 2026</p>

                <div className="space-y-10 text-base-300 leading-relaxed">
                    <section className="space-y-3">
                        <h2 className="text-base-100 font-semibold text-lg">1. Who we are</h2>
                        <p>Sproute is a web-based prospecting tool that helps freelancers find local businesses and manage WhatsApp outreach. We are operated as an independent product. If you have questions about this policy, contact us at <a href="mailto:hello@sproute.app" className="text-brand-400 hover:text-brand-300">hello@sproute.app</a>.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base-100 font-semibold text-lg">2. What we collect</h2>
                        <p>When you create an account, we collect your email address and password. When you use the app, we store the leads you save, notes you write, messages you generate, and activity logs you create. We do not collect payment card details — payments are handled by Paystack.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base-100 font-semibold text-lg">3. How we use your data</h2>
                        <p>We use your data solely to provide the Sproute service. Your leads, notes and activity are stored so you can access them across sessions and devices. We do not sell your data, share it with advertisers, or use it to train AI models.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base-100 font-semibold text-lg">4. AI-generated content</h2>
                        <p>When you generate messages or follow-up sequences, lead data is sent to Google Gemini via a secure server-side proxy. We do not store your prompts beyond the current session. Google's data handling is governed by their own privacy policy.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base-100 font-semibold text-lg">5. Business data from Google Maps</h2>
                        <p>Sproute searches Google Maps via SerpAPI to return business listings. This data — names, addresses, phone numbers, ratings — is publicly available information. We do not scrape or store this data on our servers; it is returned directly to your browser session and only saved if you explicitly save a lead.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base-100 font-semibold text-lg">6. Data storage and security</h2>
                        <p>Your account data is stored in Supabase, a hosted Postgres database with row-level security enabled. This means your data is only accessible to your own authenticated account. All connections use HTTPS.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base-100 font-semibold text-lg">7. Payments</h2>
                        <p>Subscriptions are processed by Paystack. We do not store or have access to your card details. When you subscribe, Paystack notifies us of the successful payment and we update your account status accordingly.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base-100 font-semibold text-lg">8. Your rights</h2>
                        <p>You can delete your account and all associated data at any time by contacting us at <a href="mailto:hello@sproute.app" className="text-brand-400 hover:text-brand-300">hello@sproute.app</a>. You can export your leads at any time using the CSV export feature in the app. We will respond to data requests within 7 days.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base-100 font-semibold text-lg">9. Cookies</h2>
                        <p>Sproute uses only essential cookies required for authentication. We do not use advertising or tracking cookies.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base-100 font-semibold text-lg">10. Changes to this policy</h2>
                        <p>If we make material changes to this policy, we will update the date at the top of this page. Continued use of Sproute after changes constitutes acceptance of the updated policy.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}