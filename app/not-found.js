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
    line: "Singapore • Private Viewings by Appointment",
    disclaimer: "JAD KRONO is an independent Singapore private watch dealer and is not affiliated with or endorsed by any watch manufacturer. All trademarks, brand names and model names remain the property of their respective owners and are used solely for identification purposes."
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
