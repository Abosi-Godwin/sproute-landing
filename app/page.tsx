import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Problem from "./components/Problem";
import FounderStory from "./components/FounderStory";
import HowItWorks from "./components/HowItWorks";
import WhoItsFor from "./components/WhoItsFor";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
import Newsletter from "./components/Newsletter";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import ScrollProgress from "./components/ScrollProgress";
import { GlobalKeyframes } from "./components/shared";

export default function Home() {
    return (
        <>
            <JsonLd />

            <main className="min-h-screen bg-base-950 text-base-100 overflow-x-hidden">
                <GlobalKeyframes />

              
                <div
                    className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "200px"
                    }}
                />

                <ScrollProgress />
                <Nav />
                <Hero />
                <Marquee />
                <Problem />
                <FounderStory />
                <HowItWorks />
                <WhoItsFor />
                <Features />
                <Testimonials />
                <FAQ />
                <Pricing />
                <Newsletter />
                <FinalCTA />
                <Footer />
            </main>
        </>
    );
}
