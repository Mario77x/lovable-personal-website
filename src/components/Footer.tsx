import { ArrowUp } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const currentYear = new Date().getFullYear();
  return <footer className="bg-dark-surface border-t border-gray-800 py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[31px]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            
            <p className="text-gradient font-bold text-lg py-0 my-0 text-left">Mario Savi. Building products with passion.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button onClick={scrollToTop} className="mb-4 p-3 rounded-full bg-dark-bg border border-blue-accent/30 text-blue-accent hover:bg-blue-accent/10 transition-colors" aria-label="Scroll to top">
              <ArrowUp size={20} />
            </button>
            
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Mario Savi. All rights reserved. Built with Lovable.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;