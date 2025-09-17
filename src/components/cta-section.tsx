import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <section
      ref={sectionRef}
      className="py-20 bg-brand-primary text-white relative overflow-hidden"
      data-testid="cta-section"
    >
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600"
          alt="Abstract geometric business pattern"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={`max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          data-testid="cta-title"
        >
          Ready to Transform Your Lead Generation?
        </h2>
        <p
          className="text-xl mb-8 opacity-90 leading-relaxed"
          data-testid="cta-description"
        >
          Let's build a predictable pipeline that keeps your recruitment agency
          booked with qualified prospects. Stop chasing leads and start closing
          deals.
        </p>
        <div className="flex justify-center">
          <Button
            onClick={() => window.open("https://cal.com/central-automations/discovery", "_blank")}
            className="bg-brand-accent hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1"
            data-testid="button-strategy-call"
          >
            <Phone className="mr-2 h-5 w-5" />
            Schedule a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
}
