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
    default: "CanadaCashHomes - Sell Your House Fast for Cash",
    template: "%s | CanadaCashHomes",
  },
  description:
    "Get a fair cash offer for your Canadian home in 24 hours. No repairs, no showings, no commissions. We buy houses as-is across Canada.",
  keywords: [
    "sell house fast",
    "cash for homes",
    "we buy houses",
    "Canada real estate",
    "cash home buyers",
  ],
  authors: [{ name: "CanadaCashHomes" }],
  creator: "CanadaCashHomes",
  publisher: "CanadaCashHomes",
  metadataBase: new URL("https://canadacashhomes.com"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://canadacashhomes.com",
    title: "CanadaCashHomes - Sell Your House Fast for Cash",
    description:
      "Get a fair cash offer for your Canadian home in 24 hours. No repairs, no showings, no commissions.",
    siteName: "CanadaCashHomes",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CanadaCashHomes - We Buy Houses Fast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CanadaCashHomes - Sell Your House Fast for Cash",
    description:
      "Get a fair cash offer for your Canadian home in 24 hours. No repairs, no showings, no commissions.",
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
