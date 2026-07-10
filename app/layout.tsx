import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "JAD KRONO | Modern & Collectible Watches Singapore",
    template: "%s | JAD KRONO",
  },
  description:
    "JAD KRONO is a Singapore private watch dealer offering carefully selected modern and collectible timepieces, sourcing, consignment and private viewings.",
  keywords: [
    "luxury watches Singapore",
    "private watch dealer Singapore",
    "collectible watches",
    "watch sourcing Singapore",
    "JAD KRONO",
  ],
  openGraph: {
    title: "JAD KRONO | Modern & Collectible Watches",
    description:
      "Carefully selected timepieces, clear information and discreet service in Singapore.",
    type: "website",
    locale: "en_SG",
    siteName: "JAD KRONO",
  },
  twitter: {
    card: "summary_large_image",
    title: "JAD KRONO | Modern & Collectible Watches",
    description: "Private watch sourcing, sales and consignment in Singapore.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090909",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
