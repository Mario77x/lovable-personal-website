
type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  captcha: string;
};

export const validateContactForm = (formState: FormState) => {
  const errors: Record<string, string> = {};
  
  if (!formState.name.trim()) {
    errors.name = "Name is required";
  }
  
  if (!formState.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
    errors.email = "Please enter a valid email address";
  }
  
  if (!formState.subject.trim()) {
    errors.subject = "Subject is required";
  }
  
  if (!formState.message.trim()) {
    errors.message = "Message is required";
  }
  
  if (!formState.captcha.trim()) {
    errors.captcha = "Please complete the captcha";
  } else if (formState.captcha.toLowerCase() !== "blue") {
    errors.captcha = "Incorrect captcha answer";
  }
  
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
