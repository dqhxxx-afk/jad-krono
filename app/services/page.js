"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { services } from "../../data/site";
export default function ServicesPage(){return <><Header/><main id="main-content" className="page-shell"><section className="page-hero"><p className="eyebrow">Services</p><h1>Private services for collectors.</h1><p>Buying, selling, sourcing, consignment and selected trade enquiries in Singapore.</p></section><section className="section services-page"><div className="service-grid">{services.map(s=><article key={s.title}><h3>{s.title}</h3><p>{s.copy}</p></article>)}</div></section></main><Footer/></>}
