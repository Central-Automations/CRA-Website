import { useState, useEffect, useRef } from "react";
import { Users, Mail, Handshake, Check } from "lucide-react";

export default function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="py-20 bg-brand-light" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6" data-testid="services-title">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="services-description">
            Three essential services that work together to build your recruitment agency's lead pipeline
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className={`service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-8'}`} data-testid="service-lead-research">
            <div className="w-16 h-16 bg-brand-secondary/10 rounded-xl flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-brand-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-brand-primary mb-4">Lead Research</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Comprehensive research and identification of high-value prospects in your target industries. 
              We build detailed databases of decision-makers who need your recruitment services.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><Check className="h-4 w-4 text-brand-secondary mr-2" /> Industry targeting</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-brand-secondary mr-2" /> Contact verification</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-brand-secondary mr-2" /> Company intelligence</li>
            </ul>
          </div>
          
          {/* Service Card 2 */}
          <div className={`service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} data-testid="service-cold-email">
            <div className="w-16 h-16 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-6">
              <Mail className="h-8 w-8 text-brand-accent" />
            </div>
            <h3 className="text-2xl font-bold text-brand-primary mb-4">Cold Email Outreach</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Personalized email campaigns that cut through the noise and generate responses. 
              Our proven templates and sequences turn cold prospects into warm conversations.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><Check className="h-4 w-4 text-brand-secondary mr-2" /> Custom email sequences</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-brand-secondary mr-2" /> Personalized messaging</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-brand-secondary mr-2" /> Response tracking</li>
            </ul>
          </div>
          
          {/* Service Card 3 */}
          <div className={`service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} data-testid="service-appointment-setting">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Handshake className="h-8 w-8 text-brand-primary" />
            </div>
            <h3 className="text-2xl font-bold text-brand-primary mb-4">Appointment Setting</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We handle the appointment setting process by sharing your calendar booking link with qualified prospects. 
              You focus on closing while we fill your pipeline.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><Check className="h-4 w-4 text-brand-secondary mr-2" /> Booking link sharing</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-brand-secondary mr-2" /> Prospect qualification</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-brand-secondary mr-2" /> Follow-up sequences</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
