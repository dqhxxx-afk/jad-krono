import { products } from "../data/site";

export default function sitemap() {
  const baseUrl = "https://jadkrono.com";
  const routes = ["", "/collection", "/services", "/about", "/contact", "/sell-your-watch"];

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date()
    })),
    ...products.map((product) => ({
      url: `${baseUrl}/collection/${product.id}`,
      lastModified: new Date()
    }))
  ];
}
