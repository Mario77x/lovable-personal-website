
import emailjs from '@emailjs/browser';

// Type for form data
export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Sends an email using EmailJS directly
 */
export const sendEmail = async (
  formElement: HTMLFormElement,
  formData?: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  try {
    console.log("Sending email with EmailJS...");
    
    // Use the EmailJS service directly with the form element
    const result = await emailjs.sendForm(
      'default_service', // This should be replaced with your EmailJS service ID
      'default_template', // This should be replaced with your EmailJS template ID
      formElement,
      'your_emailjs_public_key' // This should be replaced with your EmailJS public key
    );
    
    console.log('Email successfully sent via EmailJS!', result.text);
    
    return { 
      success: true, 
      message: 'Your message has been sent successfully!' 
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending email via EmailJS:', errorMessage);
    
    return { 
      success: false, 
      message: `There was a problem sending your message. Please try again later or contact directly via the email address provided.` 
    };
  }
};
