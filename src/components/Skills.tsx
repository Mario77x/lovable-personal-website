
import { 
  LineChart, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Target, 
  BarChart4, 
  MessageSquare, 
  BrainCircuit,
  Clock,
  Presentation,
  Globe,
  Search
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const Skills = () => {
  // Group the skills by category
  const skillCategories = [
    {
      title: "Strategic Skills",
      skills: [
        {
          name: "Product Strategy",
          icon: <Target className="h-8 w-8 text-blue-accent" />,
          description: "Developing comprehensive product strategies aligned with business goals"
        },
        {
          name: "Market Analysis",
          icon: <Globe className="h-8 w-8 text-blue-accent" />,
          description: "Evaluating market trends, competition, and opportunities"
        },
        {
          name: "Business Intelligence",
          icon: <BrainCircuit className="h-8 w-8 text-blue-accent" />,
          description: "Leveraging data to inform strategic decision-making"
        },
        {
          name: "Product Vision",
          icon: <Lightbulb className="h-8 w-8 text-blue-accent" />,
          description: "Creating and communicating compelling product visions"
        }
      ]
    },
    {
      title: "Leadership Skills",
      skills: [
        {
          name: "Team Leadership",
          icon: <Users className="h-8 w-8 text-blue-accent" />,
          description: "Leading cross-functional teams to achieve product goals"
        },
        {
          name: "Stakeholder Management",
          icon: <MessageSquare className="h-8 w-8 text-blue-accent" />,
          description: "Building consensus among diverse stakeholders"
        },
        {
          name: "Operational Excellence",
          icon: <Clock className="h-8 w-8 text-blue-accent" />,
          description: "Implementing tailored product and process improvements"
        },
        {
          name: "People Management",
          icon: <Presentation className="h-8 w-8 text-blue-accent" />,
          description: "Hiring and mentoring Product Managers for success"
        }
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        {
          name: "Analytics & Metrics",
          icon: <BarChart4 className="h-8 w-8 text-blue-accent" />,
          description: "Defining and tracking KPIs to measure success and drive decisions"
        },
        {
          name: "Growth Strategies",
          icon: <TrendingUp className="h-8 w-8 text-blue-accent" />,
          description: "Implementing strategies tailored to the unique aspects of each product"
        },
        {
          name: "Technical Expertise",
          icon: <LineChart className="h-8 w-8 text-blue-accent" />,
          description: "Leveraging technical knowledge to create sustainable product strategies"
        },
        {
          name: "User Research",
          icon: <Search className="h-8 w-8 text-blue-accent" />,
          description: "Conducting research to understand user needs and behaviors"
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-blue-accent/5 blur-[120px] rounded-full -z-10" />
      
      <div className="section-container">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional <span className="text-gradient">Skills</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-blue mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="reveal-on-scroll">
              <h3 className="text-2xl font-bold mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="glass-card p-6 rounded-lg transition-all duration-300 hover:shadow-blue-glow group"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-dark-surface/80 group-hover:bg-blue-accent/10 transition-colors duration-300">
                        {skill.icon}
                      </div>
                      
                      <h4 className="text-xl font-semibold text-white">
                        {skill.name}
                      </h4>
                      
                      <p className="text-gray-400 text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
