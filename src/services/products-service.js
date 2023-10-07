import apiFetch from "./api-fetch";

export function getProducts() {
  return apiFetch("/products");
}

export function createProducts(productData){
  return apiFetch("/products", { body: productData});
}

export function deleteProduct(id) {
  return apiFetch(`/products/${id}`, { method: "DELETE" });
}

export function editProduct({id,productData}) {
  return apiFetch(`/products/${id}`, { method: "PATCH" ,body: productData });
}
