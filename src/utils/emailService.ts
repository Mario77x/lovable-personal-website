
import { createClient } from '@supabase/supabase-js';

// Type for form data
export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Create a Supabase client (using public URL and anon key is safe for client-side code)
const supabaseUrl = 'https://diovezwcpjrdkpcbtcmz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpb3ZlendjcGpyZGtwY2J0Y216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg5MDQ0NzUsImV4cCI6MjAxNDQ4MDQ3NX0.tOStS7-PPTzXcO-bIkUi8WUSD4KTlGkdGf4XKXVHqaI';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Sends an email using Supabase Edge Function to keep credentials secure
 * No sensitive information is exposed in the frontend code
 */
export const sendEmail = async (
  formElement: HTMLFormElement,
  formData?: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  try {
    // Extract form data to send to the edge function
    const formDataToSend = new FormData(formElement);
    const formDataObject: Record<string, string> = {};
    
    formDataToSend.forEach((value, key) => {
      formDataObject[key] = value.toString();
    });
    
    console.log("Preparing to send email via Supabase Edge Function");
    console.log("Form data:", formDataObject);
    
    // Invoke the Supabase Edge Function
    const { data, error } = await supabase.functions.invoke('send-email', {
      body: formDataObject,
    });
    
    console.log('Supabase Edge Function response:', data);
    
    if (error) {
      console.error('Supabase Edge Function error:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }
    
    // Handle successful response
    return { 
      success: true, 
      message: data?.message || 'Your message has been sent successfully!' 
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending email:', errorMessage);
    
    return { 
      success: false, 
      message: `There was a problem sending your message. Please try again later or contact directly via the email address provided.` 
    };
  }
};
