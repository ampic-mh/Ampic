/**
 * Centralized smooth scroll to a section by ID.
 * Use this for all in-page section navigation (no href needed).
 * @param {string} sectionId - Section ID (with or without leading "#")
 * @param {object} options - Optional: { offset?: number }
 */
export function scrollToSection(sectionId, options = {}) {
  const { offset = 70 } = options;
  if (!sectionId) return;
  const id = typeof sectionId === "string" && sectionId.startsWith("#")
    ? sectionId.slice(1)
    : sectionId;
  const element = document.getElementById(id);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
