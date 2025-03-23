
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
    
    // Use the relative path to avoid CORS issues
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataObject),
      credentials: 'include' // Include cookies if needed for auth
    });
    
    console.log("Response status:", response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Server response:', errorText);
      throw new Error(`Server error: ${response.status}`);
    }
    
    const result = await response.json();
    console.log('Email successfully sent!', result);
    
    return { 
      success: true, 
      message: 'Your message has been sent successfully!' 
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
