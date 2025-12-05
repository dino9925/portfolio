import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Python Basics for Data Science",
      issuer: "IBM",
      icon: "🐍",
    },
    {
      title: "Data Science Bootcamp",
      issuer: "Udemy",
      icon: "📊",
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      icon: "📈",
    },
  ];

  return (
    <section id="certifications" className="section-padding bg-background relative">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-electric-blue font-semibold text-sm uppercase tracking-wider mb-4 block">
            Credentials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Continuous learning through industry-recognized programs
          </p>
        </div>

        {/* Certifications grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group relative bg-deep-indigo/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-electric-blue/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-mint-green/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4">{cert.icon}</div>

                {/* Award icon */}
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-electric-blue to-mint-green flex items-center justify-center">
                  <Award className="w-6 h-6 text-background" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-electric-blue transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm text-muted-foreground">
                  Issued by <span className="text-mint-green font-medium">{cert.issuer}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
