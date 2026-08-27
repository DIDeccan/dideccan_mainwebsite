import React from "react";
import { ArrowRight } from "react-feather";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, featured = false }) {
  const navigate = useNavigate();
  const media = product.gallery[0];

  return (
    <article
      className={`product-row ${featured ? "is-featured" : ""} ${media ? "has-media" : ""}`}
      style={{ "--accent": product.accent, "--wash": product.lightAccent }}
    >
      <div className="product-row-copy">
        <img src={product.logo} alt="" className="product-row-logo" />
        <p className="product-card-cat">{product.category}</p>
        <h3>{product.name}</h3>
        <p>{featured ? product.description : product.summary}</p>
        {featured && (
          <ul className="featured-points">
            {product.features.slice(0, 4).map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        )}
        <button type="button" onClick={() => navigate(product.path)}>
          Explore {product.name} <ArrowRight size={16} />
        </button>
      </div>
      <div className="product-row-media" aria-hidden={!media}>
        {media ? (
          <img src={media} alt="" />
        ) : (
          <div className="product-row-fallback">
            <img src={product.logo} alt="" />
            <span>{product.platforms.join(" · ")}</span>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
