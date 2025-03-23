
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

// Check if we're in development or production
const isDevelopment = import.meta.env.DEV;

/**
 * Sends an email using Supabase Edge Function to keep credentials secure
 * No sensitive information is exposed in the frontend code
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
    
    console.log("Preparing to send email");
    console.log("Form data:", formDataObject);
    
    // In development mode, use the local proxy configured in vite.config.ts
    if (isDevelopment) {
      console.log("Using development proxy for email sending");
      
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataObject),
        });
        
        // For debugging proxy issues
        console.log(`Proxy response status: ${response.status} ${response.statusText}`);
        
        // Handle non-ok responses
        if (!response.ok) {
          let errorBody;
          try {
            errorBody = await response.text();
          } catch (e) {
            errorBody = "Unable to read error response";
          }
          
          console.error('Proxy error response:', errorBody);
          throw new Error(`Failed to send email via proxy: ${response.status} ${response.statusText}`);
        }
        
        // Try to parse JSON response
        let data;
        try {
          data = await response.json();
          console.log('Development proxy JSON response:', data);
        } catch (e) {
          const textResponse = await response.text();
          console.log('Development proxy text response:', textResponse);
          // If we can't parse JSON but got a success status, assume success
          if (response.ok) {
            return { 
              success: true, 
              message: 'Your message has been sent successfully!' 
            };
          } else {
            throw new Error(`Failed to parse proxy response: ${textResponse}`);
          }
        }
        
        return { 
          success: true, 
          message: data?.message || 'Your message has been sent successfully!' 
        };
      } catch (proxyError) {
        console.error('Development proxy error:', proxyError);
        
        // In development, we'll simulate success for easier testing
        // Comment this out if you want to see real errors in development
        console.log('DEV MODE: Simulating successful email sending for testing');
        return {
          success: true,
          message: 'DEV MODE: Message simulated as sent successfully'
        };
        
        // Uncomment this to propagate real errors in development
        // throw proxyError;
      }
    } else {
      // Use Supabase Edge Function directly in production
      console.log("Using Supabase Edge Function for email sending");
      const { data, error } = await supabase.functions.invoke('send-email', {
        body: formDataObject,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      
      console.log('Supabase Edge Function response:', data);
      
      if (error) {
        console.error('Supabase Edge Function error:', error);
        throw new Error(`Failed to send email: ${error.message}`);
      }
      
      // Handle successful JSON response
      if (data && typeof data === 'object') {
        return { 
          success: true, 
          message: data.message || 'Your message has been sent successfully!' 
        };
      }
      
      // If we got here with a string response, it might be HTML
      if (typeof data === 'string') {
        // This is likely HTML, try to determine if it was success or failure
        if (data.includes('success') || data.includes('200')) {
          return { 
            success: true, 
            message: 'Your message has been sent successfully!' 
          };
        } else {
          throw new Error('Received unexpected HTML response from server');
        }
      }
      
      // Default success response
      return { 
        success: true, 
        message: 'Your message has been sent successfully!' 
      };
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending email:', errorMessage);
    
    return { 
      success: false, 
      message: `There was a problem sending your message. Please try again later or contact directly via the email address provided. (Error: ${errorMessage})` 
    };
  }
};
