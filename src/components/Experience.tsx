
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
      period: "September 2022 - September 2025",
      description: [
        "Leading strategy for an AdTech enterprise platform.",
        "Reducing user pain points and manual workload, focusing sharply on improving UX/UI.",
        "Driving success and revenue growth through innovation impacting platform adoption and customer retention.",
        "Contributing to the opening of new markets in Europe and North America.",
        "Leading a tribe of several teams (including a Platform team) managing two Senior Product Managers as direct reports.",
        "Helping scale up the Tech Department by introducing product best practices such as continuous discovery and user research, and overall operational improvements.",
        "Driving cross-functional collaboration with C-level and other stakeholders across the business to achieve company goals.",
        "Kickstarted use of AI tools such as Lovable for rapid prototyping."
      ]
    },
    {
      title: "Product Owner",
      company: "VCSW",
      location: "The Hague (NL) - Hybrid",
      period: "February 2022 - August 2022",
      description: [
        "Led strategy for a suite of two SaaS products in the intersection of insurance and legal domains.",
        "Contributed to the launch of an API product in a highly regulated industry.",
        "Managed two teams and helped scale up operations, implementing Agile methodologies and best practices."
      ]
    },
    {
      title: "Product Owner",
      company: "Spaces (sister company of Regus)",
      location: "Amsterdam (NL) - Hybrid",
      period: "January 2020 - December 2021",
      description: [
        "Managed an e-commerce platform offering more than 400 coworking and office space locations worldwide in more than 30 languages.",
        "Led the CRO strategy, focusing on A/B testing and overall content and UI consistency.",
        "Increased inquiry rates (conversion) by ~20% during the Covid pandemic.",
        "Helped launch a new family of products as a response to a drop in revenue due to the Covid-19 pandemics."
      ]
    },
    {
      title: "Customer Experience Team Lead",
      company: "DoubleDutch event mobile app by Cvent",
      location: "Amsterdam (NL) - Hybrid",
      period: "November 2018 - December 2019",
      description: [
        "Managed the customer base across EMEA for an event engagement mobile app product, providing strategic to optimize customer experience and increase satisfaction.",
        "Managed a Support team, ensuring timely and effective resolution of customer issues.",
        "Collaborated with cross-functional teams to enhance product features and drive customer success."
      ]
    },
    {
      title: "Customer Success Specialist",
      company: "Tapfiliate.com",
      location: "Amsterdam (NL) - Hybrid",
      period: "January 2018 - October 2018",
      description: [
        "Provided technical B2B support to integrate a SaaS affiliate marketing platform with e-commerce solutions and payment gateways.",
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
        "Contributed to the prototyping and launch of new products and features in desktop and mobile.",
        "Ran incremental improvements and A/B tests through hypotheses-based user stories.",
        "Provided data and analysis from various sources, including SQL querying, surveys, and user interviews."
      ]
    },
    {
      title: "Project Manager",
      company: "Booking.com",
      location: "Amsterdam (NL) - Hybrid",
      period: "December 2013 - July 2015",
      description: [
        "Managed content projects for A/B tests, new features, and product launches, closely collaborating with different Product teams.",
        "Directly contributed to feature and product launches.",
        "Managed project contributors worldwide."
      ]
    },
    {
      title: "Content Projects Editor",
      company: "Booking.com",
      location: "Amsterdam (NL) - Hybrid",
      period: "June 2011 - December 2013",
      description: [
        "Produced and curated different types of content for different purposes, including A/B tests and new products and features, working closely with Product teams.",
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
