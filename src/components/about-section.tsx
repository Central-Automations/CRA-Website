import { useState, useEffect, useRef } from "react";
import { Search, Settings, CalendarCheck } from "lucide-react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6" data-testid="about-title">
            What Central Automations Does
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" data-testid="about-description">
            We specialize in creating systematic lead generation processes that turn your recruitment agency 
            into a predictable growth machine. Our automation-driven approach ensures consistent results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className={`text-center transition-all duration-800 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} data-testid="feature-targeting">
            <div className="w-20 h-20 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-8 w-8 text-brand-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-brand-primary mb-4">Target Identification</h3>
            <p className="text-gray-600 leading-relaxed">
              We identify and research high-quality prospects in your target market using advanced data analytics and market intelligence.
            </p>
          </div>
          
          <div className={`text-center transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} data-testid="feature-automation">
            <div className="w-20 h-20 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="h-8 w-8 text-brand-accent" />
            </div>
            <h3 className="text-xl font-semibold text-brand-primary mb-4">Automated Outreach</h3>
            <p className="text-gray-600 leading-relaxed">
              Our systematic approach combines personalized messaging with automation to reach prospects at scale while maintaining quality.
            </p>
          </div>
          
          <div className={`text-center transition-all duration-800 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} data-testid="feature-appointments">
            <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CalendarCheck className="h-8 w-8 text-brand-primary" />
            </div>
            <h3 className="text-xl font-semibold text-brand-primary mb-4">Qualified Appointments</h3>
            <p className="text-gray-600 leading-relaxed">
              We deliver pre-qualified appointments directly to your calendar, ready for you to close and convert into clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
