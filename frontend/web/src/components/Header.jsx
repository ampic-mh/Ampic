import { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { useSectionLink } from "../utils/useSectionLink";
import logoAmpic from "@/assets/shared/ampic-logo.webp";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSectionClick = useSectionLink({
    onAfterScroll: () => setIsMobileMenuOpen(false),
  });

  // Handle Scroll State
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* --- Logo --- */}
        <button
          type="button"
          onClick={() => handleSectionClick("hero")}
          className="flex items-center z-50 relative bg-transparent border-none cursor-pointer p-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2 rounded-sm"
          aria-label="AMPIC - Retour à l'accueil"
        >
          <img
            src={logoAmpic}
            alt="AMPIC"
            className={`h-9 w-auto object-contain object-left transition-all duration-300 `}
            width={140}
            height={36}
            loading="eager"
            decoding="async"
          />
        </button>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden lg:flex items-center gap-10">
          {siteConfig.navItems.map((item) => {
            const sectionId = item.href.replace(/^#/, "");
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => handleSectionClick(sectionId)}
                className={`text-sm font-medium tracking-wide transition-colors bg-transparent border-none cursor-pointer p-0 ${
                  isScrolled
                    ? "text-[#666666] hover:text-[#1a1a1a]"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ letterSpacing: "0.5px" }}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* --- Desktop CTA --- */}
        <div className="hidden lg:block">
          <button
            type="button"
            onClick={() => handleSectionClick("contact")}
            className={`px-8 py-3 text-sm font-semibold tracking-wide transition-all border-none cursor-pointer ${
              isScrolled
                ? "bg-[#1a1a1a] text-white hover:bg-[#333333]"
                : "bg-white text-[#1a1a1a] hover:bg-gray-100"
            }`}
            style={{ letterSpacing: "0.5px" }}
          >
            DEVIS GRATUIT
          </button>
        </div>

        {/* --- Mobile Hamburger Button --- */}
        <button
          className="lg:hidden relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span
              className={`block w-full h-0.5 transition-all duration-300 ${
                isScrolled || isMobileMenuOpen ? "bg-[#1a1a1a]" : "bg-white"
              } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-full h-0.5 transition-all duration-300 ${
                isScrolled || isMobileMenuOpen ? "bg-[#1a1a1a]" : "bg-white"
              } ${isMobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-full h-0.5 transition-all duration-300 ${
                isScrolled || isMobileMenuOpen ? "bg-[#1a1a1a]" : "bg-white"
              } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>

        {/* --- Mobile Menu Overlay --- */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {siteConfig.navItems.map((item) => {
            const sectionId = item.href.replace(/^#/, "");
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => handleSectionClick(sectionId)}
                className="text-xl font-medium text-[#1a1a1a] hover:text-[#666666] transition-colors bg-transparent border-none cursor-pointer p-0"
              >
                {item.name}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => handleSectionClick("contact")}
            className="mt-4 px-8 py-3 bg-[#1a1a1a] text-white text-sm font-semibold tracking-wide hover:bg-[#333333] transition-all border-none cursor-pointer"
          >
            DEVIS GRATUIT
          </button>
        </div>
      </div>
    </header>
  );
}