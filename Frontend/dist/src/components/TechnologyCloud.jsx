import React from "react";
import {
  Bell,
  Briefcase,
  Cloud,
  CreditCard,
  Database,
  Monitor,
  Radio,
  Server,
} from "react-feather";
import { technologies } from "../data/site";
import Reveal from "./Reveal";
import "../styles/Technologies.css";

const icons = {
  Frontend: Monitor,
  Backend: Server,
  Database,
  Cloud,
  Realtime: Radio,
  Enterprise: Briefcase,
  Payments: CreditCard,
  Notifications: Bell,
};

function TechnologyCloud() {
  return (
    <section className="section tech-section" id="technology">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Capabilities</p>
          <h2 className="section-title">
            Built with <span className="gradient-text">modern technology</span>
          </h2>
          <p className="section-lead">
            A focused stack we use to design, build, and operate products that last.
          </p>
        </Reveal>

        <div className="tech-stage">
          {technologies.map((group, index) => {
            const Icon = icons[group.group] || Monitor;
            return (
              <Reveal key={group.group} delay={index * 40} className="tech-row">
                <div className="tech-row-meta">
                  <div className="tech-row-icon" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <div>
                    <small>0{index + 1}</small>
                    <h3>{group.group}</h3>
                  </div>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <strong>{item.name}</strong>
                      <span>{item.note}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechnologyCloud;
