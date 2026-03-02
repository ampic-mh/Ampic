

import {
  CheckCircle,
  Wrench,
  Layers,
  Grid,
  Ruler,
  PaintBucket,
} from "lucide-react";

import Habillage from "@/assets/Habillage_Mural.jpeg";
import ServiceHero from "@/app/services/components/ServiceHero";
import { getCanonicalUrl, getFullOgImageUrl } from "@/config/seo";
import { useSeo } from "@/utils/useSeo";
import { Slider } from "@/components/Slider";
import Standard1 from "@/assets/habige/standar/standar.jpeg";
import Standard2 from "@/assets/habige/standar/standar2.jpeg";
import Standard3 from "@/assets/habige/standar/standar3.jpeg";
import Standard4 from "@/assets/habige/standar/standar4.jpeg";
import Hydrofuge1 from "@/assets/habige/Hydrofuge/Hydrofuge1.jpeg";
import Hydrofuge2 from "@/assets/habige/Hydrofuge/habiage1.jpeg";


export default function HabillageBA13Page() {
  const title = "Habillage en BA13 | AMPIC";
  const description =
    "Habillage mural et doublage en plaques BA13 au Maroc. BA13 standard, hydrofuge, phonique et Placoflam. Devis gratuit AMPIC.";

  useSeo({
    title,
    description,
    canonical: getCanonicalUrl("/services/habillage-ba13"),
    ogImage: getFullOgImageUrl(),
  });
  const types = [
    {
      title: "BA13 Standard",
      subtitle: "Usage Général",
      description:
        "Utilisation générale pour les murs et plafonds dans les pièces sèches comme les chambres et le salon. Solution économique et polyvalente.",
      avantages: [
        "Usage général",
        "Pièces sèches",
        "Chambres et salon",
        "Solution économique",
        "Finition lisse",
      ],
      images: [Standard1, Standard2 , Standard3 ,Standard4]
    },
    {
      title: "BA13 Hydrofuge",
      subtitle: "Protection Humidité",
      description:
        "Spécialement conçu pour résister à l'humidité, idéal pour les salles de bain, cuisines et buanderies. Résistance garantie à l'eau.",
      avantages: [
        "Résistance à l'humidité",
        "Salles de bain",
        "Cuisines",
        "Buanderies",
        "Anti-moisissure",
      ],
      images: [Hydrofuge1, Hydrofuge2],
    },
    /*{
      title: "BA13 Phonique",
      subtitle: "Isolation Acoustique",
      description:
        "Plaque renforcée pour améliorer l'isolation acoustique, recommandée pour les chambres ou les séparations entre appartements.",
      icon: Volume2,
      avantages: [
        "Isolation acoustique",
        "Réduction du bruit",
        "Séparation appartements",
        "Confort sonore",
        "Plaque renforcée",
      ],
    },
    {
      title: "BA13 Feu (Placoflam)",
      subtitle: "Sécurité Incendie",
      description:
        "Haute résistance au feu, obligatoire pour les gaines techniques ou la protection de cheminées. Conforme aux normes de sécurité incendie.",
      icon: Flame,
      avantages: [
        "Résistance au feu",
        "Gaines techniques",
        "Protection cheminées",
        "Normes incendie",
        "Sécurité renforcée",
      ],
    },*/
  ];

  const conseilsPose = [
    {
      title: "Fixation",
      description:
        "Vissage sur ossature métallique (rails et montants) ou collage avec mortier adhésif selon le support.",
      icon: Wrench,
    },
    {
      title: "Finition",
      description:
        "Traitement des joints avec bandes et enduit pour une surface parfaitement lisse avant peinture.",
      icon: CheckCircle,
    },
    {
      title: "Épaisseur",
      description:
        "La plaque standard a une épaisseur nominale de 12,5 mm, d'où le nom BA13.",
      icon: Ruler,
    },
  ];

  const caracteristiques = [
    {
      icon: Layers,
      title: "Épaisseur",
      value: "12,5 mm",
      description: "Standard BA13",
    },
    {
      icon: Wrench,
      title: "Fixation",
      value: "Vissage ou Collage",
      description: "Selon le support",
    },
    {
      icon: Grid,
      title: "Ossature",
      value: "Rails et Montants",
      description: "Structure métallique",
    },
    {
      icon: PaintBucket,
      title: "Finition",
      value: "Prête à peindre",
      description: "Surface lisse",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Habillage en BA13"
        description="Solution polyvalente pour les cloisons, doublages et plafonds, nécessitant une ossature métallique ou un collage direct. Finition parfaite pour tous vos espaces."
        image={Habillage}
        imageAlt="Architecture Intérieure - Habillage en BA13"
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

      {/* Types d'habillage */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6">
              Types d'habillage BA13
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Découvrez nos différentes solutions d'habillage BA13 adaptées à
              chaque pièce et besoin spécifique.
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
                  <Slider images={type.images} showFrame={false} />
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
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

      {/* Conseils de pose */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6">
              Conseils de pose
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Les étapes essentielles pour une installation réussie de votre
              habillage BA13.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {conseilsPose.map((conseil, index) => {
              const Icon = conseil.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gray-100 group-hover:bg-[#1a1a1a] transition-colors duration-300 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-[#1a1a1a] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-light text-[#1a1a1a] mb-4">
                    {conseil.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {conseil.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}