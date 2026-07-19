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
  if (brand.includes("mb&f") || brand.includes("mb and f") || brand.includes("m.a.d") || brand.includes("mad editions")) return "mb-and-f";

  return slugify(watch.brand || "other");
}

export function brandLabel(value = "") {
  const labels = {
    all: "All Watches",
    rolex: "Rolex",
    patek: "Patek Philippe",
    hublot: "Hublot",
    "franck-muller": "Franck Muller",
    tudor: "Tudor",
    "mb-and-f": "MB&F"
  };

  return labels[value] || String(value).toUpperCase();
}

export function sameWatchText(first = "", second = "") {
  const normalize = (value) => String(value).toLowerCase().replace(/[^a-z0-9]/g, "");
  return Boolean(first && second && normalize(first) === normalize(second));
}
