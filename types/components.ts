/**
 * Shared TypeScript interfaces for component props
 */

import type { LocationData } from '@/lib/cities';

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface HeaderProps extends BaseComponentProps {}

export interface HeroProps extends BaseComponentProps {
  locationName?: string;
  locationData?: LocationData;
}

export interface FeaturesProps extends BaseComponentProps {}

export interface HowItWorksProps extends BaseComponentProps {}

export interface StatsProps extends BaseComponentProps {}

export interface TestimonialsProps extends BaseComponentProps {}

export interface FAQProps extends BaseComponentProps {
  items?: FAQItem[];
  title?: string;
}

export interface CTAProps extends BaseComponentProps {}

export interface FooterProps extends BaseComponentProps {}

export interface LeadFormData {
  address: string;
  condition: string;
  reason: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  urgency: string;
}

export interface LeadFormProps extends BaseComponentProps {
  onSubmit?: (formData: LeadFormData) => void;
  isSubmitting?: boolean;
}

export interface FreeResourcesProps extends BaseComponentProps {}

export interface WhyChooseUsProps extends BaseComponentProps {}

// Form-related types
export interface FormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
}

export interface FormErrors {
  [key: string]: string;
}

// Navigation types
export interface NavLink {
  href: string;
  label: string;
}

// Testimonial types
export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

// FAQ types
export interface FAQItem {
  question: string;
  answer: string;
}

// How It Works types
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

// Stats types
export interface StatItem {
  number: string;
  label: string;
  subtitle: string;
}
