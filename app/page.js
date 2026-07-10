"use client";

import { useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WatchCard from "../components/WatchCard";
import { useWatches } from "../components/useWatches";
import { services, site } from "../data/site";
import { getWatchId } from "../lib/watchUtils";

export default function Home() {
  const { watches } = useWatches();
  const featured = useMemo(() => watches.filter((watch) => watch.featured).slice(0, 6), [watches]);

  return (
    <>
      <a className="wa-float" href={`${site.whatsapp}?text=Hello%20JAD%20KRONO%2C%20I%20would%20like%20to%20make%20an%20enquiry.`} target="_blank" rel="noreferrer">WhatsApp</a>
      <Header />
      <main id="main-content">
        <section className="hero">
          <div className="hero-orbit" aria-hidden="true" />
          <div className="hero-content">
            <h1>Modern and collectible timepieces.</h1>
            <p>Private viewings by appointment in Singapore.</p>
            <a href="/collection" className="btn gold">View Collection</a>
          </div>
        </section>

        <section className="section collection-preview">
          <div className="section-heading">
            <p className="eyebrow">Collection</p>
            <h2>Selected references.</h2>
            <p>Inventory changes regularly. Please contact us for current availability.</p>
          </div>
          <div className="watch-grid">
            {featured.map((watch) => <WatchCard key={getWatchId(watch)} product={watch} />)}
          </div>
          <a className="text-link section-link" href="/collection">View all watches</a>
        </section>

        <section className="sourcing-band">
          <div><p className="eyebrow">Private Sourcing</p><h2>Looking for a specific reference?</h2><p>We search for specific models, years, configurations and condition through trusted networks.</p></div>
          <a className="btn outline" href={`${site.whatsapp}?text=Hello%20JAD%20KRONO%2C%20I%20would%20like%20to%20request%20private%20sourcing.`} target="_blank" rel="noreferrer">Request Sourcing</a>
        </section>

        <section className="section services-home">
          <div className="section-heading"><p className="eyebrow">Services</p><h2>Private services for collectors.</h2></div>
          <div className="service-grid">
            {services.map((service) => <article key={service.title}><h3>{service.title}</h3><p>{service.copy}</p></article>)}
          </div>
        </section>

        <section className="section about-home">
          <div><p className="eyebrow">About</p><h2>A private dealer for collectors.</h2></div>
          <p>Based in Singapore. Built on discretion, authenticity and long-term relationships with collectors.</p>
        </section>

        <section className="section contact-home">
          <div><p className="eyebrow">Contact</p><h2>Private enquiries.</h2><p>Contact JAD KRONO about inventory, sourcing, consignment, trade or private viewing appointments.</p></div>
          <div className="contact-groups">
            <div className="contact-group"><span>Enquiry</span><div><a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href={`mailto:${site.email}`}>Email</a></div></div>
            <div className="contact-group"><span>Follow</span><div><a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a><a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a></div></div>
            <div className="contact-group"><span>Visit</span><div><a href={site.googleMaps} target="_blank" rel="noreferrer">Google Maps</a></div></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
