import Header from "../components/Header";
import Footer from "../components/Footer";

const t = {
  nav: {
    collection: "Collection",
    services: "Services",
    about: "About",
    contact: "Contact"
  },
  footer: {
    line: "Singapore • By Appointment Only",
    disclaimer: "JAD KRONO is an independent watch dealer. Brand names are trademarks of their respective owners."
  }
};

export default function NotFound() {
  return (
    <>
      <Header t={t} />
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">JAD KRONO</p>
          <h1>Page not found.</h1>
          <a className="btn gold" href="/">Return Home</a>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
