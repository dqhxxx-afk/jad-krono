import Header from "../components/Header";
import Footer from "../components/Footer";
import { t } from "../data/translations";

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
