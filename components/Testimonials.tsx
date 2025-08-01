import type { TestimonialsProps, Testimonial } from "../types/components";

/**
 * Testimonials section displaying customer reviews and ratings
 *
 * Shows authentic testimonials from Ontario homeowners who used the service,
 * including 5-star ratings and detailed feedback about their experience
 *
 * @param className - Additional CSS classes
 * @returns JSX element for the testimonials section
 */
export default function Testimonials({ className = "" }: TestimonialsProps) {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah M.",
      location: "Toronto, ON",
      text: "Got my offer in 24 hours and closed in 10 days. No stress, no fees, exactly as promised. I couldn't believe how simple the whole process was.",
      rating: 5,
    },
    {
      name: "Mike R.",
      location: "Hamilton, ON",
      text: "Inherited my parents' house and needed to sell quickly. CanadaCashHomes made it so easy - no repairs needed, no showings. Fair offer and quick closing.",
      rating: 5,
    },
    {
      name: "Jennifer L.",
      location: "London, ON",
      text: "Sold my house as-is with foundation issues. Got a fair offer and closed on my timeline. Way better than dealing with realtors and endless showings.",
      rating: 5,
    },
  ];

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Real Stories from Real Ontario Homeowners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our transparent process helped Ontario families in
            challenging situations get fair cash offers without pressure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 relative">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
