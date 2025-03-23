
import { contactFormSchema, ContactFormData } from "./validationSchema";

export const validateContactForm = (formState: ContactFormData) => {
  const result = contactFormSchema.safeParse(formState);
  
  if (result.success) {
    return {
      errors: {},
      isValid: true
    };
  } else {
    // Convert zod errors to our error format with more user-friendly messages
    const errors: Record<string, string> = {};
    
    result.error.errors.forEach((error) => {
      if (error.path.length > 0) {
        const field = error.path[0].toString();
        
        // Custom error messages based on error code
        if (error.code === "too_small" && field === "name") {
          errors[field] = "Please enter your name";
        } else if (error.code === "too_small" && field === "email") {
          errors[field] = "Please enter your email address";
        } else if (error.code === "invalid_string" && field === "email") {
          errors[field] = "Please enter a valid email address";
        } else if (error.code === "too_small" && field === "subject") {
          errors[field] = "Please enter a subject for your message";
        } else if (error.code === "too_small" && field === "message") {
          errors[field] = "Please enter your message";
        } else {
          errors[field] = error.message;
        }
      }
    });
    
    return {
      errors,
      isValid: false
    };
  }
};
