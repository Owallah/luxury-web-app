import { useEffect } from "react";
import Navbar from "../components/common/NavBarAlt";
import HeroSection from "../components/HeroSectionAlt";
import AboutSection from "../components/AboutSectionAlt";
import WhyChooseUs from "../components/WhyChooseUsAlt";
import TeamSection from "../components/TeamSection";
import ProductsSection from "../components/ProductsSection";
import ScrollToTop from "../components/ScrolToTop";
import ContactSection from "../components/ContactSection";
import Footer from "../components/common/Footer";
import TestimonialsSection from "../components/TestimonialsSection";
import PartnersSection from "../components/PartnersSection";
import VideoSection from "../components/VideoDemoSection";

const Index = () => {
  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll(".reveal");

      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleReveal);
    // Initial check on load
    handleReveal();

    return () => {
      window.removeEventListener("scroll", handleReveal);
    };
  }, []);
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <TeamSection />
      <TestimonialsSection />
      <ProductsSection />
      <VideoSection />
      <PartnersSection />
      <ContactSection />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Index;
