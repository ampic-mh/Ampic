

import {
  CheckCircle,
  Volume2,
  Droplets,
  Flame,
  Shield,
  Layers,
  Grid,
  Thermometer,
  PaintBucket,
} from "lucide-react";

import imgcloison from "@/assets/Cloison.jpg";
import ServiceHero from "../components/ServiceHero";
import { getCanonicalUrl, getFullOgImageUrl, seoConfig } from "@/config/seo";

const title = "Cloisons Sèches | AMPIC";
const description =
  "Cloisons sèches et cloisons phoniques au Maroc. Cloison standard, hydrofuge, coupe-feu et Habito. Devis gratuit AMPIC.";

export function meta() {
  const canonical = getCanonicalUrl("/services/cloisons-seches");
  const ogImage = getFullOgImageUrl();
  return [
    { title },
    { name: "description", content: description },
    ...(canonical ? [{ tagName: "link", rel: "canonical", href: canonical }] : []),
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: canonical || seoConfig.siteUrl },
    ...(ogImage ? [{ property: "og:image", content: ogImage }] : []),
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}

export default function CloisonsSechesPAge() {
  const types = [
    {
      title: "Cloison Phonique",
      subtitle: "Confort Acoustique Premium",
      description:
        "Plaques phoniques combinées à un isolant performant pour réduire efficacement le bruit entre les pièces. Idéal pour les chambres, bureaux et salles de réunion.",
      icon: Volume2,
      avantages: [
        "Réduction du bruit optimale",
        "Plaques phoniques spéciales",
        "Isolant acoustique intégré",
        "Confort sonore garanti",
        "Idéal chambres et bureaux",
      ],
    },
    {
      title: "Cloison Standard",
      subtitle: "Solution Classique",
      description:
        "Solution classique pour la séparation d'espaces avec des plaques BA13 standard. Rapport qualité-prix optimal pour les aménagements intérieurs courants.",
      icon: Shield,
      avantages: [
        "Solution économique",
        "Plaques BA13 classiques",
        "Installation rapide",
        "Finition lisse",
        "Polyvalente",
      ],
    },
    {
      title: "Cloison Hydrofuge",
      subtitle: "Protection Zones Humides",
      description:
        "Spécialement conçue pour les pièces humides comme les salles de bain et cuisines. Résistance à l'humidité et à la moisissure garantie.",
      icon: Droplets,
      avantages: [
        "Résistance à l'humidité",
        "Anti-moisissure",
        "Parfait salles de bain",
        "Idéal cuisines",
        "Durabilité accrue",
      ],
    },
    {
      title: "Cloison Coupe-feu",
      subtitle: "Sécurité Incendie",
      description:
        "Pour la sécurité incendie, ces cloisons offrent une résistance au feu selon les normes en vigueur. Indispensable pour les ERP et locaux professionnels.",
      icon: Flame,
      avantages: [
        "Résistance au feu",
        "Conforme aux normes",
        "Sécurité incendie",
        "Idéal ERP",
        "Protection optimale",
      ],
    },
    {
      title: "Cloison Habito",
      subtitle: "Haute Performance",
      description:
        "La solution haute performance : résistance exceptionnelle aux chocs, capacité de charge importante pour fixer des éléments lourds, et facilité de pose.",
      icon: Shield,
      avantages: [
        "Résistance aux chocs",
        "Capacité de charge élevée",
        "Fixation objets lourds",
        "Facilité de pose",
        "Haute performance",
      ],
    },
  ];

  const montants = [
    {
      reference: "M48",
      largeur: "48 mm",
      usage: "Cloisons légères, faible épaisseur",
    },
    {
      reference: "M70",
      largeur: "70 mm",
      usage: "Cloisons standard, bon compromis",
    },
    {
      reference: "M90",
      largeur: "90 mm",
      usage: "Isolation renforcée, passage gaines",
    },
    {
      reference: "M100",
      largeur: "100 mm",
      usage: "Haute performance acoustique/thermique",
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {types.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-100 p-8 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gray-100 group-hover:bg-[#1a1a1a] transition-colors duration-300 flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-[#1a1a1a] group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-medium">
                    {type.subtitle}
                  </p>
                  
                  <h3 className="text-2xl font-light text-[#1a1a1a] mb-4">
                    {type.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <div className="space-y-3">
                    {type.avantages.slice(0, 4).map((avantage, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-0.5 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-sm text-gray-700 leading-relaxed">
                          {avantage}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Structure métallique */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6">
              Structure métallique
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              La structure de base repose sur des montants métalliques. Le choix
              du montant dépend de l'épaisseur souhaitée et des performances
              requises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {montants.map((montant, index) => (
              <div
                key={index}
                className="group bg-white p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-[#1a1a1a] transition-colors duration-300 flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#1a1a1a] group-hover:text-white font-medium text-lg transition-colors duration-300">
                    {montant.reference}
                  </span>
                </div>
                <p className="text-2xl font-light text-[#1a1a1a] mb-3">
                  {montant.largeur}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {montant.usage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}