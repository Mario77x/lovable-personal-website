
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return <>
      {/* Positioned arrow outside footer container with more negative margin */}
      <div className="flex justify-center -mb-8">
        <button 
          onClick={scrollToTop} 
          aria-label="Scroll to top" 
          className="p-3 bg-dark-bg text-blue-accent hover:text-blue-light transition-colors rounded-full border border-gray-800 shadow-blue-glow z-10"
        >
          <ArrowUp size={20} />
        </button>
      </div>
      
      <footer className="bg-dark-surface border-t border-gray-800 pt-5">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-[31px]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gradient font-bold text-lg py-0 my-0 text-left">Mario Savi. Building products with passion.</p>
            </div>
            
            <div className="flex items-center md:items-end">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Mario Savi. All rights reserved. Built with Lovable.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>;
};

export default Footer;
