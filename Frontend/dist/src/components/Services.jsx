import React from "react";
import { ArrowRight, Briefcase, Cloud, Code, Cpu, Globe, Layout, RefreshCw, Share2, Smartphone } from "react-feather";
import { useNavigate } from "react-router-dom";
import { homeServices } from "../data/site";
import Reveal from "./Reveal";
import "../styles/Courses.css";

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

function Services() {
  const navigate = useNavigate();

  return (
    <section className="section services-preview" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-kicker">Our services</p>
            <h2 className="section-title">
              Solutions designed
              <br />
              for <span className="gradient-text">your business</span>
            </h2>
            <p className="section-lead">
              From product interfaces to cloud, APIs, and enterprise systems — we stay with the work
              after launch.
            </p>
          </div>
          <button className="btn btn-outline" type="button" onClick={() => navigate("/Services")}>
            See all services
          </button>
        </div>

        <div className="service-grid">
          {homeServices.map((item, index) => {
            const Icon = icons[item.visual] || Globe;
            return (
              <Reveal key={item.num} delay={index * 50} className="service-card">
                <span className="icon-orb">
                  <Icon size={20} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button type="button" onClick={() => navigate("/Services")}>
                  Learn More <ArrowRight size={15} />
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
