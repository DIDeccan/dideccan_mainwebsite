import React from "react";
import { ArrowRight, Check } from "react-feather";
import { useNavigate } from "react-router-dom";
import bannerimage1 from "../assets/images/bannerimage1.png";
import bannerimage2 from "../assets/images/bannerimage2.png";
import { aboutHighlights, offices, timeline, values } from "../data/site";
import Reveal from "./Reveal";
import "../styles/AboutHome.css";

function About() {
  const navigate = useNavigate();
  const floats = values.slice(0, 3);

  return (
    <section className="section about-home" id="about">
      <div className="container">
        <div className="about-home-grid">
          <Reveal delay={40} className="about-copy">
            <p className="section-kicker">Who we are</p>
            <h2 className="section-title">
              Building solutions for a <span className="gradient-text">better tomorrow</span>
            </h2>
            <p>
              DIDeccan India Software Technologies Pvt Ltd is a product studio and engineering
              partner based in Tirupati and Bangalore. We design, build, and operate digital
              platforms for education, mobility, finance, pilgrimage, logistics, and enterprise
              technology.
            </p>
            <p>
              Our work goes beyond delivery. We grow local talent, ship homegrown products, and stay
              with the systems after they launch.
            </p>
            <ul className="about-checks">
              {aboutHighlights.map((item) => (
                <li key={item}>
                  <span>
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="about-offices-row">
              {offices.map((office) => (
                <article key={office.city}>
                  <div>
                    <b>{office.city}</b>
                    <span>
                      {office.tag} · {office.region}
                    </span>
                  </div>
                </article>
              ))}
            </div>
            <button className="btn btn-primary" type="button" onClick={() => navigate("/About")}>
              About the company <ArrowRight size={16} />
            </button>
          </Reveal>

          <Reveal className="about-visual">
            <div className="about-photos">
              <img src={bannerimage1} alt="DIDeccan team collaborating at a workstation" />
              <img src={bannerimage2} alt="Engineer working on product software" loading="lazy" />
            </div>
            {floats.map((item, index) => (
              <article className={`about-float about-float-${index}`} key={item.title}>
                <b>{item.title}</b>
                <span>{item.text}</span>
              </article>
            ))}
          </Reveal>
        </div>

        <div className="timeline" aria-label="Company story">
          {timeline.map((item, index) => (
            <Reveal key={item.title} delay={index * 40} className="timeline-item">
              <span>{item.title}</span>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
