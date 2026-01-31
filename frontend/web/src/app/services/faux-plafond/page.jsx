"use client";

import {
  ArrowLeft,
  CheckCircle,
  Ruler,
  Shield,
  Sparkles,
  Layers,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import imgPlafondBA13 from "@/assets/plafand-b13.jpg";

export default function FauxPlafondPage() {
  const types = [
    {
      title: "Faux Plafond Suspendu",
      subtitle: "Solution Classique Premium",
      description:
        "Les plaques de plâtre sont vissées sur une ossature métallique (fourrures) fixée au plafond existant via des suspentes. Cette méthode professionnelle garantit une stabilité maximale et une durabilité exceptionnelle.",
      avantages: [
        "Installation sur ossature métallique renforcée",
        "Fixation par suspentes réglables haute précision",
        "Idéal pour les constructions neuves et projets d'envergure",
        "Permet de grandes portées sans déformation",
        "Hauteur sous plafond ajustable selon vos besoins",
      ],
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    },
    {
      title: "Faux Plafond Autoportant",
      subtitle: "Solution Rénovation Express",
      description:
        "Idéal pour les rénovations, ce système innovant ne nécessite pas de fixation au plafond supérieur. L'ossature (rails et montants) est fixée de mur à mur, offrant une installation rapide sans compromettre la qualité.",
      avantages: [
        "Aucune fixation au plafond existant requise",
        "Parfait pour les projets de rénovation",
        "Ossature autoportante fixée de mur à mur",
        "Installation rapide et efficace",
        "Préserve l'intégrité du plafond d'origine",
      ],
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    },
  ];

  const caracteristiques = [
    {
      icon: Layers,
      title: "Type de Plaque",
      value: "BA13 (12,5 mm)",
      description: "Standard professionnel",
    },
    {
      icon: Shield,
      title: "Solutions",
      value: "3 Gammes",
      description: "Standard, Hydrofuge, Coupe-feu",
    },
    {
      icon: Sparkles,
      title: "Finitions",
      value: "Sur Mesure",
      description: "Perforées, Lisses, Décoratives",
    },
    {
      icon: Ruler,
      title: "Applications",
      value: "Multi-usage",
      description: "Acoustique, Isolation, Technique",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        
        {/* 1. BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src={imgPlafondBA13}
            alt="Architecture Intérieure - Faux Plafond BA13"
            className="w-full h-full object-cover opacity-90 transition-transform duration-[10s] ease-out scale-100 hover:scale-110"
            style={{ animation: "slowZoom 20s infinite alternate" }}
          />
        </div>

        {/* 2. GRADIENTS */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

        {/* 3. CONTENT CONTAINER */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center mt-10 md:mt-20">
          {/* A. NAVIGATION */}
          <div className="absolute top-20 md:top-16 left-6 md:left-8 animate-in fade-in slide-in-from-top-4 duration-1000">
            <Link
              to="/#services"
              className="group inline-flex items-center gap-3 text-white/70 hover:text-amber-500 transition-colors uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold"
            >
              <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 group-hover:bg-amber-500 transition-all duration-300" />
              Retour aux Services
            </Link>
          </div>

          {/* B. MAIN TEXT BLOCK */}
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <h1 className="text-5xl md:text-5xl lg:text-7xl font-serif text-white leading-[0.9] mb-10">
              Faux Plafond en plaque de plâtre
            </h1>

            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-xl border-l-2 border-amber-600 pl-6">
              Sculptez vos volumes et maîtrisez l'acoustique. Nos solutions en{" "}
              <strong className="text-white font-medium">
                plaque de plâtre (type BA13, 12,5 mm)
              </strong>{" "}
              allient performance technique et esthétique épurée.
            </p>
          </div>
        </div>

        {/* 4. SCROLL INDICATOR (CORRECTED) */}
        {/* Changed logic: w-full + items-center ensures perfect centering */}
        <div className="absolute bottom-10 left-0 w-full z-20 flex flex-col items-center gap-2 animate-bounce opacity-70">
          <span className="text-[10px] uppercase tracking-widest text-white/50">
            Découvrir
          </span>
          <ChevronDown className="text-amber-500 w-6 h-6" />
        </div>
        
      </section>

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

      {/* Types de faux plafond */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6">
              Types de Faux Plafond
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Découvrez nos deux solutions principales pour vos projets de faux
              plafonds en plaques de plâtre, adaptées à chaque contexte.
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
    </div>
  );
}
