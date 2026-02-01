
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";


export default function ServiceHero({
  title,
  description,
  image,
  imageAlt = "Service image",
  backLink = "/#services",
  backLabel = "Retour aux Services",
}) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover opacity-90 transition-transform duration-[10s] ease-out scale-100 hover:scale-110"
          style={{ animation: "slowZoom 20s infinite alternate" }}
        />
      </div>

      {/* 2. GRADIENTS */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

      {/* 3. CONTENT CONTAINER */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center mt-16">
        
        {/* A. NAVIGATION */}
        <div className="absolute top-20 left-6 md:left-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <Link
            to={backLink}
            className="group inline-flex items-center gap-3 text-white/70 hover:text-amber-500 transition-colors uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold"
          >
            <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 group-hover:bg-amber-500 transition-all duration-300" />
            {backLabel}
          </Link>
        </div>

        {/* B. MAIN TEXT BLOCK */}
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <h1 className="text-5xl md:text-5xl lg:text-7xl font-serif text-white leading-[0.9] mb-10">
            {title}
          </h1>

          <div className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-xl border-l-2 border-amber-600 pl-6">
            {description}
          </div>
        </div>
      </div>

      {/* 4. SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-0 w-full z-20 flex flex-col items-center gap-2 animate-bounce opacity-70">
        <span className="text-[10px] uppercase tracking-widest text-white/50">
          Découvrir
        </span>
        <ChevronDown className="text-amber-500 w-6 h-6" />
      </div>
      
    </section>
  );
}