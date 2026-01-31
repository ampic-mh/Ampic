import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Scroll State
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Function with Offset
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "À propos", href: "#a-propos" },
    { name: "Nos services", href: "#services" },
    { name: "Nos projets", href: "#projets" },
    { name: "Conseils", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* --- Logo --- */}
        <a 
          href="/" 
          onClick={(e) => scrollToSection(e, "#hero")}
          className="flex items-center z-50 relative"
        >
          <div
            className="text-2xl font-bold tracking-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <span
              className={`${
                isScrolled || isMobileMenuOpen ? "text-[#1a1a1a]" : "text-white"
              } transition-colors duration-300`}
            >
              AMPIC
            </span>
          </div>
        </a>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`text-sm font-medium tracking-wide transition-colors ${
                isScrolled
                  ? "text-[#666666] hover:text-[#1a1a1a]"
                  : "text-white/90 hover:text-white"
              }`}
              style={{ letterSpacing: "0.5px" }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* --- Desktop CTA --- */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className={`px-8 py-3 text-sm font-semibold tracking-wide transition-all ${
              isScrolled
                ? "bg-[#1a1a1a] text-white hover:bg-[#333333]"
                : "bg-white text-[#1a1a1a] hover:bg-gray-100"
            }`}
            style={{ letterSpacing: "0.5px" }}
          >
            DEVIS GRATUIT
          </a>
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
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-xl font-medium text-[#1a1a1a] hover:text-[#666666] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="mt-4 px-8 py-3 bg-[#1a1a1a] text-white text-sm font-semibold tracking-wide hover:bg-[#333333] transition-all"
          >
            DEVIS GRATUIT
          </a>
        </div>
      </div>
    </header>
  );
}