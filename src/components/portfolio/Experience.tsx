import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern — AI Applications",
      company: "Webosphere",
      period: "Sep 2025 – Present",
      achievements: [
        "Built a CI/CD pipeline using Jenkins for automated Docker deployments",
        "Integrated and customized OnlyOffice for real-time document editing",
        "Implemented centralized logging with critical alert routing",
        "Developed auto-recovery systems for consistent service uptime",
      ],
      current: true,
    },
    {
      title: "Data Science Intern — AI/ML",
      company: "Infolabz",
      period: "Jan 2025 – June 2025",
      achievements: [
        "Managed and transformed datasets using Pandas and NumPy",
        "Built Streamlit applications for real-time visual analytics",
        "Developed supervised and unsupervised ML models with scikit-learn",
        "Designed dashboards using Power BI & Matplotlib",
      ],
      current: false,
    },
    {
      title: "Shopify Developer / QA Tester",
      company: "Vertexdimension",
      period: "Jan 2021 – Dec 2021",
      achievements: [
        "Performed UI/UX testing and bug resolution",
        "Developed custom Shopify apps",
        "Improved store performance and stability",
        "Managed product listings, inventory, and store updates",
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="section-padding bg-deep-indigo/30 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(74,222,182,0.05),transparent_50%)]" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-electric-blue font-semibold text-sm uppercase tracking-wider mb-4 block">
            Professional Journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Building expertise through impactful roles and challenging projects
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-blue via-mint-green to-soft-purple md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:ml-0"
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 ${
                  exp.current 
                    ? "bg-mint-green border-mint-green animate-pulse" 
                    : "bg-deep-indigo border-electric-blue"
                } md:-translate-x-1/2 top-6`} />

                {/* Content card */}
                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                  <div className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-electric-blue/50 transition-all duration-300">
                    {/* Current badge */}
                    {exp.current && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-mint-green/10 border border-mint-green/30 text-mint-green text-xs font-medium mb-3">
                        <span className="w-2 h-2 rounded-full bg-mint-green animate-pulse" />
                        Current Role
                      </span>
                    )}

                    {/* Title and company */}
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <div className={`flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4 text-electric-blue" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-mint-green" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Achievements */}
                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`text-muted-foreground text-sm flex items-start gap-2 ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-electric-blue mt-2 shrink-0" />
                          {achievement}
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
