
import { useState } from "react";
import SectionSeparator from "@/components/SectionSeparator";
import { useSectionLink } from "@/utils/useSectionLink";

export default function ProjectsSection() {
  const handleSectionClick = useSectionLink();
  const projects = [
    {
      title: "Éclairage LED pour Établissements de Santé",
      category: "Santé",
      image:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
      description: "Solutions adaptées aux normes hospitalières"
    },
    {
      title: "Aménagement d'Espaces Professionnels",
      category: "Bureaux",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      description: "Ambiances productives et élégantes"
    },
    {
      title: "Design d'Intérieur Premium",
      category: "Santé",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      description: "Confort et fonctionnalité optimale"
    },
    {
      title: "Solutions pour Espaces Commerciaux",
      category: "Commerce",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      description: "Valorisation de votre point de vente"
    },
    {
      title: "Concepts Modernes sur Mesure",
      category: "Résidentiel",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
      description: "Excellence et innovation"
    },
    {
      title: "Open Spaces Collaboratifs",
      category: "Bureaux",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
      description: "Performance et bien-être au travail"
    },
  ];

  const filterOptions = [
    { label: "Tous nos Services", value: "Tout" },
    { label: "Santé", value: "Santé" },
    { label: "Restauration", value: "Restauration" },
    { label: "Bureaux", value: "Bureaux" },
    { label: "Commerce", value: "Commerce" },
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