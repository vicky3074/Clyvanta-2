"use client";

import { useState } from "react";
import type { FAQProps, FAQItem } from "../types/components";

/**
 * FAQ section with expandable question and answer items
 *
 * Displays frequently asked questions with toggle functionality.
 * Questions can be expanded/collapsed to show detailed answers
 *
 * @param items - Array of FAQ items with questions and answers
 * @param title - Section title (optional)
 * @param className - Additional CSS classes
 * @returns JSX element for the FAQ section
 */
export default function FAQ({
  items = [
    {
      question: "How does the CanadaCashHomes process work from start to finish?",
      answer:
        "Our simple 3-step process makes selling fast and stress-free. First, fill out our online form to schedule a quick property visit. Within 24 hours, we'll provide you with a fair cash offer based on honest market analysis. If you accept, we handle all paperwork and coordinate with lawyers to close in just 7-14 days. You'll receive cash in hand with no repairs, no agent fees, and no commissions.",
    },
    {
      question: "Will I pay any fees, commissions, or closing costs?",
      answer:
        "Absolutely not. Unlike traditional real estate sales where you'd pay around $37,200 in realtor commissions on a typical $620,000 Ontario home, we charge zero fees. No agent commissions, no repair costs, no closing fees, no hidden charges. The cash offer we make is exactly what you'll receive at closing.",
    },
    {
      question: "Do I need to clean, stage, or make repairs before you buy my house?",
      answer:
        "No repairs needed whatsoever. We buy houses in any condition - from move-in ready to major fixer-uppers. Whether your property needs minor updates or has significant issues like fire or water damage, we purchase as-is. You don't need to spend a dime on repairs, renovations, cleaning, or staging.",
    },
    {
      question: "How quickly can you make an offer and close the sale?",
      answer:
        "We provide cash offers within 24 hours of our property visit, and we can close in as little as 7-14 days. This is dramatically faster than traditional sales that typically take 4-6 weeks in Ontario markets like St. Catharines, or 2-6 months through real estate agents. We have funds ready and can work around your preferred closing timeline.",
    },
    {
      question: "How do you determine your cash offer amount?",
      answer:
        "Our offers are based on honest market analysis using current fair market value, estimated repair costs, local market conditions, comparable sales in your specific Ontario neighborhood, and our investment criteria. We provide transparent explanations of how we calculated your offer, ensuring you understand the reasoning behind our fair cash price.",
    },
    {
      question: "Am I obligated to accept your offer once I receive it?",
      answer:
        "Absolutely not. Our offers are completely no-obligation with no pressure tactics. You can accept the offer, decline with no hard feelings, ask questions, request modifications, or take time to consider other options. If our offer doesn't work for you, we'll shake hands and part as friends.",
    },
    {
      question: "What types of situations can you help with?",
      answer:
        "We help Ontario homeowners in many situations including inherited properties, foreclosure prevention, divorce settlements, job relocations, urgent financial needs, rental property sales, and landlord exits. We also purchase properties with any challenges - structural issues, fire damage, water damage, or properties in any condition.",
    },
    {
      question: "What paperwork is involved and who handles the legal requirements?",
      answer:
        "We handle all the paperwork and work with professional real estate lawyers throughout Ontario to ensure proper legal documentation. This includes title searches, legal documentation, transfer taxes, and addressing any title issues that arise. At closing, you'll meet at the lawyer's office to review and sign documents, then receive your cash payment. The legal process ensures everything is properly transferred and secure.",
    },
  ] as FAQItem[],
  title = "Frequently Asked Questions",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 
        className="text-3xl font-bold mb-8 text-center"
        style={{ color: 'var(--brand-section-text)' }}
      >
        {title}
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="rounded-lg shadow-md"
            style={{
              backgroundColor: 'var(--brand-white)',
              borderColor: 'var(--brand-slate-200)',
              borderWidth: '1px',
              borderStyle: 'solid'
            }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between transition-colors hover:bg-gray-50"
            >
              <span 
                className="font-semibold pr-4"
                style={{ color: 'var(--brand-section-text)' }}
              >
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                style={{ color: 'var(--brand-primary-500)' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div 
                className="px-6 pb-4"
                style={{ backgroundColor: 'var(--brand-slate-50)' }}
              >
                <p 
                  className="leading-relaxed"
                  style={{ color: 'var(--brand-section-subtext)' }}
                >
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
