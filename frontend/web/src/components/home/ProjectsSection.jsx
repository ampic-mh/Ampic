"use client";
import { useState } from "react";

export default function ProjectsSection() {

  const projects = [
    {
      title: "Salon Moderne LED",
      category: "les hôpitaux",
      image:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    },
    {
      title: "Bureau Professionnel",
      category: "Bureaux",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
    {
      title: "Chambre Design",
      category: "les hôpitaux",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    },
    {
      title: "Magasin Commercial",
      category: "Magasins",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    },
    {
      title: "Salon Contemporain",
      category: "Moderne",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    },
    {
      title: "Open Space",
      category: "Bureaux",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    },
  ];

  const filterOptions = [
    "Tout",
    "les hôpitaux",
    "McDonald's",
    "Bureaux",
    "Magasins",
  ];


  const [filter, setFilter] = useState("Tout");
  const filteredProjects =
    filter === "Tout"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projets" className="py-32 px-8 bg-[#f8f8f8]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-bold text-[#1a1a1a] mb-12 text-center">
          Nos projets
        </h2>

        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {filterOptions.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 font-medium transition-colors ${
                filter === f
                  ? "bg-[#1a1a1a] text-white"
                  : "bg-white text-[#666666] hover:bg-gray-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a]">
                {project.title}
              </h3>
              <p className="text-sm text-[#999999]">{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
