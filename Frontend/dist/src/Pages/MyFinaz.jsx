import React from "react";
import ProductDetail from "../components/ProductDetail";
import products from "../data/products";

function MyFinaz() {
  return <ProductDetail product={products.find((item) => item.slug === "my-finaz")} />;
}

export default MyFinaz;
