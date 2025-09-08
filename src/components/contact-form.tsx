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


        <div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline-discovery"></div>
        <script type="text/javascript">
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
        Cal("init", "discovery", {origin:"https://app.cal.com"});
        
          Cal.ns.discovery("inline", {
            elementOrSelector:"#my-cal-inline-discovery",
            config: {"layout":"month_view","theme":"light"},
            calLink: "central-automations/discovery",
          });
        
          Cal.ns.discovery("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#ff7200"},"dark":{"cal-brand":"#ff7200"}},"hideEventTypeDetails":true,"layout":"month_view"});
          </script>

        
      </div>
    </section>
  );
}
