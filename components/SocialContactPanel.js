import { site } from "../data/site";

export default function SocialContactPanel({ t }) {
  return (
    <div className="social-contact-panel">
      <div>
        <p className="eyebrow">Connect</p>
        <h3>{t.nav.contact}</h3>
        <p>Direct enquiry channels for private watch sourcing, buying, selling and consignment.</p>
      </div>
      <div className="social-links-grid">
        <a href={site.whatsapp} target="_blank">
          <span>WhatsApp</span>
          <strong>{site.phoneDisplay}</strong>
        </a>
        <a href={site.instagram} target="_blank">
          <span>Instagram</span>
          <strong>@jadkrono</strong>
        </a>
        <a href={site.facebook} target="_blank">
          <span>Facebook</span>
          <strong>JAD KRONO Page</strong>
        </a>
        <a href={`mailto:${site.email}`}>
          <span>Email</span>
          <strong>{site.email}</strong>
        </a>
      </div>
    </div>
  );
}
