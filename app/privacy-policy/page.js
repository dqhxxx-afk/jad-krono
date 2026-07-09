"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();
  return (
    <>
      <Header t={t} />
      <main className="page-shell legal-page">
        <section className="page-hero">
          <p className="eyebrow">Privacy Policy</p>
          <h1>Client discretion matters.</h1>
          <p>We respect the privacy and discretion of every client.</p>
        </section>
        <section className="legal-copy">
          <h2>Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide, including your name, contact details and information shared when contacting us by WhatsApp, email or through our website.</p>
          <h2>How We Use Information</h2>
          <p>We use information to respond to enquiries, arrange appointments, discuss watches and transactions, and improve our client experience.</p>
          <h2>Confidentiality</h2>
          <p>Information shared with us during enquiries or transactions will be treated confidentially and used only for legitimate business purposes.</p>
          <h2>Sharing</h2>
          <p>We do not sell or rent personal information. Information may be shared only where required by law or where necessary to complete a transaction.</p>
          <h2>Cookies</h2>
          <p>This website may use essential cookies or basic analytics to improve functionality and user experience.</p>
          <h2>Contact</h2>
          <p>For privacy enquiries, please contact JAD KRONO directly.</p>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
