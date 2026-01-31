export default function SectionSeparator({ className = "" }) {
    return (
      <div className={`flex items-center justify-center gap-3 ${className}`}>
        {/* Left Line (Fade In) */}
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-600" />
        
        {/* Center Dot */}
        <div className="w-1.5 h-1.5 rounded-full bg-amber-600 shadow-[0_0_10px_rgba(217,119,6,0.5)]" />
        
        {/* Right Line (Fade Out) */}
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-600" />
      </div>
    );
  }