"use client";

import type { FeaturesProps } from "../types/components";

/**
 * Features section highlighting company value propositions
 *
 * Displays three key benefits: market-based pricing, fair offers,
 * and stress-free closings with appropriate icons and descriptions
 *
 * @param className - Additional CSS classes
 * @returns JSX element for the features section
 */
export default function Features({ className = "" }: FeaturesProps) {
  const features = [
    {
      icon: "🛠️",
      title: "No Repairs or Cleaning Needed",
      description:
        "Sell your house exactly as it is. Don't worry about costly repairs, renovations, or even cleaning. We handle everything.",
    },
    {
      icon: "💰",
      title: "Keep All Your Money",
      description:
        "The offer we make is the amount you receive. There are absolutely no agent commissions, hidden fees, or closing costs.",
    },
    {
      icon: "⏰",
      title: "You Control the Timeline",
      description:
        "Whether you need to close in as little as a week or need more time to plan your move, we work on your schedule.",
    },
    {
      icon: "💵",
      title: "Receive a Cash Advance",
      description:
        "Need funds for your move or other expenses? We can provide a cash advance before the closing date to help you transition smoothly.",
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
            Why Homeowners Choose Us
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--brand-section-subtext)' }}
          >
            We've built our reputation on transparency, fairness, and putting
            homeowners first across Ontario.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
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
                className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4"
                style={{
                  background: `linear-gradient(to bottom right, var(--brand-primary-500), var(--brand-primary-600))`
                }}
              >
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 
                className="text-lg font-bold mb-3 text-center"
                style={{ color: 'var(--brand-section-text)' }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-sm leading-relaxed text-center"
                style={{ color: 'var(--brand-section-subtext)' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
