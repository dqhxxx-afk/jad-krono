import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://jadkrono.com"),
  title: "JAD KRONO | Independent Singapore Private Watch Dealer",
  description: "Independent Singapore private watch dealer specialising in modern and collectible luxury timepieces. Private viewings by appointment only.",
  keywords: [
    "JAD KRONO",
    "private watch dealer Singapore",
    "luxury watches Singapore",
    "Rolex Singapore",
    "Patek Philippe Singapore",
    "sell watch Singapore"
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "JAD KRONO | Independent Singapore Private Watch Dealer",
    description: "Independent Singapore private watch dealer specialising in modern and collectible luxury timepieces. Private viewings by appointment only.",
    type: "website",
    url: "https://jadkrono.com",
    images: ["/icon.png"]
  }
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: "JAD KRONO",
    url: "https://jadkrono.com",
    areaServed: "Singapore",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Singapore",
      addressCountry: "SG"
    },
    hasMap: "https://maps.app.goo.gl/CGgdPNjevd54Gdrm9?g_st=ic",
    sameAs: [
      "https://instagram.com/jadkrono",
      "https://www.facebook.com/share/1BjRy9MPKg/?mibextid=wwXIfr"
    ]
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
