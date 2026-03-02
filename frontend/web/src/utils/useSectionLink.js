import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router";
import { scrollToSection } from "./scrollToSection";

const HOME_PATH = "/";

/**
 * Centralized hook for section links: smooth scroll on home, navigate to home + scroll otherwise.
 * Use this instead of href="#section" so logic stays in one place.
 * @param {object} options - Optional: { onAfterScroll?: () => void } (e.g. close mobile menu)
 * @returns { (sectionId: string) => void }
 */
export function useSectionLink(options = {}) {
  const { onAfterScroll } = options;
  const location = useLocation();
  const navigate = useNavigate();

  return useCallback(
    (sectionId) => {
      const id = sectionId?.replace(/^#/, "") || sectionId;
      if (!id) return;

      if (location.pathname === HOME_PATH) {
        scrollToSection(id);
        onAfterScroll?.();
      } else {
        navigate(HOME_PATH, { state: { scrollTo: id } });
        onAfterScroll?.();
      }
    },
    [location.pathname, navigate, onAfterScroll]
  );
}
