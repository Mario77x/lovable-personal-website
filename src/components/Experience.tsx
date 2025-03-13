
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Lead Product Manager",
      company: "Camelot - F. Hoffmann-La Roche",
      location: "Basel, Switzerland",
      period: "Jan 2023 - Present",
      description: [
        "Lead the strategic product direction for digital health solutions",
        "Drive product development through collaborating with cross-functional teams",
        "Develop and maintain product roadmaps aligned with business objectives",
        "Perform competitive analysis and identify market opportunities"
      ]
    },
    {
      title: "Senior Product Manager",
      company: "F. Hoffmann-La Roche",
      location: "Basel, Switzerland",
      period: "Jun 2021 - Dec 2022",
      description: [
        "Led teams in delivering digital healthcare products that enhanced patient outcomes",
        "Conducted user research to identify customer needs and pain points",
        "Collaborated with engineering teams to ensure timely and quality delivery",
        "Implemented metrics to measure product performance and guide improvements"
      ]
    },
    {
      title: "Product Manager",
      company: "Novartis",
      location: "Basel, Switzerland",
      period: "Mar 2019 - May 2021",
      description: [
        "Managed product lifecycle from conception to launch for digital health initiatives",
        "Defined product requirements and prioritized features based on business impact",
        "Built strong relationships with stakeholders across the organization",
        "Analyzed user feedback to drive continuous product improvement"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-surface relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-accent/5 blur-[120px] rounded-full -z-10" />
      
      <div className="section-container">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-blue mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-accent via-blue-accent/50 to-transparent transform md:-translate-x-0.5"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative reveal-on-scroll"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-dark-bg rounded-full border-2 border-blue-accent transform -translate-x-1/2 md:-translate-x-4 flex items-center justify-center shadow-blue-glow">
                  <Briefcase size={16} className="text-blue-accent" />
                </div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-[50%] md:pr-12' : 'md:ml-[50%] md:pl-12'}`}>
                  <div className="glass-card p-6 rounded-lg hover:shadow-blue-glow transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <div className="flex items-center text-blue-accent/80 text-sm mt-1 md:mt-0">
                        <Calendar size={14} className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-lg text-blue-accent">{exp.company}</div>
                      <div className="text-sm text-gray-400">{exp.location}</div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-accent mr-2">•</span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
