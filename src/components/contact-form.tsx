import { useEffect } from "react";

export default function ContactForm() {
  useEffect(() => {
    // Load Calendly script if it hasn't been loaded yet
    if (
      !document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]',
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="contact" className="py-20 bg-white" data-testid="contact-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
          Schedule a Discovery Call
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Ready to discuss your lead generation needs? Book a discovery call with
          our team to explore how we can help grow your recruitment agency.
        </p>

        {/* Calendly inline widget begin */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/rashid-centralautomations/discovery?hide_event_type_details=1"
          style={{ minWidth: "320px", height: "700px" }}
          data-testid="calendly-widget"
        />
        {/* Calendly inline widget end */}
      </div>
    </section>
  );
}
