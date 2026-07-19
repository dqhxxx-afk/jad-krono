"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { services } from "../../data/site";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="page-shell">
        <section className="page-hero single-page-hero">
          <h1>Services.</h1>
          <p>Viewings, sourcing, selling, consignment and trade enquiries.</p>
        </section>

        <section className="section services-page">
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
