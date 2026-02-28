
import { MessageCircle, Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import SectionSeparator from "@/components/SectionSeparator";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 px-6 lg:px-8 bg-gray-50"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-light text-[#1a1a1a] mb-6">
            Contactez-Nous
            <span className="block text-xl lg:text-2xl mt-4 text-gray-600 font-light">
              Notre équipe est à votre écoute
            </span>
          </h2>
          <SectionSeparator className="mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8 lg:space-y-10">
            <div className="bg-white p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-light text-[#1a1a1a] mb-8 pb-4 border-b border-gray-100">
                Informations de Contact
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 bg-gray-50 group-hover:bg-[#1a1a1a] transition-colors duration-300">
                      <Phone className="w-5 h-5 text-[#1a1a1a] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-medium">
                        Téléphone
                      </p>

                      <a
                        href={siteConfig.contact.phoneLink}
                        className="text-xl text-[#1a1a1a] hover:text-gray-600 transition-colors duration-300 font-light"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 bg-gray-50 group-hover:bg-[#1a1a1a] transition-colors duration-300">
                      <Mail className="w-5 h-5 text-[#1a1a1a] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-medium">
                        Email
                      </p>

                      <a
                        href={siteConfig.contact.emailLink}
                        className="text-xl text-[#1a1a1a] hover:text-gray-600 transition-colors duration-300 font-light break-all"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 bg-gray-50 group-hover:bg-[#1a1a1a] transition-colors duration-300">
                      <MapPin className="w-5 h-5 text-[#1a1a1a] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-medium">
                        Adresse
                      </p>
                      <a
                        href={siteConfig.contact.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-[#1a1a1a] font-light leading-relaxed hover:text-gray-600 transition-colors duration-300"
                      >
                        {siteConfig.contact.address}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 hover:bg-[#20BA5A] transition-all duration-300 shadow-md hover:shadow-lg w-full"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium tracking-wide">
                    Contact WhatsApp Direct
                  </span>
                </a>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-[#1a1a1a] mb-1">
                    Devis Gratuit & Sans Engagement
                  </p>
                  <p className="text-sm text-gray-600">
                    Nous vous répondons dans les 24 heures
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 lg:p-10 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border border-gray-200 focus:border-[#1a1a1a] focus:ring-1 focus:ring-[#1a1a1a] outline-none transition-all duration-300"
                  placeholder="Votre nom et prénom"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border border-gray-200 focus:border-[#1a1a1a] focus:ring-1 focus:ring-[#1a1a1a] outline-none transition-all duration-300"
                  placeholder="+212 6XX XXX XXX"
                />
              </div>

              <div className="group relative">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Objet de la demande *
                </label>

                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`
                    w-full px-6 py-4 border border-gray-200 bg-white rounded-none outline-none appearance-none transition-all duration-300
                    focus:border-[#1a1a1a] focus:ring-1 focus:ring-[#1a1a1a]
                    ${formData.subject === "" ? "text-gray-400 font-normal" : "text-gray-900 font-medium"}
                  `}
                  >
                    <option value="" disabled className="text-gray-400">
                      Sélectionnez un objet...
                    </option>

                    <option value="devis" className="text-gray-900">
                      Demande de Devis
                    </option>
                    <option value="info" className="text-gray-900">
                      Demande d'Information
                    </option>
                    <option value="autre" className="text-gray-900">
                      Autre
                    </option>
                  </select>

                  {/* Custom Icon */}
                  <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-amber-600 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Votre message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-6 py-4 border border-gray-200 focus:border-[#1a1a1a] focus:ring-1 focus:ring-[#1a1a1a] outline-none transition-all duration-300 resize-none"
                  placeholder="Décrivez votre projet en quelques mots..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full bg-[#1a1a1a] text-white px-8 py-4 font-medium tracking-wider uppercase hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3"
              >
                <span>Envoyer ma demande</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <p className="text-xs text-gray-500 text-center">
                * Champs obligatoires - Vos données sont protégées et
                confidentielles
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
