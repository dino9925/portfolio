import { Brain, Settings, Database, Globe, Workflow, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI / ML",
      skills: ["Regression", "Classification", "Clustering", "EDA", "TensorFlow", "scikit-learn", "OpenCV"],
      gradient: "from-electric-blue to-soft-purple",
    },
    {
      icon: Settings,
      title: "Automation & DevOps",
      skills: ["CI/CD (Jenkins)", "Docker", "AWS EC2", "Logging Systems", "Auto-recovery pipelines"],
      gradient: "from-mint-green to-electric-blue",
    },
    {
      icon: Database,
      title: "Data Engineering & Analytics",
      skills: ["Pandas", "NumPy", "Streamlit", "Power BI", "Matplotlib", "Seaborn"],
      gradient: "from-soft-purple to-mint-green",
    },
    {
      icon: Globe,
      title: "Web & Backend",
      skills: ["Python", "Django", "APIs", "OnlyOffice integration"],
      gradient: "from-electric-blue to-mint-green",
    },
    {
      icon: Workflow,
      title: "Automation Tools",
      skills: ["n8n", "Web scraping", "SMTP automation"],
      gradient: "from-mint-green to-soft-purple",
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Problem Solving", "Documentation", "Ownership", "Communication"],
      gradient: "from-soft-purple to-electric-blue",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-deep-indigo/30 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(58,109,255,0.1),transparent_50%)]" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-electric-blue font-semibold text-sm uppercase tracking-wider mb-4 block">
            Technical Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive toolkit for building intelligent, scalable solutions
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-electric-blue/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon and title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                    <category.icon className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium bg-deep-indigo border border-electric-blue/30 rounded-full text-muted-foreground hover:border-electric-blue hover:text-foreground transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
