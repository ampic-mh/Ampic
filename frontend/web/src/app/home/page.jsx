"use client";
import { useEffect } from "react";
import { useLocation } from "react-router";
import HeroSlider from "@/app/home/components/HeroSlider";
import ValuesSection from "@/app/home/components/ValuesSection";
import AboutSection from "@/app/home/components/AboutSection";
import ServicesSection from "@/app/home/components/ServicesSection";
import ProjectsSection from "@/app/home/components/ProjectsSection";
import SignatureQuote from "@/app/home/components/SignatureQuote";
import ContactSection from "@/app/home/components/ContactSection";
import { scrollToSection } from "@/utils/scrollToSection";
import FAQSection from "./components/FAQSection";

export default function HomePage() {
  const location = useLocation();
  const scrollToId = location.state?.scrollTo;

  useEffect(() => {
    if (!scrollToId) return;
    const id = setTimeout(() => scrollToSection(scrollToId), 100);
    return () => clearTimeout(id);
  }, [scrollToId]);

  return (
    <>
      <HeroSlider />
      <AboutSection/>
      <ValuesSection />
      <ServicesSection />
      <ProjectsSection />
      <SignatureQuote />
      <FAQSection />
      <ContactSection />
    </>
  );
}
