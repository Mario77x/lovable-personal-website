
import { Briefcase, Calendar, Building } from "lucide-react";

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
      title: "Senior Director product management",
      company: "onsemi",
      location: "Paris Metropolitan Area",
      period: "Oct 2023 - Present",
      description: [
        "Strategic and data-driven leadership of onsemi global industrial power, charging and energy product management team, with a $1B+ revenue",
        "Definition of go-to-market approach to maximize penetration of our solution, and development of marketing strategy to articulate product-market fit and our value proposition with B2B customers",
        "Deployment of a customer-centric product management, to ensure rigorous customer requirements elicitation, validation, and deployment"
      ]
    },
    {
      title: "Lead Product Manager",
      company: "Camelot - F. Hoffmann-La Roche",
      location: "Basel, Switzerland",
      period: "Jan 2023 - Sep 2023",
      description: [
        "Capture and articulate business needs and priorities; Define product vision and mission with key stakeholders; Maintain product roadmap; Elicit, prioritize and structure requirements collaboratively with stakeholders",
        "Manage and maintain the product-market fit; Engage with partners, stakeholders, users and customers to understand needs and challenges"
      ]
    },
    {
      title: "Senior Product Manager",
      company: "F. Hoffmann-La Roche",
      location: "Basel, Switzerland",
      period: "Jun 2021 - Dec 2022",
      description: [
        "Responsible for the discovery, definition and delivery of the Roche Pharma Compliance Digital Journey, orchestrating stakeholders from IT and business in a global context",
        "Transformed the Roche Pharma Compliance IT portfolio with a Digital Road Map consisting of over 60 delivery items, totaling 5M+ budget"
      ]
    },
    {
      title: "Digital Product Manager",
      company: "Novartis",
      location: "Basel, Switzerland",
      period: "Jul 2019 - May 2021",
      description: [
        "Drove strategy & vision for digital patient centric solutions for global clinical trials, ensuring they provide clear value to patients and are aligned with Novartis Medical, Clinical & Business priorities",
        "Led cross-functional product team, ensuring all activities are consistent with the approved product strategy, timeline and budget"
      ]
    },
    {
      title: "Product Manager",
      company: "Novartis",
      location: "Basel, Switzerland",
      period: "Mar 2019 - Jun 2019",
      description: [
        "Led the technology evaluation and vendor selection for a wide ecosystem of solutions in the Patients space, following a Design Thinking process",
        "Implemented agile approaches to improve the delivery speed, and effectively applied lean management by streamlining processes"
      ]
    },
    {
      title: "Management Consultant",
      company: "Accenture",
      location: "Milan, Italy",
      period: "Feb 2017 - Feb 2019",
      description: [
        "Managed two successful product implementations for an Italian Insurance Company; first as a Requirements Manager, and then as a Scrum Master",
        "Executed a process improvement and technology transformation for a global Pharmaceutical Company, generating 30% time savings and decreased rejection rates by 50%"
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
                      <div className="flex items-center text-lg text-blue-accent">
                        <Building size={16} className="mr-2" />
                        {exp.company}
                      </div>
                      <div className="text-sm text-gray-400 ml-6">{exp.location}</div>
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
