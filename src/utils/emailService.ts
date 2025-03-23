
import { ContactFormData } from '@/components/contact/form-utils/validationSchema';
import { createClient } from '@supabase/supabase-js';

// Type for email service response
export type EmailServiceResponse = {
  success: boolean;
  message: string;
};

// Create a Supabase client (using public URL and anon key is safe for client-side code)
const supabaseUrl = 'https://diovezwcpjrdkpcbtcmz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpb3ZlendjcGpyZGtwY2J0Y216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg5MDQ0NzUsImV4cCI6MjAxNDQ4MDQ3NX0.tOStS7-PPTzXcO-bIkUi8WUSD4KTlGkdGf4XKXVHqaI';

// Initialize the Supabase client with persistence set to 'none' to avoid the warning
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  }
});

/**
 * Sends an email using Supabase Edge Function
 */
export const sendEmail = async (
  formElement: HTMLFormElement,
  formData: Omit<ContactFormData, 'captcha'>
): Promise<EmailServiceResponse> => {
  try {
    // For debugging purposes
    console.log("Preparing to send email with data:", formData);

    // Clean up form field names to match what the edge function expects
    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };
    
    // Use the SDK to invoke the function
    console.log("Sending email via Supabase SDK");
    const { data, error } = await supabase.functions.invoke('send-email', {
      body: payload
    });
    
    console.log("SDK response:", data, error);
    
    if (error) {
      console.error('Error from Supabase Edge Function:', error);
      // Return a user-friendly error message
      return {
        success: false,
        message: 'Unable to send your message at this time. Please try again later.'
      };
    }
    
    return {
      success: true,
      message: data?.message || 'Your message has been sent successfully!'
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending email:', errorMessage);
    
    // Return a user-friendly error message
    return { 
      success: false, 
      message: 'We encountered an issue sending your message. Please try again later.' 
    };
  }
};
