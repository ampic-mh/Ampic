
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Slider({ images, interval = 6000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex, interval]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="order-1 lg:order-2 relative h-[500px] lg:h-[600px] w-full group perspective-1000">
      
      {/* 1. DECORATIVE GOLD FRAME */}
      <div className="hidden lg:block absolute top-6 -left-6 w-full h-full border-[1px] border-amber-600/30 z-0 transition-all duration-700" />

      {/* 2. MAIN SLIDER CONTAINER */}
      {/* Removed bg-gray-900 to prevent black flash, used bg-white or transparent */}
      <div className="relative h-full w-full z-10 rounded-sm overflow-hidden shadow-2xl bg-white">
        
        {/* IMAGES MAPPING */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* ZOOM OUT LOGIC:
                - Active (Visible): scale-100 (Normal size)
                - Inactive (Hidden): scale-110 (Zoomed in)
                Result: When it appears, it goes from 110 -> 100 (Zooms Out)
            */}
            <img
              src={img}
              alt={`Projet AMPIC ${index + 1}`}
              className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-linear ${
                index === currentIndex ? "scale-100" : "scale-110"
              }`}
            />
            
            {/* REMOVED: The dark gradient overlay div was deleted here to keep it "just transparent" */}
          </div>
        ))}

        {/* 3. CONTROLS */}
        <div className="absolute bottom-0 right-0 p-6 z-20 flex items-center gap-4">
          
          {/* Progress Indicators */}
          <div className="flex gap-2 mr-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-[2px] transition-all duration-500 shadow-sm ${
                  idx === currentIndex ? "w-8 bg-white" : "w-4 bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center border border-white/20 bg-black/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center border border-white/20 bg-black/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}