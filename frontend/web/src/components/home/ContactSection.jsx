"use client";
import { MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-8 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-5xl font-bold text-[#1a1a1a] mb-16 text-center">
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-[#999999] mb-2 tracking-wide">
                TÉLÉPHONE
              </p>
              <a
                href="tel:[TEL]"
                className="text-2xl text-[#1a1a1a] hover:text-[#666666] transition-colors"
              >
                [TEL]
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#999999] mb-2 tracking-wide">
                EMAIL
              </p>
              <a
                href="mailto:[EMAIL]"
                className="text-2xl text-[#1a1a1a] hover:text-[#666666] transition-colors"
              >
                [EMAIL]
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#999999] mb-2 tracking-wide">
                ADRESSE
              </p>
              <p className="text-xl text-[#1a1a1a]">
                [ADRESSE]
                <br />
                [VILLE]
              </p>
            </div>
            <div>
              <a
                href="https://wa.me/[WHATSAPP]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 font-semibold hover:bg-[#20BA5A] transition-colors"
              >
                <MessageCircle size={20} />
                WhatsApp Direct
              </a>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Nom complet"
                className="w-full px-6 py-4 border border-gray-300 focus:border-[#1a1a1a] outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Téléphone"
                className="w-full px-6 py-4 border border-gray-300 focus:border-[#1a1a1a] outline-none transition-colors"
              />
            </div>
            <div>
              <select className="w-full px-6 py-4 border border-gray-300 focus:border-[#1a1a1a] outline-none transition-colors text-[#666666]">
                <option>Objet</option>
                <option>Devis</option>
                <option>Informations</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full px-6 py-4 border border-gray-300 focus:border-[#1a1a1a] outline-none transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1a1a1a] text-white px-8 py-4 font-semibold tracking-wide hover:bg-[#333333] transition-colors"
            >
              ENVOYER
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
