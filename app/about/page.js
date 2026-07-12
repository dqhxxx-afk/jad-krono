"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const approach = [
  {
    number: "01",
    title: "Listings",
    copy: "Each listing shows the reference, condition, set and availability."
  },
  {
    number: "02",
    title: "Appointments",
    copy: "Viewings are arranged directly with JAD KRONO."
  },
  {
    number: "03",
    title: "Transactions",
    copy: "Terms are confirmed before payment, collection or delivery."
  }
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">About</p>
          <h1>About JAD KRONO.</h1>
          <p>
            JAD KRONO is an independent watch dealer in Singapore. We deal in modern and collectible watches and work directly with every client.
          </p>
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
