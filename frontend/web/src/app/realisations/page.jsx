import { useState } from "react";
import AMPICHeader from "@/components/AMPICHeader";
import AMPICFooter from "@/components/AMPICFooter";
import { Filter, ArrowRight } from "lucide-react";

export default function RealisationsPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filters = [
    "Tous",
    "Plafonds modernes",
    "Design LED",
    "Salon",
    "Chambre",
    "Bureau",
    "Magasin",
  ];

  const projects = [
    {
      title: "Salon Moderne avec LED",
      category: "Design LED",
      type: "Salon",
      location: "[VILLE]",
      duration: "5 jours",
      description:
        "Plafond design avec intégration LED et formes géométriques modernes",
      image:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
      beforeImage:
        "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80",
    },
    {
      title: "Bureau Professionnel",
      category: "Plafonds modernes",
      type: "Bureau",
      location: "[VILLE]",
      duration: "7 jours",
      description:
        "Faux plafond suspendu avec spots encastrés pour un espace de travail optimal",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      beforeImage:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    },
    {
      title: "Chambre Élégante",
      category: "Design LED",
      type: "Chambre",
      location: "[VILLE]",
      duration: "4 jours",
      description:
        "Design BA13 avec éclairage LED indirect pour une ambiance relaxante",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      beforeImage:
        "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&q=80",
    },
    {
      title: "Magasin Commercial",
      category: "Plafonds modernes",
      type: "Magasin",
      location: "[VILLE]",
      duration: "10 jours",
      description:
        "Plafond BA13 avec finitions PLATIPRO pour un espace commercial attractif",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      beforeImage:
        "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80",
    },
    {
      title: "Salon Contemporain",
      category: "Design LED",
      type: "Salon",
      location: "[VILLE]",
      duration: "6 jours",
      description: "Plafond design avec corniches LED et formes décoratives",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
      beforeImage:
        "https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&q=80",
    },
    {
      title: "Bureau Open Space",
      category: "Plafonds modernes",
      type: "Bureau",
      location: "[VILLE]",
      duration: "12 jours",
      description: "Faux plafond acoustique pour améliorer le confort sonore",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
      beforeImage:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    },
    {
      title: "Chambre Parentale",
      category: "Design LED",
      type: "Chambre",
      location: "[VILLE]",
      duration: "5 jours",
      description: "Plafond avec niches décoratives et éclairage LED intégré",
      image:
        "https://images.unsplash.com/photo-1616594266889-f5b4c6e8e8e8?w=800&q=80",
      beforeImage:
        "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&q=80",
    },
    {
      title: "Boutique de Mode",
      category: "Plafonds modernes",
      type: "Magasin",
      location: "[VILLE]",
      duration: "8 jours",
      description:
        "Plafond design moderne avec spots LED pour mise en valeur des produits",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
      beforeImage:
        "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80",
    },
    {
      title: "Salon Luxueux",
      category: "Design LED",
      type: "Salon",
      location: "[VILLE]",
      duration: "7 jours",
      description:
        "Plafond haut de gamme avec formes complexes et éclairage LED RGB",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      beforeImage:
        "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80",
    },
  ];

  const filteredProjects =
    activeFilter === "Tous"
      ? projects
      : projects.filter(
          (p) => p.category === activeFilter || p.type === activeFilter,
        );

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A]">
      <AMPICHeader />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nos Réalisations
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Découvrez nos projets de plafonds BA13 et design Placo réalisés avec
            passion et expertise
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 bg-[#F8FAFC] dark:bg-[#1E293B] sticky top-[73px] z-40 border-b border-[#E2E8F0] dark:border-[#334155]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="text-[#64748B]" size={20} />
            <h3 className="text-lg font-semibold text-[#0F172A] dark:text-white">
              Filtrer par :
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-150 ${
                  activeFilter === filter
                    ? "bg-[#2563EB] text-white shadow-lg"
                    : "bg-white dark:bg-[#0F172A] text-[#64748B] dark:text-[#94A3B8] border border-[#E2E8F0] dark:border-[#334155] hover:border-[#2563EB] dark:hover:border-[#2563EB]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-[#64748B] dark:text-[#94A3B8]">
            {filteredProjects.length} projet
            {filteredProjects.length > 1 ? "s" : ""} trouvé
            {filteredProjects.length > 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 bg-white dark:bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#2563EB] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#64748B] dark:text-[#94A3B8] mb-4">
                    {project.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-[#94A3B8]">Lieu:</span>
                      <span className="ml-1 text-[#475569] dark:text-[#CBD5E1] font-medium">
                        {project.location}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#94A3B8]">Durée:</span>
                      <span className="ml-1 text-[#475569] dark:text-[#CBD5E1] font-medium">
                        {project.duration}
                      </span>
                    </div>
                  </div>

                  {/* View Details Link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#2563EB] font-semibold group-hover:gap-3 transition-all"
                  >
                    Voir les détails
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-24 px-6 bg-[#F8FAFC] dark:bg-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] dark:text-white mb-4">
              Avant / Après
            </h2>
            <p className="text-lg text-[#64748B] dark:text-[#94A3B8]">
              Découvrez la transformation de nos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.slice(0, 4).map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#0F172A] rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="grid grid-cols-2">
                  {/* Before */}
                  <div className="relative aspect-square">
                    <img
                      src={project.beforeImage}
                      alt={`Avant - ${project.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#64748B] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      AVANT
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative aspect-square">
                    <img
                      src={project.image}
                      alt={`Après - ${project.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[#10B981] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      APRÈS
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#64748B] dark:text-[#94A3B8]">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#2563EB]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Votre Projet Sera le Prochain !
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Contactez-nous pour transformer votre espace
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#2563EB] font-semibold px-8 py-4 rounded-lg transition-all duration-150 shadow-lg hover:shadow-xl"
          >
            Demander un Devis Gratuit
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <AMPICFooter />
    </div>
  );
}
