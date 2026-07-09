"use client";

const t = {
  nav: {
    home: "Home",
    collection: "Collection",
    brands: "Brands",
    services: "Services",
    sell: "Sell",
    insights: "Insights",
    about: "About",
    contact: "Contact"
  },
  hero: {
    eyebrow: "Singapore Private Watch Dealer",
    title: "Carefully selected. Quietly sourced.",
    copy: "Independent Singapore private watch dealer specialising in modern and collectible luxury timepieces. Viewing by appointment only.",
    primary: "View Collection"
  },
  collection: {
    eyebrow: "Collection",
    title: "Selected references.",
    copy: "Availability changes quickly. Contact us for current details.",
    search: "Search brand, model or reference",
    all: "All",
    enquire: "Enquire",
    details: "Details",
    noResults: "No watches matched your search."
  },
  services: {
    eyebrow: "Services",
    title: "Private, precise, discreet."
  },
  about: {
    eyebrow: "About",
    title: "A private dealer for collectors.",
    copy: "JAD KRONO is a Singapore-based private watch dealer specialising in carefully selected luxury timepieces. We focus on authenticity, discretion and long-term relationships."
  },
  contact: {
    eyebrow: "Contact",
    title: "By appointment only.",
    copy: "For buying, selling, sourcing or consignment enquiries, contact JAD KRONO directly.",
    button: "Book Private Viewing"
  },
  footer: {
    line: "Singapore • Private Viewings by Appointment",
    disclaimer: "JAD KRONO is an independent Singapore private watch dealer and is not affiliated with or endorsed by any watch manufacturer. All trademarks, brand names and model names remain the property of their respective owners and are used solely for identification purposes."
  }
};

export function useLanguage() {
  return { lang: "en", t };
}
