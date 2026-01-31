"use client";
import { Award, Shield, Zap } from "lucide-react";
import SectionSeparator from "@/components/SectionSeparator";

export default function ValuesSection() {
  const values = [
    {
      icon: Award,
      title: "Précision Millimétrique",
      description:
        "Nous ne laissons rien au hasard. Des mesures exactes et une installation millimétrée pour des finitions aux standards les plus élevés.",
      highlight: "100% de satisfaction",
      number: "01",
    },
    {
      icon: Shield,
      title: "Chantier Impeccable",
      description:
        "Nous respectons votre espace. Protection des sols, interventions soignées et nettoyage systématique en fin de journée.",
      highlight: "Nettoyage quotidien",
      number: "02",
    },
    {
      icon: Zap,
      title: "Délais Respectés",
      description:
        "Votre temps est précieux. Nous nous engageons sur un planning précis et le respectons pour votre tranquillité d'esprit.",
      highlight: "Livraison garantie",
      number: "03",
    },
  ];

  return (
    <section id="valeurs" className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-gray-50 via-transparent to-transparent rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-50 via-transparent to-transparent rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Luxury Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Nos Valeurs
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
          Depuis 2019, nous bâtissons notre réputation sur trois piliers fondamentaux qui garantissent la réussite de chaque projet.
          </p>

          <SectionSeparator className="mt-8" />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-white border border-gray-200 rounded-3xl p-10 sm:p-12 transition-all duration-500 hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-200/50">
                  {/* Number Watermark */}
                  <div className="absolute top-8 right-8 text-8xl font-bold text-gray-50 group-hover:text-gray-100 transition-colors duration-500">
                    {value.number}
                  </div>

                  {/* Icon Container */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 border-2 border-gray-900 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 bg-white">
                      <Icon className="w-10 h-10 text-gray-900" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                    {value.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 font-light">
                    {value.description}
                  </p>

                  {/* Highlight Badge */}
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:animate-pulse" />
                    <span className="text-sm font-semibold text-gray-900 group-hover:text-white transition-colors duration-500">
                      {value.highlight}
                    </span>
                  </div>

                  {/* Bottom Border Animation */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gray-900 to-gray-700 group-hover:w-full transition-all duration-700 rounded-b-3xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 