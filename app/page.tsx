import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden">
            <Nav />
            <Hero />
            <Problem />
            <HowItWorks />
            <Features />
            <Testimonials />
            <Pricing />
            <FinalCTA />
            <Footer />
        </main>
    );
}
