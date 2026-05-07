// import { GetProduct } from "../../../../actions/product.action";

import ProductList from "@/app/shared/products/product-list";
import { GetProduct } from "../../../../lib/actions/product.action";

type Product = {
  id: number;
  name: string;
  stock: string;
  price: number;
  brand: string;
  description: string;
  category: string;
  images: string[];
};
export default async function Page() {
  const products = await GetProduct();
  return (
    <div>
      <ProductList productList={products} title="All Products" />
    </div>
  );
}
