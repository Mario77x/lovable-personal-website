
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
 * Sends an email using Supabase Edge Function to keep credentials secure
 * No sensitive information is exposed in the frontend code
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
    
    console.log("Sending email via Supabase Edge Function...");
    
    // Send data to Supabase Edge Function with proper CORS handling
    const response = await fetch(`${supabaseUrl}/functions/v1/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataObject),
      // Don't set explicit mode to let browser handle it
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
    console.error('Error sending email via Supabase:', error);
    
    // Provide a clear error message without exposing any implementation details
    return { 
      success: false, 
      message: 'There was a problem sending your message. Please try again later or contact directly via the email address provided.' 
    };
  }
};
