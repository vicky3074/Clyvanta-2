"use client";

import { useState, useCallback } from "react";
import { SITE_CONFIG } from "@/lib/config";

interface LeadFormProps {
  className?: string;
  variant?: "hero" | "contact";
  showTrustBadges?: boolean;
  title?: string;
  subtitle?: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  property_type: string;
  property_condition: string;
  timeline: string;
  selling_reason: string;
  description: string;
}

interface CRMResponse {
  success: boolean;
  message: string;
  lead_id?: string;
  errors?: Record<string, string>;
}

interface FormErrors extends Partial<FormData> {
  submit?: string;
}

/**
 * Master Lead Form Component
 * 2-part form used in both Hero and Contact page
 * 
 * @param variant - "hero" or "contact" styling variant
 * @param showTrustBadges - Whether to show trust badges at top
 * @param title - Custom form title
 * @param subtitle - Custom form subtitle
 * @param className - Additional CSS classes
 */
export default function LeadForm({ 
  className = "",
  variant = "contact",
  showTrustBadges = true,
  title,
  subtitle
}: LeadFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [leadId, setLeadId] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    property_type: "",
    property_condition: "",
    timeline: "",
    selling_reason: "",
    description: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  }, [errors]);

  const validateStep1 = useCallback(() => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\+]?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Property address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const validateStep2 = useCallback(() => {
    const newErrors: FormErrors = {};
    
    if (!formData.property_type) {
      newErrors.property_type = "Please select a property type";
    }

    if (!formData.property_condition) {
      newErrors.property_condition = "Please select property condition";
    }

    if (!formData.timeline) {
      newErrors.timeline = "Please select your timeline";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleNext = useCallback(async () => {
    if (!validateStep1()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Step 1: Create lead in CRM
      const response = await fetch('/api/create-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address
        })
      });

      const result: CRMResponse = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Network error');
      }

      if (result.success && result.lead_id) {
        setLeadId(result.lead_id);
        setCurrentStep(2);
        setErrors({}); // Clear any previous errors
      } else {
        setErrors({ 
          submit: result.message || 'Failed to save your information. Please try again.',
          ...result.errors 
        });
      }
    } catch (error) {
      console.error('Error creating lead:', error);
      
      if (error instanceof Error) {
        setErrors({ 
          submit: error.message || 'Connection error. Please try again.'
        });
      } else {
        setErrors({ 
          submit: 'An unexpected error occurred. Please try again.' 
        });
      }
    } finally {
      setIsLoading(false);
    }
  }, [formData, validateStep1]);

  const handlePrevious = useCallback(() => {
    setCurrentStep(1);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep2()) {
      return;
    }

    if (!leadId) {
      setErrors({ submit: 'Session expired. Please start over.' });
      setCurrentStep(1);
      return;
    }

    setIsLoading(true);
    
    try {
      // Step 2: Submit property details to CRM
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lead_id: leadId,
          property_type: formData.property_type,
          property_condition: formData.property_condition,
          timeline: formData.timeline,
          selling_reason: formData.selling_reason || '',
          description: formData.description || ''
        })
      });

      const result: CRMResponse = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Network error');
      }

      if (result.success) {
        // Success! Show integrated thank you content
        setIsSuccess(true);
      } else {
        setErrors({ 
          submit: result.message || 'Failed to submit your information. Please try again.',
          ...result.errors 
        });
      }
    } catch (error) {
      console.error('Error submitting lead:', error);
      
      if (error instanceof Error) {
        setErrors({ 
          submit: error.message || 'Connection error. Please try again.'
        });
        
        // Handle session expired case
        if (error.message?.includes('Session expired') || error.message?.includes('Lead not found')) {
          setCurrentStep(1);
          setLeadId('');
        }
      } else {
        setErrors({ 
          submit: 'An unexpected error occurred. Please try again.' 
        });
      }
    } finally {
      setIsLoading(false);
    }
  }, [formData, validateStep2, leadId]);

  const propertyTypes = [
    { value: "house", label: "Single Family House" },
    { value: "condo", label: "Condo/Apartment" },
    { value: "townhouse", label: "Townhouse" },
    { value: "duplex", label: "Duplex/Multi-Unit" },
    { value: "mobile", label: "Mobile Home" },
    { value: "other", label: "Other" },
  ];

  const propertyConditions = [
    { value: "excellent", label: "Excellent", desc: "Move-in ready, recently updated", color: "text-gray-900" },
    { value: "good", label: "Good", desc: "Minor cosmetic work needed", color: "text-gray-900" },
    { value: "fair", label: "Fair", desc: "Needs some repairs", color: "text-gray-900" },
    { value: "poor", label: "Needs Work", desc: "Major repairs required", color: "text-gray-900" },
  ];

  const timelines = [
    { value: "asap", label: "URGENT", desc: "Within 7 days" },
    { value: "2-weeks", label: "Very Soon", desc: "Within 2 weeks" },
    { value: "30-days", label: "30 Days", desc: "Within a month" },
    { value: "1-3-months", label: "1-3 Months", desc: "Flexible timeline" },
    { value: "3-6-months", label: "3-6 Months", desc: "Planning ahead" },
    { value: "exploring", label: "Just Exploring", desc: "Gathering information" },
  ];

  const sellingReasons = [
    { value: "relocating", label: "Relocating" },
    { value: "financial", label: "Financial Reasons" },
    { value: "inherited", label: "Inherited Property" },
    { value: "downsizing", label: "Downsizing" },
    { value: "divorce", label: "Divorce" },
    { value: "other", label: "Other" },
  ];

  // Default titles based on variant
  const defaultTitle = variant === "hero" 
    ? "Get Your Cash Offer" 
    : "Get Your Cash Offer";
  
  const defaultSubtitle = variant === "hero"
    ? "Fill out this quick form to get started. No obligation, no pressure, completely free."
    : "Fill out this quick form to get started. No obligation, no pressure, completely free.";

  return (
    <div className={`max-w-2xl mx-auto ${className}`} role="region" aria-labelledby="form-heading">
      {/* Trust Badges Box */}
      {showTrustBadges && (
        <div 
          className="rounded-lg p-4 mb-6 border-2"
          style={{
            backgroundColor: 'var(--brand-primary-50)',
            borderColor: 'var(--brand-primary-500)'
          }}
        >
          <div 
            className="flex flex-wrap justify-center gap-4 text-xs font-medium"
            style={{ color: 'var(--brand-primary-800)' }}
          >
            <span>✨ No Obligation</span>
            <span>💰 No Hidden Fees</span>
            <span>⚡ Close in 14 Days</span>
            <span>🏠 Any Condition</span>
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <h2 id="form-heading" className="text-2xl font-bold text-slate-800 mb-2">
          {title || defaultTitle}
        </h2>
        <p className="text-slate-600">
          {subtitle || defaultSubtitle}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
          <span>Step {currentStep} of 2</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div 
            className="h-2 rounded-full transition-all duration-300"
            style={{ 
              width: currentStep === 1 ? "50%" : "100%",
              background: `linear-gradient(to right, var(--brand-primary-500), var(--brand-primary-600))`
            }}
          />
        </div>
      </div>

      <form 
        onSubmit={handleSubmit} 
        className="space-y-5" 
        noValidate
        role="form"
        aria-label={`${variant === 'hero' ? 'Hero' : 'Contact'} lead capture form`}
      >
        {errors.submit && (
          <div 
            className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm"
            role="alert"
            aria-live="polite"
          >
            {errors.submit}
          </div>
        )}

        {isSuccess && (
          <div className="text-center">
            {/* Success Header */}
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: 'var(--brand-primary-100)' }}
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: 'var(--brand-primary-600)' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>

            <h3 className="text-xl text-gray-700 mb-6">
              Your information has been received successfully.
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We've received your property information and our team is already
              reviewing your submission. You can expect to hear from one of
              our property specialists within the next{" "}
              <strong>24 hours</strong> with your cash offer.
            </p>

            {/* What Happens Next */}
            <div 
              className="rounded-lg p-6 mb-8 text-left"
              style={{ backgroundColor: 'var(--brand-primary-50)' }}
            >
              <h4 className="text-lg font-semibold mb-4 text-center text-gray-900">
                What Happens Next?
              </h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div 
                    className="w-6 h-6 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5"
                    style={{ backgroundColor: 'var(--brand-primary-600)' }}
                  >
                    1
                  </div>
                  <p className="text-gray-700">
                    Our team reviews your property details within 2 hours
                  </p>
                </div>
                <div className="flex items-start">
                  <div 
                    className="w-6 h-6 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5"
                    style={{ backgroundColor: 'var(--brand-primary-600)' }}
                  >
                    2
                  </div>
                  <p className="text-gray-700">
                    We analyze local market data and comparable sales
                  </p>
                </div>
                <div className="flex items-start">
                  <div 
                    className="w-6 h-6 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5"
                    style={{ backgroundColor: 'var(--brand-primary-600)' }}
                  >
                    3
                  </div>
                  <p className="text-gray-700">
                    You receive a fair, no-obligation cash offer within 24 hours
                  </p>
                </div>
                <div className="flex items-start">
                  <div 
                    className="w-6 h-6 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5"
                    style={{ backgroundColor: 'var(--brand-primary-600)' }}
                  >
                    4
                  </div>
                  <p className="text-gray-700">
                    If you accept, we can close in as little as 7 days
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Have Questions?
              </h4>
              <p className="text-gray-600 mb-6">
                Feel free to reach out to us anytime. We're here to help make
                this process as smooth as possible.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={SITE_CONFIG.contact.phone.href}
                  className="text-white px-8 py-3 rounded-lg font-semibold transition-all hover:opacity-90 inline-block"
                  style={{
                    background: `linear-gradient(to right, var(--brand-primary-500), var(--brand-primary-600))`
                  }}
                >
                  Call {SITE_CONFIG.contact.phone.display}
                </a>
                <a
                  href="/how-it-works"
                  className="border-2 px-8 py-3 rounded-lg font-semibold transition-all hover:opacity-80 inline-block"
                  style={{
                    borderColor: 'var(--brand-primary-600)',
                    color: 'var(--brand-primary-600)'
                  }}
                >
                  Learn About Our Process
                </a>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Why Homeowners Choose Us
              </h4>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: 'var(--brand-primary-100)' }}
                  >
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Fast & Simple
                  </h5>
                  <p className="text-sm text-gray-600">
                    No lengthy processes, inspections, or financing delays.
                  </p>
                </div>

                <div>
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: 'var(--brand-primary-100)' }}
                  >
                    <span className="text-2xl">💰</span>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Fair Offers
                  </h5>
                  <p className="text-sm text-gray-600">
                    Competitive cash offers based on real market value.
                  </p>
                </div>

                <div>
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: 'var(--brand-primary-100)' }}
                  >
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">
                    No Obligation
                  </h5>
                  <p className="text-sm text-gray-600">
                    Free offers with absolutely no pressure to accept.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 1: Basic Information */}
        {currentStep === 1 && !isSuccess && (
          <div className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                    errors.name ? "border-red-300 bg-red-50" : "border-slate-300"
                  }`}
                  style={{
                    '--tw-ring-color': 'var(--brand-primary-500)',
                    '--tw-ring-opacity': '0.5'
                  } as React.CSSProperties}
                  onFocus={(e) => {
                    e.target.style.outline = '2px solid var(--brand-primary-500)';
                    e.target.style.outlineOffset = '2px';
                    e.target.style.borderColor = 'transparent';
                  }}
                  onBlur={(e) => {
                    e.target.style.outline = 'none';
                    e.target.style.borderColor = errors.name ? '#fca5a5' : '#cbd5e1';
                  }}
                  placeholder="John Smith"
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                    errors.phone ? "border-red-300 bg-red-50" : "border-slate-300"
                  }`}
                  onFocus={(e) => {
                    e.target.style.outline = '2px solid var(--brand-primary-500)';
                    e.target.style.outlineOffset = '2px';
                    e.target.style.borderColor = 'transparent';
                  }}
                  onBlur={(e) => {
                    e.target.style.outline = 'none';
                    e.target.style.borderColor = errors.phone ? '#fca5a5' : '#cbd5e1';
                  }}
                  placeholder="(647) 123-4567"
                  aria-invalid={errors.phone ? "true" : "false"}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                  errors.email ? "border-red-300 bg-red-50" : "border-slate-300"
                }`}
                onFocus={(e) => {
                  e.target.style.outline = '2px solid var(--brand-primary-500)';
                  e.target.style.outlineOffset = '2px';
                  e.target.style.borderColor = 'transparent';
                }}
                onBlur={(e) => {
                  e.target.style.outline = 'none';
                  e.target.style.borderColor = errors.email ? '#fca5a5' : '#cbd5e1';
                }}
                placeholder="john@email.com"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">
                Property Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                  errors.address ? "border-red-300 bg-red-50" : "border-slate-300"
                }`}
                onFocus={(e) => {
                  e.target.style.outline = '2px solid var(--brand-primary-500)';
                  e.target.style.outlineOffset = '2px';
                  e.target.style.borderColor = 'transparent';
                }}
                onBlur={(e) => {
                  e.target.style.outline = 'none';
                  e.target.style.borderColor = errors.address ? '#fca5a5' : '#cbd5e1';
                }}
                placeholder="123 Main Street, Toronto, ON"
                aria-invalid={errors.address ? "true" : "false"}
                aria-describedby={errors.address ? "address-error" : undefined}
              />
              {errors.address && (
                <p id="address-error" className="text-red-600 text-sm mt-1">{errors.address}</p>
              )}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={isLoading}
              className="w-full text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg flex items-center justify-center"
              style={{
                background: isLoading 
                  ? `linear-gradient(to right, var(--brand-primary-300), var(--brand-primary-400))`
                  : `linear-gradient(to right, var(--brand-primary-500), var(--brand-primary-600))`,
                cursor: isLoading ? 'not-allowed' : 'pointer'
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.background = `linear-gradient(to right, var(--brand-primary-400), var(--brand-primary-500))`;
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.background = `linear-gradient(to right, var(--brand-primary-500), var(--brand-primary-600))`;
                }
              }}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Continue →"
              )}
            </button>
          </div>
        )}

        {/* Step 2: Property Details */}  
        {currentStep === 2 && !isSuccess && (
          <div className="space-y-5">
            <div className="text-center mb-6">
              <h3 
                className="text-xl font-semibold text-slate-800 mb-2"
                id="step2-heading"
                aria-level={3}
              >
                Almost Done! Tell us about your property...
              </h3>
              <p className="text-slate-600" id="step2-description">
                This helps us provide the most accurate cash offer within 24 hours
              </p>
            </div>

            {/* Property Type */}
            <div>
              <fieldset>
                <legend className="block text-sm font-medium text-slate-700 mb-2">
                  What type of property is this? *
                </legend>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3" role="radiogroup" aria-required="true">
                {propertyTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => handleInputChange("property_type", type.value)}
                    className="px-4 py-3 border rounded-lg text-sm font-medium transition-colors text-center"
                    role="radio"
                    aria-checked={formData.property_type === type.value}
                    aria-describedby={errors.property_type ? "property-type-error" : undefined}
                    style={{
                      borderColor: formData.property_type === type.value ? 'var(--brand-primary-500)' : '#cbd5e1',
                      backgroundColor: formData.property_type === type.value ? 'var(--brand-primary-50)' : 'transparent',
                      color: formData.property_type === type.value ? 'var(--brand-primary-700)' : '#1e293b'
                    }}
                    onMouseEnter={(e) => {
                      if (formData.property_type !== type.value) {
                        e.currentTarget.style.borderColor = 'var(--brand-primary-500)';
                        e.currentTarget.style.backgroundColor = 'var(--brand-primary-50)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (formData.property_type !== type.value) {
                        e.currentTarget.style.borderColor = '#cbd5e1';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {type.label}
                  </button>
                ))}
                </div>
              </fieldset>
              {errors.property_type && (
                <p id="property-type-error" className="text-red-600 text-sm mt-1" role="alert">
                  {errors.property_type}
                </p>
              )}
            </div>

            {/* Property Condition */}
            <div>
              <fieldset>
                <legend className="block text-sm font-medium text-slate-700 mb-2">
                  What's the condition of your property? *
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3" role="radiogroup" aria-required="true">
                {propertyConditions.map((condition) => (
                  <button
                    key={condition.value}
                    type="button"
                    onClick={() => handleInputChange("property_condition", condition.value)}
                    className="px-4 py-3 border rounded-lg text-sm font-medium transition-colors text-center"
                    role="radio"
                    aria-checked={formData.property_condition === condition.value}
                    aria-describedby={errors.property_condition ? "property-condition-error" : undefined}
                    style={{
                      borderColor: formData.property_condition === condition.value ? 'var(--brand-primary-500)' : '#cbd5e1',
                      backgroundColor: formData.property_condition === condition.value ? 'var(--brand-primary-50)' : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (formData.property_condition !== condition.value) {
                        e.currentTarget.style.borderColor = 'var(--brand-primary-500)';
                        e.currentTarget.style.backgroundColor = 'var(--brand-primary-50)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (formData.property_condition !== condition.value) {
                        e.currentTarget.style.borderColor = '#cbd5e1';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <div className={`font-semibold ${condition.color}`}>{condition.label}</div>
                    <div className="text-xs text-slate-500">{condition.desc}</div>
                  </button>
                ))}
                </div>
              </fieldset>
              {errors.property_condition && (
                <p id="property-condition-error" className="text-red-600 text-sm mt-1" role="alert">
                  {errors.property_condition}
                </p>
              )}
            </div>

            {/* Timeline */}
            <div>
              <fieldset>
                <legend className="block text-sm font-medium text-slate-700 mb-2">
                  How quickly do you need to sell? *
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" role="radiogroup" aria-required="true">
                {timelines.map((timeline) => (
                  <button
                    key={timeline.value}
                    type="button"
                    onClick={() => handleInputChange("timeline", timeline.value)}
                    className="px-4 py-3 border rounded-lg text-sm font-medium transition-colors text-center"
                    role="radio"
                    aria-checked={formData.timeline === timeline.value}
                    aria-describedby={errors.timeline ? "timeline-error" : undefined}
                    style={{
                      borderColor: formData.timeline === timeline.value 
                        ? 'var(--brand-primary-500)' 
                        : timeline.value === "asap" 
                        ? 'var(--brand-primary-300)'
                        : timeline.value === "2-weeks"
                        ? 'var(--brand-primary-200)'
                        : '#cbd5e1',
                      backgroundColor: formData.timeline === timeline.value 
                        ? 'var(--brand-primary-50)'
                        : timeline.value === "asap" || timeline.value === "2-weeks"
                        ? 'var(--brand-primary-50)'
                        : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (formData.timeline !== timeline.value) {
                        e.currentTarget.style.borderColor = timeline.value === "asap" || timeline.value === "2-weeks" 
                          ? 'var(--brand-primary-500)' 
                          : 'var(--brand-primary-500)';
                        e.currentTarget.style.backgroundColor = 'var(--brand-primary-50)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (formData.timeline !== timeline.value) {
                        e.currentTarget.style.borderColor = timeline.value === "asap" 
                          ? 'var(--brand-primary-300)'
                          : timeline.value === "2-weeks"
                          ? 'var(--brand-primary-200)'
                          : '#cbd5e1';
                        e.currentTarget.style.backgroundColor = timeline.value === "asap" || timeline.value === "2-weeks"
                          ? 'var(--brand-primary-50)'
                          : 'transparent';
                      }
                    }}
                  >
                    <div 
                      className="font-semibold text-base"
                      style={{
                        color: timeline.value === "asap" 
                          ? 'var(--brand-primary-800)'
                          : timeline.value === "2-weeks" 
                          ? 'var(--brand-primary-700)'
                          : '#1e293b'
                      }}
                    >{timeline.label}</div>
                    <div 
                      className="text-xs"
                      style={{
                        color: timeline.value === "asap" || timeline.value === "2-weeks"
                          ? 'var(--brand-primary-600)'
                          : '#64748b'
                      }}
                    >{timeline.desc}</div>
                  </button>
                ))}
                </div>
              </fieldset>
              {errors.timeline && (
                <p id="timeline-error" className="text-red-600 text-sm mt-1" role="alert">
                  {errors.timeline}
                </p>
              )}
            </div>

            {/* Reason for Selling */}
            <div>
              <fieldset>
                <legend className="block text-sm font-medium text-slate-700 mb-2">
                  Why are you selling? (Optional)
                </legend>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3" role="radiogroup">
                {sellingReasons.map((reason) => (
                  <button
                    key={reason.value}
                    type="button"
                    onClick={() => handleInputChange("selling_reason", reason.value)}
                    className="px-3 py-2 border rounded-lg text-xs font-medium transition-colors text-center"
                    role="radio"
                    aria-checked={formData.selling_reason === reason.value}
                    style={{
                      borderColor: formData.selling_reason === reason.value ? 'var(--brand-primary-500)' : '#cbd5e1',
                      backgroundColor: formData.selling_reason === reason.value ? 'var(--brand-primary-50)' : 'transparent',
                      color: formData.selling_reason === reason.value ? 'var(--brand-primary-700)' : '#374151'
                    }}
                    onMouseEnter={(e) => {
                      if (formData.selling_reason !== reason.value) {
                        e.currentTarget.style.borderColor = 'var(--brand-primary-500)';
                        e.currentTarget.style.backgroundColor = 'var(--brand-primary-50)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (formData.selling_reason !== reason.value) {
                        e.currentTarget.style.borderColor = '#cbd5e1';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {reason.label}
                  </button>
                ))}
                </div>
              </fieldset>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-2">
                Tell us about your property (Optional)
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border rounded-lg transition-colors border-slate-300"
                aria-describedby="description-help"
                onFocus={(e) => {
                  e.target.style.outline = '2px solid var(--brand-primary-500)';
                  e.target.style.outlineOffset = '2px';
                  e.target.style.borderColor = 'transparent';
                }}
                onBlur={(e) => {
                  e.target.style.outline = 'none';
                  e.target.style.borderColor = '#cbd5e1';
                }}
                placeholder="Describe the condition, any repairs needed, or special circumstances..."
              />
              <div id="description-help" className="sr-only">
                Optional field to provide additional details about your property condition or circumstances
              </div>
            </div>

            {/* Form Navigation */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handlePrevious}
                className="bg-slate-500 hover:bg-slate-600 text-white px-6 py-4 rounded-lg font-semibold transition-colors"
              >
                ← Previous
              </button>
              
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg flex items-center justify-center"
                style={{
                  background: isLoading 
                    ? `linear-gradient(to right, var(--brand-primary-300), var(--brand-primary-400))`
                    : `linear-gradient(to right, var(--brand-primary-500), var(--brand-primary-600))`,
                  cursor: isLoading ? 'not-allowed' : 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.background = `linear-gradient(to right, var(--brand-primary-400), var(--brand-primary-500))`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.background = `linear-gradient(to right, var(--brand-primary-500), var(--brand-primary-600))`;
                  }
                }}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Get My Cash Offer"
                )}
              </button>
            </div>
          </div>
        )}
      </form>

      {/* Security Badge at Bottom */}
      <div className="text-center mt-4">
        <div className="text-slate-800 font-semibold text-sm mb-2">
          🔒 100% FREE & SECURE
        </div>
        <p className="text-xs text-slate-500">
          By submitting this form, you agree to receive calls and texts.
          Your information is secure and will never be sold.
        </p>
      </div>
    </div>
  );
}
