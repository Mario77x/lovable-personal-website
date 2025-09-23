import { Github, ExternalLink } from "lucide-react";

const InANutshell = () => {
  const highlights = [
    "14 years in digital, spanning experiences from start-ups to enterprises, mobile and desktop, SaaS and e-commerce.",
    "Ex Booking.com.",
    "3 years of Product leadership, empowering a tribe of 3 teams and 2 Senior PMs (including a Platform team).",
    "Masters' in Communication and Media."
  ];

  const trainingHighlights = [
    {
      year: "2025",
      title: "AI PM Bootcamp with Marily Nika, Phd.",
      description: "where I deepened my knowledge of ML and AI, and created a fully functional MVP integrating existing LLMs and other data sources through APIs and prompt engineering to offer recommendations and smart suggestions."
    },
    {
      year: "2020",
      title: "\"Digital Transformation: From AI and IoT to Cloud, Blockchain, and Cybersecurity\" course with MIT."
    },
    {
      year: "2017",
      title: "4-month bootcamp on Front End Development."
    }
  ];

  return (
    <section id="nutshell" className="section-container reveal-on-scroll">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-accent/5 to-transparent blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">
          In a Nutshell
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-light to-blue-accent mx-auto mb-4 rounded-full" />
        <p className="text-lg text-gray-300 mb-12 leading-relaxed">
          A snapshot of my journey and expertise
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Main highlights */}
          <div className="glass-card p-6 text-left">
            <h3 className="text-xl font-semibold mb-4 text-blue-light">Key Highlights</h3>
            <ul className="space-y-3">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Training highlights */}
          <div className="glass-card p-6 text-left">
            <h3 className="text-xl font-semibold mb-4 text-blue-light">Recent Training Highlights</h3>
            <div className="space-y-4">
              {trainingHighlights.map((training, index) => (
                <div key={index} className="border-l-2 border-blue-accent/30 pl-4">
                  <div className="flex items-center mb-1">
                    <span className="text-blue-accent font-semibold text-sm">{training.year}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-1">{training.title}</p>
                  {training.description && (
                    <p className="text-gray-400 text-xs">{training.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="glass-card-blue p-6 text-center">
          <h3 className="text-lg font-semibold mb-3 text-blue-light flex items-center justify-center">
            <Github className="w-5 h-5 mr-2" />
            Hands-on Experience
          </h3>
          <p className="text-gray-300 mb-4">
            Check my GitHub for hands-on experience with research and prototyping:
          </p>
          <ul className="text-gray-400 text-sm space-y-1 mb-4">
            <li>• Coding exercises for different courses</li>
            <li>• Basic prototypes for different projects</li>
            <li>• This MVP portfolio website you are currently visiting</li>
          </ul>
          <a
            href="https://github.com/Mario77x"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2 bg-blue-accent hover:bg-blue-light transition-colors duration-200 text-white rounded-lg font-medium"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default InANutshell;