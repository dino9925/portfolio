import { Code2, Brain, Cpu, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Brain, label: "AI/ML Development" },
    { icon: Cpu, label: "Automation Expert" },
    { icon: Code2, label: "Full-Stack Engineering" },
    { icon: Rocket, label: "CI/CD & DevOps" },
  ];

  return (
    <section id="about" className="section-padding bg-background relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Visual element */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 border border-electric-blue/20 rounded-full animate-pulse" />
              <div className="absolute inset-4 border border-mint-green/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute inset-8 border border-soft-purple/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Center content */}
              <div className="absolute inset-16 bg-gradient-to-br from-deep-indigo to-background rounded-full flex items-center justify-center border border-electric-blue/30">
                <div className="text-center">
                  <span className="text-6xl font-display font-bold gradient-text">DD</span>
                </div>
              </div>

              {/* Floating elements */}
              {highlights.map((item, index) => {
                const positions = [
                  "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                  "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
                  "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                  "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
                ];
                return (
                  <div
                    key={item.label}
                    className={`absolute ${positions[index]} bg-deep-indigo border border-electric-blue/30 rounded-xl p-3 backdrop-blur-sm animate-float`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <item.icon className="w-6 h-6 text-electric-blue" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="text-electric-blue font-semibold text-sm uppercase tracking-wider mb-4 block">About Me</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Hi, I'm Dhruv — <br />
              <span className="gradient-text">Software Engineer</span> focused on AI, ML & Automation.
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I specialize in building intelligent, production-ready solutions across machine learning, workflow automation, CI/CD pipelines, analytics platforms, and data-driven systems.
              </p>
              <p>
                My experience spans AI/ML model development, dashboarding, backend automation, real-time job-matching pipelines, and auto-recovery systems for high uptime.
              </p>
              <p>
                I love solving real business problems using data, scalable architecture, and clean engineering practices.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: "3+", label: "Years Coding" },
                { value: "10+", label: "Projects Built" },
                { value: "5+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
