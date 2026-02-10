import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ReactLenis } from "@studio-freight/react-lenis";
import JsonLd from "@/components/json-ld";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: {
    default: "Rachel Singer | Premium Digital Artisan",
    template: "%s | Rachel Singer",
  },
  description: "Rachel Singer is a digital artisan building high-performance, aesthetically pleasing web solutions that drive growth.",
  keywords: ["Rachel Singer", "Digital Artisan", "Web Design", "Premium Portfolio", "AI Agentic Workflows"],
  authors: [{ name: "Rachel Singer" }],
  creator: "Rachel Singer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rachelsinger.com",
    title: "Rachel Singer | Premium Digital Artisan",
    description: "Crafting digital experiences that merge aesthetics with performance.",
    siteName: "Rachel Singer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rachel Singer | Premium Digital Artisan",
    description: "Crafting digital experiences that merge aesthetics with performance.",
    creator: "@rachelsinger", // Placeholder
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${inter.variable} ${playfair.variable} bg-background text-foreground antialiased`}>
          <JsonLd />
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
