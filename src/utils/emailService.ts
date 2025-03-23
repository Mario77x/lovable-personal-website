
// This utility provides a secure approach to send emails via Supabase Edge Functions
import emailjs from '@emailjs/browser';

// Type for form data
export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Sends an email using EmailJS
 * This function can be used in two ways:
 * 1. Via Supabase Edge Function (recommended for production - more secure)
 * 2. Directly using EmailJS on the client (for development or if no Supabase is available)
 */
export const sendEmail = async (
  formElement: HTMLFormElement,
  formData?: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  // Define the Supabase URL
  // If you're running this in production, set VITE_SUPABASE_URL in your Supabase project
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://diovezwcpjrdkpcbtcmz.supabase.co';
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  
  // Check if we have the necessary Supabase credentials
  const useSupabase = supabaseUrl && supabaseAnonKey;
  
  if (useSupabase) {
    console.log("Using Supabase Edge Function to send email");
    // Extract form data to send to the edge function
    const formDataToSend = new FormData(formElement);
    const formDataObject: Record<string, string> = {};
    
    formDataToSend.forEach((value, key) => {
      formDataObject[key] = value.toString();
    });
    
    try {
      // Send data to Supabase Edge Function
      const response = await fetch(`${supabaseUrl}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`
        },
        body: JSON.stringify(formDataObject)
      });
      
      if (!response.ok) {
        const result = await response.json().catch(() => ({ message: 'Error processing response' }));
        throw new Error(result.message || `Failed to send email via Supabase Edge Function: ${response.status}`);
      }
      
      const result = await response.json();
      console.log('Email successfully sent via Supabase!', result);
      return { 
        success: true, 
        message: 'Your message has been sent successfully!' 
      };
    } catch (error) {
      console.error('Error sending email via Supabase:', error);
      return { 
        success: false, 
        message: error instanceof Error ? error.message : 'There was a problem sending your message. Please try again.' 
      };
    }
  } else {
    console.log("Falling back to client-side EmailJS implementation");
    // Fallback to client-side EmailJS implementation for development
    try {
      // Initialize EmailJS with public key
      const EMAILJS_PUBLIC_KEY = 'M05M2sfExhJdXGZl6';
      const EMAILJS_SERVICE_ID = 'service_v1xv3on';
      const EMAILJS_TEMPLATE_ID = 'template_6hwmtnp';
      
      emailjs.init(EMAILJS_PUBLIC_KEY);
      
      // Send email directly using EmailJS sendForm method with the form element
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formElement
      );
      
      console.log('Email successfully sent via client!', result.text);
      return { 
        success: true, 
        message: 'Your message has been sent successfully!' 
      };
    } catch (error) {
      console.error('Error sending email via client:', error);
      return { 
        success: false, 
        message: 'There was a problem sending your message. Please try again.' 
      };
    }
  }
};
