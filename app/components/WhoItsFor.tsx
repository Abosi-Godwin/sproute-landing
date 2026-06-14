import { FadeUp } from "./FadeUp";
import {
    Code2,
    Palette,
    BarChart2,
    Share2,
    Camera,
    PenTool,
    ShoppingBag,
    Megaphone
} from "lucide-react";

const roles = [
    {
        icon: Code2,
        title: "Web Developers",
        desc: "Find businesses with outdated or missing websites and reach out with a relevant offer before your competitors do."
    },
    {
        icon: Palette,
        title: "Graphic Designers",
        desc: "Identify businesses using generic branding and pitch them on a visual identity that actually represents their work."
    },
    {
        icon: Share2,
        title: "Social Media Managers",
        desc: "Spot businesses with weak or inactive social presence and show them exactly what they are losing by being invisible online."
    },
    {
        icon: BarChart2,
        title: "SEO Specialists",
        desc: "Discover businesses that struggle to show up in local search and offer to fix the visibility problem they may not even know they have."
    },
    {
        icon: ShoppingBag,
        title: "Shopify Designers",
        desc: "Find product-based businesses still selling through DMs or word of mouth and help them move to a proper storefront."
    },
    {
        icon: Camera,
        title: "Photographers & Videographers",
        desc: "Target businesses that need product shoots, event coverage or content creation and reach them before they find someone else."
    },
    {
        icon: PenTool,
        title: "Copywriters",
        desc: "Find businesses with poor website copy, weak ads or no content strategy and pitch them on words that actually convert."
    },
    {
        icon: Megaphone,
        title: "Marketing Consultants",
        desc: "Identify businesses spending money on the wrong things and offer a clearer path to attracting more customers."
    }
];

export default function WhoItsFor() {
    return (
        <section className="py-24 px-6 bg-base-900/30">
            <div className="max-w-6xl mx-auto">
                <FadeUp className="text-center mb-14">
                    <p className="text-brand-400 text-sm font-medium mb-3 uppercase tracking-widest">
                        Who it&apos;s for
                    </p>
                    <h2 className="font-display font-800 text-4xl lg:text-5xl text-base-50 leading-tight">
                        Built for service providers who need more clients
                    </h2>
                    <p className="text-base-400 mt-4 max-w-lg mx-auto">
                        If you sell a service to local businesses and you are
                        tired of waiting for referrals, Sproute was built for
                        you.
                    </p>
                </FadeUp>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {roles.map((role, i) => {
                        const Icon = role.icon;
                        return (
                            <FadeUp key={role.title} delay={i * 0.06}>
                                <div className="group h-full bg-base-900 border border-base-800 hover:border-brand-500/40 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1">
                                    <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors duration-300">
                                        <Icon />
                                    </div>
                                    <h3 className="font-display font-600 text-base-100 text-sm mb-2">
                                        {role.title}
                                    </h3>
                                    <p className="text-base-500 text-xs leading-relaxed">
                                        {role.desc}
                                    </p>
                                </div>
                            </FadeUp>
                        );
                    })}
                </div>

                {/* not for section */}
                <FadeUp delay={0.1} className="mt-14">
                    <div className="bg-base-900/60 border border-base-800 rounded-2xl p-8 max-w-2xl mx-auto text-center">
                        <h3 className="font-display font-700 text-base-200 text-lg mb-3">
                            Sproute may not be for you if&hellip;
                        </h3>
                        <ul className="space-y-2 text-base-500 text-sm mb-5">
                            <li>
                                You already have a dedicated sales team handling
                                outreach
                            </li>
                            <li>
                                You rely exclusively on cold email campaigns at
                                scale
                            </li>
                            <li>
                                You manage enterprise-level outbound operations
                            </li>
                        </ul>
                        <p className="text-base-400 text-sm">
                            Sproute is designed for{" "}
                            <span className="text-base-200 font-medium">
                                freelancers, solo operators and small agencies
                            </span>{" "}
                            that need a simpler way to find and start
                            conversations with local businesses.
                        </p>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
