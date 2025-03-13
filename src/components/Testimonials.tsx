
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Mario's strategic approach to product management transformed our digital health initiative. His ability to align stakeholders and drive results was exceptional.",
      author: "Emma Wilson",
      position: "Chief Digital Officer",
      company: "HealthTech Innovations"
    },
    {
      quote: "Working with Mario was a game-changer for our product team. His leadership and vision helped us deliver a complex product on time and exceeding expectations.",
      author: "Michael Chen",
      position: "VP of Engineering",
      company: "MedSolutions Inc."
    },
    {
      quote: "Mario has the rare ability to balance business needs with user experience. His product strategies consistently delivered value while maintaining focus on the end user.",
      author: "Sarah Johnson",
      position: "Head of User Experience",
      company: "Digital Health Partners"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-dark-surface relative">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-accent/5 blur-[120px] rounded-full -z-10" />
      
      <div className="section-container">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">Testimonials</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-blue mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Large quote icon */}
          <div className="absolute -top-10 left-0 opacity-10 transform -translate-x-1/2">
            <Quote size={120} className="text-blue-accent" />
          </div>

          {/* Testimonial carousel */}
          <div className="relative h-80">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "absolute top-0 left-0 w-full glass-card-blue p-8 md:p-10 rounded-lg shadow-lg transition-all duration-500 ease-in-out",
                  activeIndex === index 
                    ? "opacity-100 translate-x-0" 
                    : index < activeIndex 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                )}
              >
                <div className="flex flex-col h-full justify-between">
                  <p className="text-lg md:text-xl text-gray-200 italic mb-8 text-balance">
                    "{testimonial.quote}"
                  </p>
                  
                  <div>
                    <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                    <p className="text-blue-accent">{testimonial.position}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-dark-bg border border-blue-accent/30 text-blue-accent hover:bg-blue-accent/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    activeIndex === index 
                      ? "bg-blue-accent w-6" 
                      : "bg-blue-accent/30 hover:bg-blue-accent/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-dark-bg border border-blue-accent/30 text-blue-accent hover:bg-blue-accent/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
