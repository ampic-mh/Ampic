
import { Quote } from "lucide-react";

export default function SignatureQuote() {
  return (
    <section className="relative py-32 px-6 bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
      
      {/* 1. LUXE BACKGROUND ELEMENT */}
      {/* A massive, subtle quote icon that adds texture to the black background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.03] pointer-events-none select-none">
        <Quote size={300} strokeWidth={0.5} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* 2. GOLD ACCENT LINE */}
        {/* A minimal separator that screams 'precision' */}
        <div className="flex justify-center mb-10">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-80" />
        </div>

        {/* 3. THE STATEMENT */}
        {/* Serif font implies tradition/luxury. Italic implies art. */}
        <blockquote className="text-3xl md:text-5xl md:leading-snug font-serif font-light text-white italic mb-12">
          "Chaque espace mérite une finition <span className="text-amber-600">d'exception</span>. 
          <br className="hidden md:block" />
          Chez AMPIC, nous ne faisons pas que rénover, <br className="hidden md:block" /> 
          <span className="text-gray-300 not-italic">nous matérialisons votre vision."</span>
        </blockquote>

        {/* 4. THE BRAND SIGNATURE */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-amber-700 uppercase">
            La Promesse AMPIC
          </span>
        </div>
        
      </div>
    </section>
  );
}