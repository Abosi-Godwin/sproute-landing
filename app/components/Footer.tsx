const LogoSvg = ({ size = 24 }: { size?: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        width={size}
        height={size}
        aria-hidden="true"
    >
        <rect width="64" height="64" rx="14" fill="#10b981" />
        <circle cx="32" cy="20" r="10" fill="#ecfdf5" opacity="0.15" />
        <path
            d="M32 44 L32 26"
            stroke="#ecfdf5"
            strokeWidth="3.5"
            strokeLinecap="round"
        />
        <path
            d="M32 34 C26 30 20 30 20 24 C20 24 26 22 32 28"
            fill="#ecfdf5"
            opacity="0.9"
        />
        <path d="M32 28 C38 22 44 22 44 16 C44 16 38 14 32 22" fill="#ffffff" />
        <circle cx="26" cy="47" r="2" fill="#ecfdf5" opacity="0.6" />
        <circle cx="32" cy="49" r="2" fill="#ecfdf5" opacity="0.8" />
        <circle cx="38" cy="47" r="2" fill="#ecfdf5" opacity="0.6" />
    </svg>
);

const links = {
    Product: [
        { label: "How it works", href: "#how-it-works" },
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" }
    ],
    Legal: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" }
    ]
};

export default function Footer() {
    return (
        <footer className="border-t border-base-800 pt-14 pb-8 px-6">
            <div className="max-w-6xl mx-auto">
                {/* top row */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* brand col */}
                    <div className="lg:col-span-2">
                        <a
                            href="/"
                            className="flex items-center gap-2 font-display font-700 text-base-200 text-lg mb-3"
                        >
                            <LogoSvg size={28} />
                            Sproute
                        </a>
                        <p className="text-base-500 text-sm leading-relaxed max-w-xs">
                            Built for freelancers who are serious about getting
                            clients. Not just dreaming about it.
                        </p>
                    </div>

                    {/* link cols */}
                    {Object.entries(links).map(([group, items]) => (
                        <div key={group}>
                            <p className="text-base-300 text-xs font-medium uppercase tracking-widest mb-4">
                                {group}
                            </p>
                            <ul className="space-y-3">
                                {items.map(item => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className="text-base-500 hover:text-base-200 text-sm transition-colors duration-200"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* bottom row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-base-800">
                    <p className="text-base-600 text-xs">
                        &copy; 2026 Sproute. All rights reserved.
                    </p>

                    {/* launch CTA */}
                    <a
                        href="https://sproute-rho.vercel.app"
                        className="text-xs bg-brand-500/10 hover:bg-brand-500/20 border border-brand-500/20 text-brand-400 px-4 py-2 rounded-xl transition-colors duration-200 font-medium"
                    >
                        Open the app →
                    </a>
                </div>
            </div>
        </footer>
    );
}
