export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-emerald-500 flex items-center justify-center">
                        <svg viewBox="0 0 64 64" className="w-3.5 h-3.5" fill="none">
                            <path d="M32 44 L32 26" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                            <path d="M32 34 C26 30 20 30 20 24 C20 24 26 22 32 28" fill="white" opacity="0.9"/>
                            <path d="M32 28 C38 22 44 22 44 16 C44 16 38 14 32 22" fill="white"/>
                        </svg>
                    </div>
                    <span className="font-display font-bold text-sm">Sproute</span>
                </div>

                <p className="text-xs text-zinc-600 text-center">
                    Built for freelancers who are serious about getting clients.
                    Not just dreaming about it.
                </p>

                <p className="text-xs text-zinc-700">
                    © {new Date().getFullYear()} Sproute
                </p>
            </div>
        </footer>
    );
}