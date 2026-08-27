import React from "react";
import ProductDetail from "../components/ProductDetail";
import products from "../data/products";

function HappyRide() {
  const product = products.find((item) => item.slug === "happy-ride");
  return <ProductDetail product={product} />;
}

export default HappyRide;
