import React from "react";
import { GetProduct } from "../../../lib/actions/product.action";
import Hero from "../shared/header/Hero";
import ProductList from "../shared/products/product-list";

async function Home() {
  const products = await GetProduct();
  return (
    <div>
      <Hero />
      <ProductList productList={products} title="Newest Arrivals" />
    </div>
  );
}

export default Home;
