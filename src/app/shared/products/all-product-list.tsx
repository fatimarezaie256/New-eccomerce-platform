import { Button } from "@/components/ui/button";
import ProductCard from "./product-cart";
import Link from "next/link";

type ProductListProps = {
  title?: string;
  productList?: any[];
};

export default function ProductList({
  limit,
  productList,
  title,
}: {
  limit?: number;
  productList: any;
  title?: string;
}) {
  const totalPage = productList.meta.last_page;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title ? title : "Newest Arrivals"}</h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productList.length > 0 ? (
          productList.map((product: any) => (
            <ProductCard limit={4} product={product} key={product.id} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
      <div className="w-full flex my-4 justify-center">
        <Button>
          <Link href="/products">View All Products</Link>
        </Button>
        {/* {productList.data.} */}
      </div>
    </div>
  );
}
