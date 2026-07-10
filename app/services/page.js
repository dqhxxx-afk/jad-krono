"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";
import { services } from "../../data/site";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header t={t} />
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">Services</p>
          <h1>Private services for collectors.</h1>
          <p>Personal assistance for buying, selling, sourcing, consignment and trade enquiries in Singapore.</p>
        </section>

        <section className="services-section page-services-final">
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
      <Footer t={t} />
    </>
  );
}
