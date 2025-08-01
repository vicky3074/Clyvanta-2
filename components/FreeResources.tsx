import Link from "next/link";
import type { FreeResourcesProps } from "../types/components";

/**
 * Free Resources section with downloadable content
 *
 * Displays various free resources and guides available to users,
 * encouraging engagement and lead capture through valuable content
 *
 * @param className - Additional CSS classes
 * @returns JSX element for the free resources section
 */
export default function FreeResources({ className = "" }: FreeResourcesProps) {
  const resources = [
    {
      icon: "📊",
      title: "Free Home Valuation Guide",
      description:
        "Learn how to accurately estimate your home's value in today's market. Professional insights included.",
      cta: "Get Free Property Evaluation",
    },
    {
      icon: "✅",
      title: "Quick Sale Checklist",
      description:
        "Step-by-step checklist for selling your house in 30 days or less. Professional insights included.",
      cta: "Get My Cash Offer",
    },
    {
      icon: "📈",
      title: "Ontario Market Report",
      description:
        "Current market trends, price data, and forecasts for your area. Professional insights included.",
      cta: "Get My Cash Offer",
    },
  ];

  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Free Resources for Home Sellers
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">{resource.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {resource.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {resource.description}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {resource.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
