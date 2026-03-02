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
      phone2: string;
      phone2Link: string;
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

  const phoneRaw = "+212 666 771 912";
  const email = "Ampic.mh@gmail.com";
  
  export const siteConfig: SiteConfig = {
    name: "AMPIC",
    description: "Experts en Faux Plafond, Cloison et Habillage au Maroc.",
    dateCreation: 2019,
    projectsCount: 150,
    contact: {
      phone: phoneRaw.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5"),
      phoneRaw: phoneRaw, 
      phoneLink: "tel:" + phoneRaw,
      phone2: "+212 521 235 759",
      phone2Link: "tel:+212521235759",
      whatsapp: "https://wa.me/" + phoneRaw,
      email: email,
      emailLink: "mailto:" + email,
      address: "Lot Noamane imm 9 Etage N°9 bureau N°913 Bouskoura , Casablanca ,Maroc",
      mapLink: "https://maps.google.com/?q=Lot+Noamane+imm+9+Etage+N%C2%B09+bureau+N%C2%B0913+Bouskoura,+Casablanca,+Maroc"
    },
  
    socials: {
      facebook: "https://www.facebook.com/share/1BnEVtdk8Z/",
      instagram: "https://www.instagram.com/ampic.sarl?igsh=cndheTJnOXh0bjh2",
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