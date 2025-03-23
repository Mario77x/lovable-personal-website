
import { contactFormSchema, ContactFormData } from "./validationSchema";

export const validateContactForm = (formState: ContactFormData) => {
  const result = contactFormSchema.safeParse(formState);
  
  if (result.success) {
    return {
      errors: {},
      isValid: true
    };
  } else {
    // Convert zod errors to our error format
    const errors: Record<string, string> = {};
    
    result.error.errors.forEach((error) => {
      if (error.path.length > 0) {
        const field = error.path[0].toString();
        errors[field] = error.message;
      }
    });
    
    return {
      errors,
      isValid: false
    };
  }
};
