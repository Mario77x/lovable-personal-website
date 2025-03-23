
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { validateContactForm } from "../form-utils/validation";
import { sendEmail } from "@/utils/emailService";
import { ContactFormData } from "../form-utils/validationSchema";

export type FormState = ContactFormData;

export type FormStatus = "idle" | "loading" | "success" | "error";

export const useContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    captcha: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Map form field names to state property names
    const stateKey = name === "from_name" ? "name" :
                    name === "from_email" ? "email" : name;
    
    setFormState(prev => ({
      ...prev,
      [stateKey]: value
    }));

    // Clear error when field is edited
    if (errors[stateKey]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[stateKey];
        return newErrors;
      });
    }
  };

  const resetForm = () => {
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
      captcha: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateContactForm(formState);
    setErrors(validation.errors);
    
    if (!validation.isValid) {
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage("");
    setSubmitStatus("loading"); // Change to loading state when submitting

    try {
      if (!formRef.current) {
        throw new Error("Form reference is not available");
      }

      // Create a contactFormData object to pass to sendEmail
      const contactFormData = {
        name: formState.name,
        email: formState.email,
        subject: formState.subject,
        message: formState.message
      };

      const result = await sendEmail(
        formRef.current,
        contactFormData
      );

      if (result.success) {
        setSubmitStatus("success");
        toast({
          title: "Message Sent",
          description: result.message,
        });

        // Reset form after successful submission
        resetForm();
      } else {
        setErrorMessage(result.message);
        setSubmitStatus("error");
        
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      
      const errorMsg = error instanceof Error 
        ? error.message 
        : "There was a problem sending your message. Please try again or contact directly via email.";
      
      setErrorMessage(errorMsg);
      
      toast({
        title: "Error",
        description: errorMsg,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);

      // Reset success status after some time
      if (submitStatus === "success") {
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      }
    }
  };

  return {
    formRef,
    formState,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
    submitStatus,
    errorMessage
  };
};
