// Using native fetch API instead of axios for better compatibility
import { ContactInfo, PropertyDetails, calculatePriority, formatPhoneForCRM, getBrowserInfo } from './validation-simple';

/**
 * CRM API integration helper
 * Maintains exact compatibility with original CodeIgniter project
 */

const CRM_API_URL = process.env.CRM_API_URL || 'https://crm.clyvanta.com/api.php';
const CRM_API_TOKEN = process.env.CRM_API_TOKEN || 'canadacash2025api';

export interface CRMResponse {
  success: boolean;
  message: string;
  lead_id?: string;
  errors?: Record<string, string>;
}

/**
 * Create initial lead in CRM (Step 1)
 */
export async function createLead(
  contactInfo: ContactInfo,
  metadata: {
    ip_address?: string;
    page_url?: string;
    city_source?: string;
    form_location?: string;
  } = {}
): Promise<CRMResponse> {
  try {
    const browserInfo = getBrowserInfo();
    
    const payload = {
      // CRM Authentication
      token: CRM_API_TOKEN,
      
      // Contact Information (exact field names from CodeIgniter)
      name: contactInfo.name.trim(),
      email: contactInfo.email.trim().toLowerCase(),
      phone: formatPhoneForCRM(contactInfo.phone),
      address: contactInfo.address.trim(),
      company: '', // Empty as per original
      
      // Property details (empty for Step 1, filled in Step 2)
      description: '',
      property_type: '',
      property_condition: '',
      timeline: '',
      selling_reason: '',
      
      // Location and tracking (match CodeIgniter field names)
      city_source: metadata.city_source || 'ontario',
      form_location: (metadata.form_location || 'hero') + '_nextjs',
      page_url: metadata.page_url || '',
      ip_address: metadata.ip_address || 'unknown',
      user_agent: browserInfo.user_agent,
      browser_info: browserInfo.browser_info,
      
      // Lead metadata (match CodeIgniter)
      status: 'new',
      source: 'nextjs',
      priority: 'medium'
    };

    if (process.env.NODE_ENV === 'development') {
      console.log('Creating lead with payload:', payload);
    }

    const formData = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    const response = await fetch(CRM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
      signal: AbortSignal.timeout(5000), // 5 second timeout - CRM server is slow
    });

    const data = await response.json();

    // Enhanced logging for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('CRM API Response (create-lead):', {
        status: response.status,
        success: data.success,
        message: data.message,
        lead_id: data.lead_id,
        operation: data.operation,
        full_response: data
      });
    }

    if (data.success) {
      return {
        success: true,
        message: 'Lead created successfully',
        lead_id: data.lead_id
      };
    } else {
      console.error('CRM API Error (create-lead):', data);
      return {
        success: false,
        message: data.message || 'Failed to create lead',
        errors: data.errors
      };
    }
  } catch (error) {
    console.error('CRM API Error (create-lead):', error);
    
    if (error instanceof TypeError || (error as Error)?.name === 'TimeoutError') {
      return {
        success: false,
        message: 'Our CRM system is temporarily unavailable. Your information has been saved and we will contact you within 24 hours.'
      };
    }
    
    return {
      success: false,
      message: 'An unexpected error occurred. Please call us at (647) 936-5467 or try again later.'
    };
  }
}

/**
 * Update existing lead with property details (Step 2)
 */
export async function submitLead(propertyDetails: PropertyDetails): Promise<CRMResponse> {
  try {
    const priority = calculatePriority(
      propertyDetails.timeline,
      propertyDetails.property_condition
    );

    const payload = {
      // CRM Authentication
      token: CRM_API_TOKEN,
      
      // Lead identification
      lead_id: propertyDetails.lead_id,
      update_existing: true,
      
      // Contact info placeholders (required by CRM for updates)
      name: 'Step 2 Update',
      email: 'step2-update@canadacashhomes.com',
      phone: '6470000000',
      address: 'Step 2 Property Update',
      company: '',
      
      // Property details (exact field names from CodeIgniter)
      description: propertyDetails.description || '',
      property_type: propertyDetails.property_type,
      property_condition: propertyDetails.property_condition,
      timeline: propertyDetails.timeline,
      selling_reason: propertyDetails.selling_reason || '',
      
      // Location and tracking (empty for Step 2 updates)
      city_source: 'ontario',
      form_location: 'property_details_nextjs',
      page_url: '',
      ip_address: '',
      user_agent: '',
      browser_info: '',
      
      // Lead metadata
      status: 'qualified',
      source: 'nextjs',
      priority: priority
    };

    if (process.env.NODE_ENV === 'development') {
      console.log('Updating lead with payload:', payload);
    }

    const formData = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    const response = await fetch(CRM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
      signal: AbortSignal.timeout(5000), // 5 second timeout - CRM server is slow
    });

    const data = await response.json();

    // Enhanced logging for debugging  
    if (process.env.NODE_ENV === 'development') {
      console.log('CRM API Response (submit-lead):', {
        status: response.status,
        success: data.success,
        message: data.message,
        lead_id: data.lead_id,
        operation: data.operation,
        full_response: data
      });
    }

    if (data.success) {
      return {
        success: true,
        message: 'Lead updated successfully',
        lead_id: propertyDetails.lead_id
      };
    } else {
      console.error('CRM API Error (submit-lead):', data);
      return {
        success: false,
        message: data.message || 'Failed to update lead',
        errors: data.errors
      };
    }
  } catch (error) {
    console.error('CRM API Error (submit-lead):', error);
    
    if (error instanceof TypeError || (error as Error)?.name === 'TimeoutError') {
      return {
        success: false,
        message: 'Our CRM system is temporarily unavailable. Your information has been saved and we will contact you within 24 hours.'
      };
    }
    
    return {
      success: false,
      message: 'An unexpected error occurred. Please call us at (647) 936-5467 or try again later.'
    };
  }
}

/**
 * Get client IP address (for server-side use)
 */
export function getClientIP(request: Request): string {
  // Check various headers for IP address
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown';
  }
  
  if (realIp) {
    return realIp;
  }
  
  if (cfConnectingIp) {
    return cfConnectingIp;
  }
  
  return 'unknown';
}

/**
 * Determine city source from URL or address
 */
export function getCitySource(url: string, address: string): string {
  // Extract city from URL path
  const urlCity = url.match(/\/(toronto|hamilton|mississauga|london|windsor|kingston|ottawa|gta)/i);
  if (urlCity && urlCity[1]) {
    return urlCity[1].toLowerCase();
  }
  
  // Extract city from address
  const addressCity = address.match(/(toronto|hamilton|mississauga|london|windsor|kingston|ottawa)/i);
  if (addressCity && addressCity[1]) {
    return addressCity[1].toLowerCase();
  }
  
  return 'ontario';
}

/**
 * Validate CRM configuration
 */
export function validateCRMConfig(): { valid: boolean; message: string } {
  if (!CRM_API_URL) {
    return { valid: false, message: 'CRM_API_URL is not configured' };
  }
  
  if (!CRM_API_TOKEN) {
    return { valid: false, message: 'CRM_API_TOKEN is not configured' };
  }
  
  if (!CRM_API_URL.startsWith('https://')) {
    return { valid: false, message: 'CRM_API_URL must use HTTPS' };
  }
  
  return { valid: true, message: 'CRM configuration is valid' };
}