import { useState } from "react";
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
const Contact = () => {
  const [formState, setFormState] = useState({
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
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {
          ...prev
        };
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

    // Simulate form submission
    try {
      // In a real implementation, we would send form data to an API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus("success");

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
    } finally {
      setIsSubmitting(false);

      // Reset status after some time
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };
  return <section id="contact" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-accent/5 blur-[120px] rounded-full -z-10" />
      
      <div className="section-container">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-blue mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto text-balance">
            Interested in collaborating or have questions about my professional experience? Feel free to reach out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-1 reveal-on-scroll">
            <div className="glass-card p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-accent/20 flex items-center justify-center mr-4">
                    <Mail size={18} className="text-blue-accent" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:contact@mariosavi.com" className="text-white hover:text-blue-accent transition-colors">
                      contact@mariosavi.com
                    </a>
                  </div>
                </div>
                
                
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-accent/20 flex items-center justify-center mr-4">
                    <MapPin size={18} className="text-blue-accent" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Main location</p>
                    <p className="text-white">Amsterdam, The Netherlands</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <p className="text-gray-300 mb-4">
                  Follow me on LinkedIn for professional updates and insights.
                </p>
                <a href="https://www.linkedin.com/in/mario-savi/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#0A66C2]/90 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2 reveal-on-scroll">
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status messages */}
                {submitStatus === "success" && <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 flex items-center">
                    <CheckCircle size={20} className="mr-2 flex-shrink-0" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>}
                
                {submitStatus === "error" && <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 flex items-center">
                    <AlertCircle size={20} className="mr-2 flex-shrink-0" />
                    <span>There was an error sending your message. Please try again later.</span>
                  </div>}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Name
                    </label>
                    <input id="name" name="name" type="text" value={formState.name} onChange={handleChange} className={cn("w-full px-4 py-3 bg-dark-bg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-accent/50 transition-all", errors.name ? "border-red-500" : "border-gray-700 focus:border-blue-accent")} placeholder="Your name" />
                    {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email
                    </label>
                    <input id="email" name="email" type="email" value={formState.email} onChange={handleChange} className={cn("w-full px-4 py-3 bg-dark-bg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-accent/50 transition-all", errors.email ? "border-red-500" : "border-gray-700 focus:border-blue-accent")} placeholder="Your email" />
                    {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                  </div>
                </div>
                
                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Subject
                  </label>
                  <input id="subject" name="subject" type="text" value={formState.subject} onChange={handleChange} className={cn("w-full px-4 py-3 bg-dark-bg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-accent/50 transition-all", errors.subject ? "border-red-500" : "border-gray-700 focus:border-blue-accent")} placeholder="Subject of your message" />
                  {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>}
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formState.message} onChange={handleChange} className={cn("w-full px-4 py-3 bg-dark-bg border rounded-lg resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-accent/50 transition-all", errors.message ? "border-red-500" : "border-gray-700 focus:border-blue-accent")} placeholder="Your message" />
                  {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
                </div>
                
                {/* Captcha */}
                <div>
                  <label htmlFor="captcha" className="block text-gray-300 mb-2">
                    What color is used as an accent in this website? (anti-spam)
                  </label>
                  <input id="captcha" name="captcha" type="text" value={formState.captcha} onChange={handleChange} className={cn("w-full px-4 py-3 bg-dark-bg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-accent/50 transition-all", errors.captcha ? "border-red-500" : "border-gray-700 focus:border-blue-accent")} placeholder="Your answer" />
                  {errors.captcha && <p className="mt-1 text-red-500 text-sm">{errors.captcha}</p>}
                </div>
                
                {/* Submit Button */}
                <button type="submit" disabled={isSubmitting} className={cn("w-full md:w-auto px-8 py-3 bg-gradient-blue text-white rounded-lg flex items-center justify-center transition-all duration-300", isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:shadow-blue-glow transform hover:-translate-y-1")}>
                  {isSubmitting ? <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </> : <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;