import React from "react";
import { ArrowUpRight } from "react-feather";
import { useNavigate } from "react-router-dom";
import corrohealth from "../assets/images/clients/corrohealth.png";
import datainfosoft from "../assets/images/clients/datainfosoft.png";
import Edupravahaa from "../assets/images/clients/edupravahaa-mark.png";
import nagarro from "../assets/images/clients/nagarro-mark.png";
import wipro from "../assets/images/clients/wipro-mark.png";
import products from "../data/products";
import Reveal from "./Reveal";
import "../styles/TrustLogos.css";

const clients = [
  { name: "Wipro", src: wipro },
  { name: "Nagarro", src: nagarro },
  { name: "Edupravahaa", src: Edupravahaa },
  { name: "Datainfosoft", src: datainfosoft },
  { name: "CorroHealth", src: corrohealth },
];

const markTone = {
  "student-book": "dark",
  "business-guider": "cover",
};

function TrustLogos() {
  const navigate = useNavigate();

  return (
    <section className="trust-section" id="clients" aria-label="Clients and brands">
      <div className="container">
        <Reveal className="trust-head">
          <p className="section-kicker">Partnerships</p>
          <h2 className="section-title">
            Trusted by <span className="gradient-text">innovative businesses</span>
          </h2>
          <p className="section-lead">
            Enterprise teams we work with, and the homegrown product brands we design, build, and
            operate from Tirupati and Bangalore.
          </p>
        </Reveal>

        <Reveal>
          <p className="trust-label">Our clients</p>
          <ul className="trust-lockup">
            {clients.map((item) => (
              <li key={item.name}>
                <img src={item.src} alt={`${item.name} logo`} loading="lazy" />
                <strong>{item.name}</strong>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="trust-brands-block">
          <div className="trust-brands-bar">
            <p className="trust-label">Our product brands</p>
            <button className="trust-all" type="button" onClick={() => navigate("/products")}>
              View all products <ArrowUpRight size={15} />
            </button>
          </div>
          <ul className="trust-brand-grid">
            {products.map((product, index) => (
              <li key={product.id}>
                <Reveal delay={index * 40}>
                  <button
                    className="trust-brand"
                    type="button"
                    onClick={() => navigate(product.path)}
                    style={{ "--brand-accent": product.accent }}
                  >
                    <span className={`trust-brand-mark mark-${markTone[product.id] || "light"}`}>
                      <img src={product.logo} alt="" />
                    </span>
                    <span className="trust-brand-copy">
                      <small>{product.industry}</small>
                      <strong>{product.name}</strong>
                    </span>
                    <ArrowUpRight size={16} />
                  </button>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TrustLogos;
