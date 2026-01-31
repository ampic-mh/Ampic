"use client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";

// Import images
import imgPlafondBA13 from "@/assets/plafand-b13.jpg";
import imgArmstrong from "@/assets/armstrang.jpg";
import imgHabillage from "@/assets/Habillage.jpg";
import imgcloison from "@/assets/Cloison.jpg";
import imgtravaux from "@/assets/travaux_devirse.jpeg";
import imgaceule from "@/assets/aceul.jpeg";
import imgacuel from "@/assets/acuel.jpeg";
import imgaceul2 from "@/assets/aceul2.jpeg";
import imghabillage2 from "@/assets/Habillage2.jpeg";
export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filter, setFilter] = useState("Tout");

  // Hero Slider
  const slides = [
    {
      title: "FAUX PLAFOND",
      subtitle: "Plafonds BA13 & Armstrong pour tous vos espaces",
      description:
        "Installation professionnelle de faux plafonds modernes avec finitions premium",
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&q=80",
      cta: "Demander un devis",
    },
    {
      title: "CLOISON BA13",
      subtitle: "Séparation d'espaces & isolation optimale",
      description:
        "Création de cloisons sur mesure avec isolation phonique et thermique",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
      cta: "Découvrir nos services",
    },
    {
      title: "HABILLAGE",
      subtitle: "Finitions murales & décoratives de qualité",
      description:
        "Habillage et revêtement pour un rendu esthétique et durable",
      image: imghabillage2,
      cta: "En savoir plus",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Values
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

  // Services
  const services = [
    {
      title: "FAUX PLAFOND EN PLAQUE DE PLATRE",
      description:
        "Les faux plafonds en plaques de plâtre (type BA13, 12,5 mm) sont principalement suspendus sur une ossature métallique ou autoportants. Ils offrent des solutions acoustiques, décoratives (perforées, lisses) ou techniques (Standard, hydrofuge, Coup-feu), parfaits pour dissimuler des gaines, intégrer des luminaires ou améliorer l'isolation.",
      image: imgPlafondBA13,
      link: "/services/faux-plafond",
    },
    {
      title: "FAUX PLAFOND DEMENTABLES",
      description:
        "Un faux plafond démontable (ou suspendu) est constitué d'une ossature métallique visible ou cachée recevant des dalles (60x60 cm ou 120x60 cm) en plâtre, métal, fibre minérale ou PVC, permettant un accès facile au plénum. Idéal pour bureaux et locaux commerciaux, il offre une excellente correction acoustique, thermique et une pose rapide.",
      image: imgArmstrong,
      link: "/services/faux-plafond-demontable",
    },
    {
      title: "CLOISON SECHES",
      description:
        "Paroi de séparation intérieure légère, montée sans mortier ni collage, composée d'une ossature (métal ou bois) sur laquelle sont vissées des plaques de plâtre, permettant une isolation thermique/acoustique et un aménagement rapide des espaces.",
      image: imgcloison,
      link: "/services/cloisons-seches",
    },
    {
      title: "HABILLAGE EN BA13",
      description:
        "Est une solution polyvalente pour les cloisons, doublages et plafonds, nécessitant une ossature métallique ou un collage direct.",
      image: imgHabillage,
      link: "/services/habillage-ba13",
    },
    {
      title: "Travaux Divers",
      description:
        "Travaux de construction et rénovation divers. Nous vous accompagnons dans tous vos projets d'aménagement.",
      image:imgtravaux
        ,
    },
  ];

  // Projects
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

  const filters = ["Tout", "les hôpitaux", "McDonald's", "Bureaux", "Magasins"];
  const filteredProjects =
    filter === "Tout"
      ? projects
      : projects.filter((p) => p.category === filter);

  // Blog posts
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
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
    >
      <Header />

      {/* HERO SLIDER */}
      <section className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-[1400px] mx-auto px-8 w-full">
                <div className="max-w-3xl">
                  <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                    {slide.title}
                  </h1>
                  <p className="text-2xl text-white/90 mb-4 font-light">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg text-white/80 mb-10 max-w-2xl">
                    {slide.description}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#contact"
                      className="bg-white text-[#1a1a1a] px-10 py-4 font-semibold tracking-wide hover:bg-gray-100 transition-colors"
                    >
                      {slide.cta}
                    </a>
                    <a
                      href="https://wa.me/[WHATSAPP]"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] text-white px-10 py-4 font-semibold tracking-wide hover:bg-[#20BA5A] transition-colors flex items-center gap-2"
                    >
                      <MessageCircle size={20} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors flex items-center justify-center"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors flex items-center justify-center"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 3 VALUES SECTION */}
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

      {/* À PROPOS SECTION */}
      <section id="a-propos" className="py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Text */}
            <div>
              <h2 className="text-5xl font-bold text-[#1a1a1a] mb-8 leading-tight">
                À propos de nous
              </h2>
              <div className="space-y-6 text-lg text-[#666666] leading-relaxed">
                <p>
                  <span className="font-semibold text-[#1a1a1a]">AMPIC </span>

                    est une société spécialisée dans les travaux d’aménagement et de finition, notamment les faux plafonds, cloisons, habillages et solutions modernes en plaque de plâtre.
                </p>
                <p>
                 Notre objectif est d’offrir à nos clients un travail de qualité, réalisé avec sérieux, précision et dans le respect des délais. Chaque projet est étudié avec attention afin de proposer des solutions adaptées aux besoins et aux exigences de nos partenaires.
Grâce à une équipe qualifiée et à des matériaux fiables, AMPIC s’engage à garantir des résultats durables et soignés.
                </p>
                <p>
                 N’hésitez pas à découvrir nos réalisations et à nous contacter pour toute information ou demande de devis.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-block mt-10 bg-[#1a1a1a] text-white px-10 py-4 font-semibold tracking-wide hover:bg-[#333333] transition-colors"
              >
                CONTACTEZ-NOUS
              </a>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-6">
              <img
                src={imgacuel}
                alt="Project 1"
                className="w-full aspect-[3/4] object-cover"
              />
              <img
                src={imgaceul2}
                alt="Project 2"
                className="w-full aspect-[3/4] object-cover mt-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 px-8 bg-[#1a1a1a] text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">[X]</p>
              <p className="text-sm text-gray-400 tracking-wide">
                Projets Réalisés
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">Salon</p>
              <p className="text-sm text-gray-400">Résidentiel</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">Chambre</p>
              <p className="text-sm text-gray-400">Confort</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">Bureaux</p>
              <p className="text-sm text-gray-400">Professionnel</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">Magasins</p>
              <p className="text-sm text-gray-400">Commercial</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-5xl font-bold text-[#1a1a1a] mb-20 text-center">
            Nos services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="overflow-hidden mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#666666] mb-4 leading-relaxed">
                  {service.description}
                </p>
                {service.link ? (
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-[#1a1a1a] font-semibold hover:gap-3 transition-all"
                  >
                    En savoir plus <ArrowRight size={18} />
                  </Link>
                ) : (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[#1a1a1a] font-semibold hover:gap-3 transition-all"
                  >
                    En savoir plus <ArrowRight size={18} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projets" className="py-32 px-8 bg-[#f8f8f8]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-5xl font-bold text-[#1a1a1a] mb-12 text-center">
            Nos projets
          </h2>

          {/* Filters */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {filters.map((f) => (
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

          {/* Grid */}
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

      {/* SIGNATURE QUOTE */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-4xl font-light text-[#1a1a1a] leading-relaxed italic">
            "Chaque espace mérite une finition parfaite…
            <br />
            AMPIC transforme vos idées en réalité."
          </p>
        </div>
      </section>

      {/* BLOG SECTION */}
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

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-8 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-5xl font-bold text-[#1a1a1a] mb-16 text-center">
            Contact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Info */}
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold text-[#999999] mb-2 tracking-wide">
                  TÉLÉPHONE
                </p>
                <a
                  href="tel:[TEL]"
                  className="text-2xl text-[#1a1a1a] hover:text-[#666666] transition-colors"
                >
                  [TEL]
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#999999] mb-2 tracking-wide">
                  EMAIL
                </p>
                <a
                  href="mailto:[EMAIL]"
                  className="text-2xl text-[#1a1a1a] hover:text-[#666666] transition-colors"
                >
                  [EMAIL]
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#999999] mb-2 tracking-wide">
                  ADRESSE
                </p>
                <p className="text-xl text-[#1a1a1a]">
                  [ADRESSE]
                  <br />
                  [VILLE]
                </p>
              </div>
              <div>
                <a
                  href="https://wa.me/[WHATSAPP]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 font-semibold hover:bg-[#20BA5A] transition-colors"
                >
                  <MessageCircle size={20} />
                  WhatsApp Direct
                </a>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nom complet"
                  className="w-full px-6 py-4 border border-gray-300 focus:border-[#1a1a1a] outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="w-full px-6 py-4 border border-gray-300 focus:border-[#1a1a1a] outline-none transition-colors"
                />
              </div>
              <div>
                <select className="w-full px-6 py-4 border border-gray-300 focus:border-[#1a1a1a] outline-none transition-colors text-[#666666]">
                  <option>Objet</option>
                  <option>Devis</option>
                  <option>Informations</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full px-6 py-4 border border-gray-300 focus:border-[#1a1a1a] outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#1a1a1a] text-white px-8 py-4 font-semibold tracking-wide hover:bg-[#333333] transition-colors"
              >
                ENVOYER
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
