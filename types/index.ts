type products = {
  id: number;
  name: string;
  price: number;
  stock: number;
};
type image = {
  id: number;
  imageable_type: string;
  imageable_id: number;
  img_url: string;
};

type ProductDetails = {
  id: number;
  description: string;
  brand: string;
  category: string;
  product_id: string;
};

type productInfo = image & ProductDetails & products;
