import AMPICHeader from "@/components/AMPICHeader";
import AMPICFooter from "@/components/AMPICFooter";
import { Award, Users, Target, Heart, MapPin, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="text-[#2563EB]" size={40} />,
      title: "Qualité",
      description:
        "Nous utilisons uniquement des matériaux de première qualité et appliquons les meilleures pratiques du métier.",
    },
    {
      icon: <Target className="text-[#10B981]" size={40} />,
      title: "Précision",
      description:
        "Chaque mesure, chaque découpe, chaque finition est réalisée avec une précision millimétrique.",
    },
    {
      icon: <Heart className="text-[#EF4444]" size={40} />,
      title: "Confiance",
      description:
        "Nous bâtissons des relations durables avec nos clients basées sur la transparence et l'honnêteté.",
    },
  ];

  const team = [
    {
      name: "Équipe Technique",
      role: "Artisans qualifiés",
      description: "Plus de 10 ans d'expérience dans les travaux BA13",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    },
    {
      name: "Équipe Design",
      role: "Conseillers créatifs",
      description: "Experts en design d'intérieur et éclairage LED",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    },
    {
      name: "Service Client",
      role: "À votre écoute",
      description: "Disponibles pour répondre à toutes vos questions",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    },
  ];

  const milestones = [
    { year: "2010", event: "Création d'AMPIC" },
    { year: "2013", event: "100+ projets réalisés" },
    { year: "2016", event: "Expansion de l'équipe" },
    { year: "2019", event: "Spécialisation Design LED" },
    { year: "2023", event: "500+ clients satisfaits" },
    { year: "2026", event: "Leader régional BA13" },
  ];

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
            À Propos d'AMPIC
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Votre partenaire de confiance pour tous vos projets de plafonds BA13
            depuis 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-white dark:bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
                  alt="Équipe AMPIC au travail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#2563EB] text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <p className="text-5xl font-bold mb-2">16+</p>
                <p className="text-lg">Années d'Excellence</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] dark:text-white mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                <p>
                  Fondée en 2010,{" "}
                  <span className="font-semibold text-[#2563EB]">AMPIC</span>{" "}
                  est née de la passion de créer des espaces exceptionnels à
                  travers l'art du plafond BA13 et du design Placo.
                </p>
                <p>
                  Au fil des années, nous avons développé une expertise reconnue
                  dans l'installation de plafonds, la création de designs
                  décoratifs et les finitions PLATIPRO. Notre engagement envers
                  la qualité et la satisfaction client nous a permis de réaliser
                  plus de{" "}
                  <span className="font-semibold text-[#2563EB]">
                    500 projets
                  </span>{" "}
                  dans la région.
                </p>
                <p>
                  Aujourd'hui, AMPIC est synonyme de{" "}
                  <span className="font-semibold text-[#2563EB]">
                    professionnalisme
                  </span>
                  ,{" "}
                  <span className="font-semibold text-[#2563EB]">
                    innovation
                  </span>{" "}
                  et{" "}
                  <span className="font-semibold text-[#2563EB]">
                    excellence
                  </span>
                  . Nous continuons à repousser les limites du design BA13 pour
                  offrir à nos clients des espaces uniques qui reflètent leur
                  personnalité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 px-6 bg-[#F8FAFC] dark:bg-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] dark:text-white mb-6">
              Notre Mission & Valeurs
            </h2>
            <p className="text-xl text-[#64748B] dark:text-[#94A3B8] max-w-3xl mx-auto">
              Transformer vos espaces avec passion, expertise et engagement
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-3xl p-12 mb-16 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Notre Mission
            </h3>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Offrir à chaque client des solutions de plafonds BA13 et design
              Placo de qualité supérieure, en combinant savoir-faire artisanal,
              innovation technique et service personnalisé pour créer des
              espaces qui dépassent les attentes.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#334155] rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-white dark:bg-[#0F172A]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] dark:text-white mb-6">
              Notre Parcours
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#E2E8F0] dark:bg-[#334155]"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                  >
                    <div className="bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] rounded-xl p-6 inline-block">
                      <p className="text-2xl font-bold text-[#2563EB] mb-2">
                        {milestone.year}
                      </p>
                      <p className="text-lg text-[#0F172A] dark:text-white font-semibold">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-[#2563EB] rounded-full border-4 border-white dark:border-[#0F172A] z-10 flex-shrink-0"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-[#F8FAFC] dark:bg-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] dark:text-white mb-6">
              Notre Équipe
            </h2>
            <p className="text-xl text-[#64748B] dark:text-[#94A3B8] max-w-3xl mx-auto">
              Des professionnels passionnés à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#0F172A] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#2563EB] font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-[#64748B] dark:text-[#94A3B8]">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 px-6 bg-white dark:bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-[#2563EB]" size={40} />
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] dark:text-white">
                  Zone d'Intervention
                </h2>
              </div>
              <p className="text-xl text-[#64748B] dark:text-[#94A3B8] mb-8 leading-relaxed">
                Nous intervenons principalement à{" "}
                <span className="font-semibold text-[#2563EB]">[VILLE]</span> et
                dans toute la région environnante. Notre proximité nous permet
                d'assurer un service rapide et personnalisé.
              </p>
              <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mb-4">
                  Zones couvertes :
                </h3>
                <ul className="space-y-2 text-[#64748B] dark:text-[#94A3B8]">
                  <li>✓ [VILLE] Centre</li>
                  <li>✓ [VILLE] Périphérie</li>
                  <li>✓ Communes avoisinantes</li>
                  <li>✓ Sur devis pour autres régions</li>
                </ul>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1E40AF] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-150 shadow-lg hover:shadow-xl"
              >
                Nous Contacter
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80"
                alt="Carte de la zone d'intervention"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#2563EB]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Contactez-nous dès aujourd'hui pour un devis gratuit
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

      <AMPICFooter />
    </div>
  );
}
