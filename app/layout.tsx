import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
    subsets: ["latin"],
    variable: "--font-display",
    weight: ["600", "700", "800"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
});

export const metadata: Metadata = {
    title: "Sproute — Find Local Businesses & Land Clients",
    description:
        "Search Google Maps for local businesses, score opportunities, generate personalised WhatsApp messages and track your outreach — all in one tool.",
    keywords: "lead generation, WhatsApp outreach, local business, freelance clients, Nigeria",
    openGraph: {
        title: "Sproute — Find Local Businesses & Land Clients",
        description:
            "AI-powered prospecting tool for freelancers targeting local businesses on WhatsApp.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${syne.variable} ${inter.variable}`}>
            <body>{children}</body>
        </html>
    );
}