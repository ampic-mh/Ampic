import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          ? "bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <div
            className="text-2xl font-bold tracking-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <span className={isScrolled ? "text-[#1a1a1a]" : "text-white"}>
              AMPIC
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
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

        {/* CTA Button */}
        <a
          href="#contact"
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
    </header>
  );
}
