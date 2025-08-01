import { NextRequest, NextResponse } from 'next/server';
import { validateContactInfo } from '@/lib/crm/validation-simple';
import { createLead, getClientIP, getCitySource, validateCRMConfig } from '@/lib/crm/api';

/**
 * API Route: Create Lead (Step 1)
 * Creates initial lead with contact information in CRM
 * 
 * POST /api/create-lead
 * Body: { name, email, phone, address }
 * Returns: { success, message, lead_id? }
 */
export async function POST(request: NextRequest) {
  try {
    // Validate CRM configuration
    const configCheck = validateCRMConfig();
    if (!configCheck.valid) {
      console.error('CRM Configuration Error:', configCheck.message);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Service temporarily unavailable. Please try again later.' 
        },
        { status: 500 }
      );
    }

    // Parse request body
    const body = await request.json();
    
    // Validate input data
    const validation = validateContactInfo(body);
    
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please correct the errors below',
          errors: validation.errors
        },
        { status: 400 }
      );
    }

    const contactInfo = body;

    // Extract metadata from request
    const clientIP = getClientIP(request);
    const referer = request.headers.get('referer') || '';
    
    // Determine form location based on referer (base name only, _nextjs added in CRM API)
    const formLocation = referer.includes('/contact') 
      ? 'contact' 
      : 'hero';
    
    // Extract city source from URL and address
    const citySource = getCitySource(referer, contactInfo.address);

    // Create lead in CRM
    const result = await createLead(contactInfo, {
      ip_address: clientIP,
      page_url: referer,
      city_source: citySource,
      form_location: formLocation
    });

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Contact information received successfully',
        lead_id: result.lead_id
      });
    } else {
      // Log CRM errors for debugging
      console.error('CRM API Error (create-lead):', result.message, result.errors);
      
      return NextResponse.json(
        {
          success: false,
          message: result.message,
          errors: result.errors
        },
        { status: 400 }
      );
    }

  } catch (error) {
    console.error('API Route Error (create-lead):', error);
    
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again.'
      },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS handler for CORS preflight requests
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.NODE_ENV === 'development' 
        ? '*' 
        : 'https://canadacashhomes.com',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '3600',
    },
  });
}

/**
 * GET handler to check API health
 */
export async function GET() {
  const configCheck = validateCRMConfig();
  
  return NextResponse.json({
    endpoint: 'create-lead',
    status: 'active',
    crm_configured: configCheck.valid,
    timestamp: new Date().toISOString()
  });
}