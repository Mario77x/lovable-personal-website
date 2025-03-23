import { ArrowUp } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const currentYear = new Date().getFullYear();
  return <div className="relative">
      {/* Position the arrow button at least 3px above the footer container */}
      <div className="absolute left-0 right-0 -top-10 flex justify-center">
        <button onClick={scrollToTop} aria-label="Scroll to top" className="p-3 bg-dark-bg text-blue-accent hover:text-blue-light transition-colors z-10 rounded-full transform hover:-translate-y-1 duration-300">
          <ArrowUp size={20} />
        </button>
      </div>
      
      <footer className="bg-dark-surface border-t border-gray-800 pt-6 mt-3 py-[13px] my-0">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-[31px]">
          <div className="flex flex-col md:flex-row justify-between items-center -mt-5">
            <div className="mb-4 md:mb-0">
              <p className="text-gradient py-0 my-0 text-left font-semibold text-base">Mario Savi. Building products with passion.</p>
            </div>
            
            <div className="flex items-center md:items-end">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Mario Savi. All rights reserved. Built with Lovable.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Footer;