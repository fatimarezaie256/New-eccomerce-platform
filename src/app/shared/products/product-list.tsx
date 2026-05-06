import ProductCard from "./product-cart";

type ProductListProps = {
  title?: string;
  productList?: any[];
};

export default function ProductList({
  title,
  productList = [],
}: ProductListProps) {
  return (
    <div>
      <h2 className="h2-bold mb-4">{title ? title : "New Products"}</h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productList.length > 0 ? (
          productList.map((product: any) => (
            <ProductCard limit={4} product={product} key={product.id} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
