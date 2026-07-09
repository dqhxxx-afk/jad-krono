"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";

export default function TermsPage() {
  const { t } = useLanguage();
  return (
    <>
      <Header t={t} />
      <main className="page-shell legal-page">
        <section className="page-hero">
          <p className="eyebrow">Terms & Conditions</p>
          <h1>Website terms.</h1>
        </section>
        <section className="legal-copy">
          <h2>Information Only</h2>
          <p>Information on this website is provided for general reference and enquiry purposes only.</p>
          <h2>Availability</h2>
          <p>All watches are subject to availability, prior sale or reservation. Website information may not always reflect the latest inventory status.</p>
          <h2>Pricing</h2>
          <p>Prices, availability and conditions may change without notice due to market movement or inventory updates.</p>
          <h2>Product Information</h2>
          <p>Descriptions, specifications and images are provided in good faith. Clients are encouraged to inspect watches directly or request further details before purchase.</p>
          <h2>Appointments</h2>
          <p>Private viewings are arranged by appointment only in Singapore.</p>
          <h2>Independent Dealer</h2>
          <p>JAD KRONO is an independent luxury watch dealer and is not affiliated with any watch manufacturer or authorised retailer. All trademarks remain the property of their respective owners.</p>
          <h2>Governing Law</h2>
          <p>These terms are governed by the laws of Singapore.</p>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
