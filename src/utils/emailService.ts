
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
    
    console.log("Sending email via Supabase Edge Function with data:", formDataObject);
    console.log("Sending to URL:", `${supabaseUrl}/functions/v1/send-email`);
    
    // Send data to Supabase Edge Function with detailed error handling
    const response = await fetch(`${supabaseUrl}/functions/v1/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataObject),
      // Don't set explicit mode to let browser handle CORS properly
    });
    
    console.log("Response status:", response.status);
    
    // Handle different response statuses with descriptive messages
    if (response.status === 0) {
      throw new Error("Network error: CORS issue or network failure. Please ensure your Supabase Edge Function has proper CORS configuration.");
    } else if (response.status === 404) {
      throw new Error("The Edge Function could not be found. Please ensure it's deployed correctly at Supabase.");
    } else if (!response.ok) {
      let errorText = "Unknown error";
      try {
        const errorData = await response.json();
        errorText = errorData.message || `Status code: ${response.status}`;
      } catch (e) {
        errorText = `Failed to parse error response. Status code: ${response.status}`;
      }
      throw new Error(`Edge Function error: ${errorText}`);
    }
    
    const result = await response.json();
    console.log('Email successfully sent via Supabase!', result);
    return { 
      success: true, 
      message: 'Your message has been sent successfully!' 
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending email via Supabase:', errorMessage);
    
    // Return a detailed error message for debugging purposes
    return { 
      success: false, 
      message: `There was a problem sending your message. Technical details: ${errorMessage}. Please try again later or contact directly via the email address provided.` 
    };
  }
};
