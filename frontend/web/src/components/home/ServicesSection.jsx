"use client";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import imgPlafondBA13 from "@/assets/plafand-b13.jpg";
import imgArmstrong from "@/assets/armstrang.jpg";
import imgHabillage from "@/assets/Habillage.jpg";
import imgcloison from "@/assets/Cloison.jpg";
import imgtravaux from "@/assets/travaux_devirse.jpeg";

export default function ServicesSection() {
  const services = [
    {
      title: "FAUX PLAFOND EN PLAQUE DE PLATRE",
      description:
        "Les faux plafonds en plaques de plâtre (type BA13, 12,5 mm) sont principalement suspendus sur une ossature métallique ou autoportants. Ils offrent des solutions acoustiques, décoratives (perforées, lisses) ou techniques (Standard, hydrofuge, Coup-feu), parfaits pour dissimuler des gaines, intégrer des luminaires ou améliorer l'isolation.",
      image: imgPlafondBA13,
      link: "/services/faux-plafond",
    },
    {
      title: "FAUX PLAFOND DEMENTABLES",
      description:
        "Un faux plafond démontable (ou suspendu) est constitué d'une ossature métallique visible ou cachée recevant des dalles (60x60 cm ou 120x60 cm) en plâtre, métal, fibre minérale ou PVC, permettant un accès facile au plénum. Idéal pour bureaux et locaux commerciaux, il offre une excellente correction acoustique, thermique et une pose rapide.",
      image: imgArmstrong,
      link: "/services/faux-plafond-demontable",
    },
    {
      title: "CLOISON SECHES",
      description:
        "Paroi de séparation intérieure légère, montée sans mortier ni collage, composée d'une ossature (métal ou bois) sur laquelle sont vissées des plaques de plâtre, permettant une isolation thermique/acoustique et un aménagement rapide des espaces.",
      image: imgcloison,
      link: "/services/cloisons-seches",
    },
    {
      title: "HABILLAGE EN BA13",
      description:
        "Est une solution polyvalente pour les cloisons, doublages et plafonds, nécessitant une ossature métallique ou un collage direct.",
      image: imgHabillage,
      link: "/services/habillage-ba13",
    },
    {
      title: "Travaux Divers",
      description:
        "Travaux de construction et rénovation divers. Nous vous accompagnons dans tous vos projets d'aménagement.",
      image: imgtravaux,
    },
  ];
  return (
    <section id="services" className="py-32 px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-bold text-[#1a1a1a] mb-20 text-center">
          Nos services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                {service.title}
              </h3>
              <p className="text-[#666666] mb-4 leading-relaxed">
                {service.description}
              </p>
              {service.link ? (
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-[#1a1a1a] font-semibold hover:gap-3 transition-all"
                >
                  En savoir plus <ArrowRight size={18} />
                </Link>
              ) : (
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#1a1a1a] font-semibold hover:gap-3 transition-all"
                >
                  En savoir plus <ArrowRight size={18} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
