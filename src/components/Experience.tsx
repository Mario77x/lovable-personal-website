
import { Briefcase, Building } from "lucide-react";

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
      title: "Group Product Manager",
      company: "Factor Eleven",
      location: "Gießen, Hessen (DE) - Remote",
      period: "September 2022 - Present",
      description: [
        "Leading product discovery, strategy, and roadmap to drive innovation in alignment with business goals.",
        "Driving discovery and adoption of AI solutions to both increase internal productivity and resolve user pain points.",
        "Product lifecycle management through user, customer and market research.",
        "Contributing to the opening of new markets in Europe and North America.",
        "Driving success and revenue growth through innovation impacting platform adoption and customer retention.",
        "Contributing to Department-wide initiatives as part of the Tech Department Leadership Team, working closely with CTO and VP of Engineering.",
        "Driving process improvements helping F11 scale up in a sustainable manner.",
        "Driving cross-functional coordination with C-level stakeholders and General Managers across the company."
      ]
    },
    {
      title: "Product Owner",
      company: "VCSW",
      location: "The Hague (NL) - Hybrid",
      period: "February 2022 - August 2022",
      description: [
        "Leading product strategy, vision and roadmap.",
        "Leading two cross-functional teams.",
        "Helping adopt Agile methodologies and optimizing operational processes.",
        "Leading Product lifecycle management through user, customer and market research.",
        "Responsible for general backlog management.",
        "Driving stakeholder alignment across different teams and departments."
      ]
    },
    {
      title: "Product Owner",
      company: "Spaces (sister company of Regus)",
      location: "Amsterdam (NL) - Hybrid",
      period: "January 2020 - December 2021",
      description: [
        "Leading product strategy, roadmap and vision.",
        "Driving the development of improvements and new features, from ideation to release.",
        "Responsible for the general backlog management.",
        "Helping launch a new family of office products (the \"Virtual Office\", as a response to a drop in revenue due to the Covid-19 pandemics).",
        "Leading CR optimisation and A/B testing efforts (Google Optimize and GTM).",
        "Data analysis and user research (Google Analytics and Hotjar).",
        "Coordinating content production and localisation.",
        "Stakeholder management across several teams and departments."
      ]
    },
    {
      title: "Customer Experience Team Lead",
      company: "DoubleDutch event mobile app by Cvent",
      location: "Amsterdam (NL) - Hybrid",
      period: "November 2018 - December 2019",
      description: [
        "Provided strategic advice to large Enterprise accounts across Europe and Asia to optimize customer experience and increase satisfaction.",
        "Collaborated closely with Account Managers in managing the customer base.",
        "Managed a remote support team, ensuring timely and effective resolution of customer issues.",
        "Collaborated with cross-functional teams to enhance product features and drive customer success."
      ]
    },
    {
      title: "Customer Success Specialist / Scrum Master",
      company: "Tapfiliate.com",
      location: "Amsterdam (NL) - Hybrid",
      period: "January 2018 - October 2018",
      description: [
        "Provided technical B2B support to integrate the SaaS affiliate platform with clients' e-commerce solutions and payment gateways.",
        "Facilitated adoption of Agile methodologies to streamline product management.",
        "Collaborated with a cross-functional team to ensure product optimization."
      ]
    },
    {
      title: "Junior Product Owner",
      company: "Booking.com",
      location: "Amsterdam (NL) - Hybrid",
      period: "August 2015 - July 2017",
      description: [
        "Contributed to the prototyping and launch of new products in desktop and mobile.",
        "Contributed to the prototyping of new products and features.",
        "Proposed incremental improvements and A/B tests through hypotheses-based user stories.",
        "Provided data and analysis from various sources, including database querying and live usability research moderation.",
        "Coordinated tasks with international teams to drive product enhancements and feature updates at Booking.com.",
        "Coordinated the production and localisation of content."
      ]
    },
    {
      title: "Project Manager",
      company: "Booking.com",
      location: "Amsterdam (NL) - Hybrid",
      period: "December 2013 - July 2015",
      description: [
        "Managed projects aimed to produce content for A/B tests and new products.",
        "Collaborated closely with different Product teams in order to fulfill their content requirements.",
        "Collaborated in several feature and product launches.",
        "Managed individual project contributors located worldwide to ensure successful delivery."
      ]
    },
    {
      title: "Content Projects Editor",
      company: "Booking.com",
      location: "Amsterdam (NL) - Hybrid",
      period: "June 2011 - December 2013",
      description: [
        "Worked closely with Product teams producing (copywriting), curating (text, photo, USG, meta-data) and managing all kinds of content for A/B tests and new products and features.",
        "Collaborated in several feature and product launches."
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
                    <div className="mb-4">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center text-lg text-blue-accent">
                        <Building size={16} className="mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex ml-6">
                        <div className="text-sm text-gray-400">{exp.location}</div>
                        <div className="text-sm text-gray-400 ml-2">| {exp.period}</div>
                      </div>
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
