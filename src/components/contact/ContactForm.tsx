
import FormStatusMessage from "./form-components/FormStatusMessage";
import SubmitButton from "./form-components/SubmitButton";
import ContactFormFields from "./form-components/ContactFormFields";
import { useContactForm } from "./hooks/useContactForm";

const ContactForm = () => {
  const {
    formRef,
    formState,
    handleChange,
    handleSubmit,
    dismissError,
    errors,
    isSubmitting,
    submitStatus,
    errorMessage
  } = useContactForm();

  return (
    <div className="glass-card p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <FormStatusMessage 
          status={submitStatus} 
          customError={errorMessage} 
          onDismissError={dismissError}
        />
        
        <ContactFormFields 
          formState={formState}
          handleChange={handleChange}
          errors={errors}
        />
        
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </div>
  );
};

export default ContactForm;
