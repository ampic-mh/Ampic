// src/hooks/useSeo.js
import { useEffect } from 'react';

export function useSeo({ title, description, canonical, ogImage, ogType = 'website' }) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper function to update or create meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Update Standard Meta Tags
    setMetaTag('name', 'description', description);

    // 4. Update Open Graph (Facebook/LinkedIn)
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    if (ogImage) setMetaTag('property', 'og:image', ogImage);
    if (canonical) setMetaTag('property', 'og:url', canonical);

    // 5. Update Twitter Card
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    if (ogImage) setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'twitter:card', 'summary_large_image');

    // 6. Update Canonical Link
    let link = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    } else if (link) {
      // If no canonical is provided but a tag exists, remove it to avoid confusion
      document.head.removeChild(link);
    }

  }, [title, description, canonical, ogImage, ogType]);
}