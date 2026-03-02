/**
 * SEO configuration for meta tags, Open Graph, and structured data.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.ampic.ma).
 */
const siteUrl =
  (typeof import.meta !== "undefined" && (import.meta as unknown as { env?: { NEXT_PUBLIC_SITE_URL?: string } }).env?.NEXT_PUBLIC_SITE_URL) ||
  "";

export const seoConfig = {
  siteUrl: siteUrl.replace(/\/$/, ""),
  defaultTitle: "AMPIC | Faux Plafond, Cloison & Habillage au Maroc",
  defaultDescription:
    "AMPIC – Experts en faux plafond, cloisons sèches et habillage mural au Maroc. Devis gratuit, chantiers soignés, délais respectés.",
  defaultOgImage: "/assets/shared/ampic-logo.webp",
  twitterHandle: "",
  locale: "fr_MA",
  localeAlternates: ["fr_FR"] as string[],
} as const;

export function getCanonicalUrl(path = "") {
  const base = seoConfig.siteUrl;
  if (!base) return null;
  const pathNorm = path.startsWith("/") ? path : `/${path}`;
  return `${base}${pathNorm === "/" ? "" : pathNorm}`;
}

export function getFullOgImageUrl(path = seoConfig.defaultOgImage) {
  if (!seoConfig.siteUrl || path.startsWith("http")) return path;
  return `${seoConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}