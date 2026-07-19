"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const approach = [
  {
    number: "01",
    title: "Listings",
    copy: "Each listing includes the reference, condition and availability."
  },
  {
    number: "02",
    title: "Viewings",
    copy: "Viewings are arranged by appointment."
  },
  {
    number: "03",
    title: "Transactions",
    copy: "Payment, collection and delivery terms are confirmed before completion."
  }
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="page-shell">
        <section className="page-hero single-page-hero">
          <h1>Independent watch dealer.</h1>
          <p>We buy, sell and source modern and collectible watches.</p>
        </section>

        <section className="section guide-section approach-cards">
          {approach.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
