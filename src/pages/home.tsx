import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import AboutSection from "../components/about-section";
import ServicesSection from "../components/services-section";
import ProcessSection from "../components/process-section";
import CTASection from "../components/cta-section";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="bg-brand-light text-brand-text">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  );
}
