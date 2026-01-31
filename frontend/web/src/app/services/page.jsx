import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Hammer,
  Sparkles,
  Layers,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "plafond-ba13",
      icon: <Hammer className="text-[#2563EB]" size={48} />,
      title: "Plafond BA13",
      subtitle: "Faux plafonds professionnels",
      description:
        "Installation de plafonds BA13 (Placoplâtre) pour tous types d'espaces résidentiels et commerciaux. Solutions adaptées à vos besoins avec une finition impeccable.",
      types: [
        "Plafond simple - Idéal pour les espaces standards",
        "Plafond double - Isolation renforcée phonique et thermique",
        "Plafond suspendu - Dissimulation des installations techniques",
        "Faux plafond décoratif - Design moderne et élégant",
      ],
      advantages: [
        "Installation rapide et propre",
        "Isolation thermique et phonique",
        "Dissimulation des câbles et tuyaux",
        "Surface lisse et uniforme",
        "Résistant à l'humidité (avec traitement)",
        "Économique et durable",
      ],
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&q=80",
    },
    {
      id: "design-ba13",
      icon: <Sparkles className="text-[#2563EB]" size={48} />,
      title: "Design BA13",
      subtitle: "Créations décoratives sur mesure",
      description:
        "Transformez vos espaces avec des designs BA13 uniques. Formes décoratives, corniches élégantes, niches murales et intégration d'éclairage LED pour une ambiance exceptionnelle.",
      types: [
        "Formes géométriques - Designs modernes et contemporains",
        "Corniches décoratives - Élégance et raffinement",
        "Niches murales - Espaces de rangement stylés",
        "Éclairage LED intégré - Ambiances lumineuses personnalisées",
        "Spots encastrés - Éclairage fonctionnel et esthétique",
        "Rubans LED - Effets lumineux créatifs",
      ],
      advantages: [
        "Designs personnalisés selon vos goûts",
        "Intégration parfaite de l'éclairage",
        "Valorisation de votre espace",
        "Ambiances lumineuses modulables",
        "Finitions haut de gamme",
        "Conseils design inclus",
      ],
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    },
    {
      id: "finitions",
      icon: <Layers className="text-[#2563EB]" size={48} />,
      title: "Finitions PLATIPRO",
      subtitle: "Finitions professionnelles impeccables",
      description:
        "Nos experts en finitions PLATIPRO garantissent un rendu lisse et parfait. Enduit, ponçage minutieux et finitions de qualité supérieure pour un résultat durable.",
      types: [
        "Enduit PLATIPRO - Application professionnelle",
        "Ponçage fin - Surface parfaitement lisse",
        "Traitement des joints - Invisibilité garantie",
        "Préparation pour peinture - Base impeccable",
      ],
      advantages: [
        "Rendu lisse et uniforme",
        "Aucune trace visible",
        "Préparation optimale pour peinture",
        "Matériaux de qualité supérieure",
        "Séchage rapide",
        "Garantie sur les finitions",
      ],
      image:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&q=80",
    },
    {
      id: "cloisons",
      icon: <Lightbulb className="text-[#2563EB]" size={48} />,
      title: "Cloisons BA13",
      subtitle: "Séparations et aménagements",
      description:
        "Création de cloisons BA13 pour optimiser vos espaces. Solutions d'isolation phonique et thermique pour votre confort. Rénovation et réparation de cloisons existantes.",
      types: [
        "Cloisons séparatives - Optimisation des espaces",
        "Isolation phonique - Confort acoustique",
        "Isolation thermique - Économies d'énergie",
        "Rénovation - Remise à neuf de cloisons",
        "Réparation - Intervention rapide sur dégâts",
      ],
      advantages: [
        "Installation rapide",
        "Excellente isolation",
        "Modulable et adaptable",
        "Économique",
        "Finitions soignées",
        "Intervention sur mesure",
      ],
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A]">
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Des solutions complètes de plafonds BA13, design Placo et finitions
            PLATIPRO pour tous vos projets
          </p>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 px-6 ${index % 2 === 0 ? "bg-white dark:bg-[#0F172A]" : "bg-[#F8FAFC] dark:bg-[#1E293B]"}`}
        >
          <div className="max-w-7xl mx-auto">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="mb-6">{service.icon}</div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] dark:text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-xl text-[#2563EB] font-semibold mb-6">
                  {service.subtitle}
                </p>
                <p className="text-lg text-[#64748B] dark:text-[#94A3B8] mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Types */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-4">
                    Types de services
                  </h3>
                  <ul className="space-y-3">
                    {service.types.map((type, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle
                          className="text-[#10B981] flex-shrink-0 mt-1"
                          size={20}
                        />
                        <span className="text-[#475569] dark:text-[#CBD5E1]">
                          {type}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Advantages */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-4">
                    Avantages
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.advantages.map((advantage, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle
                          className="text-[#2563EB] flex-shrink-0 mt-0.5"
                          size={18}
                        />
                        <span className="text-sm text-[#475569] dark:text-[#CBD5E1]">
                          {advantage}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1E40AF] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-150 shadow-lg hover:shadow-xl"
                >
                  Demander un Devis
                  <ArrowRight size={20} />
                </a>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#2563EB]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Un Projet en Tête ?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Contactez-nous pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#2563EB] font-semibold px-8 py-4 rounded-lg transition-all duration-150 shadow-lg hover:shadow-xl"
            >
              Demander un Devis
              <ArrowRight size={20} />
            </a>
            <a
              href="/realisations"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-150"
            >
              Voir Nos Réalisations
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
