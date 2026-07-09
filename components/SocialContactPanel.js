import { site } from "../data/site";

export default function SocialContactPanel({ t }) {
  return (
    <div className="social-contact-panel v10-contact-panel">
      <div className="v10-contact-head">
        <p className="eyebrow">Connect</p>
        <h3>{t.nav.contact}</h3>
        <p>Direct enquiry channels for private watch sourcing, buying, selling and consignment.</p>
      </div>

      <div className="social-links-grid v10-social-grid">
        <a href={site.whatsapp} target="_blank">
          <span>WhatsApp</span>
          <strong>{site.phoneDisplay}</strong>
          <em>Primary enquiry channel</em>
        </a>

        <a href={site.instagram} target="_blank">
          <span>Instagram</span>
          <strong>@jadkrono</strong>
          <em>Latest updates and references</em>
        </a>

        <a href={site.facebook} target="_blank">
          <span>Facebook</span>
          <strong>JAD KRONO Page</strong>
          <em>Official Facebook page</em>
        </a>

        <a href={`mailto:${site.email}`}>
          <span>Email</span>
          <strong>{site.email}</strong>
          <em>For private enquiries</em>
        </a>
      </div>

      <div className="v10-showroom-card">
        <div>
          <span>Singapore</span>
          <strong>Private showroom by appointment</strong><p>Singapore location available for scheduled private viewings.</p>
        </div>
        <div className="v11-map-actions"><a href={site.googleMaps} target="_blank">View on Google Maps</a><a href={site.whatsapp} target="_blank">Book Private Viewing</a></div>
      </div>
    </div>
  );
}
