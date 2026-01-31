"use client";

export default function ValuesSection() {
  const values = [
    {
      title: "Précision",
      description:
        "Mesures exactes et installation millimétrée pour un rendu parfait",
    },
    {
      title: "Propreté chantier",
      description:
        "Interventions soignées avec nettoyage systématique en fin de journée",
    },
    {
      title: "Respect des délais",
      description:
        "Planning établi et respecté pour la tranquillité de nos clients",
    },
  ];

  return (
    <section className="py-24 px-8 bg-[#f8f8f8]">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-center text-lg text-[#666666] mb-16 max-w-3xl mx-auto">
          Depuis 2019, AMPIC s'engage autour de trois valeurs fondamentales :
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
                {value.title}
              </h3>
              <p className="text-[#666666] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
