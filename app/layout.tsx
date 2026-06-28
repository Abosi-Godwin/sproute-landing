import type { Metadata, Viewport } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_META } from "@/lib/config";

import PostHogProvider from "./components/PostHogProvider";
import { Analytics } from "@vercel/analytics/react";
const syne = Syne({
    subsets: ["latin"],
    variable: "--font-display",
    weight: ["600", "700", "800"]
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans"
});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#10b981"
};

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),

    title: {
        default: SITE_META.title,
        template: SITE_META.titleTemplate
    },
    description: SITE_META.description,
    keywords: SITE_META.keywords,
    authors: [{ name: "Sproute", url: SITE_URL }],
    creator: "Sproute",
    publisher: "Sproute",
    category: "technology",

    alternates: {
        canonical: SITE_URL
    },

    openGraph: {
        type: "website",
        locale: SITE_META.locale,
        url: SITE_URL,
        siteName: SITE_META.name,
        title: SITE_META.title,
        description: SITE_META.description,
        images: [
            {
                url: SITE_META.ogImage,
                width: 1200,
                height: 630,
                alt: "Sproute — Find Local Businesses & Land Clients on WhatsApp",
                type: "image/png"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",
        site: SITE_META.twitterHandle,
        creator: SITE_META.twitterHandle,
        title: SITE_META.title,
        description: SITE_META.description,
        images: [SITE_META.ogImage]
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },

    manifest: "/site.webmanifest",

    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            {
                url: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                url: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png"
            }
        ],
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
        shortcut: "/favicon.ico"
    },

    verification: {
        google: "8wKxFBoxKbThGGJsFMXBoid6P9uWONt00GcfrWKw0BU"
    }
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en-NG" className={`${syne.variable} ${inter.variable}`}>
            <body>
                <PostHogProvider>{children}</PostHogProvider>
                <Analytics />
            </body>
        </html>
    );
}
