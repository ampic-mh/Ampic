

import {
  CheckCircle,
  Ruler,
  Grid,
  Lock,
  Building2,
} from "lucide-react";
import imgArmstrong from "@/assets/armstrang.jpg";
import ServiceHero from "../components/ServiceHero";
import { getCanonicalUrl, getFullOgImageUrl, seoConfig } from "@/config/seo";
import { useSeo } from "@/utils/useSeo";
import plafond_métallique from "@/assets/plafond_métallique.jpeg";

export default function FauxPlafondDemontablePage() {
  const title = "Faux Plafond Démontable | AMPIC";
  const description =
    "Faux plafond démontable type Armstrong au Maroc. Dalles plâtre, métalliques, minérales, PVC et bois. Devis gratuit AMPIC.";

  useSeo({
    title,
    description,
    canonical: getCanonicalUrl("/services/faux-plafond-demontable"),
    ogImage: getFullOgImageUrl(),
  });
  const types = [
    {
      title: "Dalles de plâtre (Gyptone / Gyprex)",
      subtitle: "Performance Acoustique & Hygiène",
      description:
        "Les dalles perforées pour l'acoustique ou revêtues d'un parement vinyle pour l'hygiène, idéales pour les cuisines professionnelles ou établissements de santé.",
      avantages: [
        "Excellente performance acoustique",
        "Parement vinyle pour l'hygiène",
        "Idéal pour cuisines professionnelles",
        "Adapté aux établissements de santé",
        "Finitions perforées ou lisses",
      ],
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    },
    {
      title: "Faux plafond métallique",
      subtitle: "Durabilité & Sécurité",
      description:
        "Bacs en acier laqué (lisses ou perforés) offrant une grande durabilité, souvent posés sur ossature semi-apparente avec des ressorts de maintien pour un accès sécurisé.",
      avantages: [
        "Grande durabilité",
        "Acier laqué lisse ou perforé",
        "Ossature semi-apparente",
        "Accès sécurisé au plénum",
        "Entretien facile",
      ],
      image:
        plafond_métallique,
    },
    {
      title: "Dalles minérales ou fibre de verre",
      subtitle: "Solution Acoustique Premium",
      description:
        "Reconnues pour leur performance acoustique, ces dalles sont parfaites pour la réduction de l'écho dans les espaces ouverts.",
      avantages: [
        "Performance acoustique optimale",
        "Réduction de l'écho",
        "Idéal pour open spaces",
        "Large choix de finitions",
        "Légèreté des dalles",
      ],
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    },
    {
      title: "Dalles PVC",
      subtitle: "Résistance en Zones Humides",
      description:
        "Imputrescibles et hydrophobes, elles sont idéales pour les zones humides comme les salles de bain, cuisines ou piscines.",
      avantages: [
        "Imputrescibles",
        "Hydrophobes",
        "Parfait pour zones humides",
        "Résistant à l'humidité",
        "Entretien simple",
      ],
      image:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    },
    {
      title: "Dalles bois",
      subtitle: "Élégance Naturelle",
      description:
        "Offrent une esthétique chaleureuse avec des options en contreplaqué ou fibre de bois pour un rendu naturel et élégant.",
      avantages: [
        "Esthétique chaleureuse",
        "Options contreplaqué",
        "Fibre de bois disponible",
        "Rendu naturel",
        "Ambiance élégante",
      ],
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    },
  ];

  const bordures = [
    {
      type: "Type A",
      title: "Bord droit",
      subtitle: "Solution Classique",
      description:
        "La dalle repose directement sur le profilé. Solution classique permettant un démontage facile et rapide pour l'accès au plénum.",
    },
    {
      type: "Type D/E",
      title: "Feuillure",
      subtitle: "Finition Esthétique",
      description:
        "Le bord est usiné pour reposer sur le profilé, offrant une meilleure esthétique avec une ossature moins visible tout en restant démontable.",
    },
  ];

  const caracteristiques = [
    {
      icon: Ruler,
      title: "Dimensions",
      value: "60×60 cm ou 120×60 cm",
      description: "Formats standards",
    },
    {
      icon: Grid,
      title: "Ossature",
      value: "Visible ou cachée",
      description: "Selon vos besoins",
    },
    {
      icon: Lock,
      title: "Accès",
      value: "Plénum accessible",
      description: "Facilité d'entretien",
    },
    {
      icon: Building2,
      title: "Applications",
      value: "Bureaux, Commerces",
      description: "Multi-usage",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Faux Plafond Démontable"
        description="Un faux plafond démontable (ou suspendu) est constitué d'une ossature métallique visible ou cachée recevant des dalles, permettant un accès facile au plénum. Idéal pour bureaux et locaux commerciaux."
        image={imgArmstrong}
        imageAlt="Architecture Intérieure - Faux Plafond Démontable"
      />

      {/* Caractéristiques */}
      <section className="pt-16 lg:pt-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {caracteristiques.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 group-hover:bg-[#1a1a1a] transition-colors duration-300 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#1a1a1a] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-medium">
                    {item.title}
                  </p>
                  <p className="text-2xl font-light text-[#1a1a1a] mb-1">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Types de dalles */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6">
              Types de dalles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de dalles pour faux plafonds
              démontables, adaptées à tous les environnements.
            </p>
          </div>

          <div className="space-y-24 lg:space-y-32">
            {types.map((type, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative overflow-hidden group">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-medium">
                    {type.subtitle}
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-light text-[#1a1a1a] mb-6">
                    {type.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {type.description}
                  </p>

                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-wider text-gray-400 font-medium mb-4">
                      Avantages
                    </p>
                    {type.avantages.map((avantage, idx) => (
                      <div key={idx} className="flex items-start gap-4 group">
                        <div className="mt-0.5 flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">
                          {avantage}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de bordures */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6">
              Types de bordures
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Le choix de la bordure influence l'esthétique et la facilité de
              démontage de votre faux plafond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            {bordures.map((bordure, index) => (
              <div
                key={index}
                className="bg-white p-8 lg:p-10 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-medium">
                  {bordure.type} - {bordure.subtitle}
                </p>
                <h3 className="text-3xl lg:text-4xl font-light text-[#1a1a1a] mb-6">
                  {bordure.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {bordure.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}