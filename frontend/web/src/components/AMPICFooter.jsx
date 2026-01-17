export default function AMPICFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company */}
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              AMPIC
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Aménagement de plafonds BA13
              <br />
              Design & finitions premium
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 tracking-wide"
              style={{ letterSpacing: "1px" }}
            >
              CONTACT
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="tel:[TEL]"
                  className="hover:text-white transition-colors"
                >
                  [TEL]
                </a>
              </li>
              <li>
                <a
                  href="mailto:[EMAIL]"
                  className="hover:text-white transition-colors"
                >
                  [EMAIL]
                </a>
              </li>
              <li>[ADRESSE], [VILLE]</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 tracking-wide"
              style={{ letterSpacing: "1px" }}
            >
              SUIVEZ-NOUS
            </h4>
            <div className="flex gap-4 text-sm">
              <a
                href="https://facebook.com/[FACEBOOK]"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/[INSTAGRAM]"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/[WHATSAPP]"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 AMPIC. Tous droits réservés.
          </p>
          <p className="text-sm text-gray-600 italic">
            "Le plafond n'est pas juste une finition… c'est l'identité de votre
            espace."
          </p>
        </div>
      </div>
    </footer>
  );
}
