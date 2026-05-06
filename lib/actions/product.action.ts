export async function GetProduct() {
  const res = await fetch("http://localhost:8000/api/products");
  const response = await res.json();

  return response.data.data;
}
