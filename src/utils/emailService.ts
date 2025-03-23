
// This utility abstracts the email sending functionality, preparing for a more secure approach
import emailjs from '@emailjs/browser';

// Default configuration for EmailJS that can be overridden
// Note: In production, these values should be stored securely
const EMAILJS_DEFAULT_CONFIG = {
  SERVICE_ID: 'service_v1xv3on',
  TEMPLATE_ID: 'template_6hwmtnp',
  PUBLIC_KEY: 'M05M2sfExhJdXGZl6',
};

// Type for form data
export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Sends an email using EmailJS
 * This function can be replaced with a more secure approach in the future
 * without changing the contact form implementation
 */
export const sendEmail = async (
  formElement: HTMLFormElement,
  formData?: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  try {
    // Initialize EmailJS with public key
    emailjs.init(EMAILJS_DEFAULT_CONFIG.PUBLIC_KEY);
    
    // Send the form data
    const result = await emailjs.sendForm(
      EMAILJS_DEFAULT_CONFIG.SERVICE_ID,
      EMAILJS_DEFAULT_CONFIG.TEMPLATE_ID,
      formElement
    );
    
    console.log('Email successfully sent!', result.text);
    return { 
      success: true, 
      message: 'Your message has been sent successfully!' 
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      message: 'There was a problem sending your message. Please try again.' 
    };
  }
};
