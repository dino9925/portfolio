import { ExternalLink, Github, Brain, Mail, BarChart3, GitBranch, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      icon: Brain,
      title: "Intelligent Customer Segmentation & Predictive Insights",
      tagline: "AI-driven segmentation engine for B2C growth.",
      description: "Developed a machine learning system that clusters customers based on behavior and predicts future trends for personalized marketing. Integrated Gemini API to generate automated insights, summaries, and pattern recognition. Built a real-time analytics dashboard in Streamlit to visualize segments and conversion opportunities.",
      tech: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Gemini API"],
      gradient: "from-electric-blue to-soft-purple",
    },
    {
      icon: Mail,
      title: "Web2Mail Automation",
      tagline: "Fully automated lead extraction + email outreach engine.",
      description: "Created an automation pipeline that scrapes business emails, cleans data, removes duplicates, and sends personalized emails via SMTP. Added throttling, validation, and retry logic for reliable delivery at scale.",
      tech: ["Python", "Pandas", "BeautifulSoup", "SMTP"],
      gradient: "from-mint-green to-electric-blue",
    },
    {
      icon: BarChart3,
      title: "IPL Analytics Dashboard",
      tagline: "Interactive cricket analytics with ML-powered insights.",
      description: "Developed an IPL analytics platform using Streamlit, visualizing team, player, and match data. Implemented ML models to detect patterns, predict outcomes, and deliver insights across seasons.",
      tech: ["Python", "Streamlit", "Pandas", "Scikit-learn", "Matplotlib"],
      gradient: "from-soft-purple to-mint-green",
    },
    {
      icon: GitBranch,
      title: "End-to-End CI/CD Automation for Dockerized Applications",
      tagline: "Production-grade automated deployments with Jenkins.",
      description: "Built a Jenkins pipeline on AWS EC2 that automatically builds Docker images when PRs merge into staging. Added caching, version tagging, validation steps, and automated error-handling for stability. Developed an auto-recovery system to detect downtime and restart services.",
      tech: ["Jenkins", "Docker", "AWS EC2", "Shell", "Python"],
      gradient: "from-electric-blue to-mint-green",
    },
    {
      icon: Workflow,
      title: "Skills Match (n8n Workflow Automation)",
      tagline: "AI-powered job scraping + skills matching pipeline.",
      description: "Built an n8n automation workflow that fetches jobs via RSS, cleans/enriches data, sends it to Google Sheets, and scores each job using OpenAI for skill relevance. Integrated URL resolution and filtering for instant job matching.",
      tech: ["n8n", "OpenAI API", "Google Sheets", "RSS"],
      gradient: "from-mint-green to-soft-purple",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background relative">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-electric-blue font-semibold text-sm uppercase tracking-wider mb-4 block">
            Featured Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Projects & <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-world solutions combining AI, automation, and engineering excellence
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative card-gradient border border-border rounded-xl overflow-hidden hover:border-electric-blue/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-electric-blue/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-6 h-6 text-background" />
                </div>

                {/* Title and tagline */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-electric-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-mint-green text-sm font-medium mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-deep-indigo/80 border border-electric-blue/20 rounded text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-electric-blue">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-mint-green">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
