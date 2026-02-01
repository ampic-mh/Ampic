# SEO – Mise en production

Pour que le site soit bien référencé sur Google :

1. **URL du site**  
   Définir la variable d’environnement en production :
   ```bash
   NEXT_PUBLIC_SITE_URL=https://www.ampic.ma
   ```
   (Remplacez par votre domaine.)

2. **Fichiers `public/`**  
   - **robots.txt** et **sitemap.xml** utilisent actuellement `https://www.ampic.ma`.  
   - Si votre domaine est différent, remplacez cette URL dans les deux fichiers.

3. **Image Open Graph**  
   Ajouter une image `og-image.jpg` (recommandé 1200×630 px) dans `public/` pour l’aperçu sur les réseaux sociaux. Sinon, la meta `og:image` sera vide tant que `NEXT_PUBLIC_SITE_URL` n’est pas défini.

4. **Google Search Console**  
   - Aller sur [Google Search Console](https://search.google.com/search-console).  
   - Ajouter la propriété (votre domaine).  
   - Soumettre l’URL du sitemap : `https://www.ampic.ma/sitemap.xml`.

5. **Indexation**  
   Les pages sont en `index, follow`. Le contenu est en français (`lang="fr"`), avec meta par page (titre, description, canonical, Open Graph, Twitter Card) et données structurées JSON-LD (Organization, WebSite).
