import React from "react";
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  CheckCircle,
  CreditCard,
  Gift,
  Heart,
  Home,
  Info,
  Map,
  Navigation,
  Package,
  PieChart,
  Radio,
  Search,
  Shield,
  Smartphone,
  TrendingUp,
  Truck,
  Users,
  Video,
  Zap,
} from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import products from "../data/products";
import { BrowserFrame } from "./DeviceMock";
import PageMeta from "./PageMeta";
import "../styles/Product.css";

const icons = {
  book: BookOpen,
  video: Video,
  check: CheckCircle,
  users: Users,
  phone: Smartphone,
  nav: Navigation,
  shield: Shield,
  radio: Radio,
  card: CreditCard,
  gift: Gift,
  bulb: Zap,
  chart: TrendingUp,
  briefcase: Briefcase,
  map: Map,
  search: Search,
  info: Info,
  home: Home,
  heart: Heart,
  pie: PieChart,
  package: Package,
  truck: Truck,
};

function ProductStage({ product }) {
  const cover = product.cover || product.gallery[0];
  const platform = product.platforms[0] || "Web";

  return (
    <div className="pd-visual">
      <BrowserFrame className="pd-browser" url={`${product.id}.dideccanindia.com`}>
        <div className="pd-stage">
          <div className={`pd-strip ${cover ? "" : "is-mark"}`}>
            {cover ? (
              <img src={cover} alt="" />
            ) : (
              <div className="pd-strip-mark" aria-hidden="true">
                <img src={product.logo} alt="" />
              </div>
            )}
          </div>
          <div className="pd-stage-copy">
            <h1>{product.name}</h1>
          </div>
          <aside className="pd-platform">
            <small>Platform</small>
            <strong>{platform}</strong>
          </aside>
        </div>
      </BrowserFrame>
    </div>
  );
}

function ProductDetail({ product }) {
  const navigate = useNavigate();

  if (!product) return null;

  const others = products.filter((item) => item.id !== product.id);
  const darkLogo = product.id === "student-book";

  return (
    <main className="product-detail" style={{ "--accent": product.accent, "--wash": product.lightAccent }}>
      <PageMeta title={`${product.name} | DIDeccan India`} description={product.summary} />

      <section className="pd-hero">
        <div className="container pd-hero-inner">
          <nav className="pd-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <span aria-current="page">{product.name}</span>
          </nav>

          <ProductStage product={product} />

          <div className="pd-hero-copy">
            <div className="pd-hero-brand">
              <span className={`pd-logo-well ${darkLogo ? "is-dark" : ""}`}>
                <img src={product.logo} alt="" />
              </span>
              <p className="pd-kicker">{product.industry}</p>
            </div>
            <p className="pd-tagline">{product.tagline}</p>
            <p className="pd-lead">{product.description}</p>
            <div className="pd-actions">
              <button className="btn btn-primary" type="button" onClick={() => navigate("/contact")}>
                Talk to us about {product.name} <ArrowUpRight size={16} />
              </button>
              <button className="btn btn-outline" type="button" onClick={() => navigate("/products")}>
                All products
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section pd-story">
        <div className="container pd-story-grid">
          <article className="pd-story-card is-problem">
            <p className="section-kicker">Problem</p>
            <h2>What we set out to solve</h2>
            <p>{product.problem}</p>
          </article>
          <article className="pd-story-card is-solution">
            <p className="section-kicker">Solution</p>
            <h2>How the product works</h2>
            <p>{product.solution}</p>
          </article>
        </div>
      </section>

      <section className="section pd-features">
        <div className="container">
          <p className="section-kicker">Key capabilities</p>
          <h2 className="section-title">
            Built into <span className="gradient-text">{product.name}</span>
          </h2>
          <ul className="pd-feature-grid">
            {product.features.map((feature, index) => {
              const Icon = icons[feature.icon] || CheckCircle;
              return (
                <li key={feature.title}>
                  <div className="pd-icon" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <small>0{index + 1}</small>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section pd-stack">
        <div className="container pd-stack-grid">
          <div>
            <p className="section-kicker">Technology</p>
            <h2 className="section-title">The stack behind it</h2>
            <div className="pd-pills">
              {product.platforms.map((item) => (
                <span key={item}>{item}</span>
              ))}
              {product.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="section-kicker">Impact</p>
            <h2 className="section-title">What it delivers</h2>
            <ul className="pd-impact">
              {product.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section pd-more">
        <div className="container">
          <p className="section-kicker">Product ecosystem</p>
          <h2 className="section-title">More products</h2>
          <div className="pd-more-grid">
            {others.map((item) => (
              <button type="button" key={item.id} onClick={() => navigate(item.path)}>
                <span className="pd-more-mark" style={{ background: item.lightAccent }}>
                  <img src={item.logo} alt="" />
                </span>
                <span>
                  <small>{item.industry}</small>
                  <strong>{item.name}</strong>
                </span>
                <ArrowUpRight size={16} />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pd-close">
        <div className="container">
          <div className="pd-close-card">
            <div>
              <p className="section-kicker">Start a conversation</p>
              <h2>Let&apos;s build something together.</h2>
              <p>Tell us about your team, users, or rollout — we&apos;ll take it from there.</p>
            </div>
            <button className="btn btn-primary" type="button" onClick={() => navigate("/contact")}>
              Get in touch <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;
