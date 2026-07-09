import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://jadkrono.com"),
  title: "JAD KRONO | Singapore Luxury Watch Dealer",
  description:
    "JAD KRONO is a Singapore-based private luxury watch dealer specializing in Rolex, Patek Philippe, Audemars Piguet, Richard Mille, Tudor, Hublot and exceptional timepieces.",
  keywords: [
    "JAD KRONO",
    "Singapore luxury watch dealer",
    "Rolex Singapore",
    "Patek Philippe Singapore",
    "Sell watch Singapore",
    "Buy Rolex Singapore",
    "Luxury watches Singapore"
  ],
  openGraph: {
    title: "JAD KRONO | Singapore Luxury Watch Dealer",
    description:
      "Curated timepieces. Trusted relationships. Appointment-only luxury watch specialist in Singapore.",
    type: "website",
    images: ["/assets/jad-krono-logo.png"]
  }
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: "JAD KRONO",
    url: "https://jadkrono.com",
    areaServed: "Singapore",
    telephone: "+65 8699 6868",
    description:
      "Singapore-based private luxury watch dealer specializing in buying, selling, consigning and sourcing exceptional timepieces.",
    sameAs: ["https://instagram.com/jadkrono", "https://facebook.com/jadkrono"]
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
      </body>
    </html>
  );
}
