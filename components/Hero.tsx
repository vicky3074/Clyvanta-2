"use client";

import type { HeroProps } from "../types/components";
import LeadForm from "./LeadForm";

/**
 * Hero section component with lead capture form
 *
 * Features a compelling headline, trust badges, and a 2-part lead form
 * optimized for Ontario homeowner lead generation
 *
 * @param className - Additional CSS classes
 * @param locationName - Optional city/region name for dynamic content
 * @param locationData - Optional location metadata for enhanced customization
 * @returns JSX element for the hero section with integrated lead form
 */
export default function Hero({ className = "", locationName, locationData }: HeroProps) {
  // Dynamic content based on location
  const heroTitle = locationName 
    ? `We Buy Houses Fast`
    : `We Buy Houses Fast`;
    
  const heroSubtitle = locationName
    ? `for Cash in ${locationName}`
    : `for Cash Across Ontario`;

  const heroDescription = locationName && locationData
    ? locationData.type === 'region'
      ? `Serving ${locationData.nearbyAreas.slice(0, 3).join(', ')} and the entire ${locationName} area. We buy fixer-uppers, inherited properties, and distressed homes. Get your cash offer in 24 hours - any condition!`
      : `Serving ${locationName} and surrounding ${locationData.region} area. We buy fixer-uppers, inherited properties, and distressed homes. Get your cash offer in 24 hours - any condition!`
    : `Serving Toronto, Hamilton, London, Windsor, Kingston & beyond. We buy fixer-uppers, inherited properties, and distressed homes. Get your cash offer in 24 hours - any condition!`;

  return (
    <section
      className={`theme-hero-bg py-24 lg:py-40 min-h-screen flex items-center ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Headlines and Benefits */}
          <div>
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold mb-8 leading-tight tracking-tight"
              style={{ color: 'var(--brand-hero-text)' }}
            >
              {heroTitle}
              <span className="block" style={{ color: 'var(--brand-primary-600)' }}>
                {heroSubtitle}
              </span>
            </h1>
            <p 
              className="text-xl lg:text-2xl mb-10 leading-relaxed max-w-2xl"
              style={{ color: 'var(--brand-hero-subtext)' }}
            >
              {heroDescription}
            </p>

            {/* Trust Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                📞 Fast Response Times
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                💰 Guaranteed Fair Offer
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                🏁 Fast Closings
              </span>
            </div>

            {/* Main CTA */}
            <div className="text-center lg:text-left mb-6">
              <button 
                className="w-full lg:w-auto text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-colors"
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
                Get My Fair Cash Offer Now
              </button>
            </div>
          </div>

          {/* Right Column - Lead Form */}
          <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
            <LeadForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
