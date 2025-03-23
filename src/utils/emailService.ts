
import { createClient } from '@supabase/supabase-js';
import { ContactFormData } from '@/components/contact/form-utils/validationSchema';

// Type for email service response
export type EmailServiceResponse = {
  success: boolean;
  message: string;
};

// Create a Supabase client (using public URL and anon key is safe for client-side code)
// Use a singleton pattern to prevent multiple instances
const supabaseUrl = 'https://diovezwcpjrdkpcbtcmz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpb3ZlendjcGpyZGtwY2J0Y216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg5MDQ0NzUsImV4cCI6MjAxNDQ4MDQ3NX0.tOStS7-PPTzXcO-bIkUi8WUSD4KTlGkdGf4XKXVHqaI';

// Create a singleton Supabase client to avoid multiple instances warning
let supabaseClient: ReturnType<typeof createClient> | null = null;

const getSupabaseClient = () => {
  if (!supabaseClient) {
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false // Don't persist auth state to avoid conflicts
      }
    });
  }
  return supabaseClient;
};

/**
 * Sends an email using Supabase Edge Function
 * The Edge Function now has proper CORS configuration
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

    // Clean up form field names to match what the edge function expects
    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };
    
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
        body: JSON.stringify(payload),
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
        throw new Error(`Failed to send email: ${data?.message || response.statusText}`);
      }
    } catch (fetchError) {
      console.error("Direct fetch error:", fetchError);
      
      // As a fallback for fetch errors, try the SDK
      try {
        console.log("Attempting fallback with Supabase SDK");
        const supabase = getSupabaseClient();
        const { data, error } = await supabase.functions.invoke('send-email', {
          body: payload
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
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending email:', errorMessage);
    
    return { 
      success: false, 
      message: errorMessage
    };
  }
};
