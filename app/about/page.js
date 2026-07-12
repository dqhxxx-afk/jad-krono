"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const approach = [
  {
    number: "01",
    title: "Details",
    copy: "Reference, condition, set and availability are stated clearly."
  },
  {
    number: "02",
    title: "Contact",
    copy: "Enquiries and appointments are handled directly by JAD KRONO."
  },
  {
    number: "03",
    title: "Next steps",
    copy: "We confirm what happens next after reviewing the details."
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
            JAD KRONO is an independent watch dealer based in Singapore. We work directly with clients buying, selling and sourcing modern and collectible watches.
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
