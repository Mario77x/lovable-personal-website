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
      {/* Centered arrow outside footer container */}
      <div className="flex justify-center -mb-6">
        <button onClick={scrollToTop} aria-label="Scroll to top" className="p-3 bg-dark-bg text-blue-accent hover transition-colors rounded-none text-center font-normal">
          <ArrowUp size={20} />
        </button>
      </div>
      
      <footer className="bg-dark-surface border-t border-gray-800 py-0">
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