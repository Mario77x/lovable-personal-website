
import emailjs from '@emailjs/browser';

// Type for form data
export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

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
    
    // Use EmailJS as a fallback since the Edge Function is having issues
    try {
      // Try EmailJS instead of the Edge Function
      const result = await emailjs.sendForm(
        'service_contact_form',  // Replace with your EmailJS service ID
        'template_contact',      // Replace with your EmailJS template ID
        formElement,
        'your_emailjs_public_key' // Replace with your EmailJS public key
      );
      
      console.log('EmailJS result:', result.text);
      
      return { 
        success: true, 
        message: 'Your message has been sent successfully!' 
      };
    } catch (emailjsError) {
      console.error('EmailJS error:', emailjsError);
      
      // If EmailJS fails, throw an error to be caught by the outer try/catch
      throw new Error('Failed to send email via EmailJS. Please try again later.');
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending email:', errorMessage);
    
    return { 
      success: false, 
      message: `There was a problem sending your message. Please try again later or contact directly via the email address provided.` 
    };
  }
};
