import Hero from "./shared/header/Hero";
import Menu from "./shared/header/menu";
import ProductList from "./shared/products/product-list";

export default function Page() {
  return (
    <div>
      <Menu />
      <h1 className="text-2xl font-bold">Home Page</h1>
      <Hero />
      <ProductList />
    </div>
  );
}
