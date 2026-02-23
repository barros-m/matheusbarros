import type { Metadata } from "next";
import { JetBrains_Mono, Crimson_Pro } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const crimsonPro = Crimson_Pro({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://matheusbarros.com";
const siteTitle = "Matheus Barros | Senior Full-Stack Developer";
const siteDescription =
  "Senior Full-Stack Developer specializing in React, Angular, .NET, Python, Azure cloud architecture, and enterprise-scale data systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: ["/favicon.svg"]
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Matheus Barros",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Matheus Barros - Senior Full-Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/twitter-image"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} ${crimsonPro.variable} antialiased`}>{children}</body>
    </html>
  );
}
