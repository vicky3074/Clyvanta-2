/**
 * Simple validation functions for CRM lead forms
 * No external dependencies - just vanilla JavaScript validation
 */

// Type definitions
export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface PropertyDetails {
  lead_id: string;
  property_type: 'house' | 'condo' | 'townhouse' | 'duplex' | 'mobile' | 'other';
  property_condition: 'excellent' | 'good' | 'fair' | 'poor';
  timeline: 'asap' | '2-weeks' | '30-days' | '1-3-months' | '3-6-months' | 'exploring';
  selling_reason?: 'relocating' | 'financial' | 'inherited' | 'downsizing' | 'divorce' | 'other';
  description?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Validate contact information (Step 1)
 */
export function validateContactInfo(data: any): ValidationResult {
  const errors: Record<string, string> = {};

  // Name validation
  if (!data.name || typeof data.name !== 'string') {
    errors.name = 'Full name is required';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Full name must be at least 2 characters';
  } else if (data.name.length > 100) {
    errors.name = 'Full name must be less than 100 characters';
  } else if (!/^[a-zA-Z\s\-'\.]+$/.test(data.name)) {
    errors.name = 'Please enter a valid name';
  }

  // Email validation
  if (!data.email || typeof data.email !== 'string') {
    errors.email = 'Email address is required';
  } else if (data.email.length > 255) {
    errors.email = 'Email must be less than 255 characters';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation
  if (!data.phone || typeof data.phone !== 'string') {
    errors.phone = 'Phone number is required';
  } else if (data.phone.replace(/[^\d]/g, '').length < 10) {
    errors.phone = 'Phone number must be at least 10 digits';
  } else if (data.phone.length > 20) {
    errors.phone = 'Phone number must be less than 20 characters';
  } else if (!/^[\+]?[\d\s\-\(\)]+$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  // Address validation
  if (!data.address || typeof data.address !== 'string') {
    errors.address = 'Property address is required';
  } else if (data.address.trim().length < 5) {
    errors.address = 'Property address must be at least 5 characters';
  } else if (data.address.length > 255) {
    errors.address = 'Property address must be less than 255 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Validate property details (Step 2)
 */
export function validatePropertyDetails(data: any): ValidationResult {
  const errors: Record<string, string> = {};

  // Lead ID validation
  if (!data.lead_id || typeof data.lead_id !== 'string' || data.lead_id.trim().length === 0) {
    errors.lead_id = 'Lead ID is required';
  }

  // Property type validation
  const validPropertyTypes = ['house', 'condo', 'townhouse', 'duplex', 'mobile', 'other'];
  if (!data.property_type || !validPropertyTypes.includes(data.property_type)) {
    errors.property_type = 'Please select a valid property type';
  }

  // Property condition validation
  const validConditions = ['excellent', 'good', 'fair', 'poor'];
  if (!data.property_condition || !validConditions.includes(data.property_condition)) {
    errors.property_condition = 'Please select the property condition';
  }

  // Timeline validation
  const validTimelines = ['asap', '2-weeks', '30-days', '1-3-months', '3-6-months', 'exploring'];
  if (!data.timeline || !validTimelines.includes(data.timeline)) {
    errors.timeline = 'Please select your timeline';
  }

  // Optional selling reason validation
  if (data.selling_reason) {
    const validReasons = ['relocating', 'financial', 'inherited', 'downsizing', 'divorce', 'other'];
    if (!validReasons.includes(data.selling_reason)) {
      errors.selling_reason = 'Please select a valid selling reason';
    }
  }

  // Optional description validation
  if (data.description && data.description.length > 1000) {
    errors.description = 'Description must be less than 1000 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Priority calculation based on timeline and condition
 */
export function calculatePriority(timeline: string, condition: string): 'urgent' | 'high' | 'medium' | 'low' {
  let priority: 'urgent' | 'high' | 'medium' | 'low';
  
  switch (timeline) {
    case 'asap':
    case '2-weeks':
      priority = 'urgent';
      break;
    case '30-days':
      priority = 'high';
      break;
    case '1-3-months':
      priority = 'medium';
      break;
    case '3-6-months':
    case 'exploring':
      priority = 'low';
      break;
    default:
      priority = 'medium';
  }
  
  // Property condition adjustments
  if (condition === 'poor' && (priority === 'medium' || priority === 'low')) {
    priority = 'medium';
  }
  if (condition === 'fair' && priority === 'low') {
    priority = 'medium';
  }
  
  return priority;
}

/**
 * Format phone number for CRM (remove formatting, keep digits and +)
 */
export function formatPhoneForCRM(phone: string): string {
  const cleaned = phone.replace(/[^\d+]/g, '');
  
  if (cleaned.match(/^1\d{10}$/)) {
    return `+${cleaned}`;
  }
  
  if (cleaned.match(/^\d{10}$/)) {
    return `+1${cleaned}`;
  }
  
  return cleaned;
}

/**
 * Get browser information for tracking
 */
export function getBrowserInfo() {
  if (typeof window === 'undefined') {
    return {
      user_agent: 'Server',
      browser_info: JSON.stringify({ server: true })
    };
  }
  
  return {
    user_agent: navigator.userAgent,
    browser_info: JSON.stringify({
      language: navigator.language,
      platform: navigator.platform,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine,
      screen: {
        width: screen.width,
        height: screen.height,
        colorDepth: screen.colorDepth
      }
    })
  };
}