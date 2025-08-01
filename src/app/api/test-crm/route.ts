import { NextRequest, NextResponse } from 'next/server';

/**
 * Simple CRM test endpoint without Zod validation
 * POST /api/test-crm
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.phone || !body.address) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields',
          required: ['name', 'email', 'phone', 'address']
        },
        { status: 400 }
      );
    }

    // Test CRM payload matching CodeIgniter structure
    const crmPayload = {
      // CRM Authentication
      token: process.env.CRM_API_TOKEN || 'canadacash2025api',
      
      // Contact Information (exact field names from CodeIgniter)
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.replace(/[^\d]/g, ''), // Clean phone number
      address: body.address.trim(),
      company: '',
      
      // Property details (empty for Step 1)
      description: '',
      property_type: '',
      property_condition: '',
      timeline: '',
      selling_reason: '',
      
      // Location and tracking (match CodeIgniter field names)
      city_source: 'ontario',
      form_location: 'test_nextjs',
      page_url: request.headers.get('referer') || '',
      ip_address: request.headers.get('x-forwarded-for') || 'unknown',
      user_agent: request.headers.get('user-agent') || '',
      browser_info: 'test-browser-info',
      
      // Lead metadata (match CodeIgniter)
      status: 'new',
      source: 'nextjs',
      priority: 'medium'
    };

    // Log payload in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Testing CRM payload structure:');
      console.log(JSON.stringify(crmPayload, null, 2));
    }

    // Test CRM API call
    const crmUrl = process.env.CRM_API_URL || 'https://crm.clyvanta.com/api.php';
    
    const formData = new URLSearchParams();
    Object.entries(crmPayload).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    console.log('Sending to CRM:', crmUrl);
    console.log('Form data:', formData.toString());

    const response = await fetch(crmUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
      signal: AbortSignal.timeout(10000),
    });

    const crmResponseText = await response.text();
    console.log('CRM Response Status:', response.status);
    console.log('CRM Response Body:', crmResponseText);

    let crmData;
    try {
      crmData = JSON.parse(crmResponseText);
    } catch (e) {
      crmData = { raw_response: crmResponseText };
    }

    return NextResponse.json({
      success: true,
      message: 'CRM test completed',
      payload_sent: crmPayload,
      crm_response: {
        status: response.status,
        data: crmData
      }
    });

  } catch (error) {
    console.error('CRM Test Error:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: 'CRM test failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * GET handler to check API health
 */
export async function GET() {
  return NextResponse.json({
    endpoint: 'test-crm',
    status: 'active',
    crm_configured: !!(process.env.CRM_API_URL && process.env.CRM_API_TOKEN),
    timestamp: new Date().toISOString()
  });
}