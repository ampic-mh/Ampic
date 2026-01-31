"use client";
import AMPICHeader from "@/components/AMPICHeader";
import AMPICFooter from "@/components/AMPICFooter";
import { ArrowLeft, CheckCircle, Volume2, Droplets, Flame, Shield } from "lucide-react";
import { Link } from "react-router-dom";

import imgcloison from "@/assets/Cloison.jpg";

export default function CloisonsSechesPAge() {
  const types = [
    {
      title: "Cloison Phonique",
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
      color: "bg-blue-500",
    },
    {
      title: "Cloison Standard",
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
      color: "bg-gray-500",
    },
    {
      title: "Cloison Hydrofuge",
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
      color: "bg-cyan-500",
    },
    {
      title: "Cloison Coupe-feu",
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
      color: "bg-orange-500",
    },
    {
      title: "Cloison Habito",
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
      color: "bg-purple-500",
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
      title: "Épaisseur plaque",
      value: "12,5 mm (BA13)",
    },
    {
      title: "Ossature",
      value: "Métallique",
    },
    {
      title: "Isolation",
      value: "Phonique & Thermique",
    },
    {
      title: "Finition",
      value: "Prête à peindre",
    },
  ];

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
    >
      <AMPICHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imgcloison}
            alt="Cloisons sèches"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-[1400px] mx-auto px-8 w-full">
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Retour aux services
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              CLOISONS SÈCHES
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Création de cloisons séparatives en BA13 avec isolation phonique
              et thermique adaptée à vos besoins. Solutions sur mesure pour tous
              types d'espaces.
            </p>
          </div>
        </div>
      </section>

      {/* Caractéristiques */}
      <section className="py-16 px-8 bg-[#f8f8f8]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {caracteristiques.map((item, index) => (
              <div key={index} className="bg-white p-6 text-center shadow-sm">
                <p className="text-sm text-[#999999] mb-2 uppercase tracking-wide">
                  {item.title}
                </p>
                <p className="text-lg font-semibold text-[#1a1a1a]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de cloisons */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Types de cloisons
          </h2>
          <p className="text-[#666666] text-center mb-16 max-w-2xl mx-auto">
            Découvrez nos différentes solutions de cloisons sèches adaptées à
            chaque besoin et environnement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {types.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div
                  key={index}
                  className="bg-[#f8f8f8] p-8 hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`w-14 h-14 ${type.color} rounded-lg flex items-center justify-center mb-6`}
                  >
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                    {type.title}
                  </h3>
                  <p className="text-[#666666] mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.avantages.slice(0, 4).map((avantage, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle
                          size={16}
                          className="text-green-600 flex-shrink-0"
                        />
                        <span className="text-sm text-[#666666]">
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

      {/* Structure - Montants métalliques */}
      <section className="py-24 px-8 bg-[#f8f8f8]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Structure métallique
          </h2>
          <p className="text-[#666666] text-center mb-16 max-w-2xl mx-auto">
            La structure de base repose sur des montants métalliques. Le choix
            du montant dépend de l'épaisseur souhaitée et des performances
            requises.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {montants.map((montant, index) => (
              <div key={index} className="bg-white p-6 text-center shadow-sm">
                <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">
                    {montant.reference}
                  </span>
                </div>
                <p className="text-2xl font-bold text-[#1a1a1a] mb-2">
                  {montant.largeur}
                </p>
                <p className="text-sm text-[#666666]">{montant.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-[#1a1a1a]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Besoin d'un devis ?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Contactez-nous pour discuter de votre projet de cloisons sèches et
            obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-white text-[#1a1a1a] px-10 py-4 font-semibold tracking-wide hover:bg-gray-100 transition-colors"
            >
              DEMANDER UN DEVIS
            </Link>
            <a
              href="https://wa.me/[WHATSAPP]"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-10 py-4 font-semibold tracking-wide hover:bg-[#20BA5A] transition-colors"
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </section>

      <AMPICFooter />
    </div>
  );
}
