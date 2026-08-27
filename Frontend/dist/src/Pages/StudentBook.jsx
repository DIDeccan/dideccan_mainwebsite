import React from "react";
import ProductDetail from "../components/ProductDetail";
import products from "../data/products";

function StudentBook() {
  return <ProductDetail product={products.find((item) => item.slug === "student-book")} />;
}

export default StudentBook;
