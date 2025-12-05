import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-deep-indigo/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(58,109,255,0.1),transparent_60%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-mint-green/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <span className="text-electric-blue font-semibold text-sm uppercase tracking-wider mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something{' '}
            <span className="gradient-text">Intelligent Together.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            If you'd like to collaborate, hire, or discuss a project — feel free to reach out.
          </p>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:dhruv@example.com">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="https://linkedin.com/in/dhruv-dave" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Decorative element */}
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute w-24 h-24 bg-electric-blue/20 rounded-full blur-xl animate-pulse" />
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-electric-blue to-mint-green flex items-center justify-center animate-bounce">
              <Send className="w-7 h-7 text-background" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
