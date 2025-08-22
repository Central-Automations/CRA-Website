import { Mail, Clock } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-50 py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Company Info */}
          <div data-testid="company-info">
            <h3 className="text-2xl font-bold text-brand-primary mb-6">Central Automations</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Specialized lead generation services for recruitment agencies. We help you build predictable 
              pipelines through systematic outreach and automation.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center" data-testid="contact-email">
                <Mail className="h-5 w-5 text-brand-secondary mr-3" />
                <span className="text-gray-600">hello@centralautomations.com</span>
              </div>
              <div className="flex items-center" data-testid="contact-response-time">
                <Clock className="h-5 w-5 text-brand-secondary mr-3" />
                <span className="text-gray-600">Response within 24 hours</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div data-testid="quick-links">
            <h4 className="text-xl font-semibold text-brand-primary mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-600 hover:text-brand-secondary transition-colors"
                data-testid="footer-link-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-600 hover:text-brand-secondary transition-colors"
                data-testid="footer-link-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-left text-gray-600 hover:text-brand-secondary transition-colors"
                data-testid="footer-link-process"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-600 hover:text-brand-secondary transition-colors"
                data-testid="footer-link-contact"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center" data-testid="footer-copyright">
          <p className="text-gray-500">
            <span className="font-semibold text-brand-primary">Central Automations</span> - Lead Generation for Recruitment Agencies
          </p>
        </div>
      </div>
    </footer>
  );
}
