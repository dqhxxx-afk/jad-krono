"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="page-shell about-minimal">
        <section className="page-hero">
          <h1>About.</h1>
          <p>
            Based in Singapore, we buy, sell and source modern and collectible
            watches. Viewings are by appointment.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
