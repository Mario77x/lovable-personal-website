
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import { FormState } from "../hooks/useContactForm";

interface ContactFormFieldsProps {
  formState: FormState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors: Record<string, string>;
}

const ContactFormFields = ({ formState, handleChange, errors }: ContactFormFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          id="name"
          name="from_name"
          type="text"
          value={formState.name}
          onChange={handleChange}
          label="Name"
          placeholder="Your name"
          error={errors.name}
          required
        />
        
        <FormInput
          id="email"
          name="from_email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          label="Email"
          placeholder="Your email"
          error={errors.email}
          required
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
        required
      />
      
      <FormTextarea
        id="message"
        name="message"
        value={formState.message}
        onChange={handleChange}
        label="Message"
        placeholder="Your message"
        error={errors.message}
        required
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
        required
      />
    </>
  );
};

export default ContactFormFields;
