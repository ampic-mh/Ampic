import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function meta() {
  return [
    { title: "Page introuvable | AMPIC" },
    { name: "description", content: "La page demandée n'existe pas. Retournez à l'accueil AMPIC – Faux plafond, cloisons et habillage au Maroc." },
    { name: "robots", content: "noindex, follow" },
  ];
}

export default function NotFoundPage() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#0d0d0d] flex items-center justify-center">
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(180, 83, 9, 0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(120, 53, 15, 0.08) 0%, transparent 50%)",
        }}
      />
      {/* Fine grid / texture for depth */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Decorative line */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-600/80 to-transparent" />
        </div>

        {/* 404 number - large, serif, gold accent */}
        <p
          className="text-[clamp(6rem,18vw,12rem)] font-serif leading-none text-white/5 select-none tracking-tighter"
          aria-hidden
        >
          404
        </p>

        <div className="-mt-[clamp(4rem,12vw,8rem)] space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-light tracking-tight">
            Page introuvable
          </h1>
          <p className="text-gray-400 font-light text-lg max-w-md mx-auto leading-relaxed">
            La page que vous recherchez n'existe pas ou a été déplacée.
            Nous vous invitons à revenir à l'accueil ou à explorer nos services.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            state={{ scrollTo: "hero" }}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-medium tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
          >
            Retour à l'accueil
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            to="/"
            state={{ scrollTo: "services" }}
            className="inline-flex items-center px-6 py-4 border border-white/20 text-white/90 hover:border-amber-600/60 hover:text-amber-400 font-light tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
          >
            Nos services
          </Link>
        </div>

        {/* Optional: contact hint */}
        <p className="mt-16 text-sm text-gray-500 font-light">
          Besoin d'aide ?{" "}
          <Link
            to="/"
            state={{ scrollTo: "contact" }}
            className="text-amber-500/90 hover:text-amber-400 transition-colors underline underline-offset-2"
          >
            Contactez-nous
          </Link>
        </p>

        <div className="flex justify-center mt-10">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
