/**
 * Master Configuration File
 * 
 * Single source of truth for all site-wide constants
 * Update here to reflect changes everywhere
 */

export const SITE_CONFIG = {
  // Company Information
  company: {
    name: "CanadaCashHomes",
    legalName: "CanadaCashHomes Inc.",
    tagline: "Sell Your House Fast for Cash",
    description: "Get a fair cash offer for your Canadian home in 24 hours. No repairs, no showings, no commissions. We buy houses as-is across Ontario.",
  },

  // Contact Information
  contact: {
    phone: {
      number: "+1(647) 936-5467",
      display: "+1(647) 936-5467",
      href: "tel:+16479365467",
      vanity: "+1-647-936-5467" // If you get a vanity number
    },
    email: {
      primary: "info@canadacashhomes.com",
      href: "mailto:info@canadacashhomes.com"
    },
    address: {
      // Add when you have a business address
      street: "",
      city: "",
      province: "Ontario",
      country: "Canada",
      postalCode: ""
    }
  },

  // Website URLs
  urls: {
    production: "https://canadacashhomes.com",
    staging: "http://140.238.151.38",
    local: "http://localhost:3000"
  },

  // Service Areas
  serviceAreas: {
    primary: ["Toronto", "Hamilton", "Mississauga", "London", "Windsor", "Kingston"],
    province: "Ontario",
    country: "Canada"
  },

  // Business Information
  business: {
    hours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "10:00 AM - 4:00 PM", 
      sunday: "Closed"
    },
    license: "Licensed Real Estate Brokerage", // Update with actual license
    founded: "2024",
    guarantees: [
      "No repairs needed",
      "No commissions", 
      "No hidden fees",
      "Cash offer in 24 hours",
      "Close in 7 days"
    ]
  },

  // Social Media (when ready)
  social: {
    facebook: "",
    twitter: "",
    linkedin: "",
    youtube: ""
  },

  // SEO Defaults
  seo: {
    defaultTitle: "CanadaCashHomes - Sell Your House Fast for Cash",
    titleTemplate: "%s | CanadaCashHomes",
    defaultDescription: "Get a fair cash offer for your Canadian home in 24 hours. No repairs, no showings, no commissions. We buy houses as-is across Ontario.",
    keywords: [
      "sell house fast",
      "cash for homes", 
      "we buy houses",
      "Ontario real estate",
      "cash home buyers",
      "sell house as is"
    ]
  }
} as const;

// Utility functions for common use cases
export const getFormattedPhone = () => SITE_CONFIG.contact.phone.display;
export const getPhoneHref = () => SITE_CONFIG.contact.phone.href;
export const getEmailHref = () => SITE_CONFIG.contact.email.href;
export const getPrimaryEmail = () => SITE_CONFIG.contact.email.primary;
export const getCompanyName = () => SITE_CONFIG.company.name;
export const getServiceAreasText = () => SITE_CONFIG.serviceAreas.primary.join(", ");

// Type definitions for TypeScript
export type SiteConfig = typeof SITE_CONFIG;