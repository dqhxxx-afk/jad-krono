"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { site } from "../../data/site";

const steps = [
  {
    number: "01",
    title: "Watch details",
    copy: "Brand, model, reference, dated year and condition."
  },
  {
    number: "02",
    title: "Box, papers and photos",
    copy: "Include any box, papers, accessories and recent photos."
  },
  {
    number: "03",
    title: "Review",
    copy: "We review the details and get back to you."
  }
];

export default function SellPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">Sell</p>
          <h1>Sell Your Watch.</h1>
          <p>Send the watch details and recent photos for review.</p>
          <a
            className="btn gold"
            href={`${site.whatsapp}?text=Hello%20JAD%20KRONO%2C%20I%20would%20like%20to%20sell%20a%20watch.%0A%0ABrand%3A%0AModel%20%2F%20Reference%3A%0ADated%20Year%3A%0ACondition%3A%0ABox%20%26%20Papers%3A%0AExpected%20Price%3A`}
            target="_blank"
            rel="noreferrer"
          >
            Request a Valuation
          </a>
        </section>

        <section className="section sell-steps">
          {steps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
