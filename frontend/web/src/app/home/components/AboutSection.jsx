
import { ArrowRight } from "lucide-react";
import { siteConfig } from "../../../config/site";
import { Slider } from "@/components/Slider";
import { useSectionLink } from "@/utils/useSectionLink";
import imgacuel from "@/assets/accueil.jpeg";
import imgaceul2 from "@/assets/accueil2.jpeg";
import SectionSeparator from "@/components/SectionSeparator";

export default function AboutSection() {
  const handleSectionClick = useSectionLink();
  const displayImages = [imgacuel, imgaceul2];

  const years = Math.abs(new Date().getFullYear() - siteConfig.dateCreation);

  const stats = [
    { label: "Années d'expérience", value: "+" + years + " ans" },
    { label: "Projets Réalisés", value: "+" + siteConfig.projectsCount },
  ];

  return (
    <section
      id="a-propos"
      className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden"
    >
      {/* Arrière-plan décoratif */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-l from-amber-50/40 via-amber-50/20 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-50 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Titre Principal */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
            À propos de Nous
          </h2>
          <SectionSeparator className="mt-8" />
        </div>

        {/* CONTENU PRINCIPAL - Grid 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* GAUCHE : Contenu Texte */}
          <div className="order-2 lg:order-1">
            {/* Description détaillée */}
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed font-light mb-10">
              <p className="relative pl-5 border-l-2 border-amber-200">
                Chez <span className="font-semibold text-gray-900">{siteConfig.name}</span>,
                nous ne faisons pas que poser des plafonds. Nous sculptons
                l'espace. Alliant technicité de pointe et esthétique raffinée,
                nous transformons vos volumes en lieux d'exception.
              </p>
              <p className="relative pl-5 border-l-2 border-amber-200">
                De la précision millimétrique des découpes à la pureté des
                finitions, chaque détail est orchestré pour répondre aux
                exigences des projets les plus prestigieux.
              </p>
              <p className="relative pl-5 border-l-2 border-amber-200">
                Notre équipe de spécialistes maîtrise l'ensemble des techniques
                modernes de plâtrerie et d'aménagement intérieur pour donner vie
                à vos ambitions architecturales les plus audacieuses.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => handleSectionClick("contact")}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl border-none cursor-pointer"
              >
                <span>Démarrer votre projet</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                />
              </button>
            </div>
          </div>

          <Slider images={displayImages} />

        </div>
      </div>
    </section>
  );
}