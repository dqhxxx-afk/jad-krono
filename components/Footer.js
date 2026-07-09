import { site } from "../data/site";

export default function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div>
        <img src="/assets/jad-krono-logo.png" alt="JAD KRONO" />
        <p>{t.footer.line}</p>
      </div>
      <div>
        <strong>Explore</strong>
        <a href="/collection">{t.nav.collection}</a>
        <a href="/brands">{t.nav.brands}</a>
        <a href="/services">{t.nav.services}</a>
        <a href="/market-insights">{t.nav.insights}</a>
      </div>
      <div>
        <strong>{t.nav.contact}</strong>
        <a href={site.whatsapp} target="_blank">WhatsApp</a>
        <a href={site.instagram} target="_blank">Instagram</a>
        <a href={site.facebook} target="_blank">Facebook</a>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </div>
      <p className="disclaimer">{t.footer.disclaimer}</p>
    </footer>
  );
}
