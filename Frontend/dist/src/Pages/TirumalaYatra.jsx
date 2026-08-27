import React from "react";
import ProductDetail from "../components/ProductDetail";
import products from "../data/products";

function TirumalaYatra() {
  return <ProductDetail product={products.find((item) => item.slug === "tirumala-yatra")} />;
}

export default TirumalaYatra;
