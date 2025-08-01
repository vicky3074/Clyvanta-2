import React from 'react';
import type { BaseComponentProps } from '../types/components';

/**
 * Track Record component showcasing company credentials and performance metrics
 * 
 * Displays BBB rating, closing time, customer satisfaction, licensing, and testimonial
 * to build trust and credibility with potential customers
 * 
 * @param className - Additional CSS classes
 * @returns JSX element for the track record section
 */
const TrackRecord = React.memo(function TrackRecord({ className = "" }: BaseComponentProps) {
  const stats = [
    {
      value: "100",
      label: "Customer Satisfaction",
      description: "Based on post-closing feedback"
    },
    {
      value: "18",
      label: "Average Days to Close",
      description: "From offer acceptance to cash in hand"
    },
    {
      value: "100%",
      label: "Registered & Insured",
      description: "Registered Ontario Corporation"
    }
  ];

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-primary-600">Our Track Record</span>{" "}
            <span className="text-gray-900">Speaks for Itself</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Committed to fair, transparent home purchases across Ontario
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl sm:text-5xl font-bold mb-3" style={{ color: 'var(--brand-primary-600)' }}>
                {stat.value}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-primary-50 rounded-2xl p-8 lg:p-12 text-center">
          <div className="flex justify-center mb-4">
            {/* 5 Stars */}
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 text-yellow-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Excellent Service Rating
          </h3>
          
          <blockquote className="text-lg text-gray-700 italic mb-6 max-w-4xl mx-auto">
            "Professional, fair, and incredibly fast. They made selling our house stress-free!"
          </blockquote>
          
          <div className="text-gray-600 font-medium">
            - Recent Customer Review
          </div>
        </div>

      </div>
    </section>
  );
});

export default TrackRecord;