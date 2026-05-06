import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductCard({ product, limit }: { product: any; limit: number }) {
  return (
    <Card>
      <CardHeader className="p-0 h-full w-full">
        <Link href={`products/${product.id}`}>
          <Image
            src={product.images?.[0]?.img_url}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </Link>
      </CardHeader>

      <CardContent className="space-y-2">
        {/* Product Name */}
        <h1 className="font-semibold text-lg">{product.name}</h1>

        {/* Price */}
        <p className="">{product.price} AFN</p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-gray-700">{product.rating ?? 0}/5</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
