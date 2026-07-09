"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";

export default function AboutPage() {
  const { lang, setLang, t } = useLanguage();

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">JAD KRONO</p>
          <h1>{lang === "en" ? "Private watch dealing for serious collectors." : "Private watch dealer dành cho nhà sưu tầm nghiêm túc."}</h1>
          <p>
            {lang === "en"
              ? "JAD KRONO is a Singapore-based luxury watch specialist dedicated to sourcing, buying, selling and consigning exceptional timepieces with discretion, clarity and market awareness."
              : "JAD KRONO là chuyên gia đồng hồ cao cấp tại Singapore, chuyên sourcing, mua bán và ký gửi các mẫu đồng hồ nổi bật với sự kín đáo, rõ ràng và hiểu biết thị trường."}
          </p>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
