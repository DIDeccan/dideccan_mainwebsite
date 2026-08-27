import React from "react";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { homeServices, industries, offices } from "../data/site";
import "../styles/Footer.css";

function Footer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const go = (path) => () => navigate(path);
  const showCta = pathname !== "/";

  return (
    <footer className={`site-footer${showCta ? "" : " site-footer--home"}`}>
      <div className="sf-orbs" aria-hidden="true">
        <span className="sf-orb sf-orb-a" />
        <span className="sf-orb sf-orb-b" />
        <span className="sf-orb sf-orb-c" />
      </div>
      <p className="sf-watermark" aria-hidden="true">
        DIDeccan
      </p>

      <div className="container">
        {showCta ? (
        <section className="sf-cta">
          <div className="sf-cta-copy">
            <p className="sf-kicker">Start a conversation</p>
            <h2>
              Let’s build the next product
              <span>with a team that ships.</span>
            </h2>
            <p className="sf-cta-lead">
              Engineering, design, and delivery from Tirupati and Bangalore.
            </p>
          </div>
          <div className="sf-cta-actions">
            <a className="sf-btn sf-btn-ghost" href="tel:7981559252">
              <Phone size={16} />
              Call Us
            </a>
            <button className="sf-btn sf-btn-glow" type="button" onClick={go("/contact")}>
              Get In Touch
              <ArrowUpRight size={16} />
            </button>
          </div>
        </section>
        ) : null}

        <div className="sf-body">
          <div className="sf-brand">
            <div className="sf-logo">
              <span className="sf-logo-ring">
                <img src={logo} alt="" />
              </span>
              <div>
                <strong>DIDeccan</strong>
                <span>India Software Technologies Pvt Ltd</span>
              </div>
            </div>
            <p>
              We design and engineer digital products, platforms, and technology
              solutions that transform ambitious ideas into real-world impact —
              from Tirupati and Bangalore.
            </p>
            <div className="sf-social">
              <a
                href="https://www.linkedin.com/company/dideccan-india-software-technologies-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.facebook.com/people/DIDeccanIndia/61579760649607/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/dideccanindia?igsh=N3F2bXVkeGNiZGEw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <nav className="sf-nav" aria-label="Footer">
            <div className="sf-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <button type="button" onClick={go("/About")}>
                    About Us
                  </button>
                </li>
                <li>
                  <button type="button" onClick={go("/products")}>
                    Our Work
                  </button>
                </li>
                <li>
                  <button type="button" onClick={go("/FAQ")}>
                    Insights
                  </button>
                </li>
                <li>
                  <button type="button" onClick={go("/contact")}>
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            <div className="sf-col">
              <h4>Services</h4>
              <ul>
                {homeServices.slice(0, 6).map((service) => (
                  <li key={service.title}>
                    <button type="button" onClick={go("/Services")}>
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sf-col">
              <h4>Industries</h4>
              <ul>
                {industries.slice(0, 6).map((item) => (
                  <li key={item.title}>
                    <button type="button" onClick={go(item.to)}>
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="sf-connect">
          <a className="sf-tile" href="mailto:business@dideccanindia.com">
            <span className="sf-tile-icon">
              <Mail size={16} />
            </span>
            <span>
              <small>Email</small>
              <strong>business@dideccanindia.com</strong>
            </span>
          </a>
          <a className="sf-tile" href="tel:7981559252">
            <span className="sf-tile-icon">
              <Phone size={16} />
            </span>
            <span>
              <small>Phone</small>
              <strong>+91 79815 59252</strong>
            </span>
          </a>
          {offices.map((office) => {
            const inner = (
              <>
                <span className="sf-tile-icon">
                  <MapPin size={16} />
                </span>
                <span>
                  <small>{office.tag}</small>
                  <strong>{office.city}</strong>
                  <em>{office.address || office.region}</em>
                </span>
              </>
            );
            return office.map ? (
              <a
                key={office.city}
                className="sf-tile"
                href={office.map}
                target="_blank"
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            ) : (
              <div key={office.city} className="sf-tile sf-tile-static">
                {inner}
              </div>
            );
          })}
        </div>
      </div>

      <div className="sf-bar">
        <div className="container sf-bar-inner">
          <p>© {new Date().getFullYear()} DIDeccan India Software Technologies Pvt Ltd</p>
          <div className="sf-legal">
            <button type="button" onClick={go("/PrivacyPolicy")}>
              Privacy
            </button>
            <button type="button" onClick={go("/TermsConditions")}>
              Terms
            </button>
            <button type="button" onClick={go("/FAQ")}>
              FAQs
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
