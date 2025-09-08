import { useEffect } from "react";

// Extend the Window type so TypeScript knows about Cal
declare global {
  interface Window {
    Cal?: any;
  }
}

export default function ContactForm() {
  useEffect(() => {
    // Load Cal.com script if it hasn't been loaded yet
    if (!document.querySelector('script[src="https://app.cal.com/embed/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      script.onload = () => {
        if (window.Cal) {
          // Initialize Cal.com embed after script is loaded
          window.Cal("init", "discovery", { origin: "https://app.cal.com" });

          window.Cal.ns.discovery("inline", {
            elementOrSelector: "#my-cal-inline-discovery",
            config: { layout: "month_view", theme: "light" },
            calLink: "central-automations/discovery",
          });

          window.Cal.ns.discovery("ui", {
            theme: "light",
            cssVarsPerTheme: {
              light: { "cal-brand": "#ff7200" },
              dark: { "cal-brand": "#ff7200" },
            },
            hideEventTypeDetails: true,
            layout: "month_view",
          });
        }
      };
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

        {/* Cal.com inline widget begin */}
        <div
          style={{ width: "100%", height: "700px", overflow: "scroll" }}
          id="my-cal-inline-discovery"
          data-testid="calcom-widget"
        ></div>
        {/* Cal.com inline widget end */}
      </div>
    </section>
  );
}
