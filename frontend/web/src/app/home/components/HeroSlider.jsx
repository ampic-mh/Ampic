"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "../../../config/site";
import { useSectionLink } from "@/utils/useSectionLink";

export default function HeroSlider() {
  const handleSectionClick = useSectionLink();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Refs for animations
  const slideInterval = useRef(null);
  const progressBarRef = useRef(null);

  const SLIDE_DURATION = 6000;

  const slides = [
    {
      id: 1,
      title: "FAUX PLAFOND",
      subtitle: "Esthétique & Modernité",
      description:
        "Installation professionnelle de plafonds BA13 & Armstrong. Transformez vos volumes avec des finitions premium.",
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&q=80",
      cta: "Demander un devis",
      link: "#contact",
    },
    {
      id: 2,
      title: "CLOISON BA13",
      subtitle: "Isolation & Agencement",
      description:
        "Redéfinissez vos espaces avec nos cloisons sur mesure. Une solution rapide garantissant une isolation optimale.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
      cta: "Nos solutions",
      link: "#services",
    },
    {
      id: 3,
      title: "HABILLAGE MURAL",
      subtitle: "Finitions Haut de Gamme",
      description:
        "Des revêtements muraux décoratifs qui allient durabilité et élégance pour sublimer l'atmosphère de votre intérieur.",
      image:
        "https://images.unsplash.com/photo-1620626012053-1541e455023c?w=1920&q=80",
      cta: "Nos savoir-faire",
      link: "#projets",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // --- AUTO PLAY ENGINE ---
  useEffect(() => {
    // 1. Reset Progress Bar
    if (progressBarRef.current) {
      progressBarRef.current.style.transition = "none";
      progressBarRef.current.style.width = "0%";

      // Force reflow
      void progressBarRef.current.offsetWidth;

      // Start Animation
      progressBarRef.current.style.transition = `width ${SLIDE_DURATION}ms linear`;
      progressBarRef.current.style.width = "100%";
    }

    // 2. Set Interval
    slideInterval.current = setInterval(nextSlide, SLIDE_DURATION);

    // 3. Cleanup
    return () => {
      clearInterval(slideInterval.current);
      if (progressBarRef.current) {
        progressBarRef.current.style.transition = "none";
        progressBarRef.current.style.width = "0%";
      }
    };
  }, [nextSlide, currentSlide]);

  // Touch Handlers
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(0);
    setTouchEnd(0);
  };


  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-gray-900"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image - No Pause on Hover here */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${
                index === currentSlide ? "scale-110" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>

          {/* Content Container */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
              <div className="max-w-3xl">
                <div
                  className={`transition-all duration-700 delay-100 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wider mb-4">
                    {slide.subtitle}
                  </span>
                </div>

                <h1
                  className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-700 delay-200 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  {slide.title}
                </h1>

                <p
                  className={`text-lg md:text-xl text-gray-200 mb-10 max-w-2xl transition-all duration-700 delay-300 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  {slide.description}
                </p>

                {/* Buttons Container */}
                <div
                  className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  {/* Main CTA (Scrolls or Navigates) */}
                  <button
                    type="button"
                    onClick={() => {
                      const sectionId = slide.link.replace(/^#/, "");
                      if (sectionId) handleSectionClick(sectionId);
                    }}
                    className="px-8 py-4 bg-white text-black font-bold rounded hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 cursor-pointer border-none"
                  >
                    {slide.cta}
                    <ArrowRight size={20} />
                  </button>

                  {/* WhatsApp Button */}
                  <a
                    href={siteConfig.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-[#25D366] text-white font-bold rounded hover:bg-[#20BA5A] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Progress Bar - Visual feedback for auto-play */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
        <div
          ref={progressBarRef}
          className="h-full bg-white"
          style={{ width: "0%" }}
        />
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 z-30 hidden md:flex gap-4">
        <button
          onClick={prevSlide}
          className="p-4 rounded-full border border-white/20 bg-black/20 text-white hover:bg-white hover:text-black transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-4 rounded-full border border-white/20 bg-black/20 text-white hover:bg-white hover:text-black transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
