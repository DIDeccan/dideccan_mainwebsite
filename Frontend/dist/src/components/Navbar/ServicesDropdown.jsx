import React, { useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Cloud,
  Code,
  Cpu,
  Globe,
  Layout,
  RefreshCw,
  Share2,
  Smartphone,
} from "react-feather";
import { useNavigate } from "react-router-dom";
import Aidatascience from "../../assets/images/Aidatascience.png";
import Cybersecurity from "../../assets/images/Cybersecurity.png";
import Devops from "../../assets/images/Devops.png";
import Medical_Coding from "../../assets/images/Medical_Coding.png";
import SAP_NEW from "../../assets/images/SAP_NEW.png";
import Softwaretesting from "../../assets/images/Softwaretesting.png";
import UK_Mortgage from "../../assets/images/UK_Mortgage.png";
import US_Mortgage from "../../assets/images/US_Mortgage.png";
import Webdevelopment from "../../assets/images/Webdevelopment.png";
import { homeServices } from "../../data/site";
import servicesData from "../../servicesData.json";
import PageMeta from "../PageMeta";
import Reveal from "../Reveal";
import "../../styles/Navbar/ServicesDropdown.css";

const imageMap = {
  Devops,
  Webdevelopment,
  Softwaretesting,
  Aidatascience,
  Cybersecurity,
  SAP_NEW,
  Medical_Coding,
  US_Mortgage,
  UK_Mortgage,
};

const icons = {
  web: Globe,
  mobile: Smartphone,
  design: Layout,
  code: Code,
  cloud: Cloud,
  ai: Cpu,
  api: Share2,
  transform: RefreshCw,
  enterprise: Briefcase,
};

function ServicesSection() {
  const navigate = useNavigate();
  const [openId, setOpenId] = useState(servicesData[0]?.id ?? 1);
  const current = servicesData.find((item) => item.id === openId) || servicesData[0];

  return (
    <main className="services-page">
      <PageMeta
        title="Services | DIDeccan India"
        description="Technology built around your ambition — web, mobile, cloud, AI, APIs, and enterprise solutions from DIDeccan."
      />

      <section className="sp-hero">
        <div className="container">
          <p className="section-kicker">Services</p>
          <h1>
            Technology built around
            <span>your ambition.</span>
          </h1>
          <p>
            Product engineering, cloud, AI, security, SAP, and specialised domain delivery —
            built to ship and stay in production.
          </p>
          <div className="sp-hero-actions">
            <button className="btn btn-primary" type="button" onClick={() => navigate("/contact")}>
              Get in touch <ArrowUpRight size={16} />
            </button>
            <button className="btn btn-outline" type="button" onClick={() => navigate("/About")}>
              About the company
            </button>
          </div>
        </div>
      </section>

      <section className="section sp-core">
        <div className="container">
          <Reveal>
            <p className="section-kicker">What we do</p>
            <h2 className="section-title">
              Solutions designed for <span className="gradient-text">your business</span>
            </h2>
            <p className="section-lead">
              From product interfaces to cloud, APIs, and enterprise systems — we stay with the work
              after launch.
            </p>
          </Reveal>
          <div className="sp-core-grid">
            {homeServices.map((item, index) => {
              const Icon = icons[item.visual] || Globe;
              return (
                <Reveal key={item.num} delay={index * 40} className="sp-core-card">
                  <div className="sp-icon" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <small>{item.num}</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section sp-practice">
        <div className="container">
          <p className="section-kicker">Delivery lines</p>
          <h2 className="section-title">Specialised practice areas.</h2>
          <div className="sp-practice-split">
            <ol className="sp-practice-nav" aria-label="Practice areas">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    className={service.id === openId ? "is-active" : ""}
                    onClick={() => setOpenId(service.id)}
                  >
                    <span>0{service.id}</span>
                    <strong>{service.title}</strong>
                  </button>
                </li>
              ))}
            </ol>
            {current ? (
              <article className="sp-practice-detail">
                <div className="sp-practice-media">
                  <img src={imageMap[current.image]} alt="" />
                </div>
                <small>0{current.id}</small>
                <h3>{current.title}</h3>
                {current.description ? <p>{current.description}</p> : null}
                <ul>
                  {current.points.map((point) => (
                    <li key={point.title}>
                      <strong>{point.title}</strong>
                      <span>{point.text}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ) : null}
          </div>
        </div>
      </section>

      <section className="sp-close">
        <div className="container">
          <div className="sp-close-card">
            <div>
              <p className="section-kicker">Start a project</p>
              <h2>Tell us what you need to ship.</h2>
              <p>
                Product idea, platform rebuild, or an engineering brief — the team in Tirupati and
                Bangalore is ready to build.
              </p>
            </div>
            <button className="btn btn-primary" type="button" onClick={() => navigate("/contact")}>
              Get in touch <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServicesSection;
