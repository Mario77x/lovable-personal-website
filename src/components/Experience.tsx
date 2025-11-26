
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
        "Led strategy for the main workflows of an AdTech enterprise platform.",
        "Reduced user pain points and manual workload (main KPI = Campaign creation lead time) and increased user satisfaction, focusing sharply on UX/UI workflow improvements,architectural redesign (multi-tenancy), performance improvements, and reduction of tech debt.",
        "Drove revenue growth through innovation impacting customer onboarding, platform adoption, and customer retention.",
        "Contributed to the opening of new markets in Europe and North America.",
        "Implemented continuous discovery practices through regular user feedback cycles, adoption of a data-driven mindset, and strong collaboration with the Lead Designer and Lead Engineer.",
        "Contributed to scale up and advance operational excellence in the Tech Department through common sense and best practices, such as simplifying documentation and Jira workflows, setting up clear agendas for meetings, etc.",
        "Improved cross-functional alignment with C-level to drive company growth",
        "Learnt to use Datadog for overall product observability, leading adoption of product data for decision making and success measuring.",
        "Improved communication and reduced frustration with stakeholders across the organization by proactively opening channels, listening to their concerns, and adapting communication to their styles and needs.",
        "Pioneered use of AI tools such as LLMs and vibe-coding for research and rapid prototyping.",
        "Together with other Group PM, we coached and helped empower a team of 4 Senior PMs, helping move the needle towards a modern product operating model."
      ]
    },
    {
      title: "Product Owner",
      company: "VCSW",
      location: "The Hague (NL) - Hybrid",
      period: "February 2022 - August 2022",
      description: [
        "Led strategy for a suite of products in the intersection of employment insurance and payslip management.",
        "I managed a SaaS platform and contributed to the launch of an API product (adjacent but 0-to-1) in a highly regulated industry.",
        "Led product strategy, vision and roadmap, working with two cross-functional teams.",
        "Helped adopt Agile methodologies and bring the organization closer to a modern product operating model.",
        "Helped optimize basic operational processes to increase clarity and efficiency.",
        "Reduced frustration and increased trust from stakeholders by implementing proactive communication strategies and listening to their concerns.",
        "Incorporated modern lifecycle management practices, bringing market and user research as a vital tool to drive decisions.",
        "Successfully empowered a Project Manager to take on the Product Management role."
        
      ]
    },
    {
      title: "Product Owner",
      company: "Spaces (sister company of Regus)",
      location: "Amsterdam (NL) - Hybrid",
      period: "January 2020 - December 2021",
      description: [
        "Managed an e-commerce platform offering more than 400 coworking and office space locations worldwide in more than 30 languages.",
        "Led product strategy, roadmap and vision.",
        "Led growth strategies though CRO, focusing on A/B testing and overall content and UI improvements.",
        "Increased inquiry rates (conversion) by ~20% during the Covid pandemic.",
        "Helped launch a new family of products as a response to a drop in revenue due to the Covid-19 pandemics.",
        "Drove the development of improvements and new features, from ideation to rollout.",
        "My day to day included data analysis and user research (Google Analytics and Hotjar - particularly the “session recordings” as a proxy of user interviews).",
        "Coordinated content production and localisation.",
        "Managed stakeholders across several teams and departments, from individual coworking building managers to directors at the parent company IWG plc."
      ]
    },
    {
      title: "Customer Experience Team Lead",
      company: "DoubleDutch event mobile app by Cvent",
      location: "Amsterdam (NL) - Hybrid",
      period: "November 2018 - December 2019",
      description: [
        "Provided strategic advice to large Enterprise accounts across Europe and Asia to optimize customer experience and increase satisfaction.",
        "Collaborated closely with Account Managers in managing the customer base, often visiting customers’ offices around Europe.",
        "Managed a remote Support team, ensuring timely and effective resolution of customer issues.",
        "Collaborated with cross-functional teams to enhance product features and drive customer success."
      ]
    },
    {
      title: "Junior Product Owner",
      company: "Booking.com",
      location: "Amsterdam (NL) - Hybrid",
      period: "August 2015 - July 2017",
      description: [
        "Contributed to the prototyping and launch of new products in desktop and mobile.",
        "Proposed incremental improvements and A/B tests through hypotheses-based user stories, increasing conversion and engagement metrics.",
        "Provided data and analysis from various sources, including database querying, online surveys, and live usability research moderation.",
        "Successfully coordinated dozens of projects with teams around the world to drive product enhancements and feature updates.",
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
        "Collaborated in dozens of feature and product launches, including 0-to-1 products (some of them already retired, such as the attempt to build a competitor for AirBnB and other non-hotel rentals called villas.com).",
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
