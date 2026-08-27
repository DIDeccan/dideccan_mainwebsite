import React from "react";
import ProductDetail from "../components/ProductDetail";
import products from "../data/products";

function Mobotos() {
  return <ProductDetail product={products.find((item) => item.slug === "mobotos")} />;
}

export default Mobotos;
