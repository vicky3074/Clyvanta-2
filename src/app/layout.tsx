import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/themes.css";
import type { Metadata } from "next";
import { ThemeProviders } from "../lib/theme-provider";
import { ThemeToggle } from "../../components/ThemeToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Clyvanta - Enterprise IT Solutions & Digital Transformation",
    template: "%s | Clyvanta",
  },
  description:
    "Enterprise-grade IT solutions that automate, optimize, and scale your business. Custom development, AI integration, digital marketing, and business automation services.",
  keywords: [
    "IT consulting",
    "enterprise software",
    "digital transformation",
    "business automation",
    "AI integration",
    "custom software development",
    "business process automation",
  ],
  authors: [{ name: "Clyvanta" }],
  creator: "Clyvanta",
  publisher: "Clyvanta",
  metadataBase: new URL("https://clyvanta.com"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clyvanta.com",
    title: "Clyvanta - Enterprise IT Solutions & Digital Transformation",
    description:
      "Enterprise-grade IT solutions that automate, optimize, and scale your business. Custom development, AI integration, and business automation services.",
    siteName: "Clyvanta",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clyvanta - Enterprise IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clyvanta - Enterprise IT Solutions & Digital Transformation",
    description:
      "Enterprise-grade IT solutions that automate, optimize, and scale your business. Custom development and AI integration.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noarchive: false,
      nosnippet: false,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased font-sans bg-white text-gray-900">
        <ThemeProviders>
          {children}
          <ThemeToggle />
        </ThemeProviders>
      </body>
    </html>
  );
}
