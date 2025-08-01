"use client";

import React from 'react';
import Link from "next/link";
import type { CTAProps } from "../types/components";

/**
 * Call-to-Action section with gradient background
 *
 * Final section encouraging users to get their cash offer or call.
 * Features two prominent buttons on a blue gradient background
 *
 * @param className - Additional CSS classes
 * @returns JSX element for the call-to-action section
 */
const CTA = React.memo(function CTA({ className = "" }: CTAProps) {
  return (
    <section
      className={`py-20 theme-hero-bg ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          className="text-3xl lg:text-4xl font-bold mb-6"
          style={{ color: 'var(--brand-hero-text)' }}
        >
          Ready to Sell Your House Fast?
        </h2>
        <p 
          className="text-xl mb-8 leading-relaxed"
          style={{ color: 'var(--brand-hero-subtext)' }}
        >
          Get your cash offer in 24 hours. No obligation, no hidden fees, no
          repairs needed. We buy houses as-is.
        </p>
        <p 
          className="text-lg mb-8 leading-relaxed"
          style={{ color: 'var(--brand-hero-subtext)' }}
        >
          Licensed, experienced, and trusted by hundreds of sellers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
            style={{
              background: `linear-gradient(to right, var(--brand-primary-500), var(--brand-primary-600))`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `linear-gradient(to right, var(--brand-primary-400), var(--brand-primary-500))`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `linear-gradient(to right, var(--brand-primary-500), var(--brand-primary-600))`;
            }}
          >
            Get My Cash Offer
          </Link>
          <Link
            href="/how-it-works"
            className="border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            style={{
              borderColor: 'var(--brand-hero-subtext)',
              color: 'var(--brand-hero-subtext)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--brand-hero-subtext)';
              e.currentTarget.style.color = 'var(--brand-hero-text)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--brand-hero-subtext)';
            }}
          >
            Call (647) 936-5467
          </Link>
        </div>

        <p 
          className="text-sm mt-6"
          style={{ color: 'var(--brand-hero-subtext)' }}
        >
          📃 Real Offers 🤝 Real People 🔑 Real Results
        </p>
      </div>
    </section>
  );
});

export default CTA;
