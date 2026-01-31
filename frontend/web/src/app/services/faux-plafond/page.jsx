"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

import imgPlafondBA13 from "@/assets/plafand-b13.jpg";

export default function FauxPlafondPage() {
  const types = [
    {
      title: "Faux plafond suspendu (classique)",
      description:
        "Les plaques de plâtre sont vissées sur une ossature métallique (fourrures) fixée au plafond existant via des suspentes.",
      avantages: [
        "Installation sur ossature métallique solide",
        "Fixation par suspentes réglables",
        "Idéal pour les constructions neuves",
        "Permet de grandes portées",
        "Hauteur sous plafond ajustable",
      ],
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    },
    {
      title: "Faux plafond autoportant",
      description:
        "Idéal pour les rénovations, ce système ne nécessite pas de fixation au plafond supérieur. L'ossature (rails et montants) est fixée de mur à mur.",
      avantages: [
        "Pas de fixation au plafond existant",
        "Parfait pour les rénovations",
        "Ossature fixée de mur à mur",
        "Solution rapide à installer",
        "Évite de percer le plafond d'origine",
      ],
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    },
  ];

  const caracteristiques = [
    {
      title: "Type de plaque",
      value: "BA13 (12,5 mm)",
    },
    {
      title: "Solutions disponibles",
      value: "Standard, Hydrofuge, Coupe-feu",
    },
    {
      title: "Finitions",
      value: "Perforées, Lisses, Décoratives",
    },
    {
      title: "Applications",
      value: "Acoustique, Isolation, Technique",
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
            src={imgPlafondBA13}
            alt="Faux plafond en plaque de plâtre"
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
              FAUX PLAFOND EN PLAQUE DE PLÂTRE
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Les faux plafonds en plaques de plâtre (type BA13, 12,5 mm) sont
              principalement suspendus sur une ossature métallique ou
              autoportants. Ils offrent des solutions acoustiques, décoratives
              ou techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Caractéristiques */}
      <section className="py-16 px-8 bg-[#f8f8f8]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {caracteristiques.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 text-center shadow-sm"
              >
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

      {/* Types de faux plafond */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Types de faux plafond
          </h2>
          <p className="text-[#666666] text-center mb-16 max-w-2xl mx-auto">
            Découvrez nos deux solutions principales pour vos projets de faux
            plafonds en plaques de plâtre.
          </p>

          <div className="space-y-20">
            {types.map((type, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="overflow-hidden">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-3xl font-bold text-[#1a1a1a] mb-4">
                    {type.title}
                  </h3>
                  <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-3">
                    {type.avantages.map((avantage, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle
                          size={20}
                          className="text-green-600 flex-shrink-0"
                        />
                        <span className="text-[#666666]">{avantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
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
            Contactez-nous pour discuter de votre projet de faux plafond et
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
