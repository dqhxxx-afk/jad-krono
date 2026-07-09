import { products } from "../data/site";

export default function sitemap() {
  const baseUrl = "https://jadkrono.com";
  const staticRoutes = [
    "",
    "/collection",
    "/brands",
    "/services",
    "/sell-your-watch",
    "/market-insights",
    "/about",
    "/contact"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date()
    })),
    ...products.map((product) => ({
      url: `${baseUrl}/collection/${product.id}`,
      lastModified: new Date()
    }))
  ];
}
