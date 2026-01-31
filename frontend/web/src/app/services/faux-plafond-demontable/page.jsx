"use client";
import { ArrowLeft, CheckCircle, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

import imgArmstrong from "@/assets/armstrang.jpg";

export default function FauxPlafondDemontablePage() {
  const types = [
    {
      title: "Dalles de plâtre (Gyptone / Gyprex)",
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
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
    {
      title: "Dalles minérales ou fibre de verre",
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
      description:
        "La dalle repose directement sur le profilé. Solution classique permettant un démontage facile et rapide pour l'accès au plénum.",
    },
    {
      type: "Type D/E",
      title: "Feuillure",
      description:
        "Le bord est usiné pour reposer sur le profilé, offrant une meilleure esthétique avec une ossature moins visible tout en restant démontable.",
    },
  ];

  const caracteristiques = [
    {
      title: "Dimensions",
      value: "60x60 cm ou 120x60 cm",
    },
    {
      title: "Ossature",
      value: "Visible ou cachée",
    },
    {
      title: "Accès",
      value: "Plénum accessible",
    },
    {
      title: "Applications",
      value: "Bureaux, Commerces",
    },
  ];

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
    >
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* 1. BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src={imgArmstrong}
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
              Faux plafond démontable
            </h1>

            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-xl border-l-2 border-amber-600 pl-6">
              Un faux plafond démontable (ou suspendu) est constitué d'une
              ossature métallique visible ou cachée recevant des dalles,
              permettant un accès facile au plénum. Idéal pour bureaux et locaux
              commerciaux.
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
      <section className="py-16 px-8 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto">
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

      {/* Types de dalles */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Types de dalles
          </h2>
          <p className="text-[#666666] text-center mb-16 max-w-2xl mx-auto">
            Découvrez notre gamme complète de dalles pour faux plafonds
            démontables, adaptées à tous les environnements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {types.map((type, index) => (
              <div key={index} className="bg-[#f8f8f8] overflow-hidden group">
                <div className="overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                    {type.title}
                  </h3>
                  <p className="text-[#666666] mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.avantages.slice(0, 3).map((avantage, idx) => (
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de bordures */}
      <section className="py-24 px-8 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Types de bordures
          </h2>
          <p className="text-[#666666] text-center mb-16 max-w-2xl mx-auto">
            Le choix de la bordure influence l'esthétique et la facilité de
            démontage de votre faux plafond.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bordures.map((bordure, index) => (
              <div key={index} className="bg-white p-8 shadow-sm">
                <span className="inline-block bg-[#1a1a1a] text-white text-sm px-4 py-1 mb-4">
                  {bordure.type}
                </span>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
                  {bordure.title}
                </h3>
                <p className="text-[#666666] leading-relaxed">
                  {bordure.description}
                </p>
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
            Contactez-nous pour discuter de votre projet de faux plafond
            démontable et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              state={{ scrollTo: "contact" }}
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
    </div>
  );
}
