"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle, Home, Droplets, Volume2, Flame, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

import imgHabillage from "@/assets/Habillage.jpg";

export default function HabillageBA13Page() {
  const types = [
    {
      title: "BA13 Standard",
      description:
        "Utilisation générale pour les murs et plafonds dans les pièces sèches comme les chambres et le salon. Solution économique et polyvalente.",
      icon: Home,
      avantages: [
        "Usage général",
        "Pièces sèches",
        "Chambres et salon",
        "Solution économique",
        "Finition lisse",
      ],
      color: "bg-gray-500",
    },
    {
      title: "BA13 Hydrofuge",
      description:
        "Spécialement conçu pour résister à l'humidité, idéal pour les salles de bain, cuisines et buanderies. Résistance garantie à l'eau.",
      icon: Droplets,
      avantages: [
        "Résistance à l'humidité",
        "Salles de bain",
        "Cuisines",
        "Buanderies",
        "Anti-moisissure",
      ],
      color: "bg-cyan-500",
    },
    {
      title: "BA13 Phonique",
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
      color: "bg-blue-500",
    },
    {
      title: "BA13 Feu (Placoflam)",
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
      color: "bg-orange-500",
    },
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
      icon: CheckCircle,
    },
  ];

  const caracteristiques = [
    {
      title: "Épaisseur",
      value: "12,5 mm",
    },
    {
      title: "Fixation",
      value: "Vissage ou Collage",
    },
    {
      title: "Ossature",
      value: "Rails et Montants",
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
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imgHabillage}
            alt="Habillage BA13"
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
              HABILLAGE EN BA13
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Solution polyvalente pour les cloisons, doublages et plafonds,
              nécessitant une ossature métallique ou un collage direct. Finition
              parfaite pour tous vos espaces.
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

      {/* Types d'habillage */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Types d'habillage BA13
          </h2>
          <p className="text-[#666666] text-center mb-16 max-w-2xl mx-auto">
            Découvrez nos différentes solutions d'habillage BA13 adaptées à
            chaque pièce et besoin spécifique.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {types.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div
                  key={index}
                  className="bg-[#f8f8f8] p-8 hover:shadow-lg transition-shadow flex gap-6"
                >
                  <div
                    className={`w-16 h-16 ${type.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                      {type.title}
                    </h3>
                    <p className="text-[#666666] mb-4 leading-relaxed">
                      {type.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {type.avantages.slice(0, 3).map((avantage, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 text-sm text-[#666666] bg-white px-3 py-1"
                        >
                          <CheckCircle size={14} className="text-green-600" />
                          {avantage}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conseils de pose */}
      <section className="py-24 px-8 bg-[#f8f8f8]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Conseils de pose
          </h2>
          <p className="text-[#666666] text-center mb-16 max-w-2xl mx-auto">
            Les étapes essentielles pour une installation réussie de votre
            habillage BA13.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {conseilsPose.map((conseil, index) => (
              <div key={index} className="bg-white p-8 text-center shadow-sm">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  {conseil.title}
                </h3>
                <p className="text-[#666666] leading-relaxed">
                  {conseil.description}
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
            Contactez-nous pour discuter de votre projet d'habillage BA13 et
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

      <Footer />
    </div>
  );
}
