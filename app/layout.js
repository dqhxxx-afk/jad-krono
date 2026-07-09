import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://jadkrono.com"),
  title: "JAD KRONO | Private Luxury Watch Dealer Singapore",
  description: "JAD KRONO is a Singapore-based private luxury watch dealer specializing in Rolex, Patek Philippe, Audemars Piguet, Richard Mille, Tudor, Hublot and exceptional collector timepieces.",
  keywords: ["JAD KRONO","private watch dealer Singapore","luxury watch dealer Singapore","Rolex Singapore","Patek Philippe Singapore","Richard Mille Singapore","sell watch Singapore","consign watch Singapore"],
  openGraph: {title:"JAD KRONO | Private Luxury Watch Dealer Singapore", description:"Curated timepieces for serious collectors.", type:"website", url:"https://jadkrono.com", images:["/assets/jad-krono-logo.png"]}
};

export default function RootLayout({ children }) {
  const schema = {"@context":"https://schema.org","@type":"JewelryStore",name:"JAD KRONO",url:"https://jadkrono.com",areaServed:"Singapore",telephone:"+65 8699 6868",description:"Private luxury watch dealer in Singapore focused on buying, selling, consigning and sourcing important timepieces.",sameAs:["https://instagram.com/jadkrono","https://facebook.com/jadkrono"]};
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />{children}</body></html>;
}
