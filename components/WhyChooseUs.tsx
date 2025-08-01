import type { WhyChooseUsProps } from "../types/components";

/**
 * Why Choose Us section highlighting company differentiators
 *
 * Showcases unique value propositions and reasons why customers
 * should choose this company over competitors
 *
 * @param className - Additional CSS classes
 * @returns JSX element for the why choose us section
 */
export default function WhyChooseUs({ className = "" }: WhyChooseUsProps) {
  const reasons = [
    {
      icon: "🏠",
      title: "Our Local Expertise",
      description:
        "Our team, which includes a real estate veteran with years of experience, has deep knowledge of the Canadian market. We provide fair, data-driven offers you can trust.",
    },
    {
      icon: "🤝",
      title: "A Personal, Human Approach",
      description:
        "Started by friends, we treat you like a neighbour, not a number. We understand the human side of selling a home and offer empathetic, no-pressure support.",
    },
    {
      icon: "💎",
      title: "Absolute Transparency",
      description:
        "We believe in clear communication. There are no hidden fees, no confusing jargon, and no last-minute surprises. The price we agree on is the cash you get.",
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
            Why More Canadians Are Choosing Us
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--brand-section-subtext)' }}
          >
            We're not just another home buying company. We're your neighbours, dedicated to a better home-selling experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              style={{ 
                backgroundColor: 'var(--brand-white)',
                borderColor: 'var(--brand-slate-200)'
              }}
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                style={{
                  background: `linear-gradient(to bottom right, var(--brand-primary-500), var(--brand-primary-600))`
                }}
              >
                <span className="text-3xl text-white">{reason.icon}</span>
              </div>
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--brand-section-text)' }}
              >
                {reason.title}
              </h3>
              <p 
                className="leading-relaxed"
                style={{ color: 'var(--brand-section-subtext)' }}
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
