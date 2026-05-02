import { GetProduct } from "../../../../actions/product.action";

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
  const data = await GetProduct();
  // console.log(data);
  return (
    <div>
      {data.map((pro, index) => (
        <h1 key={index}>{pro.name}</h1>
      ))}
    </div>
  );
}
