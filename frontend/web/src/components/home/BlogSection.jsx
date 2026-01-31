"use client";
import { ArrowRight } from "lucide-react";

export default function BlogSection() {

  const posts = [
    {
      title: "BA13 ou Armstrong : quel faux plafond choisir ?",
      excerpt:
        "Guide complet pour choisir le type de plafond adapté à votre espace et vos besoins",
    },
    {
      title: "Les avantages des cloisons BA13",
      excerpt:
        "Découvrez pourquoi le BA13 est la solution idéale pour vos séparations d'espaces",
    },
    {
      title: "L'importance de l'habillage mural",
      excerpt:
        "Comment un bon habillage transforme l'apparence et la qualité de vos espaces",
    },
  ];


  return (
    <section id="blog" className="py-32 px-8 bg-[#f8f8f8]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-bold text-[#1a1a1a] mb-12 text-center">
          Conseils & Astuces
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">
                {post.title}
              </h3>
              <p className="text-[#666666] mb-6">{post.excerpt}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#1a1a1a] font-semibold hover:gap-3 transition-all"
              >
                Lire plus <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
