

import {
  CheckCircle,
  Layers,
  Grid,
  Thermometer,
  PaintBucket,
} from "lucide-react";

import imgcloison from "@/assets/Cloisons_Séches.jpeg";
import ServiceHero from "../components/ServiceHero";
import { getCanonicalUrl, getFullOgImageUrl } from "@/config/seo";
import { useSeo } from "@/utils/useSeo";
import { Slider } from "@/components/Slider";
import Standard1 from "@/assets/cloisons_seches/standar/cloison1.jpeg";
import Standard2 from "@/assets/cloisons_seches/standar/cloison2.jpeg";
import Standard3 from "@/assets/cloisons_seches/standar/cloison3.jpeg";
import Standard4 from "@/assets/cloisons_seches/standar/cloison4.jpeg";
import Hydrofuge1 from "@/assets/cloisons_seches/hydrofige/WhatsApp Image 2026-02-28 at 15.11.11 (1).jpeg";
import Hydrofuge2 from "@/assets/cloisons_seches/hydrofige/WhatsApp Image 2026-02-28 at 15.11.11.jpeg";
import Hydrofuge3 from "@/assets/cloisons_seches/hydrofige/WhatsApp Image 2026-02-28 at 15.11.12 (1).jpeg";
import Hydrofuge4 from "@/assets/cloisons_seches/hydrofige/WhatsApp Image 2026-02-28 at 15.11.12.jpeg";
import CoupeFeu1 from "@/assets/cloisons_seches/coupe-feu/Coupe-feu1.jpeg";
import CoupeFeu2 from "@/assets/cloisons_seches/coupe-feu/Coupe-feu2.jpeg";
import CoupeFeu3 from "@/assets/cloisons_seches/coupe-feu/Coupe-feu3.jpeg";
import CoupeFeu4 from "@/assets/cloisons_seches/coupe-feu/Coupe-feu4.jpeg";
import Habito1 from "@/assets/cloisons_seches/habito/habito1.jpeg";
import Habito2 from "@/assets/cloisons_seches/habito/habito2.jpeg";
import Habito3 from "@/assets/cloisons_seches/habito/habito3.jpeg";
import Habito4 from "@/assets/cloisons_seches/habito/habito4.jpeg";

export default function CloisonsSechesPAge() {
  const title = "Cloisons Sèches | AMPIC";
  const description =
    "Cloisons sèches et cloisons phoniques au Maroc. Cloison standard, hydrofuge, coupe-feu et Habito. Devis gratuit AMPIC.";
  
  const canonical = getCanonicalUrl("/services/cloisons-seches");
  const ogImage = getFullOgImageUrl();

  useSeo({ title, description, canonical, ogImage });
  const types = [
    {
      title: "Cloison Standard",
      subtitle: "Solution Classique",
      description:
        "Solution classique pour la séparation d'espaces avec des plaques BA13 standard. Rapport qualité-prix optimal pour les aménagements intérieurs courants.",
      avantages: [
        "Solution économique",
        "Plaques BA13 classiques",
        "Installation rapide",
        "Finition lisse",
        "Polyvalente",
      ],
      images: [Standard1, Standard2, Standard3, Standard4],
    },
    {
      title: "Cloison Hydrofuge",
      subtitle: "Protection Zones Humides",
      description:
        "Spécialement conçue pour les pièces humides comme les salles de bain et cuisines. Résistance à l'humidité et à la moisissure garantie.",
      avantages: [
        "Résistance à l'humidité",
        "Anti-moisissure",
        "Parfait salles de bain",
        "Idéal cuisines",
        "Durabilité accrue",
      ],
      images: [Hydrofuge1, Hydrofuge2, Hydrofuge3, Hydrofuge4],
    },
    {
      title: "Cloison Coupe-feu",
      subtitle: "Sécurité Incendie",
      description:
        "Pour la sécurité incendie, ces cloisons offrent une résistance au feu selon les normes en vigueur. Indispensable pour les ERP et locaux professionnels.",
      avantages: [
        "Résistance au feu",
        "Conforme aux normes",
        "Sécurité incendie",
        "Idéal ERP",
        "Protection optimale",
      ],
      images: [CoupeFeu1, CoupeFeu2, CoupeFeu3, CoupeFeu4],
    },
    {
      title: "Cloison Habito",
      subtitle: "Haute Performance",
      description:
        "La solution haute performance : résistance exceptionnelle aux chocs, capacité de charge importante pour fixer des éléments lourds, et facilité de pose.",
      avantages: [
        "Résistance aux chocs",
        "Capacité de charge élevée",
        "Fixation objets lourds",
        "Facilité de pose",
        "Haute performance",
      ],
      images: [Habito1, Habito2, Habito3, Habito4],
    },
  ];

  const conseilsPose = [
    {
      title: "Ossature métallique",
      description:
        "Rails fixés au sol et au plafond, montants verticaux posés aux espacements réglementaires pour garantir la rigidité.",
      icon: Grid,
    },
    {
      title: "Isolation",
      description:
        "Laine de roche ou laine de verre insérée entre les montants pour une isolation phonique et thermique optimale.",
      icon: Thermometer,
    },
    {
      title: "Plaques et finition",
      description:
        "Vissage des plaques BA13 des deux côtés de l'ossature, joints traités à l'enduit avant peinture.",
      icon: Layers,
    },
  ];

  const caracteristiques = [
    {
      icon: Layers,
      title: "Épaisseur plaque",
      value: "12,5 mm (BA13)",
      description: "Standard professionnel",
    },
    {
      icon: Grid,
      title: "Ossature",
      value: "Métallique",
      description: "Structure robuste",
    },
    {
      icon: Thermometer,
      title: "Isolation",
      value: "Phonique & Thermique",
      description: "Confort optimal",
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
        title="Cloisons Sèches"
        description="Création de cloisons séparatives en BA13 avec isolation phonique et thermique adaptée à vos besoins. Solutions sur mesure pour tous types d'espaces."
        image={imgcloison}
        imageAlt="Architecture Intérieure - Cloisons Sèches"
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

      {/* Types de cloisons */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6">
              Types de cloisons
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Découvrez nos différentes solutions de cloisons sèches adaptées à
              chaque besoin et environnement.
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
              Les étapes essentielles pour une installation réussie de vos
              cloisons sèches.
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