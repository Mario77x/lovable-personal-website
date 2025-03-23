
import { ArrowDown } from "lucide-react";
import { scrollTo } from "@/utils/scrollTo";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-accent/20 rounded-full blur-[100px] -z-10" />
      
      <div className="absolute w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_rgba(10,10,10,0.5)_70%)]" />
      </div>
      
      <div className="section-container relative z-10 flex flex-col items-center justify-center text-center space-y-10">
        <div className="space-y-6 max-w-4xl -mt-5">
          <div className="reveal-on-scroll">
            <span className="bg-blue-accent/20 text-blue-accent rounded-full px-4 py-1 text-sm font-medium inline-block mb-4">
              Product Leader
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight reveal-on-scroll">
            <span className="text-white">Mario Savi</span>
            <span className="block mt-2 text-gradient">Driving Product Excellence</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto reveal-on-scroll text-balance">
            Strategic product leader with a track record of transforming business challenges into successful digital solutions. Passionate about building products that deliver exceptional value and experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 reveal-on-scroll">
            <button 
              onClick={() => scrollTo("contact")}
              className="px-8 py-3 bg-gradient-blue text-white font-medium rounded-lg transition-all duration-300 hover:shadow-blue-glow transform hover:-translate-y-1"
            >
              Get in Touch
            </button>
            <button 
              onClick={() => scrollTo("experience")}
              className="px-8 py-3 bg-transparent border border-blue-accent/50 text-white font-medium rounded-lg transition-all duration-300 hover:bg-blue-accent/10 hover:border-blue-accent transform hover:-translate-y-1"
            >
              View Experience
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <button 
          onClick={() => scrollTo("about")}
          aria-label="Scroll down"
        >
          <ArrowDown className="text-blue-accent h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
