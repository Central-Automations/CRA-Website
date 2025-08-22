import { useState, useEffect, useRef } from "react";

export default function ProcessSection() {
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
    <section id="process" ref={sectionRef} className="py-20 bg-white" data-testid="process-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6" data-testid="process-title">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="process-description">
            Our streamlined 3-step process delivers qualified appointments to your calendar
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 relative">
          {/* Step 1 */}
          <div className={`text-center transition-all duration-800 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} data-testid="process-step-1">
            <div className="relative">
              <div className="w-20 h-20 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              {/* Connecting line - hidden on mobile, visible on large screens */}
              <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-10 -z-10"></div>
            </div>
            <h3 className="text-xl font-bold text-brand-primary mb-4">Discovery & Setup</h3>
            <p className="text-gray-600 leading-relaxed">
              We analyze your ideal client profile, understand your value proposition, and set up targeting parameters 
              to ensure we reach the right prospects for your recruitment agency.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className={`text-center transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} data-testid="process-step-2">
            <div className="relative">
              <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              {/* Connecting line - hidden on mobile, visible on large screens */}
              <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-10 -z-10"></div>
            </div>
            <h3 className="text-xl font-bold text-brand-primary mb-4">Outreach & Engagement</h3>
            <p className="text-gray-600 leading-relaxed">
              Our team executes targeted outreach campaigns using personalized messaging that resonates with 
              your prospects and generates meaningful conversations about their recruitment needs.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className={`text-center transition-all duration-800 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} data-testid="process-step-3">
            <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold text-brand-primary mb-4">Qualified Appointments</h3>
            <p className="text-gray-600 leading-relaxed">
              We qualify interested prospects and share your booking link for them to schedule appointments directly. 
              You receive qualified leads ready to discuss their recruitment needs.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
