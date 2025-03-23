
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
 * This function will use Supabase Edge Function to handle email sending securely
 */
export const sendEmail = async (
  formElement: HTMLFormElement,
  formData?: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  // Define the Supabase URL - this is your public Supabase project URL
  const supabaseUrl = 'https://diovezwcpjrdkpcbtcmz.supabase.co';
  
  console.log("Using Supabase Edge Function to send email");
  
  try {
    // Extract form data to send to the edge function
    const formDataToSend = new FormData(formElement);
    const formDataObject: Record<string, string> = {};
    
    formDataToSend.forEach((value, key) => {
      formDataObject[key] = value.toString();
    });
    
    // Send data to Supabase Edge Function
    // No Authorization header needed when calling from the browser to a public edge function
    const response = await fetch(`${supabaseUrl}/functions/v1/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataObject)
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
    
    // If there's a CORS error or network issue, we could show a more specific message
    const errorMessage = error instanceof Error ? error.message : 'There was a problem sending your message. Please try again.';
    
    return { 
      success: false, 
      message: errorMessage
    };
  }
};
