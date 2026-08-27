import React from "react";
import {
  BookOpen,
  Briefcase,
  CreditCard,
  Heart,
  Map,
  Navigation,
  Truck,
  Zap,
} from "react-feather";
import { useNavigate } from "react-router-dom";
import { industries } from "../data/site";
import Reveal from "./Reveal";
import "../styles/Industries.css";

const icons = {
  book: BookOpen,
  nav: Navigation,
  zap: Zap,
  map: Map,
  card: CreditCard,
  truck: Truck,
  heart: Heart,
  briefcase: Briefcase,
};

function IndustriesSection() {
  const navigate = useNavigate();

  return (
    <section className="section industries-section" id="industries">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Industries</p>
          <h2 className="section-title">
            Domain expertise across <span className="gradient-text">real operations</span>
          </h2>
          <p className="section-lead">
            We build for the sectors we already ship in — education, mobility, finance, travel,
            logistics, healthcare, and enterprise.
          </p>
        </Reveal>
        <div className="industry-grid">
          {industries.map((item, index) => {
            const Icon = icons[item.icon] || Briefcase;
            return (
              <Reveal key={item.title} delay={index * 40} className="industry-card">
                <button type="button" onClick={() => navigate(item.to)}>
                  <span className="icon-orb">
                    <Icon size={18} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
