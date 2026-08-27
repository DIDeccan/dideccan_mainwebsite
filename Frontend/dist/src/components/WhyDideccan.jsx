import React from "react";
import { Cpu, Layers, Repeat, Shield, TrendingUp, Users } from "react-feather";
import { whyPoints } from "../data/site";
import Reveal from "./Reveal";
import "../styles/AboutHome.css";

const icons = [Cpu, Layers, Repeat, Shield, TrendingUp, Users];

function WhyDideccan() {
  return (
    <section className="section why-section" id="why">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Why choose us</p>
          <h2 className="section-title">
            Why businesses <span className="gradient-text">choose DIDeccan</span>
          </h2>
        </Reveal>
        <div className="why-grid">
          {whyPoints.map((item, index) => {
            const Icon = icons[index] || Cpu;
            return (
              <Reveal key={item.num} delay={index * 40} className="why-card">
                <span className="icon-orb">
                  <Icon size={18} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyDideccan;
