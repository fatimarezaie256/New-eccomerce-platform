import React from "react";
import { GetProduct } from "../../../lib/actions/product.action";
import Hero from "../shared/header/Hero";

async function Home() {
  await GetProduct();
  return (
    <div>
      <Hero />
    </div>
  );
}

export default Home;
