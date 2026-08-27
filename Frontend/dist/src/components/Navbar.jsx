import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "react-feather";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import products from "../data/products";
import { homeServices, industries, insightLinks } from "../data/site";
import MegaMenu from "./MegaMenu";
import "../styles/Navbar.css";

const productItems = products.map((product) => ({
  to: product.path,
  name: product.name,
  category: product.category,
  description: product.category,
  logo: product.logo,
  lightAccent: product.lightAccent,
}));

const serviceItems = homeServices.map((service) => ({
  to: "/Services",
  title: service.title,
  description: service.text,
  num: service.num,
}));

const industryItems = industries.map((item) => ({
  to: item.to,
  title: item.title,
  description: item.text,
  kicker: "→",
}));

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);
  const isHome = location.pathname === "/";
  const isProductPage = products.some((product) => product.path === location.pathname);
  const isContactPage = location.pathname === "/contact" || location.pathname === "/contactus";
  const darkHero = (isHome || isProductPage || isContactPage) && !scrolled && !menuOpen && !openMenu;

  const isWorkPage =
    location.pathname === "/products" || products.some((product) => product.path === location.pathname);
  const isCompanyPage = ["/About", "/FAQ", "/PrivacyPolicy", "/TermsConditions"].includes(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenMenu(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", menuOpen);
    return () => document.body.classList.remove("nav-locked");
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMenuOpen(false);
      }
    };
    const onClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setOpenMenu(null);
  };

  const isMobileNav = () => window.matchMedia("(max-width: 1180px)").matches;

  const openDesktopMenu = (name) => {
    if (!isMobileNav()) setOpenMenu(name);
  };

  const onTriggerClick = (name) => {
    if (isMobileNav()) {
      toggleMenu(name);
      return;
    }
    setOpenMenu(name);
  };

  const toggleMenu = (name) => {
    setOpenMenu((current) => (current === name ? null : name));
  };

  return (
    <header
      ref={navRef}
      className={`navbar ${darkHero ? "is-dark" : "is-scrolled"} ${menuOpen ? "is-open" : ""} ${openMenu ? "has-mega" : ""}`}
    >
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="navbar-inner">
        <button type="button" className="logo" onClick={() => navigate("/")} aria-label="DIDeccan India home">
          <img src={logo} alt="" />
          <span>
            <strong>DIDeccan</strong>
            <small>India Software Technologies</small>
          </span>
        </button>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {(menuOpen || openMenu) && (
          <button type="button" className="nav-backdrop" onClick={closeAll} aria-label="Close menu" />
        )}

        <nav className={`nav-panel ${menuOpen ? "open" : ""}`} aria-label="Primary">
          <div className="nav-panel-head">
            <span>Menu</span>
            <button type="button" className="menu-toggle in-drawer" onClick={closeAll} aria-label="Close menu">
              <X size={18} />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end onClick={closeAll} className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" onClick={closeAll} className={({ isActive }) => (isActive ? "active" : "")}>
                About Us
              </NavLink>
            </li>
            <li onMouseEnter={() => openDesktopMenu("services")}>
              <button
                type="button"
                className={`dropdown-trigger ${location.pathname === "/Services" || openMenu === "services" ? "active" : ""}`}
                aria-expanded={openMenu === "services"}
                onClick={() => onTriggerClick("services")}
              >
                Services
                <ChevronDown size={15} />
              </button>
              <MegaMenu
                id="mega-services"
                open={openMenu === "services"}
                title="Services"
                items={serviceItems}
                onNavigate={closeAll}
              />
            </li>
            <li onMouseEnter={() => openDesktopMenu("industries")}>
              <button
                type="button"
                className={`dropdown-trigger ${openMenu === "industries" ? "active" : ""}`}
                aria-expanded={openMenu === "industries"}
                onClick={() => onTriggerClick("industries")}
              >
                Industries
                <ChevronDown size={15} />
              </button>
              <MegaMenu
                id="mega-industries"
                open={openMenu === "industries"}
                title="Industries"
                items={industryItems}
                onNavigate={closeAll}
              />
            </li>
            <li onMouseEnter={() => openDesktopMenu("work")}>
              <button
                type="button"
                className={`dropdown-trigger ${isWorkPage || openMenu === "work" ? "active" : ""}`}
                aria-expanded={openMenu === "work"}
                aria-controls="mega-work"
                onClick={() => onTriggerClick("work")}
              >
                Our Work
                <ChevronDown size={15} />
              </button>
              <MegaMenu
                id="mega-work"
                open={openMenu === "work"}
                title="Products"
                items={[{ to: "/products", title: "All products", description: "The full DIDeccan product suite", kicker: "→" }, ...productItems]}
                onNavigate={closeAll}
              />
            </li>
            <li onMouseEnter={() => openDesktopMenu("insights")}>
              <button
                type="button"
                className={`dropdown-trigger ${openMenu === "insights" || (isCompanyPage && location.pathname !== "/About") ? "active" : ""}`}
                aria-expanded={openMenu === "insights"}
                onClick={() => onTriggerClick("insights")}
              >
                Insights
                <ChevronDown size={15} />
              </button>
              <MegaMenu
                id="mega-insights"
                open={openMenu === "insights"}
                title="Insights"
                items={insightLinks.map((link) => ({
                  to: link.to,
                  title: link.label,
                  description: link.description,
                  kicker: "→",
                }))}
                onNavigate={closeAll}
              />
            </li>
            <li>
              <NavLink to="/contact" onClick={closeAll} className={({ isActive }) => (isActive ? "active" : "")}>
                Contact
              </NavLink>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-primary nav-cta"
            onClick={() => {
              closeAll();
              navigate("/contact");
            }}
          >
            Get In Touch <ArrowRight size={15} />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
