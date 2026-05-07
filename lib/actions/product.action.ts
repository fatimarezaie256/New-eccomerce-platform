export async function GetProduct() {
  const res = await fetch("http://127.0.0.1:8000/api/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const response = await res.json();

  return response.data.data;
}

export async function getAllPrpducts(url: string) {
  const data = await fetch(url);
  const response = await Response.json;
  return response;
}
