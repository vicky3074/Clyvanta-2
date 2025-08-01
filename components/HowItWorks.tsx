"use client";

import Link from "next/link";
import type { HowItWorksProps, ProcessStep } from "../types/components";

/**
 * How It Works section displaying the 3-step process
 *
 * Shows the simple process for selling a house: getting an offer,
 * receiving a fair cash offer, and getting paid at closing
 *
 * @param className - Additional CSS classes
 * @returns JSX element for the how it works section
 */
export default function HowItWorks({ className = "" }: HowItWorksProps) {
  const steps: ProcessStep[] = [
    {
      number: "1",
      title: "Tell Us About Your House",
      description:
        "Fill out our quick form with basic details about your property. Takes less than 2 minutes.",
    },
    {
      number: "2",
      title: "Get Your Cash Offer",
      description:
        "We'll review your property and provide a fair, no-obligation cash offer within 24 hours.",
    },
    {
      number: "3",
      title: "Close & Get Cash",
      description:
        "Choose your closing date. We handle all paperwork. Get cash in as little as 7 days.",
    },
  ];

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl lg:text-4xl font-bold mb-6"
            style={{ color: 'var(--brand-section-text)' }}
          >
            How It Works
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--brand-section-subtext)' }}
          >
            Sell your house in 3 simple steps
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting arrow (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-8 z-10">
                    <svg 
                      className="w-8 h-8" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      style={{ color: 'var(--brand-primary-300)' }}
                    >
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                )}
                
                <div 
                  className="rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1"
                  style={{
                    backgroundColor: 'var(--brand-white)',
                    borderColor: 'var(--brand-slate-200)',
                    borderWidth: '1px',
                    borderStyle: 'solid'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--brand-primary-200)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--brand-slate-200)';
                  }}
                >
                  <div 
                    className="inline-flex items-center justify-center w-20 h-20 text-white rounded-full text-2xl font-bold mb-6 shadow-lg"
                    style={{
                      background: `linear-gradient(to bottom right, var(--brand-primary-500), var(--brand-primary-600))`
                    }}
                  >
                    {step.number}
                  </div>

                  <h3 
                    className="text-xl font-bold mb-4"
                    style={{ color: 'var(--brand-section-text)' }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="leading-relaxed"
                    style={{ color: 'var(--brand-section-subtext)' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
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
            Get Your Cash Offer
          </Link>
        </div>
      </div>
    </section>
  );
}
