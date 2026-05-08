"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "./product-cart";
import { getAllPrpducts } from "../../../../lib/actions/product.action";

function ProductList({
  title,
}: {
  limit?: number;
  productList: any;
  title?: string;
}) {
  const [link, setLink] = useState("http://127.0.0.1:8000/api/products?page=1");

  const [list, setList] = useState<any>(null);

  useEffect(() => {
    async function getData() {
      const products = await getAllPrpducts(link);
      setList(products);
    }

    getData();
  }, [link]);

  if (!list?.data) {
    return null;
  }

  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title ? title : "New Arrivals"}</h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list.data.map((product: any) => (
          <ProductCard key={product.id} product={product} limit={4} />
        ))}
      </div>

      <div className="w-full max-w-sm mx-auto overflow-x-auto flex justify-between items-center mt-5">
        {list?.links?.map((link: any) => (
          <Button
            onClick={() =>
              setLink(
                link.url
                  ? link.url
                  : `http://127.0.0.1:8000/api/products?page=${list.current_page}`,
              )
            }
            key={link.label}
            variant={link.active ? "default" : "outline"}
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
