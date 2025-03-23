
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
  // Due to CORS issues with Supabase Edge Functions, we'll use EmailJS directly
  console.log("Using EmailJS directly to send email");
  
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
    
    console.log('Email successfully sent via EmailJS!', result.text);
    return { 
      success: true, 
      message: 'Your message has been sent successfully!' 
    };
  } catch (error) {
    console.error('Error sending email via EmailJS:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'There was a problem sending your message. Please try again.' 
    };
  }
};
