import React from "react";
import ProductDetail from "../components/ProductDetail";
import products from "../data/products";

function BusinessGuider() {
  return <ProductDetail product={products.find((item) => item.slug === "business-guider")} />;
}

export default BusinessGuider;
