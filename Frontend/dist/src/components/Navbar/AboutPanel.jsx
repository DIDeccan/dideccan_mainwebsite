import React from "react";
import { ArrowRight, ArrowUpRight, Globe, Layers, MapPin, Users, Zap } from "react-feather";
import { useNavigate } from "react-router-dom";
import bannerimage1 from "../../assets/images/bannerimage1.png";
import bannerimage2 from "../../assets/images/bannerimage2.png";
import logo from "../../assets/images/logo.png";
import { metrics, offices, timeline, values, aboutHighlights } from "../../data/site";
import PageMeta from "../PageMeta";
import Reveal from "../Reveal";
import "../../styles/Navbar/AboutPanel.css";

const valueIcons = [Zap, Layers, Users, Globe];

function AboutPanel() {
  const navigate = useNavigate();

  return (
    <main className="about-page">
      <PageMeta
        title="About | DIDeccan India"
        description="Technology with purpose. DIDeccan India Software Technologies designs and ships digital products from Tirupati and Bangalore."
      />

      <section className="ap-hero">
        <div className="container ap-hero-grid">
          <div>
            <p className="section-kicker">About us</p>
            <h1>
              Technology with
              <span>purpose.</span>
            </h1>
            <p>
              DIDeccan India Software Technologies Pvt Ltd is a product studio and engineering
              partner based in Tirupati and Bangalore.
            </p>
            <div className="ap-hero-actions">
              <button className="btn btn-primary" type="button" onClick={() => navigate("/contact")}>
                Get in touch <ArrowUpRight size={16} />
              </button>
              <button className="btn btn-outline" type="button" onClick={() => navigate("/products")}>
                See products
              </button>
            </div>
          </div>
          <div className="ap-hero-visual">
            <img src={bannerimage2} alt="Engineer working on product software" />
            <aside className="ap-hero-card">
              <small>Built from India</small>
              <strong>Tirupati HQ</strong>
              <span>Bangalore presence</span>
            </aside>
          </div>
        </div>
        <div className="container">
          <ul className="ap-metrics">
            {metrics.map((item) => (
              <li key={item.label}>
                <b>
                  {item.value}
                  {item.suffix}
                </b>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section ap-intro">
        <div className="container ap-intro-grid">
          <Reveal className="ap-photos">
            <img src={bannerimage1} alt="DIDeccan team collaborating at a workstation" />
            <img src={bannerimage2} alt="Engineer working on product software" />
          </Reveal>
          <Reveal delay={60} className="ap-intro-copy">
            <p className="section-kicker">Who we are</p>
            <h2 className="section-title">
              We build digital products that <span className="gradient-text">solve real-world problems.</span>
            </h2>
            <p>
              Founded to drive technological innovation while growing local talent, we ship platforms
              for students, businesses, devotees, and operators — then stay to run them.
            </p>
            <p>
              Our work goes beyond delivery. We foster a culture of craft, encourage entrepreneurship,
              and contribute to a self-reliant India by shipping homegrown products.
            </p>
            <ul className="ap-checks">
              {aboutHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section ap-mission">
        <div className="container ap-mission-grid">
          <article className="ap-mission-card is-mission">
            <p className="section-kicker">Mission</p>
            <h2>Ship products people trust, from Andhra Pradesh to the world.</h2>
            <p>
              Design, engineer, and operate digital platforms that make learning, movement, money,
              and enterprise work simpler.
            </p>
          </article>
          <article className="ap-mission-card is-vision">
            <p className="section-kicker">Vision</p>
            <h2>Indian technology, recognized worldwide.</h2>
            <p>
              A future where Indian products are known for innovation, reliability, and societal
              impact — and where students and professionals believe in that standard.
            </p>
          </article>
        </div>
      </section>

      <section className="section ap-values">
        <div className="container">
          <Reveal>
            <p className="section-kicker">Values</p>
            <h2 className="section-title">The standard we build with.</h2>
          </Reveal>
          <div className="ap-values-grid">
            {values.map((item, index) => {
              const Icon = valueIcons[index] || Zap;
              return (
                <Reveal key={item.num} delay={index * 50} className="ap-value">
                  <div className="ap-value-icon" aria-hidden="true">
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

      <section className="section ap-story">
        <div className="container">
          <p className="section-kicker">Our story</p>
          <h2 className="section-title">From Tirupati to a studio that ships.</h2>
          <ol className="ap-timeline">
            {timeline.map((item, index) => (
              <li key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section ap-offices">
        <div className="container">
          <div className="ap-office-head">
            <img src={logo} alt="" />
            <div>
              <p className="section-kicker">Locations</p>
              <h2 className="section-title">Tirupati. Bangalore.</h2>
            </div>
          </div>
          <div className="ap-office-grid">
            {offices.map((office) => (
              <article key={office.city}>
                <div className="ap-office-icon" aria-hidden="true">
                  <MapPin size={18} />
                </div>
                <small>{office.tag}</small>
                <h3>{office.city}</h3>
                <p>{office.region}</p>
                <p>{office.text}</p>
                {office.address ? <p className="ap-address">{office.address}</p> : null}
                {office.map ? (
                  <a href={office.map} target="_blank" rel="noopener noreferrer">
                    Open in Maps <ArrowRight size={14} />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-close">
        <div className="container">
          <div className="ap-close-card">
            <div>
              <p className="section-kicker">Start a conversation</p>
              <h2>Join us on the journey.</h2>
              <p>Students, professionals, and businesses — if you are building, we should talk.</p>
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

export default AboutPanel;
