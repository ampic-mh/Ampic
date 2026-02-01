import { getCanonicalUrl, getFullOgImageUrl, seoConfig } from "@/config/seo";

export { default } from "./home/page";

const title = "AMPIC | Faux Plafond, Cloison & Habillage au Maroc";
const description =
  "AMPIC – Experts en faux plafond, cloisons sèches et habillage mural au Maroc. Devis gratuit, chantiers soignés, délais respectés.";

/** Section IDs and labels for JSON-LD (helps Google index home page sections). */
const HOME_SECTIONS = [
  { id: "hero", name: "Accueil" },
  { id: "a-propos", name: "À propos de nous", urlPath: "/a-propos" },
  { id: "valeurs", name: "Nos Valeurs" },
  { id: "services", name: "Nos services" },
  { id: "projets", name: "Nos savoir-faire" },
  { id: "faq", name: "FAQ" },
  { id: "contact", name: "Contact" },
];

export function meta() {
  const canonical = getCanonicalUrl("/");
  const ogImage = getFullOgImageUrl();
  const base = canonical || seoConfig.siteUrl;

  const webPageSectionsLd =
    base &&
    ({
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: base,
      name: title,
      description,
      mainEntity: {
        "@type": "ItemList",
        name: "Sections de la page d'accueil",
        itemListElement: HOME_SECTIONS.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.name,
          url: s.urlPath ? `${base}${s.urlPath}` : `${base}/#${s.id}`,
        })),
      },
    });

  return [
    { title },
    { name: "description", content: description },
    ...(canonical ? [{ tagName: "link", rel: "canonical", href: canonical }] : []),
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: canonical || seoConfig.siteUrl },
    ...(ogImage ? [{ property: "og:image", content: ogImage }] : []),
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    ...(webPageSectionsLd ? [{ "script:ld+json": webPageSectionsLd }] : []),
  ];
}
