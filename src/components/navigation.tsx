import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-brand-primary" data-testid="brand-logo">
              Central Automations
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-brand-text hover:text-brand-secondary transition-colors duration-300"
                data-testid="nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-brand-text hover:text-brand-secondary transition-colors duration-300"
                data-testid="nav-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-brand-text hover:text-brand-secondary transition-colors duration-300"
                data-testid="nav-process"
              >
                Process
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="btn-primary text-white px-6 py-2 rounded-full font-medium"
                data-testid="nav-cta"
              >
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-text hover:text-brand-secondary"
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden" data-testid="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-brand-text hover:text-brand-secondary transition-colors duration-300"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-brand-text hover:text-brand-secondary transition-colors duration-300"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="block px-3 py-2 text-brand-text hover:text-brand-secondary transition-colors duration-300"
                data-testid="mobile-nav-process"
              >
                Process
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="btn-primary text-white px-6 py-2 rounded-full font-medium mx-3 mt-2"
                data-testid="mobile-nav-cta"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
