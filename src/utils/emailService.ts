
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
 * Sends an email using a combination of methods
 * First attempts to use Supabase Edge Function for security
 * Falls back to EmailJS direct method if CORS issues occur
 */
export const sendEmail = async (
  formElement: HTMLFormElement,
  formData?: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  // Define the Supabase URL - this is your public Supabase project URL
  const supabaseUrl = 'https://diovezwcpjrdkpcbtcmz.supabase.co';
  
  try {
    // Extract form data to send to the edge function
    const formDataToSend = new FormData(formElement);
    const formDataObject: Record<string, string> = {};
    
    formDataToSend.forEach((value, key) => {
      formDataObject[key] = value.toString();
    });
    
    console.log("Attempting to send email via Supabase Edge Function...");
    
    try {
      // First attempt: Try using the Supabase Edge Function
      const response = await fetch(`${supabaseUrl}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add CORS headers for preflight requests
          'Access-Control-Request-Method': 'POST',
          'Access-Control-Request-Headers': 'Content-Type'
        },
        body: JSON.stringify(formDataObject),
        mode: 'cors' // Explicitly set CORS mode
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Error processing response' }));
        throw new Error(errorData.message || `Failed to send email: ${response.status}`);
      }
      
      const result = await response.json();
      console.log('Email successfully sent via Supabase!', result);
      return { 
        success: true, 
        message: 'Your message has been sent successfully!' 
      };
    } catch (error) {
      // If Supabase Edge Function fails (likely due to CORS), fall back to direct EmailJS
      console.warn('Supabase Edge Function failed, falling back to direct EmailJS:', error);
      
      // Initialize EmailJS with public key (only needed in fallback scenario)
      emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');
      
      // Send email directly using EmailJS sendForm method
      const result = await emailjs.sendForm(
        'YOUR_EMAILJS_SERVICE_ID',
        'YOUR_EMAILJS_TEMPLATE_ID',
        formElement
      );
      
      console.log('Email successfully sent via direct EmailJS fallback!', result.text);
      return { 
        success: true, 
        message: 'Your message has been sent successfully!' 
      };
    }
  } catch (error) {
    console.error('Error sending email (all methods failed):', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'There was a problem sending your message. Please try again.' 
    };
  }
};
