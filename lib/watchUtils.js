export function slugify(value = "") {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getWatchId(watch = {}) {
  if (watch.id) return slugify(watch.id);

  const source = [watch.brand, watch.model, watch.reference]
    .filter(Boolean)
    .join(" ");

  return slugify(source || "watch");
}

export function getWatchCategory(watch = {}) {
  if (watch.category) return slugify(watch.category);

  const brand = String(watch.brand || "").toLowerCase();

  if (brand.includes("patek")) return "patek";
  if (brand.includes("audemars")) return "ap";
  if (brand.includes("richard")) return "rm";
  if (brand.includes("franck")) return "franck-muller";

  return slugify(watch.brand || "other");
}

export function brandLabel(value = "") {
  const labels = {
    all: "All Watches",
    rolex: "Rolex",
    patek: "Patek Philippe",
    ap: "Audemars Piguet",
    cartier: "Cartier",
    tudor: "Tudor",
    iwc: "IWC",
    hublot: "Hublot",
    breitling: "Breitling",
    "franck-muller": "Franck Muller",
    chopard: "Chopard",
    sinn: "Sinn"
  };

  return labels[value] || String(value).toUpperCase();
}
