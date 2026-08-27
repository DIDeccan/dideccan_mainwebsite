import React from "react";
import { ArrowRight } from "react-feather";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import PageMeta from "../components/PageMeta";
import ProductCard from "../components/ProductCard";
import "../styles/ClientsSection.css";

function Products() {
  const navigate = useNavigate();

  return (
    <main className="products-page">
      <PageMeta
        title="Products | DIDeccan India"
        description="Products built for real-world impact — Student Book, Happy Ride, Business Guider, Tirumala Yatra, My Finaz, and MOBOTOS."
      />
      <section className="page-hero">
        <div className="container">
          <p className="section-kicker">Products</p>
          <h1>Products built for real-world impact.</h1>
          <p>
            Education, mobility, entrepreneurship, pilgrimage, finance, and logistics — designed
            and shipped by DIDeccan.
          </p>
        </div>
      </section>

      <section className="section products-catalog">
        <div className="container">
          <div className="product-rows">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} featured={index === 0} />
            ))}
          </div>
          <div className="products-cta">
            <button className="btn btn-primary" type="button" onClick={() => navigate("/contact")}>
              Start a project <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;
