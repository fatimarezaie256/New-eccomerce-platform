export async function GetProduct() {
  const res = await fetch("http://localhost:8000/api/products");
  const response = await res.json();

  return response.data.data;
}

export async function getAllPrpducts(url: string) {
  const data = await fetch(url);
  const response = await Response.json;
  return response;
}
