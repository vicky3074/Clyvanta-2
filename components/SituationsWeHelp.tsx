import type { FeaturesProps } from "../types/components";

/**
 * Situations We Help section showing various scenarios
 */
export default function SituationsWeHelp({ className = "" }: FeaturesProps) {
  const situations = [
    "Avoiding Foreclosure",
    "Selling an Inherited Property", 
    "Going Through a Divorce",
    "Tired of Being a Landlord",
    "Facing Costly Repairs",
    "Relocating for a New Job"
  ];

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          We Help Homeowners in Any Situation
        </h2>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Life is unpredictable, and the need to sell a home can arise for many reasons. We provide a reliable solution for homeowners facing various challenges. We can help if you are:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {situations.map((situation, index) => (
            <div key={index} className="flex items-center justify-center bg-blue-50 p-4 rounded-lg">
              <span className="text-blue-600 mr-3">✓</span>
              <span className="text-gray-900 font-medium">{situation}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}