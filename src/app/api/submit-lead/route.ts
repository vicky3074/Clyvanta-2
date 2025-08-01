import { NextRequest, NextResponse } from 'next/server';
import { validatePropertyDetails } from '@/lib/crm/validation-simple';
import { submitLead, validateCRMConfig } from '@/lib/crm/api';

/**
 * API Route: Submit Lead (Step 2)
 * Updates existing lead with property details in CRM
 * 
 * POST /api/submit-lead
 * Body: { lead_id, property_type, property_condition, timeline, selling_reason?, description? }
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
    const validation = validatePropertyDetails(body);
    
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

    const propertyDetails = body;

    // Validate lead_id is provided
    if (!propertyDetails.lead_id || propertyDetails.lead_id.trim() === '') {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid session. Please start over.',
          errors: { lead_id: 'Lead ID is required' }
        },
        { status: 400 }
      );
    }

    // Submit property details to CRM
    const result = await submitLead(propertyDetails);

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Your information has been submitted successfully! We will contact you within 24 hours.',
        lead_id: result.lead_id
      });
    } else {
      // Log CRM errors for debugging
      console.error('CRM API Error (submit-lead):', result.message, result.errors);
      
      // Handle specific CRM error cases
      if (result.message?.includes('lead not found')) {
        return NextResponse.json(
          {
            success: false,
            message: 'Session expired. Please start over.',
            errors: { lead_id: 'Lead not found' }
          },
          { status: 400 }
        );
      }
      
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
    console.error('API Route Error (submit-lead):', error);
    
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
    endpoint: 'submit-lead',
    status: 'active',
    crm_configured: configCheck.valid,
    timestamp: new Date().toISOString()
  });
}