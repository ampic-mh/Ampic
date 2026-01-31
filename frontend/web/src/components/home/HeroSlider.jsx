"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

export default function HeroSlider() {
  const slides = [
    {
      title: "FAUX PLAFOND",
      subtitle: "Plafonds BA13 & Armstrong pour tous vos espaces",
      description:
        "Installation professionnelle de faux plafonds modernes avec finitions premium.",
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&q=80",
      cta: "Demander un devis",
      link: "#contact",
    },
    {
      title: "CLOISON BA13",
      subtitle: "Séparation d'espaces & isolation optimale",
      description:
        "Création de cloisons sur mesure avec isolation phonique et thermique.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
      cta: "Découvrir nos services",
      link: "#services",
    },
    {
      title: "HABILLAGE",
      subtitle: "Finitions murales & décoratives de qualité",
      description:
        "Habillage et revêtement pour un rendu esthétique et durable.",
      image:
        "https://images.unsplash.com/photo-1620626012053-1541e455023c?w=1920&q=80",
      cta: "En savoir plus",
      link: "#projets",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Smooth scroll handler (Types removed here)
  const handleScroll = (e, href) => {
    e.preventDefault();
    // Remove the # to get the ID
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative h-[100dvh] w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[8000ms] ${
                index === currentSlide ? "scale-105" : "scale-100"
              }`}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          </div>

          {/* Content Container */}
          <div className="relative h-full flex items-center z-20">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl pt-16 sm:pt-0">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-[1.1] drop-shadow-md">
                  {slide.title}
                </h1>
                
                <p className="text-lg sm:text-2xl text-white/95 mb-3 sm:mb-4 font-medium tracking-wide">
                  {slide.subtitle}
                </p>
                
                <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
                  {slide.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a
                    href={slide.link}
                    onClick={(e) => handleScroll(e, slide.link)}
                    className="w-full sm:w-auto text-center bg-white text-[#1a1a1a] px-8 py-4 font-semibold tracking-wide hover:bg-gray-100 transition-colors rounded-sm shadow-lg"
                  >
                    {slide.cta}
                  </a>
                  
                  <a
                    href="https://wa.me/212600000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center bg-[#25D366] text-white px-8 py-4 font-semibold tracking-wide hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2 rounded-sm shadow-lg"
                  >
                    <MessageCircle size={20} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all items-center justify-center rounded-full z-30"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all items-center justify-center rounded-full z-30"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? "bg-white w-8 shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
                : "bg-white/40 w-2 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}