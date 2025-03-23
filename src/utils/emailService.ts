
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
 * 1. Directly using EmailJS on the client (for development or if no Supabase is available)
 * 2. Via Supabase Edge Function (for production use - more secure)
 */
export const sendEmail = async (
  formElement: HTMLFormElement,
  formData?: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  // Check if we're using Supabase by looking for the SUPABASE_URL environment variable
  const useSupabase = import.meta.env.VITE_SUPABASE_URL;
  
  if (useSupabase) {
    // Extract form data to send to the edge function
    const formDataToSend = new FormData(formElement);
    const formDataObject: Record<string, string> = {};
    
    formDataToSend.forEach((value, key) => {
      formDataObject[key] = value.toString();
    });
    
    try {
      // Send data to Supabase Edge Function
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify(formDataObject)
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to send email via Supabase Edge Function');
      }
      
      console.log('Email successfully sent via Supabase!');
      return { 
        success: true, 
        message: 'Your message has been sent successfully!' 
      };
    } catch (error) {
      console.error('Error sending email via Supabase:', error);
      return { 
        success: false, 
        message: 'There was a problem sending your message. Please try again.' 
      };
    }
  } else {
    // Fallback to client-side EmailJS implementation for development
    // NOTE: This should be replaced with the Supabase approach in production
    try {
      // These values should be stored as environment variables in production
      const EMAILJS_CONFIG = {
        SERVICE_ID: 'service_v1xv3on',
        TEMPLATE_ID: 'template_6hwmtnp',
        PUBLIC_KEY: 'M05M2sfExhJdXGZl6',
      };
      
      // Initialize EmailJS with public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      
      // Send the form data
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
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
