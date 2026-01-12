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
      location: "Gießen (DE, Remote)",
      period: "September 2022 - August 2025",
      description: [
        "Reduced user pain points and increased customer satisfaction, retention and revenue, leading strategy and execution for an enterprise AdTech SaaS platform, empowering a Tribe of three teams and two Senior PMs.",
        "Reduced user pain points and manual workload in onboarding and main task completion, leading to increased user satisfaction, retention, and revenue, focusing sharply on UX/UI workflow improvements, architectural redesign (multi-tenancy, microservices), performance improvements, and reduction of tech debt.",
        "Contributed to the successful opening of new markets in Europe.",
        "Implemented continuous discovery practices through regular user feedback cycles in collaboration with Design and Engineering.",
        "Implemented user telemetry using Datadog, crafting specific KPIs to measure success, shifting towards a modern data-driven and outcome-based product management culture.",
        "Contributed to advance operational excellence in the Tech Department through best practices such as updating documentation, simplifying Jira workflows, clarifying role expectations, improving release process together with DevOps, etc.",
        "Improved cross-functional alignment with C-level and company wide stakeholders to drive business growth and reduce friction, including organizing on-site strategy workshops.",
        "Pioneered use of AI tools such as LLMs and vibe-coding for research and rapid prototyping.",
        "Identified and created a strategy to incorporate GenAI capabilities to tackle long standing user problems that classical approaches could not resolve, focusing on automation of tedious and repetitive manual tasks.",
      ],
    },
    {
      title: "Product Owner",
      company: "VCSW",
      location: "The Hague (NL)",
      period: "February 2022 - August 2022",
      description: [
        "Improved market position and drove customer satisfaction and revenue growth, managing a SaaS platform and launching an API product in a highly regulated environment, at the intersection of payroll, legal and insurance sectors.",
        "Led two cross-functional teams, driving adoption of Agile methodologies and bringing the organization closer to a modern product operating model.",
        "Successfully incorporated modern product discovery and data-driven practices as vital components to drive decisions and measure success.",
        "Increased platform scalability and improved user experience by reducing tech debt, improving architecture, and simplifying usability.",
        "Successfully negotiated with Insurance companies to unblock the MVP of the API connector, which brought Payroll data to legacy insurance systems.",
        "Reduced frustration, increased trust, and improved alignment with stakeholders by implementing proactive communication strategies.",
        "Successfully coached a Project Manager to take on the Product Owner role.",
      ],
    },
    {
      title: "Product Owner",
      company: "Spaces (sister company of Regus)",
      location: "Amsterdam (NL)",
      period: "January 2020 - December 2021",
      description: [
        "Increased 20% conversion while managing the spacesworks.com e-commerce platform offering +400 coworking and office space locations worldwide in more than 30 languages.",
        "Led growth strategies through CRO, A/B testing, and overall content and UI improvements and features, increasing conversion by ~20% during the Covid pandemic.",
        "Led an external development team as the only in-house member, running workshops and prioritization ceremonies.",
        "Helped launch a new family of products as a response to a drop in revenue due to the Covid-19 pandemic.",
        "Coordinated content production and localisation at scale through internal teams.",
      ],
    },
    {
      title: "Customer Experience Team Lead",
      company: "DoubleDutch mobile app by Cvent",
      location: "Amsterdam (NL)",
      period: "January 2018 - December 2019",
      description: [
        "Drove improvements in adoption, retention and customer satisfaction across our customer base in Europe and Asia.",
        "Onboarded and provided strategic advice to large Enterprise accounts, collaborating closely with Account Managers, often visiting customers' offices in Europe.",
        "Managed a remote Support team, ensuring timely and effective resolution of customer issues and acting as second line of support for complex technical issues.",
        "Collaborated with cross-functional teams to translate customer insights into tangible improvements that drove business outcomes.",
      ],
    },
    {
      title: "Junior Product Owner",
      company: "Booking.com",
      location: "Amsterdam (NL)",
      period: "August 2015 - July 2017",
      description: [
        "Partially managed a product (desktop and mobile app) successfully impacting downloads, active users, opening rates, engagement, loyalty, and most importantly, conversion, all of it through hypothesis-based A/B tests.",
        "Was directly involved in product and feature launches working with two cross-functional teams (desktop and mobile apps).",
        "Learned the craft of user research, data analysis and market research using SQL, interviewing users in person, surveying targeted users online, testing products and features on site, collaborating closely with Data Analysts and other cross-functional team members.",
        "Took part in discussions with different third-party partners and vendors.",
      ],
    },
    {
      title: "Project Manager",
      company: "Booking.com",
      location: "Amsterdam (NL)",
      period: "December 2013 - July 2015",
      description: [
        "Successfully coordinated dozens of content projects aimed at A/B testing new features and launching new products that drove tangible learnings and conversion increases.",
        "Managed project contributors worldwide and collaborated closely with product teams.",
        "Took part in several crucial product launches (including entire new products already retired, such as the non-hotel rental website villas.com).",
      ],
    },
    {
      title: "Content Projects Editor",
      company: "Booking.com",
      location: "Amsterdam (NL)",
      period: "June 2011 - December 2013",
      description: [
        "Produced, curated and delivered uncountable pieces of content (copy, photos, user generated content) aimed at A/B testing new features and products that drove both learnings and conversion increases, collaborating with product teams in several launches.",
      ],
    },
    {
      title: "Receptionist",
      company: "Different Hotels",
      location: "Italy",
      period: "2008 - 2010",
      description: [
        "Provided front desk services and guest support at various hotel properties in Italy.",
      ],
    },
    {
      title: "Policy Advisor and Project Coordinator",
      company: "Local Administration of Rosario",
      location: "Argentina",
      period: "2005 - 2007",
      description: [
        "Advised on policy matters and coordinated projects for local government administration.",
      ],
    },
    {
      title: "Administrative Assistant",
      company: "National University of Rosario",
      location: "Argentina",
      period: "2004 - 2006",
      description: [
        "Provided administrative support at the university.",
      ],
    },
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
              <div key={index} className="relative reveal-on-scroll">
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-dark-bg rounded-full border-2 border-blue-accent transform -translate-x-1/2 md:-translate-x-4 flex items-center justify-center shadow-blue-glow">
                  <Briefcase size={16} className="text-blue-accent" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-[50%] md:pr-12" : "md:ml-[50%] md:pl-12"}`}>
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
