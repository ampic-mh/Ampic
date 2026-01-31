export interface NavItem {
    name: string;
    href: string;
  }
  
  export interface SiteConfig {
    name: string;
    description: string;
    dateCreation: number;
    projectsCount: number;
    contact: {
      phone: string;
      phoneRaw: string;
      phoneLink: string;
      whatsapp: string;
      email: string;
      emailLink: string;
      address: string;
      mapLink: string;
    };
    socials: {
      facebook: string;
      instagram: string;
      linkedin: string;
    };
    navItems: NavItem[];
  }

  const phoneRaw = "+212600000000";
  const email = "ampic@gmail.com";
  
  export const siteConfig: SiteConfig = {
    name: "AMPIC",
    description: "Experts en Faux Plafond, Cloison et Habillage au Maroc.",
    dateCreation: 2019,
    projectsCount: 150,
    contact: {
      phone: phoneRaw.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5"),
      phoneRaw: phoneRaw, 
      phoneLink: "tel:" + phoneRaw,
      whatsapp: "https://wa.me/" + phoneRaw,
      email: email,
      emailLink: "mailto:" + email,
      address: "123 Bd Zerktouni, Casablanca, Maroc",
      mapLink: "https://maps.google.com/?q=123 Bd Zerktouni, Casablanca, Maroc" 
    },
  
    socials: {
      facebook: "https://facebook.com/",
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
    },
  
    navItems: [
      { name: "À propos", href: "#a-propos" },
      { name: "Nos Valeurs", href: "#valeurs" },
      { name: "Nos services", href: "#services" },
      { name: "Nos savoir-faire", href: "#projets" },
      { name: "FAQ", href: "#faq" },
      { name: "Contact", href: "#contact" },
    ]
  };