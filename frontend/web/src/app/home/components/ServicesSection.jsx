
import { Link } from "react-router";
import { ArrowRight, ChevronRight, Minus } from "lucide-react";
import { useSectionLink } from "@/utils/useSectionLink";
import imgPlafondBA13 from "@/assets/faux_plafand.jpeg";
import imgArmstrong from "@/assets/armstrang.jpg";
import Habillage_Mural from "@/assets/Habillage_Mural.jpeg";
import Cloisons_Séches from "@/assets/Cloisons_Séches.jpeg";

import SectionSeparator from "@/components/SectionSeparator";

export default function ServicesSection() {
  const handleSectionClick = useSectionLink();
  const services = [
    {
      id: "plafond-ba13",
      title: "Plafonds BA13", // Shortened for cleaner design
      subtitle: "Esthétique & Technique",
      description:
        "Solutions acoustiques et décoratives suspendues sur ossature métallique. Idéal pour intégrer des luminaires et améliorer l'isolation avec une finition lisse ou perforée.",
      image: imgPlafondBA13,
      link: "/services/faux-plafond",
    },
    {
      id: "plafond-demontable",
      title: "Plafonds Démontables",
      subtitle: "Bureaux & Commerces",
      description:
        "Système modulaire (60x60) offrant un accès facile au plénum. La solution privilégiée pour les espaces professionnels nécessitant maintenance rapide et correction acoustique.",
      image: imgArmstrong,
      link: "/services/faux-plafond-demontable",
    },
    {
      id: "cloisons",
      title: "Cloisons Sèches",
      subtitle: "Agencement d'Espace",
      description:
        "Séparation légère haute performance. Montage rapide sans séchage pour une redistribution flexible des volumes avec isolation phonique certifiée.",
      image: Cloisons_Séches,
      link: "/services/cloisons-seches",
    },
    {
      id: "habillage",
      title: "Habillage Mural",
      subtitle: "Design & Doublage",
      description:
        "Solutions de doublage sur ossature ou collé pour une finition parfaite. Transformez vos murs bruts en surfaces lisses prêtes à peindre ou décorer.",
      image: Habillage_Mural,
      link: "/services/habillage-ba13",
    },
    /*{
      id: "divers",
      title: "Travaux Divers",
      subtitle: "Rénovation Globale",
      description:
        "Une expertise complète pour tous vos besoins annexes en construction et rénovation. Un interlocuteur unique pour gérer l'ensemble de votre projet.",
      image: Cloisons_Séches,
      link: "/#contact", // Changed to anchor for consistency
    },*/
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
  

          {/* Titre principal */}
          <h2 className="text-4xl lg:text-6xl font-serif text-gray-900 mb-6 leading-tight">
            Nos Services
          </h2>

          {/* Sous-titre */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            De la conception à la réalisation, nos services premium transforment vos espaces 
            avec précision et élégance
          </p>

          <SectionSeparator className="mt-8" />
        </div>
        

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group flex flex-col h-full bg-white rounded-t-xl overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              
              {/* IMAGE CONTAINER */}
              <div className="relative overflow-hidden aspect-[4/3] w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* CONTENT CONTAINER */}
              <div className="flex flex-col flex-grow p-8 border-x border-b border-gray-100 group-hover:border-white transition-colors">
                
                {/* Subtitle */}
                <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
                  {service.subtitle}
                </p>
                
                {/* Title */}
                <h3 className="text-2xl font-serif text-gray-900 mb-4 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>
                
                {/* Description (Truncated) */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {service.description}
                </p>

                {/* Link/Button */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  {service.link.startsWith("#") || service.link.startsWith("/#") ? (
                    <button
                      type="button"
                      onClick={() => handleSectionClick(service.link.replace(/^\/?#/, "") || "contact")}
                      className="inline-flex items-center gap-2 text-gray-900 text-sm font-bold uppercase tracking-wide group-hover:gap-4 transition-all duration-300 bg-transparent border-none cursor-pointer p-0"
                    >
                      En savoir plus <ChevronRight size={16} className="text-amber-600" />
                    </button>
                  ) : (
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 text-gray-900 text-sm font-bold uppercase tracking-wide group-hover:gap-4 transition-all duration-300"
                    >
                      En savoir plus <ChevronRight size={16} className="text-amber-600" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE ONLY CTA */}
        <div className="mt-12 md:hidden text-center">
          <button
            type="button"
            onClick={() => handleSectionClick("contact")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg text-sm font-bold shadow-lg border-none cursor-pointer"
          >
            Discuter d'un projet <ArrowRight size={16} />
          </button>
        </div>
        
      </div>
    </section>
  );
}