import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Rocket } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-20 pb-16 overflow-hidden geometric-pattern" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary leading-tight mb-6" data-testid="hero-headline">
              Generate <span className="text-brand-secondary">Quality Leads</span> for Your Recruitment Agency
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed" data-testid="hero-subheading">
              We help recruitment agencies build predictable lead pipelines through targeted outreach, 
              lead research, and appointment setting. Focus on what you do best while we fill your calendar.
            </p>
            <div className="flex justify-center">
              <Button 
                onClick={scrollToContact}
                className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg"
                data-testid="button-get-leads"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Get Leads
              </Button>
            </div>
          </div>
          <div className={`transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Abstract business automation visualization" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
