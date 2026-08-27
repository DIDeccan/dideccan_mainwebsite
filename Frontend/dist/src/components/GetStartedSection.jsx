import React from "react";
import { ArrowRight, Mail, Phone } from "react-feather";
import { useNavigate } from "react-router-dom";
import "../styles/GetStartedSection.css";

function GetStartedSection() {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-copy">
            <p className="section-kicker">Ready when you are</p>
            <h2>
              Ready to start
              <span>your next project?</span>
            </h2>
            <p>
              Product idea, platform rebuild, or an engineering brief — the team in Tirupati and
              Bangalore is ready to build something lasting together.
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-outline-light" href="tel:7981559252">
              <Phone size={16} /> Call Us
            </a>
            <a className="btn btn-outline-light" href="mailto:business@dideccanindia.com">
              <Mail size={16} /> Email Us
            </a>
            <button className="btn btn-primary" type="button" onClick={() => navigate("/contact")}>
              Get In Touch <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStartedSection;
