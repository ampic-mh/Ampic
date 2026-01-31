"use client";

export default function StatsSection() {
  const stats = [
    { value: "[X]", label: "Projets Réalisés" },
    { value: "Salon", label: "Résidentiel" },
    { value: "Chambre", label: "Confort" },
    { value: "Bureaux", label: "Professionnel" },
    { value: "Magasins", label: "Commercial" },
  ];
  
  return (
    <section className="py-24 px-8 bg-[#1a1a1a] text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p
                className={`font-bold mb-2 ${
                  index === 0 ? "text-5xl" : "text-3xl"
                }`}
              >
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
