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
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h1>{t.services.title}</h1>
        </section>

        <section className="services-section compact">
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
