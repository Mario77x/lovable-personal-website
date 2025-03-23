
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="relative py-0">
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
            <ContactInfo />
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2 reveal-on-scroll">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
