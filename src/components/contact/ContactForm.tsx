
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import FormInput from "./form-components/FormInput";
import FormTextarea from "./form-components/FormTextarea";
import FormStatusMessage from "./form-components/FormStatusMessage";
import SubmitButton from "./form-components/SubmitButton";
import { validateContactForm } from "./form-utils/validation";
import { sendEmail, ContactFormData } from "@/utils/emailService";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  captcha: string;
};

const ContactForm = () => {
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
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateContactForm(formState);
    setErrors(validation.errors);
    
    if (!validation.isValid) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Create a contactFormData object to pass to sendEmail
      const contactFormData: ContactFormData = {
        name: formState.name,
        email: formState.email,
        subject: formState.subject,
        message: formState.message
      };

      const result = await sendEmail(
        formRef.current as HTMLFormElement,
        contactFormData
      );

      if (result.success) {
        setSubmitStatus("success");
        toast({
          title: "Message Sent",
          description: result.message,
        });

        // Reset form after successful submission
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
          captcha: ""
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);

      // Reset status after some time
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  return (
    <div className="glass-card p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <FormStatusMessage status={submitStatus} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            id="name"
            name="name"
            type="text"
            value={formState.name}
            onChange={handleChange}
            label="Name"
            placeholder="Your name"
            error={errors.name}
          />
          
          <FormInput
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            label="Email"
            placeholder="Your email"
            error={errors.email}
          />
        </div>
        
        <FormInput
          id="subject"
          name="subject"
          type="text"
          value={formState.subject}
          onChange={handleChange}
          label="Subject"
          placeholder="Subject of your message"
          error={errors.subject}
        />
        
        <FormTextarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          label="Message"
          placeholder="Your message"
          error={errors.message}
        />
        
        <FormInput
          id="captcha"
          name="captcha"
          type="text"
          value={formState.captcha}
          onChange={handleChange}
          label="What color is used as an accent in this website? (anti-spam)"
          placeholder="Your answer"
          error={errors.captcha}
        />
        
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </div>
  );
};

export default ContactForm;
