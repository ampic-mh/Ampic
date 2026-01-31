"use client";

export default function AboutSection({ images }) {
  return (
    <section id="a-propos" className="py-32 px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-bold text-[#1a1a1a] mb-8 leading-tight">
              À propos de nous
            </h2>
            <div className="space-y-6 text-lg text-[#666666] leading-relaxed">
              <p>
                <span className="font-semibold text-[#1a1a1a]">AMPIC </span>
                est une société spécialisée dans les travaux d'aménagement et de
                finition, notamment les faux plafonds, cloisons, habillages et
                solutions modernes en plaque de plâtre.
              </p>
              <p>
                Notre objectif est d'offrir à nos clients un travail de qualité,
                réalisé avec sérieux, précision et dans le respect des délais.
                Chaque projet est étudié avec attention afin de proposer des
                solutions adaptées aux besoins et aux exigences de nos
                partenaires. Grâce à une équipe qualifiée et à des matériaux
                fiables, AMPIC s'engage à garantir des résultats durables et
                soignés.
              </p>
              <p>
                N'hésitez pas à découvrir nos réalisations et à nous contacter
                pour toute information ou demande de devis.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-block mt-10 bg-[#1a1a1a] text-white px-10 py-4 font-semibold tracking-wide hover:bg-[#333333] transition-colors"
            >
              CONTACTEZ-NOUS
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <img
              src={images[0]}
              alt="Project 1"
              className="w-full aspect-[3/4] object-cover"
            />
            <img
              src={images[1]}
              alt="Project 2"
              className="w-full aspect-[3/4] object-cover mt-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
