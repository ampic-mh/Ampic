
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionSeparator from "@/components/SectionSeparator";
import { useSectionLink } from "@/utils/useSectionLink";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleSectionClick = useSectionLink();
  const faqs = [
    {
      question: "Quels types de projets réalisez-vous ?",
      answer:
        "Nous intervenons sur tous types de projets : établissements de santé (hôpitaux, cliniques), espaces commerciaux (boutiques, restaurants), bureaux professionnels, et résidences privées. Notre expertise couvre l'aménagement de plafonds BA13, faux-plafonds, isolation acoustique et thermique, ainsi que les finitions premium.",
    },
    {
      question: "Quel est le délai moyen pour réaliser un projet ?",
      answer:
        "Le délai dépend de la complexité et de l'envergure du projet. Pour un espace de bureaux standard, comptez 2 à 3 semaines. Pour des projets plus importants comme des établissements de santé, le délai peut s'étendre de 1 à 3 mois. Nous établissons toujours un calendrier précis lors du devis initial et nous engageons à respecter les échéances.",
    },
    {
      question: "Proposez-vous un devis gratuit ?",
      answer:
        "Absolument ! Nous offrons un devis détaillé et gratuit sans aucun engagement. Notre équipe se déplace sur site pour évaluer vos besoins, prendre les mesures précises et vous proposer les meilleures solutions adaptées à votre budget. Le devis vous sera remis sous 48 à 72 heures.",
    },
    {
      question: "Utilisez-vous des matériaux de qualité ?",
      answer:
        "La qualité est au cœur de notre engagement. Nous travaillons exclusivement avec des matériaux certifiés et des marques reconnues dans le secteur. Nos plaques BA13, rails, isolants et finitions répondent aux normes européennes les plus strictes. Nous garantissons la durabilité et la performance de tous nos aménagements.",
    },
    {
      question: "Assurez-vous le suivi après la fin des travaux ?",
      answer:
        "Oui, nous offrons un service après-vente complet. Tous nos travaux sont garantis et nous assurons un suivi régulier. En cas de besoin d'ajustements ou de retouches, notre équipe intervient rapidement. Nous restons à votre disposition même après la livraison du projet pour toute question ou demande d'entretien.",
    },
    {
      question: "Travaillez-vous avec des architectes et designers ?",
      answer:
        "Nous collaborons régulièrement avec des architectes, designers d'intérieur et maîtres d'œuvre. Notre expérience nous permet de traduire leurs visions créatives en réalisations concrètes et techniques. Nous sommes habitués à travailler en équipe sur des projets complexes nécessitant une coordination parfaite.",
    },
    {
      question: "Intervenez-vous uniquement sur Casablanca ?",
      answer:
        "Bien que notre siège soit basé à Casablanca, nous intervenons dans toute la région de Casablanca-Settat et au-delà selon la nature du projet. Pour des projets d'envergure, nous pouvons nous déplacer partout au Maroc. N'hésitez pas à nous contacter pour discuter de votre localisation.",
    },
    {
      question: "Quelles sont vos certifications et qualifications ?",
      answer:
        "Notre équipe est composée de professionnels certifiés avec plus de 15 ans d'expérience dans le secteur. Nous sommes en conformité avec toutes les réglementations marocaines en matière de construction et de sécurité. Nos installations respectent les normes anti-incendie, acoustiques et thermiques requises pour chaque type d'établissement.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 lg:py-32 px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
            Questions Fréquentes
            <p className="mt-4 text-lg sm:text-xl text-black max-w-3xl mx-auto font-medium leading-relaxed">
            Vous avez des questions ? <br />
            <span className="italic text-gray-500">Nous avons les réponses.</span>
          </p>
          </h2>
          <SectionSeparator className="mt-8" />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-6 p-6 lg:p-8 text-left group"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg lg:text-xl font-light text-[#1a1a1a] group-hover:text-gray-600 transition-colors duration-300 pr-4">
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 group-hover:bg-[#1a1a1a] transition-all duration-300 ${
                    openIndex === index ? "bg-[#1a1a1a]" : ""
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-white" />
                  ) : (
                    <Plus
                      className={`w-4 h-4 transition-colors duration-300 ${
                        openIndex === index
                          ? "text-white"
                          : "text-gray-600 group-hover:text-white"
                      }`}
                    />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Vous avez une autre question ?
          </p>

            <button
              type="button"
              onClick={() => handleSectionClick("contact")}
              className="inline-block px-10 py-4 bg-[#1a1a1a] text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contactez-nous
            </button>
        </div>
      </div>
    </section>
  );
}