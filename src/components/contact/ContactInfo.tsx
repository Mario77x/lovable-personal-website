
import { Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
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
        <p className="text-gray-300 mb-4">Visit my LinkedIn profile for further details and insights.</p>
        <a href="https://www.linkedin.com/in/mario-savi/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#0A66C2]/90 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
