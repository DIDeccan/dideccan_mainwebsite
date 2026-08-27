import React from "react";
import { Activity, Cloud, GitMerge } from "react-feather";
import products from "../data/products";
import { prefersReducedMotion } from "../hooks/useInView";

function HeroVisual({ offset = { x: 0, y: 0 } }) {
  const featured = products[1];
  const reduced = prefersReducedMotion();
  const layer = (factor) =>
    reduced ? undefined : { transform: `translate3d(${offset.x * factor}px, ${offset.y * factor}px, 0)` };

  return (
    <div className="hero-stage" aria-hidden="true">
      <div className="hero-glow hero-glow-a" />
      <div className="hero-glow hero-glow-b" />
      <div className="hero-grid-overlay" />

      <svg className="hero-network" viewBox="0 0 520 520" fill="none">
        <defs>
          <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#D946EF" stopOpacity="0.85" />
          </linearGradient>
          <radialGradient id="heroCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9B5CFF" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#245BDB" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#07133F" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="260" cy="250" r="168" fill="url(#heroCore)" />
        <path
          className="hero-path"
          d="M90 180 C160 80, 360 70, 430 190 S410 390, 250 420 S70 330, 90 180"
          stroke="url(#heroLine)"
          strokeWidth="1.4"
          strokeDasharray="6 10"
        />
        <path
          className="hero-path delay"
          d="M140 320 C190 240, 310 220, 380 290 S330 410, 210 390 S110 360, 140 320"
          stroke="url(#heroLine)"
          strokeWidth="1.2"
          strokeDasharray="4 8"
          opacity="0.7"
        />
        {[
          [160, 140],
          [360, 150],
          [430, 260],
          [340, 380],
          [180, 400],
          [110, 250],
          [260, 240],
        ].map(([x, y], i) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r={i === 6 ? 8 : 5} fill="#07133F" stroke="#9B5CFF" strokeWidth="2" />
            <circle cx={x} cy={y} r={i === 6 ? 16 : 11} stroke="#22D3EE" strokeOpacity="0.35" />
          </g>
        ))}
      </svg>

      <article className="hero-float cloud" style={layer(0.55)}>
        <span className="icon-orb small">
          <Cloud size={16} />
        </span>
        <div>
          <strong>Cloud</strong>
          <small>Secure scale</small>
        </div>
      </article>

      <article className="hero-float analytics" style={layer(-0.4)}>
        <span className="icon-orb small">
          <Activity size={16} />
        </span>
        <div>
          <strong>Analytics</strong>
          <small>Live insight</small>
        </div>
      </article>

      <article className="hero-float integration" style={layer(0.3)}>
        <span className="icon-orb small">
          <GitMerge size={16} />
        </span>
        <div>
          <strong>Integration</strong>
          <small>Connected systems</small>
        </div>
      </article>

      <div className="hero-core-card" style={layer(0.18)}>
        <div className="hero-core-top">
          <img src={featured.logo} alt="" />
          <span>{featured.name}</span>
        </div>
        {featured.gallery[0] ? (
          <img className="hero-core-shot" src={featured.gallery[0]} alt="" />
        ) : null}
        <div className="hero-core-bars">
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}

export default HeroVisual;
