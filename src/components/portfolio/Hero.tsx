import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient relative overflow-hidden flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mint-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-soft-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(58,109,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(58,109,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-blue/30 bg-deep-indigo/50 backdrop-blur-sm mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-mint-green" />
            <span className="text-sm font-medium text-muted-foreground">Software Engineer • AI/ML Specialist</span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Building{' '}
            <span className="gradient-text">AI-powered systems</span>{' '}
            that automate, predict, and scale.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I design and develop intelligent systems — from ML models and CI/CD pipelines to real-time dashboards and workflow automations. My work blends engineering precision with data-driven insight.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                View Projects
                <ArrowDown className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-electric-blue rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
