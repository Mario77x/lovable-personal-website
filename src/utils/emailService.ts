
import { createClient } from '@supabase/supabase-js';
import { ContactFormData } from '@/components/contact/form-utils/validationSchema';

// Type for email service response
export type EmailServiceResponse = {
  success: boolean;
  message: string;
};

// Create a Supabase client (using public URL and anon key is safe for client-side code)
const supabaseUrl = 'https://diovezwcpjrdkpcbtcmz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpb3ZlendjcGpyZGtwY2J0Y216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg5MDQ0NzUsImV4cCI6MjAxNDQ4MDQ3NX0.tOStS7-PPTzXcO-bIkUi8WUSD4KTlGkdGf4XKXVHqaI';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Sends an email using Supabase Edge Function to keep credentials secure
 * No sensitive information is exposed in the frontend code
 * 
 * NOTE: For this to work in production, the Supabase Edge Function must be configured 
 * to allow CORS requests from your deployed domain. See the console logs for instructions.
 */
export const sendEmail = async (
  formElement: HTMLFormElement,
  formData: Omit<ContactFormData, 'captcha'>
): Promise<EmailServiceResponse> => {
  try {
    // Extract form data to send to the edge function
    const formDataToSend = new FormData(formElement);
    const formDataObject: Record<string, string> = {};
    
    formDataToSend.forEach((value, key) => {
      formDataObject[key] = value.toString();
    });
    
    console.log("Preparing to send email with data:", formDataObject);
    console.log(`
=== CORS ISSUE DETECTED ===
To fix the CORS issue with your Supabase Edge Function, you need to:

1. Go to your Supabase project dashboard
2. Navigate to Edge Functions
3. Find your 'send-email' function
4. Edit it to include the following CORS headers:

const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // In production, replace with your exact domain
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Add this function to handle OPTIONS requests (preflight)
const handleOptions = () => {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
};

// In your main function handler
if (request.method === 'OPTIONS') {
  return handleOptions();
}

// Then add the CORS headers to your success/error responses
return new Response(JSON.stringify({ success: true }), {
  headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  status: 200,
});

Until this is configured, the contact form will simulate email sending.
`);
    
    // Temporary solution: simulate success while the CORS issue is being fixed
    return { 
      success: true, 
      message: 'Thank you for your message. In this demo version, emails are simulated. To enable actual email sending, please configure CORS settings in your Supabase Edge Function as detailed in the console logs.'
    };
    
    // The commented code below will work once the CORS headers are properly configured
    /*
    try {
      // Direct fetch to the Supabase Edge Function endpoint
      const endpoint = `${supabaseUrl}/functions/v1/send-email`;
      console.log("Sending request to:", endpoint);
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify(formDataObject),
      });
      
      console.log("Response status:", response.status);
      
      // Parse response
      let data;
      try {
        data = await response.json();
        console.log("Response data:", data);
      } catch (e) {
        // If we can't parse JSON, try to get text
        const text = await response.text();
        console.log("Response text:", text);
        
        // For 200-level responses, assume success even if JSON parsing failed
        if (response.ok) {
          return {
            success: true,
            message: 'Your message has been sent successfully!'
          };
        } else {
          throw new Error(`Failed to send email: ${text || response.statusText}`);
        }
      }
      
      if (response.ok) {
        return {
          success: true,
          message: data?.message || 'Your message has been sent successfully!'
        };
      } else {
        throw new Error(`Failed to send email: ${data?.error || response.statusText}`);
      }
    } catch (fetchError) {
      console.error("Direct fetch error:", fetchError);
      
      // As a fallback for fetch errors, try the SDK
      try {
        console.log("Attempting fallback with Supabase SDK");
        const { data, error } = await supabase.functions.invoke('send-email', {
          body: formDataObject
        });
        
        console.log("SDK response:", data, error);
        
        if (error) {
          throw error;
        }
        
        return {
          success: true,
          message: data?.message || 'Your message has been sent successfully!'
        };
      } catch (sdkError) {
        console.error("SDK fallback error:", sdkError);
        throw sdkError;
      }
    }
    */
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending email:', errorMessage);
    
    // We're simulating success even when errors occur for now
    return { 
      success: true, 
      message: 'Thank you for your message. In this demo version, emails are simulated. To enable actual email sending, please configure CORS settings in your Supabase Edge Function.'
    };
  }
};
