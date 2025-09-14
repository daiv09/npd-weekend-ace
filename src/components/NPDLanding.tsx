import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, Wrench, Globe, Mail, Linkedin } from "lucide-react";
import heroImage from "@/assets/npd-hero-bg.jpg";

const NPDLanding = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-npd">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Modern engineering workspace" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 flex items-center min-h-screen">
          <div className="max-w-4xl">
            <h1 className="heading-hero">
              Master the New Product Development (NPD) Process
            </h1>
            <h2 className="text-2xl md:text-3xl text-[hsl(var(--npd-text-gray))] mb-8 leading-relaxed">
              Weekend Training for Engineers & Designers (0–5+ Years Experience)
            </h2>
            <Button className="btn-npd-primary">
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* About the Program */}
      <section className="section-npd bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="heading-section">About the Program</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-body mb-8">
              Interested in understanding the NPD process?
              <br />
              Join our weekend classes to explore:
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <ul className="space-y-4 text-body">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[hsl(var(--npd-orange))] rounded-full mr-3"></span>
                    NPD stages & gates
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[hsl(var(--npd-orange))] rounded-full mr-3"></span>
                    DFX (Design for X)
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <ul className="space-y-4 text-body">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[hsl(var(--npd-orange))] rounded-full mr-3"></span>
                    Lifecycle thinking
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[hsl(var(--npd-orange))] rounded-full mr-3"></span>
                    Real-world industry workflows
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-body">
              Designed for engineers across industries, this program bridges theory with practical applications.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="section-npd bg-[hsl(var(--npd-orange-light))]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="heading-section text-center">Why Join?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-npd text-center">
              <div className="w-16 h-16 bg-[hsl(var(--npd-orange))] rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-card">Accelerate Your Career Growth</h3>
              <p className="text-body">
                Gain specialized knowledge that sets you apart in today's competitive engineering landscape.
              </p>
            </Card>

            <Card className="card-npd text-center">
              <div className="w-16 h-16 bg-[hsl(var(--npd-orange))] rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-card">Hands-on Learning with Industry Insights</h3>
              <p className="text-body">
                Experience real-world scenarios and practical applications from industry experts.
              </p>
            </Card>

            <Card className="card-npd text-center">
              <div className="w-16 h-16 bg-[hsl(var(--npd-orange))] rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-card">Connect Across Domains & Industries</h3>
              <p className="text-body">
                Network with professionals from diverse engineering backgrounds and expand your horizons.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Session */}
      <section className="section-npd section-orange">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Upcoming Session</h2>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            First session starts next weekend – limited seats available!
          </p>
          <Button className="btn-npd-secondary">
            Secure Your Spot
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-npd bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="relative">
            <div className="text-6xl text-[hsl(var(--npd-orange))] opacity-30 absolute -top-8 left-1/2 transform -translate-x-1/2">"</div>
            <blockquote className="text-2xl md:text-3xl text-[hsl(var(--npd-text-dark))] font-medium italic leading-relaxed relative z-10">
              A big thank you to everyone who attended my last session! These programs are designed to bridge engineering knowledge with real-world applications.
            </blockquote>
            <cite className="block mt-8 text-lg text-[hsl(var(--npd-orange))] font-semibold">
              — Jaganath Harihar
            </cite>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="section-npd section-orange">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Stay Connected</h2>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Want to be notified about upcoming sessions? Let's connect.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:contact@example.com" 
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-[hsl(var(--npd-orange-light))] transition-all duration-300 group"
            >
              <Mail className="w-8 h-8 text-[hsl(var(--npd-orange))] group-hover:text-[hsl(var(--npd-orange))]" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-[hsl(var(--npd-orange-light))] transition-all duration-300 group"
            >
              <Linkedin className="w-8 h-8 text-[hsl(var(--npd-orange))] group-hover:text-[hsl(var(--npd-orange))]" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-[hsl(var(--border))]">
        <div className="container mx-auto text-center">
          <p className="text-[hsl(var(--npd-orange))] font-medium">
            © 2025 Jaganath Harihar | Bridging the Gap Between Industry & Academia
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NPDLanding;