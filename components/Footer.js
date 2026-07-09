import { socials } from "../data/products";

export default function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div>
        <img src="/assets/jad-krono-logo.png" alt="JAD KRONO logo" />
        <p>{t.footerLine}</p>
      </div>
      <div>
        <strong>Quick Links</strong>
        <a href="/collection">{t.nav.collection}</a>
        <a href="/services">{t.nav.services}</a>
        <a href="/sell-your-watch">{t.nav.sell}</a>
        <a href="/market-insights">{t.nav.insights}</a>
      </div>
      <div>
        <strong>{t.nav.contact}</strong>
        <a href={socials.whatsapp} target="_blank">WhatsApp</a>
        <a href={socials.instagram} target="_blank">Instagram</a>
        <a href={socials.facebook} target="_blank">Facebook</a>
        <a href={`mailto:${socials.email}`}>Email</a>
        <span>Singapore</span>
      </div>
      <p className="disclaimer">{t.disclaimer}</p>
    </footer>
  );
}
