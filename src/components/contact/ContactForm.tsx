
import { useRef, useState } from "react";
import { Send, AlertCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formState.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    }
    if (!formState.captcha.trim()) {
      newErrors.captcha = "Please complete the captcha";
    } else if (formState.captcha.toLowerCase() !== "blue") {
      newErrors.captcha = "Incorrect captcha answer";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);

    try {
      // Use EmailJS to send the email
      const result = await emailjs.sendForm(
        'service_id', // Replace with your EmailJS service ID
        'template_id', // Replace with your EmailJS template ID
        formRef.current as HTMLFormElement,
        'public_key' // Replace with your EmailJS public key
      );

      console.log('Email successfully sent!', result.text);
      setSubmitStatus("success");
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully!",
      });

      // Reset form after successful submission
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
        captcha: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
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
        {/* Status messages */}
        {submitStatus === "success" && (
          <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 flex items-center">
            <CheckCircle size={20} className="mr-2 flex-shrink-0" />
            <span>Message sent successfully! I'll get back to you soon.</span>
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 flex items-center">
            <AlertCircle size={20} className="mr-2 flex-shrink-0" />
            <span>There was an error sending your message. Please try again later.</span>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Name
            </label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              value={formState.name} 
              onChange={handleChange} 
              className={cn("w-full px-4 py-3 bg-dark-bg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-accent/50 transition-all", 
                errors.name ? "border-red-500" : "border-gray-700 focus:border-blue-accent"
              )} 
              placeholder="Your name" 
            />
            {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
          </div>
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              value={formState.email} 
              onChange={handleChange} 
              className={cn("w-full px-4 py-3 bg-dark-bg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-accent/50 transition-all", 
                errors.email ? "border-red-500" : "border-gray-700 focus:border-blue-accent"
              )} 
              placeholder="Your email" 
            />
            {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>
        
        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-gray-300 mb-2">
            Subject
          </label>
          <input 
            id="subject" 
            name="subject" 
            type="text" 
            value={formState.subject} 
            onChange={handleChange} 
            className={cn("w-full px-4 py-3 bg-dark-bg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-accent/50 transition-all", 
              errors.subject ? "border-red-500" : "border-gray-700 focus:border-blue-accent"
            )} 
            placeholder="Subject of your message" 
          />
          {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>}
        </div>
        
        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Message
          </label>
          <textarea 
            id="message" 
            name="message" 
            value={formState.message} 
            onChange={handleChange} 
            className={cn("w-full px-4 py-3 bg-dark-bg border rounded-lg resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-accent/50 transition-all", 
              errors.message ? "border-red-500" : "border-gray-700 focus:border-blue-accent"
            )} 
            placeholder="Your message" 
          />
          {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
        </div>
        
        {/* Captcha */}
        <div>
          <label htmlFor="captcha" className="block text-gray-300 mb-2">
            What color is used as an accent in this website? (anti-spam)
          </label>
          <input 
            id="captcha" 
            name="captcha" 
            type="text" 
            value={formState.captcha} 
            onChange={handleChange} 
            className={cn("w-full px-4 py-3 bg-dark-bg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-accent/50 transition-all", 
              errors.captcha ? "border-red-500" : "border-gray-700 focus:border-blue-accent"
            )} 
            placeholder="Your answer" 
          />
          {errors.captcha && <p className="mt-1 text-red-500 text-sm">{errors.captcha}</p>}
        </div>
        
        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isSubmitting} 
          className={cn("w-full md:w-auto px-8 py-3 bg-gradient-blue text-white rounded-lg flex items-center justify-center transition-all duration-300", 
            isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:shadow-blue-glow transform hover:-translate-y-1"
          )}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send size={18} className="ml-2" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
