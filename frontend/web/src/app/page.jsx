"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import ValuesSection from "@/components/home/ValuesSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import SignatureQuote from "@/components/home/SignatureQuote";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/home/ContactSection";

// Import images
import imgacuel from "@/assets/acuel.jpeg";
import imgaceul2 from "@/assets/aceul2.jpeg";

export default function HomePage() {

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
    >
      <Header />

      <HeroSlider />
      <ValuesSection />
      <AboutSection images={[imgacuel, imgaceul2]} />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <SignatureQuote />
      <BlogSection />
      <ContactSection />

      <Footer />
    </div>
  );
}
