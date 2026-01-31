import { siteConfig } from "@/config/site";
import { useSectionLink } from "@/utils/useSectionLink";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const handleSectionClick = useSectionLink();

  return (
    <footer className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] text-white">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-light mb-4 tracking-tight">
                AMPIC
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Expertise en aménagement de plafonds BA13, design d'intérieur et finitions premium depuis plus de 15 ans.
              </p>
              <div className="flex gap-3">
                <div className="w-12 h-1 bg-white" />
                <div className="w-8 h-1 bg-gray-600" />
                <div className="w-4 h-1 bg-gray-700" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold mb-6 tracking-widest uppercase text-gray-300">
                Navigation
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    type="button"
                    onClick={() => handleSectionClick("hero")}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group bg-transparent border-none cursor-pointer p-0"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-white transition-all duration-300" />
                    Accueil
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleSectionClick("services")}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group bg-transparent border-none cursor-pointer p-0"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-white transition-all duration-300" />
                    Services
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleSectionClick("projets")}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group bg-transparent border-none cursor-pointer p-0"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-white transition-all duration-300" />
                    Réalisations
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleSectionClick("contact")}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group bg-transparent border-none cursor-pointer p-0"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-white transition-all duration-300" />
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold mb-6 tracking-widest uppercase text-gray-300">
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                <a
                    href={siteConfig.contact.phoneLink}
                    className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">{siteConfig.contact.phone}</span>
                  </a>
                </li>
                <li>
                <a
                    href={siteConfig.contact.emailLink}
                    className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm break-all">{siteConfig.contact.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{siteConfig.contact.address}</span>
                </li>
              </ul>
            </div>

            {/* Social & Hours */}
            <div>
              <h4 className="text-sm font-semibold mb-6 tracking-widest uppercase text-gray-300">
                Suivez-Nous
              </h4>
              <div className="flex gap-4 mb-8">
                
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                
                <a
                    href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#25D366]/20 hover:bg-[#25D366]/30 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800">
          <div className="py-8 flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
              <p>© {currentYear} AMPIC. Tous droits réservés.</p>
            </div>

            {/* Signature Quote */}
            <div className="text-center lg:text-right">
              <p className="text-sm text-gray-400 italic font-light">
                "Le plafond n'est pas juste une finition…
                <span className="block mt-1 text-gray-500">
                  c'est l'identité de votre espace."
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Crafted By (Optional) */}
        <div className="pb-6 text-center">
          <p className="text-xs text-gray-600">
            Designed with excellence
          </p>
        </div>
      </div>
    </footer>
  );
}