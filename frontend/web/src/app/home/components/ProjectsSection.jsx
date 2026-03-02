
import { useState } from "react";
import SectionSeparator from "@/components/SectionSeparator";
import { useSectionLink } from "@/utils/useSectionLink";
import img1 from "@/assets/Notre_Savoir-Faire/image1.jpeg";
import img2 from "@/assets/Notre_Savoir-Faire/image2.jpeg";
import img3 from "@/assets/Notre_Savoir-Faire/image3.jpeg";
import img4 from "@/assets/Notre_Savoir-Faire/image4.jpeg";
import imgBuilding from "@/assets/Notre_Savoir-Faire/building.jpg";
import imgOffice from "@/assets/Notre_Savoir-Faire/view-modern-office.jpg";

export default function ProjectsSection() {
  const handleSectionClick = useSectionLink();
  const projects = [
    {
      title: "Faux Plafond Décoratif LED",
      category: "Résidentiel",
      image: img1,
      description: "Design géométrique avec éclairage LED indirect noir et blanc"
    },
    {
      title: "Faux Plafond Suspendu Lumineux",
      category: "Résidentiel",
      image: img2,
      description: "Plafond épuré avec spots encastrés et bandeau LED blanc"
    },
    {
      title: "Habillage Mural & Faux Plafond",
      category: "Résidentiel",
      image: img3,
      description: "Boiseries décoratives BA13 et rail LED encastré"
    },
    {
      title: "Aménagement Intérieur Complet",
      category: "Résidentiel",
      image: img4,
      description: "Faux plafond géométrique LED et habillage mural bois naturel"
    },
    {
      title: "Plafond Acoustique Architectural",
      category: "Bureaux",
      image: imgBuilding,
      description: "Solutions techniques pour espaces de prestige"
    },
    {
      title: "Open Space Professionnel",
      category: "Bureaux",
      image: imgOffice,
      description: "Plafond LED modulaire pour espaces de travail collaboratifs"
    },
  ];

  const filterOptions = [
    { label: "Tous nos Services", value: "Tout" },
    { label: "Résidentiel", value: "Résidentiel" },
    { label: "Bureaux", value: "Bureaux" },
  ];

  const [filter, setFilter] = useState("Tout");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredProjects =
    filter === "Tout"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projets" className="py-24 lg:py-32 px-6 lg:px-8 bg-gradient-to-b bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">          
          {/* TITRE STRATÉGIQUE */}
          <h2 className="text-4xl lg:text-6xl font-serif text-gray-900 mb-6">
            Notre Savoir-Faire
          </h2>
          
          {/* DESCRIPTION NUANCÉE */}
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Des espaces techniques aux finitions décoratives, nous maîtrisons l'art de l'aménagement. 
            Découvrez <span className="text-gray-900 font-medium">le standard de qualité</span> que nous apportons à chaque projet, qu'il soit résidentiel ou professionnel.
          </p>
          <SectionSeparator className="mt-8" />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-16 lg:mb-20 flex-wrap">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`px-8 py-3 text-sm uppercase tracking-wider font-medium transition-all duration-300 border ${
                filter === option.value
                  ? "bg-[#1a1a1a] text-white border-[#1a1a1a] shadow-lg"
                  : "bg-white text-[#666666] border-gray-200 hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
              }`}
              aria-label={`Filtrer par ${option.label}`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <article
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden mb-6 bg-gray-100">
                <img
                  src={project.image}
                  alt={`Exemple de ${project.title}`}
                  className="w-full aspect-[4/3] object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm font-light opacity-90">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                  {project.category}
                </p>
                <h3 className="text-xl font-light text-[#1a1a1a] group-hover:text-gray-600 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Chaque projet est unique. Discutons de vos besoins spécifiques.
          </p>
          <button
            type="button"
            onClick={() => handleSectionClick("contact")}
            className="px-10 py-4 bg-[#1a1a1a] text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl border-none cursor-pointer"
          >
            Demander un devis gratuit
          </button>
        </div>
      </div>
    </section>
  );
}