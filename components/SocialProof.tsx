import type { FeaturesProps } from "../types/components";

/**
 * Social Proof section with testimonials and trust indicators
 */
export default function SocialProof({ className = "" }: FeaturesProps) {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Toronto, ON",
      quote: "Got my offer in 24 hours and closed in 10 days. No stress, no fees, exactly as promised.",
      rating: 5
    },
    {
      name: "Mike R.",
      location: "Hamilton, ON", 
      quote: "Inherited my parents' house and needed to sell quickly. CanadaCashHomes made it so easy.",
      rating: 5
    },
    {
      name: "Jennifer L.",
      location: "London, ON",
      quote: "Sold my house as-is with foundation issues. Got a fair offer and closed on my timeline.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Homes Purchased" },
    { number: "24hrs", label: "Average Offer Time" },
    { number: "4.9/5", label: "Customer Rating" }
  ];

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">        
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from real Ontario homeowners
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.quote}"
              </p>
              
              {/* Attribution */}
              <div className="text-sm">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 text-sm text-gray-500">
            <span>✓ Licensed & Insured</span>
            <span>✓ BBB Accredited</span>
            <span>✓ Ontario Real Estate Professionals</span>
          </div>
        </div>
      </div>
    </section>
  );
}