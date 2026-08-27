import React, { useCallback, useState } from "react";
import { ArrowRight } from "react-feather";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import { metrics } from "../data/site";
import { prefersReducedMotion, useCountUp, useInView } from "../hooks/useInView";
import HeroVisual from "./HeroVisual";
import PageMeta from "./PageMeta";
import "../styles/Banner.css";

function HeroStat({ value, suffix, label, pad, active }) {
  const count = useCountUp(value, active);
  const display = pad ? String(count).padStart(pad, "0") : String(count);
  return (
    <li>
      <b>
        {display}
        {suffix}
      </b>
      <span>{label}</span>
    </li>
  );
}

function Hero() {
  const navigate = useNavigate();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [statsRef, statsVisible] = useInView();

  const onMove = useCallback((event) => {
    if (prefersReducedMotion()) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
    setOffset({ x, y });
  }, []);

  return (
    <section className="hero" onMouseMove={onMove} onMouseLeave={() => setOffset({ x: 0, y: 0 })}>
      <PageMeta
        title="DIDeccan India | Digital Products & Technology"
        description="DIDeccan builds intelligent digital products and technology solutions that solve real-world problems — from Tirupati and Bangalore."
      />
      <div className="hero-bg" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-label">Innovate. Integrate. Elevate.</p>
          <h1>
            Digital solutions
            <span>that drive success</span>
          </h1>
          <p className="hero-lead">
            We help businesses accelerate growth with intelligent technology, seamless integrations,
            and impactful digital experiences — from Tirupati and Bangalore.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" type="button" onClick={() => navigate("/Services")}>
              Explore Our Services <ArrowRight size={16} />
            </button>
            <button className="btn btn-outline-light" type="button" onClick={() => navigate("/products")}>
              View Our Work
            </button>
          </div>
          <ul className="hero-stats" ref={statsRef} aria-label="Company metrics">
            {metrics.map((item) => (
              <HeroStat key={item.label} {...item} active={statsVisible} />
            ))}
          </ul>
          <ul className="hero-products" aria-label="DIDeccan products">
            {products.map((product) => (
              <li key={product.id}>
                <button type="button" onClick={() => navigate(product.path)}>
                  <img src={product.logo} alt="" />
                  <span>{product.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual offset={offset} />
      </div>
    </section>
  );
}

export default Hero;
